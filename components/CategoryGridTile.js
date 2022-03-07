import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CategoryGridTile = ({ onSelect, title, color }) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
      <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
    textAlign: "right",
  },
});
