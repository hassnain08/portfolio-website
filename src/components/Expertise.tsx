import React from "react";
import { Cpu, Database, Factory, Layers, LineChart, Wrench, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Reveal from "./Reveal";

const categories = [
  {
    icon: Cpu,
    title: "AI & ML",
    skills: [
      "AI Agents", "RAG Systems", "LLM Observability (Opik)", "Time Series (ARIMA, SARIMA, Prophet, LSTM)",
      "CNN", "SVM", "SLM", "VLM", "MCP", "LightRAG", "Voice Cloning (TTS)",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: [
      "ETL Pipelines", "Kafka", "Poller Services", "PostgreSQL", "BigQuery", "asyncpg", "Pandas", "NumPy", "pytest",
    ],
  },
  {
    icon: Factory,
    title: "Domain Expertise",
    skills: [
      "Solar/PV Forecasting (PVsyst)", "Load-Shedding Analytics", "Solar Curtailment & DG Policy Modeling", "Telecom Energy Infrastructure",
    ],
  },
  {
    icon: Layers,
    title: "Frameworks & Tools",
    skills: [
      "CrewAI", "LangChain", "LangGraph", "Qdrant", "FastAPI", "Gemini", "Groq", "Selenium", "Playwright", "ThreeJS", "Docker", "Kubernetes", "Odoo",
    ],
  },
  {
    icon: LineChart,
    title: "Visualization",
    skills: ["Plotly", "Power BI", "Seaborn", "Matplotlib"],
  },
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "Java", "C++", "C", "JavaScript"],
  },
  {
    icon: Wrench,
    title: "Other",
    skills: ["VMware ESXi", "vCenter", "Git"],
  },
];

function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Skills
          </p>
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">Expertise</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.05}>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader className="flex-row items-center gap-3 space-y-0">
                  <cat.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
