(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const y=s=>{const e=document.getElementById(s);if(e){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.pause();return}e.addEventListener("canplaythrough",()=>{e.playbackRate=.2,e.play()})}},w=(s,e=5e3)=>{const a=document.getElementById(s);a&&setTimeout(()=>{a.play()},e)},k=`
<p class="smooth-fade-in-upward">
  He pasado la mayor parte de mi vida profesional trabajando en la industria, pero siempre he sentido una gran pasión por la informática y la tecnología. Hace un tiempo decidí dar un giro a mi carrera y enfocarme en lo que realmente me apasiona: la programación, especialmente el desarrollo <span class="about-me-span">&nbsp;front-end&nbsp;</span>.
</p>
<br />

<p class="smooth-fade-in-upward">
  Para dar el salto completé varios bootcamps intensivos como <span class="about-me-span">&nbsp;HackABoss&nbsp;</span>, <span class="about-me-span">&nbsp;TokioSchool&nbsp;</span> y <span class="about-me-span">&nbsp;CampusDual&nbsp;</span>, y posteriormente finalicé el ciclo superior de <span class="skills-span">&nbsp;DAW&nbsp;</span> (Desarrollo de Aplicaciones Web).
</p>

<p class="smooth-fade-in-upward">
  Mi proyecto final de ciclo es <a href="https://www.gymnomads.dev" target="_blank" rel="noopener" class="project-link"><strong>GymNomads</strong></a>: una aplicación pensada para deportistas viajeros.
</p>
<br />
<p class="smooth-fade-in-upward">
  Desarrollado como fullstack con fuerte enfoque frontend, incorpora:
  <br /><br />
  <span class="skills-span">&nbsp;React + TypeScript&nbsp;</span> · <span class="skills-span">&nbsp;Vite&nbsp;</span> · 
  <span class="skills-span">&nbsp;SCSS / Bootstrap &nbsp;</span> · <br />
  <br />
  Backend: <span class="skills-span">&nbsp;Node.js + Express&nbsp;</span> · <span class="skills-span">&nbsp;MySQL&nbsp;</span> <br /><br />
  Testing: Vitest / React Testing Library y Jest / Supertest
</p><br />

<p class="smooth-fade-in-upward">
  He prestado especial atención a la <span class="skills-span">&nbsp;UI/UX&nbsp;</span> con una experiencia intuitiva y responsive.
</p>

<p class="smooth-fade-in-upward">
  Actualmente estoy en búsqueda activa de empresa donde realizar las prácticas formativas (FCT). Busco incorporarme a un equipo donde pueda seguir creciendo en desarrollo frontend, contribuir y aportar desde el primer momento con una actitud inmejorable. 
</p><br /><br />
`,S=`
<p class="smooth-fade-in-upward">
  I have spent most of my professional life working in industry, but I have always felt a strong passion for computing and technology. Some time ago, I decided to make a career shift and focus on what truly excites me: programming, especially <span class="about-me-span">&nbsp;front-end&nbsp;</span> development.
</p>
<br />

<p class="smooth-fade-in-upward">
  To make the transition, I completed several intensive bootcamps such as <span class="about-me-span">&nbsp;HackABoss&nbsp;</span>, <span class="about-me-span">&nbsp;TokioSchool&nbsp;</span> and <span class="about-me-span">&nbsp;CampusDual&nbsp;</span>, and later finished the higher-level cycle in <span class="skills-span">&nbsp;DAW&nbsp;</span> (Web Application Development).
</p>

<p class="smooth-fade-in-upward">
  My final cycle project is <a href="https://www.gymnomads.dev" target="_blank" rel="noopener" class="project-link"><strong>GymNomads</strong></a>: an application designed for traveling athletes.
</p>
<br />

<p class="smooth-fade-in-upward">
  Developed as fullstack with a strong frontend focus, it incorporates:
  <br /><br />
  <span class="skills-span">&nbsp;React + TypeScript&nbsp;</span> · <span class="skills-span">&nbsp;Vite&nbsp;</span> · 
  <span class="skills-span">&nbsp;SCSS / Bootstrap&nbsp;</span> · <br />
  <br />
  Backend: <span class="skills-span">&nbsp;Node.js + Express&nbsp;</span> · <span class="skills-span">&nbsp;MySQL&nbsp;</span> <br /><br />
  Testing: Vitest / React Testing Library and Jest / Supertest
</p><br />

<p class="smooth-fade-in-upward">
  I have paid special attention to <span class="skills-span">&nbsp;UI/UX&nbsp;</span> to deliver an intuitive and responsive experience.
</p>

<p class="smooth-fade-in-upward">
  I am currently actively looking for a company to carry out my mandatory internship (FCT). I am seeking to join a team where I can continue growing in frontend development, contribute, and add value from day one with an excellent attitude.
</p><br /><br />
`,L='<button id="lang-btn" class="lang-toggle-btn nav-button"><img src="../../assets/images/icons/globe_green_transparent_language.png" id="lang-ico"> EN</button>',j='<button id="lang-btn" class="lang-toggle-btn nav-button"><img src="../../assets/images/icons/globe_green_transparent_language.png" id="lang-ico"> ES</button>',u="Junior Developer with a relentless growth mindset. 100% driven, always learning 👾 ",T=s=>{const e=document.getElementById(s);if(!e)return;const a=u;let n=0,t=null,o=!1;const i=()=>{if(o)return;o=!0,t&&clearTimeout(t),e.innerHTML=a,e.classList.add("typewriter-class-2"),e.style.cursor="default",e.removeAttribute("title"),sessionStorage.setItem("typewriterSeen","true");const f=new CustomEvent("typewriterFinished");document.dispatchEvent(f)};if(sessionStorage.getItem("typewriterSeen")==="true"){i();return}e.innerHTML="",e.style.cursor="pointer",e.setAttribute("title","Click to skip animation");const r=()=>{e.removeEventListener("click",r),i()};e.addEventListener("click",r);function b(){o||(n<a.length?(e.innerHTML+=a.charAt(n),n++,t=setTimeout(b,60)):(e.removeEventListener("click",r),i()))}b()},E=()=>{w("coming-soon-vid"),y("bg-video"),T("typewriter-text")},g=`  
 <nav id="change-style-button-nav" class="visible smooth-fade-in-upward">
    <div class="changer">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <button
      id="change-style-button"
      class="nav-button"
      aria-label="Switch theme"
      title="Switch theme">
      <img src="/assets/images/change.png" alt="Switch icon" />
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
        ${u}
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
`,v=` 
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
          aria-label="Switch theme"
          title="Switch theme">
          <img src="/assets/images/change.png" alt="Switch theme icon" />
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
            ${u}
          </figcaption>
        </div>
      </figure>`,I=()=>{const s=document.querySelector("#section-global-container"),a=(sessionStorage.getItem("theme")||"80s")==="present";return s.innerHTML="",s.innerHTML=a?v:g,a},M=[{id:"hackaboss-2023",name:"HackABoss",year:2023,totalHours:400,approved:!0,img:"../../assets/images/icons/my-progress-icons/hackaboss.png",url:"https://www.hackaboss.com/",projects:[],subjects:[{id:"web-full-stack-javascript",name:"Web Full Stack Javascript",approved:!0}]},{id:"campusdual-tic-2023",name:"CampusDual TIC",year:2023,totalHours:480,approved:!0,img:"../../assets/images/icons/my-progress-icons/campusdual.png",url:"https://www.campusdual.com/",projects:[],subjects:[{id:"introduccion-a-la-programacion",name:"Introducción a la Programación",approved:!0}]},{id:"tokioschool-2024",name:"TokioSchool",year:2024,totalHours:400,approved:!0,img:"../../assets/images/icons/my-progress-icons/tokioschool.png",url:"https://www.tokioschool.com/",projects:["<a href='https://elelegido.netlify.app/'>Restaurante El Elegido</a>"],subjects:[{id:"front-end-html5-css3-javascript",name:"Front-End: HTML5, CSS3, JavaScript",approved:!0}]},{id:"daw-2025",name:"DAW",year:2025,totalHours:2e3,approved:!0,img:"../../assets/images/icons/my-progress-icons/ilerna.png",url:"https://www.ilerna.es/",projects:["<a href='https://www.gymnomads.dev/'>GymNomads</a>"],subjects:[{id:"lenguajes-de-marcas-y-sistemas-de-gestion-de-informacion",name:"Lenguajes de marcas y sistemas de gestión de información",approved:!0},{id:"sistemas-informaticos",name:"Sistemas informáticos",approved:!0},{id:"bases-de-datos",name:"Bases de datos",approved:!0},{id:"programacion",name:"Programación",approved:!0},{id:"entornos-de-desarrollo",name:"Entornos de desarrollo",approved:!0},{id:"ingles-profesional",name:"Inglés profesional",approved:!0},{id:"digitalizacion-aplicada-a-los-sectores-productivos",name:"Digitalización aplicada a los sectores productivos",approved:!0},{id:"sostenibilidad-aplicada-al-sistema-productivo",name:"Sostenibilidad aplicada al sistema productivo",approved:!0},{id:"diseno-de-interfaces-web",name:"Diseño de interfaces web",approved:!0},{id:"itinerario-personal-para-la-empleabilidad-i",name:"Itinerario personal para la empleabilidad I",approved:!0},{id:"desarrollo-web-entorno-cliente",name:"Desarrollo web entorno cliente",approved:!0},{id:"desarrollo-web-entorno-servidor",name:"Desarrollo web entorno servidor",approved:!0},{id:"despliegue-de-aplicaciones-web",name:"Despliegue de aplicaciones web",approved:!0},{id:"itinerario-personal-para-la-empleabilidad-ii",name:"Itinerario personal para la empleabilidad II",approved:!0},{id:"proyecto-intermodular-de-desarrollo-de-aplicaciones-web",name:"Proyecto intermodular de desarrollo de aplicaciones web",approved:!0},{id:"modulo-profesional-optativo",name:"Módulo profesional optativo",approved:!0}]},{id:"java-udemy-2025",name:"JavaScript Udemy",year:2025,totalHours:22.5,approved:!0,img:"../../assets/images/icons/my-progress-icons/udemy.png",url:"https://www.udemy.com/course/javascript-fernando-herrera/",projects:[],subjects:[{id:"udemy-javascript",name:"JavaScript Moderno: Guía para dominar el lenguaje",approved:!0}]},{id:"git-udemy-2025",name:"Git Udemy",year:2025,totalHours:12,approved:!0,img:"../../assets/images/icons/my-progress-icons/udemy.png",url:"https://www.udemy.com/course/git-github/",projects:[],subjects:[{id:"udemy-git",name:"GIT+GitHub: Todo un sistema de control de versiones de cero",approved:!0}]}],H=()=>{const s=document.querySelector("#progress-cards-container");s.innerHTML="",M.forEach(e=>{const a=e.approved?'<span class="status-badge completed" title="Completed" aria-label="Completed">✓</span>':'<span class="status-badge in-progress" title="In Progress" aria-label="In Progress">⌛</span>';let n="";Array.isArray(e.subjects)&&e.subjects.length>0&&(n=`
        <div class="course-subjects">
          <h4 class="subjects-header">Asignaturas / Módulos:</h4>
          <ul class="subjects-list">
            ${e.subjects.map(r=>`
              <li class="subject-item">
                <span class="subject-name">${r.name}</span>
                ${r.approved?'<span class="subject-status approved">✓</span>':'<span class="subject-status pending">⌛</span>'}
              </li>`).join("")} 
          </ul>
        </div>
      `);let t="";Array.isArray(e.projects)&&e.projects.length>0&&(t=`
        <div class="course-projects">
          <h4 class="projects-header">Proyectos destacados:</h4>
          <ul class="projects-list">
            ${e.projects.map(r=>`<li class="project-item">🚀 ${r}</li>`).join("")} 
          </ul>
        </div>
      `);const i=Array.isArray(e.subjects)&&e.subjects.length>0||Array.isArray(e.projects)&&e.projects.length>0?'<span class="accordion-icon" title="Toggle details" aria-hidden="true">▾</span>':"",m=`
  <div class="course-card" id="card-${e.id}">
    <!-- SUMMARY: always visible -->
    <div class="course-summary" tabindex="0" role="button" aria-expanded="false" aria-controls="details-${e.id}">
      <div class="course-header">
        <a href="${e.url}" target="_blank" rel="noopener" class="course-link">
          <h3 class="course-title">${e.name}</h3>
        </a>
        <div class="course-meta">
          <span class="course-year">${e.year}</span>
          ${a}
          ${i}
        </div>
      </div>
      
      <div class="logo-hours-div">
        <img src="${e.img}" id="logo-img" alt="${e.name} icon" class="course-icon" />
        <p class="course-hours">
          <b id="b-hours">${e.totalHours===0?"":e.totalHours+" hrs"}</b> 
        </p>
      </div>
    </div>

    <!-- DETAILS: hidden by default -->
    <div class="course-details" id="details-${e.id}">
      ${n}
      ${t}
    </div>
  </div>
`;s.insertAdjacentHTML("beforeend",m)}),document.querySelectorAll(".course-summary").forEach(e=>{const a=()=>{const t=e.parentElement.classList.toggle("expanded");e.setAttribute("aria-expanded",t?"true":"false")};e.addEventListener("click",a),e.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),a())})})};let d=sessionStorage.getItem("theme")==="present";const A=()=>{d=!d,sessionStorage.setItem("theme",d?"present":"80s")};let l=localStorage.getItem("lang")==="es";const B=()=>(l=!l,localStorage.setItem("lang",l?"es":"en"),l),D=()=>{const s=document.querySelector("#description-div"),e=document.querySelector("#lang-btn-div"),a=()=>{if(!s||!e)return;l?(s.innerHTML=k,e.innerHTML=L):(s.innerHTML=S,e.innerHTML=j);const n=document.querySelector("#lang-btn");n&&n.addEventListener("click",()=>{B(),a()})};a()},x=`<div id="about-me-div-content" class="smooth-fade-in-upward">
        <nav id="nav-back-button"><button class="nav-button" id="back-button" aria-label="Go back to main view" title="Back">Back</button></nav>
        <div id="photo-and-description-div">
          <div id="photo-div">
            <img src="./assets/images/profile-photo.png" alt="profile photo" title="Pablo Bellón" />
          </div>

          <div id="lang-btn-div">
          <!-- rendered via JS -->
          </div>

          <div id="description-div" >
         <!-- rendered via JS -->
          </div>
        </div>
      </div>`,C=`
<div id="my-progress-div-content" class="smooth-fade-in-upward">
        <nav id="nav-back-button">
          <button
            class="nav-button"
            id="back-button"
            aria-label="Return to home"
            title="Back">
            Back
          </button>
        </nav>
        <div id="progress-cards-container"></div>
      </div>
`,$=(s,e)=>{s.classList.add("smooth-fade-out-upward"),setTimeout(()=>{s.innerHTML=e,s.classList.remove("smooth-fade-out-upward")},1e3)},P=document.querySelectorAll("link[data-theme-link]");let c=sessionStorage.getItem("theme")||"80s";function h(s){P.forEach(e=>{e.href=e.href.replace(/\/(80s|present)\//,`/${s}/`)})}function q(){c=c==="80s"?"present":"80s",h(c),sessionStorage.setItem("theme",c)}function N(s){let e=document.querySelector("#theme-transition-overlay");e||(e=document.createElement("div"),e.id="theme-transition-overlay",document.body.appendChild(e)),e.classList.add("active"),setTimeout(()=>{typeof s=="function"&&s(),q(),setTimeout(()=>{e.classList.remove("active")},150)},350)}h(c);const p=(s=!1)=>{const e=document.querySelector("#section-global-container");if(!e)return;const n=window.location.hash.replace(/^#\/?/,"").toLowerCase();if(n==="about-me")e.innerHTML=x,D();else if(n==="my-progress")e.innerHTML=C,H();else{const t=d?v:g;s?$(e,t):e.innerHTML=t}},O=()=>{window.addEventListener("hashchange",()=>{p(!1)}),window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"&&p(!1)},R=(s,e)=>{const a=document.querySelector("#nav-buttons"),n=document.querySelector("#change-style-button-nav");document.addEventListener("typewriterFinished",()=>{a?.classList.add("visible"),n?.classList.add("visible")}),document.querySelector(s)?.addEventListener("click",o=>{o.target?.id==="about-me-button"?window.location.hash="#/about-me":o.target?.id==="my-progress-button"?window.location.hash="#/my-progress":o.target?.id==="back-button"?window.location.hash="#/":o.target.closest?.("#change-style-button")&&N(()=>{A(),p(!1)})})},F=s=>{window.addEventListener("click",e=>{const a=e.target.closest(s),n=e.target.closest("button");!a&&!n&&window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"&&(window.location.hash="#/")})};document.addEventListener("DOMContentLoaded",()=>{I()||E(),O(),R("#section-global-container"),F("#section-global-container")});
