//typewriter text content

import { typewriterText } from "../data/fragments.js";

const homeNow = ` 
  <nav id="change-style-button-nav" class="visible smooth-fade-in-upward">
        <button
          class="nav-button"
          id="about-me-button"
          aria-label="See more about me"
          title="About me">
          About me
        </button>
        <button
          class="nav-button"
          id="my-progress-button"
          aria-label="See my progress"
          title="My Progress">
          My Progress
        </button>
        <button
          id="change-style-button"
          class="nav-button"
          aria-label="Switch to 80s theme"
          title="Switch to 80s theme">
          80s
        </button>
      </nav>
      <figure id="coming-soon-figure" class="smooth-fade-in-upward">
        <img
          src="../../assets/images/photo_transition.webp"
          id="img-transition-now"
          alt="Transition photo"
          title="Visual transition" />

        <div id="text-and-buttons-container">
          <figcaption id="typewriter-text" class="typewriter-class-2">
            ${typewriterText}
          </figcaption>
        </div>
      </figure>`;

export default homeNow;
