# How to Run Your Portfolio Website

## Step 1: Install Node.js

You need to install Node.js first (which includes npm). 

1. **Download Node.js:**
   - Go to: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version (recommended)
   - Choose the Windows installer (.msi file)

2. **Install Node.js:**
   - Run the downloaded installer
   - Follow the installation wizard (accept defaults)
   - Make sure to check "Add to PATH" option if available

3. **Verify Installation:**
   - Open a new PowerShell or Command Prompt window
   - Run these commands to verify:
     ```bash
     node --version
     npm --version
     ```
   - You should see version numbers (e.g., v20.x.x and 10.x.x)

## Step 2: Install Project Dependencies

Once Node.js is installed, open PowerShell or Command Prompt in your project folder and run:

```bash
npm install
```

This will install all the required packages (Next.js, React, TypeScript, Tailwind CSS, etc.)

## Step 3: Run the Development Server

After installation completes, start the development server:

```bash
npm run dev
```

You should see output like:
```
  ▲ Next.js 14.0.4
  - Local:        http://localhost:3000
  - ready started server on 0.0.0.0:3000
```

## Step 4: View Your Website

Open your web browser and go to:
**http://localhost:3000**

You should see your portfolio website! 🎉

## Other Useful Commands

- **Stop the server:** Press `Ctrl + C` in the terminal
- **Build for production:** `npm run build`
- **Start production server:** `npm start` (after building)

## Troubleshooting

If you encounter any issues:

1. **"npm is not recognized"** - Make sure Node.js is installed and restart your terminal
2. **Port 3000 already in use** - Next.js will automatically use the next available port (3001, 3002, etc.)
3. **Installation errors** - Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again

## Need Help?

If you run into any problems, check:
- Node.js version is 18 or higher
- You're in the correct project directory
- Your internet connection is working (for downloading packages)

