/**
 * touch-out-back.js
 * Listens for clicks outside the main content container and resets the view to home with a fade-out transition.
 */

/* *********************************
 * ───────── Module Imports ─────────
 * ********************************* */
import homeNow from "../templates/home-now.js";
import home from "../templates/home.js";
import { replaceWithFadeOut } from "./replace-with-fade-out.js";
import { nowOr80s } from "./state.js";

/* *********************************
 * ───────── Touch Out Back ─────────
 * ********************************* */

// Listens for clicks anywhere in the window.
// If the click occurs outside the given container (and not on a button),
// it replaces the container’s innerHTML with the imported `home` template.

export const touchOutBack = (idValue) => {
  window.addEventListener("click", (event) => {
    // Check if the click was inside the target container
    const clickedInsideContent = event.target.closest(idValue);
    // Check if the click was on any button
    const clickedOnButton = event.target.closest("button");

    // If click was neither inside the container nor on a button,
    // reset the route to home hash route
    if (!clickedInsideContent && !clickedOnButton) {
      if (
        window.location.hash &&
        window.location.hash !== "#/" &&
        window.location.hash !== "#"
      ) {
        window.location.hash = "#/";
      }
    }
  });
};
