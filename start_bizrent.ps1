$ErrorActionPreference = "SilentlyContinue"

Write-Host "Killing processes on port 3000 and 3001..."
$ports = @(3000, 3001)
foreach ($port in $ports) {
    $connections = Get-NetTCPConnection -LocalPort $port -State Listen
    if ($connections) {
        foreach ($conn in $connections) {
            Stop-Process -Id $conn.OwningProcess -Force
            Write-Host "Killed process $($conn.OwningProcess) on port $port"
        }
    }
}

Write-Host "Starting Backend API (Port 3001)..."
Set-Location "C:\Users\USER\Desktop\BizRent (1)\bizrent-api"
Start-Process cmd -ArgumentList "/c npm run start:dev" -WindowStyle Normal

Write-Host "Starting Frontend UI (Port 3000)..."
Set-Location "C:\Users\USER\Desktop\BizRent (1)\bizrent-ui"
Start-Process cmd -ArgumentList "/c npm run dev" -WindowStyle Normal

Write-Host "Servers are starting in new command prompt windows!"
