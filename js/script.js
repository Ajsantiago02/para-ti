/* ================================================================
   DOS MESES — script.js
   ----------------------------------------------------------------
   TODO tu contenido (nombres, textos, fotos, cupones, correo)
   vive en el objeto CONFIG de aquí abajo. No necesitas tocar
   nada más abajo de "FIN DE CONFIG" a menos que quieras cambiar
   el comportamiento de la experiencia.
   ================================================================ */

const CONFIG = {

  // --------------------------------------------------------------
  // DATOS GENERALES
  // --------------------------------------------------------------
  pareja: {
    nombreYo: "Tu nombre",
    nombreElla: "Su nombre",
    fechaInicio: "18 de junio, 2026", // fecha en que empezaron
  },

  // --------------------------------------------------------------
  // SOBRE — pantalla de entrada
  // --------------------------------------------------------------
  sobre: {
    // Texto pequeño arriba del sobre
    textoPortada: "Tengo algo para ti...",
    // Texto que aparece dentro de la carta al abrir el sobre.
    // Se puede usar varias líneas: cada elemento es un párrafo.
    cartaLineas: [
      "Hola mi amor.",
      "Antes de que sigas, quiero que sepas que esto lo hice pensando en cada momento que hemos vivido juntos.",
      "Ábrelo con calma, tómate tu tiempo.",
    ],
  },

  // --------------------------------------------------------------
  // ESCENA 01 — INTRO
  // --------------------------------------------------------------
  intro: {
    lineaGrande: "Dos meses",
    lineaChica: "y todavía siento que apenas estamos comenzando.",
  },

  // --------------------------------------------------------------
  // ESCENA 02 — NUESTRA HISTORIA
  // --------------------------------------------------------------
  // Agrega, quita o reordena los objetos de esta lista.
  // imagen: ruta dentro de assets/images/ (déjalo como está si aún no tienes la foto)
  historia: [
    {
      imagen: "assets/images/historia-1.jpg",
      eyebrow: "Ese día",
      texto: "Todo empezó de una forma que ninguno de los dos esperaba, y sin embargo se sintió exactamente como debía sentirse.",
    },
    {
      imagen: "assets/images/historia-2.jpg",
      eyebrow: "Nuestra primera cita",
      texto: "Recuerdo cada detalle: de qué hablamos, cómo te reíste, y lo fácil que fue sentirme yo mismo contigo.",
    },
    {
      imagen: "assets/images/historia-3.jpg",
      eyebrow: "Uno de mis recuerdos favoritos",
      texto: "Hay momentos pequeños que se quedan grabados para siempre. Este es uno de los míos contigo.",
    },
    {
      imagen: "assets/images/historia-4.jpg",
      eyebrow: "Aquí entendí...",
      texto: "...que contigo no tengo que fingir nada. Que puedo simplemente ser, y eso ya es suficiente.",
    },
  ],

  // --------------------------------------------------------------
  // ESCENA 03 — CARTA EMOCIONAL
  // --------------------------------------------------------------
  // Puedes usar <em>texto</em> o <strong>texto</strong> dentro de los
  // párrafos para resaltar palabras (ya están soportados en el CSS).
  cartaEmocional: [
    "Estos dos meses contigo me han enseñado algo que no esperaba aprender tan pronto.",
    "He notado que soy <em>más paciente</em>, que escucho mejor, que me permito sentir sin miedo.",
    "Contigo he vuelto a creer en las cosas simples: una llamada larga, un plan improvisado, un silencio cómodo.",
    "Si algo tengo claro es que <strong>me has ayudado a ser una mejor versión de mí</strong>, y quiero que lo sepas.",
  ],

  // --------------------------------------------------------------
  // ESCENA 04 — MOMENTOS (galería)
  // --------------------------------------------------------------
  momentos: [
    { imagen: "assets/images/momento-1.jpg", caption: "Un día cualquiera, contigo." },
    { imagen: "assets/images/momento-2.jpg", caption: "Esa risa que no me canso de ver." },
    { imagen: "assets/images/momento-3.jpg", caption: "Mi lugar favorito: a tu lado." },
    { imagen: "assets/images/momento-4.jpg", caption: "Pequeño, pero inolvidable." },
    { imagen: "assets/images/momento-5.jpg", caption: "Contigo todo se siente diferente." },
    { imagen: "assets/images/momento-6.jpg", caption: "Uno más para la colección." },
  ],

  // --------------------------------------------------------------
  // ESCENA 05 — VIDEO FINAL
  // --------------------------------------------------------------
  video: {
    fraseIntro: "Y todavía me faltaba decirte algo...",
    // fuente: 'local' usa assets/video/final.mp4
    //         'youtube' incrusta el video de youtubeId (útil para probar
    //         rápido, pero para la versión final se recomienda 'local'
    //         para no depender de servicios externos, tal como pediste).
    fuente: "local", // "local" | "youtube"
    youtubeId: "aqz-KE-bpKQ",
  },

  // --------------------------------------------------------------
  // ESCENA 06 — CARTA FINAL
  // --------------------------------------------------------------
  cartaFinal: {
    parrafos: [
      "Gracias por estos dos meses.",
      "Gracias por estar conmigo, por todo lo que hemos compartido, por hacerme sentir acompañado incluso en los días difíciles.",
      "Gracias por ayudarme, directa o indirectamente, a convertirme en una mejor versión de mí mismo.",
      "Esto no es solo una forma de celebrar lo que llevamos, es también una forma de decirte que quiero seguir construyendo recuerdos contigo.",
    ],
    firma: "Con todo mi cariño.",
  },

  // --------------------------------------------------------------
  // ESCENA 07 — CUPONES
  // --------------------------------------------------------------
  cupones: [
    { emoji: "🍿", titulo: "Noche de películas", desc: "Vale por una noche completa de películas, tú eliges qué vemos." },
    { emoji: "🍕", titulo: "Una cita", desc: "Vale por una cita, del estilo que tú quieras." },
    { emoji: "🍦", titulo: "Un helado", desc: "Vale por un helado, cuando se te antoje." },
    { emoji: "💆", titulo: "Un masaje", desc: "Vale por un masaje relajante después de un día largo." },
    { emoji: "❤️", titulo: "Nuestro próximo plan", desc: "Vale por dejar que tú elijas qué hacemos juntos." },
  ],

  // --------------------------------------------------------------
  // MÚSICA — el archivo se carga desde assets/music/cancion.mp3
  // --------------------------------------------------------------
  musica: {
    titulo: "Nuestra canción",
  },

  /* ---------------------------------------------------------------
   WhatsApp config
--------------------------------------------------------------- */
  whatsapp: {
    // México: 52 (código país) + 1 (móvil) + número = 5214521004766
    numero: "5214521004766",
  },
};

