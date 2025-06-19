/**
 * replace-with-fade-out.js
 * Performs a smooth fade-out transition on a container element before swapping its innerHTML.
 */

/* *********************************
 * ───── Replace With Fade-Out ─────
 * ********************************* */

export const replaceWithFadeOut = (container, newContent) => {
  // Add fade-out class to start the exit animation
  container.classList.add("smooth-fade-out-upward");

  // After animation duration, replace content and remove the fade-out class
  setTimeout(() => {
    container.innerHTML = "";
    container.innerHTML = newContent;
    container.classList.remove("smooth-fade-out-upward");
  }, 1000); // Delay matches CSS animation duration (1s)
};
