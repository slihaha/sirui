'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Spotlight } from '../../components/ui/Sportlight';
import VerifiedIcon from '@mui/icons-material/Verified';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';
import KeyIcon from '@mui/icons-material/Key';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

import Neo4jLogo from './neo4j.png';
import DockerLogo from './docker.png';
import WeaviateLogo from './weaviate.png';
import IBMLogo from './ibm.png';
import DeepLearningAILogo from './deeplearningai.png';
import GoogleLogo from './google.png';
import UCDavisLogo from './ucdavis.png';

const LINKEDIN_CERT_URL = "https://www.linkedin.com/in/siruili1111/details/certifications/";

const certifications = [
  {
    title: "Neo4j Fundamentals",
    issuer: "Neo4j",
    issued: "Issued Feb 2026",
    credentialId: "2242d550-7ac4-4889-a81d-d0382bf6e586",
    skills: ["GraphRAG", "Graph Databases", "Cypher"],
    logo: Neo4jLogo,
    category: "Databases & Graph",
    logoBg: "bg-white p-2"
  },
  {
    title: "Docker Foundations Professional Certificate",
    issuer: "Docker, Inc",
    issued: "Issued Jan 2026",
    credentialId: null,
    skills: ["Containerization", "Docker Products", "DevOps"],
    logo: DockerLogo,
    category: "Cloud & DevOps",
    logoBg: "bg-white p-2"
  },
  {
    title: "Vector Databases Professional Certificate by Weaviate",
    issuer: "Weaviate",
    issued: "Issued Jan 2026",
    credentialId: "6a024f3db5e155f078a4470f6589bcd4db84b8be02630c932ac6b960de7f10c1",
    skills: ["Artificial Intelligence (AI)", "Database Development", "Vector Search"],
    logo: WeaviateLogo,
    category: ["AI & ML", "Databases & Graph"],
    logoBg: "bg-white p-2"
  },
  {
    title: "IBM Full Stack Software Developer Specialization",
    issuer: "IBM",
    issued: "Issued Apr 2024",
    credentialId: "ZSDU8DA539L8",
    skills: ["Full-Stack Development", "React", "Node.js", "Cloud Apps"],
    logo: IBMLogo,
    category: "Development",
    logoBg: "bg-white p-2"
  },
  {
    title: "DeepLearning.AI TensorFlow Developer Specialization",
    issuer: "DeepLearning.AI",
    issued: "Issued Jun 2023",
    credentialId: "Q8QBKLDDBQ66",
    skills: ["TensorFlow", "Deep Learning", "Neural Networks", "Computer Vision"],
    logo: DeepLearningAILogo,
    category: "AI & ML",
    logoBg: "bg-white p-2"
  },
  {
    title: "IBM AI Engineering",
    issuer: "IBM",
    issued: "Issued Mar 2023",
    credentialId: null,
    skills: ["Convolutional Neural Networks (CNN)", "Keras", "Deep Learning", "PyTorch"],
    logo: IBMLogo,
    category: "AI & ML",
    logoBg: "bg-white p-2"
  },
  {
    title: "IBM Machine Learning Professional Certificate",
    issuer: "IBM",
    issued: "Issued Feb 2023",
    credentialId: null,
    skills: ["EDA", "Unsupervised Learning", "Supervised Learning", "Scikit-Learn"],
    logo: IBMLogo,
    category: "AI & ML",
    logoBg: "bg-white p-2"
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    issued: "Issued Dec 2022",
    credentialId: null,
    skills: ["Data Science", "Python", "SQL", "Data Analysis", "Data Visualization"],
    logo: IBMLogo,
    category: "Data Science",
    logoBg: "bg-white p-2"
  },
  {
    title: "Google Project Management",
    issuer: "Google",
    issued: "Issued Nov 2022",
    credentialId: null,
    skills: ["Project Management", "Agile Project Management", "Scrum"],
    logo: GoogleLogo,
    category: "Management",
    logoBg: "bg-white p-2"
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    issued: "Issued Oct 2022",
    credentialId: null,
    skills: ["Data Visualization", "Data Analysis", "R Programming", "SQL"],
    logo: GoogleLogo,
    category: "Data Science",
    logoBg: "bg-white p-2"
  },
  {
    title: "SQL for Data Science",
    issuer: "University of California, Davis",
    issued: "Issued Sep 2022",
    credentialId: null,
    skills: ["SQL", "Relational Databases", "Data Wrangling"],
    logo: UCDavisLogo,
    category: "Data Science",
    logoBg: "bg-white p-2"
  }
];

const categories = ["All", "AI & ML", "Databases & Graph", "Cloud & DevOps", "Development", "Data Science", "Management"];

const LicensePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCerts = selectedCategory === "All"
    ? certifications
    : certifications.filter(c =>
        Array.isArray(c.category)
          ? c.category.includes(selectedCategory)
          : c.category === selectedCategory
      );

  return (
    <div className="min-h-screen w-full bg-black-100 bg-grid-white/[0.03] relative flex flex-col items-center justify-start overflow-hidden text-white">
      {/* Spotlight Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Radial gradient mask for background grid */}
      <div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full pt-32 sm:pt-40 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-center text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
            Licenses & Certifications
          </p>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Verified industry credentials in Artificial Intelligence, Graph RAG, Machine Learning, Cloud Containerization, and Software Engineering.
          </p>

          {/* LinkedIn Direct CTA */}
          <div className="mt-6">
            <Link
              href={LINKEDIN_CERT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-sm hover:from-purple-500 hover:to-blue-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <WorkspacePremiumIcon fontSize="small" />
              <span>Verify All Credentials on LinkedIn</span>
              <LaunchIcon fontSize="small" />
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs sm:text-sm px-4 py-2 rounded-full border transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'bg-black/40 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredCerts.map((cert, index) => (
            <div
              key={index}
              className="group relative border border-white/10 dark:border-white/15 bg-black/60 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent group-hover:via-purple-500/80 transition-all duration-500" />

              <div>
                {/* Header: Logo + Issuer & Date */}
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl ${cert.logoBg} border border-white/20 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform overflow-hidden`}>
                    <Image
                      src={cert.logo}
                      alt={`${cert.issuer} Logo`}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-purple-400">
                      <span>{cert.issuer}</span>
                      <VerifiedIcon fontSize="small" className="text-purple-400" />
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-neutral-400">
                      <CalendarTodayIcon fontSize="inherit" className="text-neutral-500" />
                      <span>{cert.issued}</span>
                    </div>
                  </div>
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="mt-4 p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono text-neutral-300 overflow-x-auto">
                    <KeyIcon fontSize="small" className="text-purple-400 shrink-0" />
                    <span className="text-neutral-400 shrink-0">ID:</span>
                    <span className="truncate select-all text-neutral-200">{cert.credentialId}</span>
                  </div>
                )}

                {/* Skills */}
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-neutral-400 flex items-center gap-1 mr-1">
                    <CodeIcon fontSize="small" className="text-purple-400" /> Skills:
                  </span>
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:border-purple-500/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action / Link */}
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-neutral-500 font-mono">Verified Credential</span>
                <Link
                  href={LINKEDIN_CERT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-semibold group/link transition-colors"
                >
                  <span>Show Credential</span>
                  <LaunchIcon fontSize="inherit" className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LicensePage;