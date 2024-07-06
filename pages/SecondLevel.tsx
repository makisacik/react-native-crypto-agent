/** @format */

import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Title, Paragraph } from "react-native-paper";
import Conversation from "../components/Conversation";

const SecondLevel = ({ navigation }: { navigation: any }) => {
  const [showConversation, setShowConversation] = useState(true);

  const handleConversationFinish = () => {
    setShowConversation(false);
  };

  return (
    <View style={styles.container}>
      {showConversation && (
        <Conversation
          level="SecondLevel"
          conversationNumber={2}
          onFinish={handleConversationFinish}
        />
      )}
      <View style={styles.infoContainer}>
        <Title style={styles.title}>Level 2: Symmetric Algorithms</Title>
        <Paragraph style={styles.description}>
          In this level, we will talk about Symmetric Algorithms.
        </Paragraph>
        <Image
          source={require("../assets/symmetric.png")}
          style={styles.image}
        />
        <Paragraph style={styles.imageDescription}>
          Example of a Symmetric Algorithm diagram.
        </Paragraph>
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonLabel}
          onPress={() =>
            navigation.navigate("TutorialController", { level: "SecondLevel" })
          }
        >
          Start the Tutorial
        </Button>
        <Button
          mode="outlined"
          style={styles.button}
          labelStyle={styles.buttonLabel}
          onPress={() => {
            navigation.navigate("TrainingController", { level: "SecondLevel" });
          }}
        >
          Start the Training
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
    fontFamily: "UbuntuBold",
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    fontFamily: "UbuntuRegular",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginVertical: 10,
  },
  imageDescription: {
    fontSize: 14,
    marginBottom: 20,
    fontFamily: "UbuntuRegular",
    textAlign: "center",
  },
  button: {
    marginVertical: 10,
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: "UbuntuRegular",
  },
});

export default SecondLevel;
