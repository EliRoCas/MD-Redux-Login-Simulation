import { useParams } from 'react-router-dom';
import "./cocktailClass.scss"

const CocktailClass = () => {
  
  const cocktail = {
    id: "15300",
    name: "3-Mile Long Island Iced Tea",
    image: "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
    ingredients: [
      { name: "Gin", image: "path/to/gin.jpg", measure: "1/2 oz" },
      { name: "Light rum", image: "path/to/light-rum.jpg", measure: "1/2 oz" },
      { name: "Tequila", image: "path/to/tequila.jpg", measure: "1/2 oz" },
      { name: "Triple sec", image: "path/to/triple-sec.jpg", measure: "1/2 oz" },
      { name: "Vodka", image: "path/to/vodka.jpg", measure: "1/2 oz" },
      { name: "Coca-Cola", image: "path/to/coca-cola.jpg", measure: "1/2 oz" },
      { name: "Sweet and sour", image: "path/to/sweet-and-sour.jpg", measure: "1-2 dash" },
      { name: "Bitters", image: "path/to/bitters.jpg", measure: "Garnish with" },
      { name: "Lemon", image: "path/to/lemon.jpg", measure: "1 wedge" },
    ],
    instructions: "Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.",
    glass: "Collins Glass",
  };


  return (
    <div className="cocktail-details">
      <h1>{cocktail.name}</h1>
      <img src={cocktail.image} alt={cocktail.name} />
      <div className="ingredients">
        <h2>Ingredients</h2>
        {cocktail.ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient-item">
            <img src={ingredient.image} alt={ingredient.name} />
            <p>{ingredient.name}- {ingredient.measure}</p>
          </div>
        ))}
      </div>
      <div className="instructions">
        <h2>Instructions</h2>
        <p>{cocktail.instructions}</p>
      </div>
      <div className="glass-info">
        <h2>Glass</h2>
        <p>{cocktail.glass}</p>
      </div>
    </div>
  );
};

export default CocktailClass;
