// export interface Ingredient {
// 	name: string;
// 	imageUrl: number;
// 	nutrition: Nutrition; // Add nutrition info
// }

// export interface Nutrition {
// 	calories: number; // in kcal
// 	protein: number; // in grams
// 	fat: number; // in grams
// 	carbohydrates: number; // in grams
// 	fiber?: number; // optional, in grams
// 	sugar?: number; // optional, in grams
// }

// export interface Step {
// 	order: number;
// 	description: string;
// }

// export interface Recipe {
// 	id: string;
// 	name: string;
// 	imageUrl: number; // Changed to number for React Native require
// 	mealType: string;
// 	ingredients: Ingredient[];
// 	steps: Step[];
// }
      
//       // Load image once at the top
//       const jollofImage = require('../assets/jollof.png');
//       const ingredientImage = require('../assets/jollof.png');
      
//       export const breakfastRecipes: Recipe[] = [
// 	{ id: '1', name: 'Pancakes', imageUrl: jollofImage, mealType: 'breakfast', ingredients: [
// 	  { name: 'Flour', imageUrl: ingredientImage },
// 	  { name: 'Eggs', imageUrl: ingredientImage },
// 	  { name: 'Milk', imageUrl: ingredientImage },
// 	  { name: 'Sugar', imageUrl: ingredientImage },
// 	  { name: 'Butter', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Mix the dry ingredients: **Flour**, **Sugar**.' },
// 	  { order: 2, description: 'Add the wet ingredients: **Eggs**, **Milk**, **Butter**.' },
// 	  { order: 3, description: 'Heat a pan and pour the batter.' },
// 	  { order: 4, description: 'Cook until bubbles form, then flip.' },
// 	  { order: 5, description: 'Serve with syrup or toppings of choice.' },
// 	]},
// 	{ id: '2', name: 'Omelette', imageUrl: jollofImage, mealType: 'breakfast', ingredients: [
// 	  { name: 'Eggs', imageUrl: ingredientImage },
// 	  { name: 'Cheese', imageUrl: ingredientImage },
// 	  { name: 'Bell Peppers', imageUrl: ingredientImage },
// 	  { name: 'Onions', imageUrl: ingredientImage },
// 	  { name: 'Salt', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Beat the **Eggs** with **Salt**.' },
// 	  { order: 2, description: 'Heat a pan and add the **Onions** and **Bell Peppers**.' },
// 	  { order: 3, description: 'Pour the egg mixture into the pan.' },
// 	  { order: 4, description: 'Add **Cheese** and cook until set.' },
// 	  { order: 5, description: 'Fold the omelette and serve.' },
// 	]},
// 	{ id: '3', name: 'Smoothie', imageUrl: jollofImage, mealType: 'breakfast', ingredients: [
// 	  { name: 'Banana', imageUrl: ingredientImage },
// 	  { name: 'Strawberries', imageUrl: ingredientImage },
// 	  { name: 'Yogurt', imageUrl: ingredientImage },
// 	  { name: 'Honey', imageUrl: ingredientImage },
// 	  { name: 'Ice', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Add **Banana**, **Strawberries**, and **Yogurt** to a blender.' },
// 	  { order: 2, description: 'Add **Honey** and **Ice**.' },
// 	  { order: 3, description: 'Blend until smooth.' },
// 	  { order: 4, description: 'Pour into a glass and serve.' },
// 	]},
// 	{ id: '4', name: 'Toast', imageUrl: jollofImage, mealType: 'breakfast', ingredients: [
// 	  { name: 'Bread', imageUrl: ingredientImage },
// 	  { name: 'Butter', imageUrl: ingredientImage },
// 	  { name: 'Jam', imageUrl: ingredientImage },
// 	  { name: 'Peanut Butter', imageUrl: ingredientImage },
// 	  { name: 'Honey', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Toast the **Bread** slices.' },
// 	  { order: 2, description: 'Spread **Butter** on the toast.' },
// 	  { order: 3, description: 'Add **Jam** or **Peanut Butter**.' },
// 	  { order: 4, description: 'Drizzle with **Honey** if desired.' },
// 	  { order: 5, description: 'Serve warm.' },
// 	]},
//       ];
      
