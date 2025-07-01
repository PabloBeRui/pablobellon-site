/**
 * my-progress-renderer.js
 * Renders the progress cards for completed and in-progress courses, with expandable details.
 */

/* *********************************
 * ─── Module Imports & Data ─────
 * ********************************* */

import { courses } from "../data/my-progress-data.js";

/* *********************************
 * ────── Progress Renderer ──────
 * ********************************* */

export const myProgressRenderer = () => {
  // Select the container for course cards
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
    // Ensure subjects is an array and has at least one item

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
              /* Join the array of strings into a single HTML string with no separators */
              .join("")} 
          </ul>
        </div>
      `;
    }
    // Build projects list if available
    // Prepare projectsHTML only if projects array is valid and non-empty

    let projectsHTML = "";
    if (Array.isArray(course.projects) && course.projects.length > 0) {
      projectsHTML = `
        <div class="course-projects">
          
          <br>
          <ul>
            ${course.projects
              .map((proj) => `<li>Proyecto ${proj}</li>`)
              /* Join the array of strings into a single HTML string with no separators */
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
      <div class="logo-hours-div"><img src="${course.img}" id="logo-img" alt="${
      course.name
    } icon" class="course-icon" /><p class="course-hours">
         <b id="b-hours"> ${
           course.totalHours === 0 ? "" : course.totalHours
         } hours  </b> 
      </p></div>
      
      <br>
    </div>

    <!-- DETALLES: por defecto escondidos -->
    <div class="course-details">
      ${subjectsHTML}
      ${projectsHTML}
    </div>
  </div>
`;

    // Insert card into container

    cardContainer.insertAdjacentHTML("beforeend", cardHTML);
  });

  // Attach click listener to each summary for expand/collapse behavior

  document.querySelectorAll(".course-summary").forEach((summary) => {
    summary.addEventListener("click", () => {
      summary.parentElement.classList.toggle("expanded");
    });
  });
};
