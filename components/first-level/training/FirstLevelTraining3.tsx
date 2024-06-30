/** @format */

import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import { Button, Card, Paragraph } from "react-native-paper";
import Conversation from "../../Conversation";
import Character from "../../Character";
import { CommonActions } from "@react-navigation/native";
import { useScore } from "../../../context/ScoreContext";
import Icon from "react-native-vector-icons/FontAwesome";

const FirstLevelTraining3 = ({
  navigation,
  onNext,
}: {
  navigation: any;
  onNext: () => void;
}) => {
  const [showConversation, setShowConversation] = useState(false);
  const [showExclamation, setShowExclamation] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const { score } = useScore();

  const maxScore = 150;
  const numberOfQuestions = 10;

  const handleCharacterClick = () => {
    setShowConversation(true);
    setShowExclamation(false);
  };

  const handleConversationFinish = () => {
    setShowConversation(false);
    setShowButton(true);
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
    <View style={styles.container}>
      <View style={styles.characterWrapper}>
        <Character
          image={require("../../../assets/trainer.png")}
          name="Trainer"
          onPress={handleCharacterClick}
        />
        {showExclamation && (
          <View style={styles.exclamationMark}>
            <Text style={styles.exclamationText}>!</Text>
          </View>
        )}
      </View>
      <View style={styles.summaryWrapper}>
        <Card style={styles.summaryCard}>
          <Card.Content>
            <Text style={styles.summaryTitle}>Training Summary</Text>
            <View style={styles.summaryTextContainer}>
              <Paragraph style={styles.summaryText}>
                Highest Score Possible: {maxScore}
              </Paragraph>
              <Icon name="star" size={15} color="#e28743" style={styles.icon} />
            </View>
            <View style={styles.summaryTextContainer}>
              <Paragraph style={styles.summaryText}>
                Your Score: {score}
              </Paragraph>
              <Icon name="star" size={15} color="#e28743" style={styles.icon} />
            </View>
            <Paragraph style={styles.summaryText}>
              Number of Questions: {numberOfQuestions}
            </Paragraph>
          </Card.Content>
        </Card>
        {showButton && (
          <Animated.View style={{ ...styles.button, opacity: buttonOpacity }}>
            <Button mode="contained" onPress={handleCompleteTutorial}>
              Complete the training
            </Button>
          </Animated.View>
        )}
      </View>
      {showConversation && (
        <Conversation
          level="FirstLevel"
          conversationNumber="5"
          onFinish={handleConversationFinish}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingTop: 100,
  },
  characterWrapper: {
    alignItems: "center",
    marginBottom: 50,
  },
  exclamationMark: {
    position: "absolute",
    top: -10,
    right: 30,
    backgroundColor: "red",
    borderRadius: 15,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  exclamationText: {
    color: "white",
    fontWeight: "bold",
  },
  summaryWrapper: {
    width: "80%",
    alignItems: "center",
  },
  summaryCard: {
    width: "100%",
    elevation: 5,
    marginBottom: 50,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  summaryTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  summaryText: {
    fontSize: 16,
  },
  icon: {
    marginLeft: 5,
  },
  button: {
    width: "70%",
  },
});

export default FirstLevelTraining3;
