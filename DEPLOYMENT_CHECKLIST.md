# GitHub Pages Deployment Checklist

## Pre-Deployment (✅ COMPLETED)

- [x] Install gh-pages package: `npm install --save-dev gh-pages`
- [x] Update package.json homepage: `https://derrickomwanza.github.io/ynis-rd-website`
- [x] Add predeploy script: `"predeploy": "npm run build"`
- [x] Add deploy script: `"deploy": "gh-pages -d build"`
- [x] Update App.js with basename: `<Router basename="/ynis-rd-website">`
- [x] Commit changes to GitHub
- [x] Push main branch to GitHub

---

## Deployment Steps (DO THIS NOW)

### Step 1: Deploy to GitHub Pages
Open your terminal and run:

```bash
npm run deploy
```

**What happens:**
- React app is built
- `gh-pages` creates/updates the `gh-pages` branch
- Your site is uploaded to GitHub Pages
- Takes ~30 seconds to 2 minutes

**Expected output:**
```
> gh-pages -d build

Published
```

---

### Step 2: Configure GitHub Repository Settings (Manual)

Go to: **https://github.com/DerrickOmwanza/ynis-rd-website/settings/pages**

1. Scroll to **"Build and deployment"**
2. Under **"Source"**, select:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
3. Click **Save**

GitHub will now serve your site from the `gh-pages` branch.

---

### Step 3: Verify Deployment

Check your site is live:

**Live URL:** https://derrickomwanza.github.io/ynis-rd-website

**Troubleshooting tips:**
- Takes 1-2 minutes to appear
- Clear browser cache (Ctrl+Shift+Delete)
- Check deployment status: https://github.com/DerrickOmwanza/ynis-rd-website/deployments

---

## Post-Deployment

### ✅ What Should Work
- [ ] Home page loads
- [ ] Navigation menu works (desktop)
- [ ] Mobile hamburger menu works
- [ ] All links navigate correctly
- [ ] Images load properly
- [ ] Styling (Tailwind CSS) displays correctly
- [ ] Contact form appears
- [ ] Footer loads

### 🔄 What to Check

**Desktop view:**
- Open https://derrickomwanza.github.io/ynis-rd-website
- Click About Us → see About page
- Click Programs → see Programs page
- Test all main menu items

**Mobile view:**
- Click hamburger menu (3 lines)
- Tap About Us (dropdown expands)
- Tap Gallery → see Gallery page
- Verify white drawer has dark text links

---

## Future Deployments

Every time you make changes, follow this workflow:

```bash
# 1. Make changes to code
# Edit files as needed

# 2. Commit to main branch
git add .
git commit -m "Your description of changes"
git push origin main

# 3. Deploy to GitHub Pages
npm run deploy
```

That's it! Your changes will be live in 1-2 minutes.

---

## Keeping Multiple Hosts Active

### Current Setup
- **Netlify** (original): https://yoniserd.netlify.app
- **GitHub Pages** (new): https://derrickomwanza.github.io/ynis-rd-website

You can keep both active:
- Use Netlify for development/testing
- Use GitHub Pages as main site
- Or use whichever you prefer

To disable one:
- Netlify: Go to Settings → Danger Zone → Delete Site
- GitHub Pages: Settings → Pages → Disable

---

## Important Notes

⚠️ **DO NOT:**
- Delete the `gh-pages` branch
- Change the deploy script
- Modify the `basename` in App.js
- Push to a different branch name

✅ **DO:**
- Keep main branch updated
- Run `npm run deploy` after pushing main
- Check your live site after deployment
- Use the checklist before each deployment

---

## Quick Reference Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages (DEPLOYMENT COMMAND)
npm run deploy

# View all commits
git log --oneline

# Check git status
git status

# Create a new branch
git checkout -b feature-name
```

---

## Support Resources

- **GitHub Pages Help:** https://pages.github.com/
- **React Router Docs:** https://reactrouter.com/
- **gh-pages NPM:** https://www.npmjs.com/package/gh-pages
- **Your Repository:** https://github.com/DerrickOmwanza/ynis-rd-website

---

## Deployment Status

| Item | Status | URL |
|------|--------|-----|
| Repository | ✅ Active | https://github.com/DerrickOmwanza/ynis-rd-website |
| Main Branch | ✅ Ready | All changes committed |
| GitHub Pages | 🔄 Pending | https://derrickomwanza.github.io/ynis-rd-website |
| Netlify | ✅ Active | https://yoniserd.netlify.app |

---

## Next Steps

1. **RUN:** `npm run deploy` in your terminal
2. **CONFIGURE:** GitHub Pages settings (select gh-pages branch)
3. **WAIT:** 1-2 minutes for site to go live
4. **VERIFY:** Visit your live URL
5. **CELEBRATE:** Your site is live on GitHub Pages! 🎉

---

**Last Updated:** January 31, 2026  
**Status:** Ready for deployment
