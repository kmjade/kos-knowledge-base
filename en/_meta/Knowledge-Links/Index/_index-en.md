---
created: 2026-06-06
updated: 2026-06-09
udc: 001.8:025.4
tags: [index, moc, kos, navigation]
---

# Master Index

> **PARA + UDC + LLM-Wiki three-dimensional navigation**
> This index organizes all notes by both PARA category and UDC classification.
> Auto-maintained sections use Dataview queries; manual sections should be updated when new notes are added.

---

## By PARA Category

### 1 — Projects

```dataview
TABLE file.link as Project, udc, status
FROM "en/1 Projects"
WHERE contains(file.name, "README")
SORT status ASC
```

| Note | UDC | Status |
|------|-----|------|
| [[en/1 Projects/26-02 Bug追踪/26-02 Bug追踪|Bug Tracking]] | 004.4 | active |
| [[en/1 Projects/26-07 Life+AI 融合/26-07 Life+AI 融合|Life+AI Integration]] | 001.8:004.8 | active |
| [[en/4 Archives/26-04 UDC整合实施/README|UDC Integration]] | 025.4 | archived |
| [[en/4 Archives/26-08 个人财务系统/README|Personal Finance]] | 336 | archived |
| [[en/4 Archives/26-09 企业管理/README|Business Management]] | 334.7 | archived |
| [[en/4 Archives/26-10 学习管理/README|Learning Management]] | 37 | archived |

> Dataview query embedded above. Dynamic table auto-updates in Obsidian; static table for AI Agent reading.

### 2 — Areas

| Note | UDC | Tags |
|------|-----|------|
| [[en/2 Areas/knowledge-organization/knowledge-organization\|Knowledge Organization]] | 001.8 | #area/knowledge-management |
| [[en/2 Areas/knowledge-organization/knowledge-management\|Knowledge Mgmt]] | 001.8 | #area/knowledge-management |
| [[en/2 Areas/knowledge-organization/llm-research\|LLM Research]] | 004.8 | #area/llm |
| [[en/2 Areas/knowledge-organization/software-engineering-architecture\|Software Eng. Architecture]] | 004.4 | #area/software-engineering |
| [[en/2 Areas/life/life\|Life]] / [[en/2 Areas/life/personal-finance/personal-finance\|Personal Finance]] | 336 | #area/life |
| [[en/2 Areas/learning/learning\|Learning]] / [[en/2 Areas/learning/system/learning-classification\|Learning Management]] | 37 | #area/learning |
| [[en/2 Areas/work/work\|Work]] / [[en/2 Areas/work/business-management/business-management\|Business Management]] | 334.7 | #area/work |

### _logs — Logs

| Note | UDC | Status |
|------|-----|------|
| [[en/_logs/_index.md\|Codex-logs Requirements]] | 001.8:004.8 | draft |

### 3 — Resources

