/** @format */
//PAGE FOR THE ECC ALGORITHM TUTORIAL

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

const ThirdLevelTutorial4 = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Elliptic Curve Cryptography (ECC)</Text>
          <Text style={styles.text}>
            Elliptic Curve Cryptography (ECC) is a public-key cryptosystem that
            is based on the algebraic structure of elliptic curves over finite
            fields. ECC allows for smaller keys compared to non-ECC cryptography
            to provide equivalent security.
          </Text>
          <Image
            source={require("../../../assets/ecc_graph.png")}
            style={styles.image}
          />
          <Button
            mode="text"
            onPress={showDialog}
            labelStyle={styles.buttonTextLabel}
          >
            Learn More
          </Button>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>About ECC</Dialog.Title>
              <Dialog.Content>
                <Text style={styles.dialogText}>
                  ECC stands for Elliptic Curve Cryptography, which provides
                  high security with smaller key sizes. It is widely used in
                  modern encryption protocols and offers advantages in terms of
                  efficiency and security.
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
  image: {
    width: "100%",
    height: 250,
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

export default ThirdLevelTutorial4;
