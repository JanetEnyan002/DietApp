import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, Modal, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { ArrowLeft } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RecipeDetailScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetail'>;
type RecipeDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecipeDetail'>;

type Props = {
  route: RecipeDetailScreenRouteProp;
  navigation: RecipeDetailScreenNavigationProp;
};

const IngredientItem = ({ name, imageUrl }: { name: string, imageUrl: number }) => (
  <View style={styles.ingredientItem}>
    <Image 
      source={imageUrl}
      style={styles.ingredientIcon} 
    />
    <Text style={styles.ingredientText}>{name}</Text>
  </View>
);

const RecipeDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { recipe } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const handlePlanMeal = async () => {
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
      navigation.navigate('MealPlanner');
    } catch (error) {
      console.error('Error saving planned meal:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable 
        onPress={() => navigation.goBack()} 
        style={styles.backButton}
      >
        <ArrowLeft size={24} color="#006400" />
      </Pressable>

      <View style={styles.imageContainer}>
        <Image
          source={recipe.imageUrl}
          style={styles.image}
        />
      </View>

      <Text style={styles.title}>{recipe.name}</Text>

      <View style={styles.buttonContainer}>
        <Button
          mode="outlined"
          onPress={() => {}}
          style={styles.actionButton}
          labelStyle={styles.actionButtonLabel}
        >
          Nutrition Info
        </Button>
        <Button
          mode="outlined"
          onPress={handlePlanMeal}
          style={styles.actionButton}
          labelStyle={styles.actionButtonLabel}
        >
          Plan Meal
        </Button>
      </View>

      <View style={styles.ingredientsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <Text style={styles.viewMore} onPress={() => setModalVisible(true)}>View more</Text>
        </View>
        {recipe.ingredients.map((ingredient, index) => (
          <IngredientItem 
            key={index} 
            name={ingredient.name} 
            imageUrl={ingredient.imageUrl} 
          />
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Preparation Steps</Text>
            <ScrollView style={styles.stepsContainer}>
              {recipe.steps?.map((step, index) => (
                <View key={index} style={styles.stepItem}>
                  <Text style={styles.stepOrder}>Step {step.order}</Text>
                  <Text style={styles.stepDescription}>{step.description}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.modalButtonContainer}>
              <Button
                mode="contained"
                onPress={handlePlanMeal}
                style={styles.modalButton}
              >
                Plan Meal
              </Button>
              <Button
                mode="outlined"
                onPress={() => setModalVisible(false)}
                style={styles.modalButton}
              >
                Done
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 48,
    marginBottom: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  actionButton: {
    flex: 1,
    borderColor: '#006400',
    borderRadius: 8,
  },
  actionButtonLabel: {
    color: '#006400',
    fontSize: 14,
  },
  ingredientsSection: {
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  viewMore: {
    color: '#006400',
    fontSize: 16,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  ingredientIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  ingredientText: {
    fontSize: 16,
    color: '#000',
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
  stepsContainer: {
    width: '100%',
    marginBottom: 16,
  },
  stepItem: {
    marginBottom: 16,
  },
  stepOrder: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 16,
    color: '#666',
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
});

export default RecipeDetailScreen;