| Note | UDC | Tags |
|------|-----|------|
| [[en/3 Resources/PARA/para-overview\|PARA Method Overview]] | 001.8:005 | #resource/paras |
| [[en/3 Resources/PARA/para-and-knowledge-management\|PARA & Knowledge Mgmt]] | 001.8 | #resource/knowledge-management |
| [[en/3 Resources/UDC/udc-overview\|UDC Overview]] | 025.4 | #resource/udc |
| [[en/3 Resources/UDC/udc-classification-index\|UDC Classification Index]] | 025.4:001 | #resource/classification |
| [[en/3 Resources/UDC/udc-and-digital-km\|UDC & Digital KM]] | 025.4:004 | #resource/udc-digital |
| [[en/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/llm-fundamentals\|LLM Fundamentals]] | 004.8 | #resource/llm |
| [[en/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/transformer-architecture\|Transformer Architecture]] | 004.8:519.6 | #resource/llm/transformer |
| [[en/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/transformer-deep-dive\|Transformer Deep Dive]] | 004.8:519.6 | #resource/llm/transformer |
| [[en/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/training-and-fine-tuning\|Training & Fine-tuning]] | 004.8:681.3 | #resource/llm |
| [[en/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/prompt-engineering\|Prompt Engineering]] | 004.8:159.9 | #resource/llm/prompting |
| [[en/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/rag-and-knowledge-base\|RAG & Knowledge Base]] | 004.8 | #resource/llm/rag |
| [[en/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/kos-and-llm\|KOS & LLM]] | 001.8:004.8 | #resource/llm/kos |
| [[en/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/integrated-applied-sciences\|Applied Sciences Integration]] | 004.8 | #resource/llm |
| [[en/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/integrated-applied-sciences-architecture\|Applied Sciences Architecture]] | 004.8 | #resource/llm |
| [[en/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/knowledge-para-llm-wiki-fusion\|Knowledge+PARA+LLM-Wiki Fusion]] | 004.8 | #resource/llm |
| [[en/3 Resources/000-Knowledge/004-LLM-Wiki/wiki/para-llm-wiki-automation\|PARA+LLM-Wiki Automation]] | 004.8 | #resource/llm |
| [[en/3 Resources/UDC/class-0-general\|0-General]] | 000 | #resource/classification |
| [[en/3 Resources/UDC/ai-and-knowledge-systems\|AI & Knowledge Systems]] | 001.8 | #resource/knowledge-organization |
| [[en/3 Resources/UDC/clc-chinese-classification\|CLC Classification]] | 025.4 | #resource/classification |
| [[en/3 Resources/UDC/ddc-dewey-classification\|DDC Classification]] | 025.4 | #resource/classification |
| [[en/3 Resources/UDC/lcc-library-of-congress\|LCC Classification]] | 025.4 | #resource/classification |
| [[en/3 Resources/UDC/udc-and-digital-km\|UDC & Digital KM]] | 025.4:004 | #resource/udc |
| [[en/3 Resources/UDC/udc-classification-index\|UDC Classification Index]] | 025.4:001 | #resource/classification |
| [[en/3 Resources/UDC/udc-overview\|UDC Overview]] | 025.4 | #resource/classification |
| [[en/3 Resources/UDC/udc-in-depth\|UDC In-Depth]] | 025.4 | #resource/classification |
| [[en/3 Resources/UDC/personal-knowledge-management\|Personal KM]] | 001.8 | #resource/knowledge-organization |
| [[en/3 Resources/UDC/metadata-standards\|Metadata Standards]] | 025.4 | #resource/classification |
| [[en/3 Resources/UDC/linked-data\|Linked Data]] | 001.8 | #resource/knowledge-organization |
| [[en/3 Resources/UDC/classification-principles\|Classification Principles]] | 025.4 | #resource/classification |
| [[en/3 Resources/UDC/classification-taxonomy\|Classification]] | 001.8 | #resource/knowledge-organization |
| [[en/3 Resources/UDC/taxonomy-principles\|Taxonomy Principles]] | 025.4 | #resource/classification |
| [[en/3 Resources/UDC/classification-applications\|Classification Applications]] | 025.4 | #resource/classification |
| [[en/3 Resources/UDC/classification-overview\|Classification Overview]] | 025.4 | #resource/classification |
| [[en/3 Resources/UDC/classification-and-metadata\|Classification & Metadata]] | 025.4 | #resource/classification |
| [[en/3 Resources/UDC/thesaurus\|Thesaurus]] | 001.8 | #resource/knowledge-organization |
| [[en/3 Resources/UDC/digital-age-classification\|Digital-Age Classification]] | 025.4 | #resource/classification |
| [[en/3 Resources/UDC/ontology\|Ontology]] | 001.8 | #resource/knowledge-organization |
| [[en/3 Resources/UDC/knowledge-organization-systems\|KOS]] | 001.8 | #resource/knowledge-organization |
| [[en/3 Resources/UDC/knowledge-graph\|Knowledge Graph]] | 001.8 | #resource/knowledge-organization |
| [[en/3 Resources/UDC/knowledge-management\|Knowledge Mgmt]] | 001.8 | #resource/knowledge-organization |
| [[en/3 Resources/UDC/kos-overview\|KOS Overview]] | 001.8 | #resource/knowledge-organization |
| [[en/3 Resources/000-Knowledge/wiki/concepts/computer\|Computer]] | 004 | #resource/classification |
| [[en/3 Resources/000-Knowledge/wiki/concepts/documentation\|Documentation]] | 002 | #resource/kos |
| [[en/3 Resources/000-Knowledge/wiki/concepts/frontmatter\|Frontmatter]] | 025.3 | #resource/metadata |
| [[en/3 Resources/000-Knowledge/wiki/concepts/YAML\|YAML]] | 004.6 | #resource/data-formats |
| [[en/3 Resources/000-Knowledge/wiki/concepts/Unicode\|Unicode]] | 003 | #resource/standards |
| [[en/3 Resources/000-Knowledge/wiki/concepts/claude-code\|Claude Code]] | 004.8 | #resource/llm/tools |
| [[en/3 Resources/000-Knowledge/wiki/concepts/MARC\|MARC]] | 025.3 | #resource/metadata |
| [[en/3 Resources/000-Knowledge/wiki/concepts/education\|education]] | 37 | #resource/classification |
| [[en/3 Resources/000-Knowledge/wiki/concepts/Obsidian-uri\|Obsidian URI]] | 004.9 | #resource/knowledge-management |
| [[en/3 Resources/000-Knowledge/wiki/concepts/File-format\|File Format]] | 004.6 | #resource/data-formats |
| [[en/3 Resources/000-Knowledge/wiki/concepts/Agent-prompt\|Agent Prompt]] | 004.8 | #resource/llm |
| [[en/3 Resources/000-Knowledge/wiki/concepts/GPT-5\|GPT-5]] | 004.8 | #resource/llm |

