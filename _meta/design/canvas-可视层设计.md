---
created: 2026-06-09
updated: 2026-06-09
udc: 001.8:004.8
tags: [architecture, design, canvas, visual-layer, v3]
status: draft
---

# Canvas 鍙灞?鈥?璁捐鏂囨。

> KOS 绗笁涓煡璇嗘崟鑾峰眰锛?*鍙鍖栧弬鑰冨眰**
> 瀵瑰簲 claude-obsidian 鐨?`canvas` 鎶€鑳斤紝閽堝 KOS_LLM-Wiki 閫傞厤

---

## 1. 涓変釜鐭ヨ瘑鎹曡幏灞?
| 灞?| 鍚嶇О | 鍔熻兘 | 杈撳嚭鏍煎紡 | KOS 瀵瑰簲 |
|:--:|------|------|---------|----------|
| L1 | **鏂囨湰缁煎悎** (Text Synthesis) | 瀵硅瘽 鈫?缁撴瀯鍖栨枃鏈煡璇?| `.md` wiki 椤甸潰 | KOS-Compile |
| L2 | **缁撴瀯鍖栫煡璇?* (Structured Knowledge) | 鍒嗙被 鈫?绱㈠紩涓庢煡璇?| `.md` 绱㈠紩 + Dataview | KOS-Triage + KOS-Query |
| **L3** | **鍙鍖栧弬鑰?* (Visual Reference) | 瑙嗚 鈫?绌洪棿鍏崇郴鐢诲竷 | `.canvas` (JSON Canvas) | **Canvas 鍙灞?* 鈫?鏈鏂板 |

### 涓夎€呭叧绯?
```
鏂囨湰缁煎悎 鈹€鈹€鈫?浜у嚭鍙銆佸彲鎼滅储鐨勭瑪璁?缁撴瀯鍖栫煡璇?鈹€鈹€鈫?浜у嚭鍙彂鐜般€佸彲鍏宠仈鐨勭储寮?鍙鍖栧弬鑰?鈹€鈹€鈫?浜у嚭鍙劅鐭ャ€佸彲鎺㈢储鐨勭┖闂村竷灞€
```

- L1 鍜?L2 澶勭悊鏂囨湰锛汱3 澶勭悊**瑙嗚鍏崇郴**
- Canvas 涓嶆浛浠ｇ瑪璁帮紝鑰屾槸鐢?*绌洪棿甯冨眬**琛ュ厖鐭ヨ瘑鍏宠仈
- 鍚屼竴璇濋鍙悓鏃舵嫢鏈?wiki 椤甸潰锛圠1锛夊拰 canvas 鐢诲竷锛圠3锛?
---

## 2. 鏍稿績姒傚康

### 2.1 浠€涔堟槸 Canvas

Canvas 鏄?Obsidian 鍘熺敓鐨?`.canvas` 鏂囦欢锛圝SON Canvas 1.0 鏍煎紡锛夛紝娓叉煋涓烘棤闄愯瑙夐潰鏉裤€傛敮鎸佸洓绉嶈妭鐐圭被鍨嬶細

| 鑺傜偣绫诲瀷 | 鐢ㄩ€?| 绀轰緥 |
|---------|------|------|
| `text` | Markdown 鏂囨湰鍗＄墖 | 鏍囬銆佽鏄庛€佹敞閲?|
| `file` | 宓屽叆鏂囦欢锛堝浘鐗?PDF/绗旇锛?| `![[architecture.png]]` |
| `group` | 鍒嗙粍鍖哄煙锛圸one锛?| 甯︽爣绛剧殑鐭╁舰鍖哄煙锛岃瑙夊垎缁?|
| `link` | 缃戦〉 URL 棰勮 | `https://...` 鑷姩鎶撳彇 OG 淇℃伅 |

### 2.2 閫傜敤鍦烘櫙

