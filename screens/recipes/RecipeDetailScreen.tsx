import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type RecipeDetailScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetail'>;
type RecipeDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecipeDetail'>;

type Props = {
  route: RecipeDetailScreenRouteProp;
  navigation: RecipeDetailScreenNavigationProp;
};

const RecipeDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { recipe } = route.params;

  return (
    <View>
      <Text>Recipe Detail Screen</Text>
      <Text>{recipe.name}</Text>
    </View>
  );
};

export default RecipeDetailScreen;