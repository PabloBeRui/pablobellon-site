/* *********************************
 * ────── main.js ──────
 * ********************************* */

// Import modules from index.js

import {
  navigationButtons,
  touchOutBack,
  loadInitialTemplate,
  introAnimations,
} from "./modules/index.js";

/*Listen for DOMContentLoaded to ensure the HTML is fully parsed
 before running any initialization code*/

document.addEventListener("DOMContentLoaded", () => {
  // Load the appropriate template ('home' or 'homeNow') based on the saved theme
  // Expected return is a boolean indicating the selected mode.

  const startInNowMode = loadInitialTemplate();

  /* *********************************
   * ───────── Intro Animations (80s only)─────────
   * ********************************* */
  if (!startInNowMode) {
    introAnimations();
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
