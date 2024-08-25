/** @format */
// AES TUTORIAL PAGE

import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { Text, Button, Dialog, Portal, Provider } from "react-native-paper";
import AESDiagram from "./AESDiagram";

const SecondLevelTutorial3 = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Advanced Encryption Standard (AES)</Text>
          <Text style={styles.text}>
            The Advanced Encryption Standard (AES) is a symmetric encryption
            algorithm that is widely used across the globe. It encrypts data in
            blocks of 128 bits using keys of 128, 192, or 256 bits. It is a
            secure option to go for{" "}
            <Text style={styles.boldText}>performance and simplicity</Text>.
          </Text>
          <AESDiagram />
          <Button
            mode="text"
            onPress={showDialog}
            labelStyle={styles.buttonTextLabel}
          >
            Learn More
          </Button>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>About AES</Dialog.Title>
              <Dialog.Content>
                <Text style={styles.dialogText}>
                  AES is a strong encryption algorithm used by governments and
                  organizations worldwide. It provides robust security and has
                  been adopted as the encryption standard by the U.S.
                  government.
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
  boldText: {
    fontWeight: "bold",
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

export default SecondLevelTutorial3;
