/* *********************************
 * ───────── Theme Switching ─────────
 * ********************************* */

// Select all <link> elements marked for theme swapping (using data-theme-link)
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

/**
 * Triggers a smooth full-screen fade transition when switching themes.
 */
export function toggleThemeWithTransition(onMiddleCallback) {
  let overlay = document.querySelector("#theme-transition-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "theme-transition-overlay";
    document.body.appendChild(overlay);
  }

  // Fade in overlay to mask the theme swap
  overlay.classList.add("active");

  setTimeout(() => {
    // Execute state & DOM updates during maximum opacity
    if (typeof onMiddleCallback === "function") {
      onMiddleCallback();
    }
    toggleTheme();

    // Brief delay to allow new CSS assets to process before fading out
    setTimeout(() => {
      overlay.classList.remove("active");
    }, 150);
  }, 350);
}

// Apply theme on initial load
applyTheme(currentTheme);
