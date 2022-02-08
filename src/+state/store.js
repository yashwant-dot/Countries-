import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './+features/theme';
import countriesReducer from './+features/countries';

export default configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer
  }
});
