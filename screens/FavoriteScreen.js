import React from "react";
import { StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const FavoriteScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  return <MealList data={favMeals} navigation={navigation} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
