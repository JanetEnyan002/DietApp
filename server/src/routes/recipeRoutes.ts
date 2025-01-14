import express from 'express';
import * as recipeController from '../controllers/recipeController';
import upload from '../middleware/upload';

const router = express.Router();

router.post('/', upload.single('image'), recipeController.createRecipe);
router.get('/', recipeController.getRecipes);
router.get('/search', recipeController.searchRecipes);
router.get('/nutrition', recipeController.getRecipesByNutrition);
router.get('/:id', async (req, res) => {
  try {
    const result = await recipeController.getRecipe(req, res);
    res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
});
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const result = await recipeController.updateRecipe(req, res);
    res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const result = await recipeController.deleteRecipe(req, res);
    res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
});

export default router;