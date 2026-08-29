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
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DevicesIcon from '@mui/icons-material/Devices';

// SVG Brand Badges
const TikTokIcon = () => (
  <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.9 2.9 0 0 1-2.9-2.88 2.9 2.9 0 0 1 2.9-2.89c.39 0 .76.08 1.1.22V9.16a6.34 6.34 0 0 0-1.1-.1 6.34 6.34 0 0 0-6.35 6.34 6.34 6.34 0 0 0 6.35 6.35 6.34 6.34 0 0 0 6.34-6.35V8.71a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
  </svg>
);

const WalmartIcon = () => (
  <svg className="w-8 h-8 fill-current text-yellow-400" viewBox="0 0 24 24">
    <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5V7a1.5 1.5 0 0 1-3 0V3.5A1.5 1.5 0 0 1 12 2zm0 15a1.5 1.5 0 0 1 1.5 1.5V22a1.5 1.5 0 0 1-3 0v-3.5A1.5 1.5 0 0 1 12 17zm7.794-9.206a1.5 1.5 0 0 1 .439 2.071l-2.5 4.33a1.5 1.5 0 1 1-2.598-1.5l2.5-4.33a1.5 1.5 0 0 1 2.159-.571zM6.866 14.866a1.5 1.5 0 0 1 .439 2.071l-2.5 4.33a1.5 1.5 0 0 1-2.598-1.5l2.5-4.33a1.5 1.5 0 0 1 2.159-.571zm12.353 5.428a1.5 1.5 0 0 1-2.071.439l-4.33-2.5a1.5 1.5 0 1 1 1.5-2.598l4.33 2.5a1.5 1.5 0 0 1 .571 2.159zM4.781 7.206a1.5 1.5 0 0 1-2.071.439l-4.33-2.5A1.5 1.5 0 0 1-.12 2.547l4.33 2.5a1.5 1.5 0 0 1 .571 2.159z" />
  </svg>
);

