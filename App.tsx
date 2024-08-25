/** @format */
// APP FILE WHICH HAS THE HOME PAGE AND MAIN MENU. IT ALSO SETS UP THE NAVIGATION AND LOADS THE FONTS

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { Button, Card } from "react-native-paper";
import { loadAsync } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import FirstLevel from "./pages/FirstLevel";
import SecondLevel from "./pages/SecondLevel";
import ThirdLevel from "./pages/ThirdLevel";
import FourthLevel from "./pages/FourthLevel";
import TutorialController from "./pages/TutorialController";
import TrainingController from "./pages/TrainingController";
import { ScoreProvider } from "./context/ScoreContext";
import { LogBox } from "react-native";

type RootStackParamList = {
  Home: undefined;
  FirstLevel: undefined;
  SecondLevel: undefined;
  ThirdLevel: undefined;
  FourthLevel: undefined;
  TutorialController: { level: string };
  TrainingController: { level: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const loadFonts = async () => {
  await loadAsync({
    UbuntuBold: require("./assets/fonts/ubuntu.bold.ttf"),
    UbuntuBoldItalic: require("./assets/fonts/ubuntu.bold-italic.ttf"),
    UbuntuMedium: require("./assets/fonts/ubuntu.medium.ttf"),
    UbuntuRegular: require("./assets/fonts/ubuntu.regular.ttf"),
  });
};

SplashScreen.preventAutoHideAsync();
LogBox.ignoreAllLogs();

const HomeScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}) => (
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
        <Button
          mode="contained"
          onPress={() => navigation.navigate("FourthLevel")}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Start Level 4: Hash Functions
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

  const getTitleForLevel = (level: string) => {
    const levelNames: { [key: string]: string } = {
      FirstLevel: "Caesar Cipher",
      SecondLevel: "Symmetric Algorithms",
      ThirdLevel: "Asymmetric Algorithms",
      FourthLevel: "Hash Functions",
    };
    return levelNames[level];
  };

  return (
    <ScoreProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Crypto Agent Home" }}
          />
          <Stack.Screen
            name="FirstLevel"
            component={FirstLevel}
            options={{ title: "Level 1" }}
          />
          <Stack.Screen
            name="SecondLevel"
            component={SecondLevel}
            options={{ title: "Level 2" }}
          />
          <Stack.Screen
            name="ThirdLevel"
            component={ThirdLevel}
            options={{ title: "Level 3" }}
          />
          <Stack.Screen
            name="FourthLevel"
            component={FourthLevel}
            options={{ title: "Level 4" }}
          />
          <Stack.Screen
            name="TutorialController"
            component={TutorialController}
            options={({
              route,
            }: {
              route: RouteProp<RootStackParamList, "TutorialController">;
            }) => ({
              title: getTitleForLevel(route.params.level),
            })}
          />
          <Stack.Screen
            name="TrainingController"
            component={TrainingController}
            options={({
              route,
            }: {
              route: RouteProp<RootStackParamList, "TrainingController">;
            }) => ({
              title: getTitleForLevel(route.params.level),
            })}
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
