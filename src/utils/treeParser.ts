/**
 * Utility to parse directory structures and add icons
 : '📄',
  'md': '📝',
  'py': '🐍',
  'go': '⚙️',
  'yaml': '⚙️'🐳',
  'gitignore': '🚫',
  'env': '🔒',
  'license': '⚖️',
  'lock': '🔒',
  'sln': '🔧',
  'csproj': '🔷',

  // Configs
  'config': '⚙️',
  'settings': '⚙️',
  'rc': '⚙️',
};

const FOLDER_ICONS: Record<string, string> = {
  'src': '📂',
  'public': '📂',
  'assets': '📂',
  'components': '📂',
  'pages': '📂',
  'app': '📂',
  'api': '📂',
  'utils': '🛠️',
  'lib': '📚',
  'hooks': '🪝',
  'styles': '🎨',
  'test': '🧪',
  'tests': '🧪',
  'docs': '📚',
  'bin': '📦',
  'dist': '📦',
  'build': '📦',
  'node_modules': '📦',
  '.git': '🛑',
  '.github': '🐙',
  '.vscode': '🔧',
  'controllers': '🎮',
  'models': '🗄️',
  'views': '👁️',
  'routes': '🛣️',
  'services': '🔧',
  'config': '⚙️',
  'middleware': '🛡️',
  'migrations': '🔄',
  'types': '🏷️',
  'interfaces': '🏷️',
};

export const getIconForFile = (filename: string): string => {
  const lowerName = filename.toLowerCase();

  // Check exact matches first (for dotfiles like .gitignore)
  if (FILE_ICONS[lowerName]) return FILE_ICONS[lowerName];
  if (FILE_ICONS[lowerName.replace('.', '')]) return FILE_ICONS[lowerName.replace('.', '')];

  // Extension check
  const ext = lowerName.split('.').pop();
  if (ext && FILE_ICONS[ext]) return FILE_ICONS[ext];

  return '📄';
};

export const getIconForFolder = (dirname: string): string => {
  const lowerName = dirname.toLowerCase();
  if (FOLDER_ICONS[lowerName]) return FOLDER_ICONS[lowerName];
  return '📂';
};

/**
 * Parses a plain text tree or just a list of files into a structured tree with icons
 */
export const smartParseTree = (input: string): string => {
  if (!input.trim()) return '';

  const lines = input.split('\n');
  const processedLines = lines.map(line => {

    const treeCharsRegex = /^([│├─└\s]*)(.*)$/;
    const match = line.match(treeCharsRegex);

    if (!match) return line;

    const [, treePrefix, content] = match;
    const trimmedContent = content.trim();

    if (!trimmedContent) return line;

    // 3. Determine if it's a file or folder
    // Heuristic: If it doesn't have an extension and matches known folder names, OR ends with /, it's a folder
    const isFolder =
      trimmedContent.endsWith('/') ||
      !trimmedContent.includes('.') ||
      Object.keys(FOLDER_ICONS).includes(trimmedContent.toLowerCase());

    // 4. Get appropriate icon
    const icon = isFolder
      ? getIconForFolder(trimmedContent.replace('/', ''))
      : getIconForFile(trimmedContent);

    // 5. Reconstruct the line
    // Don't add icon if one already exists
    const hasIcon = /[\u{1F300}-\u{1F9FF}]/u.test(trimmedContent);
    const finalContent = hasIcon ? trimmedContent : `${icon} ${trimmedContent}`;

    return `${treePrefix}${finalContent}`;
  });

  return `\`\`\`bash\n${processedLines.join('\n')}\n\`\`\``;
};
