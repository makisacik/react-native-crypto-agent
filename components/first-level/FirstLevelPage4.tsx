/** @format */

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

const FirstLevelPage4 = () => {
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [shift, setShift] = useState("3");
  const [decryptedMessage, setDecryptedMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleDecrypt = () => {
    const shiftValue = parseInt(shift);
    const result = encryptedMessage
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const shiftAmount = shiftValue % 26;
          let newCode: number = code;
          if (code >= 65 && code <= 90) {
            newCode = ((code - 65 - shiftAmount + 26) % 26) + 65;
          } else if (code >= 97 && code <= 122) {
            newCode = ((code - 97 - shiftAmount + 26) % 26) + 97;
          }
          return String.fromCharCode(newCode);
        }
        return char;
      })
      .join("");
    setDecryptedMessage(result);
  };

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Decrypt a Message</Text>
          <Text style={styles.text}>
            Enter the encrypted message and shift value to see the decrypted
            result.
          </Text>
          <TextInput
            label="Enter encrypted message"
            value={encryptedMessage}
            onChangeText={setEncryptedMessage}
            style={styles.input}
          />
          <TextInput
            label="Enter shift value"
            value={shift}
            onChangeText={(text) => setShift(text)}
            keyboardType="numeric"
            style={styles.input}
          />
          <Button mode="contained" onPress={handleDecrypt}>
            Decrypt
          </Button>
          {decryptedMessage && (
            <Text style={styles.result}>
              Decrypted Message: {decryptedMessage}
            </Text>
          )}
          <Button mode="text" onPress={showDialog}>
            Learn More
          </Button>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Decryption Process</Dialog.Title>
              <Dialog.Content>
                <Text>
                  Decryption is simply the reverse of encryption. If you know
                  the shift value used for encryption, you can decrypt the
                  message by shifting in the opposite direction. For instance,
                  if the message was encrypted with a shift of 3, you decrypt by
                  shifting back by 3.
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
    padding: 20,
    backgroundColor: "#f5f5f5",
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

export default FirstLevelPage4;
