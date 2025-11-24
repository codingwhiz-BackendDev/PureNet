// PureNet Background Service Worker
// This service worker handles extension lifecycle and rule management

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('PureNet: Extension installed successfully');
    
    // Initialize storage
    chrome.storage.local.set({
      installDate: new Date().toISOString(),
      blockedCount: 0,
      enabled: true
    });
  } else if (details.reason === 'update') {
    console.log('PureNet: Extension updated');
  }
});

// Listen for declarative net request events (if needed for analytics)
chrome.declarativeNetRequest.onRuleMatchedDebug?.addListener((details) => {
  // Increment blocked count
  chrome.storage.local.get(['blockedCount'], (result) => {
    const count = (result.blockedCount || 0) + 1;
    chrome.storage.local.set({ blockedCount: count });
  });
});

// Handle extension icon click (optional - for future features)
chrome.action.onClicked?.addListener((tab) => {
  // This is handled by popup.html, but kept for compatibility
});

// Keep service worker alive (minimal implementation)
chrome.runtime.onStartup.addListener(() => {
  console.log('PureNet: Service worker started');
});

