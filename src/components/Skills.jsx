import React, { useState } from 'react';
import {
  LinearProgress,
  Tabs,
  Tab,
  Box,
  Card,
  CardContent,
  Chip
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DnsIcon from '@mui/icons-material/Dns';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ShieldIcon from '@mui/icons-material/Shield';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [tabValue, setTabValue] = useState(0);
  const { skills } = portfolioData;

  const categories = [
    { label: 'Frontend', icon: <WebIcon sx={{ fontSize: 18 }} /> },
    { label: 'Backend & APIs', icon: <DnsIcon sx={{ fontSize: 18 }} /> },
    { label: 'Databases', icon: <StorageIcon sx={{ fontSize: 18 }} /> },
    { label: 'Languages & Core CS', icon: <CodeIcon sx={{ fontSize: 18 }} /> },
    { label: 'DevOps & Tools', icon: <BuildIcon sx={{ fontSize: 18 }} /> },
  ];

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <PsychologyIcon sx={{ fontSize: 14 }} />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & Architecture Matrix
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Production-grade competencies across modern frontend frameworks, fast asynchronous backends, relational & NoSQL databases, and rigorous testing workflows.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 flex gap-1 shadow-lg">
            {categories.map((cat, index) => (
              <button
                key={cat.label}
                onClick={() => setTabValue(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  tabValue === index
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md shadow-teal-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab 0: Frontend */}
        {tabValue === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {skills.frontend.map((skill) => (
              <div
                key={skill.name}
                className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-teal-500/40 transition-all"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-white text-base">{skill.name}</span>
                  <span className="text-xs font-mono text-teal-400 font-semibold">{skill.level}%</span>
                </div>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(90deg, #14b8a6, #38bdf8)',
                      borderRadius: 3,
                    },
                  }}
                />
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 1: Backend & APIs */}
        {tabValue === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {skills.backend.map((skill) => (
              <div
                key={skill.name}
                className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-white text-base">{skill.name}</span>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">{skill.level}%</span>
                </div>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
                      borderRadius: 3,
                    },
                  }}
                />
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Databases */}
        {tabValue === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fadeIn">
            {skills.databases.map((skill) => (
              <div
                key={skill.name}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <StorageIcon />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{skill.name}</h4>
                      <p className="text-xs text-slate-400 font-mono">Production Database</p>
                    </div>
                  </div>
                  <span className="text-sm font-mono text-emerald-400 font-bold">{skill.level}%</span>
                </div>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    my: 2,
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(90deg, #10b981, #06b6d4)',
                      borderRadius: 3,
                    },
                  }}
                />
                <div className="flex flex-wrap gap-2 mt-4">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Languages & Core CS */}
        {tabValue === 3 && (
          <div className="space-y-8 max-w-5xl mx-auto animate-fadeIn">
            {/* Programming Languages */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4">
                Programming Languages
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 transition-all"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-white text-base">{lang.name}</span>
                      <span className="text-xs font-mono text-amber-400 font-semibold">{lang.level}%</span>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value={lang.level}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        bgcolor: 'rgba(255, 255, 255, 0.08)',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #f59e0b, #eab308)',
                          borderRadius: 3,
                        },
                      }}
                    />
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {lang.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core CS Concepts */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4">
                Core Computer Science Foundations
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.coreCS.map((cs) => (
                  <div
                    key={cs.name}
                    className="glass-card p-5 rounded-2xl border border-slate-800/80"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                      <CodeIcon />
                    </div>
                    <h5 className="font-bold text-white text-base mb-1">{cs.name}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{cs.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: DevOps & Tools */}
        {tabValue === 4 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {skills.toolsDeployment.map((tool) => (
              <div
                key={tool.name}
                className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-teal-500/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <BuildIcon sx={{ fontSize: 18 }} />
                  </div>
                  <h4 className="font-bold text-white text-base">{tool.name}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
