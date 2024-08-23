/** @format */
//PAGE FOR RSA ALGORITHM TUTORIAL

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { Text, Button, Dialog, Portal, Provider } from "react-native-paper";
import RSADiagram from "./RSADiagram";

const ThirdLevelTutorial3 = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>RSA Algorithm</Text>
          <Text style={styles.text}>
            The RSA algorithm is one of the first public-key cryptosystems and
            is widely used for secure data transmission. RSA involves a pair of
            keys: a public key, which is used to encrypt the data, and a private
            key, which is used to decrypt the data.
          </Text>
          <RSADiagram />
          <Button
            mode="text"
            onPress={showDialog}
            labelStyle={styles.buttonTextLabel}
          >
            Learn More
          </Button>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>About RSA</Dialog.Title>
              <Dialog.Content>
                <Text style={styles.dialogText}>
                  RSA stands for Rivest-Shamir-Adleman, the inventors of the
                  algorithm. It relies on the mathematical difficulty of
                  factoring large prime numbers, making it a robust choice for
                  encrypting sensitive data.
                </Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button
                  onPress={hideDialog}
                  labelStyle={styles.buttonTextLabel}
                >
                  Close
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </ScrollView>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "UbuntuBold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
    marginBottom: 10,
  },
  buttonTextLabel: {
    fontSize: 14,
    fontFamily: "UbuntuRegular",
  },
  dialogText: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
  },
});

export default ThirdLevelTutorial3;
