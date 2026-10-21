import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tooltip
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import VerifiedIcon from '@mui/icons-material/Verified';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const { projects } = portfolioData;

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'freelance') return project.id === 'aquacare';
    if (filter === 'enterprise') return project.id === 'campushub';
    if (filter === 'greentech') return project.id === 'ecovision';
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-3">
            <LayersOutlinedIcon sx={{ fontSize: 14 }} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured Full Stack Projects
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            3 production-deployed applications with real clients, live users, 50+ REST endpoints, and resilient RBAC architectures.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Projects (3)' },
              { id: 'freelance', label: 'Freelance Client (AquaCare)' },
              { id: 'enterprise', label: 'Campus Platform (CampusHub)' },
              { id: 'greentech', label: 'Award-Winning (EcoVision)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-teal-500 text-slate-950 font-semibold shadow-md shadow-teal-500/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col justify-between transition-all duration-300 hover:-translate-y-2"
              sx={{
                bgcolor: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                '&:hover': {
                  borderColor: project.accentColor,
                  boxShadow: `0 16px 36px -12px ${project.accentColor}33`,
                },
              }}
            >
              <div>
                {/* Card Top Banner with Gradient Accent */}
                <div
                  className={`h-2 w-full`}
                  style={{ backgroundColor: project.accentColor }}
                />

                <CardContent sx={{ p: 3 }}>
                  {/* Top Badge & Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                      style={{
                        backgroundColor: `${project.accentColor}18`,
                        color: project.accentColor,
                        border: `1px solid ${project.accentColor}30`,
                      }}
                    >
                      {project.badge}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live App
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mb-4 font-medium">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {project.overview}
                  </p>

                  {/* Key Highlights from Resume */}
                  <div className="space-y-2 mb-5">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircleOutlinedIcon
                          sx={{ fontSize: 15, color: project.accentColor, mt: '2px', flexShrink: 0 }}
                        />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Badges */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 mb-5">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-center p-1">
                        <div className="text-xs font-bold text-white" style={{ color: project.accentColor }}>
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/70 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>

              {/* Action Buttons */}
              <CardActions sx={{ p: 3, pt: 0, display: 'flex', gap: 1.5 }}>
                <Button
                  variant="contained"
                  fullWidth
                  component="a"
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    background: `linear-gradient(135deg, ${project.accentColor} 0%, #0d9488 100%)`,
                    color: '#ffffff',
                    fontWeight: 600,
                    textTransform: 'none',
                    py: 1,
                  }}
                >
                  Live Demo
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => setSelectedProject(project)}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#f8fafc',
                    textTransform: 'none',
                    py: 1,
                    '&:hover': {
                      borderColor: project.accentColor,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                  }}
                >
                  Architecture
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Architecture Deep-Dive Dialog Modal */}
      {selectedProject && (
        <Dialog
          open={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: '#0f172a',
              color: '#f8fafc',
              borderRadius: '20px',
              border: `1px solid ${selectedProject.accentColor}40`,
              boxShadow: `0 24px 48px -12px ${selectedProject.accentColor}33`,
              backgroundImage: 'none',
            },
          }}
        >
          <DialogTitle sx={{ m: 0, p: 3, pb: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white"
                style={{ backgroundColor: selectedProject.accentColor }}
              >
                {selectedProject.title.charAt(0)}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">
                  {selectedProject.title}
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  {selectedProject.subtitle}
                </p>
              </div>
            </div>
            <IconButton
              onClick={() => setSelectedProject(null)}
              sx={{ color: '#94a3b8', '&:hover': { color: '#ffffff' } }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent sx={{ p: 3 }}>
            <div className="space-y-6">
              {/* Overview */}
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  System Architecture Overview
                </h5>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.overview}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Technical Achievements & Implementation
                </h5>
                <div className="space-y-2.5">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 flex items-start gap-2.5">
                      <VerifiedIcon sx={{ fontSize: 18, color: selectedProject.accentColor, mt: '2px', flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Feature Breakdown */}
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Platform Capabilities
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedProject.accentColor }}></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Full List */}
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Tech Stack & Libraries
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-teal-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>

          <DialogActions sx={{ p: 3, pt: 1, borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <Button
              variant="outlined"
              onClick={() => setSelectedProject(null)}
              sx={{ color: '#94a3b8', borderColor: 'rgba(255, 255, 255, 0.12)' }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              component="a"
              href={selectedProject.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<LaunchIcon />}
              sx={{
                bgcolor: selectedProject.accentColor,
                color: '#ffffff',
                fontWeight: 600,
                '&:hover': {
                  filter: 'brightness(1.1)',
                },
              }}
            >
              Open Live Application
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </section>
  );
}
