/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import { Text, Button, Dialog, Portal, Provider } from "react-native-paper";

const ThirdLevelTutorial6 = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Digital Signature Algorithm (DSA)</Text>
          <Text style={styles.text}>
            The Digital Signature Algorithm (DSA) is a federal information
            processing standard for digital signatures. Digital signatures are
            used to authenticate the integrity and origin of a message or
            document.
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/digital_signatures.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <Button
            mode="text"
            onPress={showDialog}
            labelStyle={styles.buttonTextLabel}
          >
            Learn More
          </Button>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>About DSA</Dialog.Title>
              <Dialog.Content>
                <Text style={styles.dialogText}>
                  The Digital Signature Algorithm (DSA) is a public key
                  algorithm used for generating a digital signature. It ensures
                  that the signed message was not altered and verifies the
                  authenticity of the sender. DSA is widely used in various
                  security protocols and applications.
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
  bold: {
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
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

export default ThirdLevelTutorial6;
