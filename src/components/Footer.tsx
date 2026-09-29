import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Footer Component
 * Quiet, clean academic/developer footer with site links, core belief statement, and LinkedIn profile link.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAFAFA] py-12 border-t border-slate-200/80 text-slate-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div>
            <p className="text-base font-bold text-slate-900">
              Ellutam Jeshwanth
            </p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              First-Year B.Tech Student · Aspiring AI Engineer · Learn → Build → Experiment → Improve
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium">
            <a href="#home" className="hover:text-slate-900 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-slate-900 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-slate-900 transition-colors">
              Skills
            </a>
            <a href="#learnloop" className="hover:text-slate-900 transition-colors">
              LEARNLOOP
            </a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">
              Projects
            </a>
            <a
              href="https://www.linkedin.com/in/ellutam-jeshwanth-9600a73b2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Ellutam Jeshwanth. Built as an honest student developer portfolio.
          </p>
          <p className="font-mono-code text-slate-400">
            STUDENT → LEARNER → BUILDER → AI ENTHUSIAST → ASPIRING AI ENGINEER
          </p>
        </div>
      </div>
    </footer>
  );
};
