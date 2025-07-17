import type { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: state => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;

export const selectIsDarkMode = (state: RootState) => state.theme.isDarkMode;
