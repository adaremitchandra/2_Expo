import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = ({ route }) => {
  const catId = route.params.categoryId;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View>
      <Text>CategoryMealScreen</Text>
      <Text>{selectedCategory.title}</Text>
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
