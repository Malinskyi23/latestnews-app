export type NewsCategory =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';

export interface EverythingQueryParams {
  q?: string;

  searchIn?: Array<'title' | 'description' | 'content'>;

  sources?: string[]; // ['bbc-news', 'techcrunch']
  domains?: string[]; // ['bbc.co.uk', 'engadget.com']
  excludeDomains?: string[];

  from?: string; // '2025-07-11' or '2025-07-11T09:25:44'
  to?: string;

  language?: string; // 'en', 'ru', 'fr' and so on.

  sortBy?: 'relevancy' | 'popularity' | 'publishedAt';

  pageSize?: number; // default 100, max 100
  page?: number; // default 1
}

export interface TopHeadlinesQueryParams {
  country?: string; // ISO 3166-1 (2 sybmols), e.g.: 'us', 'gb', 'ua'
  category?: NewsCategory;

  sources?: string[]; // source identifiers, e.g.: ['bbc-news', 'cnn']
  q?: string; // search keywords

  pageSize?: number; // from 1 to 100 (default 20)
  page?: number; // starting form 1
}

export interface NewsArticle {
  source?: { id: string | null; name: string };
  author?: string | null;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string | null;
  publishedAt?: string;
  content?: string;
}