#### People

```dataview
TABLE file.link as Person, udc, tags
FROM "en/3 Resources/People/wiki/entities"
SORT tags ASC
```

| Person | UDC | Tags |
|--------|-----|------|
| [[en/3 Resources/People/wiki/entities/Alexander-Elder\|Alexander-Elder]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/Andrej-Karpathy\|Andrej-Karpathy]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/Bruno-Latour-拉图尔\|Bruno-Latour]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/Chomsky\|Chomsky]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/David-Bloor-布鲁尔\|David-Bloor]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/Henri-La-Fontaine\|Henri-La-Fontaine]] | 929 | #resource/people/tier-2 |
| [[en/3 Resources/People/wiki/entities/Imre-Lakatos-拉卡托斯\|Imre-Lakatos]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/J.B.萊因\|J.B.萊因]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/Karl-Popper-波普尔\|Karl-Popper]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/Melvil-Dewey-杜威\|Melvil-Dewey]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/Michael-Polanyi-波兰尼\|Michael-Polanyi]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/Paul-Feyerabend-费耶阿本德\|Paul-Feyerabend]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/Paul-Otlet-奥特勒\|Paul-Otlet]] | 929 | #resource/people/tier-1 |
| [[en/3 Resources/People/wiki/entities/Robert-Merton-默顿\|Robert-Merton]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/SR-Ranganathan-阮冈纳赞\|SR-Ranganathan]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/Saussure\|Saussure]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/Thomas-Kuhn-库恩\|Thomas-Kuhn]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/Tim-Berners-Lee\|Tim-Berners-Lee]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/佛洛伊德\|Freud]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/安瑟倫\|Anselm]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/帕斯卡\|Pascal]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/張仲景\|Zhang Zhongjing]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/托馬斯·阿奎那\|Thomas Aquinas]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/斯金納\|Skinner]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/李白\|Li Bai]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/梵谷\|Van Gogh]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/皮亞傑\|Piaget]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/羅蘭·巴特\|Roland Barthes]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/達文西\|Da Vinci]] | 929 | #resource/people/tier-3 |
| [[en/3 Resources/People/wiki/entities/馬斯洛\|Maslow]] | 929 | #resource/people/tier-3 |

#### System Metadata · _meta

| Note | UDC | Tags |
|------|-----|------|
| [[en/_meta/hot.md\|Hot Cache]] | 004.8:005.1 | #meta #hot-cache |
| [[en/_meta/design/KOS-LLM-Wiki架构说明.md\|Architecture v3.0]] | 001.8:025.4:004.8 | #architecture #kos #design |
| [[en/_meta/design/claude-obsidian-analysis-claude.md\|claude-obsidian Analysis (Claude)]] | 004.8:005.1 | #design #analysis |
| [[en/_meta/design/claude-obsidian-analysis-codex.md\|claude-obsidian Analysis (Codex)]] | 004.8:005.1 | #design #analysis |
| [[en/_meta/design/claude-obsidian-analysis-opencode.md\|claude-obsidian Analysis (OpenCode)]] | 004.8:005.1 | #design #analysis |
| [[en/_meta/design/skills-analysis.md\|Skills Analysis]] | 004.8:005.1 | #design #skills |
| [[en/_meta/design/Personal Finance系统-架构设计.md\|Personal Finance - Architecture]] | 336 | #design/finance |
| [[en/_meta/design/Personal Finance系统-详细设计.md\|Personal Finance - Detailed Design]] | 336 | #design/finance |
| [[en/_meta/design/Personal Finance系统-原型设计.md\|Personal Finance - Prototype]] | 336 | #design/finance |
| [[en/_meta/design/学习管理-架构设计.md\|Learning Mgmt - Architecture]] | 37 | #design/learning |
| [[en/_meta/design/学习管理-原型设计.md\|Learning Mgmt - Prototype]] | 37 | #design/learning |
| [[en/_meta/design/学习管理-详细设计.md\|Learning Mgmt - Detailed Design]] | 37 | #design/learning |
| [[en/_meta/design/企业管理-架构设计.md\|Business Mgmt - Architecture]] | 334.7 | #design/business |
| [[en/_meta/design/企业管理-原型设计.md\|Business Mgmt - Prototype]] | 334.7 | #design/business |
| [[en/_meta/design/企业管理-详细设计.md\|Business Mgmt - Detailed Design]] | 334.7 | #design/business |

