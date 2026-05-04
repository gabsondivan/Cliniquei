@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js nao foi encontrado.
  echo Instale o Node.js em https://nodejs.org e tente novamente.
  pause
  exit /b 1
)

set PORT=8000
echo.
echo Iniciando Cliniquei localmente...
echo.
echo Abra no navegador:
echo http://127.0.0.1:%PORT%/
echo.
echo Para parar o servidor, feche esta janela.
echo.
start "" "http://127.0.0.1:%PORT%/"
node scripts\dev-server.cjs %PORT%
pause

