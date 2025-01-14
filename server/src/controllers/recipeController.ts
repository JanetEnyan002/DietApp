import { Request, Response } from 'express';
import Recipe, { IRecipe } from '../models/Recipe';
import * as recipeService from '../services/recipeService';
import { QueryParams } from '../types';

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Error creating recipe' });
  }
};

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const { mealType, healthIssues } = req.query;
    let query: any = {};
    
    if (mealType) {
      query.mealType = mealType;
    }
    
    if (healthIssues) {
      const issues = JSON.parse(String(healthIssues));
      Object.keys(issues).forEach(issue => {
        if (issues[issue]) {
          query[`suitableFor.${issue}`] = true;
        }
      });
    }
    
    const recipes = await Recipe.find(query);
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching recipes' });
  }
};

export const getRecipe = async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching recipe' });
  }
};

export const updateRecipe = async (req: Request, res: Response) => {
  try {
    const recipe = await recipeService.updateRecipe(req.params.id, req.body, req.file as Express.Multer.File | undefined);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Error updating recipe' });
  }
};

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting recipe' });
  }
};

export const searchRecipes = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const recipes = await recipeService.searchRecipes(String(searchTerm));
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Error searching recipes' });
  }
};

export const getRecipesByNutrition = async (req: Request, res: Response) => {
  try {
    const { minCalories, maxCalories, minProtein, maxProtein } = req.query;
    const recipes = await recipeService.getRecipesByNutrition(
      Number(minCalories),
      Number(maxCalories),
      minProtein ? Number(minProtein) : undefined,
      maxProtein ? Number(maxProtein) : undefined
    );
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching recipes by nutrition' });
  }
};