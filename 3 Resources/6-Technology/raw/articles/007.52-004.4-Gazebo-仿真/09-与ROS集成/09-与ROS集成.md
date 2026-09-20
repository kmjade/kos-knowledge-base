---
title: "09 与ROS集成"
aliases: [Gazebo ROS Integration, ros_gz]
udc: "007.52:004.4"
tags: [gazebo, simulation, ros2, ros_gz]
created: 2026-09-15
updated: 2026-09-15
---

# 09 与ROS集成

## 两条集成路径

| 维度 | Classic | 新版 |
|:--|:--|:--|
| 桥接包 | `gazebo_ros`（`gazebo_ros_pkgs`） | `ros_gz`（`ros_gz_bridge`） |
| 机制 | 插件内直接 pub/sub ROS 话题 | 独立 bridge 进程双向转发 |
| ROS1 支持 | 是 | 是（ros_gz 也支持 ROS1） |

## ros_gz bridge（新版推荐）

`ros_gz_bridge` 在 Gazebo Transport 与 ROS2 之间搭桥：

```bash
ros2 run ros_gz_bridge parameter_bridge \
  /model/vehicle/odometry@nav_msgs/msg/Odometry@gz.msgs.Odometry \
  /world/default/model/vehicle/joint_state@sensor_msgs/msg/JointState[gz.msgs.Model
```

- 左侧 ROS2 话题，右侧 gz 话题
- `@[` 后缀表示数组（如 `JointState[`）
- 支持双向：`@` 默认双向，`@` + `B`/`F` 指定方向

## 仿真内话题映射（典型）

| Gazebo 侧 | ROS2 侧 |
|:--|:--|
| `/model/<name>/odometry` | `/odom` |
| `/world/.../pose` | `/tf` |
| `/world/.../scan` | `/scan` |
| `/world/.../clock` | `/clock` |

## spawn 机器人

- Classic：`ros2 run gazebo_ros spawn_entity.py`
- 新版：`ros2 run ros_gz_sim create`

## 关联

[[03-安装与环境]] · [[06-仿真运行]] · [[wiki/concepts/ros_gz-桥接|ros_gz]]
