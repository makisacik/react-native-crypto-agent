/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-paper";
import FirstLevel from "./pages/FirstLevel";
import TutorialController from "./pages/TutorialController";
import MissionPage1 from "./components/first-level/MissionPage1";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("FirstLevel")}
        style={styles.button}
      >
        Start Level 1: Caesar Cipher
      </Button>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FirstLevel" component={FirstLevel} />
        <Stack.Screen
          name="TutorialController"
          component={TutorialController}
        />
        <Stack.Screen name="MissionPage1" component={MissionPage1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginVertical: 10,
  },
});
