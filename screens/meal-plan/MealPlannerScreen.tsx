import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type MealPlannerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MealPlanner'>;

interface Props {
  navigation: MealPlannerScreenNavigationProp;
}

interface MealItemProps {
  image: string;
}

const MealItem: React.FC<MealItemProps> = ({ image }) => (
  <View style={styles.mealItem}>
    <Checkbox status="unchecked" />
    <Image source={{ uri: image }} style={styles.mealImage} />
  </View>
);

export default function MealPlannerScreen({ navigation }: Props) {
  const meals = {
    Breakfast: ['/placeholder.svg', '/placeholder.svg'],
    Snack: ['/placeholder.svg', '/placeholder.svg'],
    Lunch: ['/placeholder.svg', '/placeholder.svg'],
    Dinner: ['/placeholder.svg', '/placeholder.svg'],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Planner</Text>
      {Object.entries(meals).map(([mealType, images]) => (
        <View key={mealType} style={styles.mealTypeContainer}>
          <Text style={styles.mealTypeTitle}>{mealType}</Text>
          {images.map((image, index) => (
            <MealItem key={index} image={image} />
          ))}
        </View>
      ))}
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RecipeList')}
        style={styles.button}
      >
        Continue
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  mealTypeContainer: {
    marginBottom: 24,
  },
  mealTypeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  mealImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 12,
  },
  button: {
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: '#006400',
  },
});