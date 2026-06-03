// Base
import type { ViewMode } from '@/types/view-mode';

export interface BaseElement {
  id: s


/* == ElementType =
  | TextElement
  | TitleElement
  | DescriptionElement
  | HeaderElement
  | BannerElement
  | GitContributionElement
  | TechStackElement
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
