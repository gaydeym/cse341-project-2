const { recipe: RecipeModel } = require('../models');

// Add a new recipe
async function addRecipe(req, res) {
  try {
    const newRecipe = new RecipeModel(req.body);
    const saved = await newRecipe.save();
    console.log('Saved recipe:', saved);
    res.status(201).json(saved);
  } catch (error) {
    console.error('Error saving recipe:', error);
    res.status(500).json({
      error: error.message || 'Failed to save the recipe.'
    });
  }
}

// Fetch all recipes
async function fetchRecipes(req, res) {
  try {
    const recipes = await RecipeModel.find();
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({
      error: error.message || 'Could not retrieve recipes.'
    });
  }
}

// Fetch a recipe by ID
async function fetchRecipeById(req, res) {
  try {
    const { id } = req.params;
    const recipe = await RecipeModel.findById(id);

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found.' });
    }

    res.json(recipe);
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({
      error: error.message || 'Error retrieving the recipe.'
    });
  }
}

module.exports = { addRecipe, fetchRecipes, fetchRecipeById };
