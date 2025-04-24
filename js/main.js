// background video 

const video = document.getElementById("bg-video");



video.addEventListener("canplaythrough", () => {
  
  video.playbackRate = 0.2;
  // re-start 
  video.play();
});