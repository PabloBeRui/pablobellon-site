(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const N=a=>{const e=document.getElementById(a);if(e){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.pause();return}e.addEventListener("canplaythrough",()=>{e.playbackRate=.2,e.play()})}},F=(a,e=5e3)=>{const o=document.getElementById(a);o&&setTimeout(()=>{o.play()},e)},W=`
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

<br /><br />
`,R=`
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

<br /><br />
`,I='<button id="lang-btn" class="lang-toggle-btn nav-button"><img src="../../assets/images/icons/globe_green_transparent_language.png" id="lang-ico"> EN</button>',$='<button id="lang-btn" class="lang-toggle-btn nav-button"><img src="../../assets/images/icons/globe_green_transparent_language.png" id="lang-ico"> ES</button>',j="Junior Developer with a relentless growth mindset. 100% driven, always learning 👾 ",J=a=>{const e=document.getElementById(a);if(!e)return;const o=j;let r=0,s=null,n=!1;const p=()=>{if(n)return;n=!0,s&&clearTimeout(s),e.innerHTML=o,e.classList.add("typewriter-class-2"),e.style.cursor="default",e.removeAttribute("title"),sessionStorage.setItem("typewriterSeen","true");const d=new CustomEvent("typewriterFinished");document.dispatchEvent(d)};if(sessionStorage.getItem("typewriterSeen")==="true"){p();return}e.innerHTML="",e.style.cursor="pointer",e.setAttribute("title","Click to skip animation");const i=()=>{e.removeEventListener("click",i),p()};e.addEventListener("click",i);function t(){n||(r<o.length?(e.innerHTML+=o.charAt(r),r++,s=setTimeout(t,60)):(e.removeEventListener("click",i),p()))}t()},O=()=>{F("coming-soon-vid"),N("bg-video"),J("typewriter-text")},C=`  
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
        ${j}
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
`,D=` 
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
            ${j}
          </figcaption>
        </div>
      </figure>`,Y=()=>{const a=document.querySelector("#section-global-container"),o=(sessionStorage.getItem("theme")||"80s")==="present";return a.innerHTML="",a.innerHTML=o?D:C,o},V=[{id:"hackaboss-2023",name:"HackABoss",nameEn:"HackABoss",year:2023,totalHours:400,approved:!0,img:"../../assets/images/icons/my-progress-icons/hackaboss.png",url:"https://www.hackaboss.com/",projects:[],subjects:[{id:"web-full-stack-javascript",name:"Web Full Stack Javascript",nameEn:"Full Stack JavaScript Web Development",approved:!0}]},{id:"campusdual-tic-2023",name:"CampusDual TIC",nameEn:"CampusDual TIC",year:2023,totalHours:480,approved:!0,img:"../../assets/images/icons/my-progress-icons/campusdual.png",url:"https://www.campusdual.com/",projects:[],subjects:[{id:"introduccion-a-la-programacion",name:"Introducción a la Programación",nameEn:"Introduction to Programming Fundamentals",approved:!0}]},{id:"tokioschool-2024",name:"TokioSchool",nameEn:"TokioSchool",year:2024,totalHours:400,approved:!0,img:"../../assets/images/icons/my-progress-icons/tokioschool.png",url:"https://www.tokioschool.com/",projects:["<a href='https://elelegido.netlify.app/'>Restaurante El Elegido</a>"],subjects:[{id:"front-end-html5-css3-javascript",name:"Front-End: HTML5, CSS3, JavaScript",nameEn:"Front-End: HTML5, CSS3, JavaScript",approved:!0}]},{id:"daw-2026",name:"DAW",nameEn:"DAW (Higher VET Web Degree)",year:2026,totalHours:2e3,finalGrade:"8.64",approved:!0,img:"../../assets/images/icons/my-progress-icons/ilerna.png",url:"https://www.ilerna.es/",projects:["<a href='https://www.gymnomads.dev/'>GymNomads</a>"],subjects:[{id:"lenguajes-de-marcas-y-sistemas-de-gestion-de-informacion",name:"Lenguajes de marcas y sistemas de gestión de información",nameEn:"Markup Languages & Info Management Systems",grade:"8",approved:!0},{id:"sistemas-informaticos",name:"Sistemas informáticos",nameEn:"Computer Systems",grade:"9",approved:!0},{id:"bases-de-datos",name:"Bases de datos",nameEn:"Databases",grade:"10",approved:!0},{id:"programacion",name:"Programación",nameEn:"Programming",grade:"8",approved:!0},{id:"entornos-de-desarrollo",name:"Entornos de desarrollo",nameEn:"Development Environments",grade:"8",approved:!0},{id:"ingles-profesional",name:"Inglés profesional",nameEn:"Professional English",grade:"9",approved:!0},{id:"digitalizacion-aplicada-a-los-sectores-productivos",name:"Digitalización aplicada a los sectores productivos",nameEn:"Applied Digitalization",grade:"10",approved:!0},{id:"sostenibilidad-aplicada-al-sistema-productivo",name:"Sostenibilidad aplicada al sistema productivo",nameEn:"Applied Sustainability",grade:"10",approved:!0},{id:"itinerario-personal-para-la-empleabilidad-i",name:"Itinerario personal para la empleabilidad I",nameEn:"Personal Employability Pathway I",grade:"5",approved:!0},{id:"desarrollo-web-entorno-cliente",name:"Desarrollo web entorno cliente",nameEn:"Client-Side Web Development",grade:"10",approved:!0},{id:"desarrollo-web-entorno-servidor",name:"Desarrollo web entorno servidor",nameEn:"Server-Side Web Development",grade:"9",approved:!0},{id:"despliegue-de-aplicaciones-web",name:"Despliegue de aplicaciones web",nameEn:"Web Application Deployment",grade:"9",approved:!0},{id:"diseno-de-interfaces-web",name:"Diseño de interfaces web",nameEn:"Web Interface Design",grade:"9",approved:!0},{id:"itinerario-personal-para-la-empleabilidad-ii",name:"Itinerario personal para la empleabilidad II",nameEn:"Personal Employability Pathway II",grade:"9",approved:!0},{id:"proyecto-intermodular-de-desarrollo-de-aplicaciones-web",name:"Proyecto intermodular de desarrollo de aplicaciones web",nameEn:"Intermodular Capstone Project (Web Application Development)",grade:"10",approved:!0},{id:"modulo-profesional-optativo",name:"Módulo profesional optativo",nameEn:"Elective Professional Module",grade:"9",approved:!0}]},{id:"java-udemy-2025",name:"JavaScript Udemy",nameEn:"JavaScript Udemy",year:2025,totalHours:22.5,approved:!0,img:"../../assets/images/icons/my-progress-icons/udemy.png",url:"https://www.udemy.com/course/javascript-fernando-herrera/",projects:[],subjects:[{id:"udemy-javascript",name:"JavaScript Moderno: Guía para dominar el lenguaje",nameEn:"Modern JavaScript: Complete Guide",approved:!0}]},{id:"git-udemy-2025",name:"Git Udemy",nameEn:"Git & GitHub Udemy",year:2025,totalHours:12,approved:!0,img:"../../assets/images/icons/my-progress-icons/udemy.png",url:"https://www.udemy.com/course/git-github/",projects:[],subjects:[{id:"udemy-git",name:"GIT+GitHub: Todo un sistema de control de versiones de cero",nameEn:"GIT+GitHub: Complete Version Control System",approved:!0}]}],H=(a,e={})=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!window.matchMedia("(hover: hover)").matches)return;const{maxTilt:o=10,perspective:r=1e3,scale:s=1.03,speed:n=300,glare:p=!0}=e;(typeof a=="string"?document.querySelectorAll(a):a instanceof NodeList?Array.from(a):Array.isArray(a)?a:[a]).forEach(i=>{if(!i||i.dataset.tiltInitialized)return;i.dataset.tiltInitialized="true",i.style.transformStyle="preserve-3d",i.style.willChange="transform";let t=null;p&&!i.querySelector(".tilt-glare-overlay")?(t=document.createElement("div"),t.className="tilt-glare-overlay",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.pointerEvents="none",t.style.borderRadius="inherit",t.style.opacity="0",t.style.transition=`opacity ${n}ms ease`,t.style.zIndex="10",t.style.background="radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.25), transparent 70%)",window.getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(t)):t=i.querySelector(".tilt-glare-overlay");let d=null;const u=()=>{i.style.transition=`transform ${n}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,t&&(t.style.opacity="1")},g=b=>{d&&cancelAnimationFrame(d),d=requestAnimationFrame(()=>{const m=i.getBoundingClientRect(),y=b.clientX-m.left,f=b.clientY-m.top,l=m.width/2,w=m.height/2,S=(y-l)/l,T=((f-w)/w*-o).toFixed(2),A=(S*o).toFixed(2);if(i.style.transform=`perspective(${r}px) rotateX(${T}deg) rotateY(${A}deg) scale3d(${s}, ${s}, ${s})`,t){const q=(y/m.width*100).toFixed(1),G=(f/m.height*100).toFixed(1);t.style.background=`radial-gradient(circle at ${q}% ${G}%, rgba(255, 255, 255, 0.2), transparent 70%)`}})},h=()=>{d&&cancelAnimationFrame(d),i.style.transition=`transform ${n*1.5}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,i.style.transform=`perspective(${r}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,t&&(t.style.opacity="0")};i.addEventListener("mouseenter",u),i.addEventListener("mousemove",g),i.addEventListener("mouseleave",h)})};let E=sessionStorage.getItem("theme")==="present";const _=()=>{E=!E,sessionStorage.setItem("theme",E?"present":"80s")};let c=localStorage.getItem("lang")==="es";const B=()=>(c=!c,localStorage.setItem("lang",c?"es":"en"),c),x=()=>{const a=document.querySelector("#lang-btn-div-progress");if(a){a.innerHTML=c?I:$;const t=a.querySelector("#lang-btn");t&&t.addEventListener("click",()=>{B(),x()})}const e=document.querySelector("#progress-cards-container");if(!e)return;e.innerHTML="";const o=c?"Horas de Formación":"Training Hours",r=c?"Nota Media DAW":"DAW Average GPA",s=c?"Cursos Completados":"Completed Courses",n=c?"Nota Media:":"Average Grade:",p=c?"Asignaturas / Módulos:":"Subjects / Modules:",L=c?"Proyectos destacados:":"Featured Projects:",i=`
    <div class="progress-stats-banner">
      <div class="stat-item">
        <span class="stat-value">+3.300</span>
        <span class="stat-label">${o}</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value highlight">8.64</span>
        <span class="stat-label">${r}</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">100%</span>
        <span class="stat-label">${s}</span>
      </div>
    </div>
  `;e.insertAdjacentHTML("beforeend",i),V.forEach(t=>{const d=c?t.name:t.nameEn||t.name,u=t.approved?'<span class="status-badge completed" title="Completed" aria-label="Completed">✓</span>':'<span class="status-badge in-progress" title="In Progress" aria-label="In Progress">⌛</span>',g=t.finalGrade?`<span class="final-grade-badge" title="${n} ${t.finalGrade}">${n} ${t.finalGrade}</span>`:"";let h="";Array.isArray(t.subjects)&&t.subjects.length>0&&(h=`
        <div class="course-subjects">
          <h4 class="subjects-header">${p}</h4>
          <ul class="subjects-list">
            ${t.subjects.map(l=>{const w=c?l.name:l.nameEn||l.name;let S="";if(l.grade){const k=l.grade==="10",T=l.grade==="9";S=`<span class="${k?"subject-grade top-grade":T?"subject-grade high-grade":"subject-grade"}" title="Nota / Grade: ${l.grade}">${k?"10 ⭐":l.grade}</span>`}return`
              <li class="subject-item">
                <span class="subject-name">${w}</span>
                <div class="subject-badges">
                  ${S}
                  ${l.approved?'<span class="subject-status approved">✓</span>':'<span class="subject-status pending">⌛</span>'}
                </div>
              </li>`}).join("")} 
          </ul>
        </div>
      `);let b="";Array.isArray(t.projects)&&t.projects.length>0&&(b=`
        <div class="course-projects">
          <h4 class="projects-header">${L}</h4>
          <ul class="projects-list">
            ${t.projects.map(l=>`<li class="project-item">🚀 ${l}</li>`).join("")} 
          </ul>
        </div>
      `);const y=Array.isArray(t.subjects)&&t.subjects.length>0||Array.isArray(t.projects)&&t.projects.length>0?'<span class="accordion-icon" title="Toggle details" aria-hidden="true">▾</span>':"",f=`
  <div class="course-card" id="card-${t.id}">
    <!-- SUMMARY: always visible -->
    <div class="course-summary" tabindex="0" role="button" aria-expanded="false" aria-controls="details-${t.id}">
      <div class="course-header">
        <a href="${t.url}" target="_blank" rel="noopener" class="course-link">
          <h3 class="course-title">${d}</h3>
        </a>
        <div class="course-meta">
          ${g}
          <span class="course-year">${t.year}</span>
          ${u}
          ${y}
        </div>
      </div>
      
      <div class="logo-hours-div">
        <img src="${t.img}" id="logo-img" alt="${d} icon" class="course-icon" />
        <p class="course-hours">
          <b id="b-hours">${t.totalHours===0?"":t.totalHours+" hrs"}</b> 
        </p>
      </div>
    </div>

    <!-- DETAILS: hidden by default -->
    <div class="course-details" id="details-${t.id}">
      ${h}
      ${b}
    </div>
  </div>
`;e.insertAdjacentHTML("beforeend",f)}),document.querySelectorAll(".course-summary").forEach(t=>{const d=()=>{const g=t.parentElement.classList.toggle("expanded");t.setAttribute("aria-expanded",g?"true":"false")};t.addEventListener("click",d),t.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),d())})}),H(".course-card",{maxTilt:8,scale:1.02})},z=()=>{const a=document.querySelector("#description-div"),e=document.querySelector("#lang-btn-div"),o=()=>{if(!a||!e)return;c?(a.innerHTML=W,e.innerHTML=I):(a.innerHTML=R,e.innerHTML=$);const r=document.querySelector("#lang-btn");r&&r.addEventListener("click",()=>{B(),o()})};o(),H("#about-me-div-content",{maxTilt:5,scale:1.01})},X=`<div id="about-me-div-content" class="smooth-fade-in-upward">
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
      </div>`,U=`
<div id="my-progress-div-content" class="smooth-fade-in-upward">
        <nav id="nav-back-button" class="my-progress-nav">
          <button
            class="nav-button"
            id="back-button"
            aria-label="Return to home"
            title="Back">
            Back
          </button>
          <div id="lang-btn-div-progress"></div>
        </nav>
        <div id="progress-cards-container"></div>
      </div>
`,Q=(a,e)=>{a.classList.add("smooth-fade-out-upward"),setTimeout(()=>{a.innerHTML=e,a.classList.remove("smooth-fade-out-upward")},1e3)},K=document.querySelectorAll("link[data-theme-link]");let v=sessionStorage.getItem("theme")||"80s";function P(a){K.forEach(e=>{e.href=e.href.replace(/\/(80s|present)\//,`/${a}/`)})}function Z(){v=v==="80s"?"present":"80s",P(v),sessionStorage.setItem("theme",v)}function ee(a){let e=document.querySelector("#theme-transition-overlay");e||(e=document.createElement("div"),e.id="theme-transition-overlay",document.body.appendChild(e)),e.classList.add("active"),setTimeout(()=>{typeof a=="function"&&a(),Z(),setTimeout(()=>{e.classList.remove("active")},150)},350)}P(v);const M=(a=!1)=>{const e=document.querySelector("#section-global-container");if(!e)return;const r=window.location.hash.replace(/^#\/?/,"").toLowerCase();if(r==="about-me")e.innerHTML=X,z();else if(r==="my-progress")e.innerHTML=U,x();else{const s=E?D:C;a?Q(e,s):e.innerHTML=s}},te=()=>{window.addEventListener("hashchange",()=>{M(!1)}),window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"&&M(!1)},ae=(a,e)=>{const o=document.querySelector("#nav-buttons"),r=document.querySelector("#change-style-button-nav");document.addEventListener("typewriterFinished",()=>{o?.classList.add("visible"),r?.classList.add("visible")}),document.querySelector(a)?.addEventListener("click",n=>{n.target?.id==="about-me-button"?window.location.hash="#/about-me":n.target?.id==="my-progress-button"?window.location.hash="#/my-progress":n.target?.id==="back-button"?window.location.hash="#/":n.target.closest?.("#change-style-button")&&ee(()=>{_(),M(!1)})})},se=a=>{window.addEventListener("click",e=>{const o=e.target.closest(a),r=e.target.closest("button");!o&&!r&&window.location.hash&&window.location.hash!=="#/"&&window.location.hash!=="#"&&(window.location.hash="#/")})};document.addEventListener("DOMContentLoaded",()=>{Y()||O(),te(),ae("#section-global-container"),se("#section-global-container"),H("#img-transition-now, #coming-soon-figure video",{maxTilt:12,scale:1.04})});
