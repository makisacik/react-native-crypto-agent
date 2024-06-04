/** @format */

import FirstLevelTutorial1 from "../components/first-level/tutorial/FirstLevelTutorial1";
import FirstLevelTutorial2 from "../components/first-level/tutorial/FirstLevelTutorial2";
import FirstLevelTutorial3 from "../components/first-level/tutorial/FirstLevelTutorial3";
import FirstLevelTutorial4 from "../components/first-level/tutorial/FirstLevelTutorial4";
import FirstLevelTutorial5 from "../components/first-level/tutorial/FirstLevelTutorial5";

const tutorialPages = {
  FirstLevel: [
    FirstLevelTutorial1,
    FirstLevelTutorial2,
    FirstLevelTutorial3,
    FirstLevelTutorial4,
    FirstLevelTutorial5,
  ],
};

export const getTutorialPages = (level) => tutorialPages[level] || [];
