# Chrome Web Store Submission Guide - Copy as Markdown

## 1. Store Listing

### Name
**Copy as Markdown**

### Short Description (132 chars max)
Convert web content to clean markdown with a right-click. Perfect for note-taking, documentation, and knowledge management.
*(129 characters)*

### Detailed Description

Copy any web content as perfectly formatted markdown with a single click. No more manual formatting, broken links, or lost structure.

**Perfect for:**
- Knowledge workers taking notes in Obsidian, Notion, or Roam
- Developers copying documentation and Stack Overflow answers
- Researchers gathering sources for papers
- Technical writers creating documentation
- Anyone who works with markdown daily

**Key Features:**
• Right-click context menu - Select text, right-click → "Copy as Markdown"
• Keyboard shortcut - Cmd+Shift+M (Mac) or Ctrl+Shift+M (Windows/Linux)
• Smart conversion - Preserves headings, links, code blocks, tables, and more
• Configurable - Toggle image and link inclusion in settings
• Toast notifications - Visual feedback when copying
• Works on any website

**Supported Elements:**
The extension intelligently converts:
- Headings (H1-H6) → # Markdown headings
- Bold/Strong → **bold text**
- Italic/Emphasis → *italic text*
- Links → [link text](url)
- Images → ![alt text](image-url)
- Code blocks → ```code blocks```
- Inline code → `inline code`
- Lists (ordered & unordered)
- Tables → Markdown tables with proper formatting
- Blockquotes → > quoted text
- Horizontal rules → ---

**Real-World Use Cases:**

📚 **Documentation from Stack Overflow**
Copy code examples with formatting intact - no more manual markdown syntax!

📝 **Research Notes from Articles**
Grab key points from blog posts and keep all links and structure.

💬 **Meeting Notes from Slack/Discord**
Turn chat discussions into permanent documentation.

🐛 **GitHub Issues → Tasks**
Copy issue descriptions into Linear, Notion, or your task manager.

📊 **API Documentation**
Copy reference docs with tables and code examples perfectly formatted.

📧 **Email Archive**
Save important emails as searchable markdown files.

**Privacy First:**
All processing happens locally in your browser. No data is collected, transmitted, or stored on external servers.

**Technical Details:**
- Built with Manifest V3 (latest Chrome extension standard)
- Pure JavaScript HTML-to-Markdown converter
- No external dependencies
- Open source on GitHub
- Lightweight and fast

**How It Works:**
1. Select the content you want to copy (text, headings, links, code, tables, etc.)
2. Right-click and choose "Copy as Markdown" OR press Cmd/Ctrl+Shift+M
3. Paste into your markdown editor - perfectly formatted!

**Settings:**
- Toggle image inclusion (useful when you only want text)
- Toggle link inclusion (copy as plain text if needed)
- Access via extension icon in toolbar

Save hours of manual formatting. Start copying smarter today!

### Category
**Productivity**

### Language
**English (United States)**

---

## 2. Assets Needed

### Icon ⚠️
- **File:** `icons/icon128.png`
- **Size:** 128x128 PNG
- **Status:** **Needs regeneration** (current files appear to be 67B placeholder)
- **Action Required:** Regenerate icons from SVG

```bash
cd ~/muin/projects/copy-as-markdown/icons
# Regenerate icons from icon.svg using create-icons.sh or manual tool
# Ensure icon128.png is a proper 128x128 PNG (not 67 bytes)
```

### Screenshots (Required: at least 1, recommended: 3-5)
**Dimensions:** 1280x800 or 640x400 (16:10 ratio recommended)

#### Screenshot 1: Right-Click Context Menu
**Capture:**
1. Open a webpage with formatted content (e.g., Medium article, Stack Overflow answer)
2. Select a paragraph with bold text and a link
3. Right-click to show context menu
4. "Copy as Markdown" option should be highlighted

**What to show:**
- Selected text on webpage
- Context menu open with "Copy as Markdown" option visible
- Clean, professional-looking page (avoid cluttered pages)

**Caption:** "Right-click any selection to copy as markdown"

---

