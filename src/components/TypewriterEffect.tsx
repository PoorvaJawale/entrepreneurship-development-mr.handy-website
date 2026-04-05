"use client";

import { useState, useEffect } from "react";

interface TypewriterEffectProps {
  words: string[];
  className?: string;
  startAnimation?: boolean;
}

export function TypewriterEffect({ words, className = "", startAnimation = false }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!startAnimation || isComplete) return;

    // Start typing immediately when animation begins
    if (!hasStarted) {
      setHasStarted(true);
      setIsWaiting(false); // Don't wait, start typing immediately
      return;
    }

    const currentWord = words[currentWordIndex];
    
    if (isWaiting) {
      // If this is the last word (Mr. Handy), don't start deleting
      if (currentWordIndex === words.length - 1) {
        return; // Freeze at the last word
      }
      
      const timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 1000); // Wait 1 second before starting to delete
      
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 30); // Delete speed (even faster)
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        const nextIndex = currentWordIndex + 1;
        if (nextIndex >= words.length) {
          setIsComplete(true);
          return;
        }
        setCurrentWordIndex(nextIndex);
        return;
      }
    }

    if (currentText.length < currentWord.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      }, 60); // Type speed (even faster)
      return () => clearTimeout(timeout);
    } else {
      setIsWaiting(true);
    }
  }, [currentText, currentWordIndex, isDeleting, isWaiting, words, startAnimation, isComplete, hasStarted]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-[#FFC107]">|</span>
    </span>
  );
}
