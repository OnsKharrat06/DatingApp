import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListProfiles from "../all-profiles/ListProfiles";
import AllProfilesMain from "../all-profiles/AllProfilesMain";
import Form from "../Form";
import ListUsers from "../top-10/ListUsers";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "All Profiles") {
            iconName = focused ? "people" : "people-outline";
          }
          if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          if (route.name === "Top 10") {
            iconName = focused ? "heart" : "heart-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "pink",
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Screen
        name="All Profiles"
        component={AllProfilesMain}
        options={{
          headerShown: false,
          // headerTitle: "All Profiles Ready to Start!",
          headerTitleStyle: { fontSize: 16 },
        }}
      />

      <Tab.Screen
        name="Top 10"
        component={ListUsers}
        options={{
          headerShown: false,
          // headerTitle: "TOP 10 Best Matches For You!",
          headerTitleStyle: { fontSize: 14 },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Form}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
