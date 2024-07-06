/** @format */

import FirstLevelTraining1 from "../components/first-level/training/FirstLevelTraining1";
import FirstLevelTraining2 from "../components/first-level/training/FirstLevelTraining2";
import FirstLevelTraining3 from "../components/first-level/training/FirstLevelTraining3";
import QuestionController from "../pages/QuestionController";
import ThirdLevelTraining1 from "../components/third-level/training/ThirdLevelTraining1";
import ThirdLevelTraining2 from "../components/third-level/training/ThirdLevelTraining2";
import ThirdLevelTraining3 from "../components/third-level/training/ThirdLevelTraining3";
import ThirdLevelTraining4 from "../components/third-level/training/ThirdLevelTraining4";
import ThirdLevelTraining5 from "../components/third-level/training/ThirdLevelTraining5";

const trainingPages = {
  FirstLevel: [
    FirstLevelTraining1,
    FirstLevelTraining2,
    QuestionController,
    FirstLevelTraining3,
  ],
  SecondLevel: [QuestionController],
  ThirdLevel: [
    ThirdLevelTraining1,
    ThirdLevelTraining2,
    ThirdLevelTraining3,
    ThirdLevelTraining4,
    ThirdLevelTraining5,
    QuestionController,
  ],
};

export const getTrainingPages = (level) => trainingPages[level] || [];
