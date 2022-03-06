import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MealDetailScreen = ({ route }) => {
  const selectedMeal = route.params;

  return (
    <View>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
