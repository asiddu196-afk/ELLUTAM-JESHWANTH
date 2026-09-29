import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'LEARNLOOP', href: '#learnloop' },
  { label: 'Journey', href: '#journey' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Sticky Navigation Bar
 * Displays all 8 requested sections (Home, About, Skills, Projects, LEARNLOOP, Journey, Hackathons, Contact)
 * on desktop and converts into a clean hamburger menu on mobile/tablet screens.
 */
export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    setActiveSection(targetId);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFAFA]/95 backdrop-blur-sm border-b border-slate-200/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={() => handleNavClick('#home')}
          className="text-base sm:text-lg font-semibold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          Ellutam Jeshwanth
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-slate-600"
        >
          {NAV_ITEMS.map((item) => {
            const isCurrent = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`py-1 whitespace-nowrap shrink-0 transition-colors border-b-2 ${
                  isCurrent
                    ? 'text-slate-900 border-blue-600 font-semibold'
                    : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Hamburger Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={() => handleNavClick('#contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Connect With Me
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 shadow-xs"
        >
          <div className="max-w-6xl mx-auto flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isCurrent = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isCurrent
                      ? 'bg-blue-50/80 text-blue-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-100 sm:hidden">
              <a
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Connect With Me
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
