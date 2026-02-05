// Background service worker for context menu and commands

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'copy-as-markdown',
    title: 'Copy as Markdown',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'copy-as-markdown') {
    chrome.tabs.sendMessage(tab.id, { action: 'copyAsMarkdown' });
  }
});

chrome.commands.onCommand.addListener((command) => {
  if (command === 'copy-as-markdown') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'copyAsMarkdown' });
      }
    });
  }
});
