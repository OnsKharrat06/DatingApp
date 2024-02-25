import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function Header({ isDarkMode, onToggleDarkMode }) {
  const toggleDarkMode = () => {
    onToggleDarkMode(!isDarkMode);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.headerContent, styles.container]}>
        <Text style={styles.headerText}>Welcome Back!</Text>
        <Switch
          trackColor={{ false: 'purple', true: 'lightblue' }}
          thumbColor={isDarkMode ? 'black' : 'white'}
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          style={styles.switch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    width: 500,
    height: 80,
    
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:"2%"
    
  },
  headerText: {
    fontSize: 30,
    color: 'black'
  },
  switch: {
    marginLeft: 50,
  },
});
