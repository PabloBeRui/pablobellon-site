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
    }
  }
  typeWriter();

  // Personal video animation

  const comingSoonVid = document.getElementById("coming-soon-vid");

  setTimeout(() => {
    comingSoonVid.play();

    // When the forward playback ends

    comingSoonVid.onended = () => {
      comingSoonVid.src = "../assets/video/personal-stud-vid-reverse.mp4";
      comingSoonVid.play(); //starts with reverse video

      comingSoonVid.onended = null; // Remove the event to prevent loops
    };
  }, 5000);

  // Preload the reverse video to minimize transition delay
  const reverseVideo = document.createElement("video");
  reverseVideo.src = "./assets/video/personal-stud-vid-reverse.mp4";
  reverseVideo.preload = "auto";
});
