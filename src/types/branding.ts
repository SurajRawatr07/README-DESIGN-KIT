export type BrandingTone = 'casual' | 'technical' | 'professional' | 'open-source';

export type BrandingFixType = 'grammar' | 'enhancement' | 'rewrite' | 'addition';
g; // 🆕 Link sugg;   
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
