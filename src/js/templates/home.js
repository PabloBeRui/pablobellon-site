// This is a template for the "Home" section.

import { typewriterText } from "../data/fragments.js";

const home = `  
  <nav id="change-style-button-nav" class="visible smooth-fade-in-upward">
    <button
      id="change-style-button"
      class="nav-button"
      aria-label="Switch theme"
      title="Switch theme">
      <img src="/assets/images/change.png"
    </button>
  </nav>

  <figure id="coming-soon-figure" class="smooth-fade-in-upward">
    <video
      id="coming-soon-vid"
      src="./assets/video/personal-stud-vid-in-out.mp4"
      muted
      preload="auto"
      playsinline
      aria-label="Intro video of Pablo Bellón working on projects">
      Your browser does not support the video tag.
    </video>

    <div id="text-and-buttons-container">
      <figcaption id="typewriter-text" class="typewriter-class-1">
        ${typewriterText}
      </figcaption>

      <nav id="nav-buttons" class="visible">
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
      </nav>
    </div>
  </figure>
`;

export default home;
