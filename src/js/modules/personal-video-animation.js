/**
 * personal-video-animation.js
 * Initiates playback of the personal “coming soon” video after a delay.
 */

/* *********************************
 * ───── Personal Video Animation ─────
 * ********************************* */
// Wait a specified time (default 5000ms) before playing the video
export const personalVideoAnimation = (idValue, milliseconds = 5000) => {
  const comingSoonVid = document.getElementById(idValue);

  if (comingSoonVid) {
    setTimeout(() => {
      comingSoonVid.play();
    }, milliseconds);
  }
};
