import React from 'react';
import './work-experience.css';
import { BiBriefcase, BiCalendar, BiMap } from 'react-icons/bi';
import { FaRocket } from 'react-icons/fa';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      role: 'AI & Data Science Intern',
      company: 'Techorin Solution Pvt Ltd',
      location: 'Sri Lanka',
      date: 'June 2025 - Dec 2025',
      highlights: [
        {
          title: 'AI & LLM Solutions',
          desc: 'Engineered RAG-powered systems (Kamro AI) for multimodal document Q&A and intelligent information retrieval.'
        },
        {
          title: 'Workflow Automation',
          desc: 'Designed a seamless HR pipeline using n8n to extract, process, and rank candidate CVs from emails.'
        },
        {
          title: 'Full-Stack Development',
          desc: 'Built the Payment Schedule Management module for the enterprise CPD Property Management System.'
        }
      ]
    },
    {
      id: 2,
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      date: 'Jun 2023 - Present',
      highlights: [
        {
          title: 'Client Projects',
          desc: 'Designed and built custom portfolios and websites for local businesses using the MERN stack.'
        }
      ]
    }
  ];

  return (
    <section id="work-experience">
      <h5>My Professional Journey</h5>
      <h2>Work Experience</h2>

      <div className="container work__timeline">
        {/* The vertical line */}
        <div className="timeline__line" />

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
          >
            {/* Center dot */}
            <div className="timeline__dot">
              <BiBriefcase />
            </div>

            {/* Card */}
            <div className="timeline__card glass">
              {/* Gradient accent bar */}
              <div className="timeline__card-accent" />

              <div className="timeline__card-header">
                <h3 className="timeline__role">{exp.role}</h3>
                <h4 className="timeline__company">{exp.company}</h4>
                <div className="timeline__meta">
                  <span className="timeline__meta-item">
                    <BiCalendar />
                    {exp.date}
                  </span>
                  <span className="timeline__meta-item">
                    <BiMap />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="timeline__highlights">
                {exp.highlights.map((item, i) => (
                  <div key={i} className="timeline__highlight">
                    <div className="timeline__highlight-icon">
                      <FaRocket />
                    </div>
                    <div className="timeline__highlight-content">
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
