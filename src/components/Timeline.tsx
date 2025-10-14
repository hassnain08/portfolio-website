import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

// Define your full descriptions here (from GitHub profile and job details)
const jobDescriptions = {
  aiEngineer: `Gained hands-on experience in Generative AI tools, including AI Agents, RAG
Chatbots, and MCP and Engineered AI Agentic Systems reducing manual analysis
time by 70%.
06/2025 – present
•Expanded data engineering workflows by building scalable ETL pipelines that
processed 80k+ daily IoT/energy records with automated validation and
transformation.
•Project1: Thunder Agentic Documentation – Designed an autonomous AI agentic
system to generate, analyze, and execute Selenium scripts for complex graphical
data, summarizing insights and producing comprehensive technical
documentation as well as for testing UI dashboards,reducing manual UI testing
and documentation effort by 70–80%.
•Project 2: Poller Service – Developed a centralized poller capable of handling high-volume endpoints like Huawei & Growatt, streamlining data ingestion into
Thunder’s database and ensuring 100% data accuracy through sanity checks.`,

  mlEngineer: `Software solution for Telenor facing challenges in managing their extensive tower
infrastructure, including tower monitoring, predictive analysis and performance
issues.
Outcome:
•Built time-series forecasting models (ARIMA, SARIMA, Prophet, LSTM) to
predict load-shedding hours with 85% accuracy, supporting energy optimization
across 200+ Telenor sites.
•Project Completion of an Thunder AI web application that consolidates all aspects,
including analysis of batteries, power sources, tower monitoring and
predictions, under the guidance of the CTO and the team.
•Created interactive dashboards, enabling non-technical stakeholders to visualize
predictions.
•Participated in Scrum Meetings to ensure timely delivery of tasks and effective
communication.`,

  infrastructureEngineer: `•Built a physical server from scratch by assembling hardware components and
configuring it for use.
06/2024 – 08/2024
Islamabad, Pakistan
•Installed and configured VMware ESXi OS, then created and managed Virtual
Machines (VMs) using vCenter.
•Deployed the server in a production-like environment, connecting it with other
hosts and ensuring stable operation.
•Improved deployment cycles by 15% through optimized server setup, uptime
monitoring, and networking configuration.`,

  juniorIntern: `•Developed a Spotify Clone in Java, implementing playlist management & playback
features for 100+ songs using Java Swing GUI.
06/2024 – 08/2024
Taxila, Pakistan
•Applied advanced data structures (Linked Lists, Stacks, Queues, Trees) to optimize
performance.
•Trained an ML model on 1,000+ housing records to predict prices, improving
prediction accuracy via feature engineering.`
};

// Define the type for the ExpandableDescription props
type ExpandableDescriptionProps = {
  text: string;
};

// Reusable Hover-Expand Description Component
const ExpandableDescription: React.FC<ExpandableDescriptionProps> = ({ text }) => {
  return (
    <div
      className="expandable-card"
      style={{
        padding: '0.75rem 1rem',
        fontSize: '0.95rem',
        lineHeight: '1.6',
        color: '#333',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        border: '1px solid #ddd',
        marginBottom: '0.5rem',
        maxHeight: '60px', // Default height (shows ~2 lines)
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, background-color 0.3s ease',
        cursor: 'pointer',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.maxHeight = 'none'; // Expand to full height
        e.currentTarget.style.backgroundColor = '#fff'; // Optional: change background on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.maxHeight = '60px'; // Collapse back
        e.currentTarget.style.backgroundColor = '#f9f9f9'; // Reset background
      }}
    >
      {text}
    </div>
  );
};

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="June 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer - Thunder</h3>
            <h4 className="vertical-timeline-element-subtitle">Islamabad, Pakistan</h4>

            <ExpandableDescription text={jobDescriptions.aiEngineer} />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025 - Jan 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Engineer - Thunder</h3>
            <h4 className="vertical-timeline-element-subtitle">Islamabad, Pakistan</h4>

            <ExpandableDescription text={jobDescriptions.mlEngineer} />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2024 - August 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Infrastructure & Virtualization Engineer - Unique Systems</h3>
            <h4 className="vertical-timeline-element-subtitle">Islamabad, Pakistan</h4>

            <ExpandableDescription text={jobDescriptions.infrastructureEngineer} />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2024 - August 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Software Engineer Intern - Heavy Mechanical Complex (HMC)</h3>
            <h4 className="vertical-timeline-element-subtitle">Taxila, Pakistan</h4>

            <ExpandableDescription text={jobDescriptions.juniorIntern} />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;