// Pure JS HTML to Markdown converter

class HTMLToMarkdown {
  constructor(options = {}) {
    this.includeImages = options.includeImages !== false;
    this.includeLinks = options.includeLinks !== false;
  }

  convert(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return this.processNode(doc.body).trim().replace(/\n{3,}/g, '\n\n');
  }

  processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return '';
    }

    const tagName = node.tagName.toLowerCase();
    let result = '';

    switch (tagName) {
      case 'h1':
        result = '# ' + this.getTextContent(node) + '\n\n';
        break;
      case 'h2':
        result = '## ' + this.getTextContent(node) + '\n\n';
        break;
      case 'h3':
        result = '### ' + this.getTextContent(node) + '\n\n';
        break;
      case 'h4':
        result = '#### ' + this.getTextContent(node) + '\n\n';
        break;
      case 'h5':
        result = '##### ' + this.getTextContent(node) + '\n\n';
        break;
      case 'h6':
        result = '###### ' + this.getTextContent(node) + '\n\n';
        break;

      case 'p':
        result = this.processChildren(node) + '\n\n';
        break;

      case 'br':
        result = '\n';
        break;

      case 'strong':
      case 'b':
        result = '**' + this.getTextContent(node) + '**';
        break;

      case 'em':
      case 'i':
        result = '*' + this.getTextContent(node) + '*';
        break;

      case 'code':
        if (node.parentElement.tagName.toLowerCase() === 'pre') {
          return this.getTextContent(node);
        }
        result = '`' + this.getTextContent(node) + '`';
        break;

      case 'pre':
        const codeContent = this.getTextContent(node);
        result = '```\n' + codeContent + '\n```\n\n';
        break;

      case 'a':
        if (this.includeLinks) {
          const href = node.getAttribute('href') || '';
          const text = this.getTextContent(node);
          result = '[' + text + '](' + href + ')';
        } else {
          result = this.getTextContent(node);
        }
        break;

      case 'img':
        if (this.includeImages) {
          const src = node.getAttribute('src') || '';
          const alt = node.getAttribute('alt') || '';
          result = '![' + alt + '](' + src + ')';
        }
        break;

      case 'ul':
        result = this.processList(node, false) + '\n';
        break;

      case 'ol':
        result = this.processList(node, true) + '\n';
        break;

      case 'li':
        // Handled by processList
        result = this.processChildren(node);
        break;

      case 'blockquote':
        const lines = this.processChildren(node).split('\n');
        result = lines.map(line => line ? '> ' + line : '>').join('\n') + '\n\n';
        break;

      case 'table':
        result = this.processTable(node) + '\n\n';
        break;

      case 'hr':
        result = '---\n\n';
        break;

      case 'div':
      case 'span':
      case 'section':
      case 'article':
      case 'main':
      case 'header':
      case 'footer':
      case 'nav':
      case 'aside':
        result = this.processChildren(node);
        break;

      default:
        result = this.processChildren(node);
    }

    return result;
  }

  processChildren(node) {
    let result = '';
    for (const child of node.childNodes) {
      result += this.processNode(child);
    }
    return result;
  }

  getTextContent(node) {
    return this.processChildren(node);
  }

  processList(listNode, ordered) {
    let result = '';
    let index = 1;
    
    for (const child of listNode.children) {
      if (child.tagName.toLowerCase() === 'li') {
        const prefix = ordered ? `${index}. ` : '- ';
        const content = this.processChildren(child).trim();
        result += prefix + content + '\n';
        if (ordered) index++;
      }
    }
    
    return result;
  }

  processTable(tableNode) {
    const rows = [];
    
    // Process thead
    const thead = tableNode.querySelector('thead');
    const tbody = tableNode.querySelector('tbody');
    const allRows = tableNode.querySelectorAll('tr');
    
    let headerProcessed = false;
    
    for (const row of allRows) {
      const cells = row.querySelectorAll('th, td');
      const cellContents = Array.from(cells).map(cell => 
        this.getTextContent(cell).trim().replace(/\|/g, '\\|')
      );
      
      if (cellContents.length > 0) {
        rows.push('| ' + cellContents.join(' | ') + ' |');
        
        // Add separator after first row (header)
        if (!headerProcessed) {
          const separator = '|' + cellContents.map(() => ' --- ').join('|') + '|';
          rows.push(separator);
          headerProcessed = true;
        }
      }
    }
    
    return rows.join('\n');
  }
}
