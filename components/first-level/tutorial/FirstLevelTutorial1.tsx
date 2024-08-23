/** @format */
// CAESAR CIPHER TUTORIAL INTRODUCTION PAGE

import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image, Keyboard } from "react-native";
import { Text, Button, Dialog, Portal, Provider } from "react-native-paper";

const FirstLevelTutorial1 = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Caesar Cipher Tutorial</Text>
        <Image
          source={require("../../../assets/caesar_cipher_tutorial.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          The Caesar Cipher is one of the simplest and most widely known
          encryption techniques. It is a type of substitution cipher in which
          each letter in the plaintext is shifted a certain number of places
          down or up the alphabet. For example, with a shift of 3:
        </Text>
        <Text style={styles.example}>
          Plaintext: ABCDEFGHIJKLMNOPQRSTUVWXYZ{"\n"}
          Ciphertext: DEFGHIJKLMNOPQRSTUVWXYZABC
        </Text>
        <Text style={styles.text}>
          Here, 'A' is encrypted as 'D', 'B' as 'E', and so on. This method is
          named after Julius Caesar, who used it in his private correspondence.
        </Text>
        <Text style={styles.text}>
          In this tutorial, you'll learn how to both encrypt and decrypt
          messages using the Caesar Cipher.
        </Text>
        <Button
          mode="text"
          onPress={showDialog}
          labelStyle={styles.buttonLabel}
        >
          Learn More
        </Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Caesar Cipher</Dialog.Title>
            <Dialog.Content>
              <Text style={styles.dialogText}>
                The Caesar Cipher is a type of substitution cipher in which each
                letter in the plaintext is shifted by a fixed number of places.
                This technique is named after Julius Caesar, who used it to
                protect his messages. The shift is also referred to as the key.
                For example, with a shift of 1, 'A' would be replaced by 'B',
                'B' would become 'C', and so on.
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog} labelStyle={styles.buttonLabel}>
                Close
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "UbuntuBold",
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
    fontFamily: "UbuntuRegular",
    marginBottom: 10,
  },
  example: {
    fontFamily: "monospace",
    backgroundColor: "#e8e8e8",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: "UbuntuRegular",
  },
  dialogText: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
  },
});

export default FirstLevelTutorial1;
