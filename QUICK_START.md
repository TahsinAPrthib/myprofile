# Quick Start Guide - Run Your Portfolio

## Step-by-Step Instructions

### 1. Open Command Prompt (CMD)
- Press `Win + R`
- Type `cmd` and press Enter

### 2. Navigate to Your Project Folder

In Command Prompt, type these commands one by one:

```cmd
D:
```

Then:

```cmd
cd "My Profile"
```

**Important:** Make sure you see the prompt change to:
```
D:\My Profile>
```

If you see this, you're in the right place! ✅

### 3. Install Dependencies

```cmd
npm install
```

This will take a few minutes. Wait for it to complete.

### 4. Start the Development Server

```cmd
npm run dev
```

You should see:
```
  ▲ Next.js 14.0.4
  - Local:        http://localhost:3000
```

### 5. Open Your Browser

Go to: **http://localhost:3000**

Your portfolio website should be running! 🎉

---

## Troubleshooting

**If `cd "My Profile"` doesn't work:**
- Try: `cd "D:\My Profile"` (full path)
- Or: `cd D:\My` then `cd Profile`

**If you see "npm is not recognized":**
- Make sure you're using Command Prompt (cmd.exe), not PowerShell
- Or fix PowerShell execution policy (see FIX_NPM_POWERSHELL.md)

**To stop the server:**
- Press `Ctrl + C` in the Command Prompt window

