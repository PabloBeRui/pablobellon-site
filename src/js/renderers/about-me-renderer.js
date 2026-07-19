import {
  ButtonEn,
  ButtonEs,
  descriptionEn,
  descriptionEs,
} from "../data/fragments.js";
import { esOrEn, toggleLanguage } from "../modules/state.js";

/**
 * about-me-renderer.js
 * Renders the 'About Me' section with persistent language toggle (English/Spanish).
 */

/* *********************************
 * ───── About Me Renderer ─────
 * ********************************* */

export const aboutMeRenderer = () => {
  const descriptionDiv = document.querySelector("#description-div");
  const langDivBtn = document.querySelector("#lang-btn-div");

  // Render function based on persistent esOrEn state
  const renderLanguage = () => {
    if (!descriptionDiv || !langDivBtn) return;

    if (esOrEn) {
      descriptionDiv.innerHTML = descriptionEs;
      langDivBtn.innerHTML = ButtonEs;
    } else {
      descriptionDiv.innerHTML = descriptionEn;
      langDivBtn.innerHTML = ButtonEn;
    }

    const langBtn = document.querySelector("#lang-btn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        toggleLanguage();
        renderLanguage();
      });
    }
  };

  // Initial render on module load
  renderLanguage();
};
