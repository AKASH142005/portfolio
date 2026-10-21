import React from 'react';
import { Card, CardContent, Chip, Button } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedIcon from '@mui/icons-material/Verified';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';
import GroupsIcon from '@mui/icons-material/Groups';
import { portfolioData } from '../data/portfolioData';

export default function AchievementsCertifications() {
  const { achievements, certifications } = portfolioData;

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <EmojiEventsIcon sx={{ fontSize: 14 }} />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Competitive hackathon recognition, verified credentials from Infosys and MongoDB University, and continuous problem-solving milestones.
          </p>
        </div>

        {/* Top: Major Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* EPICS Hackathon'25 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-teal-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <EmojiEventsIcon sx={{ fontSize: 28 }} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Top 5 Finalist
                  </span>
                </div>

                <div className="text-xs font-mono text-teal-400 font-semibold mb-1">
                  Karpagam College • May 2025
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Top 5 at EPICS Hackathon’25 (Ideathon)
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Selected in top 5 out of numerous competitive teams in a 4-member team presenting <strong className="text-teal-300">EcoVision</strong>, an innovative circular economy and waste management platform featuring live distance mapping and multi-role RBAC.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <GroupsIcon sx={{ fontSize: 16, color: '#14b8a6' }} />
                  4-Member Core Team
                </span>
                <span className="font-mono text-teal-400">EcoVision Platform</span>
              </div>
            </div>
          </div>

          {/* LeetCode 170+ */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <CodeIcon sx={{ fontSize: 28 }} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    170+ Solved
                  </span>
                </div>

                <div className="text-xs font-mono text-cyan-400 font-semibold mb-1">
                  LeetCode Competitive Coding
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  170+ Problems Solved on LeetCode
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Consistent problem solver with deep algorithmic rigor in <strong className="text-cyan-300">Java and SQL</strong>, mastering Arrays, Two Pointers, Linked Lists, Binary Trees, and complex relational SQL database queries.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">Java</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">SQL</span>
                </span>
                <a
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                >
                  Algorithms & DS <LaunchIcon sx={{ fontSize: 13 }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Verified Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <WorkspacePremiumIcon sx={{ color: '#2dd4bf' }} />
            <h3 className="text-xl font-bold text-white">
              Industry Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-teal-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20 font-semibold">
                      {cert.year}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                      <VerifiedIcon sx={{ fontSize: 14 }} />
                      Verified
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1">
                    {cert.title}
                  </h4>
                  <div className="text-xs font-semibold text-slate-400 mb-3">
                    {cert.issuer}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {cert.skillsLearned}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/70 text-[11px] text-slate-400 font-mono">
                  {cert.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
