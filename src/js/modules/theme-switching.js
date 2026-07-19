/* *********************************
 * ───────── Theme Switching ─────────
 * ********************************* */

// Grab all <link> elements marked for theme swapping (used data-theme-link so we can select multiple links)
// // Seleccionar todos los elementos <link> marcados para intercambio de tema // Select all <link> elements marked for theme swapping
const themeLinks = document.querySelectorAll("link[data-theme-link]");

// Load saved theme or default to '80s'
// // Cargar tema guardado o por defecto '80s' // Load saved theme or default to '80s'
let currentTheme = sessionStorage.getItem("theme") || "80s";

// Applies the given theme by rewriting each link's href.
// // Aplica el tema dado reescribiendo la propiedad href de cada enlace // Applies the given theme by rewriting each link's href
function applyTheme(theme) {
  themeLinks.forEach((link) => {
    link.href = link.href.replace(/\/(80s|present)\//, `/${theme}/`);
  });
}

// Toggle between '80s' and 'present'
// // Alternar entre el tema '80s' y 'present' // Toggle between '80s' and 'present'
export function toggleTheme() {
  currentTheme = currentTheme === "80s" ? "present" : "80s";
  applyTheme(currentTheme);
  sessionStorage.setItem("theme", currentTheme);
}

/**
 * Triggers a smooth full-screen fade transition when switching themes.
 * // Ejecuta una transición de desvanecimiento suave a pantalla completa al cambiar de tema
 */
export function toggleThemeWithTransition(onMiddleCallback) {
  let overlay = document.querySelector("#theme-transition-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "theme-transition-overlay";
    document.body.appendChild(overlay);
  }

  // Fade in overlay to mask the theme swap / Oscurecer pantalla para ocultar el cambio de tema
  overlay.classList.add("active");

  setTimeout(() => {
    // Execute state & DOM updates during maximum opacity / Ejecutar cambios de estado y DOM durante opacidad máxima
    if (typeof onMiddleCallback === "function") {
      onMiddleCallback();
    }
    toggleTheme();

    // Brief delay to allow new CSS assets to process before fading out / Breve pausa para permitir procesamiento de nuevos estilos antes de desvanecer
    setTimeout(() => {
      overlay.classList.remove("active");
    }, 150);
  }, 350);
}

// Apply theme on initial load
applyTheme(currentTheme);
