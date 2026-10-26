import Hero from "@/components/Hero";
import WorkProcessSection from "@/components/WorkProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-blue-500/25 selection:text-blue-600 dark:selection:text-blue-300">
      {/* Atmósfera cromática vinculada a la sección y selección actual */}
      <AmbientBackground />

      {/* Sección 1: Inicio (Hero minimalista de alto impacto) */}
      <Hero />

      {/* Sección 2: Proceso conectado, con profundidad vinculada al scroll */}
      <WorkProcessSection />

      {/* Sección 3: Categorías, proyectos y fichas con navegación lateral */}
      <ProjectsSection />

      {/* Footer oficial (Apple HIG compliant: Safe area bottom & animación fluida) */}
      <Footer />
    </div>
  );
}
