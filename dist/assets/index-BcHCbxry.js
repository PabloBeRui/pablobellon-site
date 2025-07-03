(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const g=t=>{const e=document.getElementById(t);e.addEventListener("canplaythrough",()=>{e.playbackRate=.2,e.play()})},v=(t,e=5e3)=>{const a=document.getElementById(t);a&&setTimeout(()=>{a.play()},e)},f=`<p class="smooth-fade-in-upward">
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
      </p>`,h=`
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
      `,y='<button id="lang-btn" class="lang-toggle-btn nav-button"><img src="../../assets/images/icons/globe_green_transparent_language.png" id="lang-ico"> EN</button>',w='<button id="lang-btn" class="lang-toggle-btn nav-button"><img src="../../assets/images/icons/globe_green_transparent_language.png" id="lang-ico"> ES</button>',m="I’m currently studying and working on new projects 👾 Stay tuned for updates!",k=t=>{document.getElementById("typewriter-text").innerHTML="";const e=m,a=document.getElementById(t);let o=0;function s(){if(o<e.length)a.innerHTML+=e.charAt(o),o++,setTimeout(s,60);else{a.classList.add("typewriter-class-2");const n=new CustomEvent("typewriterFinished");document.dispatchEvent(n)}}a&&s()},S=()=>{v("coming-soon-vid"),g("bg-video"),k("typewriter-text")},c=`  
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
        ${m}
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
`,d=` 
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
          <img src="/assets/images/change.png"
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
            ${m}
          </figcaption>
        </div>
      </figure>`,L=()=>{const t=document.querySelector("#section-global-container"),a=(sessionStorage.getItem("theme")||"80s")==="present";return t.innerHTML="",t.innerHTML=a?d:c,a},E=[{id:"hackaboss-2023",name:"HackABoss",year:2023,totalHours:400,approved:!0,img:"../../assets/images/icons/my-progress-icons/hackaboss.png",url:"https://www.hackaboss.com/",projects:[],subjects:[{id:"web-full-stack-javascript",name:"Web Full Stack Javascript",approved:!0}]},{id:"campusdual-tic-2023",name:"CampusDual TIC",year:2023,totalHours:480,approved:!0,img:"../../assets/images/icons/my-progress-icons/campusdual.png",url:"https://www.campusdual.com/",projects:[],subjects:[{id:"introduccion-a-la-programacion",name:"Introducción a la Programación",approved:!0}]},{id:"tokioschool-2024",name:"TokioSchool",year:2024,totalHours:400,approved:!0,img:"../../assets/images/icons/my-progress-icons/tokioschool.png",url:"https://www.tokioschool.com/",projects:["<a href='https://elelegido.netlify.app/'>Restaurante El Elegido</a>"],subjects:[{id:"front-end-html5-css3-javascript",name:"Front-End: HTML5, CSS3, JavaScript",approved:!0}]},{id:"daw-2025",name:"DAW",year:2025,totalHours:2e3,approved:!1,img:"../../assets/images/icons/my-progress-icons/ilerna.png",url:"https://www.ilerna.es/",projects:[],subjects:[{id:"lenguajes-de-marcas-y-sistemas-de-gestion-de-informacion",name:"Lenguajes de marcas y sistemas de gestión de información",approved:!0},{id:"sistemas-informaticos",name:"Sistemas informáticos",approved:!0},{id:"bases-de-datos",name:"Bases de datos",approved:!0},{id:"programacion",name:"Programación",approved:!0},{id:"entornos-de-desarrollo",name:"Entornos de desarrollo",approved:!0},{id:"ingles-profesional",name:"Inglés profesional",approved:!0},{id:"digitalizacion-aplicada-a-los-sectores-productivos",name:"Digitalización aplicada a los sectores productivos",approved:!0},{id:"sostenibilidad-aplicada-al-sistema-productivo",name:"Sostenibilidad aplicada al sistema productivo",approved:!0},{id:"diseno-de-interfaces-web",name:"Diseño de interfaces web",approved:!0},{id:"itinerario-personal-para-la-empleabilidad-i",name:"Itinerario personal para la empleabilidad I",approved:!1},{id:"desarrollo-web-entorno-cliente",name:"Desarrollo web entorno cliente",approved:!1},{id:"desarrollo-web-entorno-servidor",name:"Desarrollo web entorno servidor",approved:!1},{id:"despliegue-de-aplicaciones-web",name:"Despliegue de aplicaciones web",approved:!1},{id:"itinerario-personal-para-la-empleabilidad-ii",name:"Itinerario personal para la empleabilidad II",approved:!1},{id:"proyecto-intermodular-de-desarrollo-de-aplicaciones-web",name:"Proyecto intermodular de desarrollo de aplicaciones web",approved:!1},{id:"modulo-profesional-optativo",name:"Módulo profesional optativo",approved:!1}]}],T=()=>{const t=document.querySelector("#progress-cards-container");t.innerHTML="",E.forEach(e=>{const a=e.approved?'<span class="course-status">✅</span>':'<span class="course-status">⌛</span>';let o="";Array.isArray(e.subjects)&&e.subjects.length>0&&(o=`
        <div class="course-subjects">
          <ul>
            ${e.subjects.map(i=>`
              <li>
                ${i.name}
                ${i.approved?"✅":"⌛"}
              </li> <br>`).join("")} 
          </ul>
        </div>
      `);let s="";Array.isArray(e.projects)&&e.projects.length>0&&(s=`
        <div class="course-projects">
          
          <br>
          <ul>
            ${e.projects.map(i=>`<li>Proyecto ${i}</li>`).join("")} 
          </ul>
        </div>
      `);const n=`
  <div class="course-card">
    <!-- RESUMEN: siempre visible -->
    <div class="course-summary">
      <div class="course-header">
        
        <div class="course-info">
          <a href="${e.url}" target="_blank" rel="noopener" class="course-link">
            <h3 class="course-title">${e.name}</h3>
          </a>
          <span class="course-year">${e.year}</span>
          <span class="course-approved-emoji">${a}</span>
        </div>
      </div>
      <br>
      <div class="logo-hours-div"><img src="${e.img}" id="logo-img" alt="${e.name} icon" class="course-icon" /><p class="course-hours">
         <b id="b-hours"> ${e.totalHours===0?"":e.totalHours} hours  </b> 
      </p></div>
      
      <br>
    </div>

    <!-- DETALLES: por defecto escondidos -->
    <div class="course-details">
      ${o}
      ${s}
    </div>
  </div>
`;t.insertAdjacentHTML("beforeend",n)}),document.querySelectorAll(".course-summary").forEach(e=>{e.addEventListener("click",()=>{e.parentElement.classList.toggle("expanded")})})};let p=!1;const M=()=>{const t=document.querySelector("#description-div"),e=document.querySelector("#lang-btn-div"),a=()=>{p?(t.innerHTML=f,e.innerHTML=y):(t.innerHTML=h,e.innerHTML=w),document.querySelector("#lang-btn").addEventListener("click",()=>{p=!p,a()})};a()},I=`<div id="about-me-div-content" class="smooth-fade-in-upward">
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
      </div>`,H=`
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
`,u=(t,e)=>{t.classList.add("smooth-fade-out-upward"),setTimeout(()=>{t.innerHTML=e,t.classList.remove("smooth-fade-out-upward")},1e3)},j=document.querySelectorAll("link[data-theme-link]");let l=sessionStorage.getItem("theme")||"80s";function b(t){j.forEach(e=>{e.href=e.href.replace(/\/(80s|present)\//,`/${t}/`)})}function A(){l=l==="80s"?"present":"80s",b(l),sessionStorage.setItem("theme",l)}b(l);let r=sessionStorage.getItem("theme")==="present";const B=()=>{r=!r,sessionStorage.setItem("theme",r?"present":"80s")},C=(t,e)=>{const a=document.querySelector("#nav-buttons"),o=document.querySelector("#change-style-button-nav");document.addEventListener("typewriterFinished",()=>{a.classList.add("visible"),o.classList.add("visible")});const s=document.querySelector(t);s.addEventListener("click",n=>{n.target?.id==="about-me-button"?(s.innerHTML=I,M()):n.target?.id==="my-progress-button"?(s.innerHTML=H,T()):n.target?.id==="back-button"?u(s,r?d:c):n.target.closest?.("#change-style-button")&&(setTimeout(()=>{A()},1e3),B(),u(s,r?d:c))})},D=t=>{window.addEventListener("click",e=>{const a=document.querySelector("#section-global-container"),o=e.target.closest(t),s=e.target.closest("button");!o&&!s&&u(a,r?d:c)})};document.addEventListener("DOMContentLoaded",()=>{L()||S(),C("#section-global-container"),D("#section-global-container")});
