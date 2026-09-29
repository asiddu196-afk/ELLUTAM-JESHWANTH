import React from 'react';

/**
 * About Me Section
 * Presents Jeshwanth's honest student background, current interests, and quick-reference profile summary.
 */
export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-medium text-blue-600 mb-2">
            01. Personal Profile
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              I am a first-year B.Tech student and aspiring AI Engineer, currently
              building my foundation in Python, web development, and Generative AI.
              I enjoy turning ideas into small working projects and exploring how AI
              can be used to solve real-world problems. Through hackathons,
              ideathons, and personal projects, I am continuously improving my
              technical and problem-solving skills.
            </p>
            <p className="text-slate-600">
              Currently, I am particularly interested in AI engineering, Generative
              AI, AI-powered applications, and building products that can solve
              practical problems.
            </p>

            {/* Current Status List (Unboxed clean layout) */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">
                Current Focus &amp; Student Profile
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 text-sm text-slate-600">
                <li className="flex items-baseline gap-2">
                  <span className="text-blue-600 font-mono-code text-xs">—</span>
                  <span>First-year B.Tech student</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-blue-600 font-mono-code text-xs">—</span>
                  <span>Aspiring AI Engineer</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-blue-600 font-mono-code text-xs">—</span>
                  <span>Beginner in Generative AI</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-blue-600 font-mono-code text-xs">—</span>
                  <span>Python learner / developer</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-blue-600 font-mono-code text-xs">—</span>
                  <span>Beginner Web Developer</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-blue-600 font-mono-code text-xs">—</span>
                  <span>Hackathon &amp; Ideathon participant</span>
                </li>
                <li className="flex items-baseline gap-2 sm:col-span-2">
                  <span className="text-blue-600 font-mono-code text-xs">—</span>
                  <span>Building AI and software projects</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Structured At-A-Glance Overview */}
          <div className="lg:col-span-5 bg-[#FAFAFA] border border-slate-200/90 rounded-2xl p-6 sm:p-7">
            <h3 className="text-sm font-semibold text-slate-900 pb-4 mb-4 border-b border-slate-200/80">
              At a Glance
            </h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-xs text-slate-500">Who I Am</dt>
                <dd className="font-medium text-slate-900 mt-0.5">
                  A first-year B.Tech student learning, experimenting, and building.
                </dd>
              </div>
              <div className="pt-3 border-t border-slate-200/60">
                <dt className="text-xs text-slate-500">What I Know</dt>
                <dd className="font-medium text-slate-900 mt-0.5">
                  Python, basic web development, and beginner-level Generative AI.
                </dd>
              </div>
              <div className="pt-3 border-t border-slate-200/60">
                <dt className="text-xs text-slate-500">What I Build</dt>
                <dd className="font-medium text-slate-900 mt-0.5">
                  Small programming projects and AI/product concepts such as LEARNLOOP.
                </dd>
              </div>
              <div className="pt-3 border-t border-slate-200/60">
                <dt className="text-xs text-slate-500">What I Do</dt>
                <dd className="font-medium text-slate-900 mt-0.5">
                  Participate in hackathons and ideathons and experiment with technology.
                </dd>
              </div>
              <div className="pt-3 border-t border-slate-200/60">
                <dt className="text-xs text-slate-500">What I Want to Become</dt>
                <dd className="font-semibold text-blue-600 mt-0.5">
                  An AI Engineer.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
