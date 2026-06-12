---
name: kos-compile
description: 编译 3 Resources/ 下raw 源文件为 wiki/ 知识页面。六步管道：来源分析 →概念提取 →页面创建/更新 →交叉引用 →索引更新 →日志记录。---

# KOS-Wiki-Compile：Wiki 编译引擎

> 幂等操作（`compiled: true` 文件跳过 + `_meta/.manifest.json` 哈希校验双重保障，
---

## 扫描范围

- `3 Resources/` 下`.md` 文件
- 忽略 `compiled: true` 文件
- <50 字标记`too-short` 跳过
- >10000 字标记`long-doc` 建议拆分

---

## 并发安全（v1.3+）
> ⚠️ **所有写入操作必须先获取文件锁*，防止KOS-Compile / KOS-Triage / 用户编辑同时写同一文件导致数据竞争。
### 锁协记
```bash
# 模式：acquire →写入 →release
TARGET="3 Resources/LLM-Wiki/wiki/concepts/Foo.md"
if python3 _meta/system/scripts/wiki-lock.py acquire "$TARGET"; then
    # ... 执行写入操作 ...
    python3 _meta/system/scripts/wiki-lock.py release "$TARGET"
else
    # rc=75: 被占用→重试一次    sleep 2
    if python3 _meta/system/scripts/wiki-lock.py acquire "$TARGET"; then
        python3 _meta/system/scripts/wiki-lock.py release "$TARGET"
    else
        echo "SKIPPED $TARGET —locked by another writer"
    fi
fi
```

### 加锁目标

| 管道步骤 | 加锁目标 | 说明 |
|---------|----------|------|
| 第3 步| 目标 wiki 页面路径 | 创建/更新知识页|
| 第4 步| 被引用的页面路径 | 添加交叉引用 |
| 第5 步| 三语言 `_index.md` 路径 | 更新索引 |
| 第7 步| `_meta/system/logs/operations/compile.md` | 日志追加 |

### 锁文件位置
所有锁文件存放在`_meta/.locks/` 目录（自动创建）。锁过期时间默认 60 秒，可安全处理进程崩溃场景。
---

## Delta 追踪（v1.4+）
> 使用 `_meta/.manifest.json` 记录每个源文件的哈希和编译产出，避免重复编译。
### 哈希计算

```bash
# 计算源文件的 SHA256 哈希（跨平台 Python）HASH=$(python3 -c "
import hashlib
print(hashlib.sha256(open('3 Resources/LLM-Wiki/raw/article.md', 'rb').read()).hexdigest())
")
```

### 检查逻辑

```bash
# 查询 manifest 中该源文件的 compile 记录
PREV=$(python3 -c "
import json
try:
    m = json.load(open('_meta/.manifest.json'))
    c = m.get('sources', {}).get('3 Resources/LLM-Wiki/raw/article.md', {}).get('compile', {})
    print(json.dumps(c))
except: print('{}')
")

PREV_HASH=$(echo "$PREV" | python3 -c "import sys,json; print(json.load(sys.stdin).get('hash',''))")

if [ -n "$PREV_HASH" ] && [ "$PREV_HASH" = "$HASH" ]; then
    echo "SKIPPED 3 Resources/LLM-Wiki/raw/article.md —unchanged since last compile"
    # 跳过整个编译流程
fi
```

### 更新 Manifest（编译完成后：
```bash
python3 -c "
import json, os
path = '3 Resources/LLM-Wiki/raw/article.md'
hash_val = '...'  # 上文计算的哈希mf = '_meta/.manifest.json'
m = json.load(open(mf)) if os.path.exists(mf) else {'sources':{}, 'engines':{}}
m.setdefault('sources', {})
src = m['sources'].setdefault(path, {})
src['hash'] = hash_val
src['last_seen'] = '$(date +%Y-%m-%d)'
src['first_seen'] = src.get('first_seen', '$(date +%Y-%m-%d)')
src['compile'] = {
    'hash': hash_val,
    'compiled_at': '$(date +%Y-%m-%d)',
    'pages_created': ['wiki/concepts/Foo.md', 'wiki/entities/Bar.md'],
    'pages_updated': ['_index.md']
}
json.dump(m, open(mf, 'w'), indent=2, ensure_ascii=False)
"
```

---


## 模式感知编译

编译时若指定 `--mode`，页面类型映射和模板选择按模式分叉。

### 模式决策链

`
IF 源文件有 methodology 字段 → 使用该模式
ELSE IF compile --mode 参数 → 使用指定模式
ELSE → 默认 para
`

### 页面类型 → 模板映射

