/** @format */

import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import { Button } from "react-native-paper";
import Conversation from "../../Conversation";
import Character from "../../Character";
import { useScore } from "../../../context/ScoreContext"; // Import useScore hook

const FirstLevelTraining1 = ({
  navigation,
  onNext,
}: {
  navigation: any;
  onNext: () => void;
}) => {
  const [showConversation, setShowConversation] = useState(false);
  const [showExclamation, setShowExclamation] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const { resetScore } = useScore(); // Use the resetScore function

  useEffect(() => {
    resetScore(); // Reset the score when this component mounts
  }, []);

  const handleCharacterClick = () => {
    setShowConversation(true);
    setShowExclamation(false);
  };

  const handleConversationFinish = () => {
    setShowConversation(false);
    setShowButton(true);
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.characterWrapper}>
        <Character
          image={require("../../../assets/sergeant.png")}
          name="Sergeant Mehmet"
          onPress={handleCharacterClick}
        />
        {showExclamation && (
          <View style={styles.exclamationMark}>
            <Text style={styles.exclamationText}>!</Text>
          </View>
        )}
      </View>
      {showConversation && (
        <Conversation
          level="FirstLevel"
          conversationNumber="3"
          onFinish={handleConversationFinish}
        />
      )}
      {showButton && (
        <Animated.View style={{ ...styles.button, opacity: buttonOpacity }}>
          <Button mode="contained" onPress={onNext}>
            Continue
          </Button>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  characterWrapper: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  exclamationMark: {
    position: "absolute",
    top: -10,
    right: 30,
    backgroundColor: "red",
    borderRadius: 15,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  exclamationText: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    top: 250,
  },
});

export default FirstLevelTraining1;
