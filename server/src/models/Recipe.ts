import { Document, Schema, model } from 'mongoose';

interface Ingredient {
  name: string;
  quantity: string;
}

interface NutritionInfo {
  calories: number;
  protein: number;
  fat: number;
  carbohydrates: number;
}

interface HealthIssues {
  gastritis: boolean;
  pepticUlcer: boolean;
  celiacDisease: boolean;
  bowelSyndrome: boolean;
  lactoseIntolerance: boolean;
}

type MealType = 'breakfast' | 'lunch' | 'snack' | 'dinner';

export interface IRecipe extends Document {
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];
  nutritionInfo: NutritionInfo;
  suitableFor: HealthIssues;
  mealType: MealType;
  createdAt: Date;
}

const RecipeSchema = new Schema<IRecipe>({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  ingredients: [{ name: String, quantity: String }],
  nutritionInfo: {
    calories: Number,
    protein: Number,
    fat: Number,
    carbohydrates: Number,
  },
  suitableFor: {
    gastritis: Boolean,
    pepticUlcer: Boolean,
    celiacDisease: Boolean,
    bowelSyndrome: Boolean,
    lactoseIntolerance: Boolean,
  },
  mealType: { type: String, enum: ['breakfast', 'lunch', 'snack', 'dinner'] },
  createdAt: { type: Date, default: Date.now },
});

const Recipe = model<IRecipe>('Recipe', RecipeSchema);

export default Recipe;