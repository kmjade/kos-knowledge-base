---
created: 2026-06-09
updated: 2026-06-09
udc: 001.8:025.4:004.8
tags: [architecture, kos, design, integration, v3]
status: current
---

# KOS-LLM-Wiki 闆嗘垚绯荤粺鏋舵瀯璇存槑 v3.0

> KOS_LLM-Wiki Integrated System 鈥?Architecture Specification v3.0
> 鏂囨。鐘舵€侊細v3.0 路 2026-06-09
> 鏁村悎锛歅ARA + UDC + LLM-Wiki + 涓夊钩鍙版妧鑳斤紙Claude Code / Codex CLI / OpenCode锛?
---

## 鐗堟湰鍙樻洿

| 鐗堟湰 | 鏃ユ湡 | 鍙樻洿鍐呭 |
|------|------|---------|
| v1.0 | 鈥?| 鍒濆鏋舵瀯璁捐 |
| v2.0 | 2026-06-06 | LifeOS 脳 LLM-Wiki 铻嶅悎锛孋odex 閫傞厤锛屼笁璇█闀滃儚 |
| **v3.0** | **2026-06-09** | **涓夊钩鍙?Skill 鏋舵瀯銆並OS 寮曟搸鎶€鑳藉寲銆乧laude-obsidian 鍊熼壌闆嗘垚** |
| **v3.0 (鏇存柊)** | **2026-06-09** | **鏂囦欢閿?(wiki-lock.py) 瀹炵幇銆佸苟鍙戝畨鍏ㄦ満鍒跺紩鍏ャ€乻cripts/ + tests/ 鐩綍鏂板** |
| **v3.0 (鏇存柊)** | **2026-06-09** | **Canvas 鍙灞傚疄鐜帮紙璁捐doc + 涓夊钩鍙?SKILL.md + _attachments/ 缁撴瀯锛?* |

---

## 1. 绯荤粺姒傝堪

KOS-LLM-Wiki 鏄竴涓瀺鍚堝洓绉嶇煡璇嗙粍缁囨柟娉曠殑涓汉鐭ヨ瘑绠＄悊绯荤粺锛屽苟鍦ㄥ骞冲彴 AI Agent 椹卞姩涓嬭繍琛屻€?
| 鏂规硶 | 瑙掕壊 | 灞傜骇 |
|------|------|------|
| **PARA** (Tiago Forte) | 鎿嶄綔涓婁笅鏂?| 鏂囦欢澶圭骇鍒?|
| **UDC** (Universal Decimal Classification) | 瀛︾鍒嗙被 | 绗旇鍏冩暟鎹?|
| **LLM-Wiki** (Karpathy Pattern) | 鐭ヨ瘑棰嗗煙 | 鍐呭涓婚 |
| **涓夊钩鍙?Skills** | AI 鑷姩鍖?| 鍙墽琛屾妧鑳?|

### 鏍稿績鐩爣

1. **鍙搷浣滄€?* 鈥?鐭ヨ瘑鏈嶅姟浜庤鍔紝姣忎釜绗旇閮芥湁鏄庣‘鐨勪笂涓嬫枃褰掑睘
2. **鍙彂鐜版€?* 鈥?UDC 鍒嗙被 + 鏍囩 + 鍙屽悜閾炬帴涓夐噸鏈哄埗
3. **鍙紨鍖栨€?* 鈥?绯荤粺闅忚鐭ユ繁鍖栧彲閲嶆瀯锛屼笉渚濊禆鍗曚竴宸ュ叿
4. **澶氳瑷€鎬?* 鈥?绠€涓?/ English / 绻佷腑 涓夎瑷€鍚屾
5. **鍙拷婧€?* 鈥?鎵€鏈?AI Agent 鎿嶄綔閫氳繃 `_logs/` 鍏ㄧ▼瀹¤
6. **涓夊钩鍙板吋瀹?* 鈥?Claude Code / Codex CLI / OpenCode 鍏变韩鎶€鑳戒綋绯?
---

## 2. 绯荤粺鏋舵瀯

### 2.1 鍥涘眰妯″瀷

