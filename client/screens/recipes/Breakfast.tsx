import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Alert, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { breakfastRecipes, Recipe } from '../../data/mealData';
import AsyncStorage from '@react-native-async-storage/async-storage';

type BreakfastScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BreakfastRecipes'>;

interface RecipeCardProps {
  recipe: Recipe;
  onPress: () => void;
  onAddPress: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onPress, onAddPress }) => (
  <Pressable onPress={onPress} style={styles.recipeCard}>
    <Image 
      source={recipe.imageUrl} 
      style={styles.recipeImage}
      resizeMode="cover"
    />
    <Text style={styles.recipeName}>{recipe.name}</Text>
    <Button 
      mode="outlined" 
      onPress={(e) => {
        e.stopPropagation(); // Prevent triggering the card's onPress
        onAddPress();
      }} 
      style={styles.addButton}
    >
      ADD
    </Button>
  </Pressable>
);

type Props = {
  navigation: BreakfastScreenNavigationProp;
};

export default function BreakfastScreen({ navigation }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        setRecipes(breakfastRecipes);
        await AsyncStorage.setItem('breakfastRecipes', JSON.stringify(breakfastRecipes));
      } catch (error) {
        console.error('Error loading recipes:', error);
      }
    };
    loadRecipes();
  }, []);

  const handleRecipePress = (recipe: Recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
  };

  const handleViewPlannedMeals = () => {
    navigation.navigate('MealPlanner');
  };

  const handleAddRecipe = async (recipe: Recipe) => {
    try {
      const storedPlannedMeals = await AsyncStorage.getItem('plannedMeals');
      const plannedMeals = storedPlannedMeals ? JSON.parse(storedPlannedMeals) : [];
      const isDuplicate = plannedMeals.some((meal: Recipe) => meal.id === recipe.id);
    
      if (isDuplicate) {
        Alert.alert('Duplication Warning', 'This meal is already in your planned meals.');
        return;
      }
    
      plannedMeals.push(recipe);
      await AsyncStorage.setItem('plannedMeals', JSON.stringify(plannedMeals));
      Alert.alert('Success', 'Meal added to your planned meals.');
    } catch (error) {
      console.error('Error adding meal to planned meals:', error);
      Alert.alert('Error', 'Failed to add meal to planned meals.');
    }
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={24} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search recipes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <ScrollView contentContainerStyle={styles.recipesContainer}>
        {filteredRecipes.map((recipe) => (
          <View key={recipe.id} style={styles.recipeWrapper}>
            <RecipeCard
              recipe={recipe}
              onPress={() => handleRecipePress(recipe)}
              onAddPress={() => handleAddRecipe(recipe)}
            />
          </View>
        ))}
      </ScrollView>
      <Button
        mode="contained"
        onPress={handleViewPlannedMeals}
        style={styles.viewPlannedMealsButton}
      >
        View Planned Meals
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  recipesContainer: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  recipeWrapper: {
    width: '48%',
    marginBottom: 16,
  },
  recipeCard: {
    backgroundColor: '#e0f7e0',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  recipeImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#006400',
  },
  addButton: {
    marginTop: 8,
    borderColor: '#006400',
    color: '#006400',
  },
  viewPlannedMealsButton: {
    margin: 16,
    backgroundColor: '#006400',
  },
});