const experiences = [
  {
    company: "TikTok",
    role: "Product Manager, People Technology & HR Strategy",
    subRoles: [
      { title: "HR Policy and Strategy", period: "Nov 2025 - Present" },
      { title: "Product Manager, People Technology", period: "Aug 2022 - Present" }
    ],
    location: "San Jose, California, United States",
    period: "Aug 2022 - Present · 4 yrs 1 mo",
    badgeBg: "bg-gradient-to-tr from-[#00f2fe]/20 to-[#4facfe]/20 border-cyan-500/40 text-cyan-300",
    fallbackIcon: <TikTokIcon />,
    highlights: [
      {
        title: "People Technology Product Management",
        description: "Direct end-to-end product strategy, feature roadmap, and technical execution for enterprise People Technology systems, delivering resilient, scalable digital solutions for thousands of global employees."
      },
      {
        title: "HR Policy & Strategy",
        description: "Spearhead global HR policy frameworks, workforce governance models, and strategic initiatives to streamline cross-functional workflows and align enterprise operations across global teams."
      },
      {
        title: "Data-Driven Decision Making & Automation",
        description: "Leverage advanced workforce analytics, usage metrics, and employee sentiment signals to optimize system adoption, eliminate operational bottlenecks, and drive continuous process automation."
      },
      {
        title: "Cross-Functional Leadership",
        description: "Collaborate closely with engineering, UX design, legal, HR business partners, and executive leadership to translate complex organizational needs into high-impact software products."
      }
    ],
    skills: ["Product Management", "People Technology", "HR Policy & Strategy", "Business Strategy", "Data-Driven Decision Making", "Cross-Functional Leadership", "Enterprise HRIS", "Workflow Automation"]
  },
  {
    company: "Start-up Auto Business",
    role: "Entrepreneur & Shop Manager",
    location: "Columbus, Ohio Metropolitan Area",
    period: "Jun 2020 - Aug 2022 · 2 yrs 3 mos",
    badgeBg: "bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300",
    fallbackIcon: <DirectionsCarIcon fontSize="medium" className="text-amber-400" />,
    highlights: [
      {
        title: "Online Platform Design & Analytics (0 to 1)",
        description: "Designed, built, and maintained the company website, Google Business, Yelp Business, Facebook presence, and Google Analytics tracking from scratch; attracted 1.5x customer volume beyond local resources and doubled monthly revenue in 3 months."
      },
      {
        title: "Business Operations & Visitor Dashboards",
        description: "Architected executive dashboards in Excel and Google Analytics to track monthly and yearly revenue, operating expenses, customer visit frequency, parts inventory, and technician labor efficiency; actively troubleshot operational bottlenecks with the repair manager."
      },
      {
        title: "Growth & Profitability",
        description: "Formulated end-to-end business strategy, pricing models, and digital marketing funnels that established a sustainable local market brand with high repeat customer loyalty."
      }
    ],
    skills: ["Business Strategy", "Product Marketing", "Google Analytics", "Operations Management", "Revenue Optimization", "P&L Management", "Customer Retention", "Executive Dashboards"]
  },
  {
    company: "William & Mary (Mason School of Business)",
    role: "Business Analytics Teaching Assistant",
    location: "Williamsburg, Virginia",
    period: "Jul 2019 - Jun 2020 · 1 yr",
    badgeBg: "bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-300",
    fallbackIcon: <SchoolIcon fontSize="medium" className="text-emerald-400" />,
    highlights: [
      {
        title: "Graduate Business Analytics Course Support",
        description: "Supported graduate instruction across core MSBA curriculum: Machine Learning, Database Management, Optimization, Big Data, Artificial Intelligence, Data Visualization, Heuristic Algorithms, and Statistics for Management."
      },
      {
        title: "Technical Coaching & Lab Mentorship",
        description: "Coached graduate students through hands-on data modeling, algorithmic problem solving, relational database querying, and data visualization architectures."
      }
    ],
    skills: ["Machine Learning", "Database Management", "Optimization", "Big Data", "Artificial Intelligence", "Data Visualization", "Heuristic Algorithms", "Statistics for Management", "Python", "SQL"]
  },
  {
    company: "Walmart",
    role: "Data and Information System Specialist",
    location: "Shenzhen, Guangdong, China",
    period: "Jul 2017 - Jul 2018 · 1 yr 1 mo",
    badgeBg: "bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 border-blue-500/40 text-blue-300",
    fallbackIcon: <WalmartIcon />,
    highlights: [
      {
        title: "People Analytics Dashboard",
        description: "Built and deployed comprehensive People Analytics dashboards to deliver actionable workforce metrics and operational KPIs to corporate leadership."
      },
      {
        title: "Enterprise Scale Platforms (100,000+ Users)",
        description: "Developed and managed an online community platform serving over 100,000+ employees across Walmart China and successfully rolled out the employee mobile e-learning platform."
      },
      {
        title: "HR ERP Systems & SAP Database Optimization",
        description: "Conducted core SAP database analysis and updates, audited training metrics, and restructured administrative access governance for enhanced system security and reliability."
      },
      {
        title: "Global Platform Launch (WalmartOne)",
        description: "Led the Walmart China HR technology team in international collaboration to launch the WalmartOne Global access platform; iteratively enhanced SAP systems based on internal stakeholder requirements."
      }
    ],
    skills: ["People Analytics", "SAP Core ERP", "WalmartOne Global", "HRIS", "System Launch", "Database Administration", "E-Mobile Learning", "Access Governance"]
  },
  {
    company: "Greif, Inc.",
    role: "Workday Data and System Analyst",
    subRoles: [
      { title: "Workday Data & System Analyst", period: "Sep 2016 - Jun 2017 · 10 mos" },
      { title: "Workday Analyst Intern", period: "Jul 2016 - Sep 2016 · 3 mos" }
    ],
    location: "Delaware, Ohio",
    period: "Jul 2016 - Jun 2017 · 1 yr",
    badgeBg: "bg-gradient-to-tr from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-300",
    fallbackIcon: <CorporateFareIcon fontSize="medium" className="text-purple-400" />,
    highlights: [
      {
        title: "Employee Engagement Analytics",
        description: "Facilitated global employee engagement by conducting, analyzing, and synthesizing findings from the annual worldwide employee engagement survey to drive actionable workforce initiatives."
      },
      {
        title: "Workday System Enhancement & User Feedback",
        description: "Enhanced HR system effectiveness by centralizing and analyzing user feedback to guide system optimization, streamline workflows, and prioritize new features."
      },
      {
        title: "Global Performance Review Project",
        description: "Supported data architecture, system configuration, and execution for the enterprise-wide annual performance review rollout."
      }
    ],
    skills: ["Workday", "HRIS", "Data-Driven Decision Making", "Employee Engagement Survey", "Performance Review", "System Enhancement", "Technology Management"]
  },
  {
    company: "The Ohio State University",
    role: "HR PeopleSoft Assistant",
    subRoles: [
      { title: "HR PeopleSoft Assistant in Education & Training Center", period: "Sep 2014 - May 2016 · 1 yr 9 mos" },
      { title: "HR Assistant in HR Administration Office", period: "Sep 2014 - May 2015 · 9 mos" }
    ],
    location: "Columbus, Ohio",
    period: "Sep 2014 - May 2016 · 1 yr 9 mos",
    badgeBg: "bg-gradient-to-tr from-rose-500/20 to-red-500/20 border-rose-500/40 text-rose-300",
    fallbackIcon: <SchoolIcon fontSize="medium" className="text-rose-400" />,
    highlights: [
      {
        title: "PeopleSoft HRMS Administration",
        description: "Maintained training and employee records in PeopleSoft HRMS, ensuring high data accuracy and regulatory compliance across university education and training programs."
      },
      {
        title: "HR Administrative Operations",
        description: "Supported employee onboarding, records management, and administrative workflows in the EHE HR Administrative Office with strong attention to detail and problem solving."
      }
    ],
    skills: ["PeopleSoft", "HR Administration", "Technology Management", "Data Integrity", "Problem Solving", "Interpersonal Skills"]
  },
  {
    company: "TCL Multimedia",
    role: "Human Resources Intern",
    location: "Shenzhen, Guangdong, China",
    period: "May 2014 - Jun 2014 · 2 mos",
    badgeBg: "bg-gradient-to-tr from-sky-500/20 to-blue-500/20 border-sky-500/40 text-sky-300",
    fallbackIcon: <DevicesIcon fontSize="medium" className="text-sky-400" />,
    highlights: [
      {
        title: "HR Operations & Talent Coordination",
        description: "Supported talent acquisition workflows, candidate communication, campus recruiting logistics, and departmental documentation."
      }
    ],
    skills: ["HR Operations", "Talent Coordination", "Problem Solving", "Interpersonal Skills"]
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
            A comprehensive overview of my career in Product Management, People Technology, HR Policy & Strategy, Enterprise HRIS Systems, and Data-Driven Entrepreneurship.
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
                  <div className={`w-16 h-16 rounded-2xl border p-2 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-all ${exp.badgeBg}`}>
                    {exp.fallbackIcon}
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h2>
                    <span className="text-purple-400 font-semibold text-base sm:text-lg">
                      @ {exp.company}
                    </span>

                    {/* Sub-roles if multiple periods */}
                    {exp.subRoles && (
                      <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-400">
                        {exp.subRoles.map((sr, srIdx) => (
                          <span key={srIdx} className="inline-flex items-center gap-1.5 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                            <span className="text-neutral-300 font-medium">{sr.title}</span>
                            <span className="text-purple-400">({sr.period})</span>
                          </span>
                        ))}
                      </div>
                    )}
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

              {/* Technologies / Skills */}
              <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-neutral-400 flex items-center gap-1 mr-2">
                  <CodeIcon fontSize="small" className="text-purple-400" /> Core Skills & Tools:
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