#### Screenshot 2: Before/After - HTML to Markdown
**Capture:**
Split-screen or side-by-side comparison:
- **Left:** Web content (formatted article with headings, links, code)
- **Right:** Same content pasted in markdown editor (VS Code, Obsidian, etc.)

**Example content to copy:**
```html
<h2>Getting Started</h2>
<p>This is a <strong>simple</strong> example with a <a href="https://example.com">link</a>.</p>
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
<pre><code>const hello = "world";</code></pre>
```

**What to show:**
- Original web content on left
- Perfect markdown conversion on right
- Demonstrates preserved structure

**Caption:** "Preserve formatting, links, and code blocks perfectly"

---

#### Screenshot 3: Table Conversion
**Capture:**
1. Find a webpage with a table (GitHub README, documentation, Wikipedia)
2. Select the table
3. Show markdown output in editor

**What to show:**
- Original HTML table on webpage
- Converted markdown table in editor with proper formatting
- Demonstrates complex structure handling

**Caption:** "Tables convert to perfect markdown syntax"

---

#### Screenshot 4: Settings Panel
**Capture:**
1. Click extension icon in toolbar
2. Show settings popup

**What to show:**
- Extension popup with settings
- "Include images" toggle
- "Include links" toggle
- Clean, minimal UI

**Caption:** "Customize what gets copied with simple settings"

---

#### Screenshot 5: Toast Notification
**Capture:**
1. Copy content using keyboard shortcut (Cmd+Shift+M)
2. Capture toast notification appearing on page

**What to show:**
- Webpage with subtle toast notification: "Copied as markdown!"
- Shows keyboard shortcut works
- Professional, unobtrusive feedback

**Caption:** "Instant visual feedback when copying"

---

### Promotional Images (Optional but recommended)

#### Small Tile: 440x280 PNG
- Markdown "M" logo or icon
- Text: "Copy as Markdown"
- Subtitle: "One click. Perfect formatting."

#### Large Tile: 920x680 PNG
- Hero image showing conversion in action
- Before/after visual
- Key features: "Context menu • Keyboard shortcut • Smart conversion"

#### Marquee: 1400x560 PNG
- Wide banner for featured placement
- Tagline: "Stop fighting markdown. Copy it perfectly."
- Visual showing web content → markdown

---

## 3. Privacy

### Permissions Justification

**contextMenus**
- Required to: Add "Copy as Markdown" option to right-click menu
- Used for: Displaying the context menu item when text is selected
- Data collected: None

**activeTab**
- Required to: Access the current tab's DOM to convert selected HTML to markdown
- Used for: Reading selected content when user triggers copy action
- Data collected: None - only reads content when user explicitly requests copy
- Scope: Only active tab, only when user initiates action

**storage**
- Required to: Save user preferences (include images, include links)
- Used for: Storing settings locally
- Data collected: Two boolean preferences (stored locally only)

### Privacy Policy

**Copy as Markdown Privacy Policy**

**Last Updated:** February 7, 2026

**Data Collection:**
Copy as Markdown collects and stores the following data locally on your device:
- User preferences: "Include images" setting (boolean)
- User preferences: "Include links" setting (boolean)

**Data Usage:**
Settings are used solely to control conversion behavior when copying content as markdown.

**Content Access:**
The extension only accesses webpage content when you explicitly trigger the copy action (right-click menu or keyboard shortcut). No content is stored, transmitted, or analyzed.

**Data Storage:**
All data (2 boolean settings) is stored locally using Chrome's storage API. No data is transmitted to external servers or third parties.

**Data Sharing:**
We do not collect, share, sell, or transmit any user data. The extension operates entirely offline.

**Third-Party Services:**
None. No analytics, no tracking, no external services.

**User Control:**
Users can uninstall the extension at any time to remove all stored data (settings). Clearing Chrome extension data will also remove preferences.

**Contact:**
For privacy questions, contact us at: privacy@muin.company

---

**Privacy Policy URL:**
Create a static page at one of:
- `https://muin.company/privacy/copy-as-markdown`
- `https://github.com/muin-company/copy-as-markdown/blob/main/PRIVACY.md`
- Host on GitHub Pages

