// src/slices/apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCocktails = createAsyncThunk(
  'api/fetchCocktails',
  async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const data = await response.json();
    return data.drinks;
  }
);

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    loading: false,
    cocktails: [],
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload;
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default apiSlice.reducer;


// const apiResults = async () => {
//     try{
//         const apiResponse = await fetch(apiURL);
//         const apiData = await apiResponse.json();
//         dispatch(fetchCocktailsSuccess(data.drinks));
//         return 
//     } catch (error){
//         console.error ("Error: ", error);
//     }; 

// }