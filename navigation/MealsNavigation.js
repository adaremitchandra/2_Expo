import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

const MealsNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primaryColor },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen name="Categoties" component={CategoriesScreen} />
          <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} options={({ route }) => ({ title: route.params.title })} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} options={({ route }) => ({ title: route.params.title })} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigation;
