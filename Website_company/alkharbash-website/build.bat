@echo off
echo Building Al Kharbash Investment Co. Website for production...
echo.
cd /d "%~dp0"
npm run build
echo.
echo Build completed successfully!
pause 