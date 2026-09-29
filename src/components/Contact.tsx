import React, { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';

/**
 * Contact Section
 * Provides Jeshwanth's primary LinkedIn profile link (opening in a new tab),
 * honest placeholders for GitHub and Email (without inventing URLs or addresses),
 * and a clean interactive note composer.
 */
export const Contact: React.FC = () => {
  const [placeholderNotice, setPlaceholderNotice] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderNote, setSenderNote] = useState('');
  const [noteSubmitted, setNoteSubmitted] = useState(false);

  const handlePlaceholderClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    channel: string
  ) => {
    e.preventDefault();
    setPlaceholderNotice(
      `${channel} is currently a placeholder (#). Please connect with me directly on LinkedIn in the meantime.`
    );
  };

  const handleNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderNote.trim()) return;
    setNoteSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Social & Professional Links */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs font-medium text-blue-600 mb-2">
                07. Connect &amp; Collaborate
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Connect With Me
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                I am always open to connecting with fellow students, developers,
                hackathon collaborators, and mentors interested in Python, web
                development, and AI engineering.
              </p>
            </div>

            {/* Social Channels List */}
            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {/* Primary Link: LinkedIn */}
              <div className="py-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-500">Primary Professional Profile</p>
                  <p className="text-base font-semibold text-slate-900 mt-0.5">
                    LinkedIn — Ellutam Jeshwanth
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/ellutam-jeshwanth-9600a73b2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <span>Visit LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* GitHub Placeholder */}
              <div className="py-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-500">Code Repositories</p>
                  <p className="text-base font-semibold text-slate-900 mt-0.5">
                    GitHub <span className="text-xs font-normal text-slate-500">— Placeholder</span>
                  </p>
                </div>
                <a
                  href="#"
                  onClick={(e) => handlePlaceholderClick(e, 'GitHub profile link')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-[#FAFAFA] border border-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>GitHub (Placeholder)</span>
                </a>
              </div>

              {/* Email Placeholder */}
              <div className="py-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-500">Direct Contact</p>
                  <p className="text-base font-semibold text-slate-900 mt-0.5">
                    Email <span className="text-xs font-normal text-slate-500">— Placeholder</span>
                  </p>
                </div>
                <a
                  href="#"
                  onClick={(e) => handlePlaceholderClick(e, 'Email address')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-[#FAFAFA] border border-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Email (Placeholder)</span>
                </a>
              </div>
            </div>

            {placeholderNotice && (
              <div
                role="status"
                className="p-4 rounded-xl bg-[#FAFAFA] border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-center justify-between gap-4"
              >
                <span>{placeholderNotice}</span>
                <button
                  type="button"
                  onClick={() => setPlaceholderNotice(null)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 shrink-0"
                >
                  Dismiss
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Quick Connection Note Box */}
          <div className="lg:col-span-6 bg-[#FAFAFA] border border-slate-200/90 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Leave a Quick Note
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Want to discuss a hackathon idea, Python project, or LEARNLOOP? Prepare a quick message below or reach out on LinkedIn.
            </p>

            {noteSubmitted ? (
              <div className="mt-6 p-5 bg-white border border-slate-200 rounded-xl space-y-4">
                <p className="text-sm font-semibold text-slate-900">
                  Thank you, {senderName}!
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Since direct email is currently set as a placeholder on this student portfolio, you can share your message directly with me on LinkedIn:
                </p>
                <blockquote className="p-3 bg-[#FAFAFA] border-l-2 border-blue-600 text-xs text-slate-700 italic">
                  &ldquo;{senderNote}&rdquo;
                </blockquote>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://www.linkedin.com/in/ellutam-jeshwanth-9600a73b2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span>Open LinkedIn Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setNoteSubmitted(false);
                      setSenderName('');
                      setSenderNote('');
                    }}
                    className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    Write Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNoteSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="visitor-name"
                    className="block text-xs font-medium text-slate-700 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="visitor-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g., Rohan Sharma"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="visitor-message"
                    className="block text-xs font-medium text-slate-700 mb-1.5"
                  >
                    Message or Topic
                  </label>
                  <textarea
                    id="visitor-message"
                    rows={3}
                    required
                    value={senderNote}
                    onChange={(e) => setSenderNote(e.target.value)}
                    placeholder="e.g., Would love to connect about LEARNLOOP or upcoming student hackathons..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Prepare Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
