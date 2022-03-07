import React from "react";
import { StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = ({ navigation }) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList data={favMeals} navigation={navigation} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
