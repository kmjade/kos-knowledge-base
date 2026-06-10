#!/usr/bin/env python3
"""
sync-skills.py — N1 技能体系收敛 · 同步契约（单文件权威定义）
============================================================================
将 _meta/skills/canon/ 同步到各平台 skill 目录。

设计文档: _meta/design/2026-06-10-N1-技能体系收敛-架构设计.md
决策记录: _meta/design/2026-06-10-N1-技能体系收敛-头脑风暴.md#决策记录（2026-06-10）
============================================================================

一、契约总则
---------------------------------------------------------------------------
1. 方向: canon → platform（单向推）
2. 范围: 注册表 skills.md 中 status: active 的技能
   - retired / frozen 技能不操作（原地保留）
3. 差异检测: git diff --quiet（避免 CRLF/LF 误判）
4. 备份: 覆盖前备份到 OS temp 目录（避免 git 污染）
5. 安全: 覆盖前交互确认（--force 跳过确认）
6. 语言: Python 3（跨平台 + UTF-8 中文原生支持）

二、六项决策（2026-06-10 定稿）
---------------------------------------------------------------------------
| # | 维度       | 决策                          | 理由               |
|---|------------|-------------------------------|--------------------|
| 1 | 方向性     | 单向推 + 警告                 | 简单安全           |
| 2 | 备份       | git stash + OS temp 双保险    | 避 git 污染(W01)   |
| 3 | 哈希       | git diff --quiet              | 避 CRLF 误判(W03)  |
| 4 | 冻结处理   | 注册表驱动，只操作 active      | 单真相源           |
| 5 | 触发       | 仅手动                         | 初期简单可控       |
| 6 | 语言       | Python 3                       | 跨平台+中文+一致   |

三、注册表格式（_meta/skills/skills.md）
---------------------------------------------------------------------------
技能注册表包含以下列用于同步决策:

| 技能        | 家族   | 目录名         | 状态     | 全平台 | 参考文件      |
|-------------|--------|----------------|----------|--------|---------------|
| kos         | KOS    | kos/           | active   | ✅     | —             |
| kos-triage  | KOS    | kos-triage/    | active   | ✅     | —             |
| ...         | ...    | ...            | ...      | ...    | ...           |
| ah-read     | AH     | ah-read/       | frozen   | ❌     | assets/refs   |

状态值: active | retired | frozen

四、平台目录映射
---------------------------------------------------------------------------
| 平台    | 路径                          | 当前状态 |
|---------|-------------------------------|----------|
| opencode| .opencode/skills/             | 已部署   |
| claude  | .claude/skills/               | 需补齐   |
| codex   | .codex/skills/                | 需补齐   |
| flownote| .flownote/skills/             | 暂缓操作 |

五、使用方法
---------------------------------------------------------------------------
  python scripts/sync-skills.py                        # 同步全部
  python scripts/sync-skills.py --target claude        # 仅 Claude
  python scripts/sync-skills.py --dryrun               # 预览变更
  python scripts/sync-skills.py --force                # 跳过确认覆盖
  python scripts/sync-skills.py --cleanup              # 清理旧备份

六、工作流
---------------------------------------------------------------------------
1. 读取注册表 → 获取 active 技能清单
2. 遍历每个 (技能, 平台) 对:
   a. git diff --quiet canon/{skill} platform/{skill}
      - 一致 → 跳过
      - 目标不存在 → 直接复制
      - 不一致 → 交互确认（--force 跳过确认）
        → 备份到 $TEMP/sync-backup/{timestamp}/{skill}/
        → 复制 canon → platform
3. 写入 _logs/operations/maintenance.md
4. --cleanup: 删除 $TEMP/sync-backup/ > 7 天

七、错误处理
---------------------------------------------------------------------------
| 错误             | 行为                  | 恢复                  |
|------------------|-----------------------|-----------------------|
| 源文件不存在     | WARNING, 跳过         | 检查 canon 目录       |
| 目标目录不可写   | ERROR, 终止该平台     | 检查权限              |
| git diff 失败    | WARNING, 全量复制     | 确认 git 仓库状态     |
| 备份写入失败     | ERROR, 不覆盖         | 检查磁盘空间          |
| 中途中断         | 已写不变, 未写跳过    | 重新运行 sync         |
============================================================================
"""

import argparse
import datetime
import difflib
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

# ── 路径常量 ──────────────────────────────────────────────────────────────
# Windows GBK console fix
if sys.stdout.encoding and sys.stdout.encoding.upper() in ("GBK", "GB2312", "CP936"):
    sys.stdout.reconfigure(encoding="utf-8")

VAULT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
CANON_DIR = os.path.join(VAULT_ROOT, "_meta", "skills", "canon")
REGISTRY = os.path.join(VAULT_ROOT, "_meta", "skills", "skills.md")
LOG_FILE = os.path.join(VAULT_ROOT, "_logs", "operations", "maintenance.md")

PLATFORMS = {
    "opencode": os.path.join(VAULT_ROOT, ".opencode", "skills"),
    "claude": os.path.join(VAULT_ROOT, ".claude", "skills"),
    "codex": os.path.join(VAULT_ROOT, ".codex", "skills"),
    # "flownote": — 暂缓操作
}

