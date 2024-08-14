/** @format */

import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Provider } from "react-native-paper";
import Conversation from "../../Conversation";

const FourthLevelTutorial6 = () => {
  const [showConversation, setShowConversation] = useState(true);

  const handleConversationFinish = () => {
    setShowConversation(false);
  };

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Diving Deeper into SHA-3</Text>
        <View style={styles.container}>
          <Text style={styles.subtitle}>The Keccak Sponge Function</Text>
          <Text style={styles.text}>
            The Keccak sponge function uses two phases:{" "}
            <Text style={styles.bold}>absorption</Text> and{" "}
            <Text style={styles.bold}>squeezing</Text>.
          </Text>
          <Image
            source={require("../../../assets/sponge-function.png")}
            style={styles.image}
          />
          <Text style={styles.imageCaption}>
            The structure of the Keccak Sponge Function
          </Text>
          <Text style={styles.text}>
            During <Text style={styles.bold}>absorption</Text>, the input is
            XORed into the state and transformed using the{" "}
            <Text style={styles.bold}>Keccak permutation function</Text>, a key
            operation in SHA-3 that applies a series of transformations to mix
            the bits thoroughly. In <Text style={styles.bold}>squeezing</Text>,
            the hash is produced by extracting output blocks from the state.
          </Text>

          <Text style={styles.subtitle}>Why is SHA-3 Different?</Text>
          <Text style={styles.text}>
            SHA-3 allows flexibility in capacity and rate, enabling a trade-off
            between security and speed. It is also resistant to length extension
            attacks, unlike SHA-1 and SHA-2.
          </Text>

          <Text style={styles.subtitle}>Applications of SHA-3</Text>
          <Text style={styles.text}>
            SHA-3's unique structure allows it to adapt to various cryptographic
            applications, including pseudo-random number generation, stream
            ciphers, and message authentication codes (MACs).
          </Text>
        </View>
      </ScrollView>
      {showConversation && (
        <View style={styles.conversationContainer}>
          <Conversation
            level="FourthLevel"
            conversationNumber={2}
            onFinish={handleConversationFinish}
          />
        </View>
      )}
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "UbuntuBold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "UbuntuBold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "left",
  },
  text: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
    textAlign: "left",
  },
  bold: {
    fontFamily: "UbuntuBold",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  imageCaption: {
    fontSize: 14,
    fontFamily: "UbuntuRegular",
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
  conversationContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default FourthLevelTutorial6;
