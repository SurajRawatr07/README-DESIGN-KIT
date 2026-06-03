/*

export const 
    const treeCharsRegex = /^([│├─└\s]*)(.*)$/;
    const match = line.match(tre
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
