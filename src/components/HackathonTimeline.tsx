import React from 'react';
import { HACKATHON_PLACEHOLDERS } from '../data/portfolioData';

/**
 * HackathonTimeline Component
 * Displays Jeshwanth's participation in hackathons and ideathons using an honest
 * timeline and card layout with structured placeholders for Event Name, Year, Role, Project, and Achievement.
 */
export const HackathonTimeline: React.FC = () => {
  return (
    <section
      id="hackathons"
      className="py-20 sm:py-24 bg-[#FAFAFA] border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-medium text-blue-600 mb-2">
            06. Collaborative Problem Solving
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Hackathons &amp; Ideathons
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            I actively participate in hackathons and ideathons to transform ideas
            into practical solutions, collaborate with others, explore new
            technologies, and improve my problem-solving skills.
          </p>
        </div>

        {/* Clean Timeline / Card Layout */}
        <div className="relative border-l-2 border-slate-200 ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {HACKATHON_PLACEHOLDERS.map((entry, idx) => (
            <div key={entry.id} className="relative">
              {/* Timeline node marker */}
              <span
                aria-hidden="true"
                className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-600"
              />

              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100 text-xs text-slate-500">
                  <span className="font-medium text-slate-700">
                    {entry.slotLabel}
                  </span>
                  <span className="font-mono-code text-slate-400">
                    Slot 0{idx + 1}
                  </span>
                </div>

                {/* Structured Placeholder Fields: Event Name, Year, Role, Project, Achievement */}
                <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                  <div className="lg:col-span-1">
                    <dt className="text-xs text-slate-500">Event Name</dt>
                    <dd className="font-semibold text-slate-900 mt-1">
                      {entry.eventName}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs text-slate-500">Year</dt>
                    <dd className="font-mono-code font-medium text-slate-800 mt-1">
                      {entry.year}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs text-slate-500">Role</dt>
                    <dd className="font-medium text-slate-800 mt-1">
                      {entry.role}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs text-slate-500">Project</dt>
                    <dd className="font-medium text-slate-800 mt-1">
                      {entry.project}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs text-slate-500">Achievement</dt>
                    <dd className="font-medium text-slate-600 mt-1">
                      {entry.achievement}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
