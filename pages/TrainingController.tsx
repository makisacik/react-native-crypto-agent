/** @format */

import React, { useState, useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { getTrainingPages } from "../utils/TrainingManager";
import Icon from "react-native-vector-icons/FontAwesome";
import { useScore } from "../context/ScoreContext";

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
  const { score, addScore } = useScore();

  const CurrentPage = pages[currentIndex];

  const navigateToNextPage = () => {
    if (currentIndex < pages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.scoreContainer}>
          <Icon name="star" size={20} color="#e28743" />
          <Text style={styles.scoreText}>{score}</Text>
        </View>
      ),
    });
  }, [navigation, score]);

  return (
    <View style={styles.container}>
      <CurrentPage
        onNext={navigateToNextPage}
        navigation={navigation}
        route={route}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  scoreText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TrainingController;
