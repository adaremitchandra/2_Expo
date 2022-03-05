import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import Colors from "../constants/Colors";
const Stack = createNativeStackNavigator();

const MealsNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categoties"
          component={CategoriesScreen}
          options={{
            headerStyle: { backgroundColor: Colors.primaryColor },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigation;
