/** @format */

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Card } from "react-native-paper";
import { loadAsync } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import FirstLevel from "./pages/FirstLevel";
import SecondLevel from "./pages/SecondLevel";
import ThirdLevel from "./pages/ThirdLevel"; // Import the ThirdLevel component
import TutorialController from "./pages/TutorialController";
import FirstLevelTraining1 from "./components/first-level/training/FirstLevelTraining1";
import FirstLevelTraining2 from "./components/first-level/training/FirstLevelTraining2";
import FirstLevelTraining3 from "./components/first-level/training/FirstLevelTraining3";
import TrainingController from "./pages/TrainingController";
import QuestionController from "./pages/QuestionController";
import { ScoreProvider } from "./context/ScoreContext";
import ThirdLevelTraining1 from "./components/third-level/training/ThirdLevelTraining1";

const Stack = createStackNavigator();

const loadFonts = async () => {
  await loadAsync({
    UbuntuBold: require("./assets/fonts/ubuntu.bold.ttf"),
    UbuntuBoldItalic: require("./assets/fonts/ubuntu.bold-italic.ttf"),
    UbuntuMedium: require("./assets/fonts/ubuntu.medium.ttf"),
    UbuntuRegular: require("./assets/fonts/ubuntu.regular.ttf"),
  });
};

SplashScreen.preventAutoHideAsync();

const HomeScreen = ({ navigation }: { navigation: any }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Crypto Agent</Text>
    <Card style={styles.card}>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("FirstLevel")}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Start Level 1: Caesar Cipher
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("SecondLevel")}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Start Level 2: Symmetric Algorithms
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("ThirdLevel")}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Start Level 3: Asymmetric Algorithms
        </Button>
      </View>
    </Card>
  </View>
);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      await loadFonts();
      setFontsLoaded(true);
      SplashScreen.hideAsync();
    }
    load();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScoreProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FirstLevel" component={FirstLevel} />
          <Stack.Screen name="SecondLevel" component={SecondLevel} />
          <Stack.Screen name="ThirdLevel" component={ThirdLevel} />
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
          <Stack.Screen
            name="ThirdLevelTraining1"
            component={ThirdLevelTraining1}
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "UbuntuBoldItalic",
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    width: "100%",
    padding: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "100%",
    marginVertical: 10,
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: "UbuntuRegular",
  },
});
