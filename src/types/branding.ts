export type BrandingTone = 'casual' | 'technical' | 'professional' | 'open-source';

export type BrandingFixType = 'grammar' | 'enhancement' | 'rewrite' | 'addition';
g; // 🆕 Ls: BrandingSuggestion[];
  overallScore: number;
  toneConsistency: number;
  selectedTone: BrandingTone;
  detectedTone?: BrandingTone; // 🆕 Inferred tone from content
}
