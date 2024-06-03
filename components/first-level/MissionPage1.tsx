/** @format */

import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Conversation from "../Conversation";
import Character from "../Character";

const MissionPage1 = () => {
  const [showConversation, setShowConversation] = useState(false);
  const [showExclamation, setShowExclamation] = useState(true);

  const handleCharacterClick = () => {
    setShowConversation(true);
    setShowExclamation(false);
  };

  const handleConversationFinish = () => {
    setShowConversation(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.characterWrapper}>
        <Character
          image={require("../../assets/sergeant.png")}
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
    position: "relative",
    alignItems: "center",
  },
  exclamationMark: {
    position: "absolute",
    top: -10,
    right: -10,
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
});

export default MissionPage1;
