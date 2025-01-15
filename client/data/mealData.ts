


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
      const pancake = require('../assets/meals/pancake.jpg')
      const omelette = require('../assets/meals/omelette.png')
      const smoothie = require('../assets/meals/smoothie.jpg')
      const toast = require('../assets/meals/toast.png')
      const croissant = require('../assets/meals/croissant.png')
      const spagetti = require('../assets/meals/spagetti.png')
      const jollof = require('../assets/meals/jollof.png')
      const oatmeal = require('../assets/meals/oatmeal.png')
      const chips = require('../assets/meals/chips.jpg')
      const salad = require('../assets/meals/salad.jpg')
      const yogurt = require('../assets/meals/yogurt.jpg')
      const granola = require('../assets/meals/granola.png')
      const steak = require('../assets/meals/steak.jpg')
      const salmon = require('../assets/meals/salmon.jpg')
      const pasta = require('../assets/meals/pasta.webp')
      const soup = require('../assets/meals/soup.jpg')


      //ingredients 
      //list ingredients for 
const  eggs = require('../assets/ingredients/eggs.png')
const flour =require('../assets/ingredients/flour.jpg')
const milk = require('../assets/ingredients/milk.jpg')
const butter = require('../assets/ingredients/butter.jpg')
const cheese = require('../assets/ingredients/cheese.jpg')
const sugar = require('../assets/ingredients/sugar.jpg')
const pepper = require ('../assets/ingredients/peppers.jpg')
const onion = require('../assets/ingredients/onion.jpg')
const salt = require('../assets/ingredients/salt.jpg')
const banana = require('../assets/ingredients/banana.jpg')
const strawberries = require('../assets/ingredients/strawberries.jpg')
const honey = require('../assets/ingredients/honey.jpg')
const ice = require('../assets/ingredients/ice.jpg')
const bread = require('../assets/ingredients/bread.jpg')
const jam = require('../assets/ingredients/jam.jpg')
const peanut = require('../assets/ingredients/peanutButter.jpg')
const paste = require('../assets/ingredients/paste.jpg')
const beef = require('../assets/ingredients/beef.jpg')
const garlic = require('../assets/ingredients/garlic.jpg')
const parmesan = require('../assets/ingredients/parmesan.jpg')
const rice = require('../assets/ingredients/rice.jpg')
const chicken = require('../assets/ingredients/chicken.jpg')
const berries = require('../assets/ingredients/berries.jpg')
const oats = require('../assets/ingredients/oats.jpg')
const yeast = require('../assets/ingredients/yeast.jpg')
const lemon = require('../assets/ingredients/lemon.jpg')
const dill = require('../assets/ingredients/dill.jpg')
const olive = require('../assets/ingredients/oliveoil.jpg')
const basil = require('../assets/ingredients/basil.jpg')
const carrot = require('../assets/ingredients/carrots.jpg')
const celery = require('../assets/ingredients/celery.jpg')
const broth = require('../assets/ingredients/broth.jpg')
const paprika = require('../assets/ingredients/paprika.jpg')
const potatoes = require('../assets/ingredients/potatoes.jpg')
const apples = require('../assets/ingredients/apples.jpg')
const grapes = require('../assets/ingredients/grapes.jpg')
const oranges = require('../assets/ingredients/oranges.jpg')
const nuts = require('../assets/ingredients/nuts.jpg')
const driedfruit = require('../assets/ingredients/driedfruit.jpg')
const chipps = require('../assets/ingredients/chips.jpg')
















      
      export const breakfastRecipes: Recipe[] = [
	{ id: '1', name: 'Pancakes', imageUrl: pancake, mealType: 'breakfast', ingredients: [
	  { name: 'Flour', imageUrl: flour },
	  { name: 'Eggs', imageUrl: eggs },
	  { name: 'Milk', imageUrl: milk },
	  { name: 'Sugar', imageUrl: sugar },
	  { name: 'Butter', imageUrl: butter },
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
	{ id: '2', name: 'Omelette', imageUrl: omelette, mealType: 'breakfast', ingredients: [
	  { name: 'Eggs', imageUrl: eggs },
	  { name: 'Cheese', imageUrl: cheese },
	  { name: 'Bell Peppers', imageUrl: pepper },
	  { name: 'Onions', imageUrl: onion },
	  { name: 'Salt', imageUrl: salt },
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
	{ id: '3', name: 'Smoothie', imageUrl: smoothie, mealType: 'breakfast', ingredients: [
	  { name: 'Banana', imageUrl: ingredientImage },
	  { name: 'Strawberries', imageUrl: strawberries },
	  { name: 'Yogurt', imageUrl: yogurt },
	  { name: 'Honey', imageUrl: honey },
	  { name: 'Ice', imageUrl: ice },
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
	{ id: '4', name: 'Toast', imageUrl: toast, mealType: 'breakfast', ingredients: [
	  { name: 'Bread', imageUrl: bread },
	  { name: 'Butter', imageUrl: butter },
	  { name: 'Jam', imageUrl: jam },
	  { name: 'Peanut Butter', imageUrl: peanut },
	  { name: 'Honey', imageUrl: honey },
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
	{ id: '5', name: 'Spaghetti', imageUrl: spagetti, mealType: 'lunch', ingredients: [
	  { name: 'Spaghetti', imageUrl: spagetti },
	  { name: 'Tomato Sauce', imageUrl: paste },
	  { name: 'Ground Beef', imageUrl: beef },
	  { name: 'Garlic', imageUrl: garlic },
	  { name: 'Parmesan', imageUrl: parmesan },
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
	{ id: '6', name: 'Jollof Rice', imageUrl: jollof, mealType: 'lunch', ingredients: [
	  { name: 'Rice', imageUrl: rice },
	  { name: 'Tomato Paste', imageUrl: paste },
	  { name: 'Chicken', imageUrl: chicken },
	  { name: 'Onions', imageUrl: onion },
	  { name: 'Peppers', imageUrl: pepper },
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
	{ id: '7', name: 'Oatmeal', imageUrl: oatmeal, mealType: 'lunch', ingredients: [
	  { name: 'Oats', imageUrl: oats },
	  { name: 'Milk', imageUrl: milk },
	  { name: 'Honey', imageUrl: honey },
	  { name: 'Banana', imageUrl: banana },
	  { name: 'Berries', imageUrl: berries },
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
	{ id: '8', name: 'Croissant', imageUrl: croissant, mealType: 'lunch', ingredients: [
	  { name: 'Flour', imageUrl: flour },
	  { name: 'Butter', imageUrl: butter },
	  { name: 'Yeast', imageUrl: yeast },
	  { name: 'Milk', imageUrl: milk },
	  { name: 'Sugar', imageUrl: sugar },
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
	{ id: '9', name: 'Steak', imageUrl: steak, mealType: 'dinner', ingredients: [
	  { name: 'Steak', imageUrl: steak },
	  { name: 'Salt', imageUrl: salt },
	  { name: 'Pepper', imageUrl: pepper },
	  { name: 'Garlic', imageUrl: garlic },
	  { name: 'Butter', imageUrl: butter },
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
	{ id: '10', name: 'Salmon', imageUrl: salmon, mealType: 'dinner', ingredients: [
	  { name: 'Salmon', imageUrl: salmon },
	  { name: 'Lemon', imageUrl: lemon },
	  { name: 'Dill', imageUrl: dill },
	  { name: 'Garlic', imageUrl: garlic},
	  { name: 'Olive Oil', imageUrl: olive},
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
	{ id: '11', name: 'Pasta', imageUrl: pasta, mealType: 'dinner', ingredients: [
	  { name: 'Pasta', imageUrl: pasta },
	  { name: 'Tomato Sauce', imageUrl: paste },
	  { name: 'Basil', imageUrl: basil },
	  { name: 'Parmesan', imageUrl: parmesan },
	  { name: 'Olive Oil', imageUrl: olive },
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
	{ id: '12', name: 'Soup', imageUrl: soup, mealType: 'dinner', ingredients: [
	  { name: 'Chicken', imageUrl: chicken },
	  { name: 'Carrots', imageUrl: carrot },
	  { name: 'Celery', imageUrl: celery },
	  { name: 'Onions', imageUrl: onion },
	  { name: 'Broth', imageUrl: broth },
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
	{ id: '13', name: 'Chips', imageUrl: chipps, mealType: 'snack', ingredients: [
	  { name: 'Potatoes', imageUrl: potatoes },
	  { name: 'Salt', imageUrl: salt },
	  { name: 'Oil', imageUrl: olive },
	  { name: 'Pepper', imageUrl: pepper },
	  { name: 'Paprika', imageUrl: paprika },
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
	{ id: '14', name: 'Fruit Salad', imageUrl:salad, mealType: 'snack', ingredients: [
	  { name: 'Apples', imageUrl: apples },
	  { name: 'Bananas', imageUrl: banana },
	  { name: 'Grapes', imageUrl: grapes },
	  { name: 'Oranges', imageUrl:oranges },
	  { name: 'Berries', imageUrl: berries },
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
	{ id: '15', name: 'Yogurt', imageUrl: yogurt, mealType: 'snack', ingredients: [
	  { name: 'Yogurt', imageUrl: yogurt },
	  { name: 'Honey', imageUrl: honey },
	  { name: 'Granola', imageUrl: granola },
	  { name: 'Berries', imageUrl: berries },
	  { name: 'Nuts', imageUrl: nuts },
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
	{ id: '16', name: 'Granola Bar', imageUrl: granola, mealType: 'snack', ingredients: [
	  { name: 'Oats', imageUrl: oats },
	  { name: 'Honey', imageUrl: honey },
	  { name: 'Nuts', imageUrl: nuts },
	  { name: 'Dried Fruit', imageUrl: driedfruit },
	  { name: 'Dried fruit', imageUrl: driedfruit },
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
      { id: '17', name: 'Smoothie', imageUrl: smoothie, mealType: 'snack', ingredients: [
	{ name: 'Banana', imageUrl: banana },
	{ name: 'Yogurt', imageUrl:yogurt },
	{ name: 'Honey', imageUrl: honey },
	{ name: 'Milk', imageUrl: milk },
	{ name: 'Ice', imageUrl: ice },
	{ name: 'Strawberry', imageUrl: ingredientImage },
		{ name: 'Almond milk', imageUrl: milk},
	{ name: 'Flour', imageUrl: flour },
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