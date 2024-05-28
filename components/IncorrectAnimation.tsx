/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const IncorrectAnimation: React.FC = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/incorrect-animation.json")} // Path to your Lottie JSON file
        autoPlay
        loop={false}
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  animation: {
    width: 150,
    height: 150,
  },
});

export default IncorrectAnimation;
