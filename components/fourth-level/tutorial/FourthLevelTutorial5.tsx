/** @format */

import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Button, Dialog, Portal, Provider } from "react-native-paper";

const FourthLevelTutorial5 = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Understanding SHA-3</Text>
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.bold}>SHA-3 (Secure Hash Algorithm 3)</Text> is
            the latest member of the Secure Hash Algorithm family, published by
            NIST in 2015. Unlike its predecessors, SHA-3 is based on the Keccak
            cryptographic primitive and is designed to complement the SHA-2
            family rather than replace it.
          </Text>
          <Text style={styles.text}>
            SHA-3 produces hash values of different lengths, such as{" "}
            <Text style={styles.bold}>224, 256, 384, and 512 bits</Text>, making
            it versatile for various cryptographic applications. It is
            particularly robust against collision and pre-image attacks,
            ensuring strong security for modern cryptographic needs.
          </Text>
          <Image
            source={require("../../../assets/sponge-function.png")}
            style={styles.image}
          />
          <Text style={styles.imageCaption}>
            The Keccak Sponge Construction used in SHA-3
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
              <Dialog.Title>SHA-3 Features</Dialog.Title>
              <Dialog.Content>
                <Text style={styles.dialogText}>
                  SHA-3 was developed to offer an alternative in case of a
                  successful attack on SHA-2. Its design, based on the Keccak
                  sponge function, provides security even against quantum
                  computing threats, making it a future-proof choice in many
                  cryptographic applications.
                </Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog} labelStyle={styles.buttonLabel}>
                  Close
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "UbuntuBold",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
    marginBottom: 10,
    textAlign: "left",
  },
  bold: {
    fontFamily: "UbuntuBold",
    textAlign: "left",
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: "UbuntuRegular",
  },
  dialogText: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  imageCaption: {
    fontSize: 14,
    fontFamily: "UbuntuRegular",
    color: "#555",
    textAlign: "center",
  },
});

export default FourthLevelTutorial5;
