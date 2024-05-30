/** @format */

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

  if (pages.length === 0) return null;

  const CurrentPage = pages[currentPageIndex];

  const handleNext = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? undefined : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <View style={styles.contentContainer}>
        <CurrentPage />
      </View>
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
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
});

export default TutorialController;
