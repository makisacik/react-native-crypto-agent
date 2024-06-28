/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { getQuestions } from "../utils/QuestionManager";
import { Ionicons } from "@expo/vector-icons";
import { ProgressBar, useTheme, Card } from "react-native-paper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { useScore } from "../context/ScoreContext"; // Import useScore hook

const QuestionController = ({
  route,
  navigation,
  onNext,
}: {
  route: any;
  navigation: any;
  onNext: () => void;
}) => {
  const { level } = route.params;
  const questions = getQuestions(level);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [mistakeMade, setMistakeMade] = useState(false);
  const [scoreUpdated, setScoreUpdated] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [animationSource, setAnimationSource] = useState(null);
  const theme = useTheme();
  const { addScore } = useScore();

  const opacity = useSharedValue(1);

  if (questions.length === 0) return null;

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      fadeOut();
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption("");
        setIsAnswerCorrect(false);
        setAnimationSource(null);
        setMistakeMade(false);
        setScoreUpdated(false);
        fadeIn();
      }, 200);
    } else {
      onNext();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      fadeOut();
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setSelectedOption("");
        setIsAnswerCorrect(false);
        setAnimationSource(null);
        setMistakeMade(false);
        setScoreUpdated(false);
        fadeIn();
      }, 200);
    }
  };

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    if (value === currentQuestion.answer) {
      setIsAnswerCorrect(true);
      setAnimationSource(require("../assets/success-animation.json"));
      if (!scoreUpdated) {
        addScore(mistakeMade ? 10 : 15);
        setScoreUpdated(true);
      }
    } else {
      setIsAnswerCorrect(false);
      setMistakeMade(true);
      setAnimationSource(require("../assets/incorrect-animation.json"));
    }
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const fadeOut = () => {
    opacity.value = withSpring(0, {
      damping: 10,
      stiffness: 100,
    });
  };

  const fadeIn = () => {
    opacity.value = withSpring(1, {
      damping: 10,
      stiffness: 100,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const progress = (currentQuestionIndex + 1) / questions.length;

  const handleDismissAnimation = () => {
    setAnimationSource(null);
  };

  return (
    <TouchableWithoutFeedback onPress={handleDismissAnimation}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? undefined : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <View style={styles.contentContainer}>
          <Animated.View style={[styles.content, animatedStyle]}>
            <Card style={styles.questionCard}>
              <Card.Content>
                <Text style={styles.questionText}>
                  {currentQuestion.question}
                </Text>
              </Card.Content>
            </Card>
            <View>
              {currentQuestion.options.map((option: string, index: number) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleOptionSelect(option)}
                >
                  <Card style={styles.optionCard}>
                    <Card.Content style={styles.optionContent}>
                      <Ionicons
                        name={
                          selectedOption === option
                            ? "radio-button-on"
                            : "radio-button-off"
                        }
                        size={24}
                        color={
                          selectedOption === option
                            ? theme.colors.primary
                            : "gray"
                        }
                      />
                      <Text style={styles.optionText}>{option}</Text>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>
          {animationSource && (
            <LottieView
              key={animationKey}
              source={animationSource}
              autoPlay
              loop={false}
              style={styles.animation}
              onAnimationFinish={() => setAnimationSource(null)}
            />
          )}
        </View>
        <ProgressBar
          progress={progress}
          color={theme.colors.primary}
          style={styles.progressBar}
        />
        <View style={styles.navigationContainer}>
          <TouchableOpacity
            onPress={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            <Ionicons
              name="arrow-back"
              size={32}
              color={currentQuestionIndex === 0 ? "gray" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext} disabled={!isAnswerCorrect}>
            <Ionicons
              name="arrow-forward"
              size={32}
              color={!isAnswerCorrect ? "gray" : "black"}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  questionCard: {
    marginBottom: 20,
    width: "100%",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  optionCard: {
    width: "100%",
    marginBottom: 10,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
  },
  progressBar: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
  animation: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -100 }, { translateY: -100 }],
    width: 200,
    height: 200,
  },
});

export default QuestionController;
