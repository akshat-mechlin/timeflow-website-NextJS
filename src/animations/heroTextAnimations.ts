import gsap from "gsap";

export const heroTextAnimation = (heading: HTMLHeadingElement) => {
    if (!heading) return;
  
    heading.style.visibility = "visible"; // show heading at the start of timeline
  
    const text = heading.textContent?.trim();
    if (!text) return;
  
    const words = text.split(" ");
    heading.innerHTML = "";
  
    words.forEach((word) => {
      const wordWrapper = document.createElement("span");
      wordWrapper.style.display = "inline-block";
      wordWrapper.style.marginRight = "20px";
  
      const firstLetter = document.createElement("span");
      firstLetter.textContent = word[0];
      firstLetter.classList.add("first-letter");
      firstLetter.style.display = "inline-block";
  
      const restLetters = document.createElement("span");
      restLetters.style.display = "inline";
      restLetters.style.overflow = "hidden";
  
      [...word.slice(1)].forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.style.display = "inline-block";
        charSpan.style.opacity = "0";   // letters start hidden
        charSpan.style.transform = "translateY(100%)";
        restLetters.appendChild(charSpan);
      });
  
      wordWrapper.appendChild(firstLetter);
      wordWrapper.appendChild(restLetters);
      heading.appendChild(wordWrapper);
    });
  
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  
    heading.querySelectorAll("span").forEach((wordSpan, wi) => {
      const firstLetter = wordSpan.querySelector(".first-letter") as HTMLElement | null;
      const restLetters = wordSpan.querySelectorAll("span span") as NodeListOf<HTMLElement>;
      if (!firstLetter) return;
  
      // Animate first letter
      tl.from(firstLetter, { duration: 0.1, opacity: 0, rotate: 360, scale: 1.5 }, wi * 0.1);
      tl.to(firstLetter, { duration: 0.3, rotateX: 180 }, wi * 0.1 + 0.1);
      tl.to(firstLetter, { duration: 0.3, rotateX: 0 }, wi * 0.1 + 0.4);
  
      // Animate rest of the letters
      tl.to(restLetters, { duration: 0.3, opacity: 1, y: 0, stagger: 0.08 }, wi * 0.1 + 0.7);
    });
  
    return tl;
  };
  