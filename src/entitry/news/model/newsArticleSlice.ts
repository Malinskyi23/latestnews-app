import type { RootState } from '@/app/store';
import type { NewsArticle } from '@/shared/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type NewsArticleState = {
  data: NewsArticle;
};

const initialState: NewsArticleState = {
  data: {
    source: { id: null, name: 'string' },
    author: null,
    title: '',
    description: '',
    url: '',
    urlToImage: null,
    publishedAt: '',
    content: '',
  },
};

export const newsArticleSlice = createSlice({
  name: 'newsArticle',
  initialState,
  reducers: {
    setArticle: (state, action: PayloadAction<NewsArticle>) => {
      state.data = action.payload;
    },
    resetArticleState: () => initialState,
  },
});

export const { setArticle, resetArticleState } = newsArticleSlice.actions;

export const selectArticle = (state: RootState) => state.newsArticle.data;
