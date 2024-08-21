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

const FourthLevelTraining2 = ({ onNext }: { onNext: () => void }) => {
  const [showConversation1, setShowConversation1] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [showConversation2, setShowConversation2] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const fadeAnim = useSharedValue(0);

  const handleConversation1Finish = () => {
    setShowConversation1(false);
    setShowImage(true);
    fadeAnim.value = withTiming(1, { duration: 1000 }, () => {
      runOnJS(setShowConversation2)(true);
    });
  };

  const handleConversation2Finish = () => {
    setShowConversation2(false);
    setShowNextButton(true);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  });

  return (
    <View style={styles.container}>
      {showConversation1 && (
        <Conversation
          level="FourthLevel"
          conversationNumber={6}
          onFinish={handleConversation1Finish}
        />
      )}
      {showImage && (
        <Animated.View style={[styles.imageContainer, animatedStyle]}>
          <Image
            source={require("../../../assets/data-transmission.png")}
            style={styles.image}
          />
        </Animated.View>
      )}
      {showConversation2 && (
        <Conversation
          level="FourthLevel"
          conversationNumber={7}
          onFinish={handleConversation2Finish}
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

export default FourthLevelTraining2;
