import React from "react";
import thunder1 from '../assets/images/thunder1.png';
import streaming from '../assets/images/image.png';
import pdf from '../assets/images/pdf.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/hassnain08/Thunder-Telecom-Monitoring-System" target="_blank" rel="noreferrer"><img src={thunder1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/hassnain08/Thunder-Telecom-Monitoring-System" target="_blank" rel="noreferrer"><h2>Thunder - AI Energy Analytic Platform</h2></a>
                <p>Dashboard transforms raw IoT sensor data from telecom towers into actionable insights to help manage energy usage efficiently across sites.</p>
            </div>

            <div className="project">
                <a href="https://github.com/hassnain08/Vision-AI" target="_blank" rel="noreferrer"><img src={streaming} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/hassnain08/Vision-AI" target="_blank" rel="noreferrer"><h2>Vision AI - Real Time LLM Streaming</h2></a>
                <p>AI-powered screen analysis assistant that processes images, understands voice prompts, and responds in real time with both text and speech.</p>
            </div>

            <div className="project">
                <a href="https://github.com/hassnain08/pdf-analyzer" target="_blank" rel="noreferrer"><img src={pdf} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/hassnain08/pdf-analyzer" target="_blank" rel="noreferrer"><h2>Vision AI - Real Time LLM Streaming</h2></a>
                <p>AI-powered screen analysis assistant that processes images, understands voice prompts, and responds in real time with both text and speech.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;