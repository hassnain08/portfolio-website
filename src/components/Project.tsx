import React from "react";
import { ExternalLink, Lock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import Reveal from "./Reveal";
import thunder1 from "../assets/images/thunder1.png";
import visionAiImg from "../assets/images/image.png";

interface ProjectItem {
  title: string;
  tag: string;
  description: string;
  link?: string;
  image?: string;
  initials: string;
}

const projects: ProjectItem[] = [
  {
    title: "Punjab Health Connect (PHC)",
    tag: "Government of Punjab (PHIMC) · 2026",
    description:
      "Live Government of Punjab healthcare platform (punjabhealthconnect.gop.pk) connecting overseas Pakistani & foreign specialist doctors (3+ years post-specialization) with public hospitals for free, short-term clinical deployments — 8 super-specialties across 12 tertiary care hospitals, including 8 Cardiac Institutes, the Punjab Institute of Neurosciences, and Children's Hospitals in Lahore, Multan & Faisalabad. Built three role-based Odoo 18 portals (9 user roles, 10+ backend modules), an auto-refreshing executive dashboard (Chart.js, Leaflet maps), weighted hospital matching, RBAC/OTP/MFA auth, and a GitHub Actions CI/CD pipeline deployed on PITB's Kubernetes infrastructure.",
    link: "https://punjabhealthconnect.gop.pk/",
    initials: "PHC",
  },
  {
    title: "Thunder — AI Energy Analytics Platform",
    tag: "Production Platform",
    description:
      "Dashboard transforming raw IoT sensor data from telecom towers into actionable insights — battery health, power sourcing, tower monitoring, and forecasting across 6,000+ sites.",
    link: "https://github.com/hassnain08/Thunder-Telecom-Monitoring-System",
    image: thunder1,
    initials: "TH",
  },
  {
    title: "Hisaab – AI Financial Copilot",
    tag: "Full-Stack AI Product",
    description:
      "Full-stack AI financial assistant for Pakistani shopkeepers supporting multi-modal input — voice (Urdu, Roman Urdu, English), receipt/invoice capture, and manual entry — with custom MCP tools, real-time inventory tracking, and an autonomous goal-tracking AI Advisor.",
    initials: "HS",
  },
  {
    title: "EduBot – Intelligent Learning Assistant",
    tag: "RAG + Agentic",
    description:
      "AI study platform (RAG + custom MCP framework) unifying course PDFs, lecture videos, and notes into one queryable knowledge base — an 80% improvement in exam-prep efficiency, plus automated YouTube-to-notes summarization.",
    link: "https://github.com/hassnain08/Learnify-Agentic-Tutor",
    initials: "ED",
  },
  {
    title: "VisionAI – Multimodal Accessibility Assistant",
    tag: "Computer Vision + LLMs",
    description:
      "Real-time multimodal AI assistant guiding non-technical and elderly users through digital systems via natural voice and text — a 65% improvement in independent system usage in adoption studies.",
    link: "https://github.com/hassnain08/Vision-AI",
    image: visionAiImg,
    initials: "VA",
  },
  {
    title: "VoxAssist – Personal Voice-Clone Assistant",
    tag: "Personal Project",
    description:
      "Voice-clone assistant that turns a 10-20 second recording into a natural-sounding clone, reading back notes and reminders — a 2-billion-parameter voice model running fully offline on CPU, no GPU or cloud.",
    initials: "VX",
  },
  {
    title: "TellScrape – AI Web-Scraping Agent",
    tag: "Automation Tool",
    description:
      "AI-driven scraping agent that turns a single plain-English instruction into a fully autonomous browsing session — pulling clean structured data with zero hand-written selectors, enriched with live public cross-referencing.",
    initials: "TS",
  },
];

function ProjectCard({ project }: { project: ProjectItem }) {
  const CardInner = (
    <Card className="group flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/80 to-accent/60">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-mono text-4xl font-black text-white/90">{project.initials}</span>
          </div>
        )}
        {!project.link && (
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur">
            <Lock className="h-3 w-3" /> Private
          </span>
        )}
      </div>
      <CardHeader className="flex-1">
        <Badge variant="outline" className="mb-1 w-fit">{project.tag}</Badge>
        <CardTitle className="flex items-center gap-2 text-lg">
          {project.title}
          {project.link && (
            <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          )}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
      </CardHeader>
    </Card>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noreferrer" className="block h-full">
        {CardInner}
      </a>
    );
  }

  return CardInner;
}

function Project() {
  return (
    <section id="projects" className="bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Selected Work
          </p>
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">Projects</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.05} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
