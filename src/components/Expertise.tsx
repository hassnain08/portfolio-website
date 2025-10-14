import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Machine Learning",
    "Data Engineering",
    "Generative AI",
    "Data Visualization"
];

const labelsSecond = [
    "Langchain",
    "CrewAI",
    "MCP",
    "Time Series",
    "Pipelines",
    "RAG",
    "Numpy",
    "Pandas",
    "Selenium",
    "Plotly",
    "Opik",
    "PowerBI",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "HuggingFace",
    "BeautifulSoup",
    "Linux",
];

const labelsThird = [
    "C++",
    "Python",
    "JavaScript",
    "Java",
    "SQL",
];

const labelsFourth = [
    "FastAPI",
    "Flask",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "Firebase",
    "Docker",
    "Git",
    "GitHub",
    "Qdrant",
    "Pinecone",
];

const labelsFifth = [
    "Streamlit",
    "HTML",
    "CSS",
    "JavaScript"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Expertise</h3>
                    <p></p>
                    <div className="flex-chips">
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <h3>Frameworks</h3>
                    <p></p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <h3>GenAI & LLM</h3>
                    <p></p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <h3>Backend</h3>
                    <p></p>
                    <div className="flex-chips">
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <h3>Frontend</h3>
                    <p></p>
                    <div className="flex-chips">
                        {labelsFifth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;