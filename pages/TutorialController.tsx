/** @format */
//TUTORIAL CONTROLLER. THE CONTROLLER WHICH DISPLAYS THE TUTORIAL PAGES AND HANDLES THE NAVIGATION

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { getTutorialPages } from "../utils/TutorialManager";
import { Ionicons } from "@expo/vector-icons";
import { ProgressBar, useTheme } from "react-native-paper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const TutorialController = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { level } = route.params;
  const pages = getTutorialPages(level);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const theme = useTheme();

  const opacity = useSharedValue(1);

  if (pages.length === 0) return null;

  const CurrentPage = pages[currentPageIndex];

  const handleNext = () => {
    if (currentPageIndex < pages.length - 1) {
      fadeOut();
      setTimeout(() => {
        setCurrentPageIndex(currentPageIndex + 1);
        fadeIn();
      }, 200);
    }
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      fadeOut();
      setTimeout(() => {
        setCurrentPageIndex(currentPageIndex - 1);
        fadeIn();
      }, 200);
    }
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

  const progress = (currentPageIndex + 1) / pages.length;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? undefined : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <Animated.View style={[styles.contentContainer, animatedStyle]}>
        <CurrentPage />
      </Animated.View>
      <ProgressBar
        progress={progress}
        color={theme.colors.primary}
        style={styles.progressBar}
      />
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          onPress={handlePrevious}
          disabled={currentPageIndex === 0}
        >
          <Ionicons
            name="arrow-back"
            size={32}
            color={currentPageIndex === 0 ? "gray" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNext}
          disabled={currentPageIndex === pages.length - 1}
        >
          <Ionicons
            name="arrow-forward"
            size={32}
            color={currentPageIndex === pages.length - 1 ? "gray" : "black"}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
});

export default TutorialController;
