'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animate a counter from 0 to target value when element enters viewport
 * @param element The HTML element containing the counter
 * @param targetValue The target number to count to
 * @param suffix Optional suffix to append (e.g., "h" for hours)
 * @param duration Duration of the animation in seconds
 */
export const counterAnimation = (
  element: HTMLElement,
  targetValue: number,
  suffix: string = '',
  duration: number = 2
) => {
  if (!element) return;

  const obj = { value: 0 };
  
  gsap.to(obj, {
    value: targetValue,
    duration: duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
      once: true,
    },
    onUpdate: () => {
      const currentValue = Math.floor(obj.value);
      element.textContent = `${currentValue}${suffix}`;
    },
  });
};