```
鈹屸攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?鈹?                   瀵艰埅灞?(Navigation)                     鈹?鈹?   Home.md 路 鎬荤储寮?路 鏍囩绯荤粺 路 鍥捐氨瑙嗗浘 路 閾炬帴缃戠粶      鈹?鈹溾攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?鈹?                   鍐呭灞?(Content)                       鈹?鈹?  PARA 鐩綍缁撴瀯 + UDC 鍏冩暟鎹?+ Markdown 绗旇              鈹?鈹?  绠€浣撲腑鏂?(/) 路 English (en/) 路 绻侀珨涓枃 (zh-tw/)        鈹?鈹溾攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?鈹?                   瀹¤灞?(Audit)                         鈹?鈹?  _logs/ 路 浼氳瘽鏃ュ織 路 鎿嶄綔鏃ュ織 路 浠诲姟杩借釜 路 鎶ュ憡          鈹?鈹?  涓夊钩鍙?AI Agent 鎿嶄綔鍏ㄧ▼璁板綍                             鈹?鈹溾攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?鈹?                   鎶€鑳藉眰 (Skills)                        鈹?鈹?  .claude/skills/ 路 .codex/skills/ 路 .opencode/skills/   鈹?鈹?  KOS 寮曟搸 + Obsidian 鍙傝€冩妧鑳?                           鈹?鈹溾攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?鈹?                   鍩虹灞?(Foundation)                    鈹?鈹?  Obsidian 路 Git 路 Markdown 路 YAML Frontmatter           鈹?鈹?  妯℃澘绯荤粺 路 Dataview 路 AGENTS.md 路 涓夊钩鍙伴€傞厤            鈹?鈹斺攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?```

---

## 3. 瀹屾暣鐩綍缁撴瀯

```
/
鈹溾攢鈹€ 0 Inbox/               # 馃摜 鏀朵欢绠憋細寰呭鐞嗙殑涓存椂绗旇涓庣礌鏉?鈹?  鈹斺攢鈹€ Clippings/         #    澶栭儴鍐呭鍓棌
鈹溾攢鈹€ 1 Projects/            # 馃殌 椤圭洰锛氭湁鏄庣‘鐩爣鍜屾埅姝㈡棩鏈熺殑浠诲姟
鈹溾攢鈹€ 2 Areas/               # 馃梽锔?棰嗗煙锛氭寔缁叧娉ㄧ殑璐ｄ换棰嗗煙
鈹溾攢鈹€ 3 Resources/           # 馃摎 璧勬簮锛氫富棰樿祫鏂欎笌鍙傝€冭祫鏂欏簱
鈹溾攢鈹€ 4 Archives/            # 馃梼锔?褰掓。锛氬凡褰掓。鐨勯潪娲昏穬鍐呭
鈹溾攢鈹€ Periodic/              # 馃搮 鍛ㄦ湡绗旇锛堝勾/鏈?鏃ュ垎灞傦級
鈹溾攢鈹€ _logs/                 # 馃暪锔?AI 骞冲彴鎿嶄綔鏃ュ織锛堝璁¤拷韪級
鈹?  鈹溾攢鈹€ sessions/          #   浼氳瘽鏃ュ織
鈹?  鈹溾攢鈹€ operations/        #   鎿嶄綔鏃ュ織锛坱riage/compile/maintenance锛?鈹?  鈹溾攢鈹€ tasks/             #   浠诲姟杩借釜
鈹?  鈹斺攢鈹€ reports/           #   鎶ュ憡涓庣粺璁?鈹溾攢鈹€ _meta/                 # 鈿欙笍 绯荤粺鍏冩暟鎹?鈹?  鈹溾攢鈹€ Templates/         #   绗旇妯℃澘
鈹?  鈹溾攢鈹€ design/            #   璁捐鏂囨。
鈹?  鈹溾攢鈹€ adr/               #   鏋舵瀯鍐崇瓥璁板綍
鈹?  鈹斺攢鈹€ queries/           #   Dataview 鏌ヨ搴?鈹溾攢鈹€ _attachments/          # 馃柤锔?Canvas 鍙灞?鈹?  鈹溾攢鈹€ canvases/          #   .canvas 鐢诲竷鏂囦欢
鈹?  鈹斺攢鈹€ media/             #   鍥剧墖 / PDF 绛夎祫婧?鈹溾攢鈹€ _meta/scripts/               # 馃悕 宸ュ叿鑴氭湰
鈹?  鈹斺攢鈹€ wiki-lock.py       #   鏂囦欢閿侊紙璺ㄥ钩鍙?Python锛?鈹溾攢鈹€ tests/                 # 馃И 娴嬭瘯
鈹?  鈹斺攢鈹€ test_wiki_lock.py  #   鏂囦欢閿佸崟鍏冩祴璇?鈹溾攢鈹€ en/                    # English mirror
鈹溾攢鈹€ zh-tw/                 # 绻侀珨涓枃閺″儚
鈹?鈹溾攢鈹€ .claude/               # Claude Code 閰嶇疆
鈹?  鈹斺攢鈹€ skills/            # KOS 寮曟搸鎶€鑳斤紙7涓級+ canvas + json-canvas
鈹?      鈹溾攢鈹€ kos/           #   缁熶竴鍏ュ彛
鈹?      鈹溾攢鈹€ kos-triage/    #   Inbox 鍒嗘嫞
鈹?      鈹溾攢鈹€ kos-compile/   #   Wiki 缂栬瘧
鈹?      鈹溾攢鈹€ kos-link/      #   閾炬帴鏍￠獙
鈹?      鈹溾攢鈹€ kos-daily/     #   鍛ㄦ湡鍥為【
鈹?      鈹溾攢鈹€ kos-query/     #   鐭ヨ瘑搴撴煡璇?鈹?      鈹斺攢鈹€ canvas/        #   鍙鍖栧弬鑰冨眰
鈹溾攢鈹€ .codex/                # Codex CLI 閰嶇疆
鈹?  鈹斺攢鈹€ skills/            # KOS 寮曟搸鎶€鑳斤紙鍚屼笂锛?鈹溾攢鈹€ .opencode/             # OpenCode 閰嶇疆
鈹?  鈹斺攢鈹€ skills/            # KOS 寮曟搸鎶€鑳斤紙鍚屼笂锛?鈹?鈹溾攢鈹€ AGENTS.md              # AI 琛屼负瑙勮寖锛堜富锛?鈹溾攢鈹€ CLAUDE.md              # Claude Code 蹇€熷弬鑰?鈹溾攢鈹€ Home.md                # 棣栭〉
鈹斺攢鈹€ README.md              # 绯荤粺璇存槑
```

