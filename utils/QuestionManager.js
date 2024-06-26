/** @format */

import questionsData from "../data/questions.json";

export const getQuestions = (level) => {
  return questionsData[level]?.questions || [];
};
