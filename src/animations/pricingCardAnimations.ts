'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * EXACT same animation as WordPress:
 * Left card moves left + down + rotates
 * Center stays centered
 * Right card moves right + down + rotates
 * Only works on sm breakpoint and above (640px+)
 */
export const pricingCardAnimation = () => {
  // Check if screen is sm or larger (640px is Tailwind's sm breakpoint)
  if (typeof window === 'undefined') return;
  
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    return; // Don't run animation on mobile
  }

  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".pricing-section",
      start: "top 80%",
      end: "top 10%",
      scrub: true,    // <-- scroll controlled
    }
  });

  // Left card
  t2.fromTo(".left-card",
    { x: 0, y: 0, rotation: 0 },
    { x: -325, y: 40, rotation: -10, ease: "none" }
  );

  // Center card
  t2.fromTo(".center-card",
    { x: 0, y: 0, rotation: 0 },
    { x: 0, y: 0, rotation: 0, ease: "none" },
    0
  );

  // Right card
  t2.fromTo(".right-card",
    { x: 0, y: 0, rotation: 0 },
    { x: 325, y: 40, rotation: 10, ease: "none" },
    0
  );
};
