// src/components/ApiResults.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktails } from '../redux/slices/apiSlice';

const ApiResults = () => {
  const dispatch = useDispatch();
  const { loading, cocktails, error } = useSelector(state => state.api);

  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  return (
    <div>
      <h1>Resultados de la API</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {cocktails && cocktails.map(cocktail => (
        <div key={cocktail.idDrink}>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </div>
      ))}
    </div>
  );
};

export default ApiResults;
