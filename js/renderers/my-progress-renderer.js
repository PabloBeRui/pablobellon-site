import { courses } from "../data/my-progress-data.js";

export const myProgressRenderer = () => {
  const cardContainer = document.querySelector("#progress-cards-container");

  // Clear out any existing cards

  cardContainer.innerHTML = "";

  courses.forEach((course) => {
    // boolean (check o loading)

    const statusHTML = course.approved
      ? `<span class="course-status">✅</span>`
      : `<span class="course-status">⌛</span>`;

    // Build the list of subjects if any
    let subjectsHTML = "";

    if (Array.isArray(course.subjects) && course.subjects.length > 0) {
      subjectsHTML = `
        <div class="course-subjects">
          <ul>
            ${course.subjects
              .map(
                (subj) => `
              <li>
                ${subj.name}
                ${subj.approved ? "✅" : "⌛"}
              </li> <br>`
              )
              .join("")}
          </ul>
        </div>
      `;
    }

    // Build the list of projects if any

    let projectsHTML = "";
    if (Array.isArray(course.projects) && course.projects.length > 0) {
      // Abrimos un <div> con título y luego un <ul> de proyectos
      projectsHTML = `
        <div class="course-projects">
          
          <br>
          <ul>
            ${course.projects
              .map((proj) => `<li>Proyecto ${proj}</li>`)
              .join("")}
          </ul>
        </div>
      `;
    }

    // Assemble the card HTML

    const cardHTML = `
  <div class="course-card">
    <!-- RESUMEN: siempre visible -->
    <div class="course-summary">
      <div class="course-header">
        <img src="${course.img}" alt="${
      course.name
    } icon" class="course-icon" />
        <div class="course-info">
          <a href="${
            course.url
          }" target="_blank" rel="noopener" class="course-link">
            <h3 class="course-title">${course.name}</h3>
          </a>
          <span class="course-year">${course.year}</span>
          <span class="course-approved-emoji">${statusHTML}</span>
        </div>
      </div>
      <br>
      <p class="course-hours">
         <b id="b-hours"> ${
           course.totalHours === 0 ? "" : course.totalHours
         } hours  </b> 
      </p>
      <br>
    </div>

    <!-- DETALLES: por defecto escondidos -->
    <div class="course-details">
      ${subjectsHTML}
      ${projectsHTML}
    </div>
  </div>
`;

    // Add the card to the container

    cardContainer.insertAdjacentHTML("beforeend", cardHTML);
  });

  // Make each card toggle its details when clicked

  document.querySelectorAll(".course-summary").forEach((summary) => {
    summary.addEventListener("click", () => {
      summary.parentElement.classList.toggle("expanded");
    });
  });
};
