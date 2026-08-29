'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Spotlight } from '../../components/ui/Sportlight';
import DescriptionIcon from '@mui/icons-material/Description';
import LaunchIcon from '@mui/icons-material/Launch';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const publications = [
  {
    title: "DS@GT at FinMMEval 2026 Task 2: FinNexus-Agentic Retrieval-Augmented Reranking Orchestration for Multilingual Financial Question Answering",
    authors: ["Dianze Liu", "Sirui Li", "Shuyu Tian"],
    authorHighlight: "Sirui Li",
    date: "September 2026",
    venue: "FinMMEval at CLEF 2026 (Working Notes)",
    conferenceLocation: "Jena, Germany",
    pdfLink: "https://clef-staging.pages.dev/paper204.pdf",
    scholarCitation: "D Liu, S Li, S Tian - CLEF 2026 Working Notes, CEUR Workshop Proceedings, 2026",
    bibtex: `@inproceedings{liu2026finnexus,
  title={DS@GT at FinMMEval 2026 Task 2: FinNexus-Agentic Retrieval-Augmented Reranking Orchestration for Multilingual Financial Question Answering},
  author={Liu, Dianze and Li, Sirui and Tian, Shuyu},
  booktitle={CLEF 2026 Working Notes, CEUR Workshop Proceedings},
  year={2026},
  address={Jena, Germany}
}`,
    abstract: "Financial question answering and reasoning should not rely on a single information source. Financial knowledge is inherently heterogeneous, encompassing financial statements, market news, and multilingual discussions that offer diverse perspectives, interpretations, and insights on a given topic. Effectively aggregating these sources and selectively identifying the most relevant information to answer questions remains a significant engineering challenge. In this work, we introduce FinNexus, an agentic framework that decomposes this complex task into manageable stages and addresses them incrementally. We propose a multi-stage pipeline that combines semantic retrieval with a specialized reranking module, alongside an LLM-driven planner capable of Python-based tool execution for accurate numerical analysis. The system is developed and evaluated on the first multilingual financial question answering dataset, PolyFiQA. Experimental results demonstrate that our approach can generate high-quality, grounded responses to user queries while operating at less than 19% of the cost of flagship models.",
    highlights: [
      "FinNexus Multi-Stage Agentic Architecture: Decomposes complex financial QA into modular semantic retrieval, Python-based calculation, LLM-as-a-Judge verification, and synthesis stages orchestrated via LangGraph.",
      "Multilingual Retrieval & Cross-Lingual Reranking: Direct multilingual embeddings in Weaviate combined with Voyage reranker and BM25 hybrid search across 5 languages (English, Chinese, Spanish, Japanese, Greek) on PolyFiQA.",
      "Programmatic Numerical Reasoning: Eliminates arithmetic hallucinations by delegating numerical computations to a sandboxed Python execution environment, achieving 36.10% (Easy) and 31.64% (Expert) numerical accuracy.",
      "Cost Efficiency at Enterprise Scale: Achieves superior domain-specific reasoning and recall while reducing total query token and monetary costs by over 81% ($0.0052 vs $0.0296 per query)."
    ],
    tags: ["FinNexus", "Financial QA", "Agentic RAG", "Multilingual Retrieval", "LangGraph", "PolyFiQA", "CLEF 2026", "LLM-as-a-Judge"]
  }
];

const PublicationPage = () => {
  const [copiedBibtexIndex, setCopiedBibtexIndex] = useState(null);

  const handleCopyBibtex = (bibtex, index) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedBibtexIndex(index);
    setTimeout(() => setCopiedBibtexIndex(null), 2000);
  };

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
      <div className="relative z-10 w-full pt-24 sm:pt-40 pb-16 sm:pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-center text-3xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2 sm:py-4">
            Publications & Research
          </h1>
          <p className="text-neutral-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-2 px-2">
            Research at the intersection of Agentic RAG, Multilingual Financial Question Answering, and Enterprise AI Systems.
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6 sm:space-y-10">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group relative border border-white/10 dark:border-white/15 bg-black/60 backdrop-blur-xl rounded-2xl p-4 sm:p-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-6 right-6 sm:left-8 sm:right-8 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent group-hover:via-purple-500/80 transition-all duration-500" />

              {/* Title & Venue */}
              <div className="flex flex-col gap-2.5 sm:gap-3 pb-4 sm:pb-6 border-b border-white/10">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-purple-400 flex-wrap">
                  <MenuBookIcon fontSize="small" />
                  <span>{pub.venue}</span>
                  <span className="text-neutral-600">•</span>
                  <span className="flex items-center gap-1 text-neutral-400 font-normal">
                    <CalendarTodayIcon fontSize="inherit" /> {pub.date}
                  </span>
                </div>

                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors leading-snug sm:leading-tight">
                  {pub.title}
                </h2>

                {/* Authors */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300 flex-wrap mt-1">
                  <PersonIcon fontSize="small" className="text-purple-400" />
                  <span className="font-semibold text-neutral-400">Authors:</span>
                  {pub.authors.map((author, aIdx) => (
                    <span
                      key={aIdx}
                      className={
                        author === pub.authorHighlight
                          ? "font-bold text-white underline decoration-purple-500 underline-offset-4"
                          : "text-neutral-300"
                      }
                    >
                      {author}{aIdx < pub.authors.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Contributions */}
              <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-200">
                  <AutoAwesomeIcon fontSize="small" className="text-purple-400" />
                  <span>Key Contributions:</span>
                </div>
                {pub.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 sm:gap-3 pl-1 sm:pl-2">
                    <span className="mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500 shrink-0" />
                    <p className="text-xs sm:text-sm leading-relaxed text-neutral-300">{h}</p>
                  </div>
                ))}
              </div>

              {/* Abstract */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-[11px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                  Abstract
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                  {pub.abstract}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                {pub.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] sm:text-xs px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:border-purple-500/40 hover:text-white transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Actions & Links */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <Link
                    href={pub.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  >
                    <DescriptionIcon fontSize="small" />
                    <span>View PDF Paper</span>
                    <LaunchIcon fontSize="small" />
                  </Link>

                  <Link
                    href={pub.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 border border-white/20 hover:border-purple-400 text-white font-semibold text-xs transition-all"
                  >
                    <DescriptionIcon fontSize="small" className="text-purple-400" />
                    <span>Download PDF</span>
                  </Link>
                </div>

                <button
                  onClick={() => handleCopyBibtex(pub.bibtex, index)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 text-neutral-300 text-xs font-mono transition-all"
                >
                  {copiedBibtexIndex === index ? (
                    <>
                      <CheckIcon fontSize="small" className="text-green-400" />
                      <span className="text-green-400">BibTeX Copied!</span>
                    </>
                  ) : (
                    <>
                      <ContentCopyIcon fontSize="small" className="text-neutral-400" />
                      <span>Copy BibTeX</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicationPage;
