import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import GradeIcon from '@mui/icons-material/Grade';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <SchoolIcon sx={{ fontSize: 14 }} />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Strong academic credentials in Computer Science and Engineering with consistent high performance throughout schooling.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-indigo-500/30"></div>

          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={item.degree} className="relative flex flex-col sm:flex-row items-start gap-6 group">
                {/* Node Icon */}
                <div className="hidden sm:flex relative z-10 w-16 h-16 rounded-2xl bg-slate-900 border-2 border-teal-500/60 items-center justify-center text-teal-400 shadow-lg shadow-teal-500/10 group-hover:scale-110 group-hover:border-teal-400 transition-all flex-shrink-0">
                  {index === 0 ? <SchoolIcon sx={{ fontSize: 30 }} /> : <AccountBalanceIcon sx={{ fontSize: 28 }} />}
                </div>

                {/* Content Card */}
                <div className="w-full glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/80 group-hover:border-teal-500/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-teal-400 font-semibold flex items-center gap-1">
                      <CalendarMonthIcon sx={{ fontSize: 14 }} />
                      {item.period}
                    </span>

                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/15 text-teal-300 border border-teal-500/30 w-fit">
                      <GradeIcon sx={{ fontSize: 14 }} />
                      {item.score}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-semibold text-slate-400 mb-4 flex items-center gap-1.5">
                    <AccountBalanceIcon sx={{ fontSize: 16, color: '#94a3b8' }} />
                    <span>{item.institution}</span>
                  </div>

                  {item.details && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircleIcon sx={{ fontSize: 14, color: '#14b8a6', mt: '2px', flexShrink: 0 }} />
                          <span className="leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
