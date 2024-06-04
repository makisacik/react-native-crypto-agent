/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Text, Button, Dialog, Portal, Provider } from "react-native-paper";
import CircularAlphabet from "../CircularAlphabet";

const FirstLevelPage2 = () => {
  const [shift, setShift] = useState(0);
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const incrementShift = () => {
    setShift((prevShift) => (prevShift + 1) % 26);
  };

  const decrementShift = () => {
    setShift((prevShift) => (prevShift - 1 + 26) % 26);
  };

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Introduction to Circular Alphabet</Text>
          <Text style={styles.text}>
            The circular alphabet is a tool used in the Caesar Cipher encryption
            process. Each letter of the alphabet can be shifted a certain number
            of places to encrypt a message. You can play with the shift value to
            see how the alphabet changes and understand how the encryption
            works.
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={decrementShift}
              style={styles.button}
              labelStyle={styles.buttonLabel}
            >
              -
            </Button>
            <View style={styles.shiftValueContainer}>
              <Text style={styles.shiftValue}>{shift}</Text>
            </View>
            <Button
              mode="contained"
              onPress={incrementShift}
              style={styles.button}
              labelStyle={styles.buttonLabel}
            >
              +
            </Button>
          </View>
          <CircularAlphabet shift={shift} isEncoding={true} />
          <Button mode="text" onPress={showDialog}>
            Learn More
          </Button>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>About Circular Alphabet</Dialog.Title>
              <Dialog.Content>
                <Text>
                  The circular alphabet visualizes the process of shifting
                  letters in the Caesar Cipher. By changing the shift value, you
                  can see how each letter is mapped to a new letter. For
                  example, with a shift of 1, 'A' becomes 'B', 'B' becomes 'C',
                  and so on. This helps in understanding how the encryption
                  transforms the original message.
                </Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Close</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    //backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonLabel: {
    fontSize: 24,
    fontWeight: "bold",
  },
  shiftValueContainer: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  shiftValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default FirstLevelPage2;