//       export const lunchRecipes: Recipe[] = [
// 	{ id: '1', name: 'Spaghetti', imageUrl: jollofImage, mealType: 'lunch', ingredients: [
// 	  { name: 'Spaghetti', imageUrl: ingredientImage },
// 	  { name: 'Tomato Sauce', imageUrl: ingredientImage },
// 	  { name: 'Ground Beef', imageUrl: ingredientImage },
// 	  { name: 'Garlic', imageUrl: ingredientImage },
// 	  { name: 'Parmesan', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Cook the **Spaghetti** according to package instructions.' },
// 	  { order: 2, description: 'In a pan, cook the **Ground Beef** with **Garlic**.' },
// 	  { order: 3, description: 'Add the **Tomato Sauce** to the beef and simmer.' },
// 	  { order: 4, description: 'Mix the sauce with the cooked spaghetti.' },
// 	  { order: 5, description: 'Serve with grated **Parmesan** on top.' },
// 	]},
// 	{ id: '2', name: 'Jollof Rice', imageUrl: jollofImage, mealType: 'lunch', ingredients: [
// 	  { name: 'Rice', imageUrl: ingredientImage },
// 	  { name: 'Tomato Paste', imageUrl: ingredientImage },
// 	  { name: 'Chicken', imageUrl: ingredientImage },
// 	  { name: 'Onions', imageUrl: ingredientImage },
// 	  { name: 'Peppers', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Cook the **Chicken** and set aside.' },
// 	  { order: 2, description: 'In a pot, sauté **Onions** and **Peppers**.' },
// 	  { order: 3, description: 'Add **Tomato Paste** and cook for a few minutes.' },
// 	  { order: 4, description: 'Add the **Rice** and water, then cook until done.' },
// 	  { order: 5, description: 'Mix in the cooked chicken and serve.' },
// 	]},
// 	{ id: '3', name: 'Oatmeal', imageUrl: jollofImage, mealType: 'lunch', ingredients: [
// 	  { name: 'Oats', imageUrl: ingredientImage },
// 	  { name: 'Milk', imageUrl: ingredientImage },
// 	  { name: 'Honey', imageUrl: ingredientImage },
// 	  { name: 'Banana', imageUrl: ingredientImage },
// 	  { name: 'Berries', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Cook the **Oats** with **Milk**.' },
// 	  { order: 2, description: 'Add **Honey** for sweetness.' },
// 	  { order: 3, description: 'Top with sliced **Banana** and **Berries**.' },
// 	  { order: 4, description: 'Serve warm.' },
// 	]},
// 	{ id: '4', name: 'Croissant', imageUrl: jollofImage, mealType: 'lunch', ingredients: [
// 	  { name: 'Flour', imageUrl: ingredientImage },
// 	  { name: 'Butter', imageUrl: ingredientImage },
// 	  { name: 'Yeast', imageUrl: ingredientImage },
// 	  { name: 'Milk', imageUrl: ingredientImage },
// 	  { name: 'Sugar', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Mix the **Flour**, **Yeast**, and **Sugar**.' },
// 	  { order: 2, description: 'Add the **Milk** and knead the dough.' },
// 	  { order: 3, description: 'Fold in the **Butter** and shape the croissants.' },
// 	  { order: 4, description: 'Bake until golden brown.' },
// 	  { order: 5, description: 'Serve warm.' },
// 	]},
//       ];
      
