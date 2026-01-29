# Quick A11Y (Accessibility) Check - 5 Minute Verification

## Test 1: Skip Link (30 seconds)
1. Open website
2. Press `Tab` key immediately
3. ✅ You should see "Skip to main content" link appear at top-left corner
4. Press `Enter`
5. ✅ Page scrolls/jumps to main content area

**If failed**: Check that Layout.jsx has the skip link component

---

## Test 2: Keyboard Focus (2 minutes)
1. Keep pressing `Tab` through the page
2. ✅ Every button, link, and input should show a **blue outline** when focused
3. ✅ The outline should be clearly visible (not subtle)
4. Try `Shift+Tab` to go backwards
5. ✅ Should navigate in reverse order

**Expected elements to reach**:
- Navigation links
- Dropdown menus
- Buttons
- Links in text
- Form inputs (if any)
- Footer links

**If failed**: Check index.css for focus-visible styles and Navbar.jsx for button focus classes

---

## Test 3: Mobile Menu Accessibility (1 minute)
1. Resize browser window to mobile size (< 768px width)
2. Press `Tab` until hamburger menu button is focused
3. ✅ Menu button should have blue focus outline
4. Press `Enter` or `Space` to open menu
5. ✅ Menu opens
6. Press `Tab` to navigate menu items
7. ✅ Each menu item should show blue focus outline
8. Press `Tab` again or `Escape` to close

**If failed**: Check Navbar.jsx button styling and focus classes

---

## Test 4: Heading Structure (1.5 minutes)

**Option A: Using Chrome DevTools**
1. Open DevTools (F12)
2. Right-click on page → Inspect
3. Go to "Accessibility" tab
4. ✅ Check the "Accessibility Tree" - headings should flow: h1 → h2 → h3
5. ✅ No skipped levels (like h1 → h3)

**Option B: Using Keyboard**
1. Download/Install NVDA (free): https://www.nvaccess.org/
2. Start NVDA
3. Press `H` on website to navigate by headings
4. ✅ Should hear all major section headings
5. ✅ Listen for logical progression

**If failed**: Check About.jsx - make sure section headings use `<h2>` and subsections use `<h3>`

---

## Test 5: Reduced Motion (1 minute)

**Windows:**
1. Settings → Ease of Access → Display → Toggle "Show animations"
2. Refresh website
3. ✅ Animations should be disabled/instant
4. Toggle setting back on
5. ✅ Animations return

**macOS:**
1. System Preferences → Accessibility → Display → Check "Reduce motion"
2. Refresh website  
3. ✅ Animations should be disabled/instant
4. Uncheck setting
5. ✅ Animations return

**If failed**: Check index.css for `@media (prefers-reduced-motion: reduce)` rule

---

## Summary - All 5 Checks Passed? ✅

Your website now supports:
- ✅ Keyboard-only users (Tab/Shift+Tab to navigate)
- ✅ Screen reader users (NVDA, JAWS, VoiceOver can read content properly)
- ✅ Users with motion sensitivity (animations disabled)
- ✅ Users with low vision (clear focus indicators)
- ✅ Voice control & switch users (can interact via keyboard)

---

## Troubleshooting

### Focus outline not appearing?
- Check that CSS `:focus-visible` is applied
- Verify `outline: 3px solid #7BBBFF;` in index.css
- Browser might be in "mouse mode" - press Tab to trigger keyboard mode

### Skip link not showing?
- Check Layout.jsx exists and has `<a href="#main-content" className="skip-link">`
- Verify main content has `id="main-content"`
- Check skip-link CSS is in index.css

### Mobile menu not keyboard accessible?
- Verify Navbar.jsx buttons have focus classes
- Check `aria-expanded` attribute is present
- Ensure buttons have `onClick` handlers

### Headings not in order?
- Use Chrome DevTools Accessibility tree to verify
- Count: every `<h2>` should have `<h3>` inside if needed
- No h1 → h4 jumps

### Animations still showing with reduced motion enabled?
- Check for `@media (prefers-reduced-motion: reduce)` in CSS
- Verify animations are set in `<style>` tags or CSS
- Older browsers may not support this feature

---

## Browser Compatibility

These improvements work on:
- ✅ Chrome 90+
- ✅ Firefox 78+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## When You're Done ✅

1. Document any test results
2. Note any issues found
3. Use ACCESSIBILITY_IMPROVEMENTS.md for details
4. Share results with team
5. Consider running axe DevTools for deeper audit

---

**Estimated time to complete**: 5-10 minutes
**Difficulty**: Easy - just use keyboard and Tab key
**No tools required**: Just browser and keyboard

Good luck! 🎉
