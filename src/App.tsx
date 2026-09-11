import React, { useState, useEffect } from "react";
import {
  Main,
  Expertise,
  Services,
  Timeline,
  Project,
  Publications,
  Contact,
  Navigation,
  Footer,
} from "./components";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`main-container min-h-screen ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <Main />
      <Expertise />
      <Services />
      <Timeline />
      <Project />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
