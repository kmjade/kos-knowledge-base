#!/usr/bin/env python3
"""
test_wiki_lock.py — unit tests for scripts/wiki-lock.py.

Hermetic: creates a throwaway vault under tempfile, no network, no external
deps beyond Python stdlib. Covers all 15 test scenarios from TASK-02.

Usage:
    python -m unittest tests/test_wiki_lock.py -v
    python tests/test_wiki_lock.py          (standalone)
"""

import os
import sys
import tempfile
import time
import unittest

# Allow running from vault root
SCRIPT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

# Import the wiki-lock module by file path
import importlib.util

_LOCK_MODULE_PATH = os.path.join(SCRIPT_DIR, "scripts", "wiki-lock.py")
_spec = importlib.util.spec_from_file_location("wiki_lock", _LOCK_MODULE_PATH)
wl = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(wl)


class TestWikiLock(unittest.TestCase):
    """Test suite for wiki-lock.py — hermetic sandbox per test."""

    def setUp(self):
        """Create a throwaway vault with _meta/.locks/ directory."""
        self._sandbox = tempfile.mkdtemp(prefix="wiki-lock-test-")
        locks_dir = os.path.join(self._sandbox, "_meta", ".locks")
        os.makedirs(locks_dir, exist_ok=True)
        # Override vault root for the module
        self._orig_vault = wl.VAULT_ROOT
        self._orig_lock_dir = wl.LOCK_DIR
        wl.VAULT_ROOT = self._sandbox
        wl.LOCK_DIR = os.path.join(self._sandbox, wl.LOCK_DIR_REL)
        # Also set env var for any subprocess calls (not used in direct calls)
        self._orig_env = os.environ.get("WIKI_LOCK_VAULT")
        os.environ["WIKI_LOCK_VAULT"] = self._sandbox

    def tearDown(self):
        """Clean up sandbox and restore module globals."""
        wl.VAULT_ROOT = self._orig_vault
        wl.LOCK_DIR = self._orig_lock_dir
        if self._orig_env is None:
            os.environ.pop("WIKI_LOCK_VAULT", None)
        else:
            os.environ["WIKI_LOCK_VAULT"] = self._orig_env
        import shutil
        shutil.rmtree(self._sandbox, ignore_errors=True)

    # ── helpers ──────────────────────────────────────────────────────────

    def _rel(self, path: str) -> str:
        """Normalize a vault-relative path for the test sandbox."""
        return path.replace("/", os.sep)

    def _acquire(self, path: str, stale_after: int = 60) -> int:
        """Call cmd_acquire under meta-lock, return exit code."""
        return wl._with_meta_lock(wl.cmd_acquire, self._rel(path), stale_after)

    def _release(self, path: str) -> int:
        """Call cmd_release under meta-lock, return exit code."""
        return wl._with_meta_lock(wl.cmd_release, self._rel(path))

    def _list_raw(self) -> str:
        """Capture list output. Returns stdout string."""
        from io import StringIO
        captured = StringIO()
        old_stdout = sys.stdout
        sys.stdout = captured
        try:
            wl._with_meta_lock(wl.cmd_list)
        finally:
            sys.stdout = old_stdout
        return captured.getvalue().strip()

    def _peek_raw(self, path: str) -> str:
        """Capture peek output."""
        from io import StringIO
        captured = StringIO()
        old_stdout = sys.stdout
        sys.stdout = captured
        try:
            wl.cmd_peek(self._rel(path))
        finally:
            sys.stdout = old_stdout
        return captured.getvalue().strip()

    # ── T1: acquire fresh path ───────────────────────────────────────────
    def test_acquire_fresh(self):
        """T1: acquire on a fresh path returns 0"""
        rc = self._acquire("wiki/concepts/Foo.md")
        self.assertEqual(rc, 0)

    # ── T2: second acquire while fresh returns 75 ────────────────────────
    def test_acquire_while_held(self):
        """T2: second acquire while lock is fresh returns 75"""
        self._acquire("wiki/concepts/Foo.md")
        rc = self._acquire("wiki/concepts/Foo.md")
        self.assertEqual(rc, 75)

    # ── T3: peek shows lock ──────────────────────────────────────────────
    def test_peek_shows_held(self):
        """T3: peek on a locked path includes the path in output"""
        self._acquire("wiki/concepts/Foo.md")
        output = self._peek_raw("wiki/concepts/Foo.md")
        self.assertIn("Foo", output)

    # ── T4: list shows the held lock ─────────────────────────────────────
    def test_list_shows_lock(self):
        """T4: list output includes the locked path"""
        self._acquire("wiki/concepts/Foo.md")
        output = self._list_raw()
        self.assertIn("Foo", output)

    # ── T5: release frees the lock ───────────────────────────────────────
    def test_release_clears_list(self):
        """T5: after release, list output is empty"""
        self._acquire("wiki/concepts/Foo.md")
        self._release("wiki/concepts/Foo.md")
        output = self._list_raw()
        self.assertEqual(output, "")

    # ── T6: re-acquire after release succeeds ────────────────────────────
    def test_reacquire_after_release(self):
        """T6: re-acquire after release returns 0"""
        self._acquire("wiki/concepts/Foo.md")
        self._release("wiki/concepts/Foo.md")
        rc = self._acquire("wiki/concepts/Foo.md")
        self.assertEqual(rc, 0)
        self._release("wiki/concepts/Foo.md")

    # ── T7: peek on unheld path ──────────────────────────────────────────
    def test_peek_unheld(self):
        """T7: peek on an unheld path returns 'unheld'"""
        output = self._peek_raw("wiki/concepts/Never.md")
        self.assertEqual(output, "unheld")

    # ── T8: age-based stale reap ─────────────────────────────────────────
    def test_age_based_reap(self):
        """T8: acquire with stale_after=1, wait for epoch tick, re-acquire succeeds"""
        rc = self._acquire("wiki/concepts/Aged.md", stale_after=1)
        self.assertEqual(rc, 0)
        # Wait until at least 2 full seconds have passed (epoch granularity is 1s)
        deadline = time.time() + 2.5
        while time.time() < deadline:
            time.sleep(0.1)
        rc = self._acquire("wiki/concepts/Aged.md", stale_after=1)
        self.assertEqual(rc, 0)
        self._release("wiki/concepts/Aged.md")

    # ── T9: clear-stale removes all ──────────────────────────────────────
    def test_clear_stale_reaps_all(self):
        """T9: clear-stale --max-age 0 removes all locks"""
        self._acquire("wiki/concepts/Reap.md")
        from io import StringIO
        captured = StringIO()
        old_stdout = sys.stdout
        sys.stdout = captured
        try:
            wl._with_meta_lock(wl.cmd_clear_stale, 0)
        finally:
            sys.stdout = old_stdout
        removed = int(captured.getvalue().strip())
        self.assertGreaterEqual(removed, 1)
        output = self._list_raw()
        self.assertEqual(output, "")

    # ── T10: absolute path rejected ──────────────────────────────────────
    def test_absolute_path_rejected(self):
        """T10: acquire with absolute path returns 4"""
        with self.assertRaises(SystemExit) as ctx:
            wl.cmd_acquire("/etc/passwd", 60)
        self.assertEqual(ctx.exception.code, 4)

    # ── T11: dotdot path rejected ────────────────────────────────────────
    def test_dotdot_path_rejected(self):
        """T11: acquire with ../ path returns 4"""
        with self.assertRaises(SystemExit) as ctx:
            wl.cmd_acquire("../escape.md", 60)
        self.assertEqual(ctx.exception.code, 4)

    # ── T12: empty path rejected ─────────────────────────────────────────
    def test_empty_path_rejected(self):
        """T12: acquire with empty path returns 4"""
        with self.assertRaises(SystemExit) as ctx:
            wl.cmd_acquire("", 60)
        self.assertEqual(ctx.exception.code, 4)

    # ── T13: newline path rejected ───────────────────────────────────────
    def test_newline_path_rejected(self):
        """T13: acquire with newline in path returns 4"""
        with self.assertRaises(SystemExit) as ctx:
            wl.cmd_acquire("wiki/concepts/Foo\nbar.md", 60)
        self.assertEqual(ctx.exception.code, 4)

    # ── T14: carriage return path rejected ───────────────────────────────
    def test_cr_path_rejected(self):
        """T14: acquire with CR in path returns 4"""
        with self.assertRaises(SystemExit) as ctx:
            wl.cmd_acquire("wiki/concepts/Foo\rbar.md", 60)
        self.assertEqual(ctx.exception.code, 4)

    # ── T15: 10 unique paths all acquire cleanly ─────────────────────────
    def test_ten_unique_paths(self):
        """T15: 10 unique paths all acquire cleanly"""
        for i in range(1, 11):
            rc = self._acquire(f"wiki/stress/page-{i}.md")
            self.assertEqual(rc, 0, f"failed on page {i}")
        output = self._list_raw()
        lines = [l for l in output.split("\n") if l]
        self.assertEqual(len(lines), 10)
        # Clean up
        from io import StringIO
        captured = StringIO()
        old_stdout = sys.stdout
        sys.stdout = captured
        try:
            wl._with_meta_lock(wl.cmd_clear_stale, 0)
        finally:
            sys.stdout = old_stdout

    # ── T16: release is idempotent ───────────────────────────────────────
    def test_release_idempotent(self):
        """T16: releasing an unheld path does not error"""
        rc = self._release("wiki/concepts/Ghost.md")
        self.assertEqual(rc, 0)

    # ── T17: lockfile content format ─────────────────────────────────────
    def test_lockfile_content(self):
        """T17: lockfile contains pid, epoch, and original path"""
        self._acquire("wiki/concepts/Format.md")
        lf = wl.lock_path(self._rel("wiki/concepts/Format.md"))
        self.assertTrue(os.path.isfile(lf))
        record = wl.read_lockfile(lf)
        self.assertIsNotNone(record)
        pid, epoch, rpath = record
        self.assertIsInstance(pid, int)
        self.assertIsInstance(epoch, int)
        self.assertIn("Format.md", rpath)
        self._release("wiki/concepts/Format.md")

    # ── T18: concurrent meta-lock serialization ──────────────────────────

if __name__ == "__main__":
    unittest.main(verbosity=2)
