/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-paper";
import CaesarCipherQuestion from "./components/CaesarCipherQuestion";
import Conversation from "./components/Conversation";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate("CaesarCipher", {
            isEncoding: true,
            text: "abcd",
          })
        }
        style={styles.button}
      >
        Go to Caesar Cipher Question
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Conversation")}
        style={styles.button}
      >
        Go to Conversation
      </Button>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CaesarCipher" component={CaesarCipherQuestion} />
        <Stack.Screen name="Conversation" component={Conversation} />
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
    bottom: 40,
  },
  button: {
    marginVertical: 10,
  },
});
