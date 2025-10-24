'use client';

import { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: React.ReactNode;
  className?: string;
  dataCursor?: string;
}

export default function AnimatedText({ text, className, dataCursor }: AnimatedTextProps) {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current && (window as any).SplitText) {
      let animationSplitText = new (window as any).SplitText(textRef.current, { type: "chars, words" });
      (window as any).gsap.from(animationSplitText.chars, {
        duration: 1,
        delay: 0.1,
        x: 20,
        autoAlpha: 0,
        stagger: 0.03,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <h2 className={className} data-cursor={dataCursor} ref={textRef}>
      {text}
    </h2>
  );
}