---

## 4. 鎶€鑳戒綋绯诲叏鏅?
### 4.1 KOS 寮曟搸鎶€鑳斤紙v3.0 鏂板锛?
| 鎶€鑳?| 鐩綍 | 鍔熻兘 | 鏉ユ簮 |
|------|------|------|------|
| **kos** | `kos/` | 缁熶竴鍏ュ彛锛屾剰鍥惧垎鍙?| 鏂板缓 |
| **kos-triage** | `kos-triage/` | Inbox 鍥涚淮鍒嗘嫞 | AGENTS.md 瑙勫垯 鈫?Skill |
| **kos-compile** | `kos-compile/` | Wiki 鍏缂栬瘧 | AGENTS.md 瑙勫垯 鈫?Skill |
| **kos-link** | `kos-link/` | 浜旂骇鍋ュ悍妫€鏌?| AGENTS.md 瑙勫垯 鈫?Skill |
| **kos-daily** | `kos-daily/` | 绗旇 + 鍛ㄦ湡鍥為【 | AGENTS.md 瑙勫垯 鈫?Skill |
| **kos-query** | `kos-query/` | 涓夌骇鐭ヨ瘑搴撴煡璇?| AGENTS.md 瑙勫垯 鈫?Skill |
| **canvas** | `canvas/` | 鍙鍖栧弬鑰冨眰 | claude-obsidian 鈫?Skill |

### 4.2 涓変釜鐭ヨ瘑鎹曡幏灞?
| 灞?| 鍚嶇О | 鍔熻兘 | 杈撳嚭 | 瀵瑰簲鎶€鑳?|
|:--:|------|------|:----:|----------|
| L1 | **鏂囨湰缁煎悎** | 瀵硅瘽 鈫?缁撴瀯鍖栨枃鏈煡璇?| `.md` wiki 椤甸潰 | KOS-Compile |
| L2 | **缁撴瀯鍖栫煡璇?* | 鍒嗙被 鈫?绱㈠紩涓庢煡璇?| 绱㈠紩 + Dataview | KOS-Triage + KOS-Query |
| L3 | **鍙鍖栧弬鑰?* | 瑙嗚 鈫?绌洪棿鍏崇郴鐢诲竷 | `.canvas` (JSON Canvas) | Canvas |

