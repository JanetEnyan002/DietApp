import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import one from '../../assets/'





type MealPlannerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MealPlanner'>;

interface Props {
  navigation: MealPlannerScreenNavigationProp;
}

interface MealItemProps {
  image: string;
}

const MealItem: React.FC<MealItemProps> = ({ image }) => (
  <View style={styles.mealItem}>
    <Checkbox.Android
      status="unchecked"
      color="#006400"
      uncheckedColor="#666"
    />
    <Image source={{ uri: image }} style={styles.mealImage} />
  </View>
);

export default function MealPlannerScreen({ navigation }: Props) {
  const meals = {
    Breakfast: [
      'https://v0.blob.com/snack1.jpg',
      'https://v0.blob.com/snack2.jpg'
    ],
    Snack: [
      'https://v0.blob.com/snack1.jpg',
      'https://v0.blob.com/snack2.jpg'
    ],
    Lunch: [
      'https://v0.blob.com/lunch1.jpg',
      'https://v0.blob.com/lunch2.jpg'
    ],
    Dinner: [
      'https://v0.blob.com/dinner1.jpg',
      'https://v0.blob.com/dinner2.jpg'
    ],
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Planner</Text>
      
      {Object.entries(meals).map(([mealType, images]) => (
        <View key={mealType} style={styles.mealTypeContainer}>
          <Text style={styles.mealTypeTitle}>{mealType}</Text>
          <View style={styles.mealItemsContainer}>
            {images.map((image, index) => (
              <MealItem key={index} image={image} />
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 32,
  },
  mealTypeContainer: {
    marginBottom: 32,
  },
  mealTypeTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  mealItemsContainer: {
    gap: 16,
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  mealImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F0F0F0',
  },
});

