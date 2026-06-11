@echo off
chcp 65001 >nul
title KOS Vault — 一键推送 & 同步
echo ============================================
echo   KOS LLM-Wiki 一键推送 + 双盘同步
echo ============================================
echo.

:: ——— Step 1: 推送 F: 盘 ———
echo [1/3] 推送 F: 盘 → GitHub ...
cd /d F:\KOS_LLM-Wiki
git push origin main
if %ERRORLEVEL% EQU 0 (
    echo ✅ F: 盘推送成功
) else (
    echo ❌ F: 盘推送失败，请检查网络连接
    pause
    exit /b 1
)
echo.

:: ——— Step 2: 同步 J: 盘 ———
echo [2/3] 同步 J: 盘 ← GitHub ...
cd /d J:\KOS_LLM-Wiki
echo ⚠  J: 盘如有未提交变更（stash），请先处理
git pull origin main
if %ERRORLEVEL% EQU 0 (
    echo ✅ J: 盘同步完成
) else (
    echo ⚠  J: 盘拉取可能有冲突，请手动处理
)
echo.

:: ——— Step 3: 确认状态 ———
echo [3/3] 验证状态 ...
echo.
echo --- F: 盘最新 ---
cd /d F:\KOS_LLM-Wiki
git log --oneline -3
echo.
echo --- J: 盘最新 ---
cd /d J:\KOS_LLM-Wiki
git log --oneline -3
echo.
echo ============================================
echo   ✅ 全部完成！
echo ============================================
pause
