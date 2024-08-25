/** @format */
// INTRODUCTION TO SYMMETRIC ALGORITHMS

import React, { useState } from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import { Text, Button, Dialog, Portal, Provider } from "react-native-paper";

const SecondLevelTutorial1 = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Introduction to Symmetric Algorithms</Text>
        <Image
          source={require("../../../assets/symmetric.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          Symmetric algorithms are a type of encryption where the same key is
          used for both encryption and decryption. This method is fast and
          efficient, making it ideal for encrypting large amounts of data. In
          this tutorial, you'll learn about some common symmetric algorithms
          like AES and DES.
        </Text>
        <Text style={styles.text}>
          Symmetric algorithms are widely used in various applications such as
          securing internet communications, protecting sensitive data, and more.
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
            <Dialog.Title>Symmetric Algorithms</Dialog.Title>
            <Dialog.Content>
              <Text style={styles.dialogText}>
                Symmetric algorithms use a single key for both encryption and
                decryption. This key must be kept secret, as anyone with the key
                can decrypt the data. Popular symmetric algorithms include the
                Advanced Encryption Standard (AES) and the Data Encryption
                Standard (DES).
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
  buttonLabel: {
    fontSize: 14,
    fontFamily: "UbuntuRegular",
  },
  dialogText: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
  },
});

export default SecondLevelTutorial1;
