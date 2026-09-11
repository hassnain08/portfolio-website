import React from "react";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const CV_PATH = `${process.env.PUBLIC_URL}/Syed-Hassnain-Abbas-CV.pdf`;

function Footer() {
  return (
    <footer className="border-t border-border py-12 text-center">
      <div className="mb-4 flex items-center justify-center gap-6 text-foreground/80">
        <a href="https://github.com/hassnain08" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary">
          <GithubIcon className="h-5 w-5" />
        </a>
        <a href="https://www.linkedin.com/in/syedhassnainabbas/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary">
          <LinkedinIcon className="h-5 w-5" />
        </a>
        <a href="mailto:shassnainabbas08@gmail.com" aria-label="Email" className="transition-colors hover:text-primary">
          <Mail className="h-5 w-5" />
        </a>
        <a href={CV_PATH} download aria-label="Download CV" className="transition-colors hover:text-primary">
          <Download className="h-5 w-5" />
        </a>
      </div>
      <p className="text-sm text-muted-foreground">
        Portfolio designed &amp; built by{" "}
        <a
          href="https://www.linkedin.com/in/syedhassnainabbas/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-foreground hover:text-primary"
        >
          Syed Hassnain Abbas.
        </a>
      </p>
    </footer>
  );
}

export default Footer;
