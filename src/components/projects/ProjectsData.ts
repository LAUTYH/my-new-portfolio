import { ProjectTab } from "./ProjectTypes";

export const PROJECTS_TABS_DATA: ProjectTab[] = [
  {
    id: "tab-a",
    slug: "sistemas-ia",
    shortLabel: "Sistemas e IA",
    description: "Lógica de negocio e inteligencia artificial, conectadas.",
    artwork: "systems",
    badge: "Pestaña A",
    label: "Sistemas de gestión e integración de IA",
    projects: [
      {
        id: "sistema-gestion-reservas",
        kind: "Sistema full stack",
        previewTags: ["Agente conversacional", "WhatsApp", "Reservas"],
        title: "Sistema de gestión de reservas con agente conversacional",
        description:
          "Aplicación full stack con interfaz web, panel administrativo y agente de IA integrado en WhatsApp. Los tres canales operan sobre una base de datos centralizada y comparten la misma lógica de disponibilidad y validación.",
        features: [
          {
            title: "Motor de disponibilidad",
            description:
              "cálculo de bloques horarios según duración, servicios combinados, intervalos, recursos compartidos y restricciones configurables.",
          },
          {
            title: "Gestión de reservas",
            description:
              "creación, modificación, cancelación y seguimiento de estados desde la web, el panel o el agente.",
          },
          {
            title: "Agente conversacional",
            description:
              "procesamiento de texto y audio, contexto de conversaciones y consulta al sistema para validar disponibilidad antes de registrar una reserva.",
          },
          {
            title: "Intervención humana",
            description:
              "modo supervisado y derivación de conversaciones según reglas definidas.",
          },
          {
            title: "Automatización de notificaciones",
            description:
              "confirmaciones, recordatorios programados y avisos ante cambios mediante WhatsApp.",
          },
        ],
        stackList: [
          "TypeScript",
          "Next.js",
          "React",
          "Node.js",
          "PostgreSQL",
          "Neon",
          "Vercel",
          "OpenAI API",
          "WhatsApp Cloud API con Coexistence",
        ],
        mockupType: "whatsapp-ai",
      },
    ],
  },
  {
    id: "tab-b",
    slug: "apps-plataformas",
    shortLabel: "Apps y plataformas",
    description: "Una misma experiencia, en la web y en tu bolsillo.",
    artwork: "apps",
    badge: "Pestaña B",
    label: "Aplicaciones móviles y plataformas web",
    projects: [
      {
        id: "plataforma-entrenamiento-gestion",
        kind: "Aplicación móvil + plataforma web",
        previewTags: ["iOS / Android", "Panel web", "Sin conexión"],
        title: "Plataforma de entrenamiento y gestión",
        description:
          "Sistema compuesto por una aplicación móvil para iOS/Android, un panel web administrativo y un backend compartido.",
        features: [
          {
            title: "Aplicación móvil",
            description:
              "consulta de rutinas, registro de series, repeticiones y cargas, y visualización del estado de la cuota.",
          },
          {
            title: "Funcionamiento sin conexión",
            description:
              "almacenamiento local y cola de sincronización para conservar registros pendientes y enviarlos al recuperar la conexión, evitando duplicados.",
          },
          {
            title: "Panel web",
            description:
              "creación y asignación de rutinas, seguimiento de entrenamientos, gestión de membresías, control de pagos y generación de reportes.",
          },
          {
            title: "Modelo de datos",
            description:
              "separación entre la planificación del entrenamiento y su ejecución, conservando las indicaciones y los resultados registrados.",
          },
          {
            title: "Seguridad y acceso",
            description:
              "autenticación de usuarios y políticas de acceso a los datos mediante Row Level Security.",
          },
          {
            title: "Automatizaciones",
            description:
              "tareas programadas y notificaciones para recordatorios y avisos.",
          },
        ],
        categorizedStack: [
          {
            category: "Web",
            items: [
              "TypeScript",
              "React",
              "Vite",
              "Tailwind CSS",
              "shadcn/ui",
              "React Router",
              "TanStack Query",
              "React Hook Form",
              "Zod",
            ],
          },
          {
            category: "Mobile",
            items: [
              "TypeScript",
              "React Native",
              "Expo",
              "Expo Router",
              "NativeWind",
              "TanStack Query",
              "React Hook Form",
              "Zod",
              "Expo SQLite",
              "FileSystem",
              "Network",
              "SecureStore",
              "Notifications",
            ],
          },
          {
            category: "Backend",
            items: [
              "Supabase",
              "PostgreSQL",
              "Supabase Auth",
              "RLS",
              "Storage",
              "Edge Functions con TypeScript y Deno",
              "Supabase Cron",
              "Expo Push Service",
            ],
          },
          {
            category: "Infraestructura y desarrollo",
            items: [
              "Cloudflare Pages",
              "Supabase Cloud",
              "Expo EAS Build y Submit",
              "npm workspaces",
              "Git",
              "Docker",
              "Supabase CLI",
            ],
          },
          {
            category: "Pruebas",
            items: [
              "Vitest",
              "React Testing Library",
              "Playwright",
              "jest-expo",
              "React Native Testing Library",
              "pgTAP",
              "Deno Test",
            ],
          },
        ],
        mockupType: "fitness-platform",
      },
    ],
  },
  {
    id: "tab-c",
    slug: "sitios-web",
    shortLabel: "Sitios web",
    description: "Identidad, contenido y herramientas para cada empresa.",
    artwork: "web",
    badge: "Pestaña C",
    label: "Sitios web corporativos",
    projects: [
      {
        id: "cooperativa-jabonera",
        kind: "Sitio corporativo · WordPress",
        previewTags: ["Catálogo dinámico", "WordPress", "Mantenimiento"],
        title: "Cooperativa Jabonera",
        liveUrl: "https://www.cooperativajabonera.com/",
        description:
          "Sitio corporativo en WordPress con catálogo dinámico, componentes personalizados y mantenimiento periódico.",
        features: [
          {
            title: "Catálogo administrable",
            description:
              "productos organizados mediante Custom Post Types y campos personalizados con ACF.",
          },
          {
            title: "Componentes personalizados",
            description: "carrusel desarrollado en código propio.",
          },
          {
            title: "Seguridad y rendimiento",
            description:
              "protección antispam, firewall, análisis de malware y optimización de carga mediante caché.",
          },
          {
            title: "Mantenimiento",
            description:
              "actualizaciones controladas, entorno de pruebas, respaldos diarios, monitoreo de disponibilidad y soporte técnico.",
          },
          {
            title: "Analítica y posicionamiento",
            description:
              "seguimiento de visitas, configuración SEO e informes trimestrales.",
          },
        ],
        stackList: [
          "WordPress",
          "ACF",
          "Custom Post Types",
          "Wordfence",
          "LiteSpeed Cache",
          "Cloudflare Turnstile",
          "Yoast SEO",
          "Google Analytics 4",
          "Google Search Console",
        ],
        mockupType: "corporate-jabonera",
      },
      {
        id: "el-rosquin",
        kind: "Sitio corporativo · Desarrollo a medida",
        previewTags: ["Next.js", "Catálogo de productos", "Animación"],
        title: "El Rosquín",
        liveUrl: "https://www.elrosquin.com.ar/",
        repoUrl: "https://github.com/LAUTYH/el-rosquin-v2",
        infrastructure: "Vercel",
        description:
          "Sitio corporativo desarrollado a medida para presentar la empresa, sus líneas de productos y su propuesta comercial.",
        features: [
          {
            title: "Catálogo navegable",
            description:
              "fichas de productos con ingredientes e información nutricional.",
          },
          {
            title: "Material comercial",
            description: "descarga del catálogo en PDF.",
          },
          {
            title: "Consultas comerciales",
            description:
              "formulario con protección antispam y envío de mensajes por correo electrónico.",
          },
          {
            title: "Interfaz y navegación",
            description:
              "animaciones, transiciones entre páginas y desplazamiento suave.",
          },
          {
            title: "Analítica",
            description:
              "medición de visitas y eventos mediante Google Analytics 4 y Meta Pixel.",
          },
        ],
        stackList: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "GSAP",
          "ScrollTrigger",
          "Lenis",
          "Lucide React",
          "Resend",
          "Cloudflare Turnstile",
          "Google Analytics 4",
          "Meta Pixel",
        ],
        mockupType: "corporate-rosquin",
      },
    ],
  },
];
