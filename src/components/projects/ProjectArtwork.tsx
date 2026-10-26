"use client";

import { useRef } from "react";
import Image from "next/image";
import type { ProjectItem, ProjectTab } from "./ProjectTypes";
import { imageDepth, useScrollDepth } from "../useScrollDepth";
import styles from "./Projects.module.css";

type ArtworkVariant = ProjectTab["artwork"] | ProjectItem["mockupType"];

/** Original conceptual illustrations; never presented as product screenshots. */
export default function ProjectArtwork({ variant, hero = false }: { variant: ArtworkVariant; hero?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const layerRef = useRef<HTMLSpanElement>(null);
  useScrollDepth(ref, layerRef, imageDepth);
  const isSystems = variant === "systems" || variant === "whatsapp-ai";
  const isApps = variant === "apps" || variant === "fitness-platform";
  const art = isSystems ? "systems" : isApps ? "apps" : "web";
  return (
    <span ref={ref} className={styles.artwork} data-art={art} data-hero={hero} aria-hidden="true">
      <span className={styles.artworkHalo} />
      <span ref={layerRef} className={styles.renderObject} data-scroll-depth="project">
        <Image src={`/images/projects/${art}.webp`} alt="" fill sizes={hero ? "(max-width: 760px) 90vw, 50vw" : "(max-width: 760px) 90vw, 45vw"} loading={hero ? "eager" : "lazy"} fetchPriority={hero ? "high" : "auto"} draggable={false} />
      </span>
      <span className={styles.artworkFootnote}>{isSystems ? "Conversación · disponibilidad · datos" : isApps ? "Mobile · web · sincronización" : "Identidad · catálogo · contenido"}</span>
    </span>
  );
}
