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

## Real-World Use Cases

### Example 1: Documentation from Stack Overflow

**Scenario:** You found a great answer on Stack Overflow and want to include it in your project docs.

**Before (manual copy-paste):**
```
Just select, copy, paste into markdown...
❌ Code formatting lost
❌ Links become plain text
❌ Have to manually add markdown syntax
```

**After (with Copy as Markdown):**
1. Select the answer on Stack Overflow
2. Right-click → "Copy as Markdown"
3. Paste into your `README.md`

**Result:**
```markdown
## How to handle async errors in Node.js

The best approach is to use try-catch with async/await:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com');
    return await response.json();
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}
```

See [Node.js async best practices](https://nodejs.org/en/docs/) for more.
```

**Time saved:** 5 minutes per answer

---

### Example 2: Research Notes from Blog Posts

**Scenario:** Reading a technical blog, want to save key points to your Obsidian/Notion notes.

**Workflow:**
1. Read article at `https://blog.example.com/machine-learning-basics`
2. Select the "Key Concepts" section
3. Press `Cmd+Shift+M`
4. Paste into `Machine Learning Notes.md`

**Input (from blog):**
```html
<h3>Key Concepts</h3>
<ul>
  <li><strong>Supervised Learning:</strong> Training with labeled data</li>
  <li><strong>Unsupervised Learning:</strong> Finding patterns in unlabeled data</li>
  <li><strong>Reinforcement Learning:</strong> Learning through trial and error</li>
</ul>
<p>For a deeper dive, check out <a href="https://course.ml">this course</a>.</p>
```

**Output (in your notes):**
```markdown
### Key Concepts

- **Supervised Learning:** Training with labeled data
- **Unsupervised Learning:** Finding patterns in unlabeled data
- **Reinforcement Learning:** Learning through trial and error

For a deeper dive, check out [this course](https://course.ml).
```

**Benefit:** Perfect for Zettelkasten-style note-taking

---

### Example 3: Meeting Notes from Slack/Discord

**Scenario:** Your team shared a detailed technical explanation in Slack. You want to add it to the team wiki.

**Slack message:**
```
@john: Here's how our caching strategy works:

1. Check Redis first (TTL: 5 min)
2. If miss, query database
3. Store in Redis for next request

The key format is: user:{id}:profile

Code example:
const key = `user:${userId}:profile`;
const cached = await redis.get(key);
if (!cached) {
  cached = await db.users.findById(userId);
  await redis.set(key, cached, 'EX', 300);
}
return cached;

Make sure to invalidate when profile updates! 🚨
```

**Process:**
1. Select the entire message
2. Right-click → "Copy as Markdown"
3. Paste into `team-wiki/caching.md`

**Output:**
```markdown
@john: Here's how our caching strategy works:

1. Check Redis first (TTL: 5 min)
2. If miss, query database
3. Store in Redis for next request

The key format is: `user:{id}:profile`

Code example:
```
const key = `user:${userId}:profile`;
const cached = await redis.get(key);
if (!cached) {
  cached = await db.users.findById(userId);
  await redis.set(key, cached, 'EX', 300);
}
return cached;
```

Make sure to invalidate when profile updates! 🚨
```

**Use case:** Turning ephemeral chat into permanent documentation

---

### Example 4: GitHub Issue → Project Task

**Scenario:** Converting a GitHub issue into a task for your project management tool (Linear, Notion, etc.)

**GitHub issue:**
```html
<h2>Bug: Login fails with SSO</h2>
<p>Users with SSO-enabled accounts cannot log in after the 2.5 update.</p>

<h3>Steps to Reproduce</h3>
<ol>
  <li>Go to <code>/login</code></li>
  <li>Click "Sign in with SSO"</li>
  <li>Redirected to IdP, authenticate successfully</li>
  <li>Redirected back, see "Session expired" error</li>
</ol>

<h3>Expected</h3>
<p>User should be logged in.</p>

<h3>Actual</h3>
<p>User sees error and must retry (sometimes multiple times).</p>

<h3>Environment</h3>
<ul>
  <li>Version: 2.5.1</li>
  <li>Browser: Chrome 120</li>
  <li>OS: macOS 14</li>
</ul>
```

**Process:**
1. Select issue body
2. `Cmd+Shift+M`
3. Paste into Linear/Notion task

**Output:**
```markdown
## Bug: Login fails with SSO

Users with SSO-enabled accounts cannot log in after the 2.5 update.

### Steps to Reproduce

1. Go to `/login`
2. Click "Sign in with SSO"
3. Redirected to IdP, authenticate successfully
4. Redirected back, see "Session expired" error

### Expected

User should be logged in.

### Actual

User sees error and must retry (sometimes multiple times).

### Environment

- Version: 2.5.1
- Browser: Chrome 120
- OS: macOS 14
```

**Benefit:** Clean, structured task descriptions without manual reformatting

---

### Example 5: API Documentation Copy

**Scenario:** Copying API reference from official docs to your internal wiki.

**From docs.stripe.com:**
```html
<h2>Create a Customer</h2>
<p>Creates a new customer object.</p>

<h3>Parameters</h3>
<table>
  <thead>
    <tr><th>Parameter</th><th>Type</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>email</td><td>string</td><td>Customer's email address</td></tr>
    <tr><td>name</td><td>string</td><td>Customer's full name</td></tr>
    <tr><td>metadata</td><td>object</td><td>Set of key-value pairs</td></tr>
  </tbody>
</table>

<h3>Example Request</h3>
<pre><code>curl https://api.stripe.com/v1/customers \
  -u sk_test_xxx: \
  -d email="customer@example.com"
</code></pre>
```

**Process:**
1. Select content
2. Right-click → "Copy as Markdown"
3. Paste into `docs/stripe-integration.md`

**Output:**
```markdown
## Create a Customer

Creates a new customer object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| email | string | Customer's email address |
| name | string | Customer's full name |
| metadata | object | Set of key-value pairs |

### Example Request

```
curl https://api.stripe.com/v1/customers \
  -u sk_test_xxx: \
  -d email="customer@example.com"
```
```

**Why it matters:** No need to manually format tables and code blocks

---

### Example 6: Blog Post Draft from Multiple Sources

**Scenario:** You're writing a blog post and gathering research from multiple articles.

**Workflow:**

**Source 1 (TechCrunch):**
1. Select: "AI companies raised $50B in 2025..."
2. `Cmd+Shift+M`
3. Paste into `draft.md`

**Source 2 (HackerNews comment):**
1. Select: "The real innovation isn't the models..."
2. `Cmd+Shift+M`
3. Paste into `draft.md`

**Source 3 (Research paper abstract):**
1. Select abstract with citations
2. `Cmd+Shift+M`
3. Paste into `draft.md`

**Result (`draft.md`):**
```markdown
## AI Investment in 2025

> AI companies raised $50B in 2025, up from $30B in 2024, with most funding going to foundation model companies like [OpenAI](https://openai.com) and [Anthropic](https://anthropic.com).

### Community Perspective

From HackerNews user @ai_skeptic:

> The real innovation isn't the models, it's the **tooling and infrastructure** around them. Developer experience is what will win.

### Research Background

According to [Smith et al. (2025)](https://arxiv.org/abs/xxx):

> Large language models exhibit emergent capabilities at scale, including:
> - In-context learning
> - Chain-of-thought reasoning
> - Tool use and API calling
>
> These properties were not explicitly trained but arise from scale.
```

**Benefit:** Fast research aggregation with proper formatting and links

---

### Example 7: Email → Markdown (Gmail, Outlook Web)

**Scenario:** Archiving important emails as markdown files for future reference.

**Email content (HTML):**
```html
<p>Hi team,</p>

<p>Quick update on <strong>Q1 goals</strong>:</p>

<ul>
  <li>Launch new API: ✅ Done</li>
  <li>Migrate to Postgres: 🚧 In Progress (ETA: Feb 15)</li>
  <li>Redesign dashboard: 📅 Scheduled for March</li>
</ul>

<p>Blockers:</p>
<ol>
  <li>Need design approval from Sarah</li>
  <li>Waiting on infrastructure budget</li>
</ol>

<p>See <a href="https://docs.company.com/q1-plan">full plan</a> for details.</p>

<p>Thanks,<br>Alex</p>
```

**Process:**
1. Select email body in Gmail
2. `Cmd+Shift+M`
3. Save as `emails/q1-update-2026-02-06.md`

**Output:**
```markdown
Hi team,

Quick update on **Q1 goals**:

- Launch new API: ✅ Done
- Migrate to Postgres: 🚧 In Progress (ETA: Feb 15)
- Redesign dashboard: 📅 Scheduled for March

Blockers:

1. Need design approval from Sarah
2. Waiting on infrastructure budget

See [full plan](https://docs.company.com/q1-plan) for details.

Thanks,  
Alex
```

**Use case:** Markdown email archive, searchable and version-controllable

---

### Example 8: Wikipedia Research

**Scenario:** Taking notes from Wikipedia articles for a research project.

**Wikipedia article structure:**
```html
<h2>History</h2>
<p>The concept originated in <a href="/wiki/ARPANET">ARPANET</a>...</p>

<h3>Early Development (1960s)</h3>
<ul>
  <li><strong>1962:</strong> J.C.R. Licklider proposes "Intergalactic Network"</li>
  <li><strong>1969:</strong> ARPANET sends first message</li>
</ul>

<h3>Modern Era (1990s-present)</h3>
<p>The <a href="/wiki/World_Wide_Web">World Wide Web</a> became publicly available in 1991...</p>
```

**Process:**
1. Select "History" section
2. Right-click → "Copy as Markdown"
3. Paste into `research/internet-history.md`

**Output:**
```markdown
## History

The concept originated in [ARPANET](https://en.wikipedia.org/wiki/ARPANET)...

### Early Development (1960s)

- **1962:** J.C.R. Licklider proposes "Intergalactic Network"
- **1969:** ARPANET sends first message

### Modern Era (1990s-present)

The [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web) became publicly available in 1991...
```

**Benefit:** Preserves Wikipedia links and structure for proper attribution

---

## Settings

Click the extension icon to access settings:

- **Include images** - Convert `<img>` tags to markdown image syntax
- **Include links** - Convert `<a>` tags to markdown links (disable to get plain text)

### Advanced Settings Examples

**Scenario 1:** Copy text-only (no links)

If you want plain text without hyperlinks:
1. Click extension icon
2. Disable "Include links"
3. Select and copy

**Before:**
```markdown
Read more about [Machine Learning](https://example.com/ml) in this article.
```

**After (links disabled):**
```markdown
Read more about Machine Learning in this article.
```

**Use case:** When pasting into systems that don't support markdown links.

---

**Scenario 2:** Skip images for faster copying

When copying documentation with lots of diagrams you don't need:
1. Disable "Include images"
2. Copy content

**Before:**
```markdown
## Architecture

![System Diagram](https://example.com/diagram.png)

The system consists of three layers...
```

**After (images disabled):**
```markdown
## Architecture

The system consists of three layers...
```

**Use case:** Faster copying when you only need text.

---

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
