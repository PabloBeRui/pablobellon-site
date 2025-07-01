import { backgroundVideo } from "./background-video.js";
import { personalVideoAnimation } from "./personal-video-animation.js";
import { typewriterEffect } from "./typewriter-effect.js";

/* *********************************
 * ───────── Intro Animations ─────────
 * ********************************* */

/**
 * Runs all the introductory animations used in the 80s theme.
 * Includes: personal video animation, VHS background video adjustments,
 * and typewriter terminal effect.
 */

export const introAnimations = () => {
  // Play the personal “coming soon” video after a short delay
  personalVideoAnimation("coming-soon-vid");
  // Slow down the VHS background video and restart smoothly in 80s theme
  backgroundVideo("bg-video");
  // Run the retro terminal typewriter effect on the intro text
  typewriterEffect("typewriter-text");
};
