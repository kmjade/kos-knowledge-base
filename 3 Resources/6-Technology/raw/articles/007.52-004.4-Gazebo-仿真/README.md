# Gazebo 仿真 知识库

> 独立 Gazebo 知识库，**两版并列**：Gazebo Classic（旧单体外壳）+ 新版 Gazebo（原 Ignition，模块化 `gz-*`）。
> UDC `007.52:004.4`（机器人软件开发工具）。归位 `6-Technology`。

## 快速导航

| 章 | 主题 |
|:--|:--|
| 01-导论 | Gazebo 是什么、仿真在机器人开发中的位置 |
| 02-版本与架构 | Classic 单体 vs 新版模块化 `gz-*`（两版对比核心章） |
| 03-安装与环境 | Classic：apt；新版：Harmonic/Ionic/Jetty + ros_gz |
| 04-模型描述 | URDF vs SDF，两版差异 |
| 05-世界与场景 | world 文件、灯光、物理引擎 |
| 06-仿真运行 | `gazebo` vs `gz sim`，headless、录制回放 |
| 07-插件系统 | plugin 机制，Classic plugin vs gz plugin |
| 08-传感器 | 相机/激光雷达/IMU 两版模型 |
| 09-与ROS集成 | gazebo_ros vs ros_gz bridge |
| 10-实践与排障 | 常见问题、性能调优 |
| 99-资源收集 | 官方文档、教程、竞品 |

## 版本线速览（2026）

| 版本线 | 状态 | ROS2 配对 |
|:--|:--|:--|
| Gazebo Classic（≤11） | 已停止（历史） | ROS1 / ROS2 Foxy 早期 |
| Fortress | LTS（至 2027） | Humble（ros_gz） |
| Harmonic | LTS（至 2029） | Jazzy（推荐组合） |
| Ionic | 标准（至 2026-12 EOL） | Kilted |
| Jetty | LTS（2025-09 → 2031） | Lyrical / Rolling |
