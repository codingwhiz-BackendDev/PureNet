# 🛡️ PureNet - Chrome Extension

A professional, production-grade Chrome Extension that blocks adult websites using Chrome's Manifest V3 Declarative Net Request (DNR) system. PureNet provides instant, silent blocking with zero background CPU usage.

## ✨ Features

- **🚀 Instant Blocking**: Uses Chrome's Declarative Net Request API for lightning-fast performance
- **🔇 Silent Operation**: No background scripts running, zero CPU usage when idle
- **📊 Statistics Tracking**: Track how many sites have been blocked
- **🎨 Professional UI**: Beautiful, modern interface for blocked pages and extension popup
- **⚡ Scalable**: Designed to handle millions of users efficiently
- **✅ Chrome Web Store Ready**: Follows all Chrome Web Store policies and best practices

## 📦 Installation

### For Development

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd PureNet
   ```

2. **Generate Icons**
   - Open `icons/icon-generator.html` in your browser
   - Click the download buttons to generate `icon16.png`, `icon48.png`, and `icon128.png`
   - Save these files in the `icons/` directory

3. **Load Extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right corner)
   - Click "Load unpacked"
   - Select the `PureNet` directory
   - The extension is now installed and active!

### For Production

1. **Prepare for Chrome Web Store**
   - Ensure all icons are in place (`icon16.png`, `icon48.png`, `icon128.png`)
   - Review `manifest.json` for correct version and metadata
   - Test the extension thoroughly

2. **Create ZIP Package**
   ```bash
   # On Windows (PowerShell)
   Compress-Archive -Path * -DestinationPath PureNet-v1.0.0.zip -Exclude *.zip,*.git*
   
   # On Mac/Linux
   zip -r PureNet-v1.0.0.zip . -x "*.zip" "*.git*"
   ```

3. **Submit to Chrome Web Store**
   - Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
   - Create a new item
   - Upload the ZIP file
   - Fill in store listing details
   - Submit for review

## 🏗️ Project Structure

```
PureNet/
├── manifest.json          # Extension manifest (Manifest V3)
├── background.js          # Service worker for extension lifecycle
├── rules.json            # Declarative Net Request rules for blocking
├── blocked.html          # Redirect page shown when site is blocked
├── popup.html            # Extension popup UI
├── popup.js              # Popup functionality
├── icons/                # Extension icons
│   ├── icon16.png       # 16x16 icon
│   ├── icon48.png       # 48x48 icon
│   ├── icon128.png      # 128x128 icon
│   └── icon-generator.html  # Tool to generate icons
└── README.md            # This file
```

## 🔧 How It Works

### Declarative Net Request (DNR)

PureNet uses Chrome's Declarative Net Request API, which allows blocking at the browser level without running JavaScript. This provides:

- **Performance**: Blocking happens instantly, before page load
- **Privacy**: No data collection or tracking
- **Efficiency**: Zero CPU usage when not blocking
- **Scalability**: Can handle millions of rules efficiently

### Blocking Rules

The extension uses two types of rules:

1. **Regex-based rules**: Match URLs containing adult-related keywords
2. **Domain-specific rules**: Block known adult websites explicitly

All rules redirect blocked requests to `blocked.html`, providing a user-friendly message.

## 📝 Configuration

### Adding More Blocked Sites

Edit `rules.json` to add more blocking rules:

```json
{
  "id": 26,
  "priority": 1,
  "action": {
    "type": "redirect",
    "redirect": {
      "extensionPath": "/blocked.html"
    }
  },
  "condition": {
    "urlFilter": "*://example-adult-site.com/*",
    "resourceTypes": ["main_frame", "sub_frame"]
  }
}
```

**Note**: Chrome has a limit of 30,000 static rules. For larger rule sets, consider using dynamic rules or rule sets.

### Customizing the Blocked Page

Edit `blocked.html` to customize the appearance and message shown when a site is blocked.

## 🧪 Testing

1. **Test Blocking**
   - Try visiting a known adult website
   - You should be redirected to `blocked.html`

2. **Test Popup**
   - Click the extension icon in Chrome toolbar
   - Verify statistics and status display correctly

3. **Test Performance**
   - Open Chrome Task Manager (`Shift+Esc`)
   - Verify extension uses minimal resources

## 📋 Chrome Web Store Requirements

This extension is designed to meet Chrome Web Store requirements:

- ✅ Uses Manifest V3
- ✅ Minimal permissions (only DNR and storage)
- ✅ No external network requests
- ✅ No user data collection
- ✅ Clear privacy policy (you'll need to add one)
- ✅ Professional UI/UX

## 🔒 Privacy

PureNet:
- Does not collect any user data
- Does not track browsing history
- Does not send data to external servers
- All blocking happens locally in your browser
- Statistics are stored locally only

## 🐛 Troubleshooting

### Extension Not Blocking Sites

1. Check that the extension is enabled in `chrome://extensions/`
2. Verify `rules.json` is properly formatted
3. Check Chrome's console for errors (`chrome://extensions/` → "Errors" button)

### Icons Not Showing

1. Ensure all icon files exist in the `icons/` directory
2. Use the icon generator (`icons/icon-generator.html`) to create missing icons
3. Verify file names match exactly: `icon16.png`, `icon48.png`, `icon128.png`

### Rules Not Loading

1. Check `manifest.json` for correct `rule_resources` configuration
2. Verify `rules.json` is valid JSON (use a JSON validator)
3. Check Chrome's extension error console

## 📄 License

This project is provided as-is for educational and commercial use.

## 🤝 Contributing

Contributions are welcome! Please ensure:
- Code follows existing style
- All tests pass
- Documentation is updated
- Chrome Web Store policies are followed

## 📞 Support

For issues, questions, or feature requests, please open an issue in the repository.

---

**Made with ❤️ for a safer browsing experience**

