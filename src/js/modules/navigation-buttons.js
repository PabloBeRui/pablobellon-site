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
import { toggleThemeWithTransition } from "./theme-switching.js";
import { toggleNowOr80s } from "./state.js";
import { handleRoute } from "./router.js";

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
      navButtons?.classList.add("visible");
      changeStyleButtonBack?.classList.add("visible");
    });
  } else {
    navButtons?.classList.add("visible");
    changeStyleButtonBack?.classList.add("visible");
  }

  /* *********************************
   * ───────── Content Switching ─────────
   * ********************************* */

  const variableContent = document.querySelector(idValue);

  variableContent?.addEventListener("click", (event) => {
    /* Using optional chaining for safer ID checks */

    // "About Me" button clicked -> Update hash route
    if (event.target?.id === "about-me-button") {
      window.location.hash = "#/about-me";
    }
    // "My Progress" button clicked -> Update hash route
    else if (event.target?.id === "my-progress-button") {
      window.location.hash = "#/my-progress";
    }
    // "Back" button clicked -> Return to home hash route
    else if (event.target?.id === "back-button") {
      window.location.hash = "#/";
    }
    // Home when style changed
    else if (event.target.closest?.("#change-style-button")) {
      // Trigger smooth screen transition overlay to swap styles seamlessly
      toggleThemeWithTransition(() => {
        toggleNowOr80s();
        handleRoute(false);
      });
    }
  });
};