/* ================================================================
   FIN DE CONFIG — no necesitas editar nada debajo de aquí
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderNamesAndDates();
  renderHistoria();
  renderCartaEmocional();
  renderMomentos();
  renderCartaFinal();
  renderCupones();
  renderVideo();
  initEnvelope();
  initEnterTransition();
  initScrollReveal();
  initProgressBar();
  initLetterboxTriggers();
  initCustomCursor();
  initParticles();
  initFireworks();
  initHeartsRain();
  initScrollTrail();
  initEmotionalBursts();
  initMusic();
  initLightbox();
  initTopButton();
  initCouponRedeem();
});

/* ---------------------------------------------------------------
   Nombres y fechas dinámicos
--------------------------------------------------------------- */
function renderNamesAndDates() {
  const footerNames = document.getElementById("footerNames");
  const footerDate = document.getElementById("footerDate");
  if (footerNames) footerNames.textContent = `${CONFIG.pareja.nombreYo} & ${CONFIG.pareja.nombreElla}`;
  if (footerDate) footerDate.textContent = `desde el ${CONFIG.pareja.fechaInicio}`;

  const introTitle = document.querySelector(".intro-line-1");
  const introSub = document.querySelector(".intro-line-2");
  if (introTitle) {
    introTitle.innerHTML = `${CONFIG.intro.lineaGrande}<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>`;
  }
  if (introSub) introSub.textContent = CONFIG.intro.lineaChica;

  const videoIntro = document.getElementById("videoIntroText");
  if (videoIntro) videoIntro.textContent = CONFIG.video.fraseIntro;

  // Carta del sobre
  const cartaContent = document.getElementById("envelopeLetterContent");
  if (cartaContent) {
    cartaContent.innerHTML = CONFIG.sobre.cartaLineas
      .map((linea) => `<span class="letter-p">${linea}</span>`)
      .join("<br><br>");
  }
  const envelopeHint = document.querySelector(".envelope-hint");
  if (envelopeHint) envelopeHint.textContent = CONFIG.sobre.textoPortada;
}

/* ---------------------------------------------------------------
   Render: Nuestra historia
--------------------------------------------------------------- */
function renderHistoria() {
  const track = document.getElementById("historiaTrack");
  if (!track) return;

  CONFIG.historia.forEach((item, i) => {
    const el = document.createElement("article");
    el.className = "historia-item";
    el.innerHTML = `
      <div class="historia-visual">
        <img src="${item.imagen}" alt="${item.eyebrow}" loading="lazy"
             onerror="this.style.display='none'; this.parentElement.querySelector('.ph-label').style.display='flex';">
        <div class="ph-label" style="display:none;">Coloca aquí: ${item.imagen.split("/").pop()}</div>
      </div>
      <div class="historia-text">
        <p class="historia-eyebrow" data-reveal>${item.eyebrow}</p>
        <p class="historia-body" data-reveal data-reveal-delay="1">${item.texto}</p>
      </div>
    `;
    track.appendChild(el);
  });
}

