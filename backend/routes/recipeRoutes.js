const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const { saveRecipe, getSavedRecipes } = require("../Controllers/saveRecipeController");
const authenticateUser = require("../middleware/authMiddleware");

// 👉 Create Recipe (authenticated only)
router.post('/', authenticateUser, async (req, res) => {
  try {
    const newRecipe = new Recipe({ ...req.body, createdBy: req.user.userId });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 👉 Get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 👉 Save a recipe
router.post("/save/:recipeId", authenticateUser, saveRecipe);

// 👉 Get saved recipes
router.get("/saved", authenticateUser, getSavedRecipes);

module.exports = router;
