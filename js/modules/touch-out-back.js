import home from "../templates/home.js";

// touchOutBack module:
// Listens for clicks anywhere in the window.
// If the click occurs outside the given container (and not on a button),
// it replaces the container’s innerHTML with the imported `home` template.

export const touchOutBack = (idValue) => {
  window.addEventListener("click", (event) => {
    // Select the main content container
    const variableContent = document.querySelector("#section-global-container");
    // Check if the click was inside the target container
    const clickedInsideContent = event.target.closest(idValue);
    // Check if the click was on any button
    const clickedOnButton = event.target.closest("button");

    // If click was neither inside the container nor on a button,
    // reset the container to the home template
    if (!clickedInsideContent && !clickedOnButton) {
      variableContent.innerHTML = home;
    }
  });
};
