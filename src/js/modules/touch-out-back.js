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
    // Select the main content container
    const variableContent = document.querySelector("#section-global-container");
    // Check if the click was inside the target container
    const clickedInsideContent = event.target.closest(idValue);
    // Check if the click was on any button
    const clickedOnButton = event.target.closest("button");

    // If click was neither inside the container nor on a button,
    // reset the container to the home template
    if (!clickedInsideContent && !clickedOnButton) {
      // Triggers a smooth fade-out animation, then replaces the container's content with the home or home now template

      replaceWithFadeOut(variableContent, nowOr80s ? homeNow : home);
    }
  });
};
