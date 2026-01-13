# How to Install Node.js on Windows

## Quick Installation Steps

### Option 1: Direct Download (Recommended)

1. **Go to the official Node.js website:**
   - Open your browser and visit: **https://nodejs.org/**
   
2. **Download the LTS version:**
   - Click the big green button that says "LTS" (Long Term Support)
   - This will download a file like `node-v20.x.x-x64.msi`

3. **Run the installer:**
   - Double-click the downloaded `.msi` file
   - Click "Next" through the installation wizard
   - **IMPORTANT:** Make sure "Add to PATH" is checked (it usually is by default)
   - Click "Install" and wait for it to complete

4. **Restart PowerShell:**
   - Close your current PowerShell window
   - Open a NEW PowerShell window
   - This is important so it picks up the new PATH settings

5. **Verify installation:**
   ```powershell
   node --version
   npm --version
   ```
   You should see version numbers like:
   ```
   v20.11.0
   10.2.4
   ```

### Option 2: Using Chocolatey (If you have it)

If you have Chocolatey package manager installed:
```powershell
choco install nodejs-lts
```

### Option 3: Using Winget (Windows 10/11)

If you have Windows Package Manager:
```powershell
winget install OpenJS.NodeJS.LTS
```

## After Installation

Once Node.js is installed:

1. **Close and reopen PowerShell** (important!)

2. **Navigate to your project:**
   ```powershell
   cd "D:\My Profile"
   ```

3. **Install dependencies:**
   ```powershell
   npm install
   ```

4. **Run your website:**
   ```powershell
   npm run dev
   ```

## Troubleshooting

**If `npm` still not recognized after installation:**
- Make sure you closed and reopened PowerShell
- Check if Node.js is in PATH:
  ```powershell
  $env:PATH -split ';' | Select-String node
  ```
- If not found, you may need to manually add it to PATH or reinstall Node.js

**Need help?** The official Node.js website has detailed installation instructions for Windows.

