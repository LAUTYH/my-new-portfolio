"use client";

import { forwardRef, useEffect, useRef, useState, useSyncExternalStore, type MouseEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useIsPresent } from "motion/react";
import { ArrowLeft, ArrowRight, ChevronRight, Layers3 } from "lucide-react";
import { PROJECTS_TABS_DATA } from "./projects/ProjectsData";
import type { ProjectItem, ProjectTab } from "./projects/ProjectTypes";
import ProjectArtwork from "./projects/ProjectArtwork";
import ProjectCard from "./projects/ProjectCard";
import { usePortfolioExperience, type SceneTone } from "./PortfolioExperience";
import styles from "./projects/Projects.module.css";

const NAVIGATION_EVENT = "portfolio-project-navigation";

function subscribeToNavigation(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(NAVIGATION_EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(NAVIGATION_EVENT, callback);
  };
}

function getNavigation(search: string) {
  const params = new URLSearchParams(search);
  const category = PROJECTS_TABS_DATA.find((item) => item.slug === params.get("categoria"));
  const project = category?.projects.find((item) => item.id === params.get("proyecto"));
  return { category, project, depth: project ? 2 : category ? 1 : 0 };
}

function projectHref(category?: ProjectTab, project?: ProjectItem) {
  const params = new URLSearchParams();
  if (category) params.set("categoria", category.slug);
  if (project) params.set("proyecto", project.id);
  return `/${params.size ? `?${params}` : ""}#mis-proyectos`;
}

interface ExplorerPageProps {
  children: ReactNode;
  direction: number;
  reducedMotion: boolean;
  onReady: () => void;
}

const ExplorerPage = forwardRef<HTMLDivElement, ExplorerPageProps>(function ExplorerPage({ children, direction, reducedMotion, onReady }, ref) {
  const isPresent = useIsPresent();
  return (
    <motion.div
      ref={ref}
      className={styles.explorerPage}
      inert={!isPresent}
      custom={direction}
      variants={{
        enter: (travel: number) => ({ opacity: 0, transform: reducedMotion ? "none" : `translate3d(${travel * 12}%, 0, 0)` }),
        center: { opacity: 1, transform: "translate3d(0, 0, 0)" },
        exit: (travel: number) => ({ opacity: 0, transform: reducedMotion ? "none" : `translate3d(${travel * -8}%, 0, 0)`, transition: { duration: reducedMotion ? 0 : .18 } }),
      }}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: reducedMotion ? 0 : .28, ease: [.32, .72, 0, 1] }}
      onAnimationComplete={() => { if (isPresent) onReady(); }}
    >{children}</motion.div>
  );
});

