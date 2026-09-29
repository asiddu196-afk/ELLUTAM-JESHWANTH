import React, { useState } from 'react';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { PROGRESSION_PATH } from '../data/portfolioData';

/**
 * Hero Section
 * Introduces Ellutam Jeshwanth honestly as a first-year B.Tech student and aspiring AI Engineer,
 * paired with a minimal, interactive architectural diagram of his learning progression.
 */
export const Hero: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(4); // Highlights "ASPIRING AI ENGINEER" direction by default

  return (
    <section
      id="home"
      className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Primary Identity & Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet unboxed metadata line */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
              <span>Ellutam Jeshwanth</span>
              <span aria-hidden="true">·</span>
              <span>B.Tech First Year</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-600">Building Foundations in AI & Software</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Hi, I&apos;m Jeshwanth.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed max-w-2xl">
              First-Year B.Tech Student <span className="text-slate-300 px-1">|</span> Aspiring AI Engineer{' '}
              <span className="text-slate-300 px-1">|</span> Python &amp; Web Developer{' '}
              <span className="text-slate-300 px-1">|</span> Exploring Generative AI
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Learning, building, experimenting, and turning ideas into working projects.
            </p>

            {/* Primary & Secondary Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#learnloop"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>Connect With Me</span>
                <ArrowDownRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Quick Snapshot Strip (Unboxed Editorial Format) */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-slate-500">Current Academic Stage</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">1st Year B.Tech</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Primary Language</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">Python &amp; Web Basics</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-xs text-slate-500">Featured Concept</p>
                <a
                  href="#learnloop"
                  className="mt-1 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4"
                >
                  LEARNLOOP Platform
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Subtle Minimal Technical Visual — Student-to-AI-Engineer Progression Schematic */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Personal Progression Map
                  </p>
                  <h2 className="text-sm font-semibold text-slate-900 mt-0.5">
                    From Student Foundation to AI Engineering
                  </h2>
                </div>
                <span className="font-mono-code text-xs text-slate-400">
                  01 — 05
                </span>
              </div>

              {/* Vertical Progression Schematic: STUDENT ↓ LEARNER ↓ BUILDER ↓ AI ENTHUSIAST ↓ ASPIRING AI ENGINEER */}
              <div className="space-y-2" role="list" aria-label="Developer progression stages">
                {PROGRESSION_PATH.map((item, idx) => {
                  const isSelected = selectedStage === idx;
                  return (
                    <div key={item.step} role="listitem">
                      <button
                        type="button"
                        onClick={() => setSelectedStage(idx)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-colors flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-blue-50/70 text-slate-900'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <span
                            className={`font-mono-code text-xs font-medium ${
                              isSelected ? 'text-blue-600' : 'text-slate-400'
                            }`}
                          >
                            {item.step}
                          </span>
                          <div className="min-w-0">
                            <p
                              className={`text-xs sm:text-sm font-semibold tracking-tight truncate ${
                                isSelected ? 'text-blue-700' : 'text-slate-900'
                              }`}
                            >
                              {item.label}
                            </p>
                            <p className="text-xs text-slate-500 truncate mt-0.5">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`text-xs font-mono-code shrink-0 ${
                            isSelected ? 'text-blue-600 font-medium' : 'text-slate-400'
                          }`}
                        >
                          {idx < PROGRESSION_PATH.length - 1 ? '↓' : '→'}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Footer note inside schematic */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Core Philosophy</span>
                <span className="font-medium text-slate-700">
                  Learn · Build · Experiment · Improve
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
