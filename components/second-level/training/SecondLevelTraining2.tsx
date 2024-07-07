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

const SecondLevelTraining2 = ({
  navigation,
  onNext,
}: {
  navigation: any;
  onNext: () => void;
}) => {
  const [showFirstConversation, setShowFirstConversation] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showSecondConversation, setShowSecondConversation] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const fadeAnim = useSharedValue(0);

  const handleConversation4Finish = () => {
    setShowFirstConversation(false);
    setShowIcon(true);
    fadeAnim.value = withTiming(1, { duration: 1000 }, () => {
      runOnJS(setShowSecondConversation)(true);
    });
  };

  const handleConversation5Finish = () => {
    setShowSecondConversation(false);
    setShowNextButton(true);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  });

  return (
    <View style={styles.container}>
      {showFirstConversation && (
        <Conversation
          level="SecondLevel"
          conversationNumber={7}
          onFinish={handleConversation4Finish}
        />
      )}
      {showIcon && (
        <Animated.View style={[styles.iconContainer, animatedStyle]}>
          <Image
            source={require("../../../assets/large_files.png")}
            style={styles.icon}
          />
        </Animated.View>
      )}
      {showSecondConversation && (
        <Conversation
          level="SecondLevel"
          conversationNumber={8}
          onFinish={handleConversation5Finish}
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
  iconContainer: {
    position: "absolute",
    top: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
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

export default SecondLevelTraining2;
