/**
 * tilt-effect.js
 * High-performance 3D perspective tilt effect with dynamic specular glare reflection for interactive elements.
 */

/**
 * Initializes 3D tilt effect on elements matching selector.
 * @param {string|NodeList|Element[]} targets - CSS selector or array of DOM elements.
 * @param {Object} options - Configuration options for tilt angle, scale, and glare.
 */
export const initTiltEffect = (targets, options = {}) => {
  // Respect user preference for reduced motion or touch-only input
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !window.matchMedia("(hover: hover)").matches
  ) {
    return;
  }

  const {
    maxTilt = 10,
    perspective = 1000,
    scale = 1.03,
    speed = 300,
    glare = true,
  } = options;

  const elements =
    typeof targets === "string"
      ? document.querySelectorAll(targets)
      : targets instanceof NodeList
      ? Array.from(targets)
      : Array.isArray(targets)
      ? targets
      : [targets];

  elements.forEach((element) => {
    if (!element || element.dataset.tiltInitialized) return;
    element.dataset.tiltInitialized = "true";

    element.style.transformStyle = "preserve-3d";
    element.style.willChange = "transform";

    let glareElement = null;

    if (glare && !element.querySelector(".tilt-glare-overlay")) {
      glareElement = document.createElement("div");
      glareElement.className = "tilt-glare-overlay";
      glareElement.style.position = "absolute";
      glareElement.style.top = "0";
      glareElement.style.left = "0";
      glareElement.style.width = "100%";
      glareElement.style.height = "100%";
      glareElement.style.pointerEvents = "none";
      glareElement.style.borderRadius = "inherit";
      glareElement.style.opacity = "0";
      glareElement.style.transition = `opacity ${speed}ms ease`;
      glareElement.style.zIndex = "10";
      glareElement.style.background =
        "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.25), transparent 70%)";

      if (window.getComputedStyle(element).position === "static") {
        element.style.position = "relative";
      }

      element.appendChild(glareElement);
    } else {
      glareElement = element.querySelector(".tilt-glare-overlay");
    }

    let rafId = null;

    const onMouseEnter = () => {
      element.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
      if (glareElement) {
        glareElement.style.opacity = "1";
      }
    };

    const onMouseMove = (event) => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (mouseX - centerX) / centerX;
        const percentY = (mouseY - centerY) / centerY;

        const tiltX = (percentY * -maxTilt).toFixed(2);
        const tiltY = (percentX * maxTilt).toFixed(2);

        element.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`;

        if (glareElement) {
          const glareX = ((mouseX / rect.width) * 100).toFixed(1);
          const glareY = ((mouseY / rect.height) * 100).toFixed(1);
          glareElement.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.2), transparent 70%)`;
        }
      });
    };

    const onMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);

      element.style.transition = `transform ${speed * 1.5}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
      element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

      if (glareElement) {
        glareElement.style.opacity = "0";
      }
    };

    element.addEventListener("mouseenter", onMouseEnter);
    element.addEventListener("mousemove", onMouseMove);
    element.addEventListener("mouseleave", onMouseLeave);
  });
};
