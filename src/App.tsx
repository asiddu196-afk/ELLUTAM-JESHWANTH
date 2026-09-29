/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedProject } from './components/FeaturedProject';
import { ProjectCard } from './components/ProjectCard';
import { LearningJourney } from './components/LearningJourney';
import { HackathonTimeline } from './components/HackathonTimeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { OTHER_PROJECTS, BeginnerProject } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<BeginnerProject | null>(
    null
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section Wrapper (LEARNLOOP as visual centerpiece + Other Projects) */}
        <div id="projects">
          {/* Featured Project Section: LEARNLOOP */}
          <FeaturedProject />

          {/* Other Projects Section */}
          <section className="py-20 sm:py-24 bg-[#FAFAFA] border-b border-slate-200/80">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-12">
                <p className="text-xs font-medium text-blue-600 mb-2">
                  04. Foundational Programming Projects
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Other Projects
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-600">
                  Beginner Python projects built to practice conditional logic, functions, user input handling, and core programming concepts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {OTHER_PROJECTS.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={idx}
                    onViewProject={(proj) => setSelectedProject(proj)}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Learning Journey, Currently Learning & How I Build */}
        <LearningJourney />

        {/* Hackathons & Ideathons */}
        <HackathonTimeline />

        {/* Contact & Social Links */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal for Inspecting Beginner Python Projects */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <p className="text-xs font-medium text-blue-600">
                  Technology: {selectedProject.technology}
                </p>
                <h3
                  id="project-modal-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 mt-1"
                >
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project overview"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-5 text-sm text-slate-700">
              <p className="leading-relaxed">{selectedProject.description}</p>

              <div>
                <h4 className="text-xs font-semibold text-slate-900 mb-2">
                  Core Programming Concepts Practiced:
                </h4>
                <p className="text-xs text-slate-600">
                  {selectedProject.concepts.join(' · ')}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-900 mb-2">
                  Representative Python Logic:
                </h4>
                <pre className="bg-slate-900 text-slate-100 font-mono-code text-xs p-4 rounded-xl overflow-x-auto leading-relaxed">
                  <code>{selectedProject.sampleLogic}</code>
                </pre>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-900 mb-1.5">
                  Sample Console Output:
                </h4>
                <div className="bg-[#FAFAFA] border border-slate-200 font-mono-code text-xs text-slate-800 px-4 py-3 rounded-lg whitespace-pre-wrap">
                  {selectedProject.sampleOutput}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                GitHub repository link: Placeholder (#)
              </span>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