### 4.3 Obsidian 鍙傝€冩妧鑳斤紙鏉ヨ嚜 kepano/obsidian-skills锛?
| 鎶€鑳?| 鍔熻兘 | 閮ㄧ讲骞冲彴 |
|------|------|----------|
| obsidian-markdown | Obsidian 璇硶鍙傝€?| `.flownote/` + `.opencode/` |
| obsidian-bases | Obsidian Bases 鍙傝€?| `.flownote/` + `.opencode/` |
| obsidian-cli | Obsidian CLI 宸ュ叿 | `.flownote/` + `.opencode/` |
| defuddle | 缃戦〉鍐呭娓呯悊 | `.flownote/` + `.opencode/` |
| json-canvas | JSON Canvas 鍙傝€?| 涓夊钩鍙?|

---

## 5. 浠?claude-obsidian 鍊熼壌鐨勫叧閿満鍒?
### 5.1 Hooks 浣撶郴鐨勭瓑浠峰疄鐜?
| claude-obsidian Hook | 鏈郴缁熷疄鐜版柟寮?| 鐘舵€?|
|---------------------|--------------|------|
| **SessionStart** | AGENTS.md 浼氳瘽鍗忚锛氬惎鍔ㄦ椂璇?Inbox + 鍏ㄥ眬鐘舵€?| 鉁?宸叉湁 |
| **PostCompact** | hooks.json: PostCompact 鑷姩閲嶈 hot.md + AGENTS.md 鍗忚 | 鉁?宸插疄鐜?|
| **PostToolUse** | hooks.json: Write/Edit 鍚庤拷韪彉鏇存枃浠?鈫?Stop 鏃剁敤浜?hot.md 绮剧‘鎽樿 | 鉁?宸插寮?|
| **Stop** | AGENTS.md 浼氳瘽鍗忚锛氱粨鏉熸椂鍐欐棩蹇?+ 鏇存柊鐘舵€?| 鉁?宸叉湁 |

### 5.2 鐩存帴鍊熼壌鐨勮璁?
| 鐗规€?| 鏉ユ簮 | 鏈郴缁熺姸鎬?| 浼樺厛绾?|
|------|------|-----------|:------:|
| **鏂囦欢閿?(wiki-lock.py)** | claude-obsidian 鈫?鑷疄鐜?| 鉁?宸插疄鐜帮紙_meta/scripts/wiki-lock.py锛?| **P0** |
| **鐑紦瀛?(hot.md)** | claude-obsidian | 鉁?宸插疄鐜?| **P0** |
| **涓夌骇鏌ヨ (Quick/Standard/Deep)** | claude-obsidian | 鉁?宸插疄鐜?| **P1** |
| **Delta 杩借釜 (.manifest.json)** | claude-obsidian | 鉁?鍏ㄧ嚎鎺ュ叆锛? 寮曟搸锛?| **P1** |
| **wiki-fold锛堟棩蹇楁姌鍙狅級** | claude-obsidian | 鉁?杞婚噺瀹炵幇锛?-fold 鍙傛暟锛?| **P2** |
| **Life Agent 杞?SKILL.md** | 鏈郴缁熷垎鏋?| 鉁?涓夊钩鍙?life/SKILL.md | **P2** |
| **Think 妗嗘灦锛?0鍘熷垯锛?* | claude-obsidian | 鉁?宸插疄鐜帮紙鏂瑰悜 B锛氬祵鍏ュ紩鎿?SKILL.md锛?| **P3** |
| **Canvas 鍙灞?* | claude-obsidian | 鉁?宸插疄鐜帮紙璁捐 + 涓夊钩鍙?SKILL.md锛?| **P3** |

---

## 6. UDC 鍒嗙被浣撶郴

### 6.1 鏈郴缁熶娇鐢ㄧ殑 UDC 涓荤被

