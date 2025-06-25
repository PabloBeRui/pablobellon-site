import home from "../templates/home.js";
import homeNow from "../templates/home-now.js";

/**
 * load-initial-template.js
 * Loads the initial template based on the current theme ('80s' or 'present').
 * This sets the content of the #section-global-container on first load.
 */

/* *********************************
 * ────── Load Initial Template ──────
 * ********************************* */

export const loadInitialTemplate = () => {
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

  return startInNowMode;
};
