/** @format */

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const conversations = [
  "Hello, agent!",
  "Welcome to Crypto Agent.",
  "Prepare for an exciting journey!",
];

const Conversation = () => {
  const [index, setIndex] = useState(0);

  const handlePress = () => {
    if (index < conversations.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(-1);
    }
  };

  if (index === -1) return null;

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={require("../assets/character.png")} style={styles.icon} />
      <Text style={styles.text}>{conversations[index]}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 70,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 5, // for Android
    shadowColor: "#000", // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.8, // for iOS
    shadowRadius: 2, // for iOS
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
});

export default Conversation;