//       export const dinnerRecipes: Recipe[] = [
// 	{ id: '1', name: 'Steak', imageUrl: jollofImage, mealType: 'dinner', ingredients: [
// 	  { name: 'Steak', imageUrl: ingredientImage },
// 	  { name: 'Salt', imageUrl: ingredientImage },
// 	  { name: 'Pepper', imageUrl: ingredientImage },
// 	  { name: 'Garlic', imageUrl: ingredientImage },
// 	  { name: 'Butter', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Season the **Steak** with **Salt** and **Pepper**.' },
// 	  { order: 2, description: 'Heat a pan and cook the steak to desired doneness.' },
// 	  { order: 3, description: 'Add **Garlic** and **Butter** to the pan.' },
// 	  { order: 4, description: 'Baste the steak with the butter mixture.' },
// 	  { order: 5, description: 'Let the steak rest before serving.' },
// 	]},
// 	{ id: '2', name: 'Salmon', imageUrl: jollofImage, mealType: 'dinner', ingredients: [
// 	  { name: 'Salmon', imageUrl: ingredientImage },
// 	  { name: 'Lemon', imageUrl: ingredientImage },
// 	  { name: 'Dill', imageUrl: ingredientImage },
// 	  { name: 'Garlic', imageUrl: ingredientImage },
// 	  { name: 'Olive Oil', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Season the **Salmon** with **Salt** and **Pepper**.' },
// 	  { order: 2, description: 'Heat a pan and cook the salmon skin-side down.' },
// 	  { order: 3, description: 'Add **Garlic** and **Dill** to the pan.' },
// 	  { order: 4, description: 'Squeeze **Lemon** juice over the salmon.' },
// 	  { order: 5, description: 'Serve with a drizzle of **Olive Oil**.' },
// 	]},
// 	{ id: '3', name: 'Pasta', imageUrl: jollofImage, mealType: 'dinner', ingredients: [
// 	  { name: 'Pasta', imageUrl: ingredientImage },
// 	  { name: 'Tomato Sauce', imageUrl: ingredientImage },
// 	  { name: 'Basil', imageUrl: ingredientImage },
// 	  { name: 'Parmesan', imageUrl: ingredientImage },
// 	  { name: 'Olive Oil', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Cook the **Pasta** according to package instructions.' },
// 	  { order: 2, description: 'In a pan, heat the **Tomato Sauce**.' },
// 	  { order: 3, description: 'Add the cooked pasta to the sauce.' },
// 	  { order: 4, description: 'Garnish with **Basil** and grated **Parmesan**.' },
// 	  { order: 5, description: 'Drizzle with **Olive Oil** before serving.' },
// 	]},
// 	{ id: '4', name: 'Soup', imageUrl: jollofImage, mealType: 'dinner', ingredients: [
// 	  { name: 'Chicken', imageUrl: ingredientImage },
// 	  { name: 'Carrots', imageUrl: ingredientImage },
// 	  { name: 'Celery', imageUrl: ingredientImage },
// 	  { name: 'Onions', imageUrl: ingredientImage },
// 	  { name: 'Broth', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Cook the **Chicken** and set aside.' },
// 	  { order: 2, description: 'In a pot, sauté **Onions**, **Carrots**, and **Celery**.' },
// 	  { order: 3, description: 'Add the **Broth** and bring to a boil.' },
// 	  { order: 4, description: 'Add the cooked chicken and simmer.' },
// 	  { order: 5, description: 'Serve hot.' },
// 	]},
//       ];
      
