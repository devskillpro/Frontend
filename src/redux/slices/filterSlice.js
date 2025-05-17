// src/redux/slices/filterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: 'Attar',
  priceRange: [0, 10000],
  sortBy: 'latest', // or 'price-asc', 'price-desc'
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    resetFilters: (state) => {
      state.selectedCategory = 'Attar';
      state.priceRange = [0, 10000];
      state.sortBy = 'latest';
    },
  },
});

export const {
  setCategory,
  setPriceRange,
  setSortBy,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
