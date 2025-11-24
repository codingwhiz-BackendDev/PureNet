# 🧪 Testing Guide for PureNet Extension

## Step 1: Generate Icons (Required First!)

Before testing, you need to generate the extension icons:

1. **Open the icon generator**
   - Open `generate-icons.html` in your web browser (double-click the file)
   - OR open `icons/icon-generator.html` in your browser

2. **Download all icons**
   - Click the "📥 Download All Icons" button
   - This will download three PNG files: `icon16.png`, `icon48.png`, `icon128.png`

3. **Save icons to the correct location**
   - Move the downloaded files to the `icons/` folder in your extension directory
   - Make sure they're named exactly: `icon16.png`, `icon48.png`, `icon128.png`

## Step 2: Load Extension in Chrome

1. **Open Chrome Extensions Page**
   - Open Google Chrome
   - Type `chrome://extensions/` in the address bar and press Enter
   - OR go to Menu (⋮) → Extensions → Manage Extensions

2. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner
   - It should turn blue/on

3. **Load the Extension**
   - Click the "Load unpacked" button (top-left)
   - Navigate to your `PureNet` folder
   - Select the folder and click "Select Folder" (or "Open" on Windows)
   - The extension should now appear in your extensions list

4. **Verify Installation**
   - You should see "PureNet" in the extensions list
   - Make sure it's enabled (toggle should be blue/on)
   - You should see the extension icon in Chrome's toolbar

## Step 3: Test the Extension

### Test 1: Check Extension Popup

1. **Open the Popup**
   - Click the PureNet icon in Chrome's toolbar (top-right)
   - A popup window should open

2. **Verify Popup Content**
   - Should show "PureNet" title
   - Should show "🟢 Active & Protecting" status
   - Should show "Sites Blocked: 0" (or current count)

### Test 2: Test Blocking Functionality

**⚠️ WARNING: Only test with safe test URLs. Do not visit actual adult sites.**

1. **Test with a Known Blocked Domain**
   - Try visiting: `https://pornhub.com` (or any domain in `rules.json`)
   - You should be immediately redirected to a "Blocked" page
   - The blocked page should show PureNet branding

2. **Test with Regex Pattern**
   - Try visiting a URL that contains blocked keywords (check `rules.json` for patterns)
   - Should also be blocked

3. **Test Normal Sites**
   - Visit `https://www.google.com`
   - Visit `https://www.github.com`
   - These should load normally (not blocked)

### Test 3: Verify Statistics

1. **Check Blocked Count**
   - After testing blocked sites, click the extension icon again
   - The "Sites Blocked" count should have increased
   - This confirms the blocking is working

### Test 4: Test Blocked Page Features

When you see the blocked page:

1. **Test "Go Back" Button**
   - Click "Go Back" - should return to previous page

2. **Test "Go to Google" Button**
   - Click "Go to Google" - should navigate to Google

3. **Verify Design**
   - Page should look professional with gradient background
   - Should show PureNet branding
   - Should be responsive (try resizing window)

## Step 4: Check for Errors

1. **Open Extension Error Console**
   - Go to `chrome://extensions/`
   - Find PureNet extension
   - Click "Errors" button (if any errors exist)
   - Review any error messages

2. **Check Browser Console**
   - Open Developer Tools (F12)
   - Go to Console tab
   - Look for any PureNet-related errors

## Step 5: Performance Testing

1. **Check Resource Usage**
   - Open Chrome Task Manager: Press `Shift+Esc`
   - Find "PureNet" in the list
   - CPU usage should be minimal (near 0% when idle)
   - Memory usage should be low

2. **Test Page Load Speed**
   - Blocked pages should redirect instantly
   - No noticeable delay

## Common Issues & Solutions

### Issue: Extension won't load
- **Solution**: Make sure all icons exist in `icons/` folder
- **Solution**: Check that `manifest.json` is valid JSON
- **Solution**: Check for errors in `chrome://extensions/`

### Issue: Sites not being blocked
- **Solution**: Verify extension is enabled in `chrome://extensions/`
- **Solution**: Check that `rules.json` is valid (no JSON errors)
- **Solution**: Try reloading the extension (click reload icon in extensions page)

### Issue: Icons not showing
- **Solution**: Generate icons using `generate-icons.html`
- **Solution**: Verify icon files are in `icons/` folder with correct names
- **Solution**: Reload the extension

### Issue: Popup not opening
- **Solution**: Check that `popup.html` exists
- **Solution**: Verify `popup.js` is loaded correctly
- **Solution**: Check browser console for JavaScript errors

## Quick Test Checklist

- [ ] Icons generated and in `icons/` folder
- [ ] Extension loads without errors
- [ ] Extension icon appears in toolbar
- [ ] Popup opens and shows correct information
- [ ] Test blocked site redirects to blocked page
- [ ] Normal sites load without blocking
- [ ] Statistics counter increases after blocking
- [ ] Blocked page buttons work correctly
- [ ] No errors in extension console
- [ ] Low CPU/memory usage

## Success Criteria

✅ Extension loads successfully  
✅ No errors in console  
✅ Blocking works for test URLs  
✅ Normal sites are not blocked  
✅ Statistics tracking works  
✅ UI looks professional  
✅ Performance is good  

---

**Once all tests pass, your extension is ready for Chrome Web Store submission!**

