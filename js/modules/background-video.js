// VHS Background Video playback speed

export const backgroundVideo = (idValue) => {
  const video = document.getElementById(idValue);

  // Listen for 'canplaythrough' to know the video is fully buffered,
  // then slow playback to 0.2x and restart for a smooth, glitch-free effect

  video.addEventListener("canplaythrough", () => {
    video.playbackRate = 0.2;
    // re-start
    video.play();
  });
};
