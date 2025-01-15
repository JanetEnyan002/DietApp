import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { dinnerRecipes, Recipe } from '../../data/mealData';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RecipeListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DinnerRecipes'>;

interface RecipeCardProps {
  recipe: Recipe;
  onPress: () => void;
  onAdd: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onPress, onAdd }) => (
  <TouchableOpacity onPress={onPress} style={styles.recipeCard}>
    <Image source={recipe.imageUrl} style={styles.recipeImage} />
    <Text style={styles.recipeName}>{recipe.name}</Text>
    <Button mode="outlined" onPress={(e) => { e.stopPropagation(); onAdd(); }} style={styles.addButton}>
      ADD
    </Button>
  </TouchableOpacity>
);

type Props = {
  navigation: RecipeListScreenNavigationProp;
};

export default function RecipeListScreen({ navigation }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const storedRecipes = await AsyncStorage.getItem('recipes');
        if (storedRecipes) {
          setRecipes(JSON.parse(storedRecipes).filter((recipe: Recipe) => recipe.mealType === 'dinner'));
        } else {
          setRecipes(dinnerRecipes);
          await AsyncStorage.setItem('recipes', JSON.stringify(dinnerRecipes));
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipePress = (recipe: Recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
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
        <View style={styles.recipeRow}>
          {filteredRecipes.map((recipe) => (
            <View key={recipe.id} style={styles.recipeWrapper}>
              <RecipeCard
                recipe={recipe}
                onPress={() => handleRecipePress(recipe)}
                onAdd={() => handleAddRecipe(recipe)}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('MealPlanner')}
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
  recipeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  recipeWrapper: {
    width: '48%',
    marginBottom: 16,
  },
  recipeCard: {
    backgroundColor: '#006400',
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
    color: '#fff',
  },
  addButton: {
    marginTop: 8,
    borderColor: '#fff',
    color: '#fff',
  },
  viewPlannedMealsButton: {
    margin: 16,
    backgroundColor: '#006400',
    color: '#fff',
  },
});