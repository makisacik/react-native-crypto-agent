/** @format */

import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const CaesarCipherTutorial = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Caesar Cipher Tutorial</Text>
      <Image source={require("../assets/caesar.png")} style={styles.image} />
      <Text style={styles.text}>
        The Caesar Cipher is one of the simplest and most widely known
        encryption techniques. It is a type of substitution cipher in which each
        letter in the plaintext is shifted a certain number of places down or up
        the alphabet. For example, with a shift of 3:
      </Text>
      <Text style={styles.code}>
        Plaintext: ABCDEFGHIJKLMNOPQRSTUVWXYZ{"\n"}
        Ciphertext: DEFGHIJKLMNOPQRSTUVWXYZABC
      </Text>
      <Text style={styles.text}>
        Here, 'A' is encrypted as 'D', 'B' as 'E', and so on. To decrypt, you
        simply shift the letters back by the same number.
      </Text>
      <Text style={styles.text}>
        Let's try encrypting a message! Use the input fields below to practice
        encrypting and decrypting messages using the Caesar Cipher.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  code: {
    fontFamily: "monospace",
    backgroundColor: "#e8e8e8",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default CaesarCipherTutorial;