| UDC 绫诲彿 | 绫荤洰 | 瑕嗙洊鍐呭 |
|----------|------|----------|
| 001.8 | 鐭ヨ瘑缁勭粐涓庣鐞?| PARA 鏂规硶銆並M 绗旇銆佺储寮?|
| 001.8:005 | 鐭ヨ瘑绠＄悊鏂规硶 | PARA 鏂规硶璇﹁堪 |
| 001.8:025.4 | 绱㈠紩涓庡垎绫?| 绱㈠紩浣撶郴 |
| 001.8:004.8 | 鐭ヨ瘑缁勭粐 + AI | LLM 杈呭姪 KM銆丷AG銆丄I 鏃ュ織 |
| 001.8:311 | 鐭ヨ瘑绠＄悊缁熻 | 鏃ュ織鎶ュ憡銆佺粺璁″垎鏋?|
| 004.8 | 浜哄伐鏅鸿兘 / LLM | 鎵€鏈?LLM 鐩稿叧绗旇 |
| 004.8:005.1 | AI 鎿嶄綔瀹¤ | 鎿嶄綔鏃ュ織锛坱riage/compile锛?|
| 004.8:519.6 | 璁＄畻鏅鸿兘 / 绁炵粡缃戠粶 | Transformer 鏋舵瀯 |
| 004.8:681.3 | 鏈哄櫒瀛︿範璁粌 | 璁粌涓庡井璋?|
| 004.8:159.9 | 璁ょ煡涓庢彁绀?| 鎻愮ず宸ョ▼ |
| 025.4 | 鍒嗙被娉?| UDC 鐩稿叧绗旇 |
| 929 | 浜虹墿浼犺 | People CRM |
| 929:316.77 | 鏍稿績浜虹墿锛圱ier 1锛?| 棰戠箒浜掑姩鑰?|
| 929:65.01 | 閲嶈鑱旂郴浜猴紙Tier 2锛?| 瀹氭湡浜掑姩鑰?|

### 6.2 璺ㄨ瑷€ UDC 涓€鑷存€?
鎵€鏈変笁璇█鐗堟湰鐨勫悓涓€绗旇浣跨敤鐩稿悓鐨?UDC 绫诲彿銆?
---

## 7. 澶氳瑷€鏋舵瀯

### 7.1 鐩綍鏄犲皠

```
绠€浣撲腑鏂囩増锛堥粯璁わ級       English 鐗?             绻侀珨涓枃鐗?鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€      鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€              鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
/Home.md                en/Home.md              zh-tw/棣栭爜.md
/AGENTS.md              锛堜粎鏍圭洰褰曪級               锛堜粎鏍圭洰褰曪級
/2 Areas/               en/2 Areas/             zh-tw/2 Areas/
/3 Resources/...        en/3 Resources/...      zh-tw/3 Resources/...
/_logs/                 en/_logs/               zh-tw/_logs/
/_meta/                 en/_meta/               zh-tw/_meta/
```

### 7.2 鍚屾瑙勫垯

