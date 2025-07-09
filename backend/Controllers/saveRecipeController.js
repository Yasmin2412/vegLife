const User = require("../models/User");
const Recipe = require("../models/Recipe");

const saveRecipe = async (req, res) => {
  const userId = req.user.userId;
  const recipeId = req.params.recipeId;

  console.log("🔖 Save Recipe - User:", userId, "Recipe:", recipeId);

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.savedRecipes.includes(recipeId)) {
      user.savedRecipes.push(recipeId);
      await user.save();
    }

    res.json({ message: "Recipe saved successfully!" });
  } catch (err) {
    console.error("❌ Save Recipe Error:", err);
    res.status(500).json({ error: err.message });
  }
};

const getSavedRecipes = async (req, res) => {
  const userId = req.user.userId;
  console.log("📥 Fetch Saved Recipes for:", userId);

  try {
    const user = await User.findById(userId).populate("savedRecipes");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user.savedRecipes);
  } catch (err) {
    console.error("❌ Get Saved Error:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { saveRecipe, getSavedRecipes };
