/** @format */

import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Title, Paragraph } from "react-native-paper";
import Conversation from "../components/Conversation";

const FirstLevel = ({ navigation }: { navigation: any }) => {
  const [showConversation, setShowConversation] = useState(true);

  const handleConversationFinish = () => {
    setShowConversation(false);
  };

  return (
    <View style={styles.container}>
      {showConversation && (
        <Conversation
          level="FirstLevel"
          conversationNumber="1"
          onFinish={handleConversationFinish}
        />
      )}
      <View style={styles.infoContainer}>
        <Title style={styles.title}>Level 1: Caesar Cipher</Title>
        <Paragraph style={styles.description}>
          In this level, we will talk about the Caesar Cipher.
        </Paragraph>
        <Image source={require("../assets/caesar.png")} style={styles.image} />
        <Paragraph style={styles.imageDescription}>
          Julius Caesar, the inventor of the Caesar Cipher.
        </Paragraph>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() =>
            navigation.navigate("TutorialController", { level: "CaesarCipher" })
          }
        >
          Start the Tutorial
        </Button>
        <Button
          mode="outlined"
          style={styles.button}
          onPress={() => {
            navigation.navigate("MissionPage1", { level: "CaesarCipher" });
          }}
        >
          Start the Mission
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  infoContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginVertical: 10,
  },
  imageDescription: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    marginVertical: 10,
  },
});

export default FirstLevel;
