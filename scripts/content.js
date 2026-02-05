// Content script for selection handling and clipboard operations

// Load converter
const script = document.createElement('script');
script.src = chrome.runtime.getURL('scripts/converter.js');
document.head.appendChild(script);

// Listen for messages from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'copyAsMarkdown') {
    copySelectionAsMarkdown();
  }
});

async function copySelectionAsMarkdown() {
  const selection = window.getSelection();
  
  if (!selection || selection.rangeCount === 0) {
    showToast('No text selected');
    return;
  }

  const range = selection.getRangeAt(0);
  const container = document.createElement('div');
  container.appendChild(range.cloneContents());
  
  const html = container.innerHTML;
  
  if (!html.trim()) {
    showToast('No content to copy');
    return;
  }

  // Get settings
  const settings = await chrome.storage.sync.get({
    includeImages: true,
    includeLinks: true
  });

  // Convert to markdown
  const converter = new HTMLToMarkdown({
    includeImages: settings.includeImages,
    includeLinks: settings.includeLinks
  });
  
  const markdown = converter.convert(html);

  // Copy to clipboard
  try {
    await navigator.clipboard.writeText(markdown);
    showToast('Copied as Markdown!');
  } catch (err) {
    console.error('Failed to copy:', err);
    showToast('Failed to copy');
  }
}

function showToast(message) {
  // Remove existing toast
  const existing = document.getElementById('copy-as-markdown-toast');
  if (existing) {
    existing.remove();
  }

  const toast = document.createElement('div');
  toast.id = 'copy-as-markdown-toast';
  toast.className = 'copy-md-toast';
  toast.textContent = message;
  
  document.body.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  // Remove after 2 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}
