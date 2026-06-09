# CLAUDE.md

鏈枃浠朵负 Claude Code锛坈laude.ai/code锛夋彁渚涗娇鐢ㄦ浠撳簱鐨勬寚寮曘€?
## 浠撳簱姒傝堪

KOS_LLM-Wiki 鏄竴涓?*涓汉鐭ヨ瘑绠＄悊绯荤粺**鈥斺€旈潪杞欢椤圭洰銆傚畠铻嶅悎浜?PARA 鏂规硶璁恒€乁DC 鍒嗙被娉曞拰 LLM-Wiki 姒傚康锛岄€氳繃 Obsidian 绠＄悊骞惰緟浠?AI Agent 椹卞姩銆傛病鏈夋瀯寤虹郴缁熴€佹祴璇曞浠舵垨搴旂敤浠ｇ爜銆?
瑙勮寖琛屼负鍙傝€冧负 `AGENTS.md`鈥斺€旀湰鏂囨湭瑕嗙洊鐨勪换浣曟搷浣滆鍏堥槄璇昏鏂囦欢銆傛湰鏂囪鐩栫殑鏄?AI Agent 蹇€熶笂鎵嬫墍闇€鐨勪俊鎭€?
## 鏍稿績鏋舵瀯

```
KOS_LLM-Wiki/
鈹溾攢鈹€ 0 Inbox/          # 寰呭垎鎷ｇ瑪璁?鈹溾攢鈹€ 1 Projects/       # 鏈夌洰鏍囧拰鎴鏃ユ湡鐨勯」鐩?鈹溾攢鈹€ 2 Areas/          # 鎸佺画鍏虫敞鐨勯鍩燂紙鐢熸椿/瀛︿範/宸ヤ綔锛?鈹溾攢鈹€ 3 Resources/      # 鍙傝€冭祫鏂欏簱锛圠LM-Wiki, PARA, UDC, People锛?鈹?  鈹斺攢鈹€ 000-Knowledge/wikis/ 鈫?concepts/ entities/ sources/
鈹溾攢鈹€ 4 Archives/       # 宸插畬鎴愰」鐩紙gitignored锛?鈹溾攢鈹€ Periodic/         # 鏃?鍛?鏈?瀛?骞寸瑪璁帮紙gitignored锛?鈹溾攢鈹€ _meta/            # 绯荤粺閰嶇疆锛氭ā鏉裤€丄DR銆佹煡璇€佺储寮曘€乤i-memory
鈹?  鈹斺攢鈹€ hot.md        # 鐑紦瀛橈細浼氳瘽涓婁笅鏂囨憳瑕侊紙~500 瀛楋級
鈹溾攢鈹€ en/               # English mirror
鈹溾攢鈹€ zh-tw/            # 绻侀珨涓枃閺″儚
鈹溾攢鈹€ _agents/          # AI 瑙掕壊瀹氫箟锛堢畝鎶ュ憳, 鍒嗘瀽甯? 鍗忎綔鑰咃級
鈹溾攢鈹€ _logs/            # 鎿嶄綔鏃ュ織锛坱riage, compile, maintenance, reports锛?鈹溾攢鈹€ .claude/          # Claude Code 閰嶇疆
鈹?  鈹斺攢鈹€ hooks.json    # 鐢熷懡鍛ㄦ湡 hooks锛圫essionStart, PostCompact, PostToolUse, Stop锛?鈹溾攢鈹€ _meta/scripts/ # 宸ュ叿鑴氭湰
鈹?  鈹斺攢鈹€ wiki-lock.sh  # 鏂囦欢閿侊紙澶?agent 瀹夊叏鍐欏叆锛?鈹溾攢鈹€ AGENTS.md         # AI 琛屼负瑙勮寖锛堜富锛?鈹斺攢鈹€ CLAUDE.md         # 鏈枃浠?```

## 璇█涓庡懡鍚嶈鑼?
- **绠€浣撲腑鏂囷紙CN锛?*锛氭牴鐩綍锛屼腑鏂囨枃浠跺悕鍔犵┖鏍硷紙濡?`鎻愮ず宸ョ▼.md`锛?- **English锛圗N锛?*锛歚en/` 鐩綍锛宬ebab-case 鏂囦欢鍚嶏紙濡?`prompt-engineering.md`锛?- **绻侀珨涓枃锛圱W锛?*锛歚zh-tw/` 鐩綍锛屼腑鏂囨枃浠跺悕鍔犵┖鏍?
涓夎瑷€鐗堟湰蹇呴』淇濇寔鍚屾銆侰N 涓烘潈濞佹潵婧愶紱褰?EN/TW 涓嶅瓨鍦ㄥ搴旈〉闈㈡椂锛岃法璇█閾炬帴鍥為€€鍒?CN 瀹屾暣璺緞銆?
## AI 寮曟搸鍛戒护

