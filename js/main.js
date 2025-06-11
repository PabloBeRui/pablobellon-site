import aboutMe from "./templates/about-me.js";
import home from "./templates/home.js";
import myProgress from "./templates/my-progress.js";
import { myProgressRenderer } from "./renderers/my-progress-renderer.js";
import { aboutMeRenderer } from "./renderers/about-me-renderer.js";
import { backgroundVideo } from "./modules/background-video.js";
import { typewriterEffect } from "./modules/typewriter-effect.js";
import { personalVideoAnimation } from "./modules/personal-video-animation.js";

// Wait for the full HTML document to be loaded and parsed before executing scripts.
// This ensures that all DOM elements exist when we try to manipulate them.

document.addEventListener("DOMContentLoaded", () => {
  // VHS Background Video playback speed

  backgroundVideo("bg-video");

  /* Retro Terminal Typewriter Effect */

  typewriterEffect("typewriter-text");

  // Personal video animation

  personalVideoAnimation("coming-soon-vid")

  // Nav and buttons

  /*  This code will handle the visibility of the navigation buttons
   and will show them after the typewriter effect is finished. */

  const navButtons = document.querySelector("#nav-buttons");

  document.addEventListener("typewriterFinished", () => {
    navButtons.classList.add("visible");
  });

  // Navigation buttons functionality

  const variableContent = document.querySelector("#section-global-container");

  //Changing Content
  variableContent.addEventListener("click", (event) => {
    // Button "About me"
    if (event.target && event.target.id === "about-me-button") {
      variableContent.innerHTML = aboutMe;
      aboutMeRenderer();
    }
    // Button "My Progress"
    else if (event.target && event.target.id === "my-progress-button") {
      variableContent.innerHTML = myProgress;
      myProgressRenderer();
    }
    // Button "Back"
    else if (event.target && event.target.id === "back-button") {
      variableContent.innerHTML = home; // Carga el template 'home' con texto y botones ya visibles
    }
  });

  //back to home listener -click  out of #section-global-container and no buttons

  window.addEventListener("click", (event) => {
    const clickedInsideContent = event.target.closest(
      "#section-global-container"
    );
    const clickedOnButton = event.target.closest("button");
    if (!clickedInsideContent && !clickedOnButton) {
      variableContent.innerHTML = home;
    }
  });
});
