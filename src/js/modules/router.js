/**
 * =============================================================================
 * MODULE: Router
 * =============================================================================
 *
 * Hash-based routing module for SPA navigation. Enables browser history
 * (back/forward) and direct section URLs (e.g. /#/about-me).
 *
 * =============================================================================
 */

import aboutMe from "../templates/about-me.js";
import myProgress from "../templates/my-progress.js";
import home from "../templates/home.js";
import homeNow from "../templates/home-now.js";
import { aboutMeRenderer } from "../renderers/about-me-renderer.js";
import { myProgressRenderer } from "../renderers/my-progress-renderer.js";
import { nowOr80s } from "./state.js";
import { replaceWithFadeOut } from "./replace-with-fade-out.js";

/**
 * Resolves current route based on window.location.hash.
 */
export const handleRoute = (animate = false) => {
  const variableContent = document.querySelector("#section-global-container");
  if (!variableContent) return;

  const rawHash = window.location.hash;
  const route = rawHash.replace(/^#\/?/, "").toLowerCase();

  if (route === "about-me") {
    variableContent.innerHTML = aboutMe;
    aboutMeRenderer();
  } else if (route === "my-progress") {
    variableContent.innerHTML = myProgress;
    myProgressRenderer();
  } else {
    // Default home view
    const targetHome = nowOr80s ? homeNow : home;
    if (animate) {
      replaceWithFadeOut(variableContent, targetHome);
    } else {
      variableContent.innerHTML = targetHome;
    }
  }
};

/**
 * Initializes hash routing event listeners.
 */
export const initRouter = () => {
  // Listen for hash changes (browser back/forward or manual hash updates)
  window.addEventListener("hashchange", () => {
    handleRoute(false);
  });

  // Handle route on initial page load if hash exists
  if (
    window.location.hash &&
    window.location.hash !== "#/" &&
    window.location.hash !== "#"
  ) {
    handleRoute(false);
  }
};