//       export const snackRecipes: Recipe[] = [
// 	{ id: '1', name: 'Chips', imageUrl: jollofImage, mealType: 'snack', ingredients: [
// 	  { name: 'Potatoes', imageUrl: ingredientImage },
// 	  { name: 'Salt', imageUrl: ingredientImage },
// 	  { name: 'Oil', imageUrl: ingredientImage },
// 	  { name: 'Pepper', imageUrl: ingredientImage },
// 	  { name: 'Paprika', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Slice the **Potatoes** thinly.' },
// 	  { order: 2, description: 'Heat the **Oil** in a pan.' },
// 	  { order: 3, description: 'Fry the potato slices until golden brown.' },
// 	  { order: 4, description: 'Season with **Salt**, **Pepper**, and **Paprika**.' },
// 	  { order: 5, description: 'Serve as a snack.' },
// 	]},
// 	{ id: '2', name: 'Fruit Salad', imageUrl: jollofImage, mealType: 'snack', ingredients: [
// 	  { name: 'Apples', imageUrl: ingredientImage },
// 	  { name: 'Bananas', imageUrl: ingredientImage },
// 	  { name: 'Grapes', imageUrl: ingredientImage },
// 	  { name: 'Oranges', imageUrl: ingredientImage },
// 	  { name: 'Berries', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Chop the **Apples**, **Bananas**, and **Oranges**.' },
// 	  { order: 2, description: 'Mix the chopped fruits with **Grapes** and **Berries**.' },
// 	  { order: 3, description: 'Serve chilled.' },
// 	]},
// 	{ id: '3', name: 'Yogurt', imageUrl: jollofImage, mealType: 'snack', ingredients: [
// 	  { name: 'Yogurt', imageUrl: ingredientImage },
// 	  { name: 'Honey', imageUrl: ingredientImage },
// 	  { name: 'Granola', imageUrl: ingredientImage },
// 	  { name: 'Berries', imageUrl: ingredientImage },
// 	  { name: 'Nuts', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Add **Yogurt** to a bowl.' },
// 	  { order: 2, description: 'Top with **Honey**, **Granola**, **Berries**, and **Nuts**.' },
// 	  { order: 3, description: 'Serve immediately.' },
// 	]},
// 	{ id: '4', name: 'Granola Bar', imageUrl: jollofImage, mealType: 'snack', ingredients: [
// 	  { name: 'Oats', imageUrl: ingredientImage },
// 	  { name: 'Honey', imageUrl: ingredientImage },
// 	  { name: 'Nuts', imageUrl: ingredientImage },
// 	  { name: 'Dried Fruit', imageUrl: ingredientImage },
// 	  { name: 'Chocolate Chips', imageUrl: ingredientImage },
// 	], steps: [
// 	  { order: 1, description: 'Mix the **Oats**, **Honey**, **Nuts**, and **Dried Fruit**.' },
// 	  { order: 2, description: 'Press the mixture into a baking dish.' },
// 	  { order: 3, description: 'Sprinkle with **Chocolate Chips**.' },
// 	  { order: 4, description: 'Bake until set.' },
// 	  { order: 5, description: 'Cut into bars and serve.' },
// 	]},
//       ];