/* ---------------------------------------------------------------
   Render: Carta emocional
--------------------------------------------------------------- */
function renderCartaEmocional() {
  const container = document.getElementById("cartaEmocional");
  if (!container) return;
  CONFIG.cartaEmocional.forEach((texto, i) => {
    const p = document.createElement("p");
    p.setAttribute("data-reveal", "");
    if (i > 0) p.setAttribute("data-reveal-delay", String(Math.min(i, 3)));
    p.innerHTML = texto;
    container.appendChild(p);
  });
}

/* ---------------------------------------------------------------
   Render: Momentos (polaroids)
--------------------------------------------------------------- */
function renderMomentos() {
  const field = document.getElementById("polaroidField");
  if (!field) return;

  const tilts = [-4, 3, -2, 5, -3, 2];

  CONFIG.momentos.forEach((m, i) => {
    const el = document.createElement("button");
    el.className = "polaroid";
    el.style.setProperty("--tilt", `${tilts[i % tilts.length]}deg`);
    el.setAttribute("data-img", m.imagen);
    el.setAttribute("data-caption", m.caption);
    el.setAttribute("aria-label", `Ver foto: ${m.caption}`);
    el.innerHTML = `
      <span class="polaroid-photo">
        <img src="${m.imagen}" alt="${m.caption}" loading="lazy"
             onerror="this.style.display='none'; this.parentElement.querySelector('.ph-label').style.display='flex';">
        <span class="ph-label" style="display:none;">Coloca aquí: ${m.imagen.split("/").pop()}</span>
      </span>
      <span class="polaroid-caption">${m.caption}</span>
    `;
    field.appendChild(el);
  });
}

/* ---------------------------------------------------------------
   Render: Carta final
--------------------------------------------------------------- */
function renderCartaFinal() {
  const container = document.getElementById("finalLetter");
  if (!container) return;
  CONFIG.cartaFinal.parrafos.forEach((texto) => {
    const p = document.createElement("p");
    p.setAttribute("data-reveal", "");
    p.textContent = texto;
    container.appendChild(p);
  });
  const firma = document.createElement("p");
  firma.className = "signature";
  firma.setAttribute("data-reveal", "");
  firma.textContent = `— ${CONFIG.cartaFinal.firma}`;
  container.appendChild(firma);
}

/* ---------------------------------------------------------------
   Render: Video final (local o YouTube, según CONFIG.video.fuente)
--------------------------------------------------------------- */
function renderVideo() {
  const frame = document.getElementById("videoFrame");
  if (!frame) return;

  if (CONFIG.video.fuente === "youtube" && CONFIG.video.youtubeId) {
    frame.innerHTML = `
      <iframe
        src="https://www.youtube-nocookie.com/embed/${CONFIG.video.youtubeId}?rel=0&modestbranding=1"
        title="Video final"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy">
      </iframe>
    `;
    // Aviso visible solo mientras se usa YouTube como vista previa,
    // para recordar cambiar a 'local' en la versión final.
    const note = document.createElement("p");
    note.className = "video-frame-note";
    note.textContent = "Vista previa con YouTube — cambia CONFIG.video.fuente a \"local\" para la versión final.";
    frame.insertAdjacentElement("afterend", note);
  } else {
    frame.innerHTML = `
      <video id="finalVideo" controls playsinline preload="metadata">
        <source src="assets/video/final.mp4" type="video/mp4">
        Tu navegador no soporta la reproducción de video.
      </video>
    `;
  }
}

/* ---------------------------------------------------------------
   Render: Cupones
--------------------------------------------------------------- */
function renderCupones() {
  const grid = document.getElementById("couponGrid");
  if (!grid) return;

  CONFIG.cupones.forEach((c, i) => {
    const el = document.createElement("button");
    el.className = "coupon";
    el.type = "button";
    el.setAttribute("data-title", c.titulo);
    el.innerHTML = `
      <span class="coupon-check"></span>
      <span class="coupon-emoji">${c.emoji}</span>
      <span class="coupon-title">${c.titulo}</span>
      <span class="coupon-desc">${c.desc}</span>
    `;
    grid.appendChild(el);
  });
}

