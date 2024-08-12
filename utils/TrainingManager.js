/** @format */

import FirstLevelTraining1 from "../components/first-level/training/FirstLevelTraining1";
import FirstLevelTraining2 from "../components/first-level/training/FirstLevelTraining2";
import FirstLevelTraining3 from "../components/first-level/training/FirstLevelTraining3";
import SecondLevelTraining1 from "../components/second-level/training/SecondLevelTraining1";
import SecondLevelTraining2 from "../components/second-level/training/SecondLevelTraining2";
import SecondLevelTraining3 from "../components/second-level/training/SecondLevelTraining3";
import SecondLevelTraining4 from "../components/second-level/training/SecondLevelTraining4";
import SecondLevelTraining5 from "../components/second-level/training/SecondLevelTraining5";
import ThirdLevelTraining1 from "../components/third-level/training/ThirdLevelTraining1";
import ThirdLevelTraining2 from "../components/third-level/training/ThirdLevelTraining2";
import ThirdLevelTraining3 from "../components/third-level/training/ThirdLevelTraining3";
import ThirdLevelTraining4 from "../components/third-level/training/ThirdLevelTraining4";
import ThirdLevelTraining5 from "../components/third-level/training/ThirdLevelTraining5";
import ThirdLevelTraining6 from "../components/third-level/training/ThirdLevelTraining6";
import QuestionController from "../pages/QuestionController";

const trainingPages = {
  FirstLevel: [
    FirstLevelTraining1,
    FirstLevelTraining2,
    QuestionController,
    FirstLevelTraining3,
  ],
  SecondLevel: [
    SecondLevelTraining1,
    SecondLevelTraining2,
    SecondLevelTraining3,
    SecondLevelTraining4,
    QuestionController,
    SecondLevelTraining5,
  ],
  ThirdLevel: [
    ThirdLevelTraining1,
    ThirdLevelTraining2,
    ThirdLevelTraining3,
    ThirdLevelTraining4,
    ThirdLevelTraining5,
    QuestionController,
    ThirdLevelTraining6,
  ],
};

export const getTrainingPages = (level) => trainingPages[level] || [];
