import { newsArticleSlice } from '@/entitry/news';
import { themeSlice } from '@/features/theme';
import { newsApi } from '@/shared/api';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [themeSlice.reducerPath]: themeSlice.reducer,
  [newsArticleSlice.reducerPath]: newsArticleSlice.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
});
