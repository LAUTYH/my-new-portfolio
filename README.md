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

## 🌌 Atmósfera Visual: Efecto de Degradado Ambiental (Estilo Gemini)

Inspirado en la interfaz oficial de **Google Gemini**, la página implementa un efecto de iluminación ambiental continuo, orgánico y sutil (*"leve"*) que cubre la totalidad del sitio (Hero, Sección «Cómo Trabajo» y Footer).

### Principios de Diseño
1. **Fondo Neutro Absoluto:** Base sólida neutral sin saturaciones excesivas (`#0E1015` en Dark Mode; `#F8F9FA` en Light Mode).
2. **Luces Difusas en Movimiento Continuo ("Es leve"):** Tres fuentes de luz orgánicas con desenfoque extremo (`blur(100px - 160px)`) que respiran, rotan y se desplazan autónomamente a baja velocidad sin requerir interacción del usuario.
3. **Soporte Completo Dual-Theme (Dark & Light):**
   - **Versión Dark:** Fondo neutro carbón obsidiana (`#0E1015`) con un aura atmosférica en azul cobalto (`#2563EB`, opacidad ~15%), índigo espacial (`#4F46E5`, opacidad ~14%) y violeta tenue (`#9333EA`, opacidad ~10%).
   - **Versión Light:** Fondo neutro perla (`#F8F9FA`) con luminiscencia pastel translúcida en melocotón/coral cálido (`rgba(251, 146, 60, 0.18)`), cian cielo (`rgba(56, 189, 248, 0.20)`) y lavanda suave (`rgba(192, 132, 252, 0.16)`).
4. **Cobertura de Página Completa:** Capa de luz fijada en el viewport (`fixed inset-0 pointer-events-none`) que acompaña la navegación a lo largo de todas las secciones con micro-reacción al desplazamiento (scroll) y soporte para `prefers-reduced-motion`.
5. **Selector de Tema Integrado:** Toggle accesible en la barra superior con persistencia en `localStorage` y detección automática de preferencia de sistema (`prefers-color-scheme`).

---

## 🎨 Paleta y Tokens de Color Dual-Theme

| Token | Dark Mode (Predeterminado) | Light Mode | Propósito |
| :--- | :--- | :--- | :--- |
| **`--background`** | `#0E1015` (Neutro Carbón) | `#F8F9FA` (Neutro Perla) | Fondo principal de la página |
| **`--foreground`** | `#F1F5F9` (Slate 100) | `#0F172A` (Slate 900) | Color de texto principal |
| **`--card-bg`** | `rgba(255, 255, 255, 0.03)` | `rgba(255, 255, 255, 0.85)` | Tarjetas y contenedores |
| **`--card-border`** | `rgba(255, 255, 255, 0.08)` | `rgba(226, 232, 240, 0.80)` | Bordes sutiles de tarjetas |
| **`--ambient-1`** | `rgba(37, 99, 235, 0.16)` (Cobalto) | `rgba(251, 146, 60, 0.20)` (Peach Gemini) | Luz ambiental A (Órbita 1) |
| **`--ambient-2`** | `rgba(79, 70, 229, 0.14)` (Índigo) | `rgba(56, 189, 248, 0.22)` (Cyan Gemini) | Luz ambiental B (Órbita 2) |
| **`--ambient-3`** | `rgba(147, 51, 234, 0.10)` (Violeta) | `rgba(192, 132, 252, 0.18)` (Lavanda Gemini) | Luz ambiental C (Órbita 3) |

---

## 🍏 Estándares de Diseño Apple (Human Interface Guidelines — HIG)

El proyecto implementa los principios fundamentales de diseño y accesibilidad de Apple:

1. **Objetivos Táctiles Accesibles (44x44 pt):** Todos los botones interactivos (selector de tema, enlaces sociales, píldoras y flechas de navegación) cumplen con el área de contacto mínima de `44x44 pt` requerida por las guías de accesibilidad en iOS y pantallas táctiles (`accessibility.md › Mobility`).
2. **Jerarquía Visual y Roles de Botón (`buttons.md › Style`):**
   - **Acción Primaria:** El botón de contacto directo por email (`lauolmos@outlook.es` + botón de copiado) se destaca con estilo prominente de alto contraste (Dark: blanco sólido / Light: pizarra profundo).
   - **Acciones Secundarias:** Los enlaces a GitHub y LinkedIn utilizan acabado *Liquid Glass* translúcido con bordes sutiles y micro-interacción de pulsación táctil (`active:scale-[0.98]`).
