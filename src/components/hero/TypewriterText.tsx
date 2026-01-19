'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypewriterText({
  text,
  className = '',
  speed = 50,
  delay = 0,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeNextChar, speed);
      } else {
        setIsComplete(true);
      }
    };

    const startTimeout = setTimeout(() => {
      typeNextChar();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-[1em] bg-current ml-1"
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
}
