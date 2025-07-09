import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import "../index.css"; // Same CSS file

export default function SavedRecipes() {
  const [recipes, setRecipes] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchSaved = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/recipes/saved", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRecipes(res.data);
        console.log("Saved recipes:", res.data); // Debug
      } catch (err) {
        console.error("Error fetching saved recipes", err);
      }
    };

    fetchSaved();
  }, []);

  return (
    <div className="recipe-page">
      <h2 className="recipe-heading">💚 Saved Recipes</h2>

      {recipes && recipes.length > 0 ? (
        <div className="recipe-grid">
          {recipes.map((r) => (
            <div key={r._id} className="recipe-card">
              <h3>{r.title}</h3>
              <p><strong>Category:</strong> {r.category}</p>
              <p>{r.description}</p>
              <p><strong>Ingredients:</strong> {r.ingredients.join(", ")}</p>
              <p><strong>Instructions:</strong> {r.instructions}</p>
              <p className="by">👩‍🍳 By: {r.createdBy}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-recipe">No saved recipes yet.</p>
      )}
    </div>
  );
}
