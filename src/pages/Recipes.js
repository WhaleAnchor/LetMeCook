import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDrumstickBite,
  faHamburger,
  faBacon,
  faCarrot,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";
import "./Recipes.css";

function Recipes() {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch recipes when the component mounts
    if (selectedIngredient) {
      fetchRecipesByCategory(selectedIngredient);
    }
  }, [selectedIngredient]);

  // Function to fetch recipes based on the selected ingredient
  const fetchRecipesByCategory = async (ingredient) => {
    setLoading(true);

    // Replace with your actual API endpoint
    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=684a0687&app_key=94bae8e94cd68e8fb460b3d4820ff6ad`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setRecipes(data.hits); // Update state with the fetched recipes
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to go back to the previous set of cards
  const goBack = () => {
    setSelectedIngredient(null);
    setRecipes([]); // Reset the recipes to an empty array
  };

  return (
    <div className="recipes-container">
      {selectedIngredient ? (
        <button onClick={goBack} className="back-button">
          Back
        </button>
      ) : (
        <div className="category-cards">
          {["Chicken", "Beef", "Pork", "Vegetarian"].map((ingredient) => (
            <div
              key={ingredient}
              className="category-card"
              onClick={() => setSelectedIngredient(ingredient)}
            >
              <Card title={ingredient}>
                {ingredient === "Chicken" && <FontAwesomeIcon icon={faDrumstickBite} />}
                {ingredient === "Beef" && <FontAwesomeIcon icon={faHamburger} />}
                {ingredient === "Pork" && <FontAwesomeIcon icon={faBacon} />}
                {ingredient === "Vegetarian" && <FontAwesomeIcon icon={faCarrot} />}
              </Card>
            </div>
          ))}
        </div>
      )}

      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.recipe.uri} className="recipe-card">
            <h3>{recipe.recipe.label}</h3>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            {/* You can display more recipe details here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
