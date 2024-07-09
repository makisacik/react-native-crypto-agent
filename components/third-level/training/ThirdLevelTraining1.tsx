/** @format */

import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { Button } from "react-native-paper";
import Conversation from "../../Conversation";
import { useScore } from "../../../context/ScoreContext";

const ThirdLevelTraining1 = ({
  navigation,
  onNext,
}: {
  navigation: any;
  onNext: () => void;
}) => {
  const [showConversation2, setShowConversation2] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [showConversation3, setShowConversation3] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const fadeAnim = useSharedValue(0);
  const { resetScore } = useScore();

  useEffect(() => {
    resetScore();
  }, []);

  const handleConversation2Finish = () => {
    setShowConversation2(false);
    setShowImage(true);
    fadeAnim.value = withTiming(1, { duration: 1000 }, () => {
      runOnJS(setShowConversation3)(true);
    });
  };

  const handleConversation3Finish = () => {
    setShowConversation3(false);
    setShowNextButton(true);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  });

  return (
    <View style={styles.container}>
      {showConversation2 && (
        <Conversation
          level="ThirdLevel"
          conversationNumber={2}
          onFinish={handleConversation2Finish}
        />
      )}
      {showImage && (
        <Animated.View style={[styles.imageContainer, animatedStyle]}>
          <Image
            source={require("../../../assets/computer.png")}
            style={styles.image}
          />
        </Animated.View>
      )}
      {showConversation3 && (
        <Conversation
          level="ThirdLevel"
          conversationNumber={3}
          onFinish={handleConversation3Finish}
        />
      )}
      {showNextButton && (
        <View style={styles.nextButtonContainer}>
          <Button mode="contained" onPress={onNext} style={styles.nextButton}>
            Continue
          </Button>
        </View>
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
  imageContainer: {
    position: "absolute",
    top: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  nextButtonContainer: {
    position: "absolute",
    bottom: 150,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  nextButton: {
    alignSelf: "center",
  },
});

export default ThirdLevelTraining1;
