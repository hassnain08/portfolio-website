import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "lib/utils";

const navItems: [string, string][] = [
  ["Expertise", "expertise"],
  ["Services", "services"],
  ["History", "history"],
  ["Projects", "projects"],
  ["Publications", "publications"],
  ["Contact", "contact"],
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    setMobileOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      id="navigation"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 shadow-md shadow-black/5 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollToSection("home")}
          className="font-mono text-sm font-bold tracking-widest text-primary"
        >
          SHA
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {label}
            </button>
          ))}
          <button
            onClick={modeChange}
            aria-label="Toggle color mode"
            className="ml-2 rounded-md p-2 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
          >
            {mode === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={modeChange}
            aria-label="Toggle color mode"
            className="rounded-md p-2 text-foreground/80"
          >
            {mode === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-md p-2 text-foreground/80"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col px-6 py-2">
              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="border-b border-border/60 py-3 text-left text-sm font-medium text-foreground/80 last:border-none"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navigation;
