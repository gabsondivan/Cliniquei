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
set HOST=0.0.0.0
echo.
echo Iniciando Cliniquei localmente...
echo.
echo Abra no computador:
echo http://localhost:%PORT%/
echo.
echo Para abrir no celular/tablet, use um endereco abaixo na mesma rede Wi-Fi:
for /f "usebackq delims=" %%I in (`powershell -NoProfile -Command "Get-NetIPAddress -AddressFamily IPv4 ^| Where-Object { $_.IPAddress -notlike '127.*' -and $_.PrefixOrigin -ne 'WellKnown' } ^| Select-Object -ExpandProperty IPAddress"`) do echo http://%%I:%PORT%/
echo.
echo Para parar o servidor, feche esta janela.
echo.
start "" "http://localhost:%PORT%/"
node scripts\dev-server.cjs %PORT% %HOST%
pause
