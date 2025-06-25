//typewriter text content

import { typewriterText } from "../data/fragments.js";

const homeNow = ` 
<nav id="change-style-button-nav" class="visible smooth-fade-in-upward">
<button class="nav-button" id="about-me-button">About me</button>
                <button class="nav-button" id="my-progress-button">My Progress</button>
          <button id="change-style-button" class="nav-button">80s</button>
        </nav><figure id="coming-soon-figure" class="smooth-fade-in-upward">
            <img src="../../images/photo_transition.webp" id="img-transition-now">
            <div id="text-and-buttons-container">
              <figcaption
                id="typewriter-text"
                class="typewriter-class-2">${typewriterText}</figcaption>
              
            </div>
          </figure>`;

export default homeNow;
