"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Braces, Database, Layers3, Network, PanelsTopLeft, Search, ShieldCheck, Sparkles } from "lucide-react";
import { processDepth, useScrollDepth } from "./useScrollDepth";
import { usePortfolioExperience, type SceneTone } from "./PortfolioExperience";

const PROCESS_STEPS = [
  { id: "relevamiento-y-analisis", title: "Relevamiento y análisis", description: "Analizo los procesos y las necesidades de la organización para definir el alcance y los objetivos del proyecto.", tone: "blue" as SceneTone, icon: Search },
  { id: "diseno-y-planificacion", title: "Diseño y planificación", description: "Diseño los flujos de trabajo y la estructura funcional del sistema. Organizo las etapas de desarrollo y sus entregables.", tone: "violet" as SceneTone, icon: PanelsTopLeft },
  { id: "definicion-tecnica", title: "Definición técnica", description: "Defino la arquitectura, las tecnologías y las integraciones, considerando los requisitos de rendimiento, seguridad y acceso a la información.", tone: "cyan" as SceneTone, icon: Network },
  { id: "desarrollo-e-implementacion", title: "Desarrollo e implementación", description: "Desarrollo sitios web, aplicaciones para iOS y Android, sistemas de gestión y automatizaciones, desde la interfaz hasta la lógica de negocio y la base de datos.", tone: "mint" as SceneTone, icon: Braces },
  { id: "integracion-de-inteligencia-artificial", title: "Integración de inteligencia artificial", description: "Integro agentes y modelos de IA con los datos y servicios del sistema para procesar consultas, ejecutar tareas y automatizar flujos de trabajo.", tone: "violet" as SceneTone, icon: Sparkles },
  { id: "mantenimiento-y-soporte-tecnico", title: "Mantenimiento y soporte técnico", description: "Realizo actualizaciones, monitoreo de disponibilidad, controles de seguridad y copias de respaldo. Resuelvo incidencias, optimizo el rendimiento e implemento mejoras, con informes periódicos de las tareas realizadas y el estado del sistema.", tone: "coral" as SceneTone, icon: ShieldCheck }
];

export default function WorkProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [keyboardChange, setKeyboardChange] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  useScrollDepth(sectionRef, stackRef, processDepth);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const { reducedMotion, setProcessTone, enterScene } = usePortfolioExperience();
  const step = PROCESS_STEPS[activeStep];
  const StepIcon = step.icon;

  function selectStep(index: number, instant = false) {
    setKeyboardChange(instant);
    setActiveStep(index);
    setProcessTone(PROCESS_STEPS[index].tone);
    enterScene("process");
  }
  function handleKeys(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % PROCESS_STEPS.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index + PROCESS_STEPS.length - 1) % PROCESS_STEPS.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = PROCESS_STEPS.length - 1;
    else return;
    event.preventDefault();
    selectStep(next, true);
    tabRefs.current[next]?.focus();
  }

  return (
    <section ref={sectionRef} id="como-trabajo" data-scene="process" className="process-section" aria-labelledby="process-title">
      <div className="section-heading"><h2 id="process-title">Cómo trabajo<span>.</span></h2><p>De entender el problema<br />a cuidar cada parte de la solución.</p></div>
      <div className="process-layout" data-local-tone={step.tone}>
        <div className="process-tabs" role="tablist" aria-label="Etapas de trabajo" aria-orientation="vertical">
          {PROCESS_STEPS.map((item,index) => <button key={item.id} ref={(el) => { tabRefs.current[index] = el; }} id={`process-tab-${item.id}`} type="button" role="tab" aria-selected={index === activeStep} aria-controls="process-panel" tabIndex={index === activeStep ? 0 : -1} onClick={() => selectStep(index)} onKeyDown={(event) => handleKeys(event,index)}><span className="process-step-number">{String(index + 1).padStart(2,"0")}</span><span>{item.title}</span><span className="process-selected-mark" aria-hidden="true" /></button>)}
        </div>
        <div id="process-panel" className="process-panel" role="tabpanel" aria-labelledby={`process-tab-${step.id}`} tabIndex={0}>
          <div className="process-canvas" aria-hidden="true">
            <AnimatePresence initial={false}><motion.div key={step.tone} data-local-tone={step.tone} className="process-light" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reducedMotion || keyboardChange ? 0 : .45}} /></AnimatePresence>
            <div ref={stackRef} className="process-stack" data-scroll-depth="process">
              <div className="process-connector connector-one" /><div className="process-connector connector-two" />
              <div className="process-layer layer-data" data-active={activeStep === 2 || activeStep === 5}><Database size={24} /><span>Datos</span><span className="layer-dots"><i /><i /><i /><i /></span></div>
              <div className="process-layer layer-logic" data-active={activeStep === 3 || activeStep === 4}><Braces size={24} /><span>Lógica</span><span className="layer-lines"><i /><i /><i /></span></div>
              <div className="process-layer layer-interface" data-active={activeStep === 0 || activeStep === 1}><PanelsTopLeft size={24} /><span>Interfaz</span><span className="layer-wireframe"><i /><i /><i /></span></div>
              <div className="process-node"><StepIcon size={24} /></div>
            </div>
            <span className="process-canvas-caption"><Layers3 size={14} /> Cada capa, conectada.</span>
          </div>
          <div className="process-description">
            <p className="section-eyebrow">Etapa {String(activeStep + 1).padStart(2,"0")} / 06</p>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={step.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reducedMotion || keyboardChange ? 0 : .12}}><h3>{step.title}</h3><p>{step.description}</p></motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
