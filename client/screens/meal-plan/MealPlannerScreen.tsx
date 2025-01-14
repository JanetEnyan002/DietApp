import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { Checkbox, Button, Menu, Divider } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';

type MealPlannerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MealPlanner'>;

interface Props {
  navigation: MealPlannerScreenNavigationProp;
}

interface MealItemProps {
  recipe: Recipe;
  onSelect: (id: string) => void;
  onViewDetails: (recipe: Recipe) => void;
  onDelete: (id: string) => void;
  selected: boolean;
}

interface Recipe {
  id: string;
  name: string;
  imageUrl: any;
  mealType: string;
}

const MealItem: React.FC<MealItemProps> = ({ recipe, onSelect, onViewDetails, onDelete, selected }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.mealItem}>
      <Checkbox.Android
        status={selected ? "checked" : "unchecked"}
        color="#006400"
        uncheckedColor="#666"
        onPress={() => onSelect(recipe.id)}
      />
      <Image source={recipe.imageUrl} style={styles.mealImage} />
      <Text style={styles.mealName}>{recipe.name}</Text>
      {!selected && (
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <TouchableOpacity onPress={() => setMenuVisible(true)}>
              <Feather name="more-vertical" size={24} color="#666" />
            </TouchableOpacity>
          }
        >
          <Menu.Item onPress={() => onViewDetails(recipe)} title="View Details" />
          <Menu.Item onPress={() => onSelect(recipe.id)} title="Select" />
          <Divider />
          <Menu.Item onPress={() => onDelete(recipe.id)} title="Delete" />
        </Menu>
      )}
    </View>
  );
};

export default function MealPlannerScreen({ navigation }: Props) {
  const [plannedMeals, setPlannedMeals] = useState<Recipe[]>([]);
  const [selectedMeals, setSelectedMeals] = useState<string[]>([]);

  useEffect(() => {
    const fetchPlannedMeals = async () => {
      try {
        const storedPlannedMeals = await AsyncStorage.getItem('plannedMeals');
        if (storedPlannedMeals) {
          setPlannedMeals(JSON.parse(storedPlannedMeals));
        }
      } catch (error) {
        console.error('Error fetching planned meals:', error);
      }
    };

    fetchPlannedMeals();
  }, []);

  const handleSelectMeal = (id: string) => {
    setSelectedMeals(prev =>
      prev.includes(id) ? prev.filter(mealId => mealId !== id) : [...prev, id]
    );
  };

  const handleViewDetails = (recipe: Recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
  };

  const handleDeleteMeal = async (id: string) => {
    const updatedMeals = plannedMeals.filter(meal => meal.id !== id);
    setPlannedMeals(updatedMeals);
    await AsyncStorage.setItem('plannedMeals', JSON.stringify(updatedMeals));
  };

  const handleDeleteSelectedMeals = async () => {
    const updatedMeals = plannedMeals.filter(meal => !selectedMeals.includes(meal.id));
    setPlannedMeals(updatedMeals);
    setSelectedMeals([]);
    await AsyncStorage.setItem('plannedMeals', JSON.stringify(updatedMeals));
  };

  const groupedMeals = plannedMeals.reduce((acc, meal) => {
    if (!acc[meal.mealType]) {
      acc[meal.mealType] = [];
    }
    acc[meal.mealType].push(meal);
    return acc;
  }, {} as Record<string, Recipe[]>);

  return (
    <View style={styles.container}>
      {selectedMeals.length > 0 && (
        <Button
          mode="contained"
          onPress={handleDeleteSelectedMeals}
          style={styles.deleteButton}
        >
          Delete Selected
        </Button>
      )}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Planned Meals</Text>
        {Object.entries(groupedMeals).map(([mealType, meals]) => (
          <View key={mealType}>
            <Text style={styles.mealTypeTitle}>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</Text>
            {meals.map((recipe) => (
              <MealItem
                key={recipe.id}
                recipe={recipe}
                onSelect={handleSelectMeal}
                onViewDetails={handleViewDetails}
                onDelete={handleDeleteMeal}
                selected={selectedMeals.includes(recipe.id)}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 32,
  },
  mealTypeTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#006400',
    marginBottom: 16,
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  mealImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F0F0F0',
    marginRight: 16,
  },
  mealName: {
    fontSize: 18,
    color: '#000',
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#006400',
    marginBottom: 16,
  },
});