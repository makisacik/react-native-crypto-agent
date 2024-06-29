/** @format */

import FirstLevelTutorial1 from "../components/first-level/tutorial/FirstLevelTutorial1";
import FirstLevelTutorial2 from "../components/first-level/tutorial/FirstLevelTutorial2";
import FirstLevelTutorial3 from "../components/first-level/tutorial/FirstLevelTutorial3";
import FirstLevelTutorial4 from "../components/first-level/tutorial/FirstLevelTutorial4";
import FirstLevelTutorial5 from "../components/first-level/tutorial/FirstLevelTutorial5";
import SecondLevelTutorial1 from "../components/second-level/tutorial/SecondLevelTutorial1";
import SecondLevelTutorial2 from "../components/second-level/tutorial/SecondLevelTutorial2";
import SecondLevelTutorial3 from "../components/second-level/tutorial/SecondLevelTutorial3";
import SecondLevelTutorial4 from "../components/second-level/tutorial/SecondLevelTutorial4";
import SecondLevelTutorial5 from "../components/second-level/tutorial/SecondLevelTutorial5";

const tutorialPages = {
  FirstLevel: [
    FirstLevelTutorial1,
    FirstLevelTutorial2,
    FirstLevelTutorial3,
    FirstLevelTutorial4,
    FirstLevelTutorial5,
  ],
  SecondLevel: [
    SecondLevelTutorial1,
    SecondLevelTutorial2,
    SecondLevelTutorial3,
    SecondLevelTutorial4,
    SecondLevelTutorial5,
  ],
};

export const getTutorialPages = (level) => tutorialPages[level] || [];
