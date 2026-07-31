"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  to: number;
  duration?: number;
  suffix?: string;
}

export default function CountUp({ to, duration = 1.2, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = to;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(totalMiliseconds / frameRate);
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.round(start + easeProgress * (end - start));
      
      setCount(currentValue);

      if (currentFrame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [to, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
