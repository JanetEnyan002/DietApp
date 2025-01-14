import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { ArrowLeft } from 'lucide-react-native';

type RecipeDetailScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetail'>;
type RecipeDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecipeDetail'>;

type Props = {
  route: RecipeDetailScreenRouteProp;
  navigation: RecipeDetailScreenNavigationProp;
};

const IngredientItem = ({ name }: { name: string }) => (
  <View style={styles.ingredientItem}>
    <Image 
      source={{ uri: '/placeholder.svg?height=24&width=24' }}
      style={styles.ingredientIcon} 
    />
    <Text style={styles.ingredientText}>{name}</Text>
  </View>
);

const RecipeDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { recipe } = route.params;

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
          source={{ uri: recipe.image || '/placeholder.svg?height=120&width=120' }}
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
          onPress={() => {}}
          style={styles.actionButton}
          labelStyle={styles.actionButtonLabel}
        >
          Meal Plan
        </Button>
      </View>

      <View style={styles.ingredientsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <Text style={styles.viewMore}>View more</Text>
        </View>

        {Array(5).fill('Brown Rice').map((ingredient, index) => (
          <IngredientItem key={index} name={ingredient} />
        ))}
      </View>
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
});

export default RecipeDetailScreen;

