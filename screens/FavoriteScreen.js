import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const FavoriteScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.empty}>
        <Text style={styles.textEmpty}>
          NO FAVORITE MEAL FOUND. START ADDING SOME!
        </Text>
      </View>
    );
  }

  return <MealList data={favMeals} navigation={navigation} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textEmpty: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
    textAlign: "center",
  },
});
