import Hero from "@/components/Hero";
import WorkProcessSection from "@/components/WorkProcessSection";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-blue-500/25 selection:text-blue-600 dark:selection:text-blue-300">
      {/* Fondo Gradiante Ambiental Shifting en toda la página (Dark & Light) */}
      <AmbientBackground />

      {/* Sección 1: Inicio (Hero minimalista de alto impacto) */}
      <Hero />

      {/* Sección 2: Cómo Trabajo. (Interactivo estilo Apple Showcase con cinética 21st.dev) */}
      <WorkProcessSection />

      {/* Footer oficial (Apple HIG compliant: Safe area bottom & animación fluida) */}
      <Footer />
    </div>
  );
}
