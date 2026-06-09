---
created: 2026-06-09
updated: 2026-06-09
udc: 004.8:005.1
tags: [release, wiki-lock, v1.3]
---

## 2026-06-09锛氭枃浠堕攣绯荤粺鍙戝竷锛坴1.3锛?
### 鑳屾櫙

浠?claude-obsidian 鐨?wiki-lock.sh 鍊熼壌锛屽疄鐜拌法骞冲彴鏂囦欢閿佹満鍒讹紝娑堥櫎澶?writer 骞跺彂鍐欏叆鍚屼竴绗旇鏃剁殑鏁版嵁绔炰簤椋庨櫓銆?
### 浜や粯娓呭崟

| 缁勪欢 | 璇存槑 |
|------|------|
| _meta/scripts/wiki-lock.py | 璺ㄥ钩鍙?Python 閿佽剼鏈紙acquire/release/list/clear-stale/peek锛?|
| 	ests/test_wiki_lock.py | 17 椤瑰崟鍏冩祴璇曞叏閮ㄩ€氳繃 |
| KOS-Compile SKILL.md锛堜笁骞冲彴锛?| 骞跺彂瀹夊叏绔犺妭 + acquire/release 妯″紡 |
| KOS-Triage SKILL.md锛堜笁骞冲彴锛?| 骞跺彂瀹夊叏绔犺妭 + acquire/release 妯″紡 |
| AGENTS.md | 浼氳瘽寮€濮嬫竻娈嬬暀閿?+ 缁撴潫閲婃斁妫€鏌?|
| 鏋舵瀯鏂囨。 | 鏂囦欢閿佺姸鎬佹洿鏂颁负 鉁?宸插疄鐜?|

### 鏍稿績璁捐

- 閿佹枃浠? _meta/.locks/<sha1(path)>.lock
- 鍘熷瓙鍒涘缓: os.open(O_CREAT | O_EXCL)
- 杩囨湡闃堝€? 60s锛坅cquire锛? 3600s锛坈lear-stale锛?- 鍏冮攣: 鐩綍閿侊紙os.mkdir 璺ㄥ钩鍙板師瀛愶級

### 褰卞搷鑼冨洿

- 鏂板 2 涓枃浠讹紙_meta/scripts/wiki-lock.py, tests/test_wiki_lock.py锛?- 淇敼 7 涓枃浠讹紙AGENTS.md, 鏋舵瀯鏂囨。, 涓夊钩鍙?Compile + Triage SKILL, 椤圭洰 README锛?- 鎵€鏈?AI Agent 鍐欏叆鎿嶄綔鍓嶅繀椤?acquire 閿?