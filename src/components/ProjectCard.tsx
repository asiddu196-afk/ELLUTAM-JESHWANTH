import React, { useState } from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import { BeginnerProject } from '../data/portfolioData';

interface ProjectCardProps {
  project: BeginnerProject;
  index: number;
  onViewProject: (project: BeginnerProject) => void;
}

/**
 * Reusable ProjectCard Component
 * Renders an individual beginner Python project card with honest metadata,
 * a working "View Project" handler, and an honest "GitHub" placeholder button.
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onViewProject,
}) => {
  const [githubNotice, setGithubNotice] = useState<boolean>(false);

  const handleGithubClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setGithubNotice(true);
    window.setTimeout(() => setGithubNotice(false), 3500);
  };

  return (
    <article className="bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
      <div>
        {/* Unboxed metadata header */}
        <div className="flex items-center justify-between gap-2 text-xs text-slate-500 pb-3 mb-4 border-b border-slate-100">
          <span>
            Technology: <strong className="font-semibold text-slate-800">{project.technology}</strong>
          </span>
          <span className="font-mono-code text-slate-400">0{index + 1}</span>
        </div>

        {/* Project Name */}
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {project.description}
        </p>

        {/* Key Concepts Demonstrated (Unboxed clean text) */}
        <p className="mt-4 text-xs text-slate-500 leading-relaxed">
          Concepts: {project.concepts.join(' · ')}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onViewProject(project)}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>View Project</span>
          </button>

          <a
            href="#"
            onClick={handleGithubClick}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-[#FAFAFA] border border-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {githubNotice && (
          <p
            role="status"
            className="mt-2.5 text-xs text-slate-500 font-medium"
          >
            GitHub link is a placeholder (#) — repository will be linked when published.
          </p>
        )}
      </div>
    </article>
  );
};