/* ---------------------------------------------------------------
   Sobre — interacción de apertura
--------------------------------------------------------------- */
function initEnvelope() {
  const envelope = document.getElementById("envelopeBtn");
  if (!envelope) return;

  envelope.addEventListener("click", () => {
    if (envelope.classList.contains("is-open")) return;
    envelope.classList.add("is-open");
    document.body.classList.add("envelope-opened");

    // Al abrir el sobre, reproduce la música de fondo automáticamente,
    // como si se hubiera presionado el botón de reproducir (▶).
    // Funciona porque ocurre dentro del mismo gesto de clic del usuario,
    // que es justo lo que los navegadores requieren para permitir el
    // audio con sonido sin que el usuario lo bloquee.
    const musicBtn = document.getElementById("musicBtn");
    if (musicBtn && !musicBtn.classList.contains("is-playing")) {
      musicBtn.click();
    }
  });
}

/* ---------------------------------------------------------------
   Transición sobre -> contenido principal
--------------------------------------------------------------- */
function initEnterTransition() {
  const enterBtn = document.getElementById("enterBtn");
  const main = document.getElementById("mainContent");
  if (!enterBtn || !main) return;

  enterBtn.addEventListener("click", () => {
    // Barras de letterbox como "cortina" de transición
    document.body.classList.add("letterbox-active");

    setTimeout(() => {
      document.body.classList.add("entered");
      main.removeAttribute("aria-hidden");
      document.getElementById("envelopeScreen").setAttribute("aria-hidden", "true");
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }, 500);

    setTimeout(() => {
      document.body.classList.remove("letterbox-active");
    }, 1600);
  });
}

/* ---------------------------------------------------------------
   Scroll reveal — IntersectionObserver
--------------------------------------------------------------- */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    "[data-reveal], .historia-item, .polaroid, .coupon"
  );
  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((t) => observer.observe(t));

  // Ocultar el "desliza para continuar" tras el primer scroll
  const cue = document.getElementById("scrollCue");
  if (cue) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 80) cue.classList.add("is-hidden");
      },
      { passive: true }
    );
  }
}

