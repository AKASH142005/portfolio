import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  Chip,
  Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ mode, toggleTheme, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a href="#about" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 font-black text-xl shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-teal-400 transition-colors">
                  {portfolioData.personalInfo.name}
                </span>
                <span className="text-xs text-teal-400/90 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                  MERN Developer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-full transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Tooltip title="View GitHub Profile">
                <IconButton
                  component="a"
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{ color: '#94a3b8', '&:hover': { color: '#ffffff', bgcolor: 'rgba(255,255,255,0.06)' } }}
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="View LinkedIn Profile">
                <IconButton
                  component="a"
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{ color: '#94a3b8', '&:hover': { color: '#38bdf8', bgcolor: 'rgba(56,189,248,0.1)' } }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <Button
                variant="outlined"
                size="small"
                onClick={onOpenResume}
                startIcon={<DescriptionOutlinedIcon />}
                sx={{
                  borderColor: 'rgba(20, 184, 166, 0.4)',
                  color: '#2dd4bf',
                  '&:hover': {
                    borderColor: '#14b8a6',
                    backgroundColor: 'rgba(20, 184, 166, 0.1)',
                  },
                }}
              >
                Resume
              </Button>

              <Button
                variant="contained"
                size="small"
                component="a"
                href="#contact"
                sx={{
                  background: 'linear-gradient(135deg, #14b8a6 0%, #0284c7 100%)',
                  fontWeight: 600,
                  color: '#ffffff',
                  boxShadow: '0 4px 14px rgba(20, 184, 166, 0.3)',
                }}
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <Button
                variant="outlined"
                size="small"
                onClick={onOpenResume}
                sx={{
                  borderColor: 'rgba(20, 184, 166, 0.4)',
                  color: '#2dd4bf',
                  padding: '4px 10px',
                  fontSize: '0.8rem',
                }}
              >
                Resume
              </Button>
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ color: '#f8fafc' }}
                aria-label="open drawer"
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: '#0f172a',
            color: '#f8fafc',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px 16px',
          },
        }}
      >
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-bold text-sm">
              A
            </div>
            <span className="font-bold text-sm">{portfolioData.personalInfo.name}</span>
          </div>
          <IconButton onClick={handleDrawerToggle} size="small" sx={{ color: '#94a3b8' }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>

        <List sx={{ mt: 2 }}>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: '10px',
                  '&:hover': { bgcolor: 'rgba(20, 184, 166, 0.1)', color: '#2dd4bf' },
                }}
              >
                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 500 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <div className="mt-auto pt-6 border-t border-slate-800 flex flex-col gap-3">
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              handleDrawerToggle();
              onOpenResume();
            }}
            startIcon={<DescriptionOutlinedIcon />}
            sx={{
              background: 'linear-gradient(135deg, #14b8a6 0%, #0284c7 100%)',
              color: '#ffffff',
            }}
          >
            View Resume PDF
          </Button>

          <div className="flex items-center justify-center gap-4 pt-2">
            <IconButton
              component="a"
              href={portfolioData.personalInfo.github}
              target="_blank"
              size="small"
              sx={{ color: '#94a3b8' }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component="a"
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              size="small"
              sx={{ color: '#94a3b8' }}
            >
              <LinkedInIcon />
            </IconButton>
          </div>
        </div>
      </Drawer>
    </>
  );
}