*(Create PRIVACY.md file in repo with above content)*

---

### Data Usage Disclosure

**Single Purpose Description:**
Copy as Markdown converts selected web content into markdown format and copies it to the clipboard.

**Permissions Use:**
- **contextMenus:** Display "Copy as Markdown" option in right-click menu.
- **activeTab:** Read selected content from active tab when user triggers copy (right-click or keyboard shortcut).
- **storage:** Save user preferences (include images, include links) locally.

**Certification:**
- ✅ Extension does not collect user data
- ✅ Extension does not transmit data to external servers
- ✅ All processing happens locally
- ✅ No remote code execution
- ✅ No cryptocurrency mining
- ✅ Complies with Chrome Web Store policies

---

## 4. Submission Checklist

### Pre-Submission

- [ ] **manifest.json version updated**
  - Current version: `1.0.0`
  - For first submission, keep as `1.0.0`
  - For updates, increment to `1.0.1`, `1.1.0`, etc.

- [ ] **Code review**
  - [ ] No console.log statements in production code
  - [ ] All permissions are justified and necessary
  - [ ] Code follows Chrome extension best practices
  - [ ] Manifest V3 compliant
  - [ ] No hardcoded URLs or credentials

- [ ] **Testing**
  - [ ] Tested on latest Chrome version
  - [ ] Tested context menu appears on all pages
  - [ ] Tested keyboard shortcut (Cmd/Ctrl+Shift+M)
  - [ ] Tested conversion of:
    - [ ] Headings (H1-H6)
    - [ ] Bold and italic text
    - [ ] Links
    - [ ] Images
    - [ ] Code blocks (pre/code)
    - [ ] Inline code
    - [ ] Lists (ul/ol)
    - [ ] Tables
    - [ ] Blockquotes
  - [ ] Tested settings toggle (include images, include links)
  - [ ] Tested on multiple websites (Stack Overflow, Medium, Wikipedia, GitHub)
  - [ ] Tested clipboard copy actually works

- [ ] **Icon regeneration** ⚠️ IMPORTANT
  - [ ] icon128.png regenerated from SVG (not 67-byte placeholder)
  - [ ] icon48.png regenerated
  - [ ] icon32.png regenerated
  - [ ] icon16.png regenerated
  - [ ] All icons verified as actual images, not placeholders

### Assets Preparation

- [ ] **Screenshots captured**
  - [ ] Screenshot 1: Right-click context menu
  - [ ] Screenshot 2: Before/after conversion
  - [ ] Screenshot 3: Table conversion
  - [ ] Screenshot 4: Settings panel
  - [ ] Screenshot 5 (optional): Toast notification
  - [ ] All screenshots are 1280x800 or 640x400
  - [ ] Screenshots show real, helpful UI on real websites

- [ ] **Privacy policy created**
  - [ ] PRIVACY.md file created in repo
  - [ ] Privacy policy published at public URL
  - [ ] Privacy policy URL ready for submission form

- [ ] **ZIP file created**
  ```bash
  cd ~/muin/projects/copy-as-markdown
  zip -r copy-as-markdown-v1.0.0.zip . \
    -x "*.git*" \
    -x "*node_modules*" \
    -x "*.DS_Store" \
    -x "*STORE_SUBMISSION.md" \
    -x "*BUILD_SUMMARY.md" \
    -x "*INSTALLATION.md" \
    -x "*CONTRIBUTING.md" \
    -x ".github/*"
  ```
  - [ ] ZIP file created
  - [ ] ZIP file size < 100MB (should be <1MB)
  - [ ] Verified ZIP contents (unzip and check)
  - [ ] Icons are real images (not 67-byte placeholders)

### Developer Account

