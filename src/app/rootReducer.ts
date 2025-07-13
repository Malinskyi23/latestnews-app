import { currentsApi, newsApi } from '@/shared/api';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [newsApi.reducerPath]: newsApi.reducer,
  [currentsApi.reducerPath]: currentsApi.reducer,
});
