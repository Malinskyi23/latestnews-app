import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = '/.netlify/functions/get-news';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: headers => {
      if (API_KEY) {
        headers.set('Authorization', API_KEY);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getNewsArticles: builder.query({
      query: ({ q, pageSize, page }) => {
        const params = new URLSearchParams();

        if (q) params.append('q', q);
        if (pageSize !== undefined) params.append('pageSize', String(pageSize));
        if (page !== undefined) params.append('page', String(page));

        return `/v2/everything?q=${params.toString()}`;
      },
    }),
    getNewsHeadlines: builder.query({
      query: ({ country = 'us', category, q, pageSize, page }) => {
        const params = new URLSearchParams();

        if (country) params.append('country', country);
        if (category) params.append('category', category);
        if (q) params.append('q', q);
        if (pageSize !== undefined) params.append('pageSize', String(pageSize));
        if (page !== undefined) params.append('page', String(page));

        return `/v2/top-headlines?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetNewsArticlesQuery, useGetNewsHeadlinesQuery } = newsApi;
