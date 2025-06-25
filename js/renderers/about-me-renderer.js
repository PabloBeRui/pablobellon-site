// import HTML templates for English and Spanish descriptions
// import HTML templates for language toggle buttons

import {
  ButtonEn,
  ButtonEs,
  descriptionEn,
  descriptionEs,
} from "../data/fragments.js";

/**
 * about-me-renderer.js
 * Renders the 'About Me' section with language toggle (English/Spanish) and smooth fade-in effects.
 */

// Tracks current language state: false = English, true = Spanish
let esOrEn = false;

/* *********************************
 * ───── About Me Renderer ─────
 * ********************************* */

export const aboutMeRenderer = () => {
  // Description Div
  const descriptionDiv = document.querySelector("#description-div");
  // Language button container div
  const langDivBtn = document.querySelector("#lang-btn-div");

  //render function based on esOrEn boolean
  const lanConditionalChange = () => {
    if (esOrEn) {
      descriptionDiv.innerHTML = descriptionEs;
      langDivBtn.innerHTML = ButtonEs;
    } else {
      descriptionDiv.innerHTML = descriptionEn;
      langDivBtn.innerHTML = ButtonEn;
    }
    // language button
    const langBtn = document.querySelector("#lang-btn");
    //listener to re render on language change
    langBtn.addEventListener("click", () => {
      esOrEn = !esOrEn;

      lanConditionalChange();
    });
  };

  //initial render
  lanConditionalChange();
};
