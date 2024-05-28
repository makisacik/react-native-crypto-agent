/** @format */

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import useTypingEffect from "../utils/useTypingEffect";
import { getConversation } from "../utils/ConversationManager";

const Conversation = ({
  navigation,
  level,
}: {
  navigation: any;
  level: any;
}) => {
  const conversations = getConversation(level);
  const [index, setIndex] = useState(0);

  const handlePress = () => {
    if (index < conversations.length - 1) {
      setIndex(index + 1);
    } else {
      navigation.navigate(`${level}Tutorial`);
    }
  };

  const conversationText = index === -1 ? "" : conversations[index];
  const displayedText = useTypingEffect(conversationText, 50);

  if (index === -1) return null;

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={require("../assets/character.png")} style={styles.icon} />
      <Text style={styles.text}>{displayedText}</Text>
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
  text: {
    flex: 1,
    fontSize: 20,
  },
});

export default Conversation;
