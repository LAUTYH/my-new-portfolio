export interface ProjectFeature {
  title: string;
  description: string;
}

export interface CategorizedStack {
  category: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  kind: string;
  previewTags: string[];
  description: string;
  features: ProjectFeature[];
  stackList?: string[];
  categorizedStack?: CategorizedStack[];
  infrastructure?: string;
  liveUrl?: string;
  repoUrl?: string;
  mockupType: "whatsapp-ai" | "fitness-platform" | "corporate-jabonera" | "corporate-rosquin";
}

export interface ProjectTab {
  id: string;
  slug: string;
  shortLabel: string;
  description: string;
  artwork: "systems" | "apps" | "web";
  label: string;
  badge: string;
  projects: ProjectItem[];
}
