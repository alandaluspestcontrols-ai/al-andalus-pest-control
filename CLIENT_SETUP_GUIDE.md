# Al Andalus Pest Control - Client Setup Guide

This document provides a complete guide for setting up, running, and updating the project.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Step 1: Get the Project from GitHub](#step-1-get-the-project-from-github)
3. [Step 2: Install Dependencies](#step-2-install-dependencies)
4. [Step 3: Run the Project](#step-3-run-the-project)
5. [Step 4: Make Code Changes](#step-4-make-code-changes)
6. [Step 5: Update and Push Code to GitHub](#step-5-update-and-push-code-to-github)
7. [Netlify Auto-Deployment](#netlify-auto-deployment)
8. [Common Issues and Solutions](#common-issues-and-solutions)

---

## Prerequisites

To run this project, you need to install the following software:

### 1. Node.js and npm

- **Download**: [https://nodejs.org/](https://nodejs.org/)
- **Version**: Node.js 18.x or higher (recommended: 20.x)
- **Check installation with command**:
  ```bash
  node --version
  npm --version
  ```
- **Installation Steps**:
  1. Download the installer from the Node.js website
  2. Run the installer
  3. Install with default settings
  4. Restart your terminal/command prompt after installation

### 2. Git

- **Download**: [https://git-scm.com/downloads](https://git-scm.com/downloads)
- **Check installation with command**:
  ```bash
  git --version
  ```
- **Installation Steps**:
  1. Download the installer from the Git website
  2. Run the installer
  3. Install with default settings

### 3. Code Editor (Optional but Recommended)

- **VS Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Or any text editor where you can edit code

---

## Step 1: Get the Project from GitHub

The project code is already stored on GitHub. You have two options to get the code:

### Option A: Clone from GitHub (Recommended - First Time Setup)

This is the recommended method if you're setting up the project for the first time or on a new computer.

1. **Open Terminal/Command Prompt**:

   - Press `Win + R`, type `cmd`, and press Enter
   - Or open PowerShell

2. **Navigate to where you want to save the project**:

   ```bash
   cd Desktop
   ```

   Or navigate to any folder where you want to store the project

3. **Clone the repository**:

   ```bash
   git clone https://github.com/alandaluspestcontrols-ai/al-andalus-pest-control-.git
   ```

4. **Navigate into the project folder**:
   ```bash
   cd al-andalus-pest-control-
   ```

### Option B: Use the Zip File (If Provided)

If you received a zip file instead:

1. **Extract the zip file**:

   - Right-click on the zip file
   - Select "Extract All" or "Extract Here"
   - A folder will be created: `al-andalus-pest-control`

2. **Open the project folder**:

   ```bash
   cd al-andalus-pest-control
   ```

3. **Connect to GitHub repository** (if not already connected):
   ```bash
   git remote add origin https://github.com/alandaluspestcontrols-ai/al-andalus-pest-control-.git
   ```

---

## Step 2: Install Dependencies

After navigating to the project folder, install all required packages:

### Command:

```bash
npm install
```

### What this command does:

- Reads the `package.json` file
- Downloads all dependencies and devDependencies
- Creates the `node_modules` folder
- Installation may take 2-5 minutes

### Expected Output:

```
added 500+ packages, and audited 500+ packages in 2m
```

### If you get an Error:

- **Error: "npm is not recognized"**: Node.js is not properly installed
- **Solution**: Reinstall Node.js and restart your terminal

---

## Step 3: Run the Project

### Run in Development Mode (For Development):

```bash
npm run dev
```

### What this command does:

- Starts the development server
- Code changes are automatically reflected (hot reload)
- Server runs on `http://localhost:3000`

### Open in Browser:

```
http://localhost:3000
```

### To Stop the Server:

- Press `Ctrl + C` in the terminal

---

## Step 4: Make Code Changes

### Important Files and Locations:

1. **Home Page**: `app/page.tsx`
2. **About Page**: `app/about/page.tsx`
3. **Services Page**: `app/services/page.tsx`
4. **Contact Page**: `app/contact/page.tsx`
5. **Gallery Page**: `app/gallery/page.tsx`
6. **Translations**: `app/translations.ts`
7. **Navigation**: `app/components/Navigation.tsx`
8. **Footer**: `app/components/Footer.tsx`
9. **Styling**: `app/globals.css`

### After Making Changes:

- If the development server (`npm run dev`) is running, changes will automatically reflect
- Refresh your browser (F5)

### Create Production Build (For Deployment):

```bash
npm run build
```

After a successful build:

```bash
npm start
```

This will start the server in production mode.

---

## Step 5: Update and Push Code to GitHub

### Important: GitHub Repository Information

- **Repository URL**: `https://github.com/alandaluspestcontrols-ai/al-andalus-pest-control-.git`
- The repository already exists and contains the project code
- You need to pull the latest code before making changes
- After pushing changes, Netlify will automatically deploy the updates to the live website

---

### A. Pull Latest Code from GitHub (Before Making Changes)

**Always pull the latest code first** to ensure you're working with the most recent version:

#### Step 1: Check Current Status

```bash
git status
```

#### Step 2: Pull Latest Code

```bash
git pull origin main
```

Or if you're on a different branch:

```bash
git pull
```

**What this does**: Downloads any new changes from GitHub to your local computer

**When to do this**:

- Before starting to work on the project
- If someone else has made changes to the code
- To sync your local code with GitHub

---

### B. Make Changes and Push to GitHub (Regular Workflow)

Follow these steps whenever you want to update the code:

#### Step 1: Pull Latest Code (Important!)

```bash
git pull origin main
```

This ensures you have the latest version before making changes.

#### Step 2: Make Your Code Changes

Edit the files you need to update (see [Step 4: Make Code Changes](#step-4-make-code-changes))

#### Step 3: Check What Changed

```bash
git status
```

This shows you which files have been modified.

#### Step 4: Stage Your Changes

To stage all changes:

```bash
git add .
```

Or to stage specific files only:

```bash
git add app/page.tsx app/contact/page.tsx
```

#### Step 5: Commit Your Changes

```bash
git commit -m "Updated contact page and home page"
```

**Note**: Write a clear commit message describing what you changed. Examples:

- `"Updated contact form validation"`
- `"Added new service to services page"`
- `"Fixed navigation menu styling"`

#### Step 6: Push to GitHub

```bash
git push origin main
```

**What happens next**:

- Your code is uploaded to GitHub
- Netlify automatically detects the push
- Netlify builds and deploys the updated website
- Your live website is updated within 2-5 minutes

---

### C. If You Get "Your branch is behind" Error

If you see an error like "Your branch is behind 'origin/main'", it means someone else pushed changes. Do this:

```bash
# Pull the latest changes
git pull origin main

# If there are conflicts, resolve them, then:
git add .
git commit -m "Merged latest changes"
git push origin main
```

---

### C. GitHub Authentication (Credentials)

#### Option 1: Personal Access Token (Recommended)

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token"
3. Select `repo` in Permissions
4. Generate the token and copy it
5. Use the token instead of password when pushing

#### Option 2: GitHub Desktop (Easier for Beginners)

- Download [GitHub Desktop](https://desktop.github.com/)
- You can easily push/pull through the GUI

---

## Netlify Auto-Deployment

### How It Works

Your website is hosted on Netlify and is connected to your GitHub repository. This means:

1. **Automatic Deployment**: When you push code to GitHub, Netlify automatically:

   - Detects the new changes
   - Builds the project (`npm run build`)
   - Deploys the updated website
   - Updates your live website within 2-5 minutes

2. **No Manual Deployment Needed**: You don't need to manually deploy - just push to GitHub!

### Deployment Process

```
You Push Code → GitHub → Netlify Detects → Builds Project → Deploys → Live Website Updated
```

### Checking Deployment Status

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Login to your account
3. Click on your site
4. Go to "Deploys" tab to see deployment history
5. You'll see:
   - ✅ Green checkmark = Successful deployment
   - ⏳ Spinning icon = Currently deploying
   - ❌ Red X = Deployment failed

### Important Notes

- **Build Time**: Each deployment takes 2-5 minutes
- **Live Updates**: Your website automatically updates after successful deployment
- **Build Logs**: Check Netlify dashboard if deployment fails
- **No Action Required**: Just push to GitHub - Netlify handles the rest!

---

## Common Issues and Solutions

### Issue 1: "npm is not recognized"

**Solution**:

- Install Node.js
- Restart your terminal
- Node.js should be added to the system PATH

### Issue 2: "Port 3000 already in use"

**Solution**:

```bash
# Free the port in Windows
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Or run on a different port
npm run dev -- -p 3001
```

### Issue 3: "Module not found" Error

**Solution**:

```bash
# Delete node_modules
rm -rf node_modules
# Or in Windows:
rmdir /s node_modules

# Reinstall
npm install
```

### Issue 4: Authentication Error in Git Push

**Solution**:

- Use Personal Access Token
- Or use GitHub Desktop

### Issue 6: "Failed to push some refs" or "Updates were rejected"

**Solution**:

This happens when someone else pushed changes. Pull first, then push:

```bash
git pull origin main
# Resolve any conflicts if needed
git push origin main
```

### Issue 7: Netlify Deployment Failed

**Solution**:

1. Check Netlify dashboard for error logs
2. Make sure your code builds locally:
   ```bash
   npm run build
   ```
3. Fix any build errors
4. Push again:
   ```bash
   git push origin main
   ```

### Issue 5: Build Errors

**Solution**:

```bash
# Clear cache
npm run build -- --no-cache

# Or delete .next folder
rm -rf .next
npm run build
```

---

## 📝 Quick Reference Commands

### Installation:

```bash
npm install
```

### Development:

```bash
npm run dev
```

### Production Build:

```bash
npm run build
npm start
```

### Git Commands:

```bash
git status                    # Check changes
git pull origin main          # Pull latest code from GitHub
git add .                     # Stage all changes
git commit -m "message"      # Commit changes
git push origin main          # Push to GitHub (triggers Netlify deployment)
```

### Complete Workflow (Every Time You Update):

```bash
# 1. Pull latest code
git pull origin main

# 2. Make your changes (edit files)

# 3. Check what changed
git status

# 4. Stage changes
git add .

# 5. Commit
git commit -m "Description of changes"

# 6. Push (Netlify will auto-deploy)
git push origin master
```

---

## 📞 Support

If you encounter any problems:

1. Carefully read the error message
2. Check solutions in this guide
3. Search GitHub issues
4. Contact the developer

---

## ✅ Checklist (To Complete Setup)

- [ ] Node.js installed
- [ ] Git installed
- [ ] Project cloned/pulled from GitHub
- [ ] `npm install` ran successfully
- [ ] Project running with `npm run dev`
- [ ] `http://localhost:3000` opens in browser
- [ ] GitHub repository connected
- [ ] Tested pulling latest code with `git pull`
- [ ] Tested pushing code with `git push`
- [ ] Verified Netlify auto-deployment is working

---

**Last Updated**: December 2024
**Project**: Al Andalus Pest Control Website
**Framework**: Next.js 16 with TypeScript
