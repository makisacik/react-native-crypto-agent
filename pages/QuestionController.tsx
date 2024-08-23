/** @format */
//QUESTION CONTROLLER. THE CONTROLLER WHICH DISPLAYS THE QUESTIONS AND HANDLES THE ANSWERS

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
import { useScore } from "../context/ScoreContext";

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
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [scoreUpdated, setScoreUpdated] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [animationSource, setAnimationSource] = useState(null);
  const [answerChecked, setAnswerChecked] = useState(false);
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
        setSelectedOptions([]);
        setAnimationSource(null);
        setScoreUpdated(false);
        setAnswerChecked(false);
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
        setSelectedOptions([]);
        setAnimationSource(null);
        setScoreUpdated(false);
        setAnswerChecked(false);
        fadeIn();
      }, 200);
    }
  };

  const handleOptionSelect = (value: string) => {
    if (!answerChecked) {
      if (currentQuestion.questionType === "multipleAnswer") {
        if (selectedOptions.includes(value)) {
          setSelectedOptions(
            selectedOptions.filter((option) => option !== value)
          );
        } else {
          setSelectedOptions([...selectedOptions, value]);
        }
      } else {
        setSelectedOptions([value]);
      }
    }
  };

  const handleCheckAnswer = () => {
    const isCorrect =
      currentQuestion.questionType === "multipleAnswer"
        ? selectedOptions.sort().toString() ===
          currentQuestion.answer.sort().toString()
        : selectedOptions[0] === currentQuestion.answer;
    if (isCorrect) {
      setAnimationSource(require("../assets/success-animation.json"));
      if (!scoreUpdated) {
        addScore(15);
        setScoreUpdated(true);
      }
    } else {
      setAnimationSource(require("../assets/incorrect-animation.json"));
    }
    setAnswerChecked(true);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const fadeOut = () => {
    opacity.value = withSpring(0.01, {
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
                  disabled={answerChecked}
                >
                  <Card
                    style={[
                      styles.optionCard,
                      {
                        backgroundColor:
                          answerChecked &&
                          (currentQuestion.questionType === "multipleAnswer"
                            ? currentQuestion.answer.includes(option)
                            : option === currentQuestion.answer)
                            ? "lightgreen"
                            : "white",
                      },
                    ]}
                  >
                    <Card.Content style={styles.optionContent}>
                      <Ionicons
                        name={
                          currentQuestion.questionType === "multipleAnswer"
                            ? selectedOptions.includes(option)
                              ? "checkbox"
                              : "square-outline"
                            : selectedOptions.includes(option)
                            ? "radio-button-on"
                            : "radio-button-off"
                        }
                        size={24}
                        color={
                          selectedOptions.includes(option)
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
            <TouchableOpacity
              style={[
                styles.checkButton,
                {
                  backgroundColor: answerChecked
                    ? "gray"
                    : theme.colors.primary,
                },
              ]}
              onPress={handleCheckAnswer}
              disabled={selectedOptions.length === 0 || answerChecked}
            >
              <Text style={styles.checkButtonText}>Check Answer</Text>
            </TouchableOpacity>
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
          <TouchableOpacity onPress={handleNext} disabled={!answerChecked}>
            <Ionicons
              name="arrow-forward"
              size={32}
              color={!answerChecked ? "gray" : "black"}
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
  checkButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  checkButtonText: {
    color: "#fff",
    fontSize: 18,
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
