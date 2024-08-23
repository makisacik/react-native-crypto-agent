/** @format */
//PAGE FOR ASYMMETRIC VS SYMMETRIC CRYPTOGRAPHY COMPARISON

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
    title: "Key Management",
    text: "Uses public and private keys, no need for secure key exchange.",
  },
  {
    title: "Key Distribution",
    text: "Public key can be shared openly, reducing risk.",
  },
  {
    title: "Security",
    text: "Public key sharing does not compromise private key security.",
  },
  {
    title: "Scalability",
    text: "Better for large networks with many users.",
  },
  {
    title: "Digital Signatures",
    text: "Supports authentication, integrity, and non-repudiation.",
  },
];

const ThirdLevelTutorial2 = () => {
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
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>
              Asymmetric vs Symmetric Cryptography
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
  },
  scrollContainer: {
    padding: 10,
    alignItems: "center",
  },
  container: {
    width: containerWidth,
    alignSelf: "center",
    alignItems: "center",
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
});

export default ThirdLevelTutorial2;
