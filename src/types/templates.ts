import type { ElementType } from './elements';

export interface Template {
  id: string;g;
  author: string;
  version: string;
  popularity: number;
  crea?: Tce TemplateMetadata {
  totalTemplates: number;
  categories: {
    category: TemplateCategory;
    count: number;
  }[];
  popularTags: {
    tag: string;
    count: number;
  }[];
}

export interface UserTemplatePreferences {
  favorites: string[];
  recentlyUsed: string[];
  recentlyViewed: string[];
}
