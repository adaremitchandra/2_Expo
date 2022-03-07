import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const TabItem = ({ title, active, onPress, onLongPress }) => {
  const Icon = () => {
    if (title === "Categories") {
      return active ? (
        <Ionicons name="ios-restaurant" size={22} color={Colors.accentColor} />
      ) : (
        <Ionicons name="ios-restaurant" size={22} color="#636363" />
      );
    }
    if (title === "Favorite") {
      return active ? (
        <Ionicons name="ios-star" size={22} color={Colors.accentColor} />
      ) : (
        <Ionicons name="ios-star" size={22} color="#636363" />
      );
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: (active) => ({
    fontSize: 10,
    color: active ? Colors.accentColor : "#636363",
    fontFamily: "open-sans",
    marginTop: 4,
  }),
});
