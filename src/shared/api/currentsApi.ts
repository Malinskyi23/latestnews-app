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
        // headers.set('Content-Type', 'application/json');
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    // builder.query<ReturnedData, QueryArgs>
    // ReturnedData - the response data returned from the server. (requset result)
    // QueryArgs - the arguments passed to the hook and used to build the request

    getLatestNews: builder.query({
      query: () => `/latest-news`,
    }),
  }),
});

export const { useGetLatestNewsQuery } = currentsApi;
