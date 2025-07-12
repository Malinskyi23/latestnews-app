import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_CURRENTS_API_URL;
const API_KEY = import.meta.env.VITE_CURRENTS_API_KEY;

export const currentsApi = createApi({
  reducerPath: 'currentsApi',
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
    getLatestNews: builder.query({
      query: ({ page_number = 1, page_size = 10, category }) => {
        const params = new URLSearchParams();

        if (page_number !== undefined)
          params.append('page_number', String(page_number));

        if (page_size !== undefined)
          params.append('page_size', String(page_size));

        if (category) params.append('category', category);

        return `/search?${params.toString()}`;
      },
    }),
    getNewsCategories: builder.query({
      query: () => '/available/categories',
    }),
  }),
});

export const { useGetLatestNewsQuery, useGetNewsCategoriesQuery } = currentsApi;
