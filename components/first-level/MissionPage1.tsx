/** @format */

import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Conversation from "../Conversation";
import Character from "../Character";

const MissionPage1 = () => {
  const [showConversation, setShowConversation] = useState(false);
  const [conversationKey, setConversationKey] = useState(0);
  const [showExclamation, setShowExclamation] = useState(true);

  const handleCharacterClick = () => {
    setConversationKey((prevKey) => prevKey + 1);
    setShowConversation(true);
    setShowExclamation(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.characterWrapper}>
        <Character
          image={require("../../assets/character.png")}
          name="Sergeant Mehmet"
          onPress={handleCharacterClick}
        />
        {showExclamation && (
          <View style={styles.exclamationMark}>
            <Text>!</Text>
          </View>
        )}
      </View>
      {showConversation && (
        <Conversation
          key={conversationKey}
          level="FirstLevel"
          conversationNumber="3"
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
    top: 0,
    right: 30,
    backgroundColor: "lightgray",
    borderRadius: 15,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MissionPage1;
