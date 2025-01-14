import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type MealPlanScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MealPlan'>;

type Props = {
  navigation: MealPlanScreenNavigationProp;
};

export default function MealPlanScreen({ navigation }: Props) {
  const [planName, setPlanName] = useState('');
  const [mealType, setMealType] = useState('breakfast');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === 'ios');
    setTime(currentTime);
  };

  const RadioOption = ({ label, selected, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.radioOption}>
      <View style={[styles.radioCircle, selected && styles.radioCircleSelected]}>
        {selected && <View style={styles.radioInnerCircle} />}
      </View>
      <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
  );

  const handleContinue = () => {
    switch (mealType) {
      case 'breakfast':
        navigation.navigate('BreakfastRecipes');
        break;
      case 'lunch':
        navigation.navigate('LunchRecipes');
        break;
      case 'snack':
        navigation.navigate('SnackRecipes');
        break;
      case 'dinner':
        navigation.navigate('DinnerRecipes');
        break;
      default:
        navigation.navigate('RecipeList');
        break;
    }
  };

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
        <View style={styles.radioGroup}>
          {['breakfast', 'lunch', 'snack', 'dinner'].map((type) => (
            <RadioOption
              key={type}
              label={type.charAt(0).toUpperCase() + type.slice(1)}
              selected={mealType === type}
              onPress={() => setMealType(type)}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
        <Text style={styles.inputText}>{date.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.input}>
        <Text style={styles.inputText}>{time.toLocaleTimeString()}</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={onChangeTime}
        />
      )}

      <Button
        mode="contained"
        onPress={handleContinue}
        style={styles.button}
        contentStyle={styles.buttonContent}
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
    fontWeight: '600',
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#000',
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: '#000',
    marginBottom: 16,
  },
  typeContainer: {
    marginBottom: 24,
  },
  radioGroup: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 4,
  },
  radioOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#666',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioCircleSelected: {
    borderColor: '#006400',
  },
  radioInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#006400',
  },
  radioLabel: {
    fontSize: 14,
    color: '#000',
    textTransform: 'capitalize',
  },
  inputText: {
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#006400',
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});