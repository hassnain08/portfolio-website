import React from "react";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { buttonVariants } from "./ui/button";
import { cn } from "lib/utils";
import Reveal from "./Reveal";
import me1 from "../assets/images/me.jpg";

const CV_PATH = `${process.env.PUBLIC_URL}/Syed-Hassnain-Abbas-CV.pdf`;

function Main() {
  return (
    <div
      id="home"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-primary/30 to-accent/10 blur-3xl"
      />

      <div className="container relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 md:flex-row md:gap-16">
        <Reveal className="flex-1 text-center md:text-left">
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Software Engineer &middot; AI &amp; Data Systems
          </p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Syed Hassnain Abbas
          </h1>
          <p className="mt-3 text-lg font-semibold text-foreground/90 md:text-xl">
            Software Engineer @ Thunder Energy Intelligence Platform &middot; Co-founder @ TACSIGHT
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:mx-0">
            Final-year Software Engineering student with 1.5+ years shipping production-grade
            AI systems, real-time data pipelines, and agentic automation platforms &mdash; from
            architecture to deployment.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href={CV_PATH}
              download
              className={cn(buttonVariants({ size: "lg" }))}
            >
              <Download className="h-5 w-5" />
              Download CV
            </a>
            <a href="#projects" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
              View Projects
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5 md:justify-start">
            <a
              href="https://github.com/hassnain08"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-foreground/80 transition-colors hover:text-primary"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/syedhassnainabbas/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/80 transition-colors hover:text-primary"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a
              href="mailto:shassnainabbas08@gmail.com"
              aria-label="Email"
              className="text-foreground/80 transition-colors hover:text-primary"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="shrink-0">
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl border-2 border-primary/60 shadow-[0_0_40px_-8px] shadow-primary/40 sm:h-72 sm:w-72 md:h-80 md:w-80">
            <img src={me1} alt="Syed Hassnain Abbas" className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Main;
