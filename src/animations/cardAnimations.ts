// src/animations/cardAnimations.ts
'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animate feature cards with staggered vertical overlap when they enter viewport.
 * @param cards Array of HTML elements representing the cards
 */
export const featureCardsAnimation = (cards: HTMLElement[]) => {
    gsap.from(cards, {
      y: (i) => (i % 2 === 0 ? 40 : 80), // staggered overlap
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cards[0],
        start: "top 90%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  };
  
