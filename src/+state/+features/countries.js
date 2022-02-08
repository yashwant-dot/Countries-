import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    try {
      const response = await fetch('https://restcountries.com/v2/all');
      const data = await response.json();
      return data;
    } catch(error) {
      return error;
    }
  }
);

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = state.data.concat(action.payload);
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
  }
});

export const getAllCountries = state => state.countries.data;
export const getStatus = state => state.countries.status;
export const getRegions = state => ['All', ...new Set(state.countries.data.map(country => country.region))];

export default countriesSlice.reducer;
