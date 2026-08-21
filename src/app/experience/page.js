'use client';
import React from 'react';
import Image from 'next/image';
import { Spotlight } from '../../components/ui/Sportlight';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CodeIcon from '@mui/icons-material/Code';
import BusinessIcon from '@mui/icons-material/Business';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import GatechLogo from './gatech_logo.png';
import ContinentalLogo from './continental_logo.png';
import ReaaiLogo from './reaai_logo.png';

const experiences = [
  {
    company: "Design Intelligence Lab at GaTech",
    role: "Researcher",
    location: "Atlanta, GA",
    period: "2026 - Present",
    logo: GatechLogo,
    logoClassName: "scale-105",
    fallbackIcon: <WorkIcon fontSize="medium" />,
    highlights: [
      {
        title: "Jill Watson (AI Virtual Teaching Assistant)",
        description: "Enhanced conversational AI pipeline by improving RAG-based retrieval and response generation, incorporating agentic workflows for dynamic task handling, and deploying models as scalable services; increased answer relevance, reduced hallucinations, and improved robustness to unsafe or off-topic inputs."
      },
      {
        title: "HALT (Hallucination Detection)",
        description: "Developed a framework to detect hallucinations using token-level log-probability signals and semantic drift modeled as a time-series; improved real-time model performance through quantization, reducing latency while maintaining accuracy."
      },
      {
        title: "Multiple Platform Integration",
        description: "Supporting LTI-based deployment across LMS platforms (Canvas, Blackboard, EdStem), including model deployment, API orchestration, and AWS-based computation and data pipeline management."
      },
      {
        title: "MultiHop Question Answering (Agentic Workflow)",
        description: "Developing agentic QA pipelines for textbook problem solving, leveraging LangGraph/LangSmith to decompose complex university-level questions into guided structured solutions."
      },
      {
        title: "Integration at Scale",
        description: "Collaborating on the university-wide deployment of the Jill Watson AI, scaling server architectures to maintain real-time performance during demand spikes."
      }
    ],
    skills: ["RAG", "Agentic Workflows", "LangGraph", "LangSmith", "AWS", "Quantization", "LTI", "Python", "LLMs"]
  },
  {
    company: "REAAI",
    role: "Co-Founder / CTO",
    location: "San Jose, CA",
    period: "2024 - Present",
    logo: ReaaiLogo,
    logoClassName: "scale-105",
    fallbackIcon: <BusinessIcon fontSize="medium" />,
    highlights: [
      {
        title: "Machine Learning Model for Properties Recommendation",
        description: "Designing machine learning models to personalize property recommendations using user preferences, geolocation, and browsing history; currently achieving 85% internal satisfaction rate in testing with data from the MLSListing API."
      },
      {
        title: "Open House Trip Planner",
        description: "Developed a feature to assist users in planning weekend visits to multiple open houses by identifying relevant listings based on user profiles and calculating the optimal route, ensuring users save 90% of their time on trip planning."
      }
    ],
    skills: ["Machine Learning", "Recommendation Systems", "Route Optimization", "MLSListing API", "Python", "System Architecture"]
  },
  {
    company: "Fancy Car Auto Company",
    role: "Co-Owner / Data Scientist",
    location: "Columbus, OH",
    period: "2019 - 2024",
    fallbackIcon: <DirectionsCarIcon fontSize="medium" />,
    highlights: [
      {
        title: "Customer Segmentation & Analytics",
        description: "Analyzed internal customer data and applied clustering algorithms to segment customers by demographics, preferences, and behaviors. This resulted in a 25% increase in customer satisfaction by enabling the company to tailor its product offerings to each group's specific needs."
      },
      {
        title: "Customer Traffic Flow Prediction",
        description: "Built models using web, demographic, and weather data (>80% accuracy), increasing billable hours by 20% and enabling ~$2M annual revenue through optimized resource allocation."
      }
    ],
    skills: ["Clustering", "Predictive Modeling", "Customer Analytics", "Revenue Optimization", "Data Science", "Python"]
  },
  {
    company: "Continental AG",
    role: "Quality Engineer",
    location: "Marysville, OH",
    period: "2017 - 2019",
    logo: ContinentalLogo,
    logoClassName: "scale-[1.7] transform",
    fallbackIcon: <WorkIcon fontSize="medium" />,
    highlights: [
      {
        title: "Quality System Improvement",
        description: "Leveraged production history data and data analysis with SQL and Python (NumPy, Pandas, Matplotlib) to spot recurring quality failures, achieving the highest monthly quality targets for 8 consecutive months by identifying and addressing potential quality problems."
      },
      {
        title: "Data-Driven Quality Control",
        description: "Analyzed physical and chemical testing data from the production line using Excel to handle over 1,000 data points daily, ensuring products meet ISO and company standards."
      }
    ],
    skills: ["Python", "SQL", "Pandas", "Matplotlib", "Quality Control", "ISO Standards", "Excel"]
  }
];

const ExperiencePage = () => {
  return (
    <div className="min-h-screen w-full bg-black-100 bg-grid-white/[0.03] relative flex flex-col items-center justify-start overflow-hidden">
      {/* Spotlight Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Radial gradient mask for background grid */}
      <div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />

      {/* Main Experience Content Container */}
      <div className="relative z-10 w-full pt-32 sm:pt-40 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-center text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
            Work Experience
          </p>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            A breakdown of my professional roles, leadership, research, and engineering achievements in AI, Machine Learning, and Data Science.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative border border-white/10 dark:border-white/15 bg-black/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent group-hover:via-purple-500/80 transition-all duration-500" />

              {/* Role & Company Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  {exp.logo ? (
                    <div className="w-16 h-16 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 group-hover:ring-2 group-hover:ring-purple-500 transition-all overflow-hidden">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        className={`w-full h-full object-contain ${exp.logoClassName || ''}`}
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-purple-900/40 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {exp.fallbackIcon}
                    </div>
                  )}

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h2>
                    <span className="text-purple-400 font-semibold text-base sm:text-lg">
                      @ {exp.company}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-400 flex-wrap">
                  <div className="flex items-center gap-1 bg-neutral-900/80 px-3 py-1.5 rounded-full border border-white/10">
                    <LocationOnIcon className="text-purple-400" fontSize="small" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-neutral-900/80 px-3 py-1.5 rounded-full border border-white/10">
                    <CalendarTodayIcon className="text-purple-400" fontSize="small" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="mt-6 space-y-4">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 shrink-0 group-hover:scale-125 transition-transform" />
                    <div className="text-sm sm:text-base leading-relaxed text-neutral-300">
                      <strong className="text-white font-semibold">
                        {item.title}:
                      </strong>{" "}
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-neutral-400 flex items-center gap-1 mr-2">
                  <CodeIcon fontSize="small" className="text-purple-400" /> Technologies:
                </span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:border-purple-500/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;