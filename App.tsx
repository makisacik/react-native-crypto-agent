/** @format */

import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CaesarCipherQuestion from "./components/CaesarCipherQuestion";
import Conversation from "./components/Conversation";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Caesar Cipher Question"
        onPress={() =>
          navigation.navigate("CaesarCipher", {
            isEncoding: true,
            text: "abcd",
          })
        }
      />
      <Button
        title="Go to Conversation"
        onPress={() => navigation.navigate("Conversation")}
      />
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
});