# ── 注册表解析 ────────────────────────────────────────────────────────────
def parse_registry(path):
    """解析 skills.md 注册表，返回活跃技能清单。

    注册表格式:
    | 技能 | 家族 | 目录名 | 状态 | 全平台 | 参考文件 |
    |------|:----:|:------:|:----:|:------:|:--------:|
    | kos | KOS | kos/ | active | ✅ | — |

    Returns:
        list[dict]: [{name, family, dir, status, all_platforms, refs}]
    """
    if not os.path.isfile(path):
        print(f"[ERROR] 注册表不存在: {path}")
        sys.exit(1)

    skills = []
    in_table = False

    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            stripped = line.strip()
            # 检测表格开始 (含 |---|:---:|---| 的多列分隔行)
            if re.match(r"^\|[\s\-:|]+\|$", stripped):
                in_table = True
                continue
            if not in_table:
                continue
            # 表格结束 (空行或非 | 开头) — 仅结束当前表，不退出循环
            if not stripped.startswith("|"):
                in_table = False
                continue

            cells = [c.strip() for c in stripped.strip("|").split("|")]
            if len(cells) < 6:
                continue

            skill = {
                "name": cells[0],
                "family": cells[1],
                "dir": cells[2].rstrip("/"),
                "status": cells[3],
                "refs": cells[5] if len(cells) > 5 else "",
            }
            skills.append(skill)

    return skills


# ── Git 差异检测 ─────────────────────────────────────────────────────────
def git_diff_quiet(canon_path, platform_path):
    """用 git diff --quiet 检测两个文件是否一致。

    Returns:
        True  → 一致
        False → 有差异或文件缺失
    """
    if not os.path.isfile(platform_path):
        return False  # 目标不存在，视为有差异

    # 用相对路径，确保 git 在 vault root 下工作
    rel_canon = os.path.relpath(canon_path, VAULT_ROOT)
    rel_platform = os.path.relpath(platform_path, VAULT_ROOT)

    try:
        result = subprocess.run(
            ["git", "diff", "--quiet", "--no-index", rel_canon, rel_platform],
            cwd=VAULT_ROOT,
            capture_output=True,
            text=True,
        )
        return result.returncode == 0
    except FileNotFoundError:
        print("[WARNING] git 不可用，降级为全量复制模式")
        return False  # 无 git 时退化到全量复制
    except Exception as e:
        print(f"[WARNING] git diff 失败 ({e})，降级为全量复制")
        return False


# ── 备份 ──────────────────────────────────────────────────────────────────
def backup_file(src_path, skill_name):
    """复制文件到 OS temp 备份目录。

    Returns:
        str | None: 备份路径，失败返回 None
    """
    timestamp = datetime.datetime.now().strftime("%Y%m%dT%H%M%S")
    backup_dir = os.path.join(tempfile.gettempdir(), "sync-backup", timestamp, skill_name)

    try:
        os.makedirs(backup_dir, exist_ok=True)
        dest = os.path.join(backup_dir, os.path.basename(src_path))
        shutil.copy2(src_path, dest)
        print(f"  → 已备份到: {dest}")
        return dest
    except (OSError, shutil.Error) as e:
        print(f"  [ERROR] 备份失败: {e}")
        return None


# ── 清理旧备份 ────────────────────────────────────────────────────────────
def cleanup_old_backups(days=7):
    """清理 $TEMP/sync-backup/ 中超过指定天数的备份。"""
    backup_root = os.path.join(tempfile.gettempdir(), "sync-backup")
    if not os.path.isdir(backup_root):
        print("[INFO] 无备份目录可清理")
        return

    now = datetime.datetime.now()
    cutoff = now - datetime.timedelta(days=days)
    removed = 0

    for ts_dir in os.listdir(backup_root):
        ts_path = os.path.join(backup_root, ts_dir)
        if not os.path.isdir(ts_path):
            continue
        try:
            ts_time = datetime.datetime.strptime(ts_dir, "%Y%m%dT%H%M%S")
            if ts_time < cutoff:
                shutil.rmtree(ts_path)
                removed += 1
                print(f"  🗑️ 清理: {ts_path}")
        except ValueError:
            continue

    if removed == 0:
        print("[INFO] 无过期备份需要清理")
    else:
        print(f"[OK] 已清理 {removed} 个过期备份目录")


# ── 交互确认 ──────────────────────────────────────────────────────────────
def confirm_overwrite(skill_name, platform, file_path):
    """交互式确认是否覆盖。

    在 --force 模式下自动返回 True。
    """
    print(f"\n  ⚠️  文件已被修改: [{platform}] {skill_name}/{os.path.basename(file_path)}")
    while True:
        response = input("  覆盖？[Y/n] ").strip().lower()
        if response in ("", "y", "yes"):
            return True
        elif response in ("n", "no"):
            return False


