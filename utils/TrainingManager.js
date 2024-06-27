/** @format */

import FirstLevelTraining1 from "../components/first-level/training/FirstLevelTraining1";
import FirstLevelTraining2 from "../components/first-level/training/FirstLevelTraining2";
import FirstLevelTraining3 from "../components/first-level/training/FirstLevelTraining3";

const trainingPages = {
  FirstLevel: [FirstLevelTraining1, FirstLevelTraining2, FirstLevelTraining3],
};

export const getTrainingPages = (level) => trainingPages[level] || [];
