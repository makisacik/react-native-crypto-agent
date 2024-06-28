/** @format */

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { getConversation } from "../utils/ConversationManager";
import useTypingEffect from "../utils/useTypingEffect";

const Conversation = ({
  level,
  conversationNumber,
  onFinish = () => {},
}: {
  level: string;
  conversationNumber: string;
  onFinish?: () => void;
}) => {
  const conversationData = getConversation(level, conversationNumber);

  if (
    !conversationData ||
    !conversationData.dialogues ||
    !conversationData.characters
  ) {
    return null;
  }

  const dialogues = conversationData.dialogues;
  const characters = conversationData.characters;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [level, conversationNumber]);

  const handlePress = () => {
    if (index < dialogues.length - 1) {
      setIndex(index + 1);
    } else {
      onFinish();
    }
  };

  const characterImages: { [key: string]: any } = {
    agent: require("../assets/agent.png"),
    instructor: require("../assets/instructor.png"),
    sergeant: require("../assets/sergeant.png"),
  };

  const { text, speaker } = dialogues[index];
  const character = characters[speaker] || {};

  const typedText = useTypingEffect(text, 50);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image source={characterImages[character.image]} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.text}>{typedText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5, // for Android
    shadowColor: "#000", // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.8, // for iOS
    shadowRadius: 2, // for iOS
  },
  icon: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: "UbuntuBold",
    marginBottom: 4,
  },
  text: {
    fontSize: 20,
    fontFamily: "UbuntuRegular",
    flexWrap: "wrap",
  },
});

export default Conversation;
