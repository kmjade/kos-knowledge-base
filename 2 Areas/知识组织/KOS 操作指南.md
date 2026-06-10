---
created: 2026-06-10
updated: 2026-06-10
udc: "001.8:004.8"
robocopy "J:\KOS_LLM-Wiki\3 Resources\300-Social" "F:\KOS_LLM-Wiki\3 Resources\300-Social" /E /COPY:DT
```

> 详细操作参见 [[_meta/同步操作指南]]

### 健康检查

```powershell
# 完整健康检查
KOS-Init

# 仅状态查询
KOS-Init --status

# 自动修复
KOS-Init --fix
```

---

## 9. 命令速查表

| 类别 | 命令 | 功能 |
|:----|:-----|:------|
| 分拣 | `KOS-Triage` | 全量分拣 Inbox |
| 编译 | `KOS-Wiki-Compile` | 全量编译 raw/ → wiki/ |
| 校验 | `KOS-Link` | 五级链接校验 |
| 查询 | `KOS-Query [quick\|standard\|deep]` | 三级知识库查询 |
| 项目 | `KOS-Project --name <名称> --area <领域>` | 新建项目 |
| 归档 | `KOS-Archive --project <编号>` | 归档项目 |
| 周期 | `Daily Open` / `Day-Review` / `Week-Review` | 日/周/月/季/年笔记 |
| 生活 | `Life-Report` / `Life-Check` / `Life-Brief` | 三支柱报告 |
| 初始化 | `KOS-Init` / `KOS-Init --status` / `KOS-Init --fix` | 健康检查 |
| 同步 | `python _meta/system/scripts/sync-vaults.py` | 双库架构同步 |
| 思考 | `/think` / `深度思考` / `帮我理清` | 10 原则思维循环 |

---

## 10. 相关文档

| 文档 | 路径 | 说明 |
|:----|:-----|:------|
| 系统配置 | [[_meta/system/config/系统配置\|系统配置]] | 路径常量、UDC 体系、标签规则 |
| 同步指南 | [[_meta/system/config/同步操作指南\|同步操作指南]] | 双库同步操作 |
| AGENTS.md | [[AGENTS.md]] | AI 行为规范 |
| 架构说明书 | [[_meta/设计/架构说明书\|架构说明书]] | 系统架构设计 |
| 工作流程 | [[_meta/设计/workflow\|workflow]] | 端到端操作流程 |