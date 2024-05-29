/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
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
      </View>
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
    padding: 20,
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});

export default TutorialController;
