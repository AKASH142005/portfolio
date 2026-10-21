import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const { personalInfo } = portfolioData;

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-black text-sm">
                A
              </div>
              <span className="font-bold text-white text-lg">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Full Stack Developer specializing in high-performance web systems and responsive user interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#achievements" className="hover:text-teal-400 transition-colors">Achievements</a>
            <a href="#education" className="hover:text-teal-400 transition-colors">Education</a>
            <button onClick={onOpenResume} className="hover:text-teal-400 transition-colors">Resume</button>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="small" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="small" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/40 transition-all"
              aria-label="Email"
            >
              <EmailIcon fontSize="small" />
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Akash A C. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <span className="text-teal-400 font-semibold">Material UI</span>
            <span>+</span>
            <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
            <span>+</span>
            <span className="text-indigo-400 font-semibold">React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
