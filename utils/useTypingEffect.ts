// UTILITY FUNCTION TO CREATE TYPING EFFECT

import { useState, useEffect } from 'react';

const useTypingEffect = (text: string, speed: number) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) return;

    let charIndex = 0;
    setDisplayedText('');

    const type = () => {
      if (charIndex < text.length) {
        setDisplayedText((prev) => prev + text[charIndex]);
        charIndex++;
        timeoutId = setTimeout(type, speed);
      }
    };

    let timeoutId = setTimeout(type, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed]);

  return displayedText;
};

export default useTypingEffect;
