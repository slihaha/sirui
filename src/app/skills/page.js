'use client';
import React, { useState } from 'react';
import { cn } from "../../lib/utils";
import BackgroundEffect2 from '../../components/background2.js';
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid.js";
import { Stack, Avatar } from '@mui/material';
import {
  sourcelist1,
  sourcelist2,
  sourcelist3,
  sourcelist4,
  sourcelist5,
  sourcelist6,
  sourcelist7,
  sourcelist8,
  sourcelist9
} from './components/sourcelist';

const categories = [
  "All",
  "Product & Strategy",
  "People Technology & HRIS",
  "Data Analytics & BI",
  "Artificial Intelligence",
  "Web & Cloud"
];

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const Skeleton = ({ sources = [], textList = [] }) => (
    <div className="flex items-center justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 p-3">
      {sources.length > 0 ? (
        <Stack direction="row" justifyContent="center" alignItems="center" gap={1.5} flexWrap="wrap">
          {sources.map((source, index) => {
            const imgSrc = typeof source === 'string' ? source : source?.src;
            const IconComponent = typeof source === 'function' ? source : null;

            const isPyTorch = imgSrc?.includes('pytorch');
            const isHuggingFace = imgSrc?.includes('huggingface');
            const isAWS = imgSrc?.includes('aws');
            const isMLflow = imgSrc?.includes('mlflow');
            const isLangChain = imgSrc?.includes('langchain');
            const isSQL = imgSrc?.includes('SQL') || imgSrc?.includes('sql');

            let avatarSize = sources.length > 3 ? 54 : (sources.length > 2 ? 66 : 76);
            let padding = '4px';
            let scale = 1;

            if (isPyTorch) {
              scale = 1.15;
              padding = '2px';
            } else if (isHuggingFace) {
              scale = 0.92;
              padding = '5px';
            } else if (isLangChain) {
              scale = 1.1;
              padding = '2px';
            } else if (isMLflow) {
              avatarSize = sources.length > 2 ? 72 : 82;
              scale = 1.25;
              padding = '2px';
            } else if (isAWS) {
              avatarSize = sources.length > 2 ? 68 : 78;
              padding = '4px';
            } else if (isSQL) {
              scale = 0.82;
              padding = '6px';
            }

            let avatarBg = '#333333';

            return (
              <Avatar
                variant="rounded"
                key={index}
                src={imgSrc}
                imgProps={{
                  style: {
                    objectFit: 'contain',
                    transform: `scale(${scale})`
                  }
                }}
                sx={{
                  width: avatarSize,
                  height: avatarSize,
                  borderRadius: '50%',
                  bgcolor: avatarBg,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                  p: padding
                }}
              >
                {IconComponent && <IconComponent className="w-full h-full object-contain" />}
              </Avatar>
            );
          })}
        </Stack>
      ) : (
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {textList.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-purple-500/30 bg-purple-950/40 text-purple-200 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  const items = [
    {
      title: "Product Management & Strategy",
      category: "Product & Strategy",
      badge: "Product",
      description: "Business Strategy, PRD Authoring, Roadmap Planning, Go-to-Market, Agile/Scrum",
      header: <Skeleton textList={["Product Roadmap", "PRDs & Specs", "Cross-Functional Alignment", "User Feedback Loops", "Go-To-Market", "KPI Tracking"]} />,
    },
    {
      title: "Enterprise People Tech & HRIS",
      category: "People Technology & HRIS",
      badge: "Enterprise HRIS",
      description: "Workday, SAP Core Database, PeopleSoft HRMS, WalmartOne Global Access",
      header: <Skeleton textList={["Workday HRIS", "SAP ERP Database", "PeopleSoft HRMS", "Access Governance", "Global Rollouts", "E-Learning Portals"]} />,
    },
    {
      title: "People Analytics & BI Dashboards",
      category: "Data Analytics & BI",
      badge: "Analytics",
      description: "Executive Dashboards, Employee Engagement Analytics, Google Analytics, Excel Modeling",
      header: <Skeleton sources={sourcelist4} />,
    },
    {
      title: "AI Frameworks & Machine Learning",
      category: "Artificial Intelligence",
      badge: "AI & ML",
      description: "PyTorch, TensorFlow, Scikit-Learn, Optimization & Heuristic Algorithms",
      header: <Skeleton sources={sourcelist6} />,
    },
    {
      title: "LLM & GenAI Tools",
      category: "Artificial Intelligence",
      badge: "GenAI & RAG",
      description: "LangChain, Hugging Face, Vector Search Architectures",
      header: <Skeleton sources={sourcelist7} />,
    },
    {
      title: "Programming & Query Languages",
      category: "Data Analytics & BI",
      badge: "Data & Code",
      description: "Python (8 Yrs), SQL / MySQL, JavaScript, C++, R",
      header: <Skeleton sources={sourcelist5} />,
    },
    {
      title: "React & Next.js Platforms",
      category: "Web & Cloud",
      badge: "Frontend",
      description: "Production Web Applications, Component Systems, Responsive UI",
      header: <Skeleton sources={sourcelist1} />,
    },
    {
      title: "Styling & Design Systems",
      category: "Web & Cloud",
      badge: "UI / UX",
      description: "Tailwind CSS, Material UI, Aceternity UI, Modern Glassmorphism",
      header: <Skeleton sources={sourcelist2} />,
    },
    {
      title: "Cloud & DevOps Infrastructure",
      category: "Web & Cloud",
      badge: "Cloud",
      description: "AWS, Docker, Microservices, MLflow",
      header: <Skeleton sources={sourcelist9} />,
    },
  ];

  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundEffect2 />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-36 sm:pt-44 md:pt-48 pb-24 text-white flex flex-col justify-center items-center w-full px-4 max-w-6xl mx-auto">
        {/* Title Header */}
        <div className="text-center mb-8">
          <p className="text-center text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
            Technical Stack
          </p>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Categorized technical capabilities spanning Artificial Intelligence, GenAI & RAG, High-Performance Systems, Web Development, and MLOps.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs sm:text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'bg-black/40 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* BentoGrid with Category Badges */}
        <BentoGrid className="w-full mx-auto md:auto-rows-[18.5rem]">
          {filteredItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={
                <div className="flex items-center justify-between gap-2">
                  <span>{item.title}</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300">
                    {item.badge}
                  </span>
                </div>
              }
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default SkillsPage;