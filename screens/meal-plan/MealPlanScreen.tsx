import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type MealPlanScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MealPlan'>;

type Props = {
  navigation: MealPlanScreenNavigationProp;
};

export default function MealPlanScreen({ navigation }: Props) {
  const [planName, setPlanName] = useState('');
  const [mealType, setMealType] = useState('breakfast');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Plan</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Plan name</Text>
        <TextInput
          style={styles.input}
          value={planName}
          onChangeText={setPlanName}
          placeholder="Enter plan name"
        />
      </View>

      <View style={styles.typeContainer}>
        <Text style={styles.label}>Type</Text>
        <RadioButton.Group onValueChange={value => setMealType(value)} value={mealType}>
          <View style={styles.radioGroup}>
            {['breakfast', 'lunch', 'snack', 'dinner'].map((type) => (
              <View key={type} style={styles.radioButton}>
                <RadioButton value={type} />
                <Text>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
              </View>
            ))}
          </View>
        </RadioButton.Group>
      </View>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('MealPlanner')}
        style={styles.button}
      >
        Continue
      </Button>
    </View>
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
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  typeContainer: {
    marginBottom: 24,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginTop: 'auto',
    backgroundColor: '#006400',
  },
});