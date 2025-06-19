/**
 * state.js
 * Shared state management module for theme and template toggling.
 * This allows different parts of the app to access and update global state.
 */

/* *********************************
 * ────── Theme Mode State ──────
 * *********************************
 * Controls whether the site is in "80s mode" (true) or "now mode" (false).
 * This flag is shared between modules such as navigation-buttons.js and touch-out-back.js.
 */

// Default value: false = now mode, true = 80s mode
export let nowOr80s = sessionStorage.getItem("theme") ==="present"


/**
 * Toggles the current theme mode.
 * Call this to switch between "now" and "80s".
 */
export const toggleNowOr80s = () => {
    nowOr80s = !nowOr80s;
    sessionStorage.setItem("theme", nowOr80s ? "present" : "80s");
};

