import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktailsByCategory, fetchCocktailDetails } from '../redux/slices/apiSlice';
import './results.scss';

const categories = ['All', 'Cocktail', 'Shot', 'Beer'];

const Results = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCocktailId, setSelectedCocktailId] = useState(null);
  const dispatch = useDispatch();
  const { cocktails, cocktailDetails, loading, error } = useSelector((state) => state.Results);

  useEffect(() => {
    if (selectedCategory === 'All') {
      categories.slice(1).forEach((category) => {
        dispatch(fetchCocktailsByCategory(category));
      });
    } else {
      dispatch(fetchCocktailsByCategory(selectedCategory));
    }
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    if (selectedCocktailId) {
      dispatch(fetchCocktailDetails(selectedCocktailId));
    }
  }, [dispatch, selectedCocktailId]);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleCocktailClick = (id) => {
    setSelectedCocktailId(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="my-cocktails">
      <h1 className="cocktailTitle">My Cocktails</h1>
      <p className="introduction">On this page, you can find all the available courses to learn about cocktails by category.</p>
      <div>
        <label htmlFor="category">Choose a category: </label>
        <select id="category" value={selectedCategory} onChange={handleChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {categories.slice(1).map((category) => (
        <div key={category}>
          {(selectedCategory === 'All' || selectedCategory === category) && (
            <>
              <h2>{category}</h2>
              <div className="cocktails-list">
                {cocktails[category] && cocktails[category].map((drink) => (
                  <div
                    key={drink.idDrink}
                    className="cocktail-item"
                    onClick={() => handleCocktailClick(drink.idDrink)}
                  >
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <h2 className="cocktailName">{drink.strDrink}</h2>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
      {selectedCocktailId && cocktailDetails && (
        <div className="cocktail-details">
          <h1>{cocktailDetails.strDrink}</h1>
          <img src={cocktailDetails.strDrinkThumb} alt={cocktailDetails.strDrink} />
          <div className="ingredients">
            <h2 className="ingredientsTitle">Ingredients</h2>
            {Array.from({ length: 15 }, (_, i) => i + 1).map((i) => (
              cocktailDetails[`strIngredient${i}`] && (
                <div key={i} className="ingredient-item">
                  <p>{cocktailDetails[`strIngredient${i}`]} - {cocktailDetails[`strMeasure${i}`]}</p>
                </div>
              )
            ))}
          </div>
          <div className="instructions">
            <h2 className="instructionsTitle">Instructions</h2>
            <p>{cocktailDetails.strInstructions}</p>
          </div>
          <div className="glass-info">
            <h2 className="glassTitle">Glass</h2>
            <p>{cocktailDetails.strGlass}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;

