/** @format */

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-paper";
import { getConversation } from "../utils/ConversationManager";
import useTypingEffect from "../utils/useTypingEffect";

interface ConversationProps {
  level: string;
  conversationNumber: number;
  onDialogueChange?: (index: number) => void;
  onFinish?: () => void;
}

const Conversation = ({
  level,
  conversationNumber,
  onDialogueChange = (index) => {},
  onFinish = () => {},
}: ConversationProps) => {
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
  const [currentText, setCurrentText] = useState(dialogues[0].text);
  const [currentSpeaker, setCurrentSpeaker] = useState(dialogues[0].speaker);
  const [choices, setChoices] = useState(dialogues[0].choices || []);
  const [correctChoiceIndex, setCorrectChoiceIndex] = useState(
    dialogues[0].correctChoiceIndex
  );

  useEffect(() => {
    setIndex(0);
    setCurrentText(dialogues[0].text);
    setCurrentSpeaker(dialogues[0].speaker);
    setChoices(dialogues[0].choices || []);
    setCorrectChoiceIndex(dialogues[0].correctChoiceIndex);
    onDialogueChange(0);
  }, [level, conversationNumber]);

  const handlePress = (choiceIndex: number | null = null): void => {
    if (choices.length > 0 && choiceIndex === null) {
      return;
    }
    if (choiceIndex !== null && choiceIndex !== correctChoiceIndex) {
      return;
    }

    if (index < dialogues.length - 1) {
      const newIndex = index + 1;
      setIndex(newIndex);
      setCurrentText(dialogues[newIndex].text);
      setCurrentSpeaker(dialogues[newIndex].speaker);
      setChoices(dialogues[newIndex].choices || []);
      setCorrectChoiceIndex(dialogues[newIndex].correctChoiceIndex);
      onDialogueChange(newIndex);
    } else {
      onFinish();
    }
  };

  const characterImages: { [key: string]: any } = {
    agent: require("../assets/agent.png"),
    instructor: require("../assets/instructor.png"),
    trainer: require("../assets/trainer.png"),
  };

  const character = characters[currentSpeaker] || {};
  const typedText = useTypingEffect(currentText, 50);

  return (
    <TouchableOpacity
      onPress={() => handlePress()}
      style={styles.container}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
    >
      <Image source={characterImages[character.image]} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.text}>{typedText}</Text>
        {choices.length > 0 && (
          <View style={styles.choicesContainer}>
            {choices.map((choice: string, i: number) => (
              <Button
                key={i}
                mode="contained"
                onPress={() => handlePress(i)}
                style={styles.choiceButton}
              >
                {choice}
              </Button>
            ))}
          </View>
        )}
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
    zIndex: 1,
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
  choicesContainer: {
    marginTop: 10,
  },
  choiceButton: {
    marginVertical: 5,
  },
});

export default Conversation;
