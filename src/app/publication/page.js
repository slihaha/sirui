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
    title: "Between Gradient and Natural Gradient: A Continuum of LoRA Initializations",
    authors: ["Dianze Liu", "Farshid Ghezelbash"],
    authorHighlight: "Dianze Liu",
    date: "July 28, 2026",
    venue: "arXiv preprint arXiv:2607.26247",
    arxivId: "arXiv:2607.26247",
    arxivLink: "https://arxiv.org/abs/2607.26247",
    pdfLink: "https://arxiv.org/pdf/2607.26247.pdf",
    scholarCitation: "D Liu, F Ghezelbash - arXiv preprint arXiv:2607.26247, 2026",
    bibtex: `@article{liu2026between,
  title={Between Gradient and Natural Gradient: A Continuum of LoRA Initializations},
  author={Liu, Dianze and Ghezelbash, Farshid},
  journal={arXiv preprint arXiv:2607.26247},
  year={2026}
}`,
    abstract: "Low-rank adaptation (LoRA) fine-tunes large pretrained models at a fraction of the cost of full fine-tuning, but its performance depends strongly on how the adapters are initialized. Recent schemes initialize the adapters from the downstream loss gradient: some project the raw gradient onto its top directions, while others first whiten it with an estimate of the loss curvature. We show that these seemingly distinct methods are points on a single continuum: a two-parameter family of preconditioned gradient initializations, which we call Unified LoRA (ULoRA), governed by a spectral whitening exponent and an Adam-like diagonal exponent. Sweeping this family under a full learning-rate search, we find that no single fixed preconditioning strength dominates: the best operating point is task-dependent and frequently lies strictly inside the family, away from the published endpoints. Treated as an upper bound of this family, a tuned ULoRA configuration matches or exceeds full fine-tuning on all five GLUE tasks with RoBERTa-base and is competitive with the strongest baselines on GSM8K with LLaMA-2-7B. Our deployable, search-free variant, ULoRA-Auto, selects per-layer exponents from measured spectral statistics, approaches this upper bound at no additional search cost, and ranks at or near the top among deployable LoRA methods. Our results show that a principled design space for LoRA initialization and curvature preconditioning should be treated as a tunable dimension rather than a fixed design decision.",
    highlights: [
      "Unified Framework (ULoRA): Unifies raw gradient and curvature-whitened initializations into a continuous 2-parameter family.",
      "Superior Performance: Matches or exceeds full fine-tuning on all 5 GLUE tasks with RoBERTa-base & competitive on GSM8K with LLaMA-2-7B.",
      "ULoRA-Auto: Zero-search-cost deployable variant that dynamically adapts per-layer exponents from spectral statistics."
    ],
    tags: ["LoRA", "ULoRA", "LLM Fine-Tuning", "Natural Gradient", "Curvature Preconditioning", "Model Adaptation"]
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
      <div className="relative z-10 w-full pt-32 sm:pt-40 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-center text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
            Publications & Research
          </p>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Researching efficient foundation models and autonomous systems—spanning PEFT, LLM reasoning, and multi-agent architectures.
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-10">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group relative border border-white/10 dark:border-white/15 bg-black/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent group-hover:via-purple-500/80 transition-all duration-500" />

              {/* Title & Venue */}
              <div className="flex flex-col gap-3 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-purple-400">
                  <MenuBookIcon fontSize="small" />
                  <span>{pub.venue}</span>
                  <span className="text-neutral-600">•</span>
                  <span className="flex items-center gap-1 text-neutral-400 font-normal">
                    <CalendarTodayIcon fontSize="inherit" /> {pub.date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors leading-tight">
                  {pub.title}
                </h2>

                {/* Authors */}
                <div className="flex items-center gap-2 text-sm text-neutral-300 flex-wrap mt-1">
                  <PersonIcon fontSize="small" className="text-purple-400" />
                  <span>Authors:</span>
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
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-neutral-200">
                  <AutoAwesomeIcon fontSize="small" className="text-purple-400" />
                  <span>Key Contributions:</span>
                </div>
                {pub.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3 pl-2">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                    <p className="text-sm leading-relaxed text-neutral-300">{h}</p>
                  </div>
                ))}
              </div>

              {/* Abstract */}
              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Abstract
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {pub.abstract}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                {pub.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:border-purple-500/40 hover:text-white transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Actions & Links */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <Link
                    href={pub.arxivLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  >
                    <span>View on arXiv</span>
                    <LaunchIcon fontSize="small" />
                  </Link>

                  <Link
                    href={pub.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 border border-white/20 hover:border-purple-400 text-white font-semibold text-xs transition-all"
                  >
                    <DescriptionIcon fontSize="small" className="text-purple-400" />
                    <span>Download PDF</span>
                  </Link>
                </div>

                <button
                  onClick={() => handleCopyBibtex(pub.bibtex, index)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 text-neutral-300 text-xs font-mono transition-all"
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
