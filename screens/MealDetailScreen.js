import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const MealDetailScreen = ({ route }) => {
  const selectedMeal = route.params;

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
