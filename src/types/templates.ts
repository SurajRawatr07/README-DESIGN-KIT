import type { ElementType } from './elements';

export interface Template {
  id: string;g;
  author: string;
  version: string;
  popularityber;
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