/* ---------------------------------------------------------------
   Barra de progreso de scroll
--------------------------------------------------------------- */
function initProgressBar() {
  const fill = document.getElementById("progressFill");
  if (!fill) return;
  const update = () => {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const pct = height > 0 ? (scrollTop / height) * 100 : 0;
    fill.style.width = `${pct}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---------------------------------------------------------------
   Letterbox al entrar a escenas clave (video y cupones)
   para reforzar la sensación de "película"
--------------------------------------------------------------- */
function initLetterboxTriggers() {
  const video = document.getElementById("scene-video");
  if (!video || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.classList.add("letterbox-active");
        } else {
          document.body.classList.remove("letterbox-active");
        }
      });
    },
    { threshold: 0.5 }
  );
  observer.observe(video);
}

/* ---------------------------------------------------------------
   Cursor personalizado (desktop)
--------------------------------------------------------------- */
function initCustomCursor() {
  const cursor = document.getElementById("customCursor");
  if (!cursor) return;
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  let ready = false;
  window.addEventListener("mousemove", (e) => {
    if (!ready) {
      document.body.classList.add("cursor-ready");
      ready = true;
    }
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  const hoverables = "button, a, .polaroid, .coupon, .envelope";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverables)) cursor.classList.add("cursor-hover");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverables)) cursor.classList.remove("cursor-hover");
  });
}

/* ---------------------------------------------------------------
   Partículas de luz / luciérnagas — canvas muy sutil
--------------------------------------------------------------- */
function initParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let running = true;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    const count = window.innerWidth < 700 ? 16 : 34;
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.4,
      speedY: Math.random() * 0.18 + 0.04,
      speedX: (Math.random() - 0.5) * 0.12,
      alpha: Math.random() * 0.5 + 0.15,
      flicker: Math.random() * 0.02 + 0.005,
    }));
  }

  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.y -= p.speedY;
      p.x += p.speedX;
      p.alpha += (Math.random() - 0.5) * p.flicker;
      p.alpha = Math.max(0.05, Math.min(0.65, p.alpha));

      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(219, 189, 130, ${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  requestAnimationFrame(draw);

  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });

  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(draw);
  });
}

/* ---------------------------------------------------------------
   Fuegos artificiales — canvas con explosiones emocionales
--------------------------------------------------------------- */
function initFireworks() {
  const canvas = document.getElementById("fireworks");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let fireworks = [];
  let particles = [];
  let running = true;
  let autoTimer = null;
  let lastInteraction = 0;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const colors = [
    ["201, 161, 90"],   // gold
    ["185, 130, 122"],  // rose
    ["255, 215, 100"],  // warm gold
    ["255, 160, 120"],  // coral
    ["219, 189, 130"],  // champagne
  ];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Firework {
    constructor(x, y, targetY, color) {
      this.x = x;
      this.y = canvas.height;
      this.targetY = targetY;
      this.color = color;
      this.speed = 4 + Math.random() * 3;
      this.angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.3;
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = Math.sin(this.angle) * this.speed;
      this.trail = [];
      this.exploded = false;
    }

    update() {
      if (!this.exploded) {
        this.trail.push({ x: this.x, y: this.y, alpha: 1 });
        if (this.trail.length > 10) this.trail.shift();

        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.05;

        if (this.y <= this.targetY || this.vy >= 0) {
          this.explode();
        }
      }
    }

    explode() {
      this.exploded = true;
      const particleCount = 35 + Math.floor(Math.random() * 20);
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 / particleCount) * i + Math.random() * 0.3;
        const speed = 2 + Math.random() * 4;
        particles.push(new Particle(this.x, this.y, angle, speed, this.color));
      }
      // Trigger emotional burst at explosion point
      triggerBurst(this.x, this.y, this.color);
    }

    draw() {
      if (!this.exploded) {
        ctx.strokeStyle = `rgba(${this.color}, 0.8)`;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        if (this.trail.length > 1) {
          ctx.lineTo(this.trail[this.trail.length - 1].x, this.trail[this.trail.length - 1].y);
        }
        ctx.stroke();

        // Trail
        this.trail.forEach((p, i) => {
          const alpha = (i / this.trail.length) * 0.6;
          ctx.fillStyle = `rgba(${this.color}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
  }

  class Particle {
    constructor(x, y, angle, speed, color) {
      this.x = x;
      this.y = y;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.color = color;
      this.alpha = 1;
      this.size = 2 + Math.random() * 3;
      this.decay = 0.008 + Math.random() * 0.012;
      this.gravity = 0.03;
      this.flicker = Math.random() * 0.05;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity;
      this.vx *= 0.99;
      this.vy *= 0.99;
      this.alpha -= this.decay;
      this.size *= 0.995;
    }

    draw() {
      if (this.alpha <= 0) return;
      const flickerAlpha = this.alpha + (Math.random() - 0.5) * this.flicker;
      ctx.fillStyle = `rgba(${this.color}, ${Math.max(0, flickerAlpha)})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, Math.max(0.5, this.size), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function launchFirework(x, y) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const targetY = y || (canvas.height * (0.2 + Math.random() * 0.4));
    fireworks.push(new Firework(x, canvas.height, targetY, color));
  }

  function triggerBurst(x, y, color) {
    const burstContainer = document.getElementById("emotionalBurst");
    if (!burstContainer) return;

    // Ring
    const ring = document.createElement("div");
    ring.className = "burst-ring";
    ring.style.left = `${x}px`;
    ring.style.top = `${y}px`;
    ring.style.borderColor = `rgba(${color}, 0.8)`;
    burstContainer.appendChild(ring);
    setTimeout(() => ring.remove(), 1200);

    // Sparks
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 / 12) * i;
      const distance = 60 + Math.random() * 80;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      const spark = document.createElement("div");
      spark.className = "burst-spark";
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.setProperty("--tx", `${tx}px`);
      spark.style.setProperty("--ty", `${ty}px`);
      spark.style.background = `rgb(${color})`;
      burstContainer.appendChild(spark);
      setTimeout(() => spark.remove(), 1000);
    }
  }

  function draw() {
    if (!running) return;

    ctx.fillStyle = "rgba(16, 15, 25, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].draw();
      if (fireworks[i].exploded && fireworks[i].trail.length === 0) {
        fireworks.splice(i, 1);
      }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].draw();
      if (particles[i].alpha <= 0 || particles[i].size < 0.3) {
        particles.splice(i, 1);
      }
    }

    requestAnimationFrame(draw);
  }

  function startAutoLaunch() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      if (document.hidden) return;
      const x = Math.random() * canvas.width;
      launchFirework(x);
    }, 4000 + Math.random() * 3000);
  }

  function onScroll() {
    const now = Date.now();
    if (now - lastInteraction > 800) {
      lastInteraction = now;
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

      // Trigger fireworks at certain scroll milestones
      if (progress > 0.15 && progress < 0.17) launchFirework(canvas.width * 0.2, canvas.height * 0.4);
      if (progress > 0.35 && progress < 0.37) launchFirework(canvas.width * 0.8, canvas.height * 0.35);
      if (progress > 0.55 && progress < 0.57) launchFirework(canvas.width * 0.5, canvas.height * 0.3);
      if (progress > 0.75 && progress < 0.77) launchFirework(canvas.width * 0.7, canvas.height * 0.4);
      if (progress > 0.9 && progress < 0.92) launchFirework(canvas.width * 0.3, canvas.height * 0.35);
    }
  }

  function onClick(e) {
    if (e.target.closest("button, a, .polaroid, .coupon, .envelope")) return;
    launchFirework(e.clientX, e.clientY);
  }

  resize();
  startAutoLaunch();
  requestAnimationFrame(draw);

  window.addEventListener("resize", () => {
    resize();
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("click", onClick);

  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) {
      requestAnimationFrame(draw);
      startAutoLaunch();
    } else {
      if (autoTimer) clearInterval(autoTimer);
    }
  });

  // Activate fireworks when entering main content
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.body.classList.add("fireworks-active");
      }
    });
  }, { threshold: 0.1 });

  const mainContent = document.getElementById("mainContent");
  if (mainContent) observer.observe(mainContent);
}

/* ---------------------------------------------------------------
   Lluvia de corazones — DOM-based para mejor performance
--------------------------------------------------------------- */
function initHeartsRain() {
  const container = document.getElementById("hearts-rain");
  if (!container) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const hearts = ["❤", "💖", "💕", "💗", "💓", "💝", "💘", "💟", "❣", "💞"];
  const colors = ["var(--rose-400)", "var(--gold-400)", "var(--gold-300)", "#ff6b8a", "#ff9eb5", "#ffb3c6"];
  let running = true;
  let spawnTimer = null;
  let lastScrollY = window.scrollY;
  let scrollDirection = 0;

  function spawnHeart(x) {
    if (!running) return;

    const heart = document.createElement("span");
    heart.className = "heart-particle";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = `${x}px`;
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.fontSize = `${14 + Math.random() * 18}px`;
    heart.style.opacity = "0";
    const duration = 3 + Math.random() * 3;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${Math.random() * 0.5}s`;

    // Add slight horizontal drift using CSS custom property for transform
    const drift = (Math.random() - 0.5) * 100;
    heart.style.setProperty("--drift", `${drift}px`);
    heart.style.transform = `translateX(${drift}px)`;

    container.appendChild(heart);

    setTimeout(() => heart.remove(), duration * 1000 + 500);
  }

  function startRain() {
    if (spawnTimer) clearInterval(spawnTimer);
    spawnTimer = setInterval(() => {
      if (!running || document.hidden) return;
      // Spawn 1-3 hearts at random positions
      const count = 1 + Math.floor(Math.random() * 3);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * window.innerWidth;
        spawnHeart(x);
      }
    }, 800 + Math.random() * 600);
  }

  function onScroll() {
    const scrollY = window.scrollY;
    scrollDirection = scrollY > lastScrollY ? 1 : -1;
    lastScrollY = scrollY;

    // More hearts when scrolling down (discovering content)
    if (scrollDirection > 0 && Math.random() < 0.15) {
      const x = Math.random() * window.innerWidth;
      spawnHeart(x);
    }

    // Activate hearts rain at emotional moments (scene transitions)
    const progress = scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    if (progress > 0.28 && progress < 0.3) spawnHeartBurst(window.innerWidth * 0.5);
    if (progress > 0.48 && progress < 0.5) spawnHeartBurst(window.innerWidth * 0.3);
    if (progress > 0.68 && progress < 0.7) spawnHeartBurst(window.innerWidth * 0.7);
    if (progress > 0.88 && progress < 0.9) spawnHeartBurst(window.innerWidth * 0.5);
  }

  function spawnHeartBurst(centerX) {
    const burstCount = 8 + Math.floor(Math.random() * 6);
    for (let i = 0; i < burstCount; i++) {
      setTimeout(() => {
        const x = centerX + (Math.random() - 0.5) * 200;
        spawnHeart(Math.max(0, Math.min(window.innerWidth, x)));
      }, i * 80);
    }
  }

  function onHover(e) {
    if (e.target.closest(".polaroid, .coupon, .historia-visual, .carta-emocional p, .final-letter p")) {
      // Small heart burst on hover emotional elements
      if (Math.random() < 0.3) {
        const rect = e.target.getBoundingClientRect();
        spawnHeartBurst(rect.left + rect.width / 2);
      }
    }
  }

  startRain();

  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("mouseover", onHover, { passive: true });

  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) startRain();
    else if (spawnTimer) clearInterval(spawnTimer);
  });

  // Activate hearts when entering main content
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.body.classList.add("hearts-active");
      }
    });
  }, { threshold: 0.1 });

  const mainContent = document.getElementById("mainContent");
  if (mainContent) observer.observe(mainContent);
}

