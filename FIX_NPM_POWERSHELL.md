# Fix npm PowerShell Execution Policy Issue

## The Problem
PowerShell is blocking npm scripts due to execution policy restrictions. You have Node.js installed, but npm can't run.

## Solution Options

### Option 1: Use Command Prompt (CMD) - Easiest! ✅

Instead of PowerShell, use **Command Prompt** (cmd.exe):

1. Press `Win + R`
2. Type `cmd` and press Enter
3. Navigate to your project:
   ```cmd
   cd "D:\My Profile"
   ```
4. Run npm commands normally:
   ```cmd
   npm --version
   npm install
   npm run dev
   ```

**This works immediately - no configuration needed!**

---

### Option 2: Fix PowerShell Execution Policy

If you prefer to use PowerShell, you need to allow scripts to run:

1. **Open PowerShell as Administrator:**
   - Right-click on PowerShell
   - Select "Run as Administrator"

2. **Set execution policy:**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
   - Type `Y` when prompted

3. **Close and reopen PowerShell** (regular, not admin)

4. **Verify:**
   ```powershell
   npm --version
   ```

---

### Option 3: Bypass for Current Session Only

Run this command each time you open PowerShell:

```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

Then run npm commands normally.

---

## Recommended: Use Command Prompt

For now, the easiest solution is to use **Command Prompt (cmd.exe)** instead of PowerShell. It doesn't have these restrictions and npm will work immediately.

After running `npm install` and `npm run dev` in Command Prompt, your website will work perfectly!

