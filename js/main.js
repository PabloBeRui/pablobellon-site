/* *********************************
 * ────── main.js ──────
 * ********************************* */

// Import modules from index.js

import {
  backgroundVideo,
  navigationButtons,
  personalVideoAnimation,
  touchOutBack,
  typewriterEffect,
  loadInitialTemplate,
} from "./modules/index.js";

/*Listen for DOMContentLoaded to ensure the HTML is fully parsed
 before running any initialization code*/

document.addEventListener("DOMContentLoaded", () => {
  // Load the appropriate template ('home' or 'homeNow') based on the saved theme

  const startInNowMode = loadInitialTemplate();

  /* *********************************
   * ───────── Intro Animations (80s only)─────────
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
