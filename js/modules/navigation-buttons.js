import { myProgressRenderer } from "../renderers/my-progress-renderer.js";
import { aboutMeRenderer } from "../renderers/about-me-renderer.js";
import aboutMe from "../templates/about-me.js";
import myProgress from "../templates/my-progress.js";
import home from "../templates/home.js";

// Nav and buttons

/*  This code will handle the visibility of the navigation buttons
   and optional (bool) will show them after the typewriter effect is finished. */

export const navigationButtons = (idValue, wait) => {
  const navButtons = document.querySelector("#nav-buttons");

  if (wait) {
    document.addEventListener("typewriterFinished", () => {
      navButtons.classList.add("visible");
    });
  } else {
    navButtons.classList.add("visible");
  }

  // Navigation buttons functionality

  const variableContent = document.querySelector(idValue);

  //Changing Content
  variableContent.addEventListener("click", (event) => {
    // Button "About me"
    if (event.target && event.target.id === "about-me-button") {
      variableContent.innerHTML = aboutMe;
      aboutMeRenderer();
    }
    // Button "My Progress"
    else if (event.target && event.target.id === "my-progress-button") {
      variableContent.innerHTML = myProgress;
      myProgressRenderer();
    }
    // Button "Back"
    else if (event.target && event.target.id === "back-button") {
      variableContent.innerHTML = home; // Carga el template 'home' con texto y botones ya visibles
    }
  });
};
