/**
 * background-video.js
 * Controls VHS background video playback speed and respects prefers-reduced-motion.
 */

/* *********************************
 * ───────── Background Video ─────────
 * ********************************* */

export const backgroundVideo = (idValue) => {
  const video = document.getElementById(idValue);
  if (!video) return;

  // Respect user preference for reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    video.pause();
    return;
  }

  /* Listen for 'canplaythrough' to ensure the video is fully buffered,
     then set playback rate to 0.2x and replay for a smooth loop */
  video.addEventListener("canplaythrough", () => {
    video.playbackRate = 0.2;
    video.play();
  });
};
