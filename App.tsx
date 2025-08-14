
import "./global.css";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AboutUsScreen from "./screens/Aboutus";
import FlatListScreen from "./screens/FlatListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false ,title: 'Login Page' }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }}
        />
         <Stack.Screen 
          name="aboutus" 
          component={AboutUsScreen} 
          options={{ title: 'About Us' }}
        />
         <Stack.Screen 
          name="FlatList" 
          component={FlatListScreen} 
          options={{ title: 'Flat List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
