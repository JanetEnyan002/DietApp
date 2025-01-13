import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type HealthPreferencesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HealthPreferences'
>;

type Props = {
  navigation: HealthPreferencesScreenNavigationProp;
};

export default function HealthPreferencesScreen({ navigation }: Props) {
  const [healthIssues, setHealthIssues] = useState({
    gastritis: false,
    pepticUlcer: false,
    celiacDisease: false,
    bowelSyndrome: false,
    lactoseIntolerance: false,
  });

  const [dietaryPreferences, setDietaryPreferences] = useState({
    vegetarian: false,
    highProtein: false,
    highFibre: false,
    vegan: false,
    beef: false,
    pork: false,
    fish: false,
    poultry: false,
  });

  const handleHealthIssueChange = (issue: keyof typeof healthIssues) => {
    setHealthIssues(prev => ({ ...prev, [issue]: !prev[issue] }));
  };

  const handleDietaryPreferenceChange = (preference: keyof typeof dietaryPreferences) => {
    setDietaryPreferences(prev => ({ ...prev, [preference]: !prev[preference] }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Do you have any health issue?</Text>
      <Text style={styles.subtitle}>
        Share with us your health issues so we could offer you more preferred diet
      </Text>

      {Object.entries(healthIssues).map(([issue, value]) => (
        <Checkbox.Item
          key={issue}
          label={issue.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          status={value ? 'checked' : 'unchecked'}
          onPress={() => handleHealthIssueChange(issue as keyof typeof healthIssues)}
        />
      ))}

      <Text style={styles.title}>Any dietary preferences</Text>
      <Text style={styles.subtitle}>
        Tell us about your Dietary preferences so we can provide you with individual recommendations for your well being.
      </Text>

      {Object.entries(dietaryPreferences).map(([preference, value]) => (
        <Checkbox.Item
          key={preference}
          label={preference.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          status={value ? 'checked' : 'unchecked'}
          onPress={() => handleDietaryPreferenceChange(preference as keyof typeof dietaryPreferences)}
        />
      ))}

      <Button
        mode="contained"
        onPress={() => navigation.navigate('MealPlan')}
        style={styles.button}
      >
        Next
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
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  button: {
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: '#006400',
  },
});