import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/onBoarding/WelcomeScreen";
import Screen2 from "./screens/onBoarding/Screen2";
import Screen3 from "./screens/onBoarding/Screen3";
import Screen4 from "./screens/onBoarding/Screen4";
import RecipeListScreen from "./screens/recipes/RecipeListScreen";
import RecipeDetailScreen from "./screens/recipes/RecipeDetailScreen";
import MealPlannerScreen from "./screens/meal-plan/MealPlannerScreen";
import MealPlanScreen from "./screens/meal-plan/MealPlanScreen";
import HealthPreferencesScreen from "./screens/health/HealthPreferencesScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Breakfast" component={Screen2} />
        <Stack.Screen name="JunkFood" component={Screen3} />
        <Stack.Screen name="OnTime" component={Screen4} />
        <Stack.Screen name="RecipeList" component={RecipeListScreen} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
        <Stack.Screen name="MealPlanner" component={MealPlannerScreen} />
        <Stack.Screen name="MealPlan" component={MealPlanScreen} />
        <Stack.Screen name="HealthPreferences" component={HealthPreferencesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}