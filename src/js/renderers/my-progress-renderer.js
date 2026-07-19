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
  // // Seleccionar el contenedor para las tarjetas de cursos // Select the container for course cards
  const cardContainer = document.querySelector("#progress-cards-container");

  // Clear out any existing cards
  cardContainer.innerHTML = "";

  courses.forEach((course) => {
    // Compact status badge check icon instead of long text to prevent overflow on mobile
    // // Badge de estado compacto con check (✓) para evitar desbordamientos en pantallas estrechas // Compact status badge check icon (✓) to prevent overflow on narrow screens
    const statusHTML = course.approved
      ? `<span class="status-badge completed" title="Completado" aria-label="Completado">✓</span>`
      : `<span class="status-badge in-progress" title="En curso" aria-label="En curso">⌛</span>`;

    // Build the list of subjects if any
    let subjectsHTML = "";

    if (Array.isArray(course.subjects) && course.subjects.length > 0) {
      subjectsHTML = `
        <div class="course-subjects">
          <h4 class="subjects-header">Asignaturas / Módulos:</h4>
          <ul class="subjects-list">
            ${course.subjects
              .map(
                (subj) => `
              <li class="subject-item">
                <span class="subject-name">${subj.name}</span>
                ${
                  subj.approved
                    ? `<span class="subject-status approved">✓</span>`
                    : `<span class="subject-status pending">⌛</span>`
                }
              </li>`
              )
              /* Join the array of strings into a single HTML string */
              .join("")} 
          </ul>
        </div>
      `;
    }

    // Build projects list if available
    let projectsHTML = "";
    if (Array.isArray(course.projects) && course.projects.length > 0) {
      projectsHTML = `
        <div class="course-projects">
          <h4 class="projects-header">Proyectos destacados:</h4>
          <ul class="projects-list">
            ${course.projects
              .map((proj) => `<li class="project-item">🚀 ${proj}</li>`)
              .join("")} 
          </ul>
        </div>
      `;
    }

    // Assemble the card HTML
    const cardHTML = `
  <div class="course-card">
    <!-- RESUMEN: siempre visible / SUMMARY: always visible -->
    <div class="course-summary">
      <div class="course-header">
        <a href="${
          course.url
        }" target="_blank" rel="noopener" class="course-link">
          <h3 class="course-title">${course.name}</h3>
        </a>
        <div class="course-meta">
          <span class="course-year">${course.year}</span>
          ${statusHTML}
        </div>
      </div>
      
      <div class="logo-hours-div">
        <img src="${course.img}" id="logo-img" alt="${
      course.name
    } icon" class="course-icon" />
        <p class="course-hours">
          <b id="b-hours">${
            course.totalHours === 0 ? "" : course.totalHours + " hrs"
          }</b> 
        </p>
      </div>
    </div>

    <!-- DETALLES: por defecto escondidos / DETAILS: hidden by default -->
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