/* ---------------------------------------------------------------
   Estela de scroll emotiva — partículas que siguen el scroll
--------------------------------------------------------------- */
function initScrollTrail() {
  const container = document.getElementById("scrollTrail");
  if (!container) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  let lastScrollY = window.scrollY;
  let trailParticles = [];
  let rafId = null;

  function createTrailParticle(x, y) {
    const colors = [
      "rgba(201, 161, 90, 0.6)",
      "rgba(185, 130, 122, 0.6)",
      "rgba(219, 189, 130, 0.5)",
      "rgba(255, 215, 100, 0.5)",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 4 + Math.random() * 8;

    const particle = document.createElement("div");
    particle.className = "trail-particle";
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = color;
    particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;

    container.appendChild(particle);
    trailParticles.push(particle);

    setTimeout(() => {
      particle.remove();
      trailParticles = trailParticles.filter(p => p !== particle);
    }, 800);
  }

  function onScroll() {
    const scrollY = window.scrollY;
    const direction = scrollY > lastScrollY ? 1 : -1;
    lastScrollY = scrollY;

    // Create trail particles at viewport edges during scroll
    if (Math.abs(direction) > 0) {
      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;

      // Occasionally spawn at center
      if (Math.random() < 0.08) {
        createTrailParticle(
          viewportCenterX + (Math.random() - 0.5) * 100,
          viewportCenterY + (Math.random() - 0.5) * 100
        );
      }

      // Spawn at left/right edges
      if (Math.random() < 0.05) {
        createTrailParticle(
          Math.random() < 0.5 ? 20 : window.innerWidth - 20,
          Math.random() * window.innerHeight
        );
      }
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // Activate trail when scrolling starts
  let scrollActivated = false;
  window.addEventListener("scroll", () => {
    if (!scrollActivated && window.scrollY > 50) {
      scrollActivated = true;
      document.body.classList.add("scroll-trail-active");
    }
  }, { passive: true, once: true });
}

/* ---------------------------------------------------------------
   Destellos emocionales en momentos clave (scroll milestones)
--------------------------------------------------------------- */
function initEmotionalBursts() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const burstContainer = document.getElementById("emotionalBurst");
  if (!burstContainer) return;

  let lastTriggered = new Set();

  function triggerBurstAt(x, y, color) {
    // Ring
    const ring = document.createElement("div");
    ring.className = "burst-ring";
    ring.style.left = `${x}px`;
    ring.style.top = `${y}px`;
    ring.style.borderColor = color;
    burstContainer.appendChild(ring);
    setTimeout(() => ring.remove(), 1200);

    // Sparks
    for (let i = 0; i < 16; i++) {
      const angle = (Math.PI * 2 / 16) * i + Math.random() * 0.2;
      const distance = 50 + Math.random() * 100;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      const spark = document.createElement("div");
      spark.className = "burst-spark";
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.setProperty("--tx", `${tx}px`);
      spark.style.setProperty("--ty", `${ty}px`);
      spark.style.background = color;
      burstContainer.appendChild(spark);
      setTimeout(() => spark.remove(), 1000);
    }

    // Floating hearts
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        const heart = document.createElement("span");
        heart.className = "heart-particle";
        heart.textContent = ["❤", "💖", "💕", "✨", "💫"][Math.floor(Math.random() * 5)];
        heart.style.left = `${x + (Math.random() - 0.5) * 60}px`;
        heart.style.top = `${y + (Math.random() - 0.5) * 60}px`;
        heart.style.color = color.replace("rgba(", "").replace(")", "").split(",").slice(0,3).join(",") + ", 1)";
        heart.style.fontSize = `${16 + Math.random() * 12}px`;
        heart.style.animationDuration = `${2 + Math.random() * 1.5}s`;
        burstContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 3500);
      }, i * 100);
    }
  }

  function checkMilestones() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

    const milestones = [
      { p: 0.15, label: "intro-end", x: 0.5, y: 0.3, color: "rgba(201, 161, 90, 0.9)" },
      { p: 0.30, label: "historia-start", x: 0.3, y: 0.5, color: "rgba(185, 130, 122, 0.9)" },
      { p: 0.50, label: "carta-emocional", x: 0.7, y: 0.4, color: "rgba(201, 161, 90, 0.9)" },
      { p: 0.65, label: "momentos", x: 0.5, y: 0.5, color: "rgba(219, 189, 130, 0.9)" },
      { p: 0.80, label: "video", x: 0.4, y: 0.35, color: "rgba(185, 130, 122, 0.9)" },
      { p: 0.90, label: "final-letter", x: 0.6, y: 0.4, color: "rgba(201, 161, 90, 0.9)" },
      { p: 0.98, label: "cupones", x: 0.5, y: 0.5, color: "rgba(219, 189, 130, 0.9)" },
    ];

    milestones.forEach(m => {
      const key = m.label;
      if (progress >= m.p - 0.015 && progress <= m.p + 0.015 && !lastTriggered.has(key)) {
        lastTriggered.add(key);
        const x = window.innerWidth * m.x;
        const y = window.innerHeight * m.y;
        triggerBurstAt(x, y, m.color);
        document.body.classList.add("burst-active");
        setTimeout(() => document.body.classList.remove("burst-active"), 1500);
      }
    });

    // Reset when scrolling back up significantly
    if (progress < 0.05) {
      lastTriggered.clear();
    }
  }

  window.addEventListener("scroll", checkMilestones, { passive: true });

  // Also trigger on hover of emotional elements
  document.addEventListener("mouseenter", (e) => {
    const target = e.target.closest(".carta-emocional p, .final-letter p, .historia-text p, .polaroid-caption, .coupon-title");
    if (target && Math.random() < 0.1) {
      const rect = target.getBoundingClientRect();
      triggerBurstAt(rect.left + rect.width / 2, rect.top + rect.height / 2, "rgba(201, 161, 90, 0.8)");
    }
  }, true);
}

