// /* Retro Terminal Typewriter Effect */

export const typewriterEffect = (idValue) => {
    
const text =
    "I’m currently studying and working on new projects 👾 Stay tuned for updates!";

  const typewriterElement = document.getElementById(idValue);

  let textIndex = 0;

  function typeWriter() {
    if (textIndex < text.length) {
      typewriterElement.innerHTML += text.charAt(textIndex);

      textIndex++;

      setTimeout(typeWriter, 60); //typing speed
    } else {
      typewriterElement.classList.add("typewriter-class-2");

      // Custom Event
      // This event will signal that the typewriter effect has completed.
      const typewriterFinishedEvent = new CustomEvent("typewriterFinished");
      // Dispatching (trigger) the custom event on the 'document' object.
      // event globally available for any listener.
      document.dispatchEvent(typewriterFinishedEvent);
    }
  }

  if (typewriterElement) {
    typeWriter();
  }



}