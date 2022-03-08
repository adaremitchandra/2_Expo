import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ButtomNavigator from "../components/BottomNavigator";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primaryColor },
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerTintColor: "white",
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="ios-menu"
              onPress={() => navigation.toggleDrawer()}
            />
          </HeaderButtons>
        ),
      }}
      tabBar={(props) => <ButtomNavigator {...props} />}
    >
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

const DrawerNavigation = ({ data }) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{ headerShown: false, drawerLabel: "Meal" }}
      />
      <Drawer.Screen
        name="Filter"
        component={FiltersScreen}
        options={{
          title: "Filter Meals",
          headerStyle: { backgroundColor: Colors.primaryColor },
          headerTintColor: "white",
          drawerLabel: "Filter!!!",
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const MealsNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primaryColor },
            headerTintColor: "white",
            headerTitleStyle: {
              fontFamily: "open-sans-bold",
            },
          }}
        >
          <Stack.Screen
            name="Main"
            component={DrawerNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CategoryMeals"
            component={CategoryMealsScreen}
            options={({ route }) => ({ title: route.params.title })}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={({ route }) => ({
              title: route.params.title,
            })}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigation;
