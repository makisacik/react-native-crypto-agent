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
import { Text, Provider, Button } from "react-native-paper";

const { width } = Dimensions.get("window");
const containerWidth = width * 0.9;

const algorithms = [
  {
    title: "MD5",
    text: "Generates a 128-bit hash value, historically significant but vulnerable to collision attacks.",
  },
  {
    title: "SHA-1",
    text: "Produces a 160-bit hash value, now largely deprecated due to security vulnerabilities.",
  },
  {
    title: "SHA-256",
    text: "Part of the SHA-2 family, produces a 256-bit hash value and is widely used in secure applications.",
  },
  {
    title: "SHA-3",
    text: "The newest hash algorithm, offering enhanced security with its sponge construction.",
  },
];

const FourthLevelTutorial1 = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [animationValues, setAnimationValues] = useState<Animated.Value[]>([]);

  const startAnimation = () => {
    const values = algorithms.map(() => new Animated.Value(0));
    setAnimationValues(values);

    const animations = algorithms.map((_, index) =>
      Animated.timing(values[index], {
        toValue: 1,
        duration: 500,
        delay: index * 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      })
    );

    Animated.stagger(200, animations).start();
  };

  const handleShowAlgorithms = () => {
    setShowIntro(false);
    startAnimation();
  };

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.outerContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {showIntro ? (
              <View style={styles.container}>
                <Text style={styles.title}>Introduction to Hash Functions</Text>

                <Text style={styles.text}>
                  Hash functions are extensively used in cryptography where they
                  convert an input into a fixed-length string, typically
                  resembling a random sequence of numbers. Hash functions are
                  designed to be a one-way process, meaning it is infeasible to
                  reverse the process and retrieve the original input from the
                  hash. This property makes them especially useful for ensuring
                  data integrity and authenticity.
                </Text>
                <Button
                  mode="contained"
                  onPress={handleShowAlgorithms}
                  style={styles.showAlgorithmsButton}
                >
                  Show Algorithms
                </Button>
              </View>
            ) : (
              <>
                <Text style={styles.subtitle}>Common Hash Algorithms</Text>
                {algorithms.map((algorithm, index) => (
                  <Animated.View
                    key={index}
                    style={[
                      styles.pointListItem,
                      {
                        opacity: animationValues[index],
                        transform: [
                          {
                            scale: animationValues[index]?.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0.8, 1],
                            }),
                          },
                          {
                            translateY: animationValues[index]?.interpolate({
                              inputRange: [0, 1],
                              outputRange: [20, 0],
                            }),
                          },
                        ],
                      },
                    ]}
                  >
                    <View style={styles.textContainer}>
                      <Text style={styles.algorithmTitle}>
                        {algorithm.title}
                      </Text>
                      <Text style={styles.text}>{algorithm.text}</Text>
                    </View>
                  </Animated.View>
                ))}
              </>
            )}
          </ScrollView>
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
    padding: 20,
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
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  algorithmTitle: {
    fontSize: 18,
    fontFamily: "UbuntuBold",
    marginBottom: 5,
    color: "#555",
  },
  text: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
    color: "#555",
    marginBottom: 15,
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
  showAlgorithmsButton: {
    marginTop: 20,
  },
});

export default FourthLevelTutorial1;
