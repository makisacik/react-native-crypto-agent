/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-paper";
import FirstLevel from "./pages/FirstLevel";
import TutorialController from "./pages/TutorialController";
import FirstLevelTraining1 from "./components/first-level/training/FirstLevelTraining1";
import FirstLevelTraining2 from "./components/first-level/training/FirstLevelTraining2";
import FirstLevelTraining3 from "./components/first-level/training/FirstLevelTraining3";
import TrainingController from "./pages/TrainingController";
import QuestionController from "./pages/QuestionController";
import { ScoreProvider } from "./context/ScoreContext";

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
    <ScoreProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FirstLevel" component={FirstLevel} />
          <Stack.Screen
            name="TutorialController"
            component={TutorialController}
          />
          <Stack.Screen
            name="FirstLevelTraining1"
            component={FirstLevelTraining1}
          />
          <Stack.Screen
            name="FirstLevelTraining2"
            component={FirstLevelTraining2}
          />
          <Stack.Screen
            name="FirstLevelTraining3"
            component={FirstLevelTraining3}
          />
          <Stack.Screen
            name="TrainingController"
            component={TrainingController}
          />
          <Stack.Screen
            name="QuestionController"
            component={QuestionController}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ScoreProvider>
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
