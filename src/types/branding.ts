export type BrandingTone = 'casual' | 'technical' | 'professional' | 'open-source';

export type BrandingFmber;
  selectedTone: BrandingTone;
  detectedTone?: BrandingTone; // 🆕 Inferred tone from content
}
