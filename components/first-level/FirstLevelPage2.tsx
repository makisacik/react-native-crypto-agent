/** @format */

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FirstLevelPage2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here’s how the Caesar Cipher works...</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  code: {
    fontFamily: "monospace",
    backgroundColor: "#e8e8e8",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default FirstLevelPage2;
