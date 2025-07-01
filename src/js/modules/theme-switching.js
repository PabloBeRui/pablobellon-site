/* *********************************
 * ───────── Theme Switching ─────────
 * ********************************* */

// Grab all <link> elements marked for theme swapping
// (used data-theme-link so we can select multiple links)
const themeLinks = document.querySelectorAll("link[data-theme-link]");

// Load saved theme or default to '80s'
let currentTheme = sessionStorage.getItem("theme") || "80s";

// Applies the given theme by rewriting each link's href.
function applyTheme(theme) {
  themeLinks.forEach((link) => {
    link.href = link.href.replace(/\/(80s|present)\//, `/${theme}/`);
  });
}

// Toggle between '80s' and 'present'

export function toggleTheme() {
  currentTheme = currentTheme === "80s" ? "present" : "80s";
  applyTheme(currentTheme);
  sessionStorage.setItem("theme", currentTheme);
}

// Apply theme on initial load
applyTheme(currentTheme);
