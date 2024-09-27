import {
  HIGHLIGHTS_LANGUAGE,
  HIGHLIGHTS_REQUEST_ERROR,
} from '@/lib/constants/highlights.constants';
import { ValuesOfObject } from './globals';

type CategoryName = 'selected' | 'births' | 'deaths' | 'holidays' | 'events';

export type Language = ValuesOfObject<typeof HIGHLIGHTS_LANGUAGE>;

export interface Category {
  category: CategoryName;
}

export interface Highlight {
  text: string;
  year?: number;
  pages: {
    type: 'standard' | 'disambiguation' | 'no-extract' | 'mainpage';

    namespace: {
      id: number;
      text: string;
    };

    wikibase_item: string;

    titles: {
      canonical: string;
      normalized: string;
      display: string;
    };

    pageid: number;

    thumbnail: {
      source: string;
      width: number;
      height: number;
    };

    originalimage: {
      source: string;
      width: number;
      height: number;
    };

    lang: string;
    dir: string;
    revision: string;
    tid: string;
    timestamp: string;
    description: string;
    description_source: string;

    content_urls: {
      desktop: {
        page: string;
        revisions: string;
        edit: string;
        talk: string;
      };
      mobile: {
        page: string;
        revisions: string;
        edit: string;
        talk: string;
      };
    };

    extract: string;
    extract_html: string;
  }[];
}

export type HighlightsFeed = Partial<Record<Category['category'], Highlight[]>>;

export interface CurrentDayInfo {
  MM: string;
  DD: string;
}

export type HighlightsRequestError = ValuesOfObject<
  typeof HIGHLIGHTS_REQUEST_ERROR
>;
