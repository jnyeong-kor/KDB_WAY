# GitHub Sync Script
param (
    [string]$CommitMessage = "Trae Auto Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
)

$GIT_PATH = "C:\Program Files\Git\cmd\git.exe"

# 0. Check Remote & Branch
$remoteCheck = & $GIT_PATH remote
if (-not $remoteCheck) {
    Write-Host "Error: No remote origin found. Run ./scripts/connect-github.sh first." -ForegroundColor Red
    exit
}

$currentBranch = & $GIT_PATH rev-parse --abbrev-ref HEAD
Write-Host "Branch detected: $currentBranch" -ForegroundColor Gray

Write-Host ">>> Uploading changes to GitHub..." -ForegroundColor Cyan

# 1. Add changes
& $GIT_PATH add .

# 2. Commit
$status = & $GIT_PATH status --porcelain
if (-not $status) {
    Write-Host "No changes to commit." -ForegroundColor Yellow
    exit
}

& $GIT_PATH commit -m "$CommitMessage"

# 3. Push
& $GIT_PATH push origin $currentBranch

Write-Host ">>> Upload Complete! ($currentBranch)" -ForegroundColor Green