/* ---------------------------------------------------------------
   Música de fondo
--------------------------------------------------------------- */
function initMusic() {
  const btn = document.getElementById("musicBtn");
  const icon = document.getElementById("musicIcon");
  const audio = document.getElementById("bgMusic");
  if (!btn || !audio) return;

  let playing = false;

  btn.addEventListener("click", () => {
    if (!playing) {
      audio.play().then(() => {
        playing = true;
        btn.classList.add("is-playing");
        icon.textContent = "❙❙";
        btn.setAttribute("aria-label", "Pausar música");
      }).catch(() => {
        // El navegador bloqueó la reproducción o falta el archivo de audio
        console.warn("No se pudo reproducir la música. Verifica assets/music/cancion.mp3");
      });
    } else {
      audio.pause();
      playing = false;
      btn.classList.remove("is-playing");
      icon.textContent = "▶";
      btn.setAttribute("aria-label", "Reproducir música");
    }
  });
}

/* ---------------------------------------------------------------
   Lightbox para la galería de momentos
--------------------------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");
  if (!lightbox) return;

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".polaroid");
    if (!card) return;
    img.src = card.getAttribute("data-img");
    img.alt = card.getAttribute("data-caption") || "";
    caption.textContent = card.getAttribute("data-caption") || "";
    lightbox.classList.add("is-open");
  });

  const close = () => lightbox.classList.remove("is-open");
  closeBtn?.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* ---------------------------------------------------------------
   Botón "volver arriba"
--------------------------------------------------------------- */
function initTopButton() {
  const btn = document.getElementById("topBtn");
  if (!btn) return;
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > window.innerHeight) btn.classList.add("is-visible");
      else btn.classList.remove("is-visible");
    },
    { passive: true }
  );
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------------------------------------------------------------
   Selección y envío de cupones por WhatsApp
