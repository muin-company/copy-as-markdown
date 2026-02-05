// Popup settings script

document.addEventListener('DOMContentLoaded', async () => {
  const includeImagesCheckbox = document.getElementById('includeImages');
  const includeLinksCheckbox = document.getElementById('includeLinks');

  // Load saved settings
  const settings = await chrome.storage.sync.get({
    includeImages: true,
    includeLinks: true
  });

  includeImagesCheckbox.checked = settings.includeImages;
  includeLinksCheckbox.checked = settings.includeLinks;

  // Save settings on change
  includeImagesCheckbox.addEventListener('change', () => {
    chrome.storage.sync.set({ includeImages: includeImagesCheckbox.checked });
  });

  includeLinksCheckbox.addEventListener('change', () => {
    chrome.storage.sync.set({ includeLinks: includeLinksCheckbox.checked });
  });
});
