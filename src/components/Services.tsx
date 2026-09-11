import React from "react";
import { BarChart3, Bot, Database, LineChart, Workflow, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Reveal from "./Reveal";

const services = [
  {
    icon: Bot,
    title: "AI Agent & RAG System Development",
    description:
      "Autonomous agents, MCP tools, and conversational RAG pipelines (LangChain, CrewAI, Qdrant) that turn documents and workflows into queryable, actionable systems.",
  },
  {
    icon: Database,
    title: "Data Engineering & IoT Pipelines",
    description:
      "ETL pipelines, Kafka streaming, and multi-protocol IoT integrations at scale, with automated data-quality validation baked in.",
  },
  {
    icon: LineChart,
    title: "Time-Series Forecasting & Predictive Analytics",
    description:
      "ARIMA/SARIMA/Prophet/LSTM forecasting models and anomaly detection, tuned with domain-specific physics-based recalibration for real accuracy gains.",
  },
  {
    icon: Layers,
    title: "Full-Stack Product Development",
    description:
      "End-to-end delivery from architecture to deployment — FastAPI/Odoo backends, interactive dashboards, containerized with Docker/Kubernetes.",
  },
  {
    icon: BarChart3,
    title: "BI Dashboards & Data Visualization",
    description:
      "Power BI and Plotly dashboards that turn fragmented data into executive-ready insight for non-technical stakeholders.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "RBAC/auth systems, CI/CD pipelines, and Selenium/Playwright-driven automation that cut manual effort by 60-80% in production.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            For Clients &amp; Teams
          </p>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Services</h2>
          <p className="mb-12 max-w-2xl text-muted-foreground">
            What I can build for your team, product, or startup &mdash; drawn directly from
            systems I've already shipped to production.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
