// Wait for the full HTML document to be loaded and parsed before executing scripts.
// This ensures that all DOM elements exist when we try to manipulate them.

document.addEventListener("DOMContentLoaded", () => {
  // background video

  const video = document.getElementById("bg-video");

  video.addEventListener("canplaythrough", () => {
    video.playbackRate = 0.2;
    // re-start
    video.play();
  });

  /* Retro Terminal Typewriter Effect */

  const text =
    "I’m currently studying and working on new projects 👾 Stay tuned for updates!";

  const typewriterElement = document.getElementById("typewriter-text");

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
  typeWriter();

  // Personal video animation

  const comingSoonVid = document.getElementById("coming-soon-vid");

  setTimeout(() => {
    comingSoonVid.play();    
  
  }, 5000);

  // Nav and buttons
  
  const navButtons = document.querySelector("#nav-buttons");
  
  
  document.addEventListener("typewriterFinished", () => {

    navButtons.classList.add("visible");
  
  })

});
