import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/actions/meal";

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const MealDetailScreen = ({ route, navigation }) => {
  const dispacth = useDispatch();
  const selectedMeal = route.params;

  const isFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === selectedMeal.id)
  );

  const toggleFavoriteHandler = useCallback(() => {
    dispacth(toggleFavorite(selectedMeal.id));
  }, [dispacth, selectedMeal.id]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName={isFavorite ? "ios-star" : "ios-star-outline"}
            onPress={toggleFavoriteHandler}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, toggleFavoriteHandler, isFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.detail}>
        <Text style={styles.text}>{selectedMeal.duration}m</Text>
        <Text style={styles.text}>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text style={styles.text}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  detail: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  text: {
    fontFamily: "open-sans",
  },
  image: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
