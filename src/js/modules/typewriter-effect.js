/**
 * typewriter-effect.js
 * Simulates a retro terminal typewriter effect, supports click-to-skip, and remembers session state.
 */

import { typewriterText } from "../data/fragments.js";

/* *********************************
 * ────── Typewriter Effect ──────
 * ********************************* */

export const typewriterEffect = (idValue) => {
  const typewriterElement = document.getElementById(idValue);
  if (!typewriterElement) return;

  const text = typewriterText;
  let textIndex = 0;
  let timeoutId = null;
  let isFinished = false;

  // Complete typewriter animation instantly
  const finishTypewriter = () => {
    if (isFinished) return;
    isFinished = true;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    typewriterElement.innerHTML = text;
    typewriterElement.classList.add("typewriter-class-2");
    typewriterElement.style.cursor = "default";
    typewriterElement.removeAttribute("title");

    // Remember in session storage that animation has been completed
    sessionStorage.setItem("typewriterSeen", "true");

    // Dispatch global custom event signaling animation completion
    const typewriterFinishedEvent = new CustomEvent("typewriterFinished");
    document.dispatchEvent(typewriterFinishedEvent);
  };

  // Skip animation if already seen in current session
  const alreadySeen = sessionStorage.getItem("typewriterSeen") === "true";

  if (alreadySeen) {
    finishTypewriter();
    return;
  }

  // Prepare element for typing and set up click-to-skip listener
  typewriterElement.innerHTML = "";
  typewriterElement.style.cursor = "pointer";
  typewriterElement.setAttribute("title", "Click to skip animation");

  const clickHandler = () => {
    typewriterElement.removeEventListener("click", clickHandler);
    finishTypewriter();
  };

  typewriterElement.addEventListener("click", clickHandler);

  function typeWriter() {
    if (isFinished) return;

    if (textIndex < text.length) {
      typewriterElement.innerHTML += text.charAt(textIndex);
      textIndex++;
      timeoutId = setTimeout(typeWriter, 60);
    } else {
      typewriterElement.removeEventListener("click", clickHandler);
      finishTypewriter();
    }
  }

  typeWriter();
};
