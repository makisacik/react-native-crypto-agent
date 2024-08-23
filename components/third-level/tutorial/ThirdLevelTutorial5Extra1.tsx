/** @format */
//PAGE FOR ALICE AND BOB EXAMPLE OF DIFFIE-HELLMAN KEY EXCHANGE

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import { Text, Button, Provider } from "react-native-paper";
import Conversation from "../../Conversation";

const ThirdLevelTutorial5Extra1 = () => {
  const [step, setStep] = useState(0);
  const [showConversation, setShowConversation] = useState(true);
  const [showFinalConversation, setShowFinalConversation] = useState(false);
  const [stepsFinished, setStepsFinished] = useState(false);

  const steps = [
    {
      text: "Two parties, Bob and Alice, agree on a large prime number p and a base g (which is a primitive root modulo p). These values are public and can be shared openly.",
      image: [
        require("../../../assets/alice.png"),
        require("../../../assets/bob.png"),
      ],
    },
    {
      text: "Bob chooses a secret integer x (private key) and computes A = g^x mod[p] (public key) and sends A to Alice.",
      image: [require("../../../assets/bob.png")],
    },
    {
      text: "Alice chooses a secret integer y (private key) and computes B = g^y mod[p] (public key) and sends B to Bob.",
      image: [require("../../../assets/alice.png")],
    },
    {
      text: "Both values are shared. Now Bob computes the key as Key = B^x mod[p], Alice computes it as Key = A^y mod[p].",
      image: [
        require("../../../assets/alice.png"),
        require("../../../assets/bob.png"),
      ],
    },
    {
      text: "Alice and Bob are now able to calculate the same secret key, since s = g^(xy) and s = g^(yx) are the same values.",
      image: [
        require("../../../assets/alice.png"),
        require("../../../assets/bob.png"),
      ],
    },
    {
      text: "Using this key now they are able to encrypt and decrypt the messages which ensures the secure communication between them.",
      image: [
        require("../../../assets/alice.png"),
        require("../../../assets/bob.png"),
      ],
    },
  ];

  const nextStep = () => {
    if (step === steps.length - 1) {
      setStepsFinished(true);
    } else {
      setStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    }
  };

  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 0));

  const handleConversationFinish = () => {
    setShowConversation(false);
  };

  useEffect(() => {
    if (stepsFinished) {
      setShowFinalConversation(true);
    }
  }, [stepsFinished]);

  const handleFinalConversationFinish = () => {
    setShowFinalConversation(false);
  };

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {showConversation && (
            <Conversation
              level="ThirdLevel"
              conversationNumber={14}
              onFinish={handleConversationFinish}
            />
          )}
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Diffie-Hellman Key Exchange</Text>
            <View style={styles.imageContainer}>
              {steps[step].image.map((img, index) => (
                <Image key={index} source={img} style={styles.image} />
              ))}
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{steps[step].text}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                mode="text"
                onPress={prevStep}
                labelStyle={styles.buttonTextLabel}
                disabled={step === 0}
              >
                Previous
              </Button>
              <Button
                mode="text"
                onPress={nextStep}
                labelStyle={styles.buttonTextLabel}
                disabled={step === steps.length - 1 && stepsFinished}
              >
                Next
              </Button>
            </View>
          </ScrollView>
          {showFinalConversation && (
            <Conversation
              level="ThirdLevel"
              conversationNumber={15}
              onFinish={handleFinalConversationFinish}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "UbuntuBold",
    marginBottom: 10,
    textAlign: "center",
  },
  textContainer: {
    minHeight: 100,
    justifyContent: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
    textAlign: "center",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonTextLabel: {
    fontSize: 14,
    fontFamily: "UbuntuRegular",
  },
});

export default ThirdLevelTutorial5Extra1;
