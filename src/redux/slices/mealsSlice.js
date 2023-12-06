import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    meals: [],
    
  },
  reducers: {
    addMeal: (state, action) => {
      state.meals = [...state.meals, action.payload];
    }
  },
});

export const { addMeal} = mealsSlice.actions;
export default mealsSlice.reducer;
