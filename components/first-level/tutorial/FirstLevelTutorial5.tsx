/** @format */
// LAST PAGE FOR THE FIRST LEVEL TUTORIAL

import React, { useState, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Text, Button, Provider } from "react-native-paper";
import LottieView from "lottie-react-native";
import Conversation from "../../Conversation";
import { CommonActions, useNavigation } from "@react-navigation/native";

const FirstLevelTutorial5 = () => {
  const navigation = useNavigation();
  const [showConversation, setShowConversation] = useState(true);
  const buttonOpacity = useRef(new Animated.Value(0)).current;

  const handleConversationFinish = () => {
    setShowConversation(false);
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleCompleteTutorial = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Home" }],
      })
    );
  };

  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>
            You successfully completed the tutorial!
          </Text>
          <LottieView
            source={require("../../../assets/success-animation.json")}
            autoPlay
            loop={false}
            style={styles.animation}
          />
        </View>
        <View style={styles.bottomContainer}>
          {showConversation ? (
            <View style={styles.conversationContainer}>
              <Conversation
                level="FirstLevel"
                conversationNumber={2}
                onFinish={handleConversationFinish}
              />
            </View>
          ) : (
            <Animated.View
              style={{ ...styles.buttonContainer, opacity: buttonOpacity }}
            >
              <Button mode="contained" onPress={handleCompleteTutorial}>
                Complete the tutorial
              </Button>
            </Animated.View>
          )}
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  animation: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  bottomContainer: {
    width: "100%",
    justifyContent: "flex-end",
  },
  conversationContainer: {
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  button: {
    width: "100%",
    marginBottom: 20,
  },
});

export default FirstLevelTutorial5;
