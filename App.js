import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";
import MealsNavigation from "./navigation/MealsNavigation";

const fetchFonts = () => {
  return Font.loadAsync({
    "Open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "Open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return <MealsNavigation />;
};

export default App;

const styles = StyleSheet.create({});
