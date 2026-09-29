import React from 'react';
import {
  LEARNING_JOURNEY_STEPS,
  CURRENTLY_LEARNING_ITEMS,
  BUILD_PHILOSOPHY_STEPS,
} from '../data/portfolioData';

/**
 * LearningJourney Component
 * Combines three closely related sections:
 * 1. "My Learning Journey" (Python ↓ Web Development ↓ Generative AI ↓ AI Engineering ↓ AI-Powered Applications ↓ Building Real-World AI Products)
 * 2. "Currently Learning" (8 cards each showing "Currently Learning" instead of fake percentage ratings)
 * 3. "How I Build" (Project Philosophy: IDEA ↓ LEARN ↓ BUILD ↓ IMPROVE)
 */
export const LearningJourney: React.FC = () => {
  return (
    <section
      id="journey"
      className="py-20 sm:py-24 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Part 1: My Learning Journey */}
        <div>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium text-blue-600 mb-2">
              05. Step-by-Step Progression
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              My Learning Journey
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              I&apos;m continuously building my foundation in software development
              and gradually moving toward AI engineering.
            </p>
          </div>

          {/* Visual Learning Journey Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEARNING_JOURNEY_STEPS.map((item, idx) => (
              <div
                key={item.step}
                className="bg-[#FAFAFA] border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-3 mb-4 border-b border-slate-200/80">
                    <span className="font-mono-code font-semibold text-blue-600">
                      Step {item.step}
                    </span>
                    <span>
                      {item.phase}{' '}
                      <span className="font-mono-code text-slate-400 ml-1">
                        {idx < LEARNING_JOURNEY_STEPS.length - 1 ? '↓' : '→'}
                      </span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Explicit Vertical/Linear Progression Readout */}
          <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium text-slate-700">
            <span>Python</span>
            <span className="text-blue-600 font-mono-code">↓</span>
            <span>Web Development</span>
            <span className="text-blue-600 font-mono-code">↓</span>
            <span>Generative AI</span>
            <span className="text-blue-600 font-mono-code">↓</span>
            <span>AI Engineering</span>
            <span className="text-blue-600 font-mono-code">↓</span>
            <span>AI-Powered Applications</span>
            <span className="text-blue-600 font-mono-code">↓</span>
            <span className="text-blue-600 font-semibold">
              Building Real-World AI Products
            </span>
          </div>
        </div>

        {/* Part 2: Currently Learning */}
        <div className="pt-16 border-t border-slate-200">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-blue-600 mb-2">
              Active Study Topics
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Currently Learning
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Honest snapshot of the technologies and AI concepts I am actively studying right now—without artificial skill percentages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CURRENTLY_LEARNING_ITEMS.map((item) => (
              <div
                key={item.title}
                className="bg-[#FAFAFA] border border-slate-200/90 rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-medium text-blue-600">
                    Currently Learning
                  </p>
                  <h3 className="mt-1.5 text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {item.focus}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
                  <span>Status</span>
                  <span className="font-medium text-slate-800">
                    Currently Learning
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Project Philosophy — How I Build */}
        <div className="pt-16 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium text-blue-600 mb-2">
                Project Philosophy
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                How I Build
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                I believe the best way to learn technology is by turning ideas
                into projects, experimenting with new concepts, learning from
                mistakes, and continuously improving.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BUILD_PHILOSOPHY_STEPS.map((item, idx) => (
                <div
                  key={item.name}
                  className="bg-[#FAFAFA] border border-slate-200/90 rounded-xl p-5"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono-code mb-2">
                    <span>{item.step}</span>
                    <span>{idx < BUILD_PHILOSOPHY_STEPS.length - 1 ? '↓' : '↺'}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
