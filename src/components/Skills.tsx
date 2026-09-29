import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

/**
 * Skills Section
 * Displays only the honest skills and exploration areas mentioned by the student,
 * organized into four clear categories with interactive filtering.
 */
export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const visibleCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 bg-[#FAFAFA] border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Interactive Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-xs font-medium text-blue-600 mb-2">
              02. Technical Foundation
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Skills &amp; Exploration Areas
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              An honest overview of the languages, web fundamentals, and AI concepts I am currently working with and exploring.
            </p>
          </div>

          {/* Interactive Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Areas
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleCategories.map((category, index) => (
            <div
              key={category.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 pb-4 mb-5 border-b border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {category.title}
                  </h3>
                  <span className="font-mono-code text-xs text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-5">
                  {category.description}
                </p>

                {/* Skill List */}
                <ul className="divide-y divide-slate-100">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4 text-sm"
                    >
                      <span className="font-medium text-slate-900">
                        {item.name}
                      </span>
                      {item.stage ? (
                        <span className="text-xs text-slate-500 whitespace-nowrap">
                          — {item.stage}
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400 whitespace-nowrap">
                          Active Practice
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
