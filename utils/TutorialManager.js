/** @format */

import FirstLevelPage1 from "../components/first-level/FirstLevelPage1";
import FirstLevelPage2 from "../components/first-level/FirstLevelPage2";

const tutorialPages = {
  CaesarCipher: [FirstLevelPage1, FirstLevelPage2],
};

export const getTutorialPages = (level) => tutorialPages[level] || [];
