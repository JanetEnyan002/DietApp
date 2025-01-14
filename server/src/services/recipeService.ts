import Recipe, { IRecipe } from '../models/Recipe';
import { QueryParams, HealthIssues } from '../types';
import cloudinary from '../config/cloudinary';

export const createRecipe = async (recipeData: Partial<IRecipe>, imageFile: Express.Multer.File): Promise<IRecipe> => {
  try {
    const result = await cloudinary.uploader.upload(imageFile.path);
    const recipe = new Recipe({
      ...recipeData,
      imageUrl: result.secure_url,
    });
    return await recipe.save();
  } catch (error) {
    throw new Error('Error uploading image or creating recipe');
  }
};

export const getRecipes = async (queryParams: QueryParams): Promise<IRecipe[]> => {
  const { mealType, healthIssues } = queryParams;
  let query: any = {};
  
  if (mealType) {
    query.mealType = mealType;
  }
  
  if (healthIssues) {
    Object.entries(healthIssues).forEach(([issue, value]) => {
      if (value) {
        query[`suitableFor.${issue}`] = true;
      }
    });
  }
  
  return await Recipe.find(query);
};

export const getRecipeById = async (id: string): Promise<IRecipe | null> => {
  return await Recipe.findById(id);
};

export const updateRecipe = async (id: string, recipeData: Partial<IRecipe>, imageFile?: Express.Multer.File): Promise<IRecipe | null> => {
  try {
    let updateData = { ...recipeData };
    if (imageFile) {
      const result = await cloudinary.uploader.upload(imageFile.path);
      updateData.imageUrl = result.secure_url;
    }
    return await Recipe.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
  } catch (error) {
    throw new Error('Error updating recipe or uploading image');
  }
};

export const deleteRecipe = async (id: string): Promise<IRecipe | null> => {
  return await Recipe.findByIdAndDelete(id);
};

export const getRecipesBySuitability = async (healthIssues: Partial<HealthIssues>): Promise<IRecipe[]> => {
  const query = Object.entries(healthIssues).reduce((acc, [issue, value]) => {
    if (value) {
      acc[`suitableFor.${issue}`] = true;
    }
    return acc;
  }, {} as any);

  return await Recipe.find(query);
};

export const getRecipesByNutrition = async (
  minCalories: number,
  maxCalories: number,
  minProtein?: number,
  maxProtein?: number
): Promise<IRecipe[]> => {
  let query: any = {
    'nutritionInfo.calories': { $gte: minCalories, $lte: maxCalories }
  };

  if (minProtein !== undefined && maxProtein !== undefined) {
    query['nutritionInfo.protein'] = { $gte: minProtein, $lte: maxProtein };
  }

  return await Recipe.find(query);
};

export const searchRecipes = async (searchTerm: string): Promise<IRecipe[]> => {
  return await Recipe.find({
    $or: [
      { name: { $regex: searchTerm, $options: 'i' } },
      { 'ingredients.name': { $regex: searchTerm, $options: 'i' } }
    ]
  });
};