/** @format */

import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Button, Dialog, Portal, Provider } from "react-native-paper";
import LottieView from "lottie-react-native"; // Import Lottie

const FourthLevelTutorial4 = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>SHA-256</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>SHA-256</Text> is part of the{" "}
          <Text style={styles.bold}>SHA-2 family</Text> of hash functions, which
          also includes SHA-224, SHA-384, and SHA-512. SHA-256 specifically
          generates a <Text style={styles.bold}>256-bit</Text> hash value,
          making it more secure than earlier algorithms like SHA-1.
        </Text>
        <Text style={styles.text}>
          SHA-256 is widely used in various security applications and protocols,
          including <Text style={styles.bold}>TLS/SSL</Text> for securing web
          communications, <Text style={styles.bold}>digital signatures</Text>,
          and is notably used in <Text style={styles.bold}>Bitcoin</Text> and
          other cryptocurrencies for transaction verification.
        </Text>
        <Text style={styles.text}>
          The security of SHA-256 is assured as it is a cryptographic standard
          recommended by NIST. It is designed to resist{" "}
          <Text style={styles.bold}>collision</Text> and{" "}
          <Text style={styles.bold}>pre-image attacks</Text>, making it a
          trustworthy choice for secure encryption schemes.
        </Text>
        <LottieView
          source={require("../../../assets/bitcoin-animation.json")}
          style={styles.animation}
          autoPlay
          loop
          speed={0.5}
        />
        <Button
          mode="text"
          onPress={showDialog}
          labelStyle={styles.buttonLabel}
        >
          Learn More
        </Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>SHA-256 Details</Dialog.Title>
            <Dialog.Content>
              <Text style={styles.dialogText}>
                SHA-256, a member of the SHA-2 family, produces a 256-bit hash
                value. It's widely trusted for its security and is resistant to
                known cryptographic attacks, making it a staple in modern
                cryptography.
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
    flexGrow: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontFamily: "UbuntuBold",
    marginBottom: 10,
    textAlign: "center",
  },
  animation: {
    width: "100%",
    height: 200,
  },
  caption: {
    fontSize: 16,
    fontFamily: "UbuntuBold",
    textAlign: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
    textAlign: "left",
    marginBottom: 10,
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
});

export default FourthLevelTutorial4;
