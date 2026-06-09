---
created: 2026-06-09
updated: 2026-06-09
udc: 004.8:005.1
tags: [design, analysis, skills, claude-obsidian]
status: draft
---

# claude-obsidian 椤圭洰鍒嗘瀽

> 鍩轰簬 2026-06-09 鍏ㄩ」鐩壂鎻?> 椤圭洰涓婚〉锛歨ttps://github.com/AgriciDaniel/claude-obsidian

---

## 姒傝堪

**claude-obsidian** 鏄竴涓紑婧愮殑 Claude Code 鎻掍欢 + Obsidian vault 妯℃澘锛屽熀浜?Andrej Karpathy 鐨?LLM Wiki 妯″紡銆?
- **鐗堟湰**锛歷1.9.2 "Compound Vault"
- **浣滆€?*锛欰griciDaniel
- **璁稿彲璇?*锛歁IT
- **瀹氫綅**锛欳laude Code marketplace 鎻掍欢锛屽悓鏃跺彲鐩存帴鍦?Obsidian 涓墦寮€

---

## 椤圭洰缁撴瀯

```
4 Archives/claude-obsidian/
鈹溾攢鈹€ skills/                 # 15 涓彲鎵ц Skill锛堟牳蹇冭祫浜э級
鈹溾攢鈹€ agents/                 # AI agent 瀹氫箟锛坵iki-lint锛?鈹溾攢鈹€ commands/               # 鍛戒护鍙傝€?鈹溾攢鈹€ hooks/hooks.json        # Claude Code 鐢熷懡鍛ㄦ湡閽╁瓙
鈹溾攢鈹€ _meta/scripts/                # 宸ュ叿鑴氭湰
鈹溾攢鈹€ bin/                    # 瀹夎涓庤缃剼鏈?鈹溾攢鈹€ .claude-plugin/         # 鎻掍欢娓呭崟
鈹溾攢鈹€ .raw/                   # 涓嶅彲鍙樻簮鏂囨。
鈹溾攢鈹€ wiki/                   # 鐭ヨ瘑搴撹緭鍑?鈹溾攢鈹€ assets/diagrams/        # 鏋舵瀯鍥?鈹溾攢鈹€ docs/                   # 鏂囨。
鈹斺攢鈹€ tests/                  # 娴嬭瘯鑴氭湰
```

---

## Skills 娓呭崟锛?5 涓級

| Skill | 鍔熻兘 | 绫诲埆 |
|-------|------|------|
| `wiki` | 鍒濆鍖?妫€鏌?vault 鐘舵€?| 鏍稿績 |
| `wiki-ingest` | 鎽勫叆婧愭枃浠讹紝鍒涘缓 8-15 涓?wiki 椤甸潰 | 鏍稿績 |
| `wiki-query` | 鍥炵瓟 wiki 闂锛圦uick/Standard/Deep锛?| 鏍稿績 |
| `wiki-lint` | 鍋ュ悍妫€鏌ワ細鏂摼銆佸绔嬮〉闈€乫rontmatter | 鏍稿績 |
| `wiki-fold` | 鏃ュ織鎶樺彔褰掔撼 | 楂樼骇 |
| `wiki-cli` | Obsidian CLI 浼犺緭鍖呰 | 鍩虹璁炬柦 |
| `wiki-retrieve` | 娣峰悎妫€绱紙BM25 + cosine rerank锛?| 楂樼骇 |
| `wiki-mode` | 鏂规硶璁烘ā寮忥紙LYT/PARA/ZK/Generic锛?| 楂樼骇 |
| `save` | 淇濆瓨浼氳瘽涓?wiki 绗旇 | 宸ュ叿 |
| `autoresearch` | 鑷富鐮旂┒寰幆 | 宸ュ叿 |
| `canvas` | 鍒涘缓/缂栬緫 Obsidian Canvas | 宸ュ叿 |
| `think` | 10 鍘熷垯鎬濊€冩鏋?| 鍏冩妧鑳?|
| `defuddle` | 娓呯悊缃戦〉鍐呭 | 宸ュ叿 |
| `obsidian-markdown` | Obsidian Markdown 璇硶鍙傝€?| 鍙傝€?|
| `obsidian-bases` | Obsidian Bases 鍙傝€?| 鍙傝€?|

---

