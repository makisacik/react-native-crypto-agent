/** @format */
// AES KEY EXPANSION DIAGRAM TUTORIAL PAGE

import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Button } from "react-native-paper";
import Conversation from "../../Conversation";

const SecondLevelTutorial3Extra2 = ({
  navigation,
  onNext,
}: {
  navigation: any;
  onNext: () => void;
}) => {
  const [showConversation, setShowConversation] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const fadeAnim = useSharedValue(0);

  const handleConversationFinish = () => {
    setShowConversation(false);
    setShowImage(true);
    fadeAnim.value = withTiming(1, { duration: 1000 });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  });

  return (
    <View style={styles.container}>
      {showConversation && (
        <View style={styles.conversationContainer}>
          <Conversation
            level="SecondLevel"
            conversationNumber={13}
            onFinish={handleConversationFinish}
          />
        </View>
      )}
      {showImage && (
        <Animated.View style={[styles.imageContainer, animatedStyle]}>
          <Text style={styles.title}>AES Key Expansion Diagram</Text>
          <Image
            source={require("../../../assets/aes-key.png")}
            style={styles.image}
          />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  conversationContainer: {
    flex: 1,
    width: "100%",
  },
  imageContainer: {
    width: "90%",
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: "UbuntuBold",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    marginBottom: 20,
  },
  nextButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  nextButton: {
    alignSelf: "center",
  },
});

export default SecondLevelTutorial3Extra2;
