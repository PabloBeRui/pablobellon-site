/**
 * about-me-renderer.js
 * Renders the 'About Me' section with language toggle (English/Spanish) and smooth fade-in effects.
 */

/* *********************************
 * ───── About Me Templates ─────
 * ********************************* */
// HTML templates for English and Spanish descriptions

const descriptionEs = `<p class="smooth-fade-in-upward">
        He pasado la mayor parte de mi vida profesional trabajando en la
        industria, pero siempre he sentido una gran pasión por la informática y
        la tecnología. Hace un tiempo, decidí dar un giro a mi carrera y
        enfocarme en lo que realmente me apasiona: la programación,
        especialmente el desarrollo
        <span class="about-me-span">&nbsp;front-end&nbsp;</span>.
      </p>
      <br />

      <p class="smooth-fade-in-upward">
        Para ello, he completado varios bootcamps intensivos como
        <span class="about-me-span">&nbsp;HackABoss&nbsp;</span>,
        <span class="about-me-span">&nbsp;TokioSchool&nbsp;</span> y
        <span class="about-me-span">&nbsp;CampusDual&nbsp;</span>, donde aprendí de forma
        práctica y rápida las herramientas y tecnologías más utilizadas, como
        <span class="skills-span">&nbsp;HTML&nbsp;</span>,
        <span class="skills-span">&nbsp;CSS&nbsp;</span>,
        <span class="skills-span">&nbsp;JavaScript&nbsp;</span>,
        <span class="skills-span">&nbsp;React&nbsp; </span> (<a
          href="https://elelegido.netlify.app/"
          >https://elelegido.netlify.app/</a
        >) y <span class="skills-span">&nbsp;Git&nbsp</span>. Actualmente, estoy cursando
        el segundo año del ciclo de Desarrollo de Aplicaciones Web (<span
          class="skills-span"
          >&nbsp;DAW&nbsp;</span
        >).
      </p>`;

const descriptionEn = `
      <p class="smooth-fade-in-upward">
        I have spent most of my professional life working in industry, but I
        have always felt a great passion for computing and technology. Some time
        ago, I decided to shift my career and focus on what truly excites me:
        programming, especially
        <span class="about-me-span">&nbsp;front-end&nbsp;</span> development.
      </p>
      <br />

      <p class="smooth-fade-in-upward">
        To that end, I completed several intensive bootcamps such as
        <span class="about-me-span">&nbsp;HackABoss&nbsp;</span>,
        <span class="about-me-span">&nbsp;TokioSchool&nbsp;</span> and
        <span class="about-me-span">&nbsp;CampusDual&nbsp;</span>, where I learned in a
        practical and fast-paced way the most widely used tools and technologies
        like <span class="skills-span">&nbsp;HTML&nbsp;</span>,
        <span class="skills-span">&nbsp;CSS&nbsp;</span>,
        <span class="skills-span">&nbsp;JavaScript&nbsp;</span>,
        <span class="skills-span">&nbsp;React&nbsp; </span> (<a
          href="https://elelegido.netlify.app/"
          >https://elelegido.netlify.app/</a
        >) and <span class="skills-span">&nbsp;Git&nbsp;</span>. Currently, I am
        in my second year of the Web Application Development program (<span
          class="skills-span"
          >&nbsp;DAW&nbsp;</span
        >).
      </p>
      `;

// HTML templates for language toggle buttons

const ButtonEs = `<button id="lang-btn" class="lang-toggle-btn nav-button"><img src="../../images/icons/globe_green_transparent_language.png" id="lang-ico"> EN</button>`;
const ButtonEn = `<button id="lang-btn" class="lang-toggle-btn nav-button"><img src="../../images/icons/globe_green_transparent_language.png" id="lang-ico"> ES</button>`;

// Tracks current language state: false = English, true = Spanish
let esOrEn = false;

/* *********************************
 * ───── About Me Renderer ─────
 * ********************************* */

export const aboutMeRenderer = () => {
  // Description Div
  const descriptionDiv = document.querySelector("#description-div");
  // Language button container div
  const langDivBtn = document.querySelector("#lang-btn-div");

  //render function based on esOrEn boolean
  const lanConditionalChange = () => {
    if (esOrEn) {
      descriptionDiv.innerHTML = descriptionEs;
      langDivBtn.innerHTML = ButtonEs;
    } else {
      descriptionDiv.innerHTML = descriptionEn;
      langDivBtn.innerHTML = ButtonEn;
    }
    // language button
    const langBtn = document.querySelector("#lang-btn");
    //listener to re render on language change
    langBtn.addEventListener("click", () => {
      esOrEn = !esOrEn;

      lanConditionalChange();
    });
  };

  //initial render
  lanConditionalChange();
};
