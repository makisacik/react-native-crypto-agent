/** @format */

import FirstLevelTraining1 from "../components/first-level/training/FirstLevelTraining1";
import FirstLevelTraining2 from "../components/first-level/training/FirstLevelTraining2";
import FirstLevelTraining3 from "../components/first-level/training/FirstLevelTraining3";
import QuestionController from "../pages/QuestionController";

const trainingPages = {
  FirstLevel: [
    FirstLevelTraining1,
    FirstLevelTraining2,
    QuestionController,
    FirstLevelTraining3,
  ],
  SecondLevel: [QuestionController],
};

export const getTrainingPages = (level) => trainingPages[level] || [];
