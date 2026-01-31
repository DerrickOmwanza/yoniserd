# GitHub Pages Deployment Guide for YoNISeRD Website

## Overview
This guide walks you through deploying your React website to GitHub Pages. Your repo is already public at: **https://github.com/DerrickOmwanza/ynis-rd-website**

---

## Step 1: Install GitHub Pages Deployment Package

Run this command in your terminal:

```bash
npm install --save-dev gh-pages
```

This adds the `gh-pages` package which handles automatic deployment to GitHub Pages.

---

## Step 2: Update package.json

You need to add deployment scripts and set the homepage. Here's what to update:

### Add homepage (UPDATE THIS):
```json
"homepage": "https://derrickomwanza.github.io/ynis-rd-website"
```

### Add deploy scripts to "scripts" section:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

**Full updated scripts section:**
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

---

## Step 3: Update React Router for GitHub Pages

Your app uses React Router. You need to update it to work with GitHub Pages subdirectory routing.

**File:** `src/App.js`

Change:
```jsx
<BrowserRouter>
```

To:
```jsx
<BrowserRouter basename="/ynis-rd-website">
```

This tells React Router that the app is in a subdirectory, not the root.

---

## Step 4: Commit Changes

After making the above changes, commit them:

```bash
git add package.json src/App.js
git commit -m "Setup GitHub Pages deployment: add gh-pages, update routing basename"
git push origin main
```

---

## Step 5: Deploy to GitHub Pages

When ready to deploy, run:

```bash
npm run deploy
```

This will:
1. Build your React app (`npm run build`)
2. Upload the `build` folder to GitHub Pages
3. Create a `gh-pages` branch automatically

---

## Step 6: Enable GitHub Pages in Repository Settings

1. Go to: **https://github.com/DerrickOmwanza/ynis-rd-website/settings/pages**
2. Under **"Source"**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Click **Save**

GitHub will now build and host your site automatically.

---

## Step 7: Access Your Live Site

Your site will be live at:
```
https://derrickomwanza.github.io/ynis-rd-website
```

It may take 1-2 minutes to appear. Refresh if needed.

---

## Full Deployment Checklist

- [ ] Install `gh-pages` package: `npm install --save-dev gh-pages`
- [ ] Update `package.json` homepage to: `https://derrickomwanza.github.io/ynis-rd-website`
- [ ] Add `predeploy` and `deploy` scripts to `package.json`
- [ ] Update `src/App.js` - add `basename="/ynis-rd-website"` to BrowserRouter
- [ ] Commit changes: `git add . && git commit -m "Setup GitHub Pages"`
- [ ] Push to GitHub: `git push origin main`
- [ ] Run deployment: `npm run deploy`
- [ ] Enable GitHub Pages in repo settings (select `gh-pages` branch)
- [ ] Wait 1-2 minutes
- [ ] Visit: https://derrickomwanza.github.io/ynis-rd-website

---

## Troubleshooting

### Issue: Blank page after deployment
**Solution:** Check that `basename` is correctly set in `src/App.js`

### Issue: Assets not loading (CSS, images broken)
**Solution:** Verify `homepage` is set to: `https://derrickomwanza.github.io/ynis-rd-website`

### Issue: Page not found (404)
**Solution:** Make sure you've waited 2-3 minutes and GitHub Pages is enabled in settings

### Issue: Links not working
**Solution:** Ensure React Router has `basename="/ynis-rd-website"` set

---

## Keeping Netlify + GitHub Pages

You can keep BOTH deployed:
- **Netlify** (current): https://yoniserd.netlify.app - For development/testing
- **GitHub Pages** (new): https://derrickomwanza.github.io/ynis-rd-website - Official backup

---

## Future Deployments

After the initial setup, every time you want to update your live site:

```bash
git add .
git commit -m "Update: [your changes]"
git push origin main
npm run deploy
```

That's it! Your changes will be live in seconds.

---

## Need Help?

- **GitHub Pages Docs:** https://pages.github.com/
- **React Router Basename:** https://reactrouter.com/start/library/using-basename
- **gh-pages NPM:** https://www.npmjs.com/package/gh-pages
