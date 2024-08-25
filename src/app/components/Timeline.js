import React, { useEffect, useState } from 'react';

const Timeline = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeMilestone, setActiveMilestone] = useState(null);
  const [hoveredEntity, setHoveredEntity] = useState(null);
  // const [images, setImages] = useState([]);
  const [clickedEntityIndex, setClickedEntityIndex] = useState(null); // New state for clicked div
  const [currentImageIndex, setCurrentImageIndex] = useState({}); // New state for image index

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Determine the active milestone based on scroll position
    if (scrollPosition < window.innerHeight * 0.3) {
      setActiveMilestone('August 2024');
    } else if (scrollPosition < window.innerHeight * 0.5) {
      setActiveMilestone('March 2024');
    } else if (scrollPosition < window.innerHeight * 0.7) {
      setActiveMilestone('October 2023');
    } else if (scrollPosition < window.innerHeight * 0.9) {
      setActiveMilestone('May 2023');
    } else {
      setActiveMilestone('December 2022');
    }
  }, [scrollPosition]);


  const milestonesContent = {
    // All of them have 5 pics each
    'August 2024': [
      {
        name: 'ExpertLine',
        details: {
          des: 'HR and other Office Expertise Distributed by AI, backed by human.',
          tags: ['Human-In-The-Loop', 'AI', 'LLMOps', 'MVP', 'Python', 'fullstack'],
          MyRole: ['Streamlit Platform Development', 'Authentication', 'Database Design', 'CI/CD Pipeline using GitHub and Render.com', 'PM: Rapid Prototyping and MVP Development'],
          delivery: 'MVP delivered @August 2024',
          status: 'Beta-Live',
          
          pics: ['/assets/expertline_1.svg', '/assets/expertline_2.webp', '/assets/expertline_3.webp', '/assets/expertline_4.webp', '/assets/expertline_5.webp']
        }
      },
      {
        name: 'Assistit - 🌟Featured in Innovajonmagsinet',
        details: {
          des: 'Prototype of the World\'s first No-code GenAiAgent Swarm Framework.',
          tags: ['OnDevice AI', 'Stunning UI', 'MultiThreading', 'Turing Complete No-code*', 'FOIK', 'Socket.io'],
          MyRole: ['Frontend Development', 'Backend Integration', 'Database Design', 'MVP', 'Development Cost Cutting', 'Branding'],
          delivery: 'MVP delivered @July 2024',
          status: 'Prototype Testing in Progress',
          pics: ['/assets/assistit_1.webp', '/assets/assistit_2.webp', '/assets/assistit_3.webp', '/assets/assistit_4.webp', '/assets/assistit_5.webp']
        }
      }
    ],
    'March 2024': [
      {
        name: 'KobleKop',
        details: {
          des: 'Instant Interviews and Interview Practice on the go. Get interviews, Get Hired.',
          tags: ['Job Interviews', 'AI Matching', 'Interview Practice', 'Mobile App'],
          MyRole: ['App Development', 'Interview Matching Algorithm', 'UX/UI Design', 'Backend Integration'],
          delivery: 'Prototype delivered @March 2024',
          status: 'Live',
          pics : ['/assets/koblekop_1.webp', '/assets/koblekop_2.webp', '/assets/koblekop_3.webp', '/assets/koblekop_4.webp', '/assets/koblekop_5.webp']
        }
      },
      {
        name: 'Clerky',
        details: {
          des: 'Compliance Storage and Auto form filling using voice and images for blue-collar professionals.',
          tags: ['Compliance', 'Voice Recognition', 'Image Processing', 'ISO 9001', 'Automation'],
          MyRole: ['Voice Recognition Integration', 'Form Automation', 'Data Storage Design', 'API Development'],
          delivery: 'MVP delivered @March 2024',
          status: 'Open Source - Live',
          pics: ['/assets/clerky_1.webp', '/assets/clerky_2.webp', '/assets/clerky_3.webp', '/assets/clerky_4.webp', '/assets/clerky_5.webp']  
        }
      },
      {
        name: 'ResumTee',
        details: {
          des: 'Make a brand new stylized keyword-populated resume for every job you apply for with just one click.',
          tags: ['Resume Builder', 'PDF Generation', 'Automation', 'Job Applications', 'Personalization'],
          MyRole: ['Frontend Development', 'AI Integration', 'Keyword Optimization', 'User Testing'],
          delivery: 'Beta released @March 2024',
          status: 'Beta Testing',
          pics: ['/assets/resumtee_1.svg', '/assets/resumtee_2.webp', '/assets/resumtee_3.webp', '/assets/resumtee_4.webp', '/assets/resumtee_5.webp']
        }
      }
    ],
    'October 2023': [
      {
        name: 'IsoEnsure',
        details: {
          des: 'Use GenAI locally to assist in ISO 9001 compliance documentation (that never leaves your PC) maintenance.',
          tags: ['GenAI', 'ISO 9001', 'Compliance', 'RAG','Tokenisation', 'PyQt6', 'SQLLite'],
          MyRole: ['GenAI Integration', 'Security Protocol Design', 'Compliance Automation', 'User Privacy'],
          delivery: 'MVP delivered @October 2023',
          status: 'In Production',
          pics: ['/assets/isoensure_1.webp', '/assets/isoensure_2.webp', '/assets/isoensure_3.webp', '/assets/isoensure_4.webp', '/assets/isoensure_5.webp']
        }
      }
    ],
    'May 2023': [
      {
        name: 'NoOffice',
        details: {
          des: 'Beautiful Home Website for NoOffice.no.',
          tags: ['Website Development', 'Branding', 'SquareSpace', 'SEO', 'UI/UX'],
          MyRole: ['Web Design', 'Branding Strategy', 'SEO Optimization', 'Content Management System (CMS) Setup','Graphics'],
          delivery: 'Website launched @May 2023',
          status: 'Live',
          pics: ['/assets/nooffice_1.png', '/assets/nooffice_2.webp', '/assets/nooffice_3.webp', '/assets/nooffice_4.webp', '/assets/nooffice_5.webp']
        }
      },
      {
        name: 'Sunnmøretak',
        details: {
          des: 'Digital businesscad for Sunnmøretak.no.',
          tags: ['React', 'TailwindCSS', 'SEO', 'Responsive Design', 'Rapid Prototyping'],
          MyRole: ['Build in a day', 'SEO Optimization', 'Responsive Design', 'Content Strategy'],
          delivery: 'Platform launched @May 2023',
          status: 'In Production',
          pics: ['/assets/smtak_1.webp', '/assets/smtak_2.webp', '/assets/smtak_3.webp', '/assets/smtak_4.webp', '/assets/smtak_5.webp']
        }
      }
    ],
    'December 2022': [
      {
        name: 'Admit Website',
        details: {
          des: 'Home Website and CMS for Admit.no.',
          tags: ['Web Development', 'CMS', 'SEO', 'Responsive Design', 'Content Strategy'],
          MyRole: ['Website Development', 'CMS Implementation', 'SEO Optimization', 'Responsive Design'],
          delivery: 'Website launched @December 2022',
          status: 'Archived',
          pics: ['/assets/admit_1.webp', '/assets/admit_2.webp', '/assets/admit_3.webp', '/assets/admit_4.webp', '/assets/admit_5.webp']

        }
      },
      {
        name: 'ISO Admit - 🌟1000 Users in a Week ',
        details: {
          des: 'Idea Validation of GENAI Assisted Document Generation',
          tags: ['Idea Validation', 'GENAI', 'ISO 9001', 'Compliance', 'RAG'],
          MyRole: ['Nextjs Platform Development', 'User Testing', 'Idea Validation', 'User Feedback'],
          delivery: 'Successful Idea Validation in 1 week after the server overloaded :) @December 2022',
          status: 'Archieved',
          pics: ['/assets/isoadmit_1.webp', '/assets/isoadmit_2.webp', '/assets/isoadmit_3.webp', '/assets/isoadmit_4.webp', '/assets/isoadmit_5.webp']
        }
      }
    ]
  };
  

  const milestones = [
    { top: '10%', date: 'August 2024' },
    { top: '30%', date: 'March 2024' },
    { top: '50%', date: 'October 2023' },
    { top: '70%', date: 'May 2023' },
    { top: '90%', date: 'December 2022' },
  ];

  const handleImageClick = (i) => {
    setClickedEntityIndex(i);
    setCurrentImageIndex((prevIndexes) => {
      const nextIndex = (prevIndexes[i] || 0) + 1;
      return { ...prevIndexes, [i]: nextIndex % milestonesContent[activeMilestone][i].details.pics.length };
    });
  };


  const renderContent = () => (
    <div className="flex  gap-4">
      {milestonesContent[activeMilestone]?.map((Entity, i) => (
        <div
          key={i}
          className="border border-gray-500 mt-2 cursor-pointer md:w-[20vw] rounded h-[42vh]  border-opacity-40 transition-all duration-300 ease-in-out hover:w-[75vw] "
          style={{
            backgroundImage: `url(${Entity.details.pics[currentImageIndex[i] || 0]})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            filter: 'grayscale(0%)',
            backgroundRepeat: 'no-repeat',
          }}
          onMouseEnter={(e) => {
            setHoveredEntity(Entity);
            e.currentTarget.style.filter = 'grayscale(0%)';
          }}
          onMouseLeave={(e) => {
            setHoveredEntity(null);
            e.currentTarget.style.filter = 'grayscale(0%)';
          }}
          onClick={() => handleImageClick(i)}
        >
          <div className="p-4 text-center text-white shadow-sm bg-gradient-to-b from-black to-transparent  bg-opacity-45">{Entity.name}</div>
          <button
          title='View Details'
          className='absolute top-0 right-0 bg-black bg-opacity-90 backdrop:blur-md text-white p-2 rounded-bl rounded-tr'
          >↗</button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="h-[200vh] w-full bg-black text-white relative">
      <button
      className='fixed bottom-6 left-5 md:w-1/4  border mx-2 p-2 rounded-xl border-gray-400 border-opacity-50 bg-black bg-opacity-50 text-gray-200'
      >
        Find something Intresting?
        There are several others just like these just 
        📧 : swapnil@nooffice.no

        <a href='mailto:swapnil@nooffice.no' className='text-white hover:text-black'>
          
        </a>
        
        

      </button>
      <div
      className='fixed text-sm bottom-36 left-5 md:w-1/4  border mx-2 p-2 rounded-xl border-gray-400 border-opacity-50 bg-black bg-opacity-50 text-gray-100'
      >
        <h1
        classname= 'w-full text-xs text-center text-gray-400 ' 
        >Academia:</h1>
        <h1
        classname= 'w-full text-center ' 
        >MSc: Product and Sytems Design, NTNU</h1>
        <h1
        classname= 'w-full text-center ' 
        >Specialisation: DRL Control Sytems</h1>
        <h1
        classname= 'w-full text-center' 
        >
          Publications:
          <a
          className='text-green-500 cursor-pointer'
          href='https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/2825134?locale-attribute=no'
          >
            DRL Based Control of Marine Hybrid Power
          </a>
        </h1>


        

        

      </div>
      <div className="timelinediv rotate-90 md:rotate-0 fixed flex items-center justify-center flex-col md:top-[15%] -top-24 md:left-12 left-1/2 h-1/2 w-1/4 z-50 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black via-transparent to-black z-[1000]"></div>
        {/* Timeline line */}
        <div className="relative h-full w-[2px] z-20">
          <div
            className="absolute top-0 left-0 h-[300%] w-full bg-gray-100"
            style={{ transform: `translateY(-${scrollPosition}px)` }}
          >
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="absolute left-[-6px] flex items-start flex-col w-full"
                style={{
                  top: milestone.top,
                  transition: 'transform 0.2s',
                }}
              >
                <div className="w-6 h-[0.1rem] bg-black border rounded-full"></div>
                <div className="ml-4 md:text-xl text-base">{milestone.date}</div>
                <div className="ml-4 text-gray-200  md:text-sm text-xs md:w-32 opacity-50">Lead Dev @Nooffice.no</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content that changes based on the visible milestone */}
      <div className="fixed md:right-12 md:top-[10%] md:w-1/2 top-[25%]">
        {renderContent()}
      </div>
      {/* Hovered Entity details */}
      {hoveredEntity && (
        <div className="fixed bottom-2 overflow-y-auto md:right-12 md:w-1/2 md:max-h-[50%] max-h-[30%] w-full overflow-hidden bg-black border border-slate-700 border-opacity-50 p-4 rounded shadow-lg">
  <div className="grid grid-cols-2 gap-4 h-full">
    {/* Left Column */}
    <div className="flex flex-col justify-between">
      {/* Project Name */}
      <div>
        <h3 className="text-xl font-bold">{hoveredEntity.name}</h3>
      </div>

      {/* Tags */}
      <div>

        <div className="flex flex-wrap text-sm gap-2 mt-2">
          {/*<span className="bg-black border border-slate-500 border-opacity-50 text-green-600 px-2 py-1 rounded">React</span> */}
          {hoveredEntity.details.tags.map((tag, i) => (
            <span key={i} className="bg-black border border-slate-500 border-opacity-50 text-green-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}

        </div>
      </div>

      {/* My Role */}
      <div>
        <h4 className="text-lg font-semibold text-gray-400 pt-2">My Role:</h4>
        <ul className="list-disc list-inside mt-1 space-y-1">
          {/* <li>Frontend Development</li> */}


          {hoveredEntity.details.MyRole.map((role, i) => (
            <li key={i}>{role}</li>
          ))}

        </ul>
      </div>
    </div>

    {/* Right Column */}
    <div className="flex flex-col justify-between border-l-2 pl-6 border-gray-600 border-opacity-50">
      {/* Project Requirements */}
      <div>
        <h4 className="text-lg font-semibold text-gray-400">  My 2 bits about this project:</h4>
        <p className="mt-2 text-sm">{hoveredEntity.details.des}</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-400">Delivery</h4>
        <p className="mt-2 text-sm">{hoveredEntity.details.delivery}</p>
      </div>

      {/* Current Status */}
      <div>
        <h4 className="text-lg font-semibold text-gray-400">Current Status:</h4>
        <p className="mt-2 text-sm">{hoveredEntity.details.status}</p>
      </div>
    </div>

  </div>
</div>
      )}
    </div>
  );
};

export default Timeline;