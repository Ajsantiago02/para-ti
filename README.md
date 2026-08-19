# Dos meses — una pequeña película sobre nosotros

Experiencia web interactiva de storytelling romántico: un sobre que se
abre, una historia que se recorre con scroll, música, un video final,
una carta de cierre y cupones de regalo que se envían por correo.

## 1. Estructura del proyecto

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js          <- AQUÍ EDITAS TODO EL CONTENIDO (objeto CONFIG)
├── assets/
│   ├── images/             <- tus fotos (ver instrucciones dentro)
│   ├── music/
│   │   └── cancion.mp3     <- tu canción
│   └── video/
│       └── final.mp4       <- tu video final
└── README.md
```

## 2. Cómo personalizar el contenido

**Todo** el texto, nombres, fechas, fotos y cupones se editan desde un
solo lugar: el objeto `CONFIG` al inicio de `js/script.js`. No necesitas
tocar el HTML ni el CSS para cambiar el contenido.

Dentro de `CONFIG` encontrarás, en este orden:

1. `pareja` — nombres y fecha de inicio.
2. `sobre` — el texto de la pantalla de entrada y la carta del sobre.
3. `intro` — las dos frases grandes de la primera escena.
4. `historia` — la lista de recuerdos con foto + texto (agrega o quita
   los que quieras).
5. `cartaEmocional` — los párrafos de la sección "Lo que has
   significado para mí".
6. `momentos` — las fotos de la galería tipo polaroid.
7. `video` — la frase que introduce el video final.
8. `cartaFinal` — los párrafos de la carta de cierre.
9. `cupones` — los cupones de regalo (emoji, título, descripción).
10. `emailjs` — tus credenciales para poder recibir el correo cuando
    ella canjee los cupones (ver sección 4).

### Fotos

Coloca tus imágenes en `assets/images/` con los nombres indicados en el
archivo `assets/images/COLOCA_TUS_FOTOS_AQUI.txt`, o cambia las rutas
directamente en `CONFIG.historia` y `CONFIG.momentos`.

Mientras una foto no exista, la página mostrará automáticamente un
recuadro indicando qué archivo falta — así puedes revisar que todo esté
en su lugar antes de compartir el enlace.

### Música

Coloca tu canción en `assets/music/cancion.mp3`. Por las políticas de
los navegadores, la música **no se reproduce automáticamente**: aparece
un botón flotante (▶) arriba a la derecha para que ella la active
cuando quiera, y luego pueda pausarla (❙❙).

### Video final

Por defecto el proyecto viene configurado con `CONFIG.video.fuente =
"youtube"` y un video de muestra, solo para que puedas ver cómo se ve
la experiencia completa de inmediato.

**Para la versión final** (recomendado, como pediste originalmente:
sin depender de servicios externos):

1. Coloca tu video en `assets/video/final.mp4`.
2. En `js/script.js`, dentro de `CONFIG.video`, cambia:
   ```js
   fuente: "local",
   ```
   Con esto se usa tu archivo local, con controles nativos y
   `playsinline` para que funcione bien en iOS.

Si prefieres seguir usando YouTube, deja `fuente: "youtube"` y
reemplaza `youtubeId` con el ID de tu video (la parte final de la URL,
por ejemplo `https://youtube.com/watch?v=ABC123` → `ABC123`).

## 3. Cómo verlo en tu computadora antes de publicarlo

No necesitas instalar nada complicado. Desde la carpeta del proyecto:

```bash
# Opción 1: Python (ya viene instalado en Mac/Linux)
python3 -m http.server 8000

# Opción 2: si tienes Node.js
npx serve .
```

Luego abre `http://localhost:8000` en tu navegador. (Abrir `index.html`
con doble clic también funciona, pero servirlo con un servidor local
evita pequeños problemas de rutas.)

## 4. Configurar el envío de cupones por correo (EmailJS)

Como GitHub Pages es un sitio **estático** (sin backend), usamos
[EmailJS](https://www.emailjs.com) para poder enviar un correo cuando
ella presione "Canjear mis cupones ❤". Tiene un plan gratuito más que
suficiente para este uso.

Pasos:

1. Crea una cuenta gratuita en https://www.emailjs.com
2. Ve a **Email Services** → conecta tu cuenta de correo (Gmail,
   Outlook, etc.) → copia el **Service ID**.
3. Ve a **Email Templates** → crea una plantilla nueva. Usa, como
   mínimo, estas variables dentro del cuerpo del correo:
   - `{{cupones}}` — la lista de cupones que ella seleccionó
   - `{{fecha}}` — la fecha del canje
   - `{{nombre_pareja}}` — su nombre
   - Copia el **Template ID**.
4. Ve a **Account** → copia tu **Public Key**.
5. Abre `js/script.js` y reemplaza estos tres valores dentro de
   `CONFIG.emailjs`:

```js
emailjs: {
  publicKey: "TU_PUBLIC_KEY_AQUI",
  serviceId: "TU_SERVICE_ID_AQUI",
  templateId: "TU_TEMPLATE_ID_AQUI",
  correoDestino: "tu-correo@ejemplo.com",
},
```

Mientras estos valores sigan con el texto `TU_...`, el botón de canjear
seguirá funcionando visualmente (para que puedas probar la experiencia
completa), pero no se enviará ningún correo real — solo verás un aviso
en la consola del navegador.

> Nota de seguridad: la Public Key de EmailJS está pensada para vivir
> en el frontend (por eso se llama "pública"), así que es seguro
> subirla a GitHub Pages. No compartas nunca una contraseña de correo
> directamente en el código.

## 5. Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede ser privado o público).
2. Sube todo el contenido de esta carpeta a la raíz del repositorio.
3. Ve a **Settings → Pages**.
4. En "Source", selecciona la rama `main` (o `master`) y la carpeta
   `/ (root)`.
5. Guarda. En un par de minutos tu página estará disponible en:
   `https://tu-usuario.github.io/nombre-del-repositorio/`

## 6. Detalles de la experiencia

- **Sobre interactivo**: se abre con clic/tap, revela una carta y da
  paso a un botón para entrar a la experiencia principal.
- **Transición cinematográfica**: al entrar aparecen unas barras tipo
  "letterbox" de cine, que también se activan sutilmente en la escena
  del video, reforzando la idea de "una pequeña película sobre
  nosotros".
- **Scrollytelling**: las fotos y textos aparecen progresivamente con
  `IntersectionObserver` conforme haces scroll (sin dependencias
  externas pesadas).
- **Partículas de luz**: un canvas muy sutil simula pequeñas luciérnagas
  flotando (se desactiva automáticamente si el sistema tiene activado
  "reducir movimiento").
- **Cursor personalizado**: solo en desktop; en móvil se desactiva
  automáticamente.
- **Cupones**: selección múltiple, estado visual al elegir, y envío por
  correo mediante EmailJS con confirmación en pantalla.
- **Accesibilidad**: foco visible en botones, `aria-live` en el estado
  de envío, y respeto a `prefers-reduced-motion`.

## 7. Tecnologías usadas

- HTML5 + CSS3 (sin frameworks) + JavaScript vanilla.
- Google Fonts: Cormorant Garamond (títulos) + Jost (texto).
- EmailJS (CDN) solo para el envío de cupones.

Ligero, sin build step, y fácil de mantener a futuro.
