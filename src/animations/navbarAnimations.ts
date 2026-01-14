import gsap from "gsap";

export const navbarIntroAnimation = (
  logo: HTMLDivElement,
  text: HTMLSpanElement,
  menu: HTMLUListElement,
  button: HTMLButtonElement
) => {
  const tl = gsap.timeline();

  // Logo
  tl.fromTo(logo, { x: -800, rotation: -360, opacity: 0 }, { x: 0, rotation: 360, opacity: 1, duration: 1.5, ease: "power3.out" });

  // Text
  tl.fromTo(text, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, "+=0.5");

  // Menu items
  tl.fromTo(menu.children, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.2 });

  // Button
  tl.fromTo(button, { scale: 2, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.2)" });

  return tl; // ✅ Always return a timeline
};
