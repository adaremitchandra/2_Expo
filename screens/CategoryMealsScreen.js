import React from "react";
import { StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const CategoryMealsScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList data={displayedMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
