/**
 * navigation-buttons.js
 * Manages navigation button visibility and page content switching.
 */

/* *********************************
 * ───────── Module Imports ─────────
 * ********************************* */

import { myProgressRenderer } from "../renderers/my-progress-renderer.js";
import { aboutMeRenderer } from "../renderers/about-me-renderer.js";
import aboutMe from "../templates/about-me.js";
import myProgress from "../templates/my-progress.js";
import home from "../templates/home.js";
import { replaceWithFadeOut } from "./replace-with-fade-out.js";
import { toggleTheme } from "./theme-switching.js";

/* *********************************
 * ────── Navigation Button Logic ──────
 * ********************************* */

export const navigationButtons = (idValue, wait) => {
  const navButtons = document.querySelector("#nav-buttons");
  const changeStyleButtonBack = document.querySelector(
    "#change-style-button-nav"
  );

  /* Control visibility: if wait=true, show buttons after 'typewriterFinished' event; otherwise show immediately */

  if (wait) {
    document.addEventListener("typewriterFinished", () => {
      navButtons.classList.add("visible");
      changeStyleButtonBack.classList.add("visible")
    });
  } else {
    navButtons.classList.add("visible");
    changeStyleButtonBack.classList.add("visible")
  }

  /* *********************************
   * ───────── Content Switching ─────────
   * ********************************* */

  const variableContent = document.querySelector(idValue);

  variableContent.addEventListener("click", (event) => {
    /* Using optional chaining for safer ID checks */

    // "About Me" button clicked
    if (event.target?.id === "about-me-button") {
      variableContent.innerHTML = aboutMe;
      aboutMeRenderer();
    }
    // "My Progress" button clicked
    else if (event.target?.id === "my-progress-button") {
      variableContent.innerHTML = myProgress;
      myProgressRenderer();
    }
    // "Back" button clicked
    else if (event.target?.id === "back-button") {
      /* Perform smooth fade-out then load home template */
      replaceWithFadeOut(variableContent, home);
    }
    // home when style changed
    else if (event.target?.id === "change-style-button") {
      
      toggleTheme();

      replaceWithFadeOut(variableContent, home);
    }
  });
};
