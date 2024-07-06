/** @format */

import FirstLevelTraining1 from "../components/first-level/training/FirstLevelTraining1";
import FirstLevelTraining2 from "../components/first-level/training/FirstLevelTraining2";
import FirstLevelTraining3 from "../components/first-level/training/FirstLevelTraining3";
import QuestionController from "../pages/QuestionController";
import ThirdLevelTraining1 from "../components/third-level/training/ThirdLevelTraining1";

const trainingPages = {
  FirstLevel: [
    FirstLevelTraining1,
    FirstLevelTraining2,
    QuestionController,
    FirstLevelTraining3,
  ],
  SecondLevel: [QuestionController],
  ThirdLevel: [ThirdLevelTraining1],
};

export const getTrainingPages = (level) => trainingPages[level] || [];
