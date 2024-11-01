// src/components/Results.jsx
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktailsByCategory } from '../redux/slices/apiSlice';
import { Link } from 'react-router-dom';
import './results.scss';

const categories = ['All', 'Cocktail', 'Shot', 'Beer'];

const Results = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dispatch = useDispatch();
  const { cocktails, loading, error } = useSelector((state) => state.Results);

  useEffect(() => {
    if (selectedCategory === 'All') {
      categories.slice(1).forEach((category) => {
        dispatch(fetchCocktailsByCategory(category));
      });
    } else {
      dispatch(fetchCocktailsByCategory(selectedCategory));
    }
  }, [dispatch, selectedCategory]);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="my-cocktails">
      <h1>My Cocktails</h1>
      <p>On this page, you can find all the available courses to learn about cocktails by category.</p>
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
                  <Link to={`/cocktailclass?id=${drink.idDrink}`} key={drink.idDrink}>
                    <div className="cocktail-item">
                      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                      <h2>{drink.strDrink}</h2>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Results;

