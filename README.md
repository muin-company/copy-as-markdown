# Copy as Markdown

A Chrome extension that converts selected web content into clean, formatted markdown with a single click.

## Features

- **Right-click context menu** - Select text, right-click → "Copy as Markdown"
- **Keyboard shortcut** - `Cmd+Shift+M` (Mac) / `Ctrl+Shift+M` (Windows)
- **Clean conversion** - Preserves structure while removing unnecessary formatting
- **Configurable** - Toggle image and link inclusion in settings
- **Toast notifications** - Visual feedback when copying

## Supported Elements

The extension intelligently converts:

- **Headings** (H1-H6) → `# Heading`
- **Bold/Strong** → `**bold**`
- **Italic/Emphasis** → `*italic*`
- **Links** → `[text](url)`
- **Images** → `![alt](src)`
- **Code blocks** → ` ```code``` `
- **Inline code** → `` `code` ``
- **Lists** (ordered & unordered)
- **Tables** → Markdown tables
- **Blockquotes** → `> quote`
- **Horizontal rules** → `---`

## Installation

### From Source

1. Clone this repository:
   ```bash
   git clone https://github.com/muin-company/copy-as-markdown.git
   cd copy-as-markdown
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" (toggle in top right)

4. Click "Load unpacked"

5. Select the `copy-as-markdown` folder

## Usage Examples

### Copying an Article

1. Select the content you want to copy
2. Right-click and choose "Copy as Markdown"
3. Paste into your markdown editor

**Example input (HTML):**
```html
<h2>Getting Started</h2>
<p>This is a <strong>simple</strong> example with a <a href="https://example.com">link</a>.</p>
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
```

**Output (Markdown):**
```markdown
## Getting Started

This is a **simple** example with a [link](https://example.com).

- First item
- Second item
```

### Copying Code Snippets

The extension preserves code blocks:

**Input:**
```html
<pre><code>function hello() {
  console.log("Hello!");
}</code></pre>
```

**Output:**
```markdown
```
function hello() {
  console.log("Hello!");
}
```
```

### Copying Tables

**Input:**
```html
<table>
  <tr><th>Name</th><th>Value</th></tr>
  <tr><td>Alpha</td><td>1</td></tr>
  <tr><td>Beta</td><td>2</td></tr>
</table>
```

**Output:**
```markdown
| Name | Value |
| --- | --- |
| Alpha | 1 |
| Beta | 2 |
```

## Settings

Click the extension icon to access settings:

- **Include images** - Convert `<img>` tags to markdown image syntax
- **Include links** - Convert `<a>` tags to markdown links (disable to get plain text)

## Keyboard Shortcut

The default shortcut is:
- **Mac:** `Cmd+Shift+M`
- **Windows/Linux:** `Ctrl+Shift+M`

To customize, go to `chrome://extensions/shortcuts`

## Technical Details

- **Manifest V3** - Uses the latest Chrome extension format
- **No dependencies** - Pure JavaScript HTML-to-Markdown converter
- **Privacy-first** - All processing happens locally, no data sent anywhere
- **Lightweight** - Minimal permissions, fast performance

## Development

Project structure:
```
copy-as-markdown/
├── manifest.json          # Extension manifest
├── popup.html            # Settings popup
├── popup.css             # Popup styles
├── popup.js              # Popup logic
├── scripts/
│   ├── background.js     # Service worker (context menu)
│   ├── content.js        # Content script (clipboard)
│   ├── converter.js      # HTML → Markdown converter
│   └── toast.css         # Toast notification styles
└── icons/                # Extension icons
```

## License

MIT

## Contributing

Issues and pull requests welcome at [github.com/muin-company/copy-as-markdown](https://github.com/muin-company/copy-as-markdown)
