const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  ingredients: [String],
  instructions: String,
  category: String,
  createdBy: String // Later: connect with userId
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
