// Personal video animation

// wait x seconds before starting playback

export const personalVideoAnimation = (idValue, miliseconds = 5000) => {
  const comingSoonVid = document.getElementById(idValue);

  if (comingSoonVid) {
    setTimeout(() => {
      comingSoonVid.play();
    }, miliseconds);
  }
};
