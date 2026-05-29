# Deployment Guide

This guide walks you through deploying your AI portfolio to Vercel or Netlify so you can share it with recruiters.

## Table of Contents
1. [Deploy to Vercel](#deploy-to-vercel)
2. [Deploy to Netlify](#deploy-to-netlify)
3. [Post-Deployment Setup](#post-deployment-setup)
4. [Sharing Your Portfolio](#sharing-your-portfolio)

---

## Deploy to Vercel

Vercel is the recommended platform for hosting this portfolio. It's fast, free, and integrates seamlessly with GitHub.

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name: `interactive-ai-portfolio`
3. Description: "Interactive AI-powered portfolio showcasing analysis and insights capabilities"
4. Make it **Public**
5. Click "Create repository"

### Step 2: Push Your Code to GitHub

```bash
# Navigate to your project folder
cd interactive-ai-portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Interactive AI portfolio"

# Add remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/mitali06/interactive-ai-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" (use GitHub account for easy setup)
3. Click "New Project"
4. Select "Import Git Repository"
5. Find and select `interactive-ai-portfolio`
6. Click "Import"

### Step 4: Add Environment Variable

1. In the Vercel project settings, go to "Environment Variables"
2. Add a new variable:
   - **Name:** `CLAUDE_API_KEY`
   - **Value:** Your Claude API key (from [console.anthropic.com](https://console.anthropic.com))
3. Click "Save"
4. Redeploy the project

### Step 5: Get Your Live URL

After deployment, Vercel will give you a URL like:
```
https://interactive-ai-portfolio.vercel.app
```

This is your portfolio link to share!

### Automatic Deployments

From now on, whenever you push code to GitHub, Vercel will automatically redeploy your site.

---

## Deploy to Netlify

Netlify is another excellent option with a simple drag-and-drop interface.

### Option A: GitHub Integration (Recommended)

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" (use GitHub)
3. Click "New site from Git"
4. Select GitHub
5. Find `interactive-ai-portfolio`
6. Click "Deploy site"

### Option B: Drag & Drop (Quickest)

1. Go to [netlify.com](https://netlify.com)
2. Click and drag your project folder to "Deploy without Git"
3. Wait for deployment
4. You'll get a random URL like `https://random-name.netlify.app`
5. Edit the site name in Netlify dashboard

### Add Environment Variable (Netlify)

1. Go to your site dashboard
2. Click "Site settings"
3. Go to "Build & deploy" → "Environment"
4. Click "Edit variables"
5. Add:
   - **Key:** `CLAUDE_API_KEY`
   - **Value:** Your Claude API key
6. Click "Save"

### Custom Domain (Optional)

1. Go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Enter your domain (e.g., `ai-portfolio.com`)
4. Follow DNS configuration steps

---

## Post-Deployment Setup

### Get Your Claude API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up or log in
3. Go to "API keys"
4. Click "Create API key"
5. Copy the key (starts with `sk-ant-`)
6. Add to your deployment platform (see above)

### Test Your Portfolio

1. Open your deployed URL
2. Click the settings icon (⚙️) in the bottom right
3. Paste your Claude API key
4. Try each tool to make sure everything works

### Monitor API Usage

Track your API usage:
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Click "Dashboard"
3. Monitor credits and usage
4. Set up billing alerts if needed

---

## Sharing Your Portfolio

### On LinkedIn

1. Add to your profile URL:
   - Edit profile → "Open to work"
   - Add your portfolio URL to the links section

2. Share in your About section:
   - Add a line: "Check out my interactive AI portfolio: [your-url]"

3. Create a post:
   - "I just launched my AI portfolio! Try these interactive demos: [link]"

### In Job Applications

1. **Resume:** Add under "Projects" or "Portfolio"
   - "Interactive AI Portfolio - [live URL]"
   - Demonstrates proficiency with Claude API and full-stack development

2. **Cover Letters:**
   - "I've built an interactive AI portfolio showcasing my analysis skills. Check it out: [link]"

3. **Application Forms:**
   - Paste the URL in portfolio/website fields

### Email to Recruiters

```
Subject: Check out my AI portfolio

Hi [Recruiter Name],

I've built an interactive AI-powered portfolio that showcases my skills in AI analysis and development. Feel free to explore it and see the tools in action:

[Your Live URL]

It features:
- Sentiment analysis and text interpretation
- Research and data insights generation
- Content summarization
- Data-driven recommendations

The portfolio is built with JavaScript and the Claude API, demonstrating both frontend development and AI integration skills.

Best regards,
mitali06
```

---

## Troubleshooting

### API Key Not Working

**Problem:** "API call failed" error
**Solution:**
- Verify your API key is correct
- Check that your key has available credits (free tier gives $5)
- Try copying the key again - sometimes special characters don't paste correctly

### Slow Performance

**Problem:** Tool responses take a long time
**Solution:**
- Claude API typically responds in 1-3 seconds
- Check your internet connection
- Try a simpler query
- Monitor your API quotas in the console

### Site Not Deploying

**Problem:** Vercel/Netlify shows build error
**Solution:**
- Ensure all files are properly committed to GitHub
- Check that `index.html` is in the root directory
- Verify no syntax errors in HTML/CSS/JS

### Environment Variable Not Working

**Problem:** "API key not set" error even though you added it
**Solution:**
- Restart/redeploy the site after adding the variable
- Check that the variable name is exactly `CLAUDE_API_KEY`
- Try clearing your browser cache (Ctrl+Shift+Delete)

### Can't Remember Your URL

**Vercel:**
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your project
3. URL is at the top

**Netlify:**
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click your site
3. URL is displayed at the top

---

## Keep It Updated

### Pull Changes from GitHub

```bash
git pull origin main
```

### Push New Changes

```bash
git add .
git commit -m "Update: [what changed]"
git push origin main
```

Your deployment will automatically update!

---

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Deploy to Vercel or Netlify
3. ✅ Add Claude API key
4. ✅ Test the portfolio
5. ✅ Share on LinkedIn
6. ✅ Include in job applications
7. 📊 Monitor API usage
8. 🎯 Customize tools to match your skills

---

Need help? Check the [main README](README.md) or visit [anthropic.com/support](https://support.anthropic.com)
