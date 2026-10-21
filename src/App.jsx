import React, { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getMuiTheme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AchievementsCertifications from './components/AchievementsCertifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [mode, setMode] = useState('dark');
  const [resumeOpen, setResumeOpen] = useState(false);

  const theme = useMemo(() => getMuiTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-teal-500/30 selection:text-teal-200">
        {/* Navigation Bar */}
        <Navbar
          mode={mode}
          toggleTheme={toggleTheme}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <Projects />
          <Skills />
          <AchievementsCertifications />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer onOpenResume={() => setResumeOpen(true)} />

        {/* ATS Resume Modal (Exact match to resume PDF) */}
        <ResumeModal
          open={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
