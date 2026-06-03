import type { Template } from '@/types/templates';
import tyclonedTemplateElements = this.refreshElementIds(templateElements);
    return [...existingElements, ...clonedTemplateElements];
  }

  /ementType[] {
    const clonedTemplateElements = this.refreshElementIds(templateElements);
    const result = [...existingElements];
    result.splice(position, 0, ...clonedTemplateElements);
    return result;
  }

  /**
   * Extract template data from elements (for saving as template)
   */
  static elementsToTemplate(
    elements: ElementType[],
    templateData: Partial<Template>
  ): Omit<Template, 'id' | 'created' | 'updated'> {
    return {
      name: templateData.name || 'Custom Template',
      description: templateData.description || 'A custom template created from elements',
      category: templateData.category || 'personal-projects',
      tags: templateData.tags || ['custom'],
      author: templateData.author || 'User',
      version: '1.0.0',
      popularity: 0,
      featured: false,
      thumbnail: templateData.thumbnail || '',
      elements: this.refreshElementIds(elements),
    };
  }

  /**
   * Get template statistics
   */
  static getTemplateStats(template: Template) {
    const elements = template.elements || []; // Ensure elements is an array

    const elementTypes = elements.reduce((acc, element) => {
      acc[element.type] = (acc[element.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalElements: elements.length,
      elementTypes,
      estimatedReadTime: Math.ceil(elements.length * 0.5), // rough estimate in minutes
      complexity:
        elements.length > 10 ? 'complex' : elements.length > 5 ? 'medium' : 'simple',
    };
  }
  /**
   * 1. DYNAMIC RENDERING:
   * Replaces placeholders like {{NAME}} with actual user input in real-time.
   */
  static renderDynamicElements(
    elements: ElementType[], 
    variables: Record<string, string>
  ): ElementType[] {
    return elements.map((element) => {
      // 1. Prevents error: 'element.content' is possibly undefined
      const safeContent = element.content || '';

      return {
        ...element,
        content: safeContent.replace(/{{(\w+)}}/g, (match, key) => {
          return variables[key] || match; 
        }),
        // 2. Cast style to satisfy strict ElementType requirements
        style: element.style as any 
      };
    });
  }
  

  /**
   * 2. ONE-CLICK COPY:
   * Flattens the structured JSON elements into a raw Markdown string for the clipboard.
   */
  static elementsToMarkdown(elements: ElementType[]): string {
    return elements
      .map((el) => {
        switch (el.type) {
          case 'header':
            return `${'#'.repeat(el.level || 1)} ${el.content}`;
          case 'banner':
            return `> ### ${el.content}`;
          case 'tech-stack':
            const icons = el.technologies?.join(',').toLowerCase();
            return `### 🛠 Tech Stack\n![Skills](https://skillicons.dev/icons?i=${icons})`;
          case 'text':
            return el.content;
          default:
            return el.content;
        }
      })
      .join('\n\n');
  }
}