| 页面类型 | PARA/LlamaWiki 模板 | LYT 模板 | Zettel 模板 | Generic 模板 |
|---------|--------------------|---------|------------|------------|
| concept | modes/llm-wiki/llm-wiki-concept | modes/lyt/lyt-concept | modes/zettel/zettel-permanent | modes/generic/generic-note |
| entity | modes/llm-wiki/llm-wiki-entity | modes/lyt/lyt-entity | modes/zettel/zettel-permanent | modes/generic/generic-note |
| source | modes/llm-wiki/llm-wiki-source | modes/llm-wiki/llm-wiki-source | modes/zettel/zettel-literature | modes/llm-wiki/llm-wiki-source |
| project | modes/para/para-project | — | — | — |
| area | modes/para/para-area | — | — | — |
| resource | modes/para/para-resource | — | — | — |
| moc | — | modes/lyt/lyt-moc | — | — |
| idea | — | modes/lyt/lyt-idea | — | — |
| hub | — | — | modes/zettel/zettel-hub | — |
| literature | — | — | modes/zettel/zettel-literature | — |
| home | — | modes/lyt/lyt-home | — | — |

模板路径相对于 _meta/system/templates/

---
## 六步编译管道

### 步骤 0：Delta 检查
对每个待处理源文件：
1. 计算 SHA256 哈希
2. 查询 `_meta/.manifest.json` 下`sources[path].compile.hash`
3. 若哈希匹配→**跳过**（标记unchanged，记录日志）
4. 若哈希不匹配或不存在 →继续步骤 1

### 第1 步：来源分析

确定主题领域（LLM-Wiki / PARA / UDC / People 等）

### 第2 步：概念提取

决定页面类型：
| 类型 | 适用 |
|------|------|
| Concept | 理论/方法 |
| Entity | 工具/人物/产品 |
| Source | 论文/文章/书|

### 第3 步：页面创建/更新（需加锁，
| 情况 | 行为 |
|------|------|
| 不存在| 按模板新建→acquire 目标路径 →写入 →release |
| 存在为`reviewed: false` | 合并更新 →acquire 目标路径 →写入 →release |
| 存在为`reviewed: true` | 跳过（无需锁） |

**锁失败处理：** acquire 返回 75 →sleep 2 →重试一次→仍失败则跳过并记录到日志。
### 第4 步：交叉引用（需加锁）
扫描 `[[链接]]`，按上下文推导关联原因（直接引用/主体定义/比较引用/依赖关系）。对每个被引用页面）*acquire →添加反向链接 →release**。
### 第5 步：索引更新（需加锁）
三语言 `_index.md` 同步更新。每个索引文件独立加锁：

| 路径 | 锁目标|
|------|--------|
| `_meta/index/links/Index/_index.md` | acquire →release |
| `en/_meta/index/links/Index/_index.md` | acquire →release |
| `zh-tw/_meta/index/links/Index/_index.md` | acquire →release |

### 第6 步：更新 Manifest

将编译结果写入`_meta/.manifest.json`）- `hash` —步骤 0 计算的SHA256
- `compile.hash` —步骤 0 计算的SHA256
- `compile.compiled_at` —编译日期
- `compile.pages_created` —本次新创建的 wiki 页面路径列表
- `compile.pages_updated` —本次更新的现有页面路径列表
### 第7 步：日志记录（需加锁）
写入 `_meta/system/logs/operations/compile.md`（acquire →append →release，
### 第8 步（可选）：生成批次折叠
仅在指定 `--fold` 参数时执行。将本次编译批次的关键结果压缩为报告，
写入 `_meta/system/logs/reports/compile-fold-YYYY-MM-DD-HHmm.md`。通过时间戳到分钟实现天然幂等。
**中Week-Review 的关系：** 批次折叠是实时的操作摘要，Week-Review 是定期的聚合统计，两者互补。
---

## 冲突处理

| 场景 | 行为 |
|------|------|
| 一致| 跳过 |
| 补充 | 追加 |
| 矛盾 | 双方保留 + 标记 `conflict: true` + 添加 `[!contradiction]` callout |
| 完全覆盖 | 旧版移入 `_archived/` |

---

## 参数

- `--topic <name>` —编译指定主题
- `--file <path>` —编译指定文件
- `--status` —仅显示状态，不执行- `--fold` —编译完成后生成批次折叠报告到 `_meta/system/logs/reports/`
- `--force` —跳过 Delta 检查，强制编译

---

## 如何思考（10 原则映射）
| # | 原则 | 在本引擎中的应用 |
|---|------|----------------|
| 1 | OBSERVE | 完整读取 raw 源文件后再提取概念，不扫标题即判断|
| 2 | OBSERVE(円 | 检查是否有"优先编译熟悉主题"的偏见|
| 3 | LISTEN | 源文件中的术语决定页面类型（Concept/Entity/Source）|
| 4 | THINK | 六步管道：来源分析→概念提取→页面创建→交叉引用→索引→日志 |
| 5 | CONNECT(lat) | 新概念与现有 wiki 页面是否矛盾？矛盾是最有价值的信号 |
| 6 | CONNECT(sys) | acquire 锁→manifest 检查→编译 →更新 manifest →日志 |
| 7 | FEEL | `reviewed: true` 的页面不强行覆盖，尊重人工编辑|
| 8 | ACCEPT | 矛盾时标记`conflict: true`，不强行统一 |
| 9 | CREATE | 创建 wiki 页面 + 交叉引用 + 三语言索引 |
| 10 | GROW | 记录 pages_created / pages_updated 供审记|
