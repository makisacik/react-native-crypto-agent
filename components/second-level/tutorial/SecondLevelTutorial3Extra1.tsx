/** @format */
// AES KEY EXPANSION TUTORIAL PAGE

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
import { Text, Provider } from "react-native-paper";
import Conversation from "../../Conversation";

const { width } = Dimensions.get("window");
const containerWidth = width * 0.9;

const steps = [
  "Initialization: Start with the original key.",
  "Round Constant (Rcon): Apply round constants.",
  "SubWord and RotWord: Apply byte substitution and rotation.",
  "XOR Operation: Combine the transformed word with the previous round key.",
  "This process ensures that each round of encryption uses a unique key derived from the original key.",
];

const SecondLevelTutorial3Extra1 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showConversation, setShowConversation] = useState(true);
  const animationValues = useRef(
    steps.map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    if (currentStep > 0) {
      Animated.timing(animationValues[currentStep - 1], {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  }, [currentStep]);

  const handleDialogueChange = (index: number) => {
    if (index <= steps.length) {
      setCurrentStep(index);
    }
  };

  const handleConversationFinish = () => {
    setShowConversation(false);
  };

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.outerContainer}>
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>AES Key Expansion</Text>
            <Text style={styles.text}>
              The key expansion process in AES involves generating a series of
              round keys from the initial key. These round keys are used in each
              round of the encryption process.
            </Text>
            <Text style={styles.sectionTitle}>Steps in Key Expansion:</Text>
            {steps.slice(0, currentStep).map((step, index) => (
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
                <Text style={styles.text}>
                  {index + 1}. {step}
                </Text>
              </Animated.View>
            ))}
          </ScrollView>
          {showConversation && (
            <View style={styles.conversationContainer}>
              <Conversation
                level="SecondLevel"
                conversationNumber={12}
                onDialogueChange={handleDialogueChange}
                onFinish={handleConversationFinish}
              />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "UbuntuBold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
    color: "#555",
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "UbuntuBold",
    marginTop: 10,
    marginBottom: 5,
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
  conversationContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default SecondLevelTutorial3Extra1;
