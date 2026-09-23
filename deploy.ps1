# deploy.ps1 — El Dorado Forward
# Usage:
#   .\deploy.ps1          → staging branch
#   .\deploy.ps1 prod     → main (production) branch
#
# Reads CF token from credentials.md via Node helper.
# Always builds before deploying.

param([string]$target = "staging")

$branch = if ($target -eq "prod") { "main" } else { "staging" }

Write-Host "Building site..."
node build.js
if ($LASTEXITCODE -ne 0) { Write-Host "Build failed. Aborting."; exit 1 }

$credsPath = "C:\Users\KillerGrowth\.openclaw\workspace\References\credentials.md"
$token = node -e "
const fs = require('fs');
const creds = fs.readFileSync('$($credsPath -replace '\\\\','/')', 'utf8');
const match = creds.match(/Cloudflare Master API Token[^\`]*\`([^\`]+)\`/);
if (match) process.stdout.write(match[1].trim());
else { process.stderr.write('Token not found'); process.exit(1); }
"
if ($LASTEXITCODE -ne 0) { Write-Host "Could not read CF token from credentials.md"; exit 1 }

$env:CLOUDFLARE_API_TOKEN = $token
$env:CLOUDFLARE_ACCOUNT_ID = "27cafbbee6f8e1db0d9499405d4755c1"

Write-Host "Deploying to branch: $branch"
npx wrangler pages deploy dist --project-name el-dorado-forward --branch $branch --commit-dirty=true

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Deploy complete → https://staging.el-dorado-forward.pages.dev" -ForegroundColor Green
} else {
    Write-Host "Deploy failed." -ForegroundColor Red
    exit 1
}
