import type { BrandingTone, BrandingAnalysis } from '@/types/branding';
import type { ElementType } from '@/types/elements';

const TONE_DESCRIPTIONS: Record
 * analyzeBranding (Refactored)
 * AI-powered analysis has been removed to simplify the core workflow.
 * We've renamed it back to analyzeBranding and added the missing 'selectedTone' property.
 */
export async function analyzeBranding(_elements:
    toneConsistency: 60,
      {
        id: 'manual-1',
        section: 'Getting Started',
        suggestion: 'Ensure you have clear installation steps for your users.',
        reason: 'Installation guides are the most visited section of a README.',
        severity: 'medium',
        type: 'structure'
      },
      {
        id: 'manual-2',
        section: 'Tone Check',
        suggestion: `Aim for a ${targetTone} tone as per your project settings.`,
        reason: 'Consistent tone builds brand trust.',
        severity: 'low',
        type: 'tone'
      }
    ]
  };
}

// Utility to get tone description for UI display
export function getToneDescription(tone: BrandingTone): string {
  return TONE_DESCRIPTIONS[tone];
}
