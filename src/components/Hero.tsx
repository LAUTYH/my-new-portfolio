"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Copy, Mail, Moon, Pause, Play, Sun } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { usePortfolioExperience } from "./PortfolioExperience";
import ProjectArtwork from "./projects/ProjectArtwork";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Hero() {
  const { theme, toggleTheme, mounted } = useTheme();
  const { reducedMotion, manualReduction, toggleEffects, enterScene } = usePortfolioExperience();
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const email = "lauolmos@outlook.es";
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2400);
    } catch { window.location.href = `mailto:${email}`; }
  }

  return (
    <section id="inicio" data-scene="intro" className="intro-section">
      <header className="intro-header">
        <Link href="/" className="wordmark" aria-label="LTYH — Inicio">LTYH<span>.</span></Link>
        <nav className="intro-nav glass-control" aria-label="Navegación principal">
          <a href="#como-trabajo" onClick={() => enterScene("process")}>Cómo trabajo</a>
          <a href="#mis-proyectos" onClick={() => enterScene("projects")}>Proyectos</a>
        </nav>
        <div className="intro-utilities glass-control">
          <button type="button" onClick={toggleEffects} aria-pressed={manualReduction} aria-label={manualReduction ? "Usar movimiento del sistema" : "Reducir movimiento"} title={manualReduction ? "Usar movimiento del sistema" : "Reducir movimiento"}>{manualReduction ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}</button>
          <button type="button" onClick={toggleTheme} aria-label={mounted && theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"} title="Cambiar apariencia">{mounted && theme === "light" ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}</button>
          <a href="https://github.com/LAUTYH" target="_blank" rel="noopener noreferrer" aria-label="Perfil de GitHub @LAUTYH (abre en otra pestaña)"><GithubIcon /></a>
        </div>
      </header>

      <div className="intro-main">
        <motion.div className="intro-copy" initial={{ opacity: 0, transform: reducedMotion ? "none" : "translateY(16px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} transition={{ duration: reducedMotion ? .1 : .5, ease: [.23, 1, .32, 1] }}>
          <p className="section-eyebrow"><span className="status-dot" /> Full Stack AI Developer</p>
          <h1>Lautaro<br />Olmos<span>.</span></h1>
          <p className="intro-description">Desarrollo sistemas de punta a punta: <strong>web, apps mobile</strong> y <strong>automatización con IA.</strong></p>
          <div className="intro-actions">
            <a href="#mis-proyectos" className="action-prominent" onClick={() => enterScene("projects")}>Explorar proyectos <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a href={`mailto:${email}`} className="action-quiet"><Mail size={17} aria-hidden="true" /> Hablemos</a>
          </div>
          <div className="intro-contact">
            <button type="button" onClick={copyEmail} aria-label="Copiar correo electrónico al portapapeles"><span>{email}</span>{copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}</button>
            <span aria-hidden="true" className="contact-divider" />
            <a href="https://www.linkedin.com/in/lautaroolmos/" target="_blank" rel="noopener noreferrer" aria-label="Perfil de LinkedIn (abre en otra pestaña)"><LinkedinIcon /> LinkedIn</a>
            <span role="status" className="copy-feedback">{copied ? "Correo copiado" : ""}</span>
          </div>
        </motion.div>
        <div className="intro-visual" data-scroll-depth="intro">
          <div className="intro-orbit" aria-hidden="true" />
          <ProjectArtwork variant="systems" hero />
          <div className="intro-visual-caption"><span>Del diálogo a la acción.</span><span>Una misma lógica, todos los canales.</span></div>
        </div>
      </div>
      <div className="intro-bottom"><span>Interfaces claras. Sistemas conectados.</span><a href="#como-trabajo" onClick={() => enterScene("process")}>Conocé cómo trabajo <ArrowDown size={16} aria-hidden="true" /></a></div>
    </section>
  );
}