- [ ] **Chrome Web Store developer account**
  - [ ] Account created at [chrome.google.com/webstore/devconsole](https://chrome.google.com/webstore/devconsole)
  - [ ] $5 one-time registration fee paid (if not already - shared with Tab Bankruptcy)
  - [ ] Payment method on file

### Submission

- [ ] **Upload to Chrome Web Store**
  1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
  2. Click "New Item"
  3. Upload `copy-as-markdown-v1.0.0.zip`
  4. Fill in store listing (copy from Section 1 above)
  5. Upload screenshots
  6. Enter privacy policy URL
  7. Select category: Productivity
  8. Set pricing: Free
  9. Set regions: All regions
  10. Submit for review

- [ ] **Post-submission**
  - [ ] Review submitted successfully (confirmation email)
  - [ ] Extension URL saved (will be `https://chrome.google.com/webstore/detail/[extension-id]`)
  - [ ] Estimated review time: 1-3 business days
  - [ ] Monitor dashboard for review status

---

## 5. Post-Publication

### Update README.md
Once published, update README.md with:
```markdown
## Installation

### Chrome Web Store (Recommended)

Install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/[extension-id])

### From Source
...
```

### Marketing
- [ ] Tweet about launch
- [ ] Post on Reddit (r/chrome, r/productivity, r/ObsidianMD, r/Notion)
- [ ] Share on Hacker News (Show HN)
- [ ] Post in markdown communities
- [ ] Share in relevant Discord/Slack communities
- [ ] Add to portfolio/website
- [ ] Consider ProductHunt launch

### Monitor
- [ ] Check reviews daily (first week)
- [ ] Respond to user feedback
- [ ] Monitor error reports in dashboard
- [ ] Track install count
- [ ] Collect feature requests

---

## 6. Future Updates

When releasing updates:
1. Increment version in `manifest.json` (e.g., `1.0.0` → `1.0.1`)
2. Create new ZIP file with updated version number
3. Upload to existing extension in dashboard (don't create new item)
4. Add "What's New" section describing changes
5. Submit for review

**Potential Future Features:**
- Support for additional markdown flavors (GitHub, CommonMark)
- Custom keyboard shortcuts
- Export to file (not just clipboard)
- Markdown preview before copying
- Support for math equations (LaTeX)
- Support for embedded videos
- Template system for different note-taking apps

**Versioning:**
- Patch (1.0.x): Bug fixes, minor improvements
- Minor (1.x.0): New features, new elements supported
- Major (x.0.0): Breaking changes, major rewrites

---

## Quick Start Commands

```bash
# Regenerate icons first (IMPORTANT!)
cd ~/muin/projects/copy-as-markdown/icons
./create-icons.sh  # Or manually regenerate from SVG

# Create ZIP for submission
cd ~/muin/projects/copy-as-markdown
zip -r ../copy-as-markdown-v1.0.0.zip . \
  -x "*.git*" -x "*node_modules*" -x "*.DS_Store" \
  -x "*STORE_SUBMISSION.md" -x "*BUILD_SUMMARY.md" \
  -x "*INSTALLATION.md" -x "*CONTRIBUTING.md" -x ".github/*"

# Verify ZIP contents
unzip -l ../copy-as-markdown-v1.0.0.zip

# Check icon sizes (should NOT be 67 bytes!)
unzip -l ../copy-as-markdown-v1.0.0.zip | grep icon

# Create privacy policy file
echo "# Copy as Markdown Privacy Policy..." > PRIVACY.md
git add PRIVACY.md
git commit -m "Add privacy policy for Chrome Web Store submission"
git push
```

---

## Resources

- [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- [Chrome Extension Publishing Guide](https://developer.chrome.com/docs/webstore/publish/)
- [Store Listing Best Practices](https://developer.chrome.com/docs/webstore/best_practices/)
- [Content Scripts Documentation](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)
- [Review Process](https://developer.chrome.com/docs/webstore/review-process/)

---

## Known Issues / Pre-Launch Fixes

⚠️ **CRITICAL: Icon files need regeneration**
The current icon files (16/32/48/128.png) are 67-byte placeholders and will be rejected by Chrome Web Store.

**Fix before submission:**
```bash
cd ~/muin/projects/copy-as-markdown/icons
# Use the icon.svg to generate proper PNG files
# Either run ./create-icons.sh or manually create with image editor
# Ensure icon128.png is a proper 128x128 PNG (should be several KB, not 67B)
```

---

**Almost ready to submit!** Fix the icons issue first, then follow the checklist. 🚀