--------------------------------------------------------------- */
function initCouponRedeem() {
  const grid = document.getElementById("couponGrid");
  const redeemBtn = document.getElementById("redeemBtn");
  const status = document.getElementById("redeemStatus");
  if (!grid || !redeemBtn) return;

  const selected = new Set();

  // Touch-friendly selection for mobile
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".coupon");
    if (!card) return;
    const title = card.getAttribute("data-title");
    card.classList.toggle("selected");

    if (card.classList.contains("selected")) selected.add(title);
    else selected.delete(title);

    redeemBtn.disabled = selected.size === 0;
    redeemBtn.setAttribute("aria-pressed", selected.size > 0);
  });

  // Also support keyboard navigation
  grid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".coupon");
      if (card) {
        e.preventDefault();
        card.click();
      }
    }
  });

  redeemBtn.addEventListener("click", () => {
    if (selected.size === 0) return;

    const cuponesTexto = Array.from(selected).join("%0A• "); // Newline + bullet for WhatsApp
    const fecha = new Date().toLocaleDateString("es-MX", {
      year: "numeric", month: "long", day: "numeric",
    });

    const mensaje = `🎁 *Cupones seleccionados* (%{fecha})%0A%0A• ${cuponesTexto}%0A%0A— Con amor ❤`
      .replace("%{fecha}", encodeURIComponent(fecha));

    const numero = CONFIG.whatsapp.numero;
    const url = `https://wa.me/${numero}?text=${mensaje}`;

    redeemBtn.classList.add("is-sending");
    redeemBtn.textContent = "Abriendo WhatsApp...";
    status.textContent = "";

    // Open WhatsApp - try anchor click first, fallback to location.href for mobile
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener,noreferrer";
    document.body.appendChild(link);
    const clicked = link.click();
    document.body.removeChild(link);

    // Fallback for mobile browsers where programmatic click might not work
    setTimeout(() => {
      // Check if we're still on the same page (WhatsApp didn't open)
      // Use a subtle approach: if after 500ms we're still here, try location.href
      // This runs in a new tick, so it won't block the first attempt
    }, 500);

    // Also try direct navigation as backup (works reliably on mobile)
    setTimeout(() => {
      if (document.hasFocus()) {
        window.location.href = url;
      }
    }, 800);

    // Reset button after short delay
    setTimeout(() => {
      redeemBtn.classList.remove("is-sending");
      redeemBtn.textContent = "Canjear mis cupones ❤";
      status.textContent = "¡Se abrió WhatsApp con tus cupones! 💌";
    }, 1500);
  });
}