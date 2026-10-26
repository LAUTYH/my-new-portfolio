# Lautaro Olmos — Portfolio

Portfolio personal de **Lautaro Olmos** — Full Stack AI Developer.  
Desarrollo de sistemas de punta a punta: Web moderna, Apps Mobile (iOS/Android) y automatización con Inteligencia Artificial.

---

## 🎨 Guía de Estilo Tipográfico (Typography System)

El proyecto utiliza **[Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)** como tipografía principal, optimizada nativamente mediante `next/font/google` para cero layout shift y carga de alto rendimiento.

### Jerarquía y Pesos Tipográficos Oficiales

| Elemento UI | Tipografía | Peso / Variante | Clase Tailwind |
| :--- | :--- | :--- | :--- |
| **Títulos principales (H1 / H2)** | Plus Jakarta Sans | **Bold (700)** o **ExtraBold (800)** | `font-bold` / `font-extrabold` |
| **Subtítulos (H3 / Subtitles)** | Plus Jakarta Sans | **SemiBold (600)** o **Medium (500)** | `font-semibold` / `font-medium` |
| **Texto de párrafo (Body / Copys)** | Plus Jakarta Sans | **Regular (400)** | `font-normal` |
| **Acentos, epígrafes o notas al pie** | Plus Jakarta Sans | **Light (300)** o **Italic** | `font-light` / `italic` |

---

### Fuentes Disponibles y Embed Codes

#### 1. Embed code en el `<head>` del HTML

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
```

#### 2. Importación vía CSS (`@import`)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
```

---

### Clases CSS para Estilos Variables

#### Plus Jakarta Sans (Principal)
```css
/* weight: 200 a 800 */
.plus-jakarta-sans {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400; /* Regular default */
  font-style: normal;
}
```

#### Inter (Alternativa / Secundario)
```css
/* weight: 100 a 900 */
.inter {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
```

#### Montserrat (Alternativa / Display)
```css
/* weight: 100 a 900 */
.montserrat {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
```

---

## ⚡ Implementación en Next.js (App Router)

Las fuentes están configuradas a nivel raíz en [`src/app/layout.tsx`](src/app/layout.tsx) inyectando variables CSS:

```tsx
import { Plus_Jakarta_Sans, Inter, Montserrat } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});
```

Y enlazadas a través de Tailwind CSS v4 en [`src/app/globals.css`](src/app/globals.css):

```css
@theme inline {
  --font-sans: var(--font-plus-jakarta-sans), "Plus Jakarta Sans", system-ui, sans-serif;
  --font-plus-jakarta-sans: var(--font-plus-jakarta-sans);
  --font-inter: var(--font-inter);
  --font-montserrat: var(--font-montserrat);
}

body {
  font-family: var(--font-plus-jakarta-sans), "Plus Jakarta Sans", system-ui, sans-serif;
}
```

---

## 🌌 Materiales y atmósfera

La presentación combina una composición de dos columnas, ilustraciones 3D originales y una navegación con vidrio translúcido. El fondo responde al contexto de navegación mediante fundidos entre paletas; no hay luces ni figuras girando en bucle.

- **Inicio:** azul suave.
- **Proceso:** azul, lavanda, celeste, menta o coral según la etapa seleccionada.
- **Proyectos:** celeste para sistemas e IA, lavanda para apps y coral para sitios web.

`PortfolioExperience` coordina la sección visible, la paleta y la reducción de efectos. `AmbientBackground` funde capas de gradientes. `experience.css` contiene el sistema de materiales, independiente de la compilación de Tailwind.

El vidrio se concentra en los controles de navegación: desenfoque de 26 px, saturación suave, reflejo superior y borde inferior. Las tarjetas y las fichas conservan superficies opacas con biseles y sombras para dar profundidad sin comprometer la lectura. Los estilos incluyen alternativas para reducción de transparencia y contraste aumentado.

Las ilustraciones de reservas, entrenamiento y catálogos están en `public/images/projects/`, con alfa y optimización WebP (aproximadamente 493 KB en conjunto antes de la optimización de Next/Image). Son representaciones conceptuales, no capturas de los productos. Los prompts y la procedencia están en [docs/project-illustrations.md](docs/project-illustrations.md).

---

## 🍏 Estándares de Diseño Apple (Human Interface Guidelines — HIG)

El proyecto implementa los principios fundamentales de diseño y accesibilidad de Apple:

1. **Objetivos Táctiles Accesibles (44x44 pt):** Todos los botones interactivos (selector de tema, enlaces sociales, píldoras y flechas de navegación) cumplen con el área de contacto mínima de `44x44 pt` requerida por las guías de accesibilidad en iOS y pantallas táctiles (`accessibility.md › Mobility`).
2. **Jerarquía Visual y Roles de Botón (`buttons.md › Style`):**
   - **Acción primaria:** «Explorar proyectos» guía hacia la galería con contraste alto y bisel sutil. «Hablemos» y el copiado del correo se mantienen disponibles como acciones secundarias.
   - **Acciones secundarias:** Los controles de apariencia, movimiento y GitHub comparten una superficie de vidrio; LinkedIn y el correo usan enlaces legibles con foco visible.
3. **Respeto a Áreas Seguras (`env(safe-area-inset-*)`):** Adaptabilidad nativa para dispositivos con Dynamic Island, Notch y barra de inicio en iOS Safari sin solapamiento de contenido (`layout.md › Guides and safe areas`).
4. **Legibilidad Tipográfica Estricta:** Cumplimiento de la regla de no utilizar pesos delgados (`font-light` / 300) en tamaños de texto pequeños (footers y notas), garantizando contraste superior a 4.5:1 (`typography.md › Ensuring legibility`).

