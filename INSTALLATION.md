# Installation Guide

## Quick Start

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/muin-company/copy-as-markdown.git
   cd copy-as-markdown
   ```

2. **Open Chrome Extensions page:**
   - Navigate to `chrome://extensions/`
   - Or: Menu → More Tools → Extensions

3. **Enable Developer Mode:**
   - Toggle the switch in the top-right corner

4. **Load the extension:**
   - Click "Load unpacked"
   - Select the `copy-as-markdown` folder

5. **Done!** The extension is now installed.

## Testing It Out

1. Go to any webpage (try [Wikipedia](https://en.wikipedia.org) or [GitHub](https://github.com))
2. Select some text with formatting (headings, links, lists, etc.)
3. Right-click → "Copy as Markdown"
4. Paste into a markdown editor or text file
5. See your content beautifully formatted!

## Keyboard Shortcut

Press `Cmd+Shift+M` (Mac) or `Ctrl+Shift+M` (Windows/Linux) after selecting text.

To customize the shortcut:
1. Go to `chrome://extensions/shortcuts`
2. Find "Copy as Markdown"
3. Click the edit icon
4. Set your preferred keys

## Settings

Click the extension icon in your toolbar to access settings:
- **Include images** - Convert images to markdown syntax
- **Include links** - Convert links to markdown format

## Troubleshooting

**Extension doesn't appear:**
- Make sure Developer Mode is enabled
- Try refreshing the extensions page
- Check that all files are in the folder

**Copy doesn't work:**
- Make sure text is actually selected
- Try the keyboard shortcut instead
- Check browser console for errors (F12)

**Icons are placeholder:**
- The extension works fine with placeholder icons
- To create custom icons, use any image editor to create:
  - icon16.png (16×16)
  - icon32.png (32×32)
  - icon48.png (48×48)
  - icon128.png (128×128)
- Place them in the `icons/` folder

## Uninstalling

1. Go to `chrome://extensions/`
2. Find "Copy as Markdown"
3. Click "Remove"

---

**Repo:** https://github.com/muin-company/copy-as-markdown
