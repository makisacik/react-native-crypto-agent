/** @format */

import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Button, Dialog, Portal, Provider } from "react-native-paper";

const FourthLevelTutorial3 = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Understanding SHA-1</Text>
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.bold}>SHA-1 (Secure Hash Algorithm 1)</Text> is
            a hash function developed by the NSA, published by NIST in 1993. It
            produces a <Text style={styles.bold}>160-bit hash</Text> and was
            widely used in{" "}
            <Text style={styles.bold}>secure data transmissions</Text>. However,
            it has vulnerabilities, particularly to{" "}
            <Text style={styles.bold}>collision attacks</Text>, leading to its
            replacement by stronger hash functions.
          </Text>
          <Text style={styles.text}>
            SHA-1 is now considered insecure due to advancements in
            computational power, which have made finding collisions feasible.
            Organizations have transitioned to more secure alternatives.
          </Text>
          <Image
            source={require("../../../assets/sha-1.png")}
            style={styles.image}
          />
          <Text style={styles.imageCaption}>
            Usage of SHA-1 in Original Paper
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
              <Dialog.Title>SHA-1 Vulnerabilities</Dialog.Title>
              <Dialog.Content>
                <Text style={styles.dialogText}>
                  SHA-1, once widely used, is now considered insecure due to its
                  susceptibility to collision attacks. This weakness has led to
                  its deprecation in favor of stronger algorithms like those in
                  the SHA-2 family.
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
    marginTop: 20,
  },
  imageCaption: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: "UbuntuRegular",
    color: "#555",
    textAlign: "center",
  },
});

export default FourthLevelTutorial3;
