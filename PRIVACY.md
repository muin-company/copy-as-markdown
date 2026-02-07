# Copy as Markdown Privacy Policy

**Last Updated:** February 7, 2026

## Overview

Copy as Markdown is committed to protecting your privacy. This policy explains what data the extension collects and how it is used.

## Data Collection

Copy as Markdown collects and stores the following data **locally on your device**:

- **User preferences:**
  - "Include images" setting (boolean: true/false)
  - "Include links" setting (boolean: true/false)

**That's it.** No other data is collected, stored, or transmitted.

## Content Access

The extension only accesses webpage content when you explicitly trigger the copy action:
- Right-clicking and selecting "Copy as Markdown"
- Using the keyboard shortcut (Cmd/Ctrl+Shift+M)

**When you copy:**
1. The extension reads the selected HTML from the active tab
2. Converts it to markdown format (locally in your browser)
3. Copies the markdown to your clipboard
4. **No content is stored, transmitted, or analyzed**

The conversion happens entirely in your browser. Nothing is sent to external servers.

## Data Usage

User preferences (2 boolean settings) are used solely to control conversion behavior:
- "Include images" - Whether to convert `<img>` tags to markdown image syntax
- "Include links" - Whether to convert `<a>` tags to markdown links

## Data Storage

Settings are stored locally using Chrome's storage API (`chrome.storage.local`).

**No data is transmitted** to external servers, third parties, or any remote location.

## Data Sharing

We do **not** collect, share, sell, or transmit any user data.

The extension operates entirely offline. There are no:
- Analytics
- Tracking
- External services
- Server connections
- Third-party libraries

## Permissions Explanation

Copy as Markdown requires the following permissions:

- **contextMenus** - Required to add "Copy as Markdown" option to the right-click menu
- **activeTab** - Required to read selected content from the current tab when you trigger copy (only when you explicitly click/press shortcut)
- **storage** - Required to save your preferences (include images, include links) locally

**No permissions for:**
- Background tabs (only active tab, only when you trigger copy)
- Browsing history
- Cookies
- Network requests

## User Control

You have full control over your data:

- **Uninstall** - Removes the 2 stored settings immediately
- **Clear extension data** - Go to `chrome://extensions/` → Copy as Markdown → "Clear storage"
- **Toggle settings** - Change preferences anytime via the extension popup

## Data Retention

- User preferences persist until you change them or uninstall the extension
- No content is ever stored (conversions happen in-memory and immediately copied to clipboard)

## Third-Party Services

None. Copy as Markdown does not use any third-party services, analytics, tracking, or external APIs.

## Clipboard Access

The extension copies converted markdown to your system clipboard when you trigger copy.

Your clipboard data:
- Is not accessed by the extension (we only write to clipboard, never read)
- Is not transmitted anywhere
- Remains under your control

## Changes to This Policy

We may update this privacy policy from time to time. Changes will be posted with a new "Last Updated" date.

## Contact

For privacy questions or concerns, contact us at:
- Email: privacy@muin.company
- GitHub: https://github.com/muin-company/copy-as-markdown/issues

## Compliance

This extension complies with:
- Chrome Web Store Developer Program Policies
- Chrome Extension Platform Privacy Requirements
- General Data Protection Regulation (GDPR) principles
- No data collection = minimal privacy impact

---

**Summary:** Copy as Markdown stores 2 boolean settings locally. No content is collected or transmitted. All conversion happens in your browser. You have full control.