- 鏂板缓鎴栦慨鏀圭瑪璁版椂锛屼笁涓増鏈悓鏃跺垱寤烘垨鏇存柊
- 鍓嶇疆鍏冩暟鎹腑鐨?`udc`銆乣tags` 瀛楁淇濇寔涓€鑷?- 閾炬帴浜ゅ弶寮曠敤浣跨敤瀵瑰簲璇█鍓嶇紑锛坄en/`銆乣zh-tw/`锛?- `AGENTS.md` 浠呭瓨鍦ㄤ簬鏍圭洰褰曪紝鏃犻渶缈昏瘧
- 涓夊钩鍙版妧鑳界洰褰曪紙`.claude/`銆乣.codex/`銆乣.opencode/`锛変粎瀛樺湪浜庢牴鐩綍

### 7.3 璺ㄨ瑷€閾炬帴绛栫暐

**A 鈥?鍚岃瑷€瀛樺湪瀵瑰簲椤甸潰 鈫?鎸囧悜鍚岃瑷€**

| 鍦烘櫙 | 姝ｇ‘ | 閿欒 |
|------|------|------|
| EN 椤靛紩鐢ㄥ彟涓€ EN 椤?| `[[llm-fundamentals]]` | `[[LLM 鍩虹]]` |
| TW 椤靛紩鐢ㄥ彟涓€ TW 椤?| `[[LLM 鍩虹]]` | `[[LLM 鍩虹]]` |

**B 鈥?鍚岃瑷€涓嶅瓨鍦?鈫?fallback 鍒?CN锛屼娇鐢ㄥ畬鏁磋矾寰?*

`[[3 Resources/000-Knowledge/xxx/xxx|鏄剧ず鍚峕]`

**C 鈥?鍏变韩鍐呭缁熶竴鎸囧悜 CN**

绱㈠紩椤点€佹ā鏉裤€乁DC/DDC 鍒嗙被娉曘€乺aw/ 鐩綍 鈫?CN 璺緞銆?
---

## 8. AI Agent 闆嗘垚锛堜笁骞冲彴锛?
### 8.1 骞冲彴瀵规瘮

| 缁村害 | Claude Code | Codex CLI | OpenCode |
|------|------------|-----------|----------|
| 鍏ュ彛鏂囦欢 | `CLAUDE.md` | `AGENTS.md` | `OPENCODE.md` |
| 鎶€鑳界洰褰?| `.claude/skills/` | `.codex/skills/` | `.opencode/skills/` |
| Hooks 鏈哄埗 | hooks.json 鍘熺敓 | AGENTS.md 妯℃嫙 | AGENTS.md 妯℃嫙 |
| SKILL.md 鏍煎紡 | 鏍囧噯 Agent Skills | 鍏煎 | 瀹屽叏鍏煎 |
| 鐢熷懡鍛ㄦ湡 | 鍘熺敓 hooks | 浼氳瘽鍗忚 | 浼氳瘽鍗忚 |

### 8.2 涓夊钩鍙版搷浣滅煩闃?
| 鎿嶄綔 | Claude Code | Codex CLI | OpenCode |
|------|:-----------:|:---------:|:--------:|
| KOS-Triage | `/kos-triage` | `KOS-Triage` | `/kos-triage` |
| KOS-Compile | `/kos-compile` | `KOS-Wiki-Compile` | `/kos-compile` |
| KOS-Link | `/kos-link` | `KOS-Link` | `/kos-link` |
| KOS-Daily | `/kos-daily` | `Daily Open` | `/kos-daily` |
| Canvas | `Canvas-*` | `Canvas-*` | `Canvas-*` |

### 8.3 鎿嶄綔娴佺▼

| 鎿嶄綔 | 瑙﹀彂 | 鍐欏叆 | 鍓嶇疆閿?| 鏃ュ織璁板綍 |
|------|------|------|--------|----------|
| 鍒嗘嫞 Inbox | 鐢ㄦ埛璇锋眰 / 鑷姩 | 鐩爣鐩綍 + _processed/ | acquire 鐩爣璺緞 | operations/triage.md |
| Wiki 缂栬瘧 | 鏂拌祫鏂欏叆搴撳悗 | 3 Resources/[topic]/wiki/ | acquire 姣忎釜鍐欏叆鐩爣 | operations/compile.md |
| Canvas 鎿嶄綔 | 鐢ㄦ埛璇锋眰 | _attachments/canvases/ | acquire 鐩爣 .canvas | 浼氳瘽鏃ュ織 |
| 鏂囦欢缂栬緫 | 鐢ㄦ埛鎸囦护 | 鐩爣鏂囦欢 | acquire 鐩爣鏂囦欢 | 浼氳瘽鏃ュ織 |
| 绯荤粺缁存姢 | 鐢ㄦ埛璇锋眰 /lint | 鈥?| 鈥?| operations/maintenance.md |
| 浼氳瘽缁撴潫 | 鑷姩 | 鈥?| clear-stale 娓呯悊娈嬬暀 | sessions/YYYY-MM-DD.md |

---

## 9. 宸茬煡闂涓庝紭鍖栨柟鍚?
### 9.1 褰撳墠闂

| # | 闂 | 褰卞搷 | 浼樺厛绾?|
|---|------|------|:------:|
| 1 | `_agents/kos/README.md` 涓虹┖ | KOS agent 瀹氫箟缂哄け | P2 |
| 2 | `_meta/skills/skills.md` 涓虹┖ | 鎶€鑳借拷韪储寮曠己澶?| P2 |
| 3 | `.opencode/backups/` 鍐椾綑澶囦唤 | 鍗犵敤绌洪棿锛屽唴瀹归噸澶?| P3 |
| 4 | `.flownote/skills/` 涓?`.opencode/skills/` 閲嶅 | 缁存姢涓ゅ€嶆枃浠?| P2 |

### 9.2 浠?claude-obsidian 鍊熼壌锛堝叏閮ㄥ畬鎴愶級

| 鐗规€?| 浼樺厛绾?| 鐘舵€?|
|------|:------:|------|
| **鏂囦欢閿?(wiki-lock.py)** | **P0** | 鉁?宸插疄鐜?|
| **鐑紦瀛?(hot.md)** | **P0** | 鉁?宸插疄鐜?|
| **涓夌骇鏌ヨ妯″紡** | **P1** | 鉁?宸插疄鐜?|
| **PostCompact 涓婁笅鏂囨仮澶?* | **P1** | 鉁?宸插疄鐜?|
| **Delta 杩借釜 (.manifest.json)** | **P1** | 鉁?鍏ㄧ嚎鎺ュ叆锛圱riage/Compile/Link/Daily锛?|
| **wiki-fold 鏃ュ織鎶樺彔** | **P2** | 鉁?宸插疄鐜帮紙--fold 鍙傛暟鏂瑰悜锛?|
| **Life Agent 杞?SKILL.md** | **P2** | 鉁?宸插疄鐜帮紙涓夊钩鍙?life/SKILL.md锛?|
| **Think 妗嗘灦锛?0鍘熷垯锛?* | **P3** | 鉁?宸插疄鐜帮紙鏂瑰悜 B锛氬祵鍏ュ紩鎿?SKILL.md锛?|
| **Canvas 鍙灞?* | **P3** | 鉁?宸插疄鐜帮紙璁捐 + 涓夊钩鍙?SKILL.md锛?|

---

## 10. 鎶€鏈爤

| 缁勪欢 | 閫夊瀷 | 鍘熷洜 |
|------|------|------|
| 缂栬緫鍣?| Obsidian | 鏈湴浼樺厛锛孧arkdown 鍘熺敓锛屽浘璋辫鍥撅紝鎻掍欢鐢熸€?|
| AI Agent (1) | Claude Code | 鍘熺敓 hooks 鏀寔锛孲kill 浣撶郴鏈€鎴愮啛 |
| AI Agent (2) | Codex CLI | 閫氳繃 AGENTS.md 椹卞姩锛岄€傚悎鏈?vault 涓诲紩鎿?|
| AI Agent (3) | OpenCode | SKILL.md 瀹屽叏鍏煎锛屽 agent 鍙嬪ソ |
| 鐗堟湰鎺у埗 | Git | 鍐呭杩芥函锛屽垎鏀鐞嗭紝澶氳澶囧悓姝?|
| 鏍煎紡 | Markdown + YAML frontmatter | 绾枃鏈紝宸ュ叿鏃犲叧锛屾槗浜庣増鏈帶鍒?|
| 宸ュ叿鑴氭湰 | Python锛堣法骞冲彴锛?| 鏂囦欢閿?wiki-lock.py銆佹祴璇曘€佽嚜鍔ㄥ寲宸ュ叿 |
| 鍒嗙被娉?| UDC | 瀛︾鍏ㄨ鐩栵紝璇█涓珛锛岀粍鍚堣〃杈剧伒娲?|
| 鏂规硶璁?| PARA | 鎿嶄綔瀵煎悜锛屼笌鏂囦欢澶圭粨鏋勮嚜鐒跺鍚?|
| 鏌ヨ | Dataview锛圤bsidian 鎻掍欢锛?| SQL 椋庢牸鏌ヨ绗旇鍏冩暟鎹?|
| 妯℃澘 | Templater锛圤bsidian 鎻掍欢锛?| 鍔ㄦ€佹ā鏉匡紝鎻掑叆鏃ユ湡绛夊彉閲?|
| 鍚戦噺妫€绱?| Chroma / FAISS锛堝彲閫夛級 | RAG 鐭ヨ瘑闂瓟 |

---

## 11. 妯℃澘绯荤粺

### 11.1 妯℃澘娓呭崟

| 妯℃澘 | 鏂囦欢鍚?| 鐢ㄩ€?|
|------|--------|------|
| 椤圭洰 | `椤圭洰妯℃澘.md` | 鏈夋埅姝㈡棩鏈熺殑浠诲姟 |
| 棰嗗煙 | `棰嗗煙妯℃澘.md` | 闀挎湡鍏虫敞鐨勪富棰?|
| 璧勬簮 | `璧勬簮妯℃澘.md` | 鍙傝€冭祫鏂?|
| 姒傚康 | `姒傚康妯℃澘.md` | 鍗曚釜姒傚康鐨勫師瀛愮瑪璁?|
| 姣忔棩 | `姣忔棩绗旇妯℃澘.md` | 鏃ュ父璁板綍 |
| 浜虹墿-鏍稿績 | `person-鏍稿績浜虹墿.md` | Tier 1 浜虹墿 |
| 浜虹墿-閲嶈 | `person-閲嶈鑱旂郴浜?md` | Tier 2 浜虹墿 |
| 浜虹墿-鑳屾櫙 | `person-鑳屾櫙浜虹墿.md` | Tier 3 浜虹墿 |

### 11.2 缁熶竴瀛楁

鎵€鏈夋ā鏉垮潎鍖呭惈锛?
```yaml
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
udc: <绫诲彿>
tags: [tag1, tag2]
---
```

---

## 12. 淇℃伅鐢熷懡鍛ㄦ湡

```
鎹曡幏 (Inbox) 鈹€鈹€鈫?鍒嗘嫞 (Triage) 鈹€鈹€鈫?椤圭洰鍖?(Projects) 鈹€鈹€鈫?瀹屾垚
    鈹?                             鈹?                   鈹?    鈹?    鈹?                             鈻?                   鈻?    鈹?    鈹?                       鎻愮偧 (Resources)        褰掓。 (Archives)
    鈹?                             鈹?    鈹斺攢鈹€鈫?闂康 (Daily) 鈹€鈹€鈫?缂栬瘧 (Compile) 鈹€鈹€鈫?Wiki 椤甸潰
                              鈹?                          _logs/ 璁板綍鍏ㄧ▼
```

---

## 13. 鍙傝€冭祫鏂?
| 鏂囦欢 | 璇存槑 |
|------|------|
| [[_meta/design/canvas-鍙灞傝璁?md]] | Canvas 鍙灞傚畬鏁磋璁?|
| [[_meta/design/claude-obsidian鍒嗘瀽-claude.md]] | claude-obsidian Claude 瑙嗚鍒嗘瀽 |
| [[_meta/design/claude-obsidian鍒嗘瀽-codex.md]] | claude-obsidian Codex 瑙嗚鍒嗘瀽 |
| [[_meta/design/claude-obsidian鍒嗘瀽-opencode.md]] | claude-obsidian OpenCode 瑙嗚鍒嗘瀽 |
| [[_meta/design/skills浣撶郴鍒嗘瀽.md]] | Skills 浣撶郴鐜扮姸鍒嗘瀽 |
| [[_meta/design/鏋舵瀯璇存槑涔?md]] | 鍘?v2.0 鏋舵瀯璇存槑 |
| [[AGENTS.md]] | AI 琛屼负瑙勮寖 |
| [[CLAUDE.md]] | Claude Code 蹇€熷弬鑰?|
| [[_meta/adr/]] | 鏋舵瀯鍐崇瓥璁板綍 |
| [[4 Archives/claude-obsidian/claude-obsidian.md]] | claude-obsidian 褰掓。 |
| [[1 Projects/鏂囦欢閿佸疄鐜?README.md]] | 鏂囦欢閿佸疄鐜伴」鐩紙鍚?6 涓?TASK锛?|
| [[_meta/scripts/wiki-lock.py]] | 璺ㄥ钩鍙版枃浠堕攣鑴氭湰 |

---

> **鏂囨。缁存姢锛?* 鏈鏄庝功闅忕郴缁熸紨杩涘悓姝ユ洿鏂般€傞噸澶ф灦鏋勫彉鏇撮渶鏇存柊鏈枃妗ｃ€?> 瀵瑰簲鑻辨枃鐗堬細`en/_meta/architecture.md`锛岀箒浣撶増锛歚zh-tw/_meta/鏋舵瑾槑鏇?md`
