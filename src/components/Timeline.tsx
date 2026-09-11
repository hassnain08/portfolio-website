import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Reveal from "./Reveal";

interface Entry {
  icon: typeof Briefcase;
  title: string;
  place: string;
  date: string;
  bullets: string[];
}

const entries: Entry[] = [
  {
    icon: Briefcase,
    title: "Software Engineer",
    place: "Thunder Energy Intelligence Platform · Islamabad, Pakistan",
    date: "April 2026 - Present",
    bullets: [
      "Built a real-time IoT fuel-theft detection system using time-series anomaly detection and automated alarm lifecycle management, cutting undetected theft incidents by 60%.",
      "Rebuilt the Dynamic Load Shedding engine with a config-driven architecture and automated data-retention policy, eliminating false 24-hour outage reports and cutting stale historical data ~95% across Telenor's 6,000+ sites.",
      "Optimized the Asset Discovery pipeline securing hardware integrity across 6,000+ sites, automating daily hardware fingerprinting, movement, and duplicate-device detection.",
      "Optimized Thunder's solar forecasting model with a physics-based recalibration (panel angle, heat, dust, wiring losses), ~9% more accurate than the formula it replaced.",
      "Engineered the Solar Curtailment Policy and Solar Impact pipelines powering Thunder's live Impact Meter dashboard, tracking $99.7K in fuel savings, 99.3K liters of diesel, and 270.1 tons of CO2 reduction across 408 sites.",
      "Engineered the DQI (Data Quality Index) engine — a multi-tenant rules pipeline deployed across multiple clients' production server environments — scoring telemetry across 6 quality dimensions (equipment/vendor reporting completeness, config-parameter stability, physical-impossibility checks, cross-signal consistency, timestamp integrity, and rule-based anomaly detection) and 9 automated metrics per site, including telemetry-blackout detection and fuel-delivery/sensor-calibration reconciliation, catching bad or physically impossible data before it reaches downstream pipelines.",
      "Built an AI-assisted Selenium scraper extracting IoT device schemas from firmware portals, cutting manual schema mapping by 70%.",
    ],
  },
  {
    icon: Briefcase,
    title: "AI & Data Engineer Intern",
    place: "Thunder Energy Intelligence Platform · Islamabad, Pakistan",
    date: "June 2025 - April 2026",
    bullets: [
      "Engineered a multi-protocol IoT management API (Huawei FusionSolar, Growatt, Vertiv) for remote telemetry and configuration across 6,000+ telecom sites at 98% data accuracy.",
      "Built a Kafka-based automation service for Vertiv power systems handling authenticated remote configuration with rollback support, 98% success rate.",
      "Scaled ETL pipelines processing 80k+ daily IoT/energy records with automated validation, 100% data integrity.",
      "Built a RAG-based document intelligence platform (RAGAnything, Qdrant) turning hundreds of pages of technical manuals into an instantly queryable knowledge base.",
      "Enhanced Thunder's FESCO energy chatbot with Opik-powered LLM observability and intelligent SQL/RAG query routing, cutting hallucinations by 35%.",
      "Built a CrewAI multi-agent pipeline that auto-generates technical documentation from live dashboards, cutting manual UI analysis effort by 75%.",
    ],
  },
  {
    icon: Briefcase,
    title: "Applied ML Intern",
    place: "Thunder Energy Intelligence Platform · Islamabad, Pakistan",
    date: "January 2025 - May 2025",
    bullets: [
      "Built time-series forecasting models (ARIMA, SARIMA, Prophet, LSTM) predicting load-shedding hours at 93% accuracy across 6,000+ Telenor telecom sites.",
      "Delivered a full-stack analytics web app consolidating battery analysis, power monitoring, tower performance, and forecasting into a single platform.",
      "Designed interactive Plotly dashboards enabling non-technical stakeholders to visualize energy forecasts and act on them in real time.",
    ],
  },
  {
    icon: Briefcase,
    title: "Junior Software Engineer Intern",
    place: "Heavy Mechanical Complex (HMC) · Islamabad, Pakistan",
    date: "June 2024 - August 2024",
    bullets: [
      "Developed Java desktop applications using MVC, Factory, and Observer design patterns with layered architecture and authentication.",
      "Applied ML algorithms (KNN, K-Means, Random Forest, Regression) to medical and real-estate datasets, achieving 87% accuracy in disease and price prediction.",
      "Worked with BigQuery SQL for large-scale enterprise data querying, transformation, and analysis.",
      "Built 3+ Power BI dashboards (Comparative Analysis, Sales, P&L), improving cost visibility by 15%+.",
    ],
  },
  {
    icon: Briefcase,
    title: "System Engineer Intern",
    place: "Unique Systems · Islamabad, Pakistan",
    date: "June 2024 - August 2024",
    bullets: [
      "Built a physical server from scratch — installed VMware ESXi, provisioned VMs via vCenter, and deployed it into a live production environment integrated with existing infrastructure.",
    ],
  },
  {
    icon: GraduationCap,
    title: "BS Software Engineering",
    place: "FAST – National University of Computer and Emerging Sciences, Islamabad",
    date: "2023 - Expected June 2027",
    bullets: [],
  },
];

function Timeline() {
  return (
    <section id="history" className="py-20 md:py-28">
      <div className="container mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Career
          </p>
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">Work &amp; Education</h2>
        </Reveal>

        <div className="relative border-l-2 border-border pl-8">
          {entries.map((entry, i) => (
            <Reveal key={entry.title + entry.date} delay={i * 0.05} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[2.35rem] flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/40">
                <entry.icon className="h-4 w-4" />
              </span>

              <Card className="transition-transform duration-300 hover:-translate-y-0.5">
                <CardContent className="p-6">
                  <div className="mb-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-bold">{entry.title}</h3>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wide text-primary">
                      {entry.date}
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-muted-foreground">{entry.place}</p>
                  {entry.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {entry.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
