import { ArrowUpRight, Code2, Server } from "lucide-react";
import type { ProjectItem } from "./ProjectTypes";
import ProjectArtwork from "./ProjectArtwork";
import styles from "./Projects.module.css";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className={styles.projectDetail} aria-labelledby="project-detail-title">
      <div className={styles.detailHero}>
        <div className={styles.detailIntro}>
          <p className={styles.eyebrow}>{project.kind}</p>
          <h3 id="project-detail-title" tabIndex={-1} className={styles.detailTitle}>{project.title}</h3>
          <p className={styles.detailDescription}>{project.description}</p>
          {(project.liveUrl || project.repoUrl) && (
            <div className={styles.detailActions}>
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>Visitar sitio <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (abre en otra pestaña)</span></a>}
              {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryAction}><Code2 size={17} aria-hidden="true" /> Repositorio en GitHub<span className="sr-only"> (abre en otra pestaña)</span></a>}
            </div>
          )}
        </div>
        <figure className={styles.detailFigure}>
          <ProjectArtwork variant={project.mockupType} />
          <figcaption>Representación conceptual del proyecto</figcaption>
        </figure>
      </div>

      <div className={styles.detailBody}>
        <section aria-labelledby="project-features-title" className={styles.featuresSection}>
          <div className={styles.subsectionHeading}>
            <h4 id="project-features-title">Funcionalidades</h4>
            <span>{project.features.length} áreas de trabajo</span>
          </div>
          <dl className={styles.featuresGrid}>
            {project.features.map((feature) => (
              <div key={feature.title} className={styles.feature}>
                <dt>{feature.title}</dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <details className={styles.stackDisclosure} open={project.categorizedStack ? undefined : true}>
          <summary>
            <span><Code2 size={20} aria-hidden="true" /><span>{project.categorizedStack ? "Stack previsto" : "Stack e integraciones"}</span></span>
            <span className={styles.disclosureHint} aria-hidden="true"><span className={styles.disclosurePlus} /></span>
          </summary>
          <div className={styles.stackContent}>
            {project.stackList && <ul className={styles.techList}>{project.stackList.map((tech) => <li key={tech}>{tech}</li>)}</ul>}
            {project.categorizedStack && <dl className={styles.stackGroups}>{project.categorizedStack.map((group) => <div key={group.category}><dt>{group.category}</dt><dd><ul className={styles.techList}>{group.items.map((tech) => <li key={tech}>{tech}</li>)}</ul></dd></div>)}</dl>}
            {project.infrastructure && <p className={styles.infrastructure}><Server size={16} aria-hidden="true" /><span><strong>Infraestructura documentada:</strong> {project.infrastructure}</span></p>}
          </div>
        </details>
      </div>
    </article>
  );
}
