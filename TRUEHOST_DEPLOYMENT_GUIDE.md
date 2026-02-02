# YNIS-RD Website Deployment to TrueHost - Complete Guide

## Budget Breakdown (1500-1800 KES)
- **Domain (.co.ke or .com):** 500-800 KES/year
- **Shared Hosting (12 months):** 700-1000 KES/year
- **Buffer for setup/support:** 100-200 KES
- **Total:** ~1500-1800 KES

---

## PHASE 1: PRE-DEPLOYMENT PREPARATION (LOCAL)

### Step 1: Build Production Bundle
```bash
npm run build
```
- Creates optimized `build/` folder
- Minified React, CSS, JavaScript
- Ready for server deployment
- **Verify:** Check that `build/` folder exists with 150+ files

### Step 2: Test Build Locally
```bash
npm install -g serve
serve -s build -l 3000
```
- Visit `http://localhost:3000`
- Test all pages: Home, About, Programs, Our Work, Gallery, News, Impact, Contact
- Test mobile responsiveness
- Verify forms, links, dropdowns work
- Check that no console errors appear

### Step 3: Verify Build Size
```bash
du -sh build/
```
- Should be **~500KB-2MB** (acceptable for shared hosting)
- If larger, may need optimization (unlikely with Tailwind)

---

## PHASE 2: DOMAIN & HOSTING SETUP (TrueHost)

### Step 4: Register Domain at TrueHost

**Go to:** https://www.truehost.co.ke/

1. **Search Domain**
   - Preferred: `yoniserd.co.ke` or `yoniserd.com`
   - Cost: ~500-800 KES/year
   - Duration: Register for 2 years if budget allows (discount available)

2. **Add to Cart & Checkout**
   - Select payment method: M-PESA, Equity Bank, or Card
   - Complete purchase
   - Receive domain confirmation email

3. **Important:** Save domain credentials
   - Domain name
   - Registrar account email/password
   - Domain nameservers (provided by TrueHost)

### Step 5: Purchase Shared Hosting at TrueHost

**On same TrueHost account:**

