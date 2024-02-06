// Step 1. Add useColorScheme
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import AllProfilesMain from "./components/all-profiles/AllProfilesMain";
import AllCharacteristics from "./components/characteristics/AllCharacteristics";
import Form from "./components/Form";

// Step 2. Add the necessary NavigationContainer imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

// Step 3. Create an instance of the stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  // Step 4. Initialize the useColorScheme hook.
  const colorScheme = useColorScheme();
  /**
   * Step 5:
   * Integrate the provided React Navigation code into your React Native project to establish a themed navigation container.
   * This setup utilizes a stack navigator with a hidden header and includes a screen named "AllProfilesMain" linked to the AllProfilesMain component.
   */
  return (
    <NavigationContainer
      theme={colorScheme === "light" ? styles.LightTheme : styles.DarkTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="AllProfilesMain"
          component={AllProfilesMain}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Step 6. Define LightTheme and DarkTheme
const styles = StyleSheet.create({
  LightTheme: {
    ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      text: "black",
      background: "white",
    },
  },
  DarkTheme: {
    ...DarkTheme,
    dark: false,
    colors: {
      ...DarkTheme.colors,
      text: "white",
      background: "black",
    },
  },
});
