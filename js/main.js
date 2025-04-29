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
    "I’m currently studying and working on new projects. Stay tuned for updates!";

  const typewriterElement = document.getElementById("typewriter-text");

  let textIndex = 0;

  function typeWriter() {
    if (textIndex < text.length) {
      typewriterElement.innerHTML += text.charAt(textIndex);

      textIndex++;

      setTimeout(typeWriter, 60); //typing speed
    } else {
      typewriterElement.classList.add('typewriter-class-2');
    }
  }
  typeWriter();
});
