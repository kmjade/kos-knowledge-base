---
created: 2026-06-09
updated: 2026-06-09
udc: 004.8:005.1
tags: [claude, config, analysis, skills, reference]
---

# claude-obsidian 鍒嗘瀽 鈥?Claudian 閰嶇疆瑙嗚

> 浠庡綋鍓?Claude Code 閰嶇疆鍑哄彂锛屾彁鍙?claude-obsidian 涓彲鐩存帴搴旂敤鐨勯儴鍒?
---

## 褰撳墠閰嶇疆鐜扮姸

`Claudian 閰嶇疆.md` 涓粎璁板綍浜?2 鏉¤矾寰勶細

```
C:\Users\Administrator\AppData\Roaming\npm\node_modules\@anthropic-ai\claude-code\bin\claude.exe
C:\Users\Administrator\AppData\Roaming\npm\node_modules\@openai\codex\vendor\x86_64-unknown-linux-musl\bin\codex.exe
```

**缂哄け**锛?- 鉂?鏃?`.claude/` 鐩綍锛坰kills, settings, 绛夛級
- 鉂?鏃?hooks 閰嶇疆
- 鉂?鏃犱换浣曞彲璋冪敤鐨勮嚜瀹氫箟 skill
- 鉂?鏃犵郴缁熺骇鐑紦瀛橈紙hot.md锛夋満鍒?
---

## claude-obsidian 鍙鐢ㄧ殑鏍稿績璧勪骇

### 1. Hooks 绯荤粺锛堟渶楂樹紭鍏堢骇锛?
claude-obsidian 鐨?`hooks/hooks.json` 瀹氫箟浜?4 涓敓鍛藉懆鏈熼挬瀛愶紝鍙洿鎺ュ鐢細

| 閽╁瓙 | 浣滅敤 | 鍦ㄥ綋鍓?vault 鐨勫搴?|
|------|------|-------------------|
| **SessionStart** | 鑷姩鍔犺浇鐑紦瀛?+ 娓呯悊杩囨湡閿?| 鏇夸唬 AGENTS.md 涓墜鍔ㄧ殑"浼氳瘽寮€濮?鍗忚 |
| **PostCompact** | 涓婁笅鏂囧帇缂╁悗鎭㈠鐑紦瀛?| 鏂板锛堝綋鍓嶆棤姝よ兘鍔涳級 |
| **PostToolUse** | 姣忔鍐欐搷浣滃悗鑷姩 git commit | 鏂板锛堝綋鍓嶉渶鎵嬪姩锛?|
| **Stop** | 浼氳瘽缁撴潫鏃舵彁绀烘洿鏂?hot.md | 澧炲己 AGENTS.md 鐨?浼氳瘽缁撴潫"鍗忚 |

**瀹炵幇璺緞**锛氬垱寤?`.claude/hooks.json`锛屽皢 AGENTS.md 鐨勪細璇濆崗璁縼绉讳负鑷姩鎵ц鐨?hooks銆?
### 2. Hot Cache 妯″紡锛坵iki/hot.md锛?
claude-obsidian 鐨勬牳蹇冩ā寮忥細

```markdown
# Hot Cache

> Last updated: YYYY-MM-DD HH:MM

## Key Recent Facts
- ...

## Recent Changes
- ...

## Active Threads
- ...
```

- 姣忔浼氳瘽缁撴潫瑕嗗啓锛岄檺鍒?500 tokens
- 浼氳瘽寮€濮嬫椂鑷姩鍔犺浇锛圫essionStart hook锛?- 涓婁笅鏂囧帇缂╁悗鑷姩閲嶆柊鍔犺浇锛圥ostCompact hook锛?
**鍦ㄥ綋鍓?vault 鍙仛鍒?*锛?- 鍦?`_meta/` 涓嬪垱寤?`hot.md`
- 浼氳瘽缁撴潫鏃?AI 鑷姩鏇存柊
- 瑙ｅ喅璺ㄤ細璇濅笂涓嬫枃涓㈠け鐨勯棶棰?
### 3. Per-file Advisory Locking锛坵iki-lock.sh锛?
骞跺彂瀹夊叏鏈哄埗锛屽綋澶?writer 鍚屾椂鎿嶄綔鏃堕槻姝㈠啿绐侊細

```bash
bash _meta/scripts/wiki-lock.sh acquire "path/to/file.md"
# ... 鎵ц鍐欐搷浣?...
bash _meta/scripts/wiki-lock.sh release "path/to/file.md"
```

