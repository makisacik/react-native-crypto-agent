/** @format */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { getTrainingPages } from "../utils/TrainingManager";
import { CommonActions } from "@react-navigation/native";

const TrainingController = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { level } = route.params;
  const pages = getTrainingPages(level);
  const [currentIndex, setCurrentIndex] = useState(0);

  const CurrentPage = pages[currentIndex];

  const navigateToNextPage = () => {
    if (currentIndex < pages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Home" }],
        })
      );
    }
  };

  return (
    <View style={styles.container}>
      <CurrentPage onNext={navigateToNextPage} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrainingController;
