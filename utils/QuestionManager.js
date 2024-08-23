/** @format */
// UTILITY FILE TO GET QUESTIONS DATA FROM QUESTIONS.JSON FILE

import questionsData from "../data/questions.json";

export const getQuestions = (level) => {
  return questionsData[level]?.questions || [];
};