export default function ProjectsSection() {
  const search = useSyncExternalStore(subscribeToNavigation, () => window.location.search, () => "");
  const { category, project, depth } = getNavigation(search);
  const [direction, setDirection] = useState(1);
  const { reducedMotion, setProjectsTone, enterScene } = usePortfolioExperience();
  const [instantNavigation, setInstantNavigation] = useState(false);
  const categoryTone: SceneTone = category?.artwork === "apps" ? "violet" : category?.artwork === "web" ? "coral" : "cyan";
  useEffect(() => { setProjectsTone(categoryTone); }, [categoryTone, setProjectsTone]);
  const stageRef = useRef<HTMLDivElement>(null);
  const pendingFocusRef = useRef<string | null>(null);
  const previousSearchRef = useRef("");

  useEffect(() => {
    previousSearchRef.current = window.location.search;
    function handleBackOrForward() {
      const previous = getNavigation(previousSearchRef.current);
      const next = getNavigation(window.location.search);
      if (previous.category?.id === next.category?.id && previous.project?.id === next.project?.id) return;
      setDirection(next.depth < previous.depth ? -1 : 1);
      setInstantNavigation(false);
      pendingFocusRef.current = next.depth < previous.depth
        ? previous.project && next.category ? `project-link-${previous.project.id}` : previous.category ? `category-link-${previous.category.id}` : "projects-view-title"
        : next.project ? "project-detail-title" : "projects-view-title";
      previousSearchRef.current = window.location.search;
    }
    window.addEventListener("popstate", handleBackOrForward);
    return () => window.removeEventListener("popstate", handleBackOrForward);
  }, []);

  function navigate(event: MouseEvent<HTMLAnchorElement>, nextCategory?: ProjectTab, nextProject?: ProjectItem, focusId?: string) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const nextDepth = nextProject ? 2 : nextCategory ? 1 : 0;
    if (category?.id === nextCategory?.id && project?.id === nextProject?.id) return;
    setDirection(nextDepth < depth ? -1 : 1);
    setInstantNavigation(event.detail === 0);
    enterScene("projects");
    pendingFocusRef.current = focusId ?? (nextProject ? "project-detail-title" : "projects-view-title");
    const url = new URL(window.location.href);
    url.searchParams.delete("categoria");
    url.searchParams.delete("proyecto");
    if (nextCategory) url.searchParams.set("categoria", nextCategory.slug);
    if (nextProject) url.searchParams.set("proyecto", nextProject.id);
    url.hash = "mis-proyectos";
    window.history.pushState(null, "", url);
    previousSearchRef.current = url.search;
    // Keep the navigation visible when entering from a card lower down the page.
    const top = stageRef.current?.getBoundingClientRect().top;
    if (top !== undefined && top < 24) window.scrollTo({ top: window.scrollY + top - 24, behavior: "instant" });
    window.dispatchEvent(new Event(NAVIGATION_EVENT));
  }

  function focusCurrentView() {
    const target = pendingFocusRef.current;
    if (!target) return;
    document.getElementById(target)?.focus({ preventScroll: true });
    pendingFocusRef.current = null;
  }

  const nextProject = category && project ? category.projects[category.projects.indexOf(project) + 1] : undefined;
  const viewKey = project?.id ?? category?.id ?? "categories";

  return (
    <section data-scene="projects" id="mis-proyectos" aria-labelledby="projects-title" className={styles.section}>
      <div className={styles.sectionHeading}>
        <h2 id="projects-title">Mis proyectos<span>.</span></h2>
        <p>Sistemas, aplicaciones y sitios web.<br />Explorá lo que hay detrás de cada proyecto.</p>
      </div>

      <div ref={stageRef} className={styles.explorer}>
        <div className={styles.explorerToolbar}>
          <nav aria-label="Ubicación en proyectos" className={styles.breadcrumb}>
            {category ? <a href={projectHref()} onClick={(event) => navigate(event, undefined, undefined, `category-link-${category.id}`)}><Layers3 size={16} aria-hidden="true" /><span>Categorías</span></a> : <span aria-current="page"><Layers3 size={16} aria-hidden="true" />Categorías</span>}
            {category && <><ChevronRight size={14} aria-hidden="true" />{project ? <a href={projectHref(category)} onClick={(event) => navigate(event, category, undefined, `project-link-${project.id}`)}>{category.shortLabel}</a> : <span aria-current="page">{category.shortLabel}</span>}</>}
            {project && <><ChevronRight size={14} aria-hidden="true" /><span className={styles.breadcrumbDetail} aria-current="page">Proyecto</span></>}
          </nav>
          <span className={styles.collectionCount}>{category ? `${category.projects.length} ${category.projects.length === 1 ? "proyecto" : "proyectos"}` : "3 categorías · 4 proyectos"}</span>
        </div>

        {category && <nav aria-label="Categorías de proyectos" className={`${styles.categoryNav} glass-control`}>{PROJECTS_TABS_DATA.map((item) => <a key={item.id} href={projectHref(item)} aria-current={item.id === category.id ? "true" : undefined} onClick={(event) => navigate(event, item)}>{item.id === category.id && <motion.span className={styles.activeCategoryPill} layoutId="projects-category-selection" transition={{ duration: reducedMotion ? 0 : .25, ease: [.23, 1, .32, 1] }} />}<span>{item.shortLabel}</span><span>{item.projects.length}</span></a>)}</nav>}

        <div className={styles.stage}>
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            <ExplorerPage key={viewKey} direction={direction} reducedMotion={reducedMotion || instantNavigation} onReady={focusCurrentView}>
              {!category ? (
                <div className={styles.categoryGrid}>
                  {PROJECTS_TABS_DATA.map((item) => (
                    <a key={item.id} id={`category-link-${item.id}`} href={projectHref(item)} onClick={(event) => navigate(event, item)} className={styles.categoryCard}>
                      <ProjectArtwork variant={item.artwork} />
                      <div className={styles.categoryContent}>
                        <span className={styles.eyebrow}>{item.projects.length} {item.projects.length === 1 ? "proyecto" : "proyectos"}</span>
                        <h3>{item.label}</h3>
                        <p>{item.description}</p>
                        <span className={styles.cardAction}>Explorar categoría <span><ArrowRight size={18} aria-hidden="true" /></span></span>
                      </div>
                    </a>
                  ))}
                </div>
              ) : project ? (
                <>
                  <a href={projectHref(category)} className={styles.backLink} onClick={(event) => navigate(event, category, undefined, `project-link-${project.id}`)}><ArrowLeft size={17} aria-hidden="true" />Volver a proyectos</a>
                  <ProjectCard project={project} />
                  <div className={styles.detailFooter}>
                    <a href={projectHref(category)} onClick={(event) => navigate(event, category, undefined, `project-link-${project.id}`)}><ArrowLeft size={17} aria-hidden="true" />Volver a {category.shortLabel}</a>
                    {nextProject && <a href={projectHref(category, nextProject)} onClick={(event) => navigate(event, category, nextProject)}><span>Siguiente proyecto<strong>{nextProject.title}</strong></span><ArrowRight size={19} aria-hidden="true" /></a>}
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.listHeading}>
                    <div><p className={styles.eyebrow}>Explorá la categoría</p><h3 id="projects-view-title" tabIndex={-1}>{category.label}</h3></div>
                    <a href={projectHref()} className={styles.backLink} onClick={(event) => navigate(event, undefined, undefined, `category-link-${category.id}`)}><ArrowLeft size={17} aria-hidden="true" />Todas las categorías</a>
                  </div>
                  <div className={styles.projectGrid} data-single={category.projects.length === 1}>
                    {category.projects.map((item) => (
                      <a key={item.id} id={`project-link-${item.id}`} href={projectHref(category, item)} onClick={(event) => navigate(event, category, item)} className={styles.projectTile}>
                        <ProjectArtwork variant={item.mockupType} />
                        <div className={styles.projectTileContent}>
                          <p className={styles.eyebrow}>{item.kind}</p>
                          <h4>{item.title}</h4>
                          <p className={styles.previewDescription}>{item.description}</p>
                          <ul className={styles.previewTags}>{item.previewTags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                          <span className={styles.cardAction}>Ver proyecto <span><ArrowRight size={18} aria-hidden="true" /></span></span>
                        </div>
                      </a>
                    ))}
                  </div>
                </>
              )}
            </ExplorerPage>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
