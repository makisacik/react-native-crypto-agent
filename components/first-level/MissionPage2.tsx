/** @format */

import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import Conversation from "../Conversation";
import CaesarCipherQuestion from "../CaesarCipherQuestion";

const MissionPage2 = ({ navigation }: { navigation: any }) => {
  const [showConversation, setShowConversation] = useState(true);
  const [showCypherText, setShowCypherText] = useState(true);
  const [showCipherQuestion, setShowCipherQuestion] = useState(false);

  const handleConversationFinish = () => {
    setShowConversation(false);
    setShowCypherText(false);
    setShowCipherQuestion(true);
  };

  return (
    <View style={styles.container}>
      {showConversation && (
        <Conversation
          level="FirstLevel"
          conversationNumber="4"
          onFinish={handleConversationFinish}
        />
      )}
      {showCypherText && (
        <Image
          source={require("../../assets/cypher-text.png")}
          style={styles.image}
        />
      )}
      {showCipherQuestion && (
        <View style={styles.cipherContainer}>
          <CaesarCipherQuestion isEncoding={false} text="phhwlqj vxqgdb" />
        </View>
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  cipherContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    padding: 5,
  },
});

export default MissionPage2;
