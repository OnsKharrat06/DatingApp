import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabNavigation from "../../components/Nav/TabNavigation";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ email, ...props }) => (
  <DrawerContentScrollView {...props}>
    <Text style={{ marginVertical: 10, marginLeft: 16 }}>Email: {email}</Text>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

export default function DrawNavigation({ route }) {
  const { email } = route.params;
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        
        screenOptions={({ route }) => ({
          drawerIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "TabNavigation") {
              iconName = focused ? "home" : "home-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          drawerActiveTintColor: "tomato",
          drawerInactiveTintColor: "gray",
        })}
        drawerContent={(props) => (
          <CustomDrawerContent email={email} {...props} />
        )}
      >
        <Drawer.Screen
          component={TabNavigation}
          name="TabNavigation"
          options={{
            drawerLabel: "Home",
            headerTitle: `Welcome Back, ${email.split("@")[0]}`,
            headerTitleStyle: { fontSize: 14, color: "black" },
            headerStyle: {
              backgroundColor: "pink",
            },

            // ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
