import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = ({ route, navigation }) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate('MealDetail', itemData.item);
        }}
      />
    );
  };

  const catId = route.params.categoryId;

  const displayedMeal = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeal} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 15, backgroundColor: 'white' },
});
