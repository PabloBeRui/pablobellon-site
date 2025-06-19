/**
 * typewriter-effect.js
 * Simulates a retro terminal typewriter effect and dispatches an event upon completion.
 */

/* *********************************
 * ────── Typewriter Effect ──────
 * ********************************* */

export const typewriterEffect = (idValue) => {

  // Clear any existing text before starting the typewriter animation

  document.getElementById("typewriter-text").innerHTML=""

  
  const text =
    "I’m currently studying and working on new projects 👾 Stay tuned for updates!";

  const typewriterElement = document.getElementById(idValue);

  let textIndex = 0;

  function typeWriter() {
    // Append next character
    if (textIndex < text.length) {
      typewriterElement.innerHTML += text.charAt(textIndex);

      textIndex++;
      // Call recursively to type next character
      setTimeout(typeWriter, 60); //typing speed
    } else {
      // After completing typing, add secondary styling class
      typewriterElement.classList.add("typewriter-class-2"); //terminal green to neon pink

      // Custom Event
      // This event will signal that the typewriter effect has completed.
      const typewriterFinishedEvent = new CustomEvent("typewriterFinished");
      // Dispatching (trigger) the global custom event on the 'document' object.
      // event available for any listener.
      document.dispatchEvent(typewriterFinishedEvent);
    }
  }

  if (typewriterElement) {
    typeWriter();
  }
};
