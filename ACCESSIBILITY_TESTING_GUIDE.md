# Accessibility Testing Guide

## Quick Test (5 minutes)

### 1. Skip Link Test
- Open the website in your browser
- Press `Tab` immediately after page load
- **Expected**: A "Skip to main content" link appears at the top-left
- **Click it** or press `Enter`
- **Expected**: Page jumps to main content, bypassing navigation

### 2. Keyboard Navigation Test
- Press `Tab` repeatedly to navigate through all interactive elements
- **Expected items to focus**:
  - Skip link
  - Logo (home link)
  - Navigation items (About, Programs, etc.)
  - Dropdown menus (About Us, What We Do, Get Involved)
  - Contact button
  - All links and buttons throughout the page
- **Expected visual feedback**: Blue outline (#7EBBBFF) appears around focused elements
- **Press `Shift+Tab`** to navigate backwards

### 3. Focus Indicator Visibility
- Navigate with keyboard as above
- **Expected**: Every button, link, and input has a clear 3px blue outline
- **Mobile menu button**: Should show focus ring when Tab reaches it
- **Mobile dropdown items**: Should be focusable when menu is open

### 4. Heading Structure (Chrome DevTools)
- Open DevTools (`F12`)
- Go to "Accessibility" tab
- Look at the "Source order" and "Accessibility tree"
- **Expected**: Headings progress logically: h1 → h2 → h3 (no skipped levels)

---

## Advanced Testing (20 minutes)

### Screen Reader Testing (NVDA - Windows, Free)

**Download**: https://www.nvaccess.org/download/

1. Download and install NVDA
2. Open website and press `Ctrl+Alt+N` to start NVDA
3. Press `H` to navigate by headings
   - **Expected**: Hear all section headings in order
4. Press `F` to navigate by form fields (if testing forms)
5. Press `Tab` for interactive elements
6. **Test skip link**: 
   - Refresh page
   - Press `Tab` immediately
   - **Expected**: Hear "Skip to main content"
   - Press `Enter`
   - **Expected**: Focus moves to main content

### Testing with Browser DevTools

**Chrome/Edge:**
1. Open DevTools (`F12`)
2. Go to "Accessibility" tab
3. Check "Source order" - verify heading hierarchy
4. Use the "Accessibility inspector" to select elements and check:
   - Alt text on images
   - Form labels properly associated
   - ARIA attributes correct

**Firefox:**
1. Open DevTools (`F12`)
2. Go to "Inspector" tab
3. Look for accessibility warnings (red flag icon)
4. Check "Accessibility" panel for issues

---

## Color Contrast Check (5 minutes)

### Using WebAIM Contrast Checker
1. Visit: https://webaim.org/resources/contrastchecker/
2. For each color combination used on your site:
   - **Foreground**: #050F2A (dark navy text)
   - **Background**: #7BBBFF (light blue) or #F2FDFF (very light blue)
   - **Result**: Should show ✓ AA or ✓ AAA

### Key combinations to test:
- Dark text on light backgrounds: ✓ AA
- Light text on dark backgrounds: ✓ AA
- Headings: Prefer AAA (higher contrast)

---

## Mobile Accessibility

### Test with Mobile Screen Reader

**iOS (VoiceOver):**
1. Settings → Accessibility → VoiceOver → On
2. Use two-finger Z gesture to read page
3. Swipe right to navigate items
4. Double-tap to activate buttons

**Android (TalkBack):**
1. Settings → Accessibility → TalkBack → On
2. Explore by touch to read elements
3. Swipe right/left to navigate
4. Double-tap to activate

### Mobile Touch Target Size
- All buttons should be at least 44x44 pixels
- Tap targets should have space between them
- Menu items should be easy to tap

---

## Test Checklist

- [ ] Skip link appears on Tab press
- [ ] All interactive elements focusable via Tab
- [ ] Focus indicators visible (blue outline)
- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Form labels associated with inputs
- [ ] Image alt text present and descriptive
- [ ] Color contrast meets AA standard
- [ ] Mobile menu keyboard accessible
- [ ] No keyboard traps (users can Tab out of any element)
- [ ] Mobile buttons are 44x44px minimum
- [ ] Works with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Reduced motion preference respected

---

## Common Issues & Fixes

### Issue: Focus outline not visible
**Fix**: Ensure `outline` CSS is not set to `none` on interactive elements

### Issue: Mobile menu not keyboard accessible
**Fix**: Verify dropdown buttons have `aria-expanded` attribute and proper focus styling

### Issue: Heading structure has gaps (h1 → h3)
**Fix**: Use h2 for all section headings, h3 for subsections

### Issue: Form field not focusable
**Fix**: Ensure input has `id` and label has matching `htmlFor`

### Issue: Image doesn't describe content
**Fix**: Add descriptive alt text (not just "image" or "photo")

---

## Tools for Ongoing Testing

- **axe DevTools** (Chrome/Firefox extension): Automated accessibility testing
- **WAVE** (webaim.org/wave): Web accessibility evaluation tool
- **Lighthouse** (Chrome DevTools): Built-in accessibility audit
- **NVDA** (Free screen reader): Manual testing with real screen reader
- **Color Contrast Analyzer**: Desktop tool for checking contrast

---

## Resources

- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM: https://webaim.org/
- MDN Accessibility: https://developer.mozilla.org/en-US/docs/Web/Accessibility
- A11y Project: https://www.a11yproject.com/
