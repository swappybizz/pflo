import React, { useState } from 'react';

const Expertise = () => {
  const [hovered, setHovered] = useState(null);

  const skills = [
    {
      title: 'Full Stack Development',
      sections: [
        {
          heading: 'FrontEnd',
          items: ['Nextjs-TS/JS', 'Streamlit/Gradio', 'PyQt6/PySide/Tkinter', 'Tailwind/shadcn', 'Graphics and Animations'],
        },
        {
          heading: 'BackEnd',
          items: ['Flask/FastApi', 'Express/Socketio', 'Auth/Payments', 'Threads, Async', 'MongoDb,SQLite'],
        },
        {
          heading: 'DevOps',
          items: ['Docker', 'CI/CD: Git/Vercel', 'GCP/AWS', 'CLI/Shell scripting'],
        },
      ],
    },
    {
      title: 'Human-in-Loop AI/ML',
      sections: [
        {
          heading: 'Interaction Design',
          items: ['Expert-RAG Pipeline', 'Agentic Communication', 'Agent-Expert Networks', 'Tooling for Agentic netwroks', 'Behavior Analytics'],
        },
        {
          heading: 'Stakeholder Alignment',
          items: ['Happy Flows', 'NDA Analysis', 'Stakeholder Expectaions Mapping', 'Output Standarisations', 'Smart Documentaion Pipelines'],
        },
        {
          heading: 'Feedback Loops',
          items: ['Active Learning', 'Crowdsourcing', 'Data Validation', 'Human Oversight', 'Quality Control'],
        },
      ],
    },
    {
      title: 'AI/ML Productization',
      sections: [
        {
          heading: 'Modeling',
          items: ['TensorFlow/PyTorch', 'Hugging Face', 'Deep Reinforcent Learning', 'Data Sanetization', 'Sytematic Bias Removal'],
        },
        {
          heading: 'Pipeline',
          items: ['Innovative Usecasing', 'Local Pipelines on Edge', 'ML Backed Control Systems', 'Multi Modal MLM RAGs', 'Mobile App Integrations'],
        },
        {
          heading: 'Data',
          items: ['Pandas/Numpy', 'Data Pipelines', 'ETL/ELT', 'Apache Kafka', 'Data Versioning'],
        },
      ],
    },
    {
      title: 'Prototyping & MVP Dev',
      sections: [
        {
          heading: 'Rapid Prototyping',
          items: ['Figma', 'Procreate', 'InVision', 'Vectinator', 'Interactive Mockups'],
        },
        {
          heading: 'MVP Development',
          items: ['Nextjs', 'Flask:(React Compiled FE) ', 'MongoDB', 'Vercel', 'NASA:(SysEng BPs)'],
        },
        {
          heading: 'Testing',
          items: ['MVP DevOps', 'Dependency MGMT', 'UX BPs', 'A/B Testing', 'Functional Shcemas'],
        },
      ],
    },
    {
      title: 'System Design & Engineering',
      sections: [
        {
          heading: 'Architecture',
          items: [ 'Monolithic Systems', 'Event-Driven Design', 'CAD/CFD', 'Thread Lifecycle & BPs', 'On-Premise/Cloud'],
        },
        {
          heading: 'Scalability',
          items: ['Containers', 'Caching Strategies', 'OnDevice App cycle', 'Queueing Systems'],
        },
        {
          heading: 'Feature Engineering',
          items: ['OAuth2', 'JWT', 'Encryption', 'LLM Integrations', 'Compliance (GDPR/ISO)'],
        },
      ],
    },
    {
      title: 'Product Design',
      sections: [
        {
          heading: 'CAD/CAE/CFD',
          items: ['Fusion 360', 'Shapr3D', 'AutodeskCFD', 'Seimens NX', 'GSAP(WEB)'],
        },
        {
          heading: 'Simulation',
          items: ['Data Viz', 'Fluid Dynamics', 'Heat and Mass Transfer', 'Structural Analysis', 'Thermal Analysis'],
        },
        {
          heading: 'Visual Design Aesthecics',
          items: ['Color Theory', 'Typography', 'Branding', 'Aesthic Designs', 'Digital Design'],
        },
      ],
    },
  ];

  return (
    <>
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`p-4 w-full min-h-48 border-b-[1px] border-gray-500 border-opacity-50 flex items-center text-gray-300 transition-all duration-200 relative overflow-hidden hover:border-gray-300 hover:border-opacity-70 bg-black bg-opacity-70 `}
          onMouseEnter={() => setHovered(skill.title)}
          onMouseLeave={() => setHovered(null)}
        >
          <div
            className={`transition-transform duration-300 ease-in-out ${
              hovered === skill.title ? '-translate-x-1/2' : 'translate-x-0'
            }`}
          >
            <div className={`text-6xl cursor-help ${hovered === skill.title ? 'opacity-0' : 'opacity-100'}`}>
              {skill.title}
            </div>
          </div>
          <div
            className={`absolute right-0 top-0 h-full transition-transform duration-300 ease-in-out ${
              hovered === skill.title ? 'translate-x-0' : 'translate-x-full '
            }`}
            style={{ width: '100%' }}
          >
            <div className="flex justify-between w-full h-full pt-4 flex-1 text-left overflow-y-auto">
              {skill.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="flex-1 text-left mb-2 ">
                  <h3 className="font-bold text-base text-green-700 underline">{section.heading}</h3>
                  <ul>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-white md:text-base text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Expertise;
