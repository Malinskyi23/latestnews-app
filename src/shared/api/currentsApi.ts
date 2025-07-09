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
    // getLatestNews: builder.query({
    //   query: () => `/latest-news`,
    // }),
    getLatestNews: builder.query({
      query: ({ page_number = 1, page_size = 10, category }) =>
        `/search?&page_number=${page_number}&page_size=${page_size}&category=${category}`,
    }),
    getNewsCategories: builder.query({
      query: () => '/available/categories',
    }),
  }),
});

export const { useGetLatestNewsQuery, useGetNewsCategoriesQuery } = currentsApi;
