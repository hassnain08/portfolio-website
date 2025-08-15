import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer - Thunder </h3>
            <h4 className="vertical-timeline-element-subtitle">Islamabad, Pakistan</h4>
            <p>
            Generative AI, LLM's, AI Agents, RAG, CrewAI, ChatBots, Qdrant, Git, Opik, Data Engineering, Json, CDD, Pipelines 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025 - Jan 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Engineer - Thunder </h3>
            <h4 className="vertical-timeline-element-subtitle">Islamabad, Pakistan</h4>
            <p>
            Machine Learning, TimeSeries, Postgres, Docker, Plotly, Pandas, Numpy
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2024 - August 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Infrastructure & Virtualization Engineer - Unique Systems</h3>
            <h4 className="vertical-timeline-element-subtitle">Islamabad, Pakistan</h4>
            <p>
            OS, VM's, VMware, Server Configuration 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2024 - August 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Software Engineer Intern - Heavy Mechanical Complex (HMC)</h3>
            <h4 className="vertical-timeline-element-subtitle">Taxila, Pakistan</h4>
            <p>
            Machine Learning, Java, Data Structure 
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;