/** @format */

import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";
import {
  Text,
  TextInput,
  Button,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";
import { encryptAES, decryptAES } from "../../../utils/CryptographyFunctions"; // Update the path as needed
import Conversation from "../../Conversation";
import { useScore } from "../../../context/ScoreContext"; // Import useScore hook

const { width } = Dimensions.get("window");
const containerWidth = width * 0.9;

const SecondLevelTutorial3 = () => {
  const [input, setInput] = useState("mymessage");
  const [key, setKey] = useState("mysecretkey");
  const [output, setOutput] = useState("");
  const [decryptedOutput, setDecryptedOutput] = useState("");
  const [visible, setVisible] = useState(false);
  const [showConversation, setShowConversation] = useState(false);
  const [conversationShown, setConversationShown] = useState(false); // New state to track if conversation has been shown
  const { resetScore } = useScore(); // Use the resetScore function

  useEffect(() => {
    resetScore(); // Reset the score when this component mounts
  }, []);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleEncrypt = () => {
    Keyboard.dismiss();
    const message = input || "mymessage";
    const encryptionKey = key || "mysecretkey";
    setInput(message);
    setKey(encryptionKey);
    const result = encryptAES(message, encryptionKey);
    setOutput(result);
    setDecryptedOutput("");
  };

  const handleDecrypt = () => {
    const result = decryptAES(output, key);
    setDecryptedOutput(result);
    if (!conversationShown) {
      setShowConversation(true);
      setConversationShown(true);
    }
  };

  const handleConversationFinish = () => {
    setShowConversation(false);
  };

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.title}>Encrypt a Message with AES</Text>
            <Text style={styles.text}>
              Enter your message and a key to see the encrypted result using
              AES.
            </Text>
            <TextInput
              label="Enter message"
              value={input}
              onChangeText={setInput}
              style={styles.input}
            />
            <TextInput
              label="Enter key"
              value={key}
              onChangeText={(text) => setKey(text)}
              style={[styles.input, styles.keyInput]}
            />
            <Button mode="contained" onPress={handleEncrypt}>
              Encrypt
            </Button>
            {output && (
              <>
                <Text style={styles.result}>Encrypted Message: {output}</Text>
                <Button
                  mode="contained"
                  onPress={handleDecrypt}
                  style={styles.decryptButton}
                >
                  Decrypt
                </Button>
                {decryptedOutput && (
                  <Text style={styles.result}>
                    Decrypted Message: {decryptedOutput}
                  </Text>
                )}
              </>
            )}
          </ScrollView>
          <View style={styles.learnMoreContainer}>
            <Button mode="text" onPress={showDialog}>
              Learn more
            </Button>
          </View>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>
                Can the same key produce different encrypted messages?
              </Dialog.Title>
              <Dialog.Content>
                <Text>
                  Yes due to the use of an random initialization vector or a
                  random salt vlue in the encryption process.
                </Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Close</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
          {showConversation && (
            <View style={styles.conversationContainer}>
              <Conversation
                level="SecondLevel"
                conversationNumber="1"
                onFinish={handleConversationFinish}
              />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scrollView: {
    width: containerWidth,
    padding: 10,
    flexGrow: 1,
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
  keyInput: {
    marginTop: 20,
  },
  result: {
    fontSize: 18,
    marginTop: 10,
    backgroundColor: "#e8e8e8",
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  decryptButton: {
    marginTop: 10,
  },
  learnMoreContainer: {
    width: containerWidth,
    padding: 10,
    justifyContent: "flex-end",
  },
  conversationContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
  },
});

export default SecondLevelTutorial3;
