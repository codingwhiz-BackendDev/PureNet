// PureNet Popup Script
// Handles the extension popup UI and user interactions

document.addEventListener('DOMContentLoaded', () => {
  const blockedCountEl = document.getElementById('blockedCount');
  const statusEl = document.getElementById('status');
  const toggleBtn = document.getElementById('toggleBtn');
  const aboutLink = document.getElementById('aboutLink');

  // Load statistics
  chrome.storage.local.get(['blockedCount', 'enabled'], (result) => {
    const count = result.blockedCount || 0;
    const enabled = result.enabled !== false; // Default to true

    blockedCountEl.textContent = count.toLocaleString();

    // Update status display
    if (enabled) {
      statusEl.className = 'status active';
      statusEl.innerHTML = '<div class="status-text">🟢 Active & Protecting</div>';
      toggleBtn.textContent = 'Disable Protection';
      toggleBtn.className = 'toggle-btn disable';
    } else {
      statusEl.className = 'status inactive';
      statusEl.innerHTML = '<div class="status-text">🔴 Protection Disabled</div>';
      toggleBtn.textContent = 'Enable Protection';
      toggleBtn.className = 'toggle-btn enable';
    }
    toggleBtn.style.display = 'block';
  });

  // Toggle protection (Note: In Manifest V3, we can't dynamically enable/disable DNR rules easily)
  // This is a placeholder for future implementation
  toggleBtn.addEventListener('click', () => {
    chrome.storage.local.get(['enabled'], (result) => {
      const newState = !(result.enabled !== false);
      chrome.storage.local.set({ enabled: newState }, () => {
        // Reload to update UI
        location.reload();
      });
    });
  });

  // About link
  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    chrome.tabs.create({
      url: chrome.runtime.getURL('blocked.html')
    });
  });
});