---

## 🛠️ Sección 2: Cómo trabajo

Se conservan las seis etapas y su contenido: relevamiento, diseño, definición técnica, implementación, integración de IA y mantenimiento. Todas las pestañas permanecen presentes, con selección anunciada y controles por flechas, Inicio y Fin.

La composición muestra tres capas conectadas —interfaz, lógica y datos— con profundidad sutil al desplazarse. La selección cambia el foco de la composición y su iluminación. Las descripciones se funden en 120 ms; el teclado actualiza el contenido sin animación.

### Tres momentos de scroll

1. La ilustración de presentación cambia levemente de perspectiva al abandonar el inicio.
2. La estructura del proceso revela la relación entre sus capas al entrar en pantalla.
3. Las ilustraciones de proyectos avanzan en profundidad mientras se explora la galería.

Las transiciones usan Motion. La profundidad de scroll comparte un listener pasivo y agrupa las lecturas y escrituras de transformaciones en un único frame, sin actualizaciones de estado de React por cada píxel. Lenis suaviza la rueda en 800 ms y mantiene los enlaces de sección. El control **Reducir movimiento** y la preferencia del sistema eliminan las transformaciones, detienen Lenis y conservan todos los contenidos y controles.

---

## 📂 Sección 3: Mis proyectos

Explorador de tres niveles: **categorías → proyectos → detalle**. La entrada avanza lateralmente y el regreso invierte la dirección, sin bloquear el desplazamiento vertical de la página.

- **Sistemas de gestión e integración de IA:** sistema de reservas con agente conversacional.
- **Aplicaciones móviles y plataformas web:** plataforma de entrenamiento y gestión.
- **Sitios web corporativos:** Cooperativa Jabonera y El Rosquín.

Las tarjetas muestran ilustraciones 3D originales con canal alfa. No son capturas de los productos. Cada ficha conserva la descripción, las funcionalidades y las tecnologías; el stack previsto de la plataforma móvil se despliega con un control nativo `details`.

### Interacción y accesibilidad

- Categoría y proyecto se reflejan en la URL; los enlaces se pueden compartir y abrir en otra pestaña.
- Atrás y Adelante del navegador mantienen el recorrido. Al entrar, el foco pasa al título; al volver, regresa a la tarjeta de origen.
- La entrada lateral dura 280 ms y la salida 180 ms; se omiten con movimiento reducido y al activar enlaces por teclado. Las vistas que salen quedan inertes durante su animación.
- Controles de navegación de al menos 44 px, foco visible, distribución adaptable y soporte de contraste aumentado.
- Las superficies de contenido son opacas; el control de categorías utiliza vidrio con una selección compartida y permanece accesible al recorrer fichas extensas.

### Tokens de la sección

Se conserva Plus Jakarta Sans: títulos de sección de 40–64 px, títulos de ficha de 30–40 px y texto principal de 15–16 px, con unidades relativas para el escalado del navegador.

| Rol | Claro | Oscuro | Contraste sobre la superficie |
| --- | --- | --- | --- |
| Superficie | `#FFFFFF` | `#151922` | — |
| Superficie secundaria | `#F3F5F9` | `#1E2430` | — |
| Texto principal | `#18212F` | `#F0F3F9` | 16.19:1 / 15.82:1 |
| Texto secundario | `#596579` | `#AEB9CA` | 5.90:1 / 8.87:1 |
| Acento y foco | `#1C5BD8` | `#9ABFFF` | 5.94:1 / 9.44:1 |
| Separador | `#DCE2EB` | `#333D50` | Decorativo |

En escritorio, las categorías se organizan en tres columnas y el detalle en dos. En móvil, el contenido se apila y mantiene todas las funciones. Las ilustraciones 3D y las conexiones del proceso son el elemento expresivo; la navegación y el texto permanecen simples.

```text
Escritorio                         Móvil
Mis proyectos.        Introducción Mis proyectos.
Categorías · 4 proyectos           Introducción
[ Sistemas ][ Apps ][ Sitios ]     [ Sistemas ]
             ↓                     [ Apps     ]
Categoría → Proyecto → Ficha        [ Sitios   ]
[ Descripción ][ Vista conceptual ] Categoría → Proyecto
[ Funcionalidades en dos columnas ] [ Descripción ]
[ Tecnologías desplegables        ] [ Vista conceptual ]
                                   [ Funcionalidades  ]
                                   [ Tecnologías      ]
```

El criterio sigue las bases de las HIG de Apple, traducidas a web: `layout.md › Visual hierarchy` (divulgación progresiva), `typography.md › Ensuring legibility` y `motion.md › Providing feedback` (movimiento breve y opcional). La dirección artística de las vistas conceptuales es una decisión del proyecto.

Los datos están en `src/components/projects/ProjectsData.ts`; la navegación, en `ProjectsSection.tsx`; las fichas y los estilos, en `src/components/projects/`. El loader de Tailwind se aplica únicamente a `globals.css` para conservar el procesamiento nativo de CSS Modules de Next.js.

---

## 🚀 Comandos del Proyecto

```bash
# Servidor de desarrollo
npm run dev

# Compilación para producción
npm run build

# Iniciar servidor de producción
npm start

# Linter
npm run lint
```

---

## 📬 Contacto y Redes

* **GitHub:** [@LAUTYH](https://github.com/LAUTYH)
* **LinkedIn:** [Lautaro Olmos](https://www.linkedin.com/in/lautaroolmos/)
* **Email:** [lauolmos@outlook.es](mailto:lauolmos@outlook.es)
