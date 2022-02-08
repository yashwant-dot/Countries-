import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'light_theme'
  },
  reducers: {
    toggleTheme: state => {
      state.value = state.value === 'light_theme' ? 'dark_theme' : 'light_theme'
    }
  }
});

export const { toggleTheme } = themeSlice.actions;

export const getTheme = state => state.theme.value;

export default themeSlice.reducer;
