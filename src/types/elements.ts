// Base
import type { ViewMode } from '@/types/view-mode';

export interface BaseElement {
  id: s

lement
  | ImageElement
  | CodeBlockElement
  | TableElement
  | BadgeElement
  | DividerElement
  | InstallationElement
  | AnimatedAWSElement;

/* ===================== CONFIG METADATA ===================== */

export interface ElementConfig {
  type: ElementType['type'];
  name: string;
  icon: string;
  description: string;
  defaultProps: Partial<ElementType>;
}
