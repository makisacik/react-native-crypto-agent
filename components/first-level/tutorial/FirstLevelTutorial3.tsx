/** @format */
// TUTORIAL PAGE TO DISPLAY CAESAR CIPHER ENCRYPTION EXERCISE

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  Text,
  TextInput,
  Button,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";
import CircularAlphabet from "../CircularAlphabet";

const FirstLevelTutorial3 = () => {
  const [input, setInput] = useState("");
  const [shift, setShift] = useState("3");
  const [output, setOutput] = useState("");
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleEncrypt = () => {
    Keyboard.dismiss();
    const shiftValue = parseInt(shift);
    const result = input
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const shiftAmount = shiftValue % 26;
          let newCode: number = code;
          if (code >= 65 && code <= 90) {
            newCode = ((code - 65 + shiftAmount) % 26) + 65;
          } else if (code >= 97 && code <= 122) {
            newCode = ((code - 97 + shiftAmount) % 26) + 97;
          }
          return String.fromCharCode(newCode);
        }
        return char;
      })
      .join("");
    setOutput(result);
  };

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Encrypt a Message</Text>
          <Text style={styles.text}>
            Enter your message and shift value to see the encrypted result.
          </Text>
          <TextInput
            label="Enter message"
            value={input}
            onChangeText={setInput}
            style={styles.input}
          />
          <TextInput
            label="Enter shift value"
            value={shift}
            onChangeText={(text) => setShift(text)}
            keyboardType="numeric"
            style={styles.input}
          />
          <Button mode="contained" onPress={handleEncrypt}>
            Encrypt
          </Button>
          {output && (
            <Text style={styles.result}>Encrypted Message: {output}</Text>
          )}
          <CircularAlphabet shift={parseInt(shift)} isEncoding={true} />
          <Button mode="text" onPress={showDialog}>
            Learn More
          </Button>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Encryption Process</Dialog.Title>
              <Dialog.Content>
                <Text>
                  To encrypt a message, each letter in the plaintext is shifted
                  a certain number of places down or up the alphabet. For
                  example, with a shift of 3, 'A' is encrypted as 'D', 'B' as
                  'E', etc. The Caesar Cipher is easy to break because there are
                  only 25 possible keys to try.
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
  input: {
    marginBottom: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 10,
    backgroundColor: "#e8e8e8",
    padding: 10,
    borderRadius: 5,
  },
});

export default FirstLevelTutorial3;
