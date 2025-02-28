@echo off
REM Check if nim directory already exists
if exist nim (
    echo Nim directory already exists, skipping clone
    cd nim
) else (
    echo Cloning nim repository...
    git clone https://github.com/ibelick/nim.git
    cd nim
)

REM Install dependencies and start dev server
echo Installing dependencies...
npm install
echo Starting development server...
npm run dev
