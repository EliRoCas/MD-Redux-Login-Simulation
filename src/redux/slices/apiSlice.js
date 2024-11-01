import { createSlice } from '@reduxjs/toolkit';

// Acción para llamar a la API y obtener los cócteles por categoría
const fetchCocktailsByCategory = (category) => async (dispatch) => {
  dispatch(fetchCocktailsByCategoryPending());
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    dispatch(fetchCocktailsByCategoryFulfilled({ category, drinks: data.drinks.slice(0, 6) }));
  } catch (error) {
    dispatch(fetchCocktailsByCategoryRejected(error.message));
  }
};

// Acción para llamar a la API y obtener detalles del cóctel por ID
const fetchCocktailDetails = (id) => async (dispatch) => {
  dispatch(fetchCocktailDetailsPending());
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    dispatch(fetchCocktailDetailsFulfilled(data.drinks[0]));
  } catch (error) {
    dispatch(fetchCocktailDetailsRejected(error.message));
  }
};

const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState: {
    cocktails: {},
    cocktailDetails: {},
    loading: false,
    error: null,
  },
  reducers: {
    fetchCocktailsByCategoryPending: (state) => {
      state.loading = true;
    },
    fetchCocktailsByCategoryFulfilled: (state, action) => {
      state.loading = false;
      state.cocktails[action.payload.category] = action.payload.drinks;
    },
    fetchCocktailsByCategoryRejected: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchCocktailDetailsPending: (state) => {
      state.loading = true;
    },
    fetchCocktailDetailsFulfilled: (state, action) => {
      state.loading = false;
      state.cocktailDetails = action.payload;
    },
    fetchCocktailDetailsRejected: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCocktailsByCategoryPending,
  fetchCocktailsByCategoryFulfilled,
  fetchCocktailsByCategoryRejected,
  fetchCocktailDetailsPending,
  fetchCocktailDetailsFulfilled,
  fetchCocktailDetailsRejected,
} = cocktailSlice.actions;

export { fetchCocktailsByCategory, fetchCocktailDetails };

export default cocktailSlice.reducer;