3. **Respeto a Áreas Seguras (`env(safe-area-inset-*)`):** Adaptabilidad nativa para dispositivos con Dynamic Island, Notch y barra de inicio en iOS Safari sin solapamiento de contenido (`layout.md › Guides and safe areas`).
4. **Legibilidad Tipográfica Estricta:** Cumplimiento de la regla de no utilizar pesos delgados (`font-light` / 300) en tamaños de texto pequeños (footers y notas), garantizando contraste superior a 4.5:1 (`typography.md › Ensuring legibility`).

---

## 🛠️ Sección 2: Cómo Trabajo. (Experiencia Interactiva Apple Showcase)

Inspirada en el explorador interactivo de características de **Apple.com**, esta sección estructura los 6 puntos clave de Lautaro Olmos:

1. **Relevamiento y análisis:** Analizo los procesos y las necesidades de la organización para definir el alcance y los objetivos del proyecto.
2. **Diseño y planificación:** Diseño los flujos de trabajo y la estructura funcional del sistema. Organizo las etapas de desarrollo y sus entregables.
3. **Definición técnica:** Defino la arquitectura, las tecnologías y las integraciones, considerando los requisitos de rendimiento, seguridad y acceso a la información.
4. **Desarrollo e implementación:** Desarrollo sitios web, aplicaciones para iOS y Android, sistemas de gestión y automatizaciones, desde la interfaz hasta la lógica de negocio y la base de datos.
5. **Integración de inteligencia artificial:** Integro agentes y modelos de IA con los datos y servicios del sistema para procesar consultas, ejecutar tareas y automatizar flujos de trabajo.
6. **Mantenimiento y soporte técnico:** Realizo actualizaciones, monitoreo de disponibilidad, controles de seguridad y copias de respaldo. Resuelvo incidencias, optimizo el rendimiento e implemento mejoras, con informes periódicos de las tareas realizadas y el estado del sistema.

### Arquitectura de Interacción & Motion Design (Nivel 21st.dev & Apple HIG)
* **Orquestación de Entradas (Blur Reveal):** Revelación fluida del Hero y títulos con desenfoque a nitidez (`blur(10px) -> blur(0px)` y `opacity: 0 -> 1`) utilizando la curva cúbica oficial de Apple `cubic-bezier(0.16, 1, 0.3, 1)`.
* **Micro-física Táctil y Rebound Elástico:** Botones y píldoras con respuesta táctil por resortes de alta fidelidad (`whileHover={{ y: -2, scale: 1.02 }}`, `whileTap={{ scale: 0.96 }}`).
* **Rotación Elástica del Botón `(+)`:** Rotación de 90° con rebote elástico al pasar el cursor sobre las píldoras colapsadas.
* **Efecto Border Beam (21st.dev):** Resplandor ambiental perimetral dinámico en la tarjeta activa que realza el foco visual.
* **Escenario Kinético con Escultura Geométrica Abstracta (*Stage*):**
  - **Relevamiento y análisis:** Radar óptico orbital y lente de vidrio flotante con pulso concéntrico.
  - **Diseño y planificación:** Planos isométricos flotantes con levitación orgánica desfasada.
  - **Definición técnica:** Núcleo prismático de nodos y circuitos de datos con rotación continua.
  - **Desarrollo e implementación:** Sistema orbital dual (Web / Mobile) con reactor de código esmeralda.
  - **Integración de inteligencia artificial:** Iris sináptico con pétalos irisados y núcleo neural fucsia/índigo.
  - **Mantenimiento y soporte técnico:** Telemetría circular con ticks angulares y sensor central de estabilidad.
* **Desplazamiento Suave con Lenis (*Smooth Scroll & Weighted Inertia*):** Integración nativa de **Lenis** con amortiguación ponderada (`wheelMultiplier: 0.85`, `duration: 1.5s`) y curva exponencial Apple (`(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`), generando una sutil inercia/resistencia al deslizar hacia abajo que aporta una sensación táctil de alta gama sin saltos abruptos.
* **Accesibilidad y `prefers-reduced-motion`:** Cumplimiento estricto con desactivación automática de animaciones pesadas y desplazamiento suave para usuarios con sensibilidad al movimiento.

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
