import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert, Modal } from 'react-native';
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
  onSelect: (id: string, mealType: string) => void;
  onViewDetails: (recipe: Recipe) => void;
  onDelete: (id: string, mealType: string) => void;
  selected: boolean;
  anySelected: boolean;
}

interface Recipe {
  id: string;
  name: string;
  imageUrl: any;
  mealType: string;
}

const MealItem: React.FC<MealItemProps> = ({ recipe, onSelect, onViewDetails, onDelete, selected, anySelected }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleDelete = () => {
    onDelete(recipe.id, recipe.mealType);
    setDeleteModalVisible(false);
  };

  return (
    <View style={styles.mealItem}>
      <Checkbox.Android
        status={selected ? "checked" : "unchecked"}
        color="#006400"
        uncheckedColor="#666"
        onPress={() => onSelect(recipe.id, recipe.mealType)}
      />
      <Image source={recipe.imageUrl} style={styles.mealImage} />
      <Text style={styles.mealName}>{recipe.name}</Text>
      {!selected && !anySelected && (
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <TouchableOpacity onPress={() => setMenuVisible(true)}>
              <Feather name="more-vertical" size={24} color="#666" />
            </TouchableOpacity>
          }
        >
          <Menu.Item onPress={() => { setMenuVisible(false); onViewDetails(recipe); }} title="View Details" />
          <Menu.Item onPress={() => { setMenuVisible(false); onSelect(recipe.id, recipe.mealType); }} title="Select" />
          <Divider />
          <Menu.Item onPress={() => { setMenuVisible(false); setDeleteModalVisible(true); }} title="Delete" />
        </Menu>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPressOut={() => setDeleteModalVisible(false)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Deletion</Text>
            <Text style={styles.modalMessage}>Are you sure you want to delete this meal?</Text>
            <View style={styles.modalButtonContainer}>
              <Button mode="contained" onPress={handleDelete} style={styles.modalButton} labelStyle={styles.modalButtonLabel}>
                Delete
              </Button>
              <Button mode="outlined" onPress={() => setDeleteModalVisible(false)} style={styles.modalButton2} labelStyle={styles.modalButtonLabel2}>
                Cancel
              </Button>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default function MealPlannerScreen({ navigation }: Props) {
  const [plannedMeals, setPlannedMeals] = useState<Recipe[]>([]);
  const [selectedMeals, setSelectedMeals] = useState<{ id: string, mealType: string }[]>([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

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

  const handleSelectMeal = (id: string, mealType: string) => {
    setSelectedMeals(prev =>
      prev.some(meal => meal.id === id && meal.mealType === mealType)
        ? prev.filter(meal => !(meal.id === id && meal.mealType === mealType))
        : [...prev, { id, mealType }]
    );
  };

  const handleViewDetails = (recipe: Recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
  };

  const handleDeleteMeal = async (id: string, mealType: string) => {
    const updatedMeals = plannedMeals.filter(meal => !(meal.id === id && meal.mealType === mealType));
    setPlannedMeals(updatedMeals);
    await AsyncStorage.setItem('plannedMeals', JSON.stringify(updatedMeals));
  };

  const confirmDeleteMeal = async () => {
    const updatedMeals = plannedMeals.filter(meal => !selectedMeals.some(selected => selected.id === meal.id && selected.mealType === meal.mealType));
    setPlannedMeals(updatedMeals);
    setSelectedMeals([]);
    await AsyncStorage.setItem('plannedMeals', JSON.stringify(updatedMeals));
    setDeleteModalVisible(false);
  };

  const groupedMeals = plannedMeals.reduce((acc, meal) => {
    if (!acc[meal.mealType]) {
      acc[meal.mealType] = [];
    }
    acc[meal.mealType].push(meal);
    return acc;
  }, {} as Record<string, Recipe[]>);

  const anySelected = selectedMeals.length > 0;

  return (
    <View style={styles.container}>
      {anySelected && (
        <Button
          mode="contained"
          onPress={() => setDeleteModalVisible(true)}
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
                key={`${recipe.id}-${recipe.mealType}`}
                recipe={recipe}
                onSelect={handleSelectMeal}
                onViewDetails={handleViewDetails}
                onDelete={handleDeleteMeal}
                selected={selectedMeals.some(meal => meal.id === recipe.id && meal.mealType === recipe.mealType)}
                anySelected={anySelected}
              />
            ))}
          </View>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPressOut={() => setDeleteModalVisible(false)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Deletion</Text>
            <Text style={styles.modalMessage}>Are you sure you want to delete the selected meals?</Text>
            <View style={styles.modalButtonContainer}>
              <Button mode="contained" onPress={confirmDeleteMeal} style={styles.modalButton} labelStyle={styles.modalButtonLabel}>
                Delete
              </Button>
              <Button mode="outlined" onPress={() => setDeleteModalVisible(false)} style={styles.modalButton2} labelStyle={styles.modalButtonLabel2}>
                Cancel
              </Button>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  modalMessage: {
    fontSize: 16,
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#006400',
  },
  modalButton2: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: 'white',
  },
  modalButtonLabel: {
    color: '#fff', // White text color
    fontSize: 14,
  },
  modalButtonLabel2: {
    color: '#006400', // Green text color
    fontSize: 14,
  },
});