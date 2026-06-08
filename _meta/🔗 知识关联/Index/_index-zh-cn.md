---
created: 2026-06-06
updated: 2026-06-08
udc: 001.8:025.4
tags: [index, moc, kos, navigation]
version: 2.0
---

# 鎬荤储寮?路 Master Index

> **PARA + UDC + LLM-Wiki 涓夌淮瀵艰埅**
> 鏈储寮曢€氳繃 Dataview 鑷姩鑱氬悎绗旇锛屾棤闇€鎵嬪姩鍚屾鏉＄洰銆?
---

## 馃殌 蹇€熷叆鍙?
| 鍏ュ彛 | 璇存槑 |
|------|------|
| 馃彔 [[馃彔Home\|Home 涓婚〉]] | 鐭ヨ瘑搴撲华琛ㄧ洏锛屽惈鍏ㄥ眬缁熻 |
| 馃摎 [[3 Resources/000-Knowledge/000-Knowledge\|000 鐭ヨ瘑搴揮] | 鍏ㄩ儴鐭ヨ瘑璧勬簮锛圠LM / UDC / People锛?|
| 馃懃 [[3 Resources/People/People\|People CRM]] | 浜虹墿鎬濇兂搴?|
| 馃搻 [[_meta/design/鏋舵瀯璇存槑涔|鏋舵瀯璇存槑涔] | 绯荤粺璁捐涓績 |
| 馃搵 [[_logs/_index\|Codex-logs]] | 鎿嶄綔鏃ュ織 |

---

## 鎸?PARA 鍒嗙被

### 1 鈥?Projects锛堥」鐩級

```dataview
TABLE
  file.link AS "绗旇",
  udc AS "UDC",
  priority AS "浼樺厛绾?,
  status AS "鐘舵€?
FROM "1 Projects"
WHERE status = "active"
SORT choice(priority = "P0", 0, priority = "P1", 1, priority = "P2", 2, 3) ASC, file.name ASC
```

### 2 鈥?Areas锛堥鍩燂級

| 绗旇 | UDC | 鏍囩 |
|------|-----|------|
| [[2 Areas/鐭ヨ瘑缁勭粐/鐭ヨ瘑缁勭粐\|馃尡 鐭ヨ瘑缁勭粐]] | 001.8 | #area/knowledge-management |
| [[2 Areas/鐭ヨ瘑缁勭粐/鐭ヨ瘑绠＄悊\|鐭ヨ瘑绠＄悊]] | 001.8 | #area/knowledge-management |
| [[2 Areas/鐭ヨ瘑缁勭粐/LLM 鐮旂┒\|LLM 鐮旂┒]] | 004.8 | #area/llm |
| [[2 Areas/鐭ヨ瘑缁勭粐/杞欢宸ョ▼鏋舵瀯璁捐\|杞欢宸ョ▼鏋舵瀯璁捐]] | 004.4 | #area/software-engineering |
| [[2 Areas/鐢熸椿/鐢熸椿\|馃尡 鐢熸椿]] | 336 | #area/life |
| [[2 Areas/鐢熸椿/涓汉璐㈠姟/涓汉璐㈠姟\|涓汉璐㈠姟]] | 336 | #area/finance |
| [[2 Areas/瀛︿範/瀛︿範\|馃尡 瀛︿範]] | 37 | #area/learning |
| [[2 Areas/宸ヤ綔/宸ヤ綔\|馃尡 宸ヤ綔]] | 334.7 | #area/work |
| [[2 Areas/宸ヤ綔/浼佷笟绠＄悊/浼佷笟绠＄悊\|浼佷笟绠＄悊]] | 334.7 | #area/business |

### _logs 鈥?Logs锛堟棩蹇楋級

```dataview
TABLE
  file.link AS "绗旇",
  udc AS "UDC",
  status AS "鐘舵€?
FROM "_logs"
SORT status ASC, file.name ASC
```

---

## 3 鈥?Resources锛堣祫婧愶級 馃搳

> 鑷姩鑱氬悎 `3 Resources/` 鐩綍涓嬬殑鎵€鏈夌瑪璁帮紝鎸?UDC 绫荤洰鍒嗙粍銆?
### 鎸?UDC 绫荤洰鍒嗙粍

```dataview
TABLE WITHOUT ID
  rows.file.link AS "绗旇",
  rows.udc AS "UDC",
  rows.tags AS "鏍囩"
FROM "3 Resources"
WHERE file.name != "People" AND file.name != "000-Knowledge"
SORT udc ASC
GROUP BY udc
```

### 鎸夋爣绛惧垎缁?
```dataview
TABLE WITHOUT ID
  rows.file.link AS "绗旇",
  rows.tags AS "鏍囩",
  rows.udc AS "UDC"
FROM "3 Resources"
WHERE file.name != "People" AND file.name != "000-Knowledge"
SORT tags ASC
GROUP BY tags
```

### 浜虹墿鎬濇兂搴擄紙People锛?
```dataview
TABLE WITHOUT ID
  rows.file.link AS "浜虹墿",
  rows.tier AS "灞傜骇",
  rows.udc AS "UDC"
FROM "3 Resources/People/wiki/entities"
SORT rows.tier ASC, rows.file.name ASC
GROUP BY tier
```

### 姒傚康绱㈠紩锛圕oncepts锛?
```dataview
TABLE WITHOUT ID
  file.link AS "姒傚康",
  udc AS "UDC",
  tags AS "鏍囩"
FROM "3 Resources/000-Knowledge/wiki/concepts"
SORT file.name ASC
```

---

## 绯荤粺璁捐鏂囨。

```dataview
TABLE
  file.link AS "璁捐鏂囨。",
  file.folder AS "鐩綍",
  status AS "鐘舵€?
FROM "_meta/design"
SORT status ASC, file.name ASC
```

---

## 鎸?UDC 鍒嗙被鎬昏

```dataview
TABLE WITHOUT ID
  rows.udc AS "UDC 绫诲彿",
  rows.file.link AS "绗旇"
FROM ""
WHERE udc
SORT udc ASC
GROUP BY udc
```

---

## 鎸夋爣绛捐仛鍚?
```dataview
TABLE WITHOUT ID
  rows.tags AS "鏍囩",
  length(rows) AS "绗旇鏁?,
  rows.file.link AS "绗旇"
FROM ""
WHERE tags
SORT tags ASC
GROUP BY tags
```

---

## 馃敆 鐭ヨ瘑鍏宠仈缃戠粶

```dataview
TABLE WITHOUT ID
  file.link AS "绗旇",
  file.outlinks AS "鍑洪摼鏁?,
  length(file.inlinks) AS "鍏ラ摼鏁?
FROM ""
WHERE file.outlinks > 0 OR length(file.inlinks) > 0
SORT length(file.inlinks) DESC
LIMIT 30
```

---

## 馃Л 棰嗗煙椤靛鑸?
| 棰嗗煙椤?| UDC | 璇存槑 |
|--------|-----|------|
| [[2 Areas/鐭ヨ瘑缁勭粐/鐭ヨ瘑缁勭粐\|馃尡 鐭ヨ瘑缁勭粐]] | 001.8 | 鐭ヨ瘑绠＄悊銆佸垎绫绘硶銆並OS 鏍稿績 |
| [[2 Areas/鐭ヨ瘑缁勭粐/LLM 鐮旂┒\|LLM 鐮旂┒]] | 004.8 | 澶ц瑷€妯″瀷銆乀ransformer銆丷AG |
| [[2 Areas/鐢熸椿/鐢熸椿\|馃尡 鐢熸椿]] | 336 | 鏃ュ父鐢熸椿銆佷釜浜鸿储鍔?|
| [[2 Areas/瀛︿範/瀛︿範\|馃尡 瀛︿範]] | 37 | 瀛︿範浣撶郴涓庢柟娉?|
| [[2 Areas/宸ヤ綔/宸ヤ綔\|馃尡 宸ヤ綔]] | 334.7 | 宸ヤ綔浜嬪姟銆佷紒涓氱鐞?|

---

> [!tip] 缁存姢鎻愮ず
> 鉁?**鏈储寮?v2.0 鐢?Dataview 鑷姩鑱氬悎鏁版嵁锛屾棤闇€鎵嬪姩鍚屾绗旇鏉＄洰銆?*
> 娣诲姞鏂扮瑪璁版椂鍙渶璁剧疆濂?`udc` 鍜?`tags` 绛?frontmatter 灞炴€у嵆鍙嚜鍔ㄥ嚭鐜板湪瀵瑰簲鍒嗙被涓嬨€?> 濡傞渶璋冩暣鍒嗙粍閫昏緫锛屼慨鏀瑰搴旂殑 Dataview 鏌ヨ鍧楀嵆鍙€?
