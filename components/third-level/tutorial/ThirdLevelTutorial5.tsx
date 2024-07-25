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

const ThirdLevelTutorial5 = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Diffie-Hellman Key Exchange</Text>
          <Text style={styles.text}>
            The Diffie-Hellman Key Exchange is a method of securely exchanging
            cryptographic keys over a public channel. It allows two parties to
            jointly establish a shared secret key, which can then be used for
            encrypted communication. The security of the Diffie-Hellman key
            exchange is owed to the difficulty of the solving discrete
            logarithms. To this effect, it is not used for encrypting/signing
            data but used to strengthen such props as HTTPS, SSH, VPN and so on.
          </Text>
          <Text style={styles.text}>
            A well-known example used to explain this algorithm involves two
            fictional characters, Alice and Bob.
          </Text>
          <Image
            source={require("../../../assets/diffie_hellman.png")}
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
              <Dialog.Title>About Diffie-Hellman</Dialog.Title>
              <Dialog.Content>
                <Text style={styles.dialogText}>
                  The Diffie-Hellman Key Exchange is one of the first public-key
                  protocols and is still widely used today. It enables two
                  parties to generate a shared secret key, even if they have
                  never met in person, making it a fundamental component of many
                  cryptographic systems. The famous example involving Alice and
                  Bob demonstrates how two parties can create a shared secret
                  over an insecure channel.
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
    height: 200,
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

export default ThirdLevelTutorial5;