| 鍛戒护 | 鍔熻兘 |
|------|------|
| `KOS-Triage [--file <path>] [--status]` | Inbox 鍥涚淮鍒嗘嫞锛氭椂鏁堟€с€佷富棰樸€佺被鍨嬨€佸鏉傚害锛涜矾鐢卞埌鐩爣鐩綍 |
| `KOS-Wiki-Compile [--topic <name>] [--file <path>] [--status]` | raw/ 缂栬瘧涓?wiki/ 椤甸潰锛堝叚姝ョ閬擄級 |
| `KOS-Link [--path <dir>] [--file <path>] [--fix] [--status]` | 鏍￠獙 frontmatter銆乁DC 绱㈠紩銆佹柇閾俱€佽法璇█涓€鑷存€?|
| `KOS-Query [quick\|standard\|deep] <闂>` | 涓夌骇鐭ヨ瘑搴撴煡璇紙Quick/Standard/Deep锛?|
| `Day-Review` / `Week-Review` / `Month-Review` / `Quarter-Review` / `Year-Review` | 鍛ㄦ湡鍥為【 |
| `Daily Open` | 鍒涘缓浠婃棩绗旇 |

鎵€鏈夊紩鎿?*骞傜瓑**鈥斺€斿凡澶勭悊鐨勫唴瀹逛笉閲嶅鎿嶄綔锛岀粷涓嶈鐩?`reviewed: true` 鐨勫唴瀹广€?
## 绗旇 Frontmatter锛堝繀濉級

姣忕瘒绗旇蹇呴』鍖呭惈 YAML frontmatter锛?
```yaml
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
udc: <UDC 绫诲彿>
tags: [tag1, tag2]
---
```

UDC 绫诲彿閬靛惊 `\d{3}(\.\d+)?(:\d{3}(\.\d+)?)*` 妯″紡銆傚父鐢?UDC 鍓嶇紑锛歚004.8`锛圓I/LLM锛夈€乣001.8`锛堢煡璇嗙粍缁囷級銆乣025.4`锛堝垎绫绘硶锛夈€乣929`锛堜汉鐗?浼犺锛夈€俇DC 寤鸿閬靛惊鍥涘眰绠￠亾锛氭ā鏉块粯璁ゅ€?鈫?鐩綍鍚彂寮?鈫?鍏抽敭璇嶅尮閰?鈫?AI 鍒嗘瀽銆?
## 琛ㄦ牸鏍煎紡

鎵€鏈?Markdown 琛ㄦ牸蹇呴』浣跨敤瀵归綈鍒嗛殧琛屻€侽bsidian wikilink 涓殑 `|` 椤昏浆涔変负 `\|`銆?
## 璺ㄨ瑷€閾炬帴瑙勫垯

- **A 鈥?鍚岃瑷€瀛樺湪瀵瑰簲椤甸潰** 鈫?鎸囧悜鍚岃瑷€锛圗N鈫扙N锛孴W鈫扵W锛?- **B 鈥?涓嶅瓨鍦ㄧ炕璇?* 鈫?鍥為€€鍒?CN 骞跺甫瀹屾暣璺緞锛堝 `[[3 Resources/000-Knowledge/xxx\|鏄剧ず鍚峕]`锛?- **C 鈥?鍏变韩鍐呭**锛堢储寮曘€佹ā鏉裤€佸垎绫婚〉闈級 鈫?濮嬬粓鎸囧悜 CN

绱㈠紩閾炬帴锛堟寜璇█锛夛細
- CN 鈫?`[[_meta/馃敆 鐭ヨ瘑鍏宠仈/Index/_index-zh-cn\|绱㈠紩]]`
- EN 鈫?`[[en/_meta/Knowledge-Links/Index/_index-en\|Index]]`
- TW 鈫?`[[zh-tw/_meta/馃敆 鐭ヨ瘑鍏宠仈/Index/_index\|绱㈠紩]]`

