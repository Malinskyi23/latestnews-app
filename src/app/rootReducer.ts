import { newsArticleSlice } from '@/entitry/news';
import { newsApi } from '@/shared/api';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [newsArticleSlice.reducerPath]: newsArticleSlice.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
});
