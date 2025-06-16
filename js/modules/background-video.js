/**
 * background-video.js
 * Controls VHS background video playback speed.
 */

/* *********************************
 * ───────── Background Video ─────────
 * ********************************* */

export const backgroundVideo = (idValue) => {
  const video = document.getElementById(idValue);

  /* Listen for 'canplaythrough' to ensure the video is fully buffered,
     then set playback rate to 0.2x and replay for a smooth loop */

  video.addEventListener("canplaythrough", () => {
    video.playbackRate = 0.2;
    // re-start
    video.play();
  });
};
