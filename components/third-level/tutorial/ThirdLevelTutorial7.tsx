/** @format */

import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Animated,
  Easing,
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
    title: "Necessity",
    text: "Essential for creating secure encryption and decryption processes in asymmetric cryptography.",
  },
  {
    title: "Trapdoor",
    text: "A special key that makes it easy to invert the function, allowing decryption.",
  },
  {
    title: "Usage in RSA",
    text: "Used in the RSA algorithm to securely encrypt and decrypt data.",
  },
];

const ThirdLevelTutorial7 = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<{
    title: string;
    text: string;
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

  const showDialog = (point: { title: string; text: string }) => {
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
          <View style={styles.container}>
            <Text style={styles.title}>
              Concept of the Trapdoor One-Way Function
            </Text>

            <Text style={styles.text}>
              A Trapdoor One-Way Function is easy to compute in one direction
              but hard to reverse without a special key. It's crucial in
              asymmetric cryptography for secure encryption and decryption. The
              "trapdoor" is the key that allows decryption.
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
          </View>
          <Portal>
            <Dialog visible={dialogVisible} onDismiss={hideDialog}>
              <Dialog.Title>{selectedPoint?.title}</Dialog.Title>
              <Dialog.Content>
                <Text>{selectedPoint?.text}</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: containerWidth,
    padding: 10,
    alignSelf: "center",
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
    marginBottom: 10,
  },
  pointListItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    width: "100%",
  },
  textContainer: {
    flex: 1,
  },
  infoButton: {
    marginLeft: "auto",
  },
});

export default ThirdLevelTutorial7;
