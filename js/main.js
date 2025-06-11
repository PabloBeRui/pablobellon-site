// main.js

// Import modules from index.js

import {
  backgroundVideo,
  navigationButtons,
  personalVideoAnimation,
  touchOutBack,
  typewriterEffect,
} from "./modules/index.js";

// Listen for DOMContentLoaded to ensure the HTML is fully parsed
// before running any initialization code

document.addEventListener("DOMContentLoaded", () => {
  // —————————————————————————————
  // Intro Animations
  // —————————————————————————————

  // Slow down the VHS background video and restart smoothly

  backgroundVideo("bg-video");

  // Run the retro terminal typewriter effect on the intro text

  typewriterEffect("typewriter-text");

  // Play the personal “coming soon” video after a short delay

  personalVideoAnimation("coming-soon-vid");

  // —————————————————————————————
  // Navigation Setup
  // —————————————————————————————

  // Show navigation buttons once the typewriter has finished

  navigationButtons("#section-global-container", true);

  // If the user clicks outside the main content (and not on a button),
  // reset the view back to the home template

  touchOutBack("#section-global-container");
});
