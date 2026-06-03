/*

export const 
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