| 鍦烘櫙 | 浼樺厛绾?| 璇存槑 |
|------|:------:|------|
| **姒傚康鍏崇郴鍥?* | 楂?| 鐢ㄧ┖闂翠綅缃?+ 杩炵嚎琛ㄨ揪姒傚康闂村叧鑱?|
| **瑙嗚绱犳潗鏉?* | 涓?| 鏀堕泦鍥剧墖銆佹埅鍥俱€丳DF 鍒板悓涓€闈㈡澘 |
| **椤圭洰鐪嬫澘** | 涓?| 鐢?Zone 鍋氶樁娈靛垎缁勶紝鍗＄墖浠ｈ〃浠诲姟 |
| **鐮旂┒璺嚎鍥?* | 浣?| 鏃堕棿绾?+ 閲岀▼纰戠殑瑙嗚灞曠ず |
| **婕旂ず/灞曠ず** | 浣?| Obsidian 鍏ㄥ睆妯″紡灞曠ず Canvas |

### 2.3 涓嶉€傜敤鍦烘櫙

- 绾枃鏈唴瀹癸紙鐢?wiki 椤甸潰鍗冲彲锛?- 闇€瑕佺増鏈姣旂殑鍐呭锛圙it 瀵?.canvas JSON 鐨?diff 鍙鎬у樊锛?- 澶ч噺鍥剧墖鐨勬壒閲忓瓨鍌紙鍥剧墖鐢?`_attachments/media/` 缁熶竴绠＄悊锛?
---

## 3. 鐩綍缁撴瀯

### 3.1 瀛樺偍璺緞

鎵€鏈?Canvas 鍙灞傛枃浠堕泦涓瓨鏀句簬 `_attachments/` 鐩綍锛?
```
_attachments/
鈹溾攢鈹€ canvases/          # 馃搵 .canvas 鐢诲竷鏂囦欢
鈹?  鈹溾攢鈹€ _index.canvas  # 鎬昏鐢诲竷锛堥粯璁ゅ叆鍙ｏ級
鈹?  鈹斺攢鈹€ ...
鈹溾攢鈹€ media/             # 馃柤锔?鍥剧墖 / PDF / 鍏朵粬浜岃繘鍒惰祫婧?鈹?  鈹溾攢鈹€ images/        #    鍥剧墖
鈹?  鈹溾攢鈹€ pdfs/          #    PDF
鈹?  鈹斺攢鈹€ .gitkeep       #    鍗犱綅
鈹斺攢鈹€ .gitkeep           # 鍗犱綅
```

**璁捐鐞嗙敱锛?*

| 缁村害 | 闆嗕腑寮?(`_attachments/`) | 鍒嗘暎寮?(`3 Resources/.../wiki/canvases/`) |
|------|:------------------------:|:----------------------------------------:|
| 璺ㄥ煙鍏变韩 | 鉁?涓€涓敾甯冨彲寮曠敤澶氫釜棰嗗煙鍐呭 | 鉂?鐢诲竷灞€闄愪簬鍗曚釜棰嗗煙 |
| 鍙戠幇鎬?| 鉁?涓€澶勬壘鍒版墍鏈夌敾甯?| 鉂?鏁ｅ竷鍦ㄥ涓?topic 鐩綍 |
| Git 绠＄悊 | 鉁?`_attachments/` 鍙粺涓€ `.gitignore` | 鉂?闇€瑕侀€愪釜鐩綍閰嶇疆 |
| 涓?PARA 涓€鑷存€?| 鉂?鍋忕 PARA 棰嗗煙鍒嗙鍘熷垯 | 鉁?绗﹀悎棰嗗煙褰掑睘 |

**缁撹锛?* 閲囩敤 **闆嗕腑寮?*锛屽洜涓?Canvas 鏈川涓婃槸**璺ㄩ鍩?*鐨勫彲瑙嗗眰锛屼笉搴旇鍗曚竴棰嗗煙闄愬埗銆?
### 3.2 Git 绛栫暐

