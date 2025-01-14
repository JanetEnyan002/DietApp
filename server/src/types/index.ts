// Health Preference Types
export interface HealthIssues {
	gastritis: boolean;
	pepticUlcer: boolean;
	celiacDisease: boolean;
	bowelSyndrome: boolean;
	lactoseIntolerance: boolean;
      }
      
      export interface DietaryPreferences {
	vegetarian: boolean;
	highProtein: boolean;
	highFibre: boolean;
	vegan: boolean;
	beef: boolean;
	pork: boolean;
	fish: boolean;
	poultry: boolean;
      }
      
      export interface HealthPreference {
	userId: string;
	healthIssues: HealthIssues;
	dietaryPreferences: DietaryPreferences;
	createdAt: Date;
      }
      
      // Recipe Types
      export interface Ingredient {
	name: string;
	quantity: string;
      }
      
      export interface NutritionInfo {
	calories: number;
	protein: number;
	carbs: number;
	fat: number;
      }
      
      export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';
      
      export interface Recipe {
	id?: string;
	name: string;
	image: string;
	ingredients: Ingredient[];
	nutritionInfo: NutritionInfo;
	suitableFor: HealthIssues;
	mealType: MealType;
	createdAt: Date;
      }
      
      // Utility Types
      export type WithId<T> = T & { id: string };
      
      export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
      
      export type QueryParams = {
	mealType?: MealType;
	healthIssues?: Partial<HealthIssues>;
      };
      
      