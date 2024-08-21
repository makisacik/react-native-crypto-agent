/** @format */

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const WrappedButton = ({
  title,
  onPress,
  style,
  textStyle,
}: {
  title: string;
  onPress: () => void;
  style: any;
  textStyle: any;
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6650a5", // Customize your button color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    maxWidth: "100%", // Ensure it doesn't overflow the screen width
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    flexWrap: "wrap", // Allows text to wrap within the button
  },
});

export default WrappedButton;