---

## By UDC Classification

| UDC | Category | Related Notes |
|----------|------|----------|
| 000 | General | 0-General |
| 001.8 | Knowledge Organization & Management | Home, _索引, 知识管理, 知识组织, PARA 方法概览, 知识组织与 LLM, AI与知识系统, 个人知识管理, 关联数据, 分类法, 叙词表, 本体论, 知識組織系統, 知识图谱, 知识组织系统概述 |
| 001.8:005 | KM Methodology | PARA 方法概览 |
| 001.8:025.4 | Index & Classification | _索引 |
| 001.8:004.8 | KOS & AI | 知识组织与大模型, RAG 与知识库集成, Codex-logs 需求说明书 |
| 002 | Documentation | documentation |
| 003 | Coding Standards | Unicode |
| 004 | Computer Science | computer |
| 004.4 | Software Engineering | Software Eng. Architecture |
| 004.6 | Data Formats | YAML, File-format |
| 004.8 | Artificial Intelligence / LLM | LLM Fundamentals, Training & Fine-tuning, RAG & Knowledge Base, Applied Sciences Integration, Applied Sciences Architecture, Knowledge+PARA+LLM-Wiki Fusion, PARA+LLM-Wiki Automation, Claude Code, GPT-5, Agent-prompt |
| 004.8:005.1 | AI Audit & Operations | Hot Cache, hooks.json, KOS-Query, wiki-lock.sh |
| 004.8:519.6 | Computational Intelligence / Neural Networks | Transformer Architecture, Transformer Deep Dive |
| 004.8:681.3 | ML Training | Training & Fine-tuning |
| 004.8:159.9 | Cognition & Prompting | Prompt Engineering |
| 004.9 | Software Tools | Obsidian URI |
| 025.3 | Metadata / Cataloging | frontmatter, MARC, Metadata Standards |
| 025.4 | Classification / Indexing | UDC Overview, UDC Classification Index, CLC Classification, DDC Classification, LCC Classification, UDC In-Depth, Classification Principles, Taxonomy Principles, Classification Applications, Classification Overview, Classification & Metadata, Digital-Age Classification |
| 025.4:001 | Classification Theory | UDC Classification Index |
| 025.4:004 | Digital Classification | UDC & Digital KM |
| 37 | Education / Learning | education, 学习管理, 学习分类 |
| 336 | Personal Finance | Personal Finance, Personal Finance Architecture, Personal Finance Detailed Design, Personal Finance Prototype |
| 334.7 | Business Management | Business Management, Business Mgmt Architecture, Business Mgmt Prototype, Business Mgmt Detailed Design |
| 929 | Biography | Paul-Otlet, Alexander-Elder, Andrej-Karpathy, Bruno-Latour, Chomsky, David-Bloor, Henri-La-Fontaine, Imre-Lakatos, Karl-Popper, Melvil-Dewey, Michael-Polanyi, Paul-Feyerabend, Robert-Merton, SR-Ranganathan, Saussure, Thomas-Kuhn, Tim-Berners-Lee, Freud, Anselm, Pascal, Zhang Zhongjing, Thomas Aquinas, Skinner, Li Bai, Van Gogh, Piaget, Roland Barthes, Da Vinci, Maslow |

---

## By Tag Group

- `#kos` — All core system notes
- `#area/*` — Area notes (Life/Learning/Work/KOS)
- `#resource/*` — Resource notes
- `#udc/*` — UDC classification tags
- `#template` — Template notes
- `#daily` — Daily notes (under Periodic/)
- `#codex-log` — Codex Operation logs
- `#meta` — System metadata / configuration
- `#hot-cache` — Hot cache related
- `#design` — Design documents
- `#query` — Query / retrieval

---

## Quick Links

| Target | Link |
|--------|------|
| 🏠 Home | [[en/Home.md\|Home]] |
| 🔥 Hot Cache | [[en/_meta/hot.md\|Hot Cache]] |
| 🔍 Query | `query: <your question>` |
| 📐 Architecture | [[en/_meta/design/KOS-LLM-Wiki架构说明.md\|Architecture v3.0]] |
| 🔗 Knowledge Links | [[en/_meta/Knowledge-Links/Knowledge-Links\|Knowledge Links]] |

---

> [!tip] Maintenance Tip
> When adding new notes, update the Resource table and UDC table.
> Dataview queries auto-maintain Projects and People lists.
>
> Language-specific index links:
> - CN → [[_meta/🔗 知识关联/Index/_index-zh-cn\|索引]]
> - EN → [[en/_meta/Knowledge-Links/Index/_index-en\|Index]]
> - TW → [[zh-tw/_meta/🔗 知识关联/Index/_index\|索引]]
