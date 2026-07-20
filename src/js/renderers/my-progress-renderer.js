/**
 * my-progress-renderer.js
 * Renders the progress cards for completed and in-progress courses, with expandable details.
 */

/* *********************************
 * ─── Module Imports & Data ─────
 * ********************************* */

import { courses } from "../data/my-progress-data.js";
import { initTiltEffect } from "../modules/tilt-effect.js";

/* *********************************
 * ────── Progress Renderer ──────
 * ********************************* */

export const myProgressRenderer = () => {
  // Select the container for course cards
  const cardContainer = document.querySelector("#progress-cards-container");
  if (!cardContainer) return;

  // Clear out any existing cards
  cardContainer.innerHTML = "";

  // Render top metrics stats banner
  const statsBannerHTML = `
    <div class="progress-stats-banner">
      <div class="stat-item">
        <span class="stat-value">+3.300</span>
        <span class="stat-label">Horas de Formación</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value highlight">8.64</span>
        <span class="stat-label">Nota Media DAW</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">100%</span>
        <span class="stat-label">Cursos Completados</span>
      </div>
    </div>
  `;

  cardContainer.insertAdjacentHTML("beforeend", statsBannerHTML);

  courses.forEach((course) => {
    // Compact status badge check icon instead of long text to prevent overflow on mobile
    const statusHTML = course.approved
      ? `<span class="status-badge completed" title="Completed" aria-label="Completed">✓</span>`
      : `<span class="status-badge in-progress" title="In Progress" aria-label="In Progress">⌛</span>`;

    // Final grade badge if present
    const finalGradeHTML = course.finalGrade
      ? `<span class="final-grade-badge" title="Nota media final / Final average grade">Nota Media: ${course.finalGrade}</span>`
      : "";

    // Build the list of subjects if any
    let subjectsHTML = "";

    if (Array.isArray(course.subjects) && course.subjects.length > 0) {
      subjectsHTML = `
        <div class="course-subjects">
          <h4 class="subjects-header">Asignaturas / Módulos:</h4>
          <ul class="subjects-list">
            ${course.subjects
              .map((subj) => {
                let gradeHTML = "";
                if (subj.grade) {
                  const isTen = subj.grade === "10";
                  const isNine = subj.grade === "9";
                  const gradeClass = isTen
                    ? "subject-grade top-grade"
                    : isNine
                    ? "subject-grade high-grade"
                    : "subject-grade";

                  gradeHTML = `<span class="${gradeClass}" title="Nota / Grade: ${subj.grade}">${
                    isTen ? "10 ⭐" : subj.grade
                  }</span>`;
                }

                return `
              <li class="subject-item">
                <span class="subject-name">${subj.name}</span>
                <div class="subject-badges">
                  ${gradeHTML}
                  ${
                    subj.approved
                      ? `<span class="subject-status approved">✓</span>`
                      : `<span class="subject-status pending">⌛</span>`
                  }
                </div>
              </li>`;
              })
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

    // Check if course has expandable details and build accordion chevron icon
    const hasDetails =
      (Array.isArray(course.subjects) && course.subjects.length > 0) ||
      (Array.isArray(course.projects) && course.projects.length > 0);
    const accordionHTML = hasDetails
      ? `<span class="accordion-icon" title="Toggle details" aria-hidden="true">▾</span>`
      : "";

    // Assemble the card HTML with accessibility attributes
    const cardHTML = `
  <div class="course-card" id="card-${course.id}">
    <!-- SUMMARY: always visible -->
    <div class="course-summary" tabindex="0" role="button" aria-expanded="false" aria-controls="details-${course.id}">
      <div class="course-header">
        <a href="${
          course.url
        }" target="_blank" rel="noopener" class="course-link">
          <h3 class="course-title">${course.name}</h3>
        </a>
        <div class="course-meta">
          ${finalGradeHTML}
          <span class="course-year">${course.year}</span>
          ${statusHTML}
          ${accordionHTML}
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

    <!-- DETAILS: hidden by default -->
    <div class="course-details" id="details-${course.id}">
      ${subjectsHTML}
      ${projectsHTML}
    </div>
  </div>
`;

    // Insert card into container
    cardContainer.insertAdjacentHTML("beforeend", cardHTML);
  });

  // Attach click and keyboard listeners to each summary for accessible expand/collapse behavior
  document.querySelectorAll(".course-summary").forEach((summary) => {
    const toggleExpand = () => {
      const card = summary.parentElement;
      const isExpanded = card.classList.toggle("expanded");
      summary.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    };

    summary.addEventListener("click", toggleExpand);

    // Support keyboard activation using Enter or Space key
    summary.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleExpand();
      }
    });
  });

  // Initialize 3D tilt effect on rendered course cards
  initTiltEffect(".course-card", { maxTilt: 8, scale: 1.02 });
};
