import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMealsScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.textEmpty}>
          NO MEALS FOUND. MAYBE CHECK YOUR FILTER!
        </Text>
      </View>
    );
  }

  return <MealList data={displayedMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  textEmpty: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
    textAlign: "center",
  },
});
