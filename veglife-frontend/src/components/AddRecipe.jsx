import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import "../index.css";

export default function AddRecipe() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    ingredients: "",
    instructions: "",
  });
  const { token } = useContext(AuthContext);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/recipes", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Recipe added!");
      setForm({
        title: "",
        description: "",
        category: "",
        ingredients: "",
        instructions: "",
      });
    } catch (err) {
      alert("Failed to add recipe.");
    }
  };

  return (
    <div className="add-recipe-container">
      <h2 className="add-recipe-heading">👩‍🍳 Share Your Recipe</h2>
      <form className="add-recipe-form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Recipe Title"
          onChange={handleChange}
          value={form.title}
        />
        <input
          name="category"
          placeholder="Category (e.g. Breakfast)"
          onChange={handleChange}
          value={form.category}
        />
        <textarea
          name="description"
          placeholder="Short Description"
          onChange={handleChange}
          value={form.description}
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients (comma separated)"
          onChange={handleChange}
          value={form.ingredients}
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          onChange={handleChange}
          value={form.instructions}
        />
        <button type="submit">➕ Add Recipe</button>
      </form>
    </div>
  );
}
