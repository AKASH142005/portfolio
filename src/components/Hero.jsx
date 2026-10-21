import React from 'react';
import { Button, Chip, Tooltip } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CodeIcon from '@mui/icons-material/Code';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personalInfo } = portfolioData;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#14b8a6', '#38bdf8', '#818cf8', '#f59e0b']
    });
    onOpenResume();
  };

  const techBadges = [
    'React.js', 'Node.js', 'Fastify', 'Express.js', 'MongoDB', 
    'MySQL', 'Material UI', 'Tailwind CSS', 'Redux', 'Zustand', 'JWT Auth', 'Vitest'
  ];

  return (
    <section id="about" className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Background radial glow & mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-teal-500/15 via-cyan-500/15 to-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-10 -right-20 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Availability Pill */}
        <div className="flex justify-start md:justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-xs sm:text-sm text-teal-300 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span>{personalInfo.statusBadge}</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-left md:text-center max-w-4xl mx-auto">
          <p className="text-slate-400 font-mono text-sm sm:text-base tracking-wider uppercase mb-2">
            Hey there! 👋 I am
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {personalInfo.role}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            {personalInfo.summary}
          </p>

          {/* Quick Contact & Location Bar */}
          <div className="flex flex-wrap items-center justify-start md:justify-center gap-3 sm:gap-4 mb-8 text-xs sm:text-sm text-slate-300">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 hover:text-teal-300 transition-colors"
            >
              <EmailIcon sx={{ fontSize: 16, color: '#14b8a6' }} />
              <span>{personalInfo.email}</span>
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
            >
              <PhoneIcon sx={{ fontSize: 16, color: '#38bdf8' }} />
              <span>{personalInfo.phone}</span>
            </a>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400">
              <LocationOnIcon sx={{ fontSize: 16, color: '#f43f5e' }} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-start md:justify-center gap-4 mb-12">
            <Button
              variant="contained"
              size="large"
              component="a"
              href="#projects"
              startIcon={<RocketLaunchIcon />}
              sx={{
                background: 'linear-gradient(135deg, #14b8a6 0%, #0284c7 100%)',
                color: '#ffffff',
                fontWeight: 600,
                padding: '12px 28px',
                fontSize: '1rem',
                boxShadow: '0 8px 24px -4px rgba(20, 184, 166, 0.4)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #0d9488 0%, #0369a1 100%)',
                }
              }}
            >
              Explore Projects
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={triggerConfetti}
              startIcon={<DescriptionIcon />}
              sx={{
                borderColor: 'rgba(56, 189, 248, 0.5)',
                color: '#38bdf8',
                fontWeight: 600,
                padding: '12px 26px',
                fontSize: '1rem',
                backgroundColor: 'rgba(56, 189, 248, 0.05)',
                '&:hover': {
                  borderColor: '#38bdf8',
                  backgroundColor: 'rgba(56, 189, 248, 0.12)',
                }
              }}
            >
              View Resume (PDF)
            </Button>

            <div className="flex items-center gap-2">
              <Tooltip title="GitHub Repository">
                <Button
                  variant="outlined"
                  component="a"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    minWidth: '48px',
                    width: '48px',
                    height: '48px',
                    padding: 0,
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#f8fafc',
                    '&:hover': {
                      borderColor: '#ffffff',
                      bgcolor: 'rgba(255, 255, 255, 0.08)',
                    }
                  }}
                >
                  <GitHubIcon fontSize="small" />
                </Button>
              </Tooltip>

              <Tooltip title="LinkedIn Profile">
                <Button
                  variant="outlined"
                  component="a"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    minWidth: '48px',
                    width: '48px',
                    height: '48px',
                    padding: 0,
                    borderColor: 'rgba(56, 189, 248, 0.3)',
                    color: '#38bdf8',
                    '&:hover': {
                      borderColor: '#38bdf8',
                      bgcolor: 'rgba(56, 189, 248, 0.1)',
                    }
                  }}
                >
                  <LinkedInIcon fontSize="small" />
                </Button>
              </Tooltip>
            </div>
          </div>

          {/* Metric Counter Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {personalInfo.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-2xl text-center border border-slate-800/80 hover:border-teal-500/40 group transition-all"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-teal-400 transition-colors flex items-center justify-center">
                  <span>{metric.value}</span>
                  {metric.suffix && <span className="text-xs text-slate-400 ml-1">{metric.suffix}</span>}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 truncate">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Marquee Pill Row */}
        <div className="mt-14 pt-8 border-t border-slate-800/60 max-w-5xl mx-auto">
          <p className="text-center text-xs uppercase tracking-wider text-slate-400 font-mono mb-4">
            Core Technologies & Architectural Toolset
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-teal-500/40 hover:text-teal-300 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
