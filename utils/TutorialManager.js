/** @format */

import FirstLevelTutorial1 from "../components/first-level/tutorial/FirstLevelTutorial1";
import FirstLevelTutorial2 from "../components/first-level/tutorial/FirstLevelTutorial2";
import FirstLevelTutorial3 from "../components/first-level/tutorial/FirstLevelTutorial3";
import FirstLevelTutorial4 from "../components/first-level/tutorial/FirstLevelTutorial4";
import FirstLevelTutorial5 from "../components/first-level/tutorial/FirstLevelTutorial5";
import SecondLevelTutorial1 from "../components/second-level/tutorial/SecondLevelTutorial1";
import SecondLevelTutorial2 from "../components/second-level/tutorial/SecondLevelTutorial2";
import SecondLevelTutorial3 from "../components/second-level/tutorial/SecondLevelTutorial3";
import SecondLevelTutorial3Extra1 from "../components/second-level/tutorial/SecondLevelTutorial3Extra1";
import SecondLevelTutorial3Extra2 from "../components/second-level/tutorial/SecondLevelTutorial3Extra2";
import SecondLevelTutorial4 from "../components/second-level/tutorial/SecondLevelTutorial4";
import SecondLevelTutorial5 from "../components/second-level/tutorial/SecondLevelTutorial5";
import SecondLevelTutorial6 from "../components/second-level/tutorial/SecondLevelTutorial6";
import SecondLevelTutorial7 from "../components/second-level/tutorial/SecondLevelTutorial7";
import SecondLevelTutorial8 from "../components/second-level/tutorial/SecondLevelTutorial8";
import SecondLevelTutorial9 from "../components/second-level/tutorial/SecondLevelTutorial9";
import SecondLevelTutorial10 from "../components/second-level/tutorial/SecondLevelTutorial10";
import SecondLevelTutorial11 from "../components/second-level/tutorial/SecondLevelTutorial11";
import ThirdLevelTutorial1 from "../components/third-level/tutorial/ThirdLevelTutorial1";
import ThirdLevelTutorial2 from "../components/third-level/tutorial/ThirdLevelTutorial2";
import ThirdLevelTutorial3 from "../components/third-level/tutorial/ThirdLevelTutorial3";
import ThirdLevelTutorial4 from "../components/third-level/tutorial/ThirdLevelTutorial4";
import ThirdLevelTutorial5 from "../components/third-level/tutorial/ThirdLevelTutorial5";
import ThirdLevelTutorial5Extra1 from "../components/third-level/tutorial/ThirdLevelTutorial5Extra1";
import ThirdLevelTutorial6 from "../components/third-level/tutorial/ThirdLevelTutorial6";
import ThirdLevelTutorial7 from "../components/third-level/tutorial/ThirdLevelTutorial7";
import ThirdLevelTutorial8 from "../components/third-level/tutorial/ThirdLevelTutorial8";
import FourthLevelTutorial1 from "../components/fourth-level/tutorial/FourthLevelTutorial1";
import FourthLevelTutorial2 from "../components/fourth-level/tutorial/FourthLevelTutorial2";
import FourthLevelTutorial3 from "../components/fourth-level/tutorial/FourthLevelTutorial3";
import FourthLevelTutorial4 from "../components/fourth-level/tutorial/FourthLevelTutorial4";
import FourthLevelTutorial5 from "../components/fourth-level/tutorial/FourthLevelTutorial5";
import FourthLevelTutorial6 from "../components/fourth-level/tutorial/FourthLevelTutorial6";
import FourthLevelTutorial7 from "../components/fourth-level/tutorial/FourthLevelTutorial7";

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
    SecondLevelTutorial3Extra1,
    SecondLevelTutorial3Extra2,
    SecondLevelTutorial4,
    SecondLevelTutorial5,
    SecondLevelTutorial6,
    SecondLevelTutorial7,
    SecondLevelTutorial8,
    SecondLevelTutorial9,
    SecondLevelTutorial10,
    SecondLevelTutorial11,
  ],
  ThirdLevel: [
    ThirdLevelTutorial1,
    ThirdLevelTutorial2,
    ThirdLevelTutorial3,
    ThirdLevelTutorial4,
    ThirdLevelTutorial5,
    ThirdLevelTutorial5Extra1,
    ThirdLevelTutorial6,
    ThirdLevelTutorial7,
    ThirdLevelTutorial8,
  ],
  FourthLevel: [
    FourthLevelTutorial1,
    FourthLevelTutorial2,
    FourthLevelTutorial3,
    FourthLevelTutorial4,
    FourthLevelTutorial5,
    FourthLevelTutorial6,
    FourthLevelTutorial7,
  ],
};

export const getTutorialPages = (level) => tutorialPages[level] || [];
