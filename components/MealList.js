import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealList = ({ data, navigation }) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate("MealDetail", itemData.item);
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: { flex: 1, padding: 15, backgroundColor: "white" },
});
