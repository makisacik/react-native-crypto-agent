/** @format */

import FirstLevelPage1 from "../components/first-level/FirstLevelPage1";
import FirstLevelPage2 from "../components/first-level/FirstLevelPage2";
import FirstLevelPage3 from "../components/first-level/FirstLevelPage3";
import FirstLevelPage4 from "../components/first-level/FirstLevelPage4";

const tutorialPages = {
  CaesarCipher: [
    FirstLevelPage1,
    FirstLevelPage2,
    FirstLevelPage3,
    FirstLevelPage4,
  ],
};

export const getTutorialPages = (level) => tutorialPages[level] || [];
