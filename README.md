# 🌐 Web Personal – Pablo Bellón Ruibal

## 🇪🇸 Español

### ✨ Introducción

Bienvenido a mi **web personal**, construida desde cero con tecnologías modernas del entorno frontend.

Este sitio sirve como presentación profesional, portfolio y entorno experimental para probar y aplicar conceptos de desarrollo web.

> 🔗 También puedes visitar mis proyectos destacados:  
> 🚀 [GymNomads - Plataforma para deportistas viajeros](https://www.gymnomads.dev)  
> 🍽️ [elElegido.netlify.app](https://elelegido.netlify.app)

---

### 👨‍💻 Sobre mí

- 🎓 **Técnico Superior en Desarrollo de Aplicaciones Web (DAW)** finalizado con una calificación media de **8.64**.
- Apasionado por el desarrollo web, la arquitectura frontend y la creación de experiencias digitales modernas.
- Sólida trayectoria previa en la industria combinada con formación intensiva en bootcamps (*HackABoss*, *TokioSchool*, *CampusDual*) y proyectos fullstack.
- En continua formación y aprendizaje de nuevas herramientas y frameworks.

---

### ⚙️ Tecnologías utilizadas

- **Vite** (bundler ultrarrápido)
- **HTML5**, **CSS3**, **JavaScript Vanilla**
- Estructura modular y enfocada en accesibilidad y rendimiento

---

### 🔄 Migración a Vite

Este proyecto fue migrado desde un entorno **Vanilla JavaScript tradicional** a **Vite** para aprovechar:

- 🏎️ Mayor velocidad de desarrollo con hot reload
- 📁 Separación clara entre `src/` y `public/`
- ✨ Mejor organización del código y soporte para imports modernos

> 🎯 **Decisión técnica importante:**  
> Los estilos CSS de los temas (`80s` y `present`) no se encuentran dentro de `src/`, sino en la carpeta `public/` para permitir su **cambio dinámico en tiempo de ejecución**.  
> Esto es necesario porque Vite, al empaquetar los estilos, no permite eliminarlos dinámicamente una vez cargados.

---

### 📊 Comparativa de Rendimiento (Antes y Después de Migrar a Vite)

Este proyecto fue migrado desde un entorno estático tradicional (HTML + CSS + JavaScript Vanilla) a un entorno moderno con **Vite**. Aunque la experiencia visual y la organización interna del código mejoraron notablemente, los tests automatizados de rendimiento muestran ligeras variaciones que detallo a continuación.

### 📈 Tabla comparativa – Lighthouse

| Modo          | Métrica                        | Antes (Vanilla JS) | Después (Vite) | Diferencia |
| ------------- | ------------------------------ | ------------------ | -------------- | ---------- |
| 🖥️ Escritorio | Rendimiento                    | 81                 | 81             | =          |
|               | Accesibilidad                  | 100                | 100            | ✅ Igual   |
|               | SEO                            | 100                | 100            | ✅ Igual   |
|               | Prácticas recomendadas         | 100                | 96             | 🔻 -4      |
|               | Largest Contentful Paint (LCP) | 3.6 s              | 3.6 s          | =          |
|               | Speed Index                    | 0.7 s              | **0.5 s**      | ✅ +rápido |

| 📱 Móvil | Rendimiento | 75 | 71 | 🔻 -4 |
| | Accesibilidad | 100 | 100 | ✅ Igual |
| | SEO | 100 | 100 | ✅ Igual |
| | Prácticas recomendadas | 100 | 96 | 🔻 -4 |
| | Largest Contentful Paint (LCP) | 8.4 s | **22.2 s** | 🔻 +lento |
| | Speed Index | 2.3 s | 4.4 s | 🔻 +lento |

> 📌 **Nota importante**: A pesar del aumento de LCP en móvil (debido al efecto de texto animado y el vídeo de fondo), la experiencia visual real es significativamente más fluida y rápida que en la versión anterior.

---

### 🧠 Interpretación

Las métricas automatizadas de Lighthouse, especialmente en móvil, se ven afectadas por:

- El uso de efectos de texto con animaciones (`setTimeout`, `typewriter effect`)
- Vídeos de fondo cargados en dispositivos con simulación de red 4G lenta
- El renderizado progresivo del contenido principal, que retrasa artificialmente el LCP

Sin embargo, estos elementos fueron decisiones conscientes para ofrecer una experiencia estética retro e inmersiva.

---

## 🇬🇧 English

### ✨ Introduction

Welcome to my **personal website**, built from scratch with modern frontend tools.

This site serves as a professional introduction, portfolio, and experimental playground for applying web development skills.

> 🔗 You can also check out my featured projects:  
> 🚀 [GymNomads - Platform for traveling athletes](https://www.gymnomads.dev)  
> 🍽️ [elElegido.netlify.app](https://elElegido.netlify.app)

---

### 👨‍💻 About me

- 🎓 Graduated with a **Higher VET Degree in Web Application Development (DAW)** with an average grade of **8.64**.
- Passionate about web design, frontend architecture, and modern digital experiences.
- Solid industrial background combined with intensive bootcamp training (*HackABoss*, *TokioSchool*, *CampusDual*) and fullstack projects.
- Constantly learning and expanding technical skills.

---

### ⚙️ Technologies used

- **Vite** (lightning-fast bundler)
- **HTML5**, **CSS3**, **Vanilla JavaScript**
- Modular structure focused on accessibility and performance

---

### 🔄 Vite Migration

This project was migrated from a traditional **Vanilla JS setup** to **Vite** to benefit from:

- 🏎️ Faster development with hot reload
- 📁 Clear separation of `src/` and `public/`
- ✨ Improved code structure and modern import support

> 🎯 **Important technical decision:**  
> Theme-specific CSS is placed in the `public/` folder to allow **dynamic theme switching** at runtime, since Vite's CSS handling does not support removing dynamically loaded styles once bundled.

---

### 📊 Performance Comparison (Before and After Migrating to Vite)

This project was migrated from a traditional static setup (HTML + CSS + Vanilla JS) to a modern environment using **Vite**. While the visual experience and internal code structure improved significantly, automated performance tests show slight variations as detailed below.

### 📈 Lighthouse Comparison Table

| Mode       | Metric                         | Before (Vanilla JS) | After (Vite) | Difference |
| ---------- | ------------------------------ | ------------------- | ------------ | ---------- |
| 🖥️ Desktop | Performance                    | 81                  | 81           | =          |
|            | Accessibility                  | 100                 | 100          | ✅ Same    |
|            | SEO                            | 100                 | 100          | ✅ Same    |
|            | Best Practices                 | 100                 | 96           | 🔻 -4      |
|            | Largest Contentful Paint (LCP) | 3.6 s               | 3.6 s        | =          |
|            | Speed Index                    | 0.7 s               | **0.5 s**    | ✅ Faster  |

| 📱 Mobile | Performance | 75 | 71 | 🔻 -4 |
| | Accessibility | 100 | 100 | ✅ Same |
| | SEO | 100 | 100 | ✅ Same |
| | Best Practices | 100 | 96 | 🔻 -4 |
| | Largest Contentful Paint (LCP) | 8.4 s | **22.2 s** | 🔻 Slower |
| | Speed Index | 2.3 s | 4.4 s | 🔻 Slower |

> 📌 **Important note**: Although LCP increased on mobile (due to animated text and video background), the **actual visual experience is noticeably smoother and faster** than in the previous version.

---

### 🧠 Interpretation

Lighthouse's automated metrics, especially on mobile, are affected by:

- The use of animated text effects (`setTimeout`, typewriter effect)
- Background videos loading under slow network simulation
- Progressive rendering of the main content, which delays perceived LCP

However, these were conscious design choices to create a **retro, immersive experience**.

---

🌐 [Visit pablobellon.com](https://www.pablobellon.com)  
📬 Contact: pablo.bellon.ruibal@gmail.com
