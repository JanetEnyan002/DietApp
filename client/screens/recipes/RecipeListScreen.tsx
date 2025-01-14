import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type RecipeListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecipeList'>;

interface Recipe {
  id: string;
  name: string;
  image: string;
}

interface RecipeCardProps {
  recipe: Recipe;
  onPress: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onPress }) => (
  <View style={styles.recipeCard}>
    <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
    <Text style={styles.recipeName}>{recipe.name}</Text>
    <Button mode="outlined" onPress={onPress} style={styles.addButton}>
      ADD
    </Button>
  </View>
);

type Props = {
  navigation: RecipeListScreenNavigationProp;
};

export default function RecipeListScreen({ navigation }: Props) {
  const [searchQuery, setSearchQuery] = useState('');

  const recipes: Recipe[] = [
    { id: '1', name: 'Spagetic', image: 'https://placeholder.com/recipe1' },
    { id: '2', name: 'Jollof rice', image: 'https://placeholder.com/recipe2' },
    { id: '3', name: 'Oatmeal', image: 'https://placeholder.com/recipe3' },
    { id: '4', name: 'Prassant', image: 'https://placeholder.com/recipe4' },
  ];

  const handleRecipePress = (recipe: Recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
  };

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

      <ScrollView style={styles.recipesContainer}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onPress={() => handleRecipePress(recipe)}
          />
        ))}
      </ScrollView>
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
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  addButton: {
    marginTop: 8,
  },
});