| 鍐呭 | 鏄惁鍏?Git | 鍘熷洜 |
|------|:----------:|------|
| `.canvas` 鏂囦欢锛圝SON锛?| 鉁?璺熻釜 | 绾枃鏈紝diff 鍙 |
| `.gitkeep` 鍗犱綅 | 鉁?璺熻釜 | 淇濇寔鐩綍缁撴瀯 |
| 鍥剧墖 (`media/images/`) | 鉂?蹇界暐 | 浜岃繘鍒跺ぇ鏂囦欢 |
| PDF (`media/pdfs/`) | 鉂?蹇界暐 | 浜岃繘鍒跺ぇ鏂囦欢 |

鍦?`.gitignore` 涓坊鍔狅細

```
# Canvas media assets
_attachments/media/
```

---

## 4. 鍛戒护闆?
### 4.1 鍛戒护娓呭崟

| 鍛戒护 | 鍔熻兘 | 鍙傛暟 | 瀵瑰簲 claude-obsidian |
|------|------|------|:-------------------:|
| `Canvas-Status` | 鏌ヨ鐢诲竷鐘舵€?| 鍙€夋寚瀹氱敾甯冨悕 | `/canvas` |
| `Canvas-New <name>` | 鏂板缓鐢诲竷 | name: 鐢诲竷鍚嶇О | `/canvas new` |
| `Canvas-Add-Image <path>` | 娣诲姞鍥剧墖 | path: 鏈湴璺緞鎴?URL | `/canvas add image` |
| `Canvas-Add-Text <content>` | 娣诲姞鏂囨湰鍗＄墖 | content: Markdown 鏂囨湰 | `/canvas add text` |
| `Canvas-Add-Note <page>` | 娣诲姞绗旇閾炬帴 | page: wiki 椤甸潰璺緞 | `/canvas add note` |
| `Canvas-Add-PDF <path>` | 娣诲姞 PDF | path: 鏈湴璺緞鎴?URL | `/canvas add pdf` |
| `Canvas-Zone <name> [color]` | 娣诲姞鍖哄煙鍒嗙粍 | name+棰滆壊(1-6) | `/canvas zone` |
| `Canvas-List` | 鍒楀嚭鎵€鏈夌敾甯?| 鈥?| `/canvas list` |

### 4.2 涓?KOS 鍛戒护椋庢牸涓€鑷?
閬靛惊 KOS 寮曟搸鐨?`KOS-*` 鍛藉悕鎯緥锛?- 鍛戒护鍓嶇紑锛歚Canvas-`
- 鍙傛暟椋庢牸锛歚Canvas-Command <required> [optional]`
- 骞傜瓑鎬э細宸插瓨鍦ㄧ殑鐢诲竷涓嶈鐩栵紝鎶ユ彁绀?
### 4.3 鑷姩瀹氫綅绠楁硶

涓?claude-obsidian 鐩稿悓锛堝弬瑙?`references/canvas-spec.md`锛夛細

```
1. 鎵惧埌鐩爣 Zone锛坓roup 鑺傜偣锛?2. Zone 鍐呬粠宸︹啋鍙虫帓鍒楄妭鐐癸紙闂磋窛 40px锛?3. 瓒呭嚭 Zone 瀹藉害 鈫?鎹㈣锛堥棿璺?20px锛?4. 鏃?Zone 鈫?鏀惧湪鎵€鏈夎妭鐐逛笅鏂?5. 鍥剧墖鎸夊楂樻瘮鑷€傚簲灏哄
```

---

## 5. 涓夊钩鍙版妧鑳芥灦鏋?
### 5.1 鎶€鑳戒緷璧栭摼

```
json-canvas (鍙傝€冨眰)     canvas (宸ヤ綔娴佸眰)
     鈹?                       鈹?     鈹? JSON Canvas 1.0 鏍煎紡瑙勮寖  鈹? 鍛戒护瑙ｆ瀽 + 鏂囦欢鎿嶄綔 + 瀹氫綅绠楁硶
     鈻?                       鈻?  鈹屸攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?  鈹?      涓夊钩鍙板叡浜?SKILL.md          鈹?  鈹? Claude Code / Codex CLI / OpenCode 鈹?  鈹斺攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?```

