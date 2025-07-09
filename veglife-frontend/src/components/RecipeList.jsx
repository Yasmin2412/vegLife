import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import "../index.css"; // CSS file where styles are written

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/recipes");
        setRecipes(res.data);
        console.log("Fetched recipes:", res.data); // Debug
      } catch (err) {
        console.error("Failed to fetch recipes", err);
      }
    };
    fetchRecipes();
  }, []);

  const handleSave = async (id) => {
    try {
      await axios.post(
        `http://localhost:5000/api/recipes/save/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Recipe saved!");
    } catch (err) {
      alert("Failed to save recipe.");
    }
  };

  return (
    <div className="recipe-page">
      <h2 className="recipe-heading">🍲 All Recipes</h2>

      {recipes && recipes.length > 0 ? (
        <div className="recipe-grid">
          {recipes.map((r) => (
            <div className="recipe-card" key={r._id}>
              <h3>{r.title}</h3>
              <p><strong>Category:</strong> {r.category}</p>
              <p>{r.description}</p>
              <p><strong>Ingredients:</strong> {r.ingredients.join(", ")}</p>
              <p><strong>Instructions:</strong> {r.instructions}</p>
              <p className="by">👩‍🍳 By: {r.createdBy}</p>
              <button onClick={() => handleSave(r._id)}>💾 Save</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-recipe">No recipes found.</p>
      )}
    </div>
  );
}
