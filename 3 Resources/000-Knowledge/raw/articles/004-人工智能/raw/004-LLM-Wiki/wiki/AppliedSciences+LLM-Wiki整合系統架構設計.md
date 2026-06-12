---
created: 2026-06-07
updated: 2026-06-07
udc: 004.8
ddc: "006.3"
tags: [resource, llm, #udc/004.8]
---

# Applied Sciences + LLM-Wiki 系统架构

> 源：Applied Sciences + LLM-Wiki 整合系统架构设计 v1.0.md

## 核心内容

系统集成架构设计方案，涵盖领域定位、系统架构、知识库集成与应用集成。



> 本文檔是 600 Applied Sciences 領域的內部憲法——定義結構、約定和邊界。

*分類: 000 Knowledge / Knowledge-Systems*
*父文檔: [[3 Resources/000-Knowledge/raw/articles/004-人工智能/raw/004-LLM-Wiki/wiki/Knowledge+PARA+LLM-Wiki融合系統|融合系統總架構 v1.1]]*
*版本: v1.0 · 創建: 2026-05-29*



### 架构层次

系统架构分为三个层次：
1. **领域层** — 定义 DDC 600 的覆盖范围和各子 KB 的边界
2. **组织层** — 建立双层架构（DDC 层级 + MOC 导航），支持两种组织模式的共存
3. **集成层** — LLM-Wiki 编译引擎与知识库的对接，包括 raw/ 原始素材管理和 wiki/ 页面自动生成

这种分层的设计确保了系统各部分的解耦与可扩展性。

### 核心原则

- **raw/ 只读** — 原始素材不可修改，作为核实基线
- **wiki/ 可迭代** — 编译页面可随知识更新而扩展
- **链接可追溯** — 每个声明都可追溯到 raw/ 中的源文件
## 参考

- 源文件：raw/Applied Sciences + LLM-Wiki 整合系统架构设计 v1.0.md

