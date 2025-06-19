// main.js

// Import modules from index.js

import {
  backgroundVideo,
  navigationButtons,
  personalVideoAnimation,
  touchOutBack,
  typewriterEffect,
} from "./modules/index.js";

import home from "./templates/home.js";
import homeNow from "./templates/home-now.js";

// Listen for DOMContentLoaded to ensure the HTML is fully parsed
// before running any initialization code

document.addEventListener("DOMContentLoaded", () => {
  // Select the container to load
  const variableContent = document.querySelector("#section-global-container");
  // Load the theme from sessionStorage (default to '80s' if not set)
  const theme = sessionStorage.getItem("theme") || "80s";

  // Determine whether we should start in "now" mode (theme === 'present')
  const startInNowMode = theme === "present";

  variableContent.innerHTML = ""; // ensure full reset before inserting

  // Load the correct template based on our mode flag:
  // - homeNow when in "now" mode
  // - home    when in "80s" mode

  variableContent.innerHTML = startInNowMode ? homeNow : home;

  /* *********************************
   * ───────── Intro Animations ─────────
   * ********************************* */

  if (!startInNowMode) {
    // Play the personal “coming soon” video after a short delay
    personalVideoAnimation("coming-soon-vid");
    // Slow down the VHS background video and restart smoothly in 80s theme
    backgroundVideo("bg-video");
    // Run the retro terminal typewriter effect on the intro text
    typewriterEffect("typewriter-text");
  }

  /* *********************************
   * ───────── Navigation Setup ─────────
   * ********************************* */

  // Show navigation buttons once the typewriter has finished

  navigationButtons("#section-global-container", true);

  // If the user clicks outside the main content (and not on a button),
  // reset the view back to the home template

  touchOutBack("#section-global-container");
});
