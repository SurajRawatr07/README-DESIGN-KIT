// Base
import type { ViewMode } from '@/types/view-mode';

export interface BaseElement {
  id: s


export interface TableElement extends BaseElement {
  type: 'table';
  headers: string[];
  rows: string[][];
}

export interface BadgeElement extends BaseElement {
  type: 'badge';
  content: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  hiddenFor?: ('developer' | 'recruiter' | 'client')[];
}

export interface InstallationElement extends BaseElement {
  type: 'installation';
  content: string;
  instructions?: string[];
}

/* ===================== 🔥 ANIMATED TECH ELEMENT ===================== */

export interface AnimatedAWSElement extends BaseElement {
  type: 'animated-aws';
}

/* ===================== STRONG UNION ===================== */

export type ElementType =
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
