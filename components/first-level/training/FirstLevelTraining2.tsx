/** @format */
// TRAINING PAGE TO DISPLAY CAESAR CIPHER DECRYPTION QUESTION

import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Button } from "react-native-paper";
import Conversation from "../../Conversation";
import CaesarCipherQuestion from "../../CaesarCipherQuestion";
import { useScore } from "../../../context/ScoreContext";

const FirstLevelTraining2 = ({
  navigation,
  onNext,
}: {
  navigation: any;
  onNext: () => void;
}) => {
  const [showConversation, setShowConversation] = useState(true);
  const [showCypherText, setShowCypherText] = useState(true);
  const [showCipherQuestion, setShowCipherQuestion] = useState(false);
  const [showNextLevelButton, setShowNextLevelButton] = useState(false);
  const [mistakeMade, setMistakeMade] = useState(false);
  const [scoreUpdated, setScoreUpdated] = useState(false);
  const fadeAnim = useSharedValue(0);
  const { addScore } = useScore();

  const handleConversationFinish = () => {
    setShowConversation(false);
    setShowCypherText(false);
    setShowCipherQuestion(true);
    fadeAnim.value = withTiming(1, { duration: 1000 });
  };

  const handleCorrectAnswer = () => {
    if (!scoreUpdated) {
      if (mistakeMade) {
        addScore(10);
      } else {
        addScore(20);
      }
      setScoreUpdated(true);
    }
    setShowNextLevelButton(true);
  };

  const handleMistake = () => {
    setMistakeMade(true);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  });

  return (
    <View style={styles.container}>
      {showConversation && (
        <Conversation
          level="FirstLevel"
          conversationNumber={4}
          onFinish={handleConversationFinish}
        />
      )}
      {showCypherText && (
        <Image
          source={require("../../../assets/cypher-text.png")}
          style={styles.image}
        />
      )}
      {showCipherQuestion && (
        <Animated.View style={[styles.cipherContainer, animatedStyle]}>
          <CaesarCipherQuestion
            isEncoding={false}
            text="vxqgdb"
            onCorrectAnswer={handleCorrectAnswer}
            onMistake={handleMistake}
            shift={3}
          />
          {showNextLevelButton && (
            <View style={styles.nextButtonContainer}>
              <Button
                mode="contained"
                onPress={onNext}
                style={styles.nextButton}
              >
                Continue
              </Button>
            </View>
          )}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  cipherContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    padding: 5,
  },
  nextButtonContainer: {
    position: "absolute",
    bottom: 170,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  nextButton: {
    alignSelf: "center",
  },
});

export default FirstLevelTraining2;