# ── 核心同步逻辑 ──────────────────────────────────────────────────────────
def sync_skill_to_platform(skill, platform, platform_dir, dryrun=False, force=False):
    """将单个技能同步到一个平台。

    Returns:
        dict: {action: "skip"|"copy"|"overwrite"|"error", detail: str}
    """
    skill_dir = skill["dir"]
    canon_skill = os.path.join(CANON_DIR, skill_dir)
    target_skill = os.path.join(platform_dir, skill_dir)

    if not os.path.isdir(canon_skill):
        return {"action": "error", "detail": f"canon 目录不存在: {canon_skill}"}
    
    if not os.path.isdir(target_skill):
        if dryrun:
            return {"action": "copy", "detail": f"目标目录不存在（dryrun 跳过）"}
        os.makedirs(target_skill, exist_ok=True)

    # 遍历 canon 中的文件
    for root, dirs, files in os.walk(canon_skill):
        rel_path = os.path.relpath(root, canon_skill)
        target_root = os.path.join(target_skill, rel_path) if rel_path != "." else target_skill

        for fname in files:
            canon_file = os.path.join(root, fname)
            target_file = os.path.join(target_root, fname)

            # git diff --quiet 检测差异
            is_same = git_diff_quiet(canon_file, target_file)

            if is_same:
                continue  # 一致 → 跳过

            # 目标不存在 → 直接复制
            if not os.path.isfile(target_file):
                if dryrun:
                    print(f"  [DRYRUN] → 复制: {skill_dir}/{fname}")
                    continue
                os.makedirs(target_root, exist_ok=True)
                shutil.copy2(canon_file, target_file)
                print(f"  ✅ 复制: [{platform}] {skill_dir}/{fname}")
                continue

            # 目标存在且不一致 → 需要覆盖
            if dryrun:
                print(f"  [DRYRUN] ⚠️  需覆盖: [{platform}] {skill_dir}/{fname}")
                continue

            # 交互确认
            if not force and not confirm_overwrite(skill_dir, platform, target_file):
                print(f"  ⏭️  跳过: [{platform}] {skill_dir}/{fname}")
                continue

            # 备份
            backup_path = backup_file(target_file, skill_dir)
            if backup_path is None:
                print(f"  [ERROR] 备份失败，不覆盖: [{platform}] {skill_dir}/{fname}")
                continue

            # 覆盖
            shutil.copy2(canon_file, target_file)
            print(f"  ✅ 覆盖: [{platform}] {skill_dir}/{fname}")

    return {"action": "ok"}


# ── 日志写入 ──────────────────────────────────────────────────────────────
def write_log(entry):
    """追加一条操作日志到 maintenance.md。"""
    os.makedirs(os.path.dirname(LOG_FILE), exist_ok=True)
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write(f"\n## {entry['timestamp']} — {entry['title']}\n")
        for line in entry["body"]:
            f.write(f"- {line}\n")
        f.write(f"- **状态**: {entry['status']}\n")


# ── 主流程 ────────────────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(
        description="N1 技能同步契约 — 将 _meta/skills/canon/ 部署到各平台",
    )
    parser.add_argument(
        "--target",
        choices=list(PLATFORMS.keys()) + ["all"],
        default="all",
        help="目标平台（默认: all）",
    )
    parser.add_argument(
        "--dryrun",
        action="store_true",
        help="仅预览变更，不执行写入",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="跳过交互确认，直接覆盖",
    )
    parser.add_argument(
        "--cleanup",
        action="store_true",
        help="仅清理过期备份并退出",
    )
    args = parser.parse_args()

    # 仅清理模式
    if args.cleanup:
        cleanup_old_backups()
        return

    # 读取注册表
    print("📖 读取注册表...")
    all_skills = parse_registry(REGISTRY)
    active_skills = [s for s in all_skills if s["status"] == "active"]
    print(f"  共 {len(all_skills)} 技能，active: {len(active_skills)}")

    # 确定目标平台
    targets = list(PLATFORMS.keys()) if args.target == "all" else [args.target]

    # 同步
    log_entries = []
    for platform in targets:
        platform_dir = PLATFORMS[platform]
        if not os.path.isdir(platform_dir):
            print(f"\n[WARNING] 平台目录不存在，跳过: {platform_dir}")
            continue

        print(f"\n{'='*50}")
        print(f"📦 同步到: [{platform}] {platform_dir}")
        print(f"{'='*50}")

        for skill in active_skills:
            result = sync_skill_to_platform(
                skill, platform, platform_dir,
                dryrun=args.dryrun, force=args.force,
            )

    # 日志
    timestamp = datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S")
    log_entry = {
        "timestamp": timestamp,
        "title": f"sync-skills ({args.target})",
        "body": [
            f"操作: {'dryrun' if args.dryrun else '同步'}",
            f"目标: {args.target}",
            f"active 技能数: {len(active_skills)}",
            f"force: {args.force}",
        ],
        "status": "dryrun" if args.dryrun else "success",
    }
    if not args.dryrun:
        write_log(log_entry)

    print(f"\n{'='*50}")
    print("✅ 同步完成" if not args.dryrun else "🔍 Dryrun 结束（未写入任何文件）")


if __name__ == "__main__":
    main()
