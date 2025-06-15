/*
 Replaces the innerHTML of a container element with a new template,
 applying a smooth fade-out animation before the replacement.
 */

export const replaceWithFadeOut = (container, newContent) => {
  // Add fade-out class to trigger the exit animation
  container.classList.add("smooth-fade-out-upward");

  // Wait for the animation to finish before replacing the content
  setTimeout(() => {
    container.innerHTML = newContent;

    // Remove the fade-out class so that fade-in can work again next time
    container.classList.remove("smooth-fade-out-upward");
  }, 1000); // Duration should match the CSS animation time (1s)
};
