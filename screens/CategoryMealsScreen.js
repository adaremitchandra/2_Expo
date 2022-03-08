import React from "react";
import { StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMealsScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList data={displayedMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
