/** @format */

import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import {
  Text,
  Provider,
  Dialog,
  Portal,
  Button,
  IconButton,
} from "react-native-paper";

const { width } = Dimensions.get("window");
const containerWidth = width * 0.9;

const points = [
  {
    title: "Block Ciphers",
    text: "Block ciphers operate on fixed-size blocks of plaintext, typically 64 or 128 bits, and transform them into blocks of ciphertext of the same size using a symmetric key. Examples include AES, DES, and Triple DES.",
    extraInfo:
      "AES is widely appreciated for its high level of reliability and is amongst one of the most secure forms of encryption mechanisms. AES works in 128-bit blocks and is implemented for 128, 192, and 256 bit keys. DES was one of the first popular algorithms but is now considered insecure. Triple DES enhances security by applying DES three times.",
  },
  {
    title: "Stream Ciphers",
    text: "Stream ciphers encrypt data one bit or byte at a time, making them ideal for real-time data processing. Examples include RC4 and ChaCha20.",
    extraInfo:
      "RC4 is known for its simplicity and speed but has been found to have several vulnerabilities. ChaCha20 offers high security and good performance, making it suitable for applications like TLS and video encryption.",
  },
];

const SecondLevelTutorial2 = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<{
    title: string;
    text: string;
    extraInfo: string;
  } | null>(null);
  const animationValues = useRef(
    points.map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    const animations = points.map((_, index) =>
      Animated.timing(animationValues[index], {
        toValue: 1,
        duration: 500,
        delay: index * 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      })
    );

    Animated.stagger(200, animations).start();
  }, []);

  const showDialog = (point: {
    title: string;
    text: string;
    extraInfo: string;
  }) => {
    setSelectedPoint(point);
    setDialogVisible(true);
  };

  const hideDialog = () => {
    setDialogVisible(false);
    setSelectedPoint(null);
  };

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.outerContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Types of Symmetric Algorithms</Text>
            <Text style={styles.introText}>
              Symmetric functions are divided into two categories: Block Ciphers
              and Stream Ciphers. Each type has its own unique method of
              encrypting data and is used in different applications.
            </Text>
            {points.map((point, index) => (
              <Animated.View
                key={index}
                style={[
                  styles.pointListItem,
                  {
                    opacity: animationValues[index],
                    transform: [
                      {
                        scale: animationValues[index].interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.8, 1],
                        }),
                      },
                      {
                        translateY: animationValues[index].interpolate({
                          inputRange: [0, 1],
                          outputRange: [20, 0],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.subtitle}>{point.title}</Text>
                  <Text style={styles.text}>{point.text}</Text>
                </View>
                <IconButton
                  icon="information"
                  size={20}
                  onPress={() => showDialog(point)}
                  style={styles.infoButton}
                />
              </Animated.View>
            ))}
          </ScrollView>
          <Portal>
            <Dialog visible={dialogVisible} onDismiss={hideDialog}>
              <Dialog.Title>{selectedPoint?.title}</Dialog.Title>
              <Dialog.Content>
                <Text style={styles.dialogExtraInfo}>
                  {selectedPoint?.extraInfo}
                </Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Close</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  scrollContainer: {
    padding: 10,
    alignItems: "center",
  },
  introText: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
    marginVertical: 20,
    textAlign: "center",
    color: "#333",
  },
  title: {
    fontSize: 24,
    fontFamily: "UbuntuBold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "UbuntuBold",
    marginBottom: 5,
    color: "#555",
  },
  text: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
    color: "#555",
  },
  pointListItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    width: containerWidth,
  },
  textContainer: {
    flex: 1,
  },
  infoButton: {
    marginLeft: "auto",
  },
  dialogExtraInfo: {
    fontSize: 14,
    fontFamily: "UbuntuRegular",
    color: "#777",
  },
});

export default SecondLevelTutorial2;
