export type BrandingTone = 'casual' | 'technical' | 'professional' | 'open-source';

export type BrandingFixType = 'grammar' | 'enhancement' | 'rewrite' | 'addition';
g; // 🆕 Link suggest    // 🆕 Score (0 to 1) indicating how certain the suggestion is
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
