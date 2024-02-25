import { StyleSheet, Text, View, useColorScheme } from "react-native";
import AllProfilesMain from "./components/all-profiles/AllProfilesMain";
import AllCharacteristics from "./components/characteristics/AllCharacteristics";
import Form from "./components/Form";
import Header from "./components/header-footer/Header";
import Footer from "./components/header-footer/Footer";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import DrawNavigation from "./components/Nav/DrawNavigation";
import SignIn from "./components/SignIn/SignIn";


const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");


  return (

    <NavigationContainer>
      <View style={styles.container}>
      <Stack.Navigator
        screenOptions={{ headerShown: true }}
        initialRouteName="SignIn"
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="DrawNavigation" component={DrawNavigation} />
      </Stack.Navigator>
      </View>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});