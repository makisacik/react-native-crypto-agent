/** @format */

import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
} from "react-native";
import { Text, Button, Dialog, Portal, Provider } from "react-native-paper";

const { width } = Dimensions.get("window");
const containerWidth = width * 0.9;

const FourthLevelTutorial2 = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>MD5</Text>
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.bold}>MD5</Text> is a hash function that
            produces a <Text style={styles.bold}>128-bit hash value</Text>.
            Created by Ronald Rivest in 1991, it was widely used for ensuring{" "}
            <Text style={styles.bold}>data integrity</Text>.
          </Text>
          <Text style={styles.text}>
            However, MD5 has vulnerabilities, especially to{" "}
            <Text style={styles.bold}>collision attacks</Text> where different
            inputs generate the same hash. Despite this, it’s still used in some
            cases, primarily for{" "}
            <Text style={styles.bold}>verifying file integrity</Text>.
          </Text>
          <Animated.View
            style={{ ...styles.imageContainer, opacity: fadeAnim }}
          >
            <Image
              source={require("../../../assets/data_integrity.png")}
              style={styles.image}
            />
          </Animated.View>
          <Button
            mode="text"
            onPress={showDialog}
            labelStyle={styles.buttonLabel}
          >
            Learn More
          </Button>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Ronald Rivest</Dialog.Title>
              <Dialog.Content>
                <Text style={styles.dialogText}>
                  Ronald Rivest is the cryptographer who invented the Rivest
                  Cipher (RC) series, including MD5. His contributions to
                  cryptography have been fundamental in shaping secure data
                  practices.
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
  contentContainer: {
    padding: 20,
  },
  container: {
    width: containerWidth,
    alignSelf: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "UbuntuBold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
    color: "#555",
    marginBottom: 15,
  },
  bold: {
    fontFamily: "UbuntuBold",
  },
  imageContainer: {
    marginTop: 20,
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
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

export default FourthLevelTutorial2;
