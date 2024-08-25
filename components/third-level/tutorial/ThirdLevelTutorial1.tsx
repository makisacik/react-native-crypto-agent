/** @format */
//INTRODUCTION PAGE FOR ASYMMETRIC ALGORITHMS

import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Button, Dialog, Portal, Provider } from "react-native-paper";

const ThirdLevelTutorial1 = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Introduction to Asymmetric Algorithms</Text>
        <Image
          source={require("../../../assets/asymmetric.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          Asymmetric algorithms use a pair of keys for encryption and
          decryption: a public key and a private key. The public key is shared
          openly, while the private key is kept secret. This method enhances
          security, making it suitable for secure communications over the
          internet.
        </Text>
        <Text style={styles.text}>
          In this tutorial, you'll learn about common asymmetric algorithms like
          RSA and how they are used to secure data transmission.
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
            <Dialog.Title>Asymmetric Algorithms</Dialog.Title>
            <Dialog.Content>
              <Text style={styles.dialogText}>
                Asymmetric algorithms, also known as public-key cryptography,
                use a public key for encryption and a private key for
                decryption. This method ensures that even if the public key is
                known, the data cannot be decrypted without the corresponding
                private key.
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

export default ThirdLevelTutorial1;
