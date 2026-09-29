import React, { useState } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import {
  LEARNLOOP_STEPS,
  LEARNLOOP_FEATURES,
  LEARNLOOP_TECH_DIRECTION,
} from '../data/portfolioData';

/**
 * FeaturedProject Component — LEARNLOOP
 * Serves as the visual centerpiece of the portfolio, showcasing Jeshwanth's
 * AI-Powered Gamified Learning Platform concept, the 9-step learning loop,
 * core features, technology direction, and long-term vision.
 */
export const FeaturedProject: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [showConceptModal, setShowConceptModal] = useState<boolean>(false);

  const activeStep = LEARNLOOP_STEPS[activeStepIndex];

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowConceptModal(true);
  };

  return (
    <section
      id="learnloop"
      className="py-20 sm:py-28 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Meta & Honest Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-600">
            <span className="text-blue-600 font-semibold">03. Featured Project</span>
            <span aria-hidden="true">·</span>
            <span>AI-Powered Gamified Learning Platform</span>
          </div>
          <div className="text-xs sm:text-sm font-medium text-slate-700">
            Status: <span className="text-blue-600 font-semibold">Personal Project / Product Concept — Currently Building</span>
          </div>
        </div>

        {/* Project Title, Tagline, and Core Description */}
        <div className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-slate-200">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-mono-code text-slate-500">
              AI-Powered Gamified Learning Platform
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              LEARNLOOP
            </h2>
            <p className="text-base sm:text-lg font-medium text-blue-600 leading-snug">
              Learn. Ask. Understand. Practice. Compete. Improve.
            </p>
            <p className="text-xs text-slate-500 pt-1">
              Personal Project / Product Concept — Currently Building
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5 text-base text-slate-700 leading-relaxed">
            <p>
              LEARNLOOP is an AI-powered learning platform concept designed to create a
              personalized learning experience for students. The idea combines AI
              tutoring, learning resources, notes, quizzes, practice, progress
              tracking, and gamification into one learning ecosystem.
            </p>
            <p className="text-slate-600">
              Students can learn from educational content, capture questions, ask
              AI-powered doubts, generate understandable notes, practice through
              quizzes, identify weak areas, and track their learning progress.
            </p>
          </div>
        </div>

        {/* Visual Learning Loop Section: WATCH ↓ CAPTURE ↓ ASK ↓ UNDERSTAND ↓ NOTE ↓ PRACTICE ↓ TEST ↓ ANALYZE ↓ IMPROVE */}
        <div className="py-12 sm:py-14 border-b border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                The 9-Stage Learning Loop
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                A continuous student workflow from initial content consumption to targeted improvement. Select any step to inspect its role.
              </p>
            </div>
            <span className="font-mono-code text-xs text-slate-500">
              Step {activeStep.number} of 09 Selected
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Vertical Flow Column showing WATCH ↓ CAPTURE ↓ ASK ↓ UNDERSTAND ↓ NOTE ↓ PRACTICE ↓ TEST ↓ ANALYZE ↓ IMPROVE */}
            <div className="lg:col-span-7 bg-[#FAFAFA] border border-slate-200/90 rounded-2xl p-5 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {LEARNLOOP_STEPS.map((item, idx) => {
                  const isSelected = idx === activeStepIndex;
                  return (
                    <div key={item.step} className="flex flex-col items-center">
                      <button
                        type="button"
                        onClick={() => setActiveStepIndex(idx)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-colors border ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-slate-800 border-slate-200/90 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`font-mono-code text-xs ${
                              isSelected ? 'text-blue-100' : 'text-slate-400'
                            }`}
                          >
                            {item.number}
                          </span>
                          <span
                            className={`font-mono-code text-xs ${
                              isSelected ? 'text-white' : 'text-slate-400'
                            }`}
                          >
                            {idx < LEARNLOOP_STEPS.length - 1 ? '↓' : '↺'}
                          </span>
                        </div>
                        <p className="mt-1 text-sm font-bold tracking-tight">
                          {item.step}
                        </p>
                      </button>
                      {idx < LEARNLOOP_STEPS.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="sm:hidden my-1 font-mono-code text-xs text-slate-400"
                        >
                          ↓
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explicit Linear Flow Readout */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 text-xs font-mono-code text-slate-600 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>WATCH</span>
                <span>↓</span>
                <span>CAPTURE</span>
                <span>↓</span>
                <span>ASK</span>
                <span>↓</span>
                <span>UNDERSTAND</span>
                <span>↓</span>
                <span>NOTE</span>
                <span>↓</span>
                <span>PRACTICE</span>
                <span>↓</span>
                <span>TEST</span>
                <span>↓</span>
                <span>ANALYZE</span>
                <span>↓</span>
                <span className="text-blue-600 font-semibold">IMPROVE</span>
              </div>
            </div>

            {/* Interactive Step Inspector Panel */}
            <div className="lg:col-span-5 bg-[#FAFAFA] border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 pb-4 mb-4 border-b border-slate-200/80">
                  <span>Stage Breakdown</span>
                  <span className="font-mono-code text-blue-600 font-medium">
                    Stage {activeStep.number} · {activeStep.step}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  {activeStep.step}: {activeStep.summary}
                </h4>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {activeStep.detail}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() =>
                    setActiveStepIndex((prev) =>
                      prev === 0 ? LEARNLOOP_STEPS.length - 1 : prev - 1
                    )
                  }
                  className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  ← Previous Stage
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveStepIndex((prev) =>
                      prev === LEARNLOOP_STEPS.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Next Stage →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* LEARNLOOP Features Grid (9 Clean Feature Cards) */}
        <div className="py-12 sm:py-14 border-b border-slate-200">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Core Platform Features
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Modular features designed to support every phase of a student&apos;s study workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LEARNLOOP_FEATURES.map((feature, idx) => (
              <div
                key={feature.title}
                className="bg-[#FAFAFA] border border-slate-200/90 rounded-xl p-5 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span>{feature.category}</span>
                  <span className="font-mono-code text-slate-400">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-slate-900">
                  {feature.title}
                </h4>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Direction & Long-Term Vision */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Technology Direction */}
          <div className="lg:col-span-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              LEARNLOOP Technology Direction
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-5">
              Technologies and concepts being used, learned, and explored to build this platform step by step.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 border-t border-slate-200 pt-4">
              {LEARNLOOP_TECH_DIRECTION.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-baseline justify-between gap-2 text-sm py-1.5 border-b border-slate-100"
                >
                  <span className="font-medium text-slate-900">{tech.name}</span>
                  <span className="text-xs text-slate-500">— {tech.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Vision for LEARNLOOP */}
          <div className="lg:col-span-6 bg-[#FAFAFA] border border-slate-200/90 rounded-2xl p-6 sm:p-8">
            <p className="text-xs font-medium text-blue-600 mb-1">
              Product Direction
            </p>
            <h3 className="text-xl font-bold text-slate-900">
              My Vision for LEARNLOOP
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
              The long-term vision of LEARNLOOP is to build a personal AI learning
              companion that helps students understand concepts, practice
              effectively, identify weaknesses, and continuously improve.
            </p>

            <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Concept Status: In Active Development
              </span>
              <a
                href="#"
                onClick={handleExploreClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>Explore Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Concept Overview Modal when clicking "Explore Project" (#) */}
      {showConceptModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="learnloop-modal-title"
        >
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <p className="text-xs font-medium text-blue-600">
                  Personal Project / Product Concept — Currently Building
                </p>
                <h3
                  id="learnloop-modal-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 mt-1"
                >
                  LEARNLOOP — Concept Blueprint
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowConceptModal(false)}
                aria-label="Close concept blueprint"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-5 text-sm text-slate-700 leading-relaxed">
              <p>
                <strong>LEARNLOOP</strong> is currently being developed as a personal student
                project and product concept. Rather than claiming to be a finished commercial
                product, this blueprint outlines what I am actively building and learning to
                implement step by step.
              </p>

              <div className="space-y-2.5">
                <h4 className="font-semibold text-slate-900">
                  Current Prototyping Roadmap:
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Phase 1 (Foundation):</strong> Structuring core Python logic for quiz generation, note formatting, and study session state.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Phase 2 (Web Interface):</strong> Designing clean student views for the WATCH → CAPTURE → ASK → UNDERSTAND → IMPROVE loop.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Phase 3 (AI &amp; RAG Exploration):</strong> Exploring LLM APIs, prompt engineering, and retrieval-augmented generation (RAG) so student doubts are answered accurately from study material.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FAFAFA] border border-slate-200 rounded-xl p-4 text-xs text-slate-600">
                Note: Repository and live demo links are currently placeholders (<code>#</code>) while the initial prototype modules are being built.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setShowConceptModal(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close Blueprint
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
