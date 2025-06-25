/**
 * modules/index.js
 * Centralizes and re-exports all animation and navigation modules.
 */

/* *********************************
 * ───────── Module Imports ─────────
 * ********************************* */

import { backgroundVideo } from "./background-video.js";
import { introAnimations } from "./intro-animations.js";
import { loadInitialTemplate } from "./load-initial-template.js";
import { navigationButtons } from "./navigation-buttons.js";
import { personalVideoAnimation } from "./personal-video-animation.js";
import { touchOutBack } from "./touch-out-back.js";
import { typewriterEffect } from "./typewriter-effect.js";

/* *********************************
 * ───────── Module Exports ─────────
 * ********************************* */

export {
  backgroundVideo,
  navigationButtons,
  personalVideoAnimation,
  touchOutBack,
  typewriterEffect,
  loadInitialTemplate,
  introAnimations
};