export interface Ingredient {
	name: string;
	imageUrl: number;
      }
      
      export interface Step {
	order: number;
	description: string;
      }
      
      export interface Nutrition {
	calories: number; // in kcal
	protein: number; // in grams
	fat: number; // in grams
	carbohydrates: number; // in grams
	fiber?: number; // optional, in grams
	sugar?: number; // optional, in grams
      }
      
      export interface Recipe {
	id: string;
	name: string;
	imageUrl: number; // Changed to number for React Native require
	mealType: string;
	ingredients: Ingredient[];
	steps: Step[];
	nutrition: Nutrition;
      }
      
      // Load image once at the top
      const jollofImage = require('../assets/jollof.png');
      const ingredientImage = require('../assets/jollof.png');
      
      export const breakfastRecipes: Recipe[] = [
	{ id: '1', name: 'Pancakes', imageUrl: jollofImage, mealType: 'breakfast', ingredients: [
	  { name: 'Flour', imageUrl: ingredientImage },
	  { name: 'Eggs', imageUrl: ingredientImage },
	  { name: 'Milk', imageUrl: ingredientImage },
	  { name: 'Sugar', imageUrl: ingredientImage },
	  { name: 'Butter', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Mix the dry ingredients: **Flour**, **Sugar**.' },
	  { order: 2, description: 'Add the wet ingredients: **Eggs**, **Milk**, **Butter**.' },
	  { order: 3, description: 'Heat a pan and pour the batter.' },
	  { order: 4, description: 'Cook until bubbles form, then flip.' },
	  { order: 5, description: 'Serve with syrup or toppings of choice.' },
	], nutrition: {
	  calories: 350,
	  protein: 8,
	  fat: 15,
	  carbohydrates: 45,
	  fiber: 2,
	  sugar: 12,
	}},
	{ id: '2', name: 'Omelette', imageUrl: jollofImage, mealType: 'breakfast', ingredients: [
	  { name: 'Eggs', imageUrl: ingredientImage },
	  { name: 'Cheese', imageUrl: ingredientImage },
	  { name: 'Bell Peppers', imageUrl: ingredientImage },
	  { name: 'Onions', imageUrl: ingredientImage },
	  { name: 'Salt', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Beat the **Eggs** with **Salt**.' },
	  { order: 2, description: 'Heat a pan and add the **Onions** and **Bell Peppers**.' },
	  { order: 3, description: 'Pour the egg mixture into the pan.' },
	  { order: 4, description: 'Add **Cheese** and cook until set.' },
	  { order: 5, description: 'Fold the omelette and serve.' },
	], nutrition: {
	  calories: 250,
	  protein: 14,
	  fat: 18,
	  carbohydrates: 6,
	  fiber: 1,
	  sugar: 2,
	}},
	{ id: '3', name: 'Smoothie', imageUrl: jollofImage, mealType: 'breakfast', ingredients: [
	  { name: 'Banana', imageUrl: ingredientImage },
	  { name: 'Strawberries', imageUrl: ingredientImage },
	  { name: 'Yogurt', imageUrl: ingredientImage },
	  { name: 'Honey', imageUrl: ingredientImage },
	  { name: 'Ice', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Add **Banana**, **Strawberries**, and **Yogurt** to a blender.' },
	  { order: 2, description: 'Add **Honey** and **Ice**.' },
	  { order: 3, description: 'Blend until smooth.' },
	  { order: 4, description: 'Pour into a glass and serve.' },
	], nutrition: {
	  calories: 200,
	  protein: 5,
	  fat: 2,
	  carbohydrates: 45,
	  fiber: 4,
	  sugar: 30,
	}},
	{ id: '4', name: 'Toast', imageUrl: jollofImage, mealType: 'breakfast', ingredients: [
	  { name: 'Bread', imageUrl: ingredientImage },
	  { name: 'Butter', imageUrl: ingredientImage },
	  { name: 'Jam', imageUrl: ingredientImage },
	  { name: 'Peanut Butter', imageUrl: ingredientImage },
	  { name: 'Honey', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Toast the **Bread** slices.' },
	  { order: 2, description: 'Spread **Butter** on the toast.' },
	  { order: 3, description: 'Add **Jam** or **Peanut Butter**.' },
	  { order: 4, description: 'Drizzle with **Honey** if desired.' },
	  { order: 5, description: 'Serve warm.' },
	], nutrition: {
	  calories: 300,
	  protein: 6,
	  fat: 12,
	  carbohydrates: 40,
	  fiber: 3,
	  sugar: 15,
	}},
      ];
      
      export const lunchRecipes: Recipe[] = [
	{ id: '1', name: 'Spaghetti', imageUrl: jollofImage, mealType: 'lunch', ingredients: [
	  { name: 'Spaghetti', imageUrl: ingredientImage },
	  { name: 'Tomato Sauce', imageUrl: ingredientImage },
	  { name: 'Ground Beef', imageUrl: ingredientImage },
	  { name: 'Garlic', imageUrl: ingredientImage },
	  { name: 'Parmesan', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Cook the **Spaghetti** according to package instructions.' },
	  { order: 2, description: 'In a pan, cook the **Ground Beef** with **Garlic**.' },
	  { order: 3, description: 'Add the **Tomato Sauce** to the beef and simmer.' },
	  { order: 4, description: 'Mix the sauce with the cooked spaghetti.' },
	  { order: 5, description: 'Serve with grated **Parmesan** on top.' },
	], nutrition: {
	  calories: 450,
	  protein: 20,
	  fat: 15,
	  carbohydrates: 60,
	  fiber: 5,
	  sugar: 10,
	}},
	{ id: '2', name: 'Jollof Rice', imageUrl: jollofImage, mealType: 'lunch', ingredients: [
	  { name: 'Rice', imageUrl: ingredientImage },
	  { name: 'Tomato Paste', imageUrl: ingredientImage },
	  { name: 'Chicken', imageUrl: ingredientImage },
	  { name: 'Onions', imageUrl: ingredientImage },
	  { name: 'Peppers', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Cook the **Chicken** and set aside.' },
	  { order: 2, description: 'In a pot, sauté **Onions** and **Peppers**.' },
	  { order: 3, description: 'Add **Tomato Paste** and cook for a few minutes.' },
	  { order: 4, description: 'Add the **Rice** and water, then cook until done.' },
	  { order: 5, description: 'Mix in the cooked chicken and serve.' },
	], nutrition: {
	  calories: 500,
	  protein: 25,
	  fat: 20,
	  carbohydrates: 60,
	  fiber: 4,
	  sugar: 8,
	}},
	{ id: '3', name: 'Oatmeal', imageUrl: jollofImage, mealType: 'lunch', ingredients: [
	  { name: 'Oats', imageUrl: ingredientImage },
	  { name: 'Milk', imageUrl: ingredientImage },
	  { name: 'Honey', imageUrl: ingredientImage },
	  { name: 'Banana', imageUrl: ingredientImage },
	  { name: 'Berries', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Cook the **Oats** with **Milk**.' },
	  { order: 2, description: 'Add **Honey** for sweetness.' },
	  { order: 3, description: 'Top with sliced **Banana** and **Berries**.' },
	  { order: 4, description: 'Serve warm.' },
	], nutrition: {
	  calories: 300,
	  protein: 8,
	  fat: 5,
	  carbohydrates: 55,
	  fiber: 6,
	  sugar: 20,
	}},
	{ id: '4', name: 'Croissant', imageUrl: jollofImage, mealType: 'lunch', ingredients: [
	  { name: 'Flour', imageUrl: ingredientImage },
	  { name: 'Butter', imageUrl: ingredientImage },
	  { name: 'Yeast', imageUrl: ingredientImage },
	  { name: 'Milk', imageUrl: ingredientImage },
	  { name: 'Sugar', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Mix the **Flour**, **Yeast**, and **Sugar**.' },
	  { order: 2, description: 'Add the **Milk** and knead the dough.' },
	  { order: 3, description: 'Fold in the **Butter** and shape the croissants.' },
	  { order: 4, description: 'Bake until golden brown.' },
	  { order: 5, description: 'Serve warm.' },
	], nutrition: {
	  calories: 350,
	  protein: 6,
	  fat: 20,
	  carbohydrates: 35,
	  fiber: 2,
	  sugar: 10,
	}},
      ];
      
      export const dinnerRecipes: Recipe[] = [
	{ id: '1', name: 'Steak', imageUrl: jollofImage, mealType: 'dinner', ingredients: [
	  { name: 'Steak', imageUrl: ingredientImage },
	  { name: 'Salt', imageUrl: ingredientImage },
	  { name: 'Pepper', imageUrl: ingredientImage },
	  { name: 'Garlic', imageUrl: ingredientImage },
	  { name: 'Butter', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Season the **Steak** with **Salt** and **Pepper**.' },
	  { order: 2, description: 'Heat a pan and cook the steak to desired doneness.' },
	  { order: 3, description: 'Add **Garlic** and **Butter** to the pan.' },
	  { order: 4, description: 'Baste the steak with the butter mixture.' },
	  { order: 5, description: 'Let the steak rest before serving.' },
	], nutrition: {
	  calories: 600,
	  protein: 50,
	  fat: 40,
	  carbohydrates: 5,
	  fiber: 0,
	  sugar: 0,
	}},
	{ id: '2', name: 'Salmon', imageUrl: jollofImage, mealType: 'dinner', ingredients: [
	  { name: 'Salmon', imageUrl: ingredientImage },
	  { name: 'Lemon', imageUrl: ingredientImage },
	  { name: 'Dill', imageUrl: ingredientImage },
	  { name: 'Garlic', imageUrl: ingredientImage },
	  { name: 'Olive Oil', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Season the **Salmon** with **Salt** and **Pepper**.' },
	  { order: 2, description: 'Heat a pan and cook the salmon skin-side down.' },
	  { order: 3, description: 'Add **Garlic** and **Dill** to the pan.' },
	  { order: 4, description: 'Squeeze **Lemon** juice over the salmon.' },
	  { order: 5, description: 'Serve with a drizzle of **Olive Oil**.' },
	], nutrition: {
	  calories: 400,
	  protein: 35,
	  fat: 25,
	  carbohydrates: 5,
	  fiber: 1,
	  sugar: 0,
	}},
	{ id: '3', name: 'Pasta', imageUrl: jollofImage, mealType: 'dinner', ingredients: [
	  { name: 'Pasta', imageUrl: ingredientImage },
	  { name: 'Tomato Sauce', imageUrl: ingredientImage },
	  { name: 'Basil', imageUrl: ingredientImage },
	  { name: 'Parmesan', imageUrl: ingredientImage },
	  { name: 'Olive Oil', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Cook the **Pasta** according to package instructions.' },
	  { order: 2, description: 'In a pan, heat the **Tomato Sauce**.' },
	  { order: 3, description: 'Add the cooked pasta to the sauce.' },
	  { order: 4, description: 'Garnish with **Basil** and grated **Parmesan**.' },
	  { order: 5, description: 'Drizzle with **Olive Oil** before serving.' },
	], nutrition: {
	  calories: 500,
	  protein: 15,
	  fat: 20,
	  carbohydrates: 65,
	  fiber: 5,
	  sugar: 10,
	}},
	{ id: '4', name: 'Soup', imageUrl: jollofImage, mealType: 'dinner', ingredients: [
	  { name: 'Chicken', imageUrl: ingredientImage },
	  { name: 'Carrots', imageUrl: ingredientImage },
	  { name: 'Celery', imageUrl: ingredientImage },
	  { name: 'Onions', imageUrl: ingredientImage },
	  { name: 'Broth', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Cook the **Chicken** and set aside.' },
	  { order: 2, description: 'In a pot, sauté **Onions**, **Carrots**, and **Celery**.' },
	  { order: 3, description: 'Add the **Broth** and bring to a boil.' },
	  { order: 4, description: 'Add the cooked chicken and simmer.' },
	  { order: 5, description: 'Serve hot.' },
	], nutrition: {
	  calories: 300,
	  protein: 25,
	  fat: 10,
	  carbohydrates: 30,
	  fiber: 4,
	  sugar: 6,
	}},
      ];
      
      export const snackRecipes: Recipe[] = [
	{ id: '1', name: 'Chips', imageUrl: jollofImage, mealType: 'snack', ingredients: [
	  { name: 'Potatoes', imageUrl: ingredientImage },
	  { name: 'Salt', imageUrl: ingredientImage },
	  { name: 'Oil', imageUrl: ingredientImage },
	  { name: 'Pepper', imageUrl: ingredientImage },
	  { name: 'Paprika', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Slice the **Potatoes** thinly.' },
	  { order: 2, description: 'Heat the **Oil** in a pan.' },
	  { order: 3, description: 'Fry the potato slices until golden brown.' },
	  { order: 4, description: 'Season with **Salt**, **Pepper**, and **Paprika**.' },
	  { order: 5, description: 'Serve as a snack.' },
	], nutrition: {
	  calories: 300,
	  protein: 4,
	  fat: 20,
	  carbohydrates: 30,
	  fiber: 3,
	  sugar: 2,
	}},
	{ id: '2', name: 'Fruit Salad', imageUrl: jollofImage, mealType: 'snack', ingredients: [
	  { name: 'Apples', imageUrl: ingredientImage },
	  { name: 'Bananas', imageUrl: ingredientImage },
	  { name: 'Grapes', imageUrl: ingredientImage },
	  { name: 'Oranges', imageUrl: ingredientImage },
	  { name: 'Berries', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Chop the **Apples**, **Bananas**, and **Oranges**.' },
	  { order: 2, description: 'Mix the chopped fruits with **Grapes** and **Berries**.' },
	  { order: 3, description: 'Serve chilled.' },
	], nutrition: {
	  calories: 150,
	  protein: 2,
	  fat: 1,
	  carbohydrates: 35,
	  fiber: 5,
	  sugar: 25,
	}},
	{ id: '3', name: 'Yogurt', imageUrl: jollofImage, mealType: 'snack', ingredients: [
	  { name: 'Yogurt', imageUrl: ingredientImage },
	  { name: 'Honey', imageUrl: ingredientImage },
	  { name: 'Granola', imageUrl: ingredientImage },
	  { name: 'Berries', imageUrl: ingredientImage },
	  { name: 'Nuts', imageUrl: ingredientImage },
	], steps: [
	  { order: 1, description: 'Add **Yogurt** to a bowl.' },
	  { order: 2, description: 'Top with **Honey**, **Granola**, **Berries**, and **Nuts**.' },
	  { order: 3, description: 'Serve immediately.' },
	], nutrition: {
	  calories: 250,
	  protein: 8,
	  fat: 10,
	  carbohydrates: 30,
	  fiber: 4,
	  sugar: 20,
	}},
	{ id: '4', name: 'Granola Bar', imageUrl: jollofImage, mealType: 'snack', ingredients: [
	  { name: 'Oats', imageUrl: ingredientImage },
	  { name: 'Honey', imageUrl: ingredientImage },
	  { name: 'Nuts', imageUrl: ingredientImage },
	  { name: 'Dried Fruit', imageUrl: ingredientImage },
	  { name: 'Dried fruit', imageUrl: ingredientImage },
	  ], steps: [
		{ order: 1, description: 'Combine **Oats**, **Honey**, and **Nuts** in a bowl.' },
                { order: 2, description: 'Add dried fruit, such as blueberries, raspberries, or strawberries.' },
                { order: 3, description: 'Fold the dried fruit into the granola.' },
		{ order: 4, description: 'Serve immediately.' },
      ],
      nutrition: {
	calories: 300,
	protein: 5,
	fat: 10,
        carbohydrates: 30,
        fiber: 4,
        sugar: 2,
      }},
      { id: '5', name: 'Smoothie', imageUrl: jollofImage, mealType: 'snack', ingredients: [
	{ name: 'Banana', imageUrl: ingredientImage },
	{ name: 'Yogurt', imageUrl: ingredientImage },
	{ name: 'Honey', imageUrl: ingredientImage },
	{ name: 'Spinach', imageUrl: ingredientImage },
	{ name: 'Milk', imageUrl: ingredientImage },
	{ name: 'Ice', imageUrl: ingredientImage },
	{ name: 'Strawberry', imageUrl: ingredientImage },
	{ name: 'Blueberry', imageUrl: ingredientImage },
	{ name: 'Raspberry', imageUrl: ingredientImage },
	{ name: 'Pineapple', imageUrl: ingredientImage },
	{ name: 'Grapefruit', imageUrl: ingredientImage },
	{ name: 'Lemon', imageUrl: ingredientImage },
	{ name: 'Orange', imageUrl: ingredientImage },
	{ name: 'Papaya', imageUrl: ingredientImage },
	{ name: 'Avocado', imageUrl: ingredientImage },
	{ name: 'Coconut', imageUrl: ingredientImage },
	{ name: 'Almond milk', imageUrl: ingredientImage },
	{ name: 'Flour', imageUrl: ingredientImage },
	{ name: 'Baking powder', imageUrl: ingredientImage },
	{ name: 'Sugar', imageUrl: ingredientImage },
	{ name: 'Eggs', imageUrl: ingredientImage },
      ], steps: [
	{ order: 1, description: 'Combine **Banana**, **Yogurt**, **Honey**, **Spinach**, **Milk**, and **Ice** in a blender.' },
	{ order: 2, description: 'Add **Strawberry**, **Blueberry**, **Raspberry**, **Pineapple**, **Grapefruit**, **Lemon**, **Orange**, **Papaya**, **Avocado**, **Coconut**, **Almond milk**, **Flour**, **Baking powder**, **Sugar**, and **Eggs**.' },
	{ order: 3, description: 'Blend the smoothie until smooth and creamy.' },
      ], nutrition: {
	calories: 250,
	protein: 6,
	fat: 5,
	carbohydrates: 45,
	fiber: 6,
	sugar: 20,
      }},
      ];