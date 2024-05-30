/** @format */

import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Dialog, Portal, Provider } from "react-native-paper";
import LottieView from "lottie-react-native";

const FirstLevelPage5 = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <View style={styles.container}>
        <Text style={styles.title}>
          You successfully completed the tutorial!
        </Text>
        <LottieView
          source={require("../../assets/success-animation.json")}
          autoPlay
          loop={false}
          style={styles.animation}
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  animation: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default FirstLevelPage5;
