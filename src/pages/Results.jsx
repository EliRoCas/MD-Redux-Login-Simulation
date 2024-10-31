// // src/components/ApiResults.js
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCocktails } from '../redux/slices/apiSlice';

import { Link } from "react-router-dom";
import "./results.scss";

const cocktails = [
  {
    strDrink: "3-Mile Long Island Iced Tea",
    strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
    idDrink: "15300",
  },
  {
    strDrink: "410 Gone",
    strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
    idDrink: "13581",
  },
  {
    strDrink: "50/50",
    strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg",
    idDrink: "14598",
  },
  {
    strDrink: "501 Blue",
    strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg",
    idDrink: "17105",
  },
  {
    strDrink: "69 Special",
    strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
    idDrink: "13940",
  },
];

const Results = () => {
 
  // const dispatch = useDispatch();
  // const { loading, cocktails, error } = useSelector(state => state.api);

  // useEffect(() => {
  //   dispatch(fetchCocktails());
  // }, [dispatch]);


  return (
    
      <div className="my-cocktails">
      <h1>My Cocktails Courses</h1>
      <div className="filters">
        <select >
          <option value="all">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          {/* Agrega más categorías según sea necesario */}
        </select>
      </div>
      <div className="cocktails-list">
        {cocktails.map(cocktail =>(
          <Link to={`/cocktailclass?id=${cocktail.idDrink}` } key={cocktail.idDrink}>
            <div className="cocktail-item" >
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              <h2>{cocktail.strDrink}</h2>
            </div>
          </Link>
        ) )}
        
      </div>
    </div>
  );
};

export default Results;
