import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type HealthPreferencesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HealthPreferences'
>;

type Props = {
  navigation: HealthPreferencesScreenNavigationProp;
};

type SelectableChipProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

const SelectableChip = ({ label, selected, onPress }: SelectableChipProps) => (
  <Pressable
    onPress={onPress}
    style={[
      styles.chip,
      selected && styles.chipSelected
    ]}
  >
    <Text style={[
      styles.chipText,
      selected && styles.chipTextSelected
    ]}>
      {label}
    </Text>
  </Pressable>
);

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
      <View style={styles.content}>
        <Text style={styles.title}>Do you have any health issue?</Text>
        <Text style={styles.subtitle}>
          Share with us your health issues so we could offer you more preferred diet
        </Text>

        <View style={styles.chipContainer}>
          {Object.entries(healthIssues).map(([issue, value]) => (
            <SelectableChip
              key={issue}
              label={issue
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toLowerCase())
                .replace('celiac disease', 'celiac disease')
                .replace('bowel syndrome', 'Bowel syndrome')
                .replace('lactose intolerance', 'Lactose intolerance')}
              selected={value}
              onPress={() => handleHealthIssueChange(issue as keyof typeof healthIssues)}
            />
          ))}
        </View>

        <Text style={styles.title}>Any dietary preferences</Text>
        <Text style={styles.subtitle}>
          Tell us about your Dietary preferences so we can provide you with individual recommendations for your well being.
        </Text>

        <View style={styles.chipContainer}>
          {Object.entries(dietaryPreferences).map(([preference, value]) => (
            <SelectableChip
              key={preference}
              label={preference
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toLowerCase())}
              selected={value}
              onPress={() => handleDietaryPreferenceChange(preference as keyof typeof dietaryPreferences)}
            />
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('MealPlan')}
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          Next
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    lineHeight: 22,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
  chip: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  chipSelected: {
    backgroundColor: '#E8F5E9',
    borderColor: '#006400',
  },
  chipText: {
    fontSize: 16,
    color: '#000',
  },
  chipTextSelected: {
    color: '#006400',
  },
  footer: {
    padding: 16,
    paddingBottom: 32,
  },
  button: {
    backgroundColor: '#006400',
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});