1. **Select Hosting Plan**
   - Plan: **Economy/Standard Hosting** (recommended for React static site)
   - Disk Space: 10GB+ (plenty for this site)
   - Bandwidth: Unlimited
   - Cost: ~700-1000 KES/year (12 months)
   - Features to verify:
     - ✓ cPanel access
     - ✓ FTP/SFTP support
     - ✓ SSL certificate (Let's Encrypt, usually free)
     - ✓ PHP support (optional, not needed for static React site)

2. **Complete Hosting Purchase**
   - Select domain (the one just registered)
   - Proceed to checkout
   - Pay via M-PESA or Equity Bank
   - Receive hosting confirmation email

3. **Save Hosting Credentials**
   - Hosting account username/password
   - cPanel URL (usually `yourdomain.com/cpanel`)
   - FTP/SFTP credentials
   - FTP host address

---

## PHASE 3: HOSTING CONFIGURATION (cPanel)

### Step 6: Access cPanel

1. **Login to cPanel**
   - URL: `https://yourdomain.com/cpanel` (or provided cPanel URL)
   - Username: Hosting account username
   - Password: Hosting account password

2. **Navigate Dashboard**
   - Look for "File Manager" or "FTP Manager"

### Step 7: Configure DNS (Point Domain to Hosting)

**In cPanel:**

1. Go to **Addon Domains** or **Parked Domains**
2. If domain not auto-linked, add it:
   - Domain: `yoniserd.co.ke` (or your domain)
   - Document Root: `/public_html/yoniserd` (or default `/public_html`)
   - Click "Add Domain"

3. **Verify DNS Propagation** (wait 24-48 hours, usually faster)
   - Test: `ping yourdomain.co.ke`
   - Check: https://www.whatsmydns.net/ (search your domain)
   - Green checkmarks = DNS propagated

### Step 8: Enable SSL Certificate (Free HTTPS)

**In cPanel:**

1. Go to **AutoSSL** or **SSL/TLS Status**
2. Click **"Issue"** or **"Install"** for Let's Encrypt
3. Select your domain: `yoniserd.co.ke`
4. Click **"Install SSL"**
5. Wait 5-10 minutes for certificate to issue
6. Verify: Visit `https://yourdomain.co.ke` (should show lock icon)

---

## PHASE 4: DEPLOY BUILD TO HOSTING

### Step 9: Upload Build Files via FTP/SFTP

**Option A: Using FTP Client (Recommended for beginners)**

1. **Install FTP Client**
   - Download: FileZilla (free) or WinSCP
   - https://filezilla-project.org/

2. **Connect to Hosting**
   - Host: FTP address from hosting email
   - Username: FTP username
   - Password: FTP password
   - Port: 21 (FTP) or 22 (SFTP)
   - Click "Quickconnect"

3. **Navigate & Upload**
   - Remote folder: `/public_html/` (or `/public_html/yoniserd` if subdomain)
   - Local folder: Open `build/` folder from your project
   - Select ALL contents of `build/` folder
   - Right-click → "Upload"
   - Wait for upload to complete (all files green checkmark)

**Option B: Using cPanel File Manager**

1. **Login to cPanel**
2. **Open File Manager**
3. Navigate to `/public_html/`
4. Click **"Upload"**
5. Select all files from local `build/` folder
6. Upload
7. May take longer but no additional software needed

### Step 10: Verify File Structure

After upload, `/public_html/` should contain:
```
public_html/
├── index.html         (main entry point)
├── favicon.ico
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── manifest.json
└── robots.txt
```

**Check in cPanel File Manager** - verify all files are present

---

## PHASE 5: POST-DEPLOYMENT VERIFICATION

### Step 11: Test Live Website

1. **Visit your domain**
   - Open browser: `https://yourdomain.co.ke`
   - Should show YNIS-RD homepage
   - Lock icon indicates HTTPS/SSL working

2. **Test All Pages**
   - Home ✓
   - About ✓
   - Programs ✓
   - Our Work ✓
   - Gallery ✓
   - News ✓
   - Impact ✓
   - Contact ✓

3. **Test Functionality**
   - Mobile menu opens/closes ✓
   - Desktop navigation works ✓
   - Links navigate correctly ✓
   - Images load ✓
   - Forms (Contact) functional ✓
   - No console errors (F12 Developer Tools) ✓

4. **Performance Check**
   - Page load time < 3 seconds
   - Check: https://www.gtmetrix.com (paste your domain)

### Step 12: Verify HTTPS & Security

1. **SSL Certificate Active**
   - Visit `https://yourdomain.co.ke` (green lock should show)
   - Click lock → certificate info should display

2. **HTTP Redirect**
   - Visit `http://yourdomain.co.ke` (should redirect to HTTPS)
   - Verify in cPanel that redirect is configured

3. **Security Headers** (optional but recommended)
   - In cPanel, look for ".htaccess" editor
   - Add lines:
   ```
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteCond %{HTTPS} !=on
     RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   </IfModule>
   ```

---

## PHASE 6: BACKUP & MAINTENANCE

### Step 13: Setup Automated Backups

**In cPanel:**

1. Go to **Backup Wizard** or **Backup** section
2. Click **"Full Backup"** to create first backup
3. Download backup file to local computer (safety net)
4. Check if hosting plan includes automatic daily backups

### Step 14: Post-Launch Checklist

- [ ] Domain resolves to hosting (test via terminal: `nslookup yourdomain.co.ke`)
- [ ] All files uploaded to `/public_html/`
- [ ] Website loads at domain (HTTP & HTTPS)
- [ ] All pages accessible
- [ ] Contact form works
- [ ] Images/assets load
- [ ] Mobile responsive
- [ ] No console errors
- [ ] SSL certificate active
- [ ] Backup created and saved locally

---

## PHASE 7: FINAL STEPS & HANDOVER

### Step 15: Update Client Information

**Provide to client:**

```
DEPLOYMENT COMPLETE
==================
Domain: yourdomain.co.ke
URL: https://yourdomain.co.ke
SSL: Active (HTTPS enabled)

Access Credentials:
- cPanel URL: https://yourdomain.co.ke/cpanel
- Username: [hosting username]
- Password: [hosting password]

Domain Registrar: TrueHost
Support: support@truehost.co.ke

Annual Renewal:
- Domain: 500-800 KES (due [DATE])
- Hosting: 700-1000 KES (due [DATE])
- Total: ~1500 KES/year
```

### Step 16: Create Post-Launch Support Plan

**Free 30-day support (from Agreement):**
- Bug fixes
- Minor adjustments
- Monitoring

**Paid support after 30 days:**
- 1,500 KES/day for revisions/changes
- Per terms in Development Agreement

---

## COST SUMMARY

| Item | Cost (KES) | Duration |
|------|-----------|----------|
| Domain (.co.ke) | 600 | 1 year |
| Shared Hosting | 900 | 1 year |
| SSL Certificate | FREE | Auto-renewed |
| **TOTAL** | **1,500** | **12 months** |

**Annual Renewal Cost:** ~1,500 KES (same as initial)

---

## TROUBLESHOOTING

### Website Not Loading
- [ ] Check DNS propagation (whatsmydns.net)
- [ ] Verify files uploaded to `/public_html/`
- [ ] Check cPanel "Error Logs" for server errors
- [ ] Contact TrueHost support if issue persists

### Images/Assets Not Loading
- [ ] Verify file paths in code (use relative paths)
- [ ] Check file permissions (should be 644 for files, 755 for folders)
- [ ] In cPanel File Manager, right-click file → Change Permissions

### Contact Form Not Working
- [ ] Verify hosting supports PHP (most shared hosting does)
- [ ] Check email configuration in Contact form component
- [ ] Test with contact form handler backend (if applicable)

### SSL Certificate Issues
- [ ] Wait 24 hours for Let's Encrypt certificate
- [ ] Clear browser cache (Ctrl+Shift+Del)
- [ ] Use different browser to test

---

## ESTIMATED TIMELINE

| Phase | Task | Duration |
|-------|------|----------|
| 1 | Build & test locally | 30 min |
| 2 | Register domain & hosting | 1-2 hours |
| 3 | Configure cPanel & DNS | 30 min |
| 4 | Deploy files via FTP | 15-30 min |
| 5 | Test live site | 30 min |
| 6 | Setup backup | 10 min |
| **Total** | **Complete deployment** | **~3-4 hours** |

*DNS propagation: 24-48 hours (site may be live within minutes but ensure global availability within 48 hours)*

---

## SUPPORT CONTACTS

**TrueHost Support:**
- Website: https://www.truehost.co.ke/
- Email: support@truehost.co.ke
- Phone: +254 (from Kenya)
- Hours: 24/7 (usually)

**Client Support (Post-Launch):**
- Your contact info from Development Agreement
- Free support: 30 days from launch date
- Paid support: 1,500 KES/day after initial period

---

## NEXT ACTIONS

Ready to proceed? Confirm:
1. ✓ Budget approved (1,500-1,800 KES)
2. ✓ Domain name finalized
3. ✓ TrueHost account ready
4. ✓ Build tested locally

Then execute PHASE 2 onwards.