### 5.2 鎶€鑳介儴缃?
| 鎶€鑳?| Claude Code | Codex CLI | OpenCode |
|------|:-----------:|:---------:|:--------:|
| `json-canvas` | 鉁?鏂板 | 鉁?鏂板 | 鉁?宸叉湁 |
| `canvas` | 鉁?鏂板 | 鉁?鏂板 | 鉁?鏂板 |

### 5.3 涓?KOS 缁熶竴鍏ュ彛闆嗘垚

鍦?`kos/SKILL.md` 涓柊澧炴剰鍥捐瘑鍒鍒欙細

| 鐢ㄦ埛琛ㄨ揪 | 璺敱 |
|---------|------|
| canvas銆佺敾甯冦€佸彲瑙嗐€乿isual銆乿isualize | **canvas** |

---

## 6. 涓庣幇鏈?KOS 寮曟搸鐨勯泦鎴?
### 6.1 KOS-Compile 鍙€夎仈鍔?
- **缂栬瘧鍚?*锛氬姒傚康鍏崇郴鏄庣‘鐨?topic锛岃闂敤鎴锋槸鍚︾敓鎴愬叧绯?canvas
- **涓嶈嚜鍔ㄧ敓鎴?*锛氶伩鍏嶅櫔闊筹紝闇€鐢ㄦ埛纭
- **杈撳嚭**锛歚_attachments/canvases/[topic]-relations.canvas`

### 6.2 KOS-Triage 鍙€夎矾鐢?
- **鍒嗘嫞鏃?*锛氬鏋?Inbox 鏂囦欢鍖呭惈鍥剧墖銆佹埅鍥炬垨瑙嗚绱犳潗锛屾彁绀?鏄惁鍔犲叆 canvas"
- **涓嶈嚜鍔ㄨ矾鐢?*锛氭枃鏈枃浠剁収甯镐笁妗ｅ垎鎷?
### 6.3 KOS-Link 鍏煎

- L3 閾炬帴妫€鏌ワ細鎵弿 `.canvas` 涓殑 `[[wiki-link]]` 鍜?`file` 璺緞
- 娉ㄦ剰锛?canvas 鏄?JSON 涓嶆槸 Markdown锛岃В鏋愭柟寮忎笉鍚?- 鍒濇湡 L3 璺宠繃 `.canvas` 鏂囦欢锛圥3 鍔熻兘涓嶅仛 L3 妫€鏌ワ級

---

## 7. 鏂囦欢閿侀泦鎴?
鎵€鏈?`Canvas-Add-*` 鍜?`Canvas-Zone` 鎿嶄綔娑夊強鍐欏叆 `.canvas` 鏂囦欢锛岄渶**鑾峰彇鏂囦欢閿?*锛?
```
python3 _meta/scripts/wiki-lock.py acquire _attachments/canvases/target.canvas
... 鍐欏叆鎿嶄綔 ...
python3 _meta/scripts/wiki-lock.py release _attachments/canvases/target.canvas
```

宸插湪 wiki-lock.py 鐨勫苟鍙戝畨鍏ㄨ寖鍥村唴銆?
---

## 8. 闄愬埗涓庤竟鐣?
| 缁村害 | 闄愬埗 | 鍘熷洜 |
|------|------|------|
| 鍥剧墖澶勭悊 | 涓嶈鍓?涓嶅帇缂?涓嶈浆鎹㈡牸寮?| 淇濇寔鍘熷浘璐ㄩ噺 |
| 鎵归噺鎿嶄綔 | 涓€娆″缓璁?鈮? 涓妭鐐?| 閬垮厤 canvas JSON 杩囧ぇ |
| 鐢诲竷澶у皬 | 涓嶄富鍔ㄦ竻鐞嗚妭鐐?| 鐢ㄦ埛鎵嬪姩绠＄悊 |
| 寮傛鍏ュ浘 | 涓嶆敮鎸?| Obsidian 鍚屾鍔犺浇 |
| 鎼滅储寮曟搸 | Canvas 鍐呭涓嶅湪 KOS-Query 鑼冨洿鍐?| JSON 闈?Markdown |
| 璺ㄨ瑷€ | Canvas 涓嶇炕璇?| 瑙嗚鍐呭璇█鏃犲叧 |

---

## 9. 涓?claude-obsidian 瀵规瘮

| 鐗规€?| claude-obsidian | KOS 閫傞厤 | 鐞嗙敱 |
|------|:--------------:|:--------:|------|
| 榛樿鐢诲竷 | `wiki/canvases/main.canvas` | `_attachments/canvases/_index.canvas` | 闆嗕腑寮忓瓨鍌?|
| 闄勪欢鐩綍 | `_attachments/images/canvas/` | `_attachments/media/images/` | 缁熶竴 media 绠＄悊 |
| /banana 闆嗘垚 | 鉁?| 鉂?璺宠繃 | 鏃?banana-claude 鎻掍欢 |
| 浼氳瘽鏃ュ織 | `.recent-images.txt` | 鉂?璺宠繃 | vault 鏃犳寔缁浘鐗囩敓鎴?|
| auto-positioning | Python PIL 妫€娴?| 鉁?淇濈暀 | 骞冲彴鏃犲叧鍩虹鐭ヨ瘑 |
| 鐢诲竷鍒楄〃 | `wiki/canvases/*.canvas` | `_attachments/canvases/*.canvas` | 璺緞閫傞厤 |
| 绱㈠紩鏇存柊 | `wiki/overview.md` | KOS-Query 闂存帴瑕嗙洊 | 涓嶆柊澧炵淮鎶ょ偣 |

---

## 10. 瀹炴柦璺嚎

| 闃舵 | 鍐呭 | 鍓嶇疆鏉′欢 |
|:----:|------|----------|
| **P0** | 璁捐鏂囨。 + 鐩綍缁撴瀯 + `.gitkeep` | 鏈枃妗ｅ畬鎴?|
| **P1** | 涓夊钩鍙?`json-canvas` 鍙傝€?SKILL.md | 鍙傝€?spec 宸叉湁 |
| **P2** | 涓夊钩鍙?`canvas` 宸ヤ綔娴?SKILL.md | json-canvas 閮ㄧ讲瀹屾垚 |
| **P3** | KOS 缁熶竴鍏ュ彛闆嗘垚 + 榛樿 `_index.canvas` | canvas 鎶€鑳藉彲鐢?|
| **鏈潵** | KOS-Compile/Triage 鍙€夎仈鍔?| 瑙嗚鍐呭閲忓闀垮悗 |

---

## 11. 鍙傝€冭祫鏂?
| 鏂囦欢 | 璇存槑 |
|------|------|
| [[4 Archives/claude-obsidian/skills/canvas/SKILL.md]] | 鍘熷 canvas 鎶€鑳?|
| [[4 Archives/claude-obsidian/skills/canvas/SKILL_CN.md]] | 涓枃鐗?|
| [[4 Archives/claude-obsidian/skills/canvas/references/canvas-spec.md]] | JSON Canvas 鏍煎紡鍏ㄥ弬鑰?|
| [[.opencode/skills/json-canvas/SKILL.md]] | 宸查儴缃茬殑 json-canvas 鍙傝€?|
| [[.flownote/skills/json-canvas/SKILL.md]] | Flownote 鐗?json-canvas |
| [[_meta/design/KOS-LLM-Wiki鏋舵瀯璇存槑v3.0.md]] | 褰撳墠鏋舵瀯鏂囨。 |
| [JSON Canvas 1.0 瑙勮寖](https://jsoncanvas.org/spec/1.0/) | 寮€鏀炬爣鍑?|

---

> **璁捐鐘舵€侊細** v1.0 鍒濈 路 P3 浼樺厛绾?> **缁存姢浜猴細** AI Agent锛圞OS 寮曟搸锛?