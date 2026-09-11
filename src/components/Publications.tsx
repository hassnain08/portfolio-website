import React from "react";
import { FileText } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Reveal from "./Reveal";

interface Publication {
  title: string;
  venue: string;
  authors: React.ReactNode;
  status: string;
}

const publications: Publication[] = [
  {
    title:
      "Evaluating Feature Extraction Robustness for Morphologically Complex Scripts under Extreme Data Scarcity: A Study on Dot-Dependent Character Recognition",
    venue: "ICET 2026 — 21st International Conference on Emerging Technologies",
    authors: (
      <>Muhammad Saood Sarwar, Shahzaib Ur Rehman, <strong className="text-foreground">Syed Hassnain Abbas</strong> (3rd author)</>
    ),
    status: "Submitted 2026",
  },
  {
    title: "Beyond the Horizon: High Precision Aerial Object Classification using YOLO11 Architecture",
    venue: "MCETS 2026 — Mediterranean Conference on Emerging Technologies and Systems",
    authors: (
      <>Muhammad Saood Sarwar, <strong className="text-foreground">Syed Hassnain Abbas</strong> (2nd author)</>
    ),
    status: "Submitted 2026",
  },
  {
    title:
      "Explainable AI for Synthetic Scene Detection: Morphological Artifact Analysis and Forensic Decay Testing Across 192 Categories",
    venue: "MCETS 2026 — Mediterranean Conference on Emerging Technologies and Systems",
    authors: (
      <>Muhammad Saood Sarwar, <strong className="text-foreground">Syed Hassnain Abbas</strong> (2nd author), Syed Muhammad Ali Musa</>
    ),
    status: "Submitted 2026",
  },
];

function Publications() {
  return (
    <section id="publications" className="py-20 md:py-28">
      <div className="container mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Research
          </p>
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">Publications</h2>
        </Reveal>

        <div className="flex flex-col gap-5">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 0.05}>
              <Card className="transition-transform duration-300 hover:-translate-y-0.5">
                <CardContent className="flex gap-4 p-6">
                  <FileText className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <Badge>{pub.venue}</Badge>
                      <Badge variant="outline">{pub.status}</Badge>
                    </div>
                    <h3 className="mb-1 text-base font-bold leading-snug">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground">{pub.authors}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;