**闂**锛氬綋鍓?vault 浣跨敤 Bash 宸ュ叿鏃舵瘡娆￠兘鏄嫭绔嬭繘绋嬶紝AGENTS.md 瀹氫箟鐨?KOS-Triage 鍜?KOS-Wiki-Compile 濡傛灉琚苟琛岃皟鐢ㄥ彲鑳藉啿绐併€?
**瀹炵幇**锛氬彲灏?`wiki-lock.sh` 澶嶅埗鍒?vault 鐨?`_meta/scripts/` 涓嬶紝鍦ㄦ妧鑳戒腑寮曠敤銆?
### 4. CLI Transport 妫€娴嬫満鍒?
```bash
bash _meta/scripts/detect-transport.sh
# 杈撳嚭鍒?.vault-meta/transport.json
```

鑷姩妫€娴嬪彲鐢ㄩ€氶亾锛歄bsidian CLI 鈫?MCP 鈫?鏂囦欢绯荤粺鐩存帴鍐欏叆銆?
**鍦ㄥ綋鍓?vault 鐨勫簲鐢?*锛氬彲妫€娴?claude.exe / codex.exe 鐨勫彲鐢ㄦ€э紝鍐欏叆 `_meta/transport.json`锛岃鎶€鑳芥牴鎹彲鐢ㄥ伐鍏烽€夋嫨鏈€浼樺啓鍏ヨ矾寰勩€?
### 5. 鍙紩鍏ョ殑鎶€鑳芥ā鏉?
| claude-obsidian Skill | 褰撳墠 vault 鐨勬浛浠?| 寤鸿 |
|----------------------|------------------|------|
| `wiki-ingest` | AGENTS.md 鐨?KOS-Triage + KOS-Wiki-Compile | 瑙勫垯鏇磋缁嗭紝鍙弬鑰冨己鍖?|
| `wiki-lint` | AGENTS.md 鐨?KOS-Link | 澧炲姞浜嗗绔嬮〉闈㈡娴嬪拰 age 妫€鏌?|
| `wiki-fold` | 鏃犲搴?| **鏂板**锛氭棩蹇楁姌鍙犲綊绾?|
| `save` | 鏃犲搴?| **鏂板**锛氫細璇濆唴瀹圭洿鎺ュ綊妗ｄ负绗旇 |
| `think` | 鏃犲搴?| **鏂板**锛?0 鍘熷垯鎬濊€冩鏋?|
| `wiki-query` | 鏃犲搴?| **鏂板**锛氱粨鏋勫寲闂瓟妯″紡 |

---

## 浼樺厛绾у缓璁?
| 浼樺厛绾?| 浜嬮」 | 宸ヤ綔閲?| 浠峰€?|
|--------|------|--------|------|
| 馃敶 P0 | 鍒涘缓 `.claude/skills/`锛岃縼绉?AH Skills | 涓?| 楂?|
| 馃敶 P0 | 鍒涘缓 `.claude/settings.json` 鍩虹閰嶇疆 | 浣?| 楂?|
| 馃煛 P1 | 瀹炵幇 `_meta/hot.md` 鐑紦瀛樻満鍒?| 浣?| 涓?|
| 馃煛 P1 | 鍒涘缓 `.claude/hooks.json`锛岃嚜鍔ㄥ寲浼氳瘽鍗忚 | 涓?| 楂?|
| 馃煝 P2 | 寮曞叆 `wiki-fold` 鏃ュ織鎶樺彔鑳藉姏 | 涓?| 涓?|
| 馃煝 P2 | 寮曞叆 `wiki-lock.sh` 骞跺彂淇濇姢 | 浣?| 浣庯紙鍗曠敤鎴峰満鏅級 |
| 馃煝 P2 | 寮曞叆 `think` 鎬濊€冩鏋朵綔涓哄厓鎶€鑳?| 浣?| 涓?|

---

## 鍙傝€冭祫婧?
- 椤圭洰涓婚〉锛歨ttps://github.com/AgriciDaniel/claude-obsidian
- 鍘熷 LLM Wiki 妯″紡锛歨ttps://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- Obsidian Skills锛坘epano锛夛細https://github.com/kepano/obsidian-skills
- 瀹屾暣鍒嗘瀽绗旇锛歔[_meta/design/claude-obsidian鍒嗘瀽.md|claude-obsidian 鍒嗘瀽]]