## 鍏抽敭鎶€鏈壒鎬?
### 1. Hooks 绯荤粺

| 閽╁瓙 | 瑙﹀彂鏃舵満 | 琛屼负 |
|------|---------|------|
| SessionStart | 浼氳瘽鍚姩 | 璇?wiki/hot.md锛涙竻鐞嗚繃鏈熼攣 |
| PostCompact | 涓婁笅鏂囧帇缂╁悗 | 閲嶆柊璇诲彇鐑紦瀛?|
| PostToolUse | Write/Edit 鍚?| 鑷姩 git add + commit |
| Stop | 浼氳瘽缁撴潫 | 鎻愮ず鏇存柊 hot.md |

### 2. 浼犺緭灞?
`_meta/scripts/detect-transport.sh` 鑷姩妫€娴嬪彲鐢ㄩ€氶亾锛歄bsidian CLI 鈫?MCP 鈫?鏂囦欢绯荤粺銆?
### 3. 骞跺彂鎺у埗

`_meta/scripts/wiki-lock.sh`锛氬熀浜?noclobber 鍘熷瓙閿侊紝60s 瓒呮椂鍥炴敹銆?
### 4. 妫€绱㈢郴缁?
娣峰悎妫€绱細Contextual Prefix + BM25 + Cosine Rerank锛圓nthropic 2024.09 璁烘枃锛夈€?
### 5. 鏂规硶璁烘ā寮?
鍥涚缁勭粐妯″紡锛欸eneric / LYT / PARA / Zettelkasten銆?
---

## 涓庢湰 vault 鐨勫叧鑱?
### 鐩存帴鍏宠仈

- `.flownote/skills/` 鈥?claude-obsidian 鐨?skills 娲剧敓鍓湰
- `.opencode/skills/` 鈥?claude-obsidian 鐨?skills 娲剧敓鍓湰
- AH Skills 绯诲垪锛坅h-inbox, ah-note 绛夛級鈥?婧愯嚜 claude-obsidian
- `.opencode/backups/` 鈥?澶氭鍐椾綑澶囦唤

### 闂存帴鍏宠仈

| 鏈?vault 鐗规€?| claude-obsidian 瀵瑰簲 |
|--------------|---------------------|
| AGENTS.md KOS 寮曟搸 | commands/ + agents/wiki-lint.md |
| 浼氳瘽鍗忚 | hooks/hooks.json |
| KOS-Triage | skills/wiki-ingest/ |
| KOS-Link | skills/wiki-lint/ + agents/wiki-lint.md |
| _meta/Templates/ | _templates/ |
| raw/wiki 鍙屽眰缁撴瀯 | .raw/ + wiki/ |

---

## 鏍稿績宸紓瀵规瘮

| 缁村害 | claude-obsidian | KOS_LLM-Wiki |
|------|----------------|--------------|
| 璇█ | 鑻辨枃 | 绠€涓?绻佷腑/鑻辨枃 涓夎 |
| 鍒嗙被 | LYT/PARA/ZK 妯″紡 | UDC 鍥介檯鍗佽繘鍒嗙被 |
| 鎶€鑳芥牸寮?| SKILL.md锛堟爣鍑嗘牸寮忥級 | AGENTS.md + _agents/ |
| 鐢熷懡鍛ㄦ湡 | hooks.json | AGENTS.md 浼氳瘽鍗忚 |
| Agent 鏋舵瀯 | 鍗曚竴 agent | 澶氳鑹插紩鎿?|

---

## 鍙€熼壌鐨勮璁?
1. **Hooks 鏈哄埗** 鈥?AGENTS.md 鍗忚褰㈠紡鍖栦负 hooks.json
2. **wiki-lock.sh** 鈥?闃插苟鍙戝啿绐?3. **wiki-fold** 鈥?鏃ュ織瀹氭湡鎶樺彔褰掔撼
4. **wiki-retrieve** 鈥?娣峰悎妫€绱?5. **think 妗嗘灦** 鈥?10 鍘熷垯鍏冩妧鑳?
---

## 鐩稿叧绗旇

- [[_meta/design/skills浣撶郴鍒嗘瀽.md]] 鈥?鍏?vault skills 鐜扮姸
- [[Claudian 閰嶇疆鍒嗘瀽]] 鈥?Claude Code 閰嶇疆浼樺寲瑙嗚
