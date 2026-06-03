export type BrandingTone = 'casual' | 'technical' | 'professional' | 'open-source';

export type BrandingFixType = 'grammar' | 'enhancement' | 'rewrite' | 'addition';

export type SuggestionActionType = 'edit' | 'add' | 'remove' | 'reorder' | 'enhance';
dd?: any; // ElementType but avoiding circular dependency
  targetPosition?: number;
  direction?: 'up' | 'down';
}

export interface BrandingSuggestion {
  id?: string;
  elementId?: string; // 🆕 Link suggestion to specific editor element
  section: string;
  suggestion: string;
  reason: string;
  severity: 'low' | 'medium' | 'high';
  fix?: string;
  type: 'structure' | 'wording' | 'tone' | 'clarity';
  fixType?: BrandingFixType; // 🆕 Type of fix (for filtering or UI hints)
  confidence?: number;        // 🆕 Score (0 to 1) indicating how certain the suggestion is
  excerpt?: string;           // 🆕 Snippet from content that triggered the suggestion
  suggestionRange?: {
    start: number;
    end: number;
  };
  action?: SuggestionAction; // 🆕 Enhanced action for complex operations
}

export interface BrandingAnalysis {
  suggestions: BrandingSuggestion[];
  overallScore: number;
  toneConsistency: number;
  selectedTone: BrandingTone;
  detectedTone?: BrandingTone; // 🆕 Inferred tone from content
}
