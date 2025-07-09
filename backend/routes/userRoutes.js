const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

// Save Recipe
router.post('/save', authMiddleware, async (req, res) => {
  try {
    const { recipeId } = req.body;
    const user = await User.findById(req.userId);
    if (!user.savedRecipes.includes(recipeId)) {
      user.savedRecipes.push(recipeId);
      await user.save();
    }
    res.json({ message: 'Recipe saved!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
