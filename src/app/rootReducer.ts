import { currentsApi } from '@/shared/api';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [currentsApi.reducerPath]: currentsApi.reducer,
});
