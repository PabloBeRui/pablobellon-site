const aboutMe = `<div id="about-me-div-content">
        <nav><button class="nav-button" id="back-button">Back</button></nav>
        <div id="photo-and-description-div">
          <div id="photo-div">
            <img src="./images/profile-photo.png" alt="profile photo" />
          </div>

          <div id="toggle-div">
            <label class="toggle-switch">
              <input
                type="checkbox"
                id="lang-toggle"
                role="switch"
                aria-checked="false" />
              <span class="slider">
                <span class="knob"></span>
              </span>
            </label>
          </div>

          <div id="description-div">
           <p>
          I have spent most of my professional life working in industry, but I
          have always felt a great passion for computing and technology. Some
          time ago, I decided to shift my career and focus on what truly excites
          me: programming, especially
          <span class="about-me-span">&nbsp;front-end </span> development.
        </p>
        <br />

        <p>
          To that end, I completed several intensive bootcamps such as
          <span class="about-me-span">&nbsp;HackABoss </span>,
          <span class="about-me-span">&nbsp;TokioSchool </span>, and
          <span class="about-me-span">&nbsp;CampusDual </span>, where I learned,
          in a practical and fast-paced way, the most widely used tools and
          technologies like <span class="skills-span">&nbsp;HTML </span>,
          <span class="skills-span">&nbsp;CSS </span>,
          <span class="skills-span">&nbsp;JavaScript </span>,
          <span class="skills-span">&nbsp;React </span> (<a
            href="https://elelegido.netlify.app/"
            >https://elelegido.netlify.app/</a
          >), and <span class="skills-span">&nbsp;Git </span>. Currently, I am in
          my second year of the Web Application Development program (<span
            class="skills-span"
            >&nbsp;DAW </span
          >).
        </p>
          </div>
        </div>
      </div>`;

export default aboutMe;
// This is a template for the "About Me" section.