## 鐑紦瀛?
`_meta/hot.md` 鏄竴涓害 500 瀛楃殑鏈€鏂颁細璇濅笂涓嬫枃鎽樿銆備换浣曚細璇濋兘鍙互閫氳繃瀹冭幏鍙栨渶杩戜笂涓嬫枃锛岃€屾棤闇€鐖彇鏁翠釜 vault銆?
- **浼氳瘽鍚姩**锛欳laude Code 閫氳繃 `hooks.json` SessionStart hook 鑷姩璇诲彇
- **鍘嬬缉鍚?*锛氶€氳繃 PostCompact hook 鑷姩閲嶆柊璇诲彇
- **杩愯涓?*锛氶噸澶?KOS 鎿嶄綔锛圱riage/Compile/Review锛夊悗鏇存柊
- **浼氳瘽缁撴潫**锛氬啓鍏ユ湰娆″彉鏇存憳瑕?
## 浼氳瘽鍗忚

**寮€濮?*锛氬姞杞?AGENTS.md 鈫?璇诲彇 `_meta/hot.md`锛圕laude Code 閫氳繃 hooks 鑷姩瀹屾垚锛夆啋 妫€鏌ユ椿璺冨伐鍗?鈫?妫€鏌?Inbox 鈫?妫€鏌ョ紪璇戠姸鎬?鈫?妫€鏌ュ綋鏃ョ瑪璁?鈫?杈撳嚭鐘舵€佹憳瑕併€?
**杩愯涓?*锛氶噸澶?KOS 鎿嶄綔鍚庢洿鏂?`_meta/hot.md`銆傚叾浠栧彉鏇撮€氳繃 `hooks.json` PostToolUse 鑷姩杩借釜銆?
**缁撴潫**锛氭洿鏂?`_meta/hot.md`锛堜細璇濇憳瑕侊級鈫?鎿嶄綔鏃ュ織鍐欏叆 `_logs/operations/maintenance.md` 鈫?璁板綍 Agent 娲诲姩鍒板綋鏃ョ瑪璁?鈫?娓呯悊涓存椂鏂囦欢銆?
## AI 璁板繂

`_meta/ai-memory/鍏ㄥ眬鐘舵€?md` 杩借釜鍒濆鍖栫姸鎬併€侀槄璇婚槦鍒椼€佸崱鐗囩瑪璁般€佹椿璺冮」鐩拰璺ㄤ細璇濈殑鍥為【鐘舵€併€?
## 鍏抽敭鍙傝€冩枃浠?
- `AGENTS.md` 鈥?AI 瀹屾暣琛屼负瑙勮寖锛堝紩鎿庛€佽鍒欍€佹ā鏉匡級
- `_meta/hot.md` 鈥?鐑紦瀛橈細鏈€杩戜細璇濅笂涓嬫枃锛垀500 瀛楋級
- `_meta/馃敆 鐭ヨ瘑鍏宠仈/Index/_index-zh-cn.md` 鈥?涓荤储寮曪紙CN锛?- `en/_meta/Knowledge-Links/Index/_index-en.md` 鈥?涓荤储寮曪紙EN锛?- `zh-tw/_meta/馃敆 鐭ヨ瘑鍏宠仈/Index/_index.md` 鈥?涓荤储寮曪紙TW锛?- `_meta/Templates/` 鈥?绗旇妯℃澘锛堝叏閮ㄧ被鍨嬶級
- `_meta/queries/` 鈥?Dataview 鏌ヨ搴擄紙6 涓瀹氫箟鏌ヨ锛?- `_meta/adr/` 鈥?鏋舵瀯鍐崇瓥璁板綍
- `_meta/design/KOS-LLM-Wiki鏋舵瀯璇存槑.md` 鈥?鏋舵瀯璇存槑涔?v3.0
- `.claude/hooks.json` 鈥?鐢熷懡鍛ㄦ湡 hooks锛圫essionStart, PostCompact, PostToolUse, Stop锛?- `.claude/skills/kos-query/SKILL.md` 鈥?涓夌骇鏌ヨ鎶€鑳藉畾涔?- `_meta/scripts/wiki-lock.sh` 鈥?鏂囦欢閿侊紙澶?agent 瀹夊叏鍐欏叆锛?- `1 Projects/UDC 鑷姩寤鸿/build_keyword_map.py` 鈥?浠庢爣娉ㄧ瑪璁扮敓鎴?UDC 鍏抽敭璇嶆槧灏?