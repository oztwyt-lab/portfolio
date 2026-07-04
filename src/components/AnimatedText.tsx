import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { CSSProperties, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative">
      <span className="invisible">{char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wordIdx) => {
        const rendered = (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {word.split('').map((char, i) => {
              const start = charIndex / totalChars;
              const end = (charIndex + 1) / totalChars;
              charIndex += 1;
              return (
                <Char
                  key={i}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
        charIndex += 1; // account for the space between words
        return (
          <span key={`w-${wordIdx}`}>
            {rendered}
            {wordIdx < words.length - 1 ? ' ' : null}
          </span>
        );
      })}
    </p>
  );
}
