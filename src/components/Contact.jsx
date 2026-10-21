import React, { useState } from 'react';
import {
  TextField,
  Button,
  Snackbar,
  Alert,
  IconButton,
  Tooltip
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [toast, setToast] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setToast({
      open: true,
      message: `${type} copied to clipboard!`,
      severity: 'success',
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToast({
        open: true,
        message: 'Please fill out all required fields.',
        severity: 'warning',
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToast({
        open: true,
        message: 'Thank you! Your message has been received. Akash will reach out promptly.',
        severity: 'success',
      });
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.8 } });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-3">
            <EmailIcon sx={{ fontSize: 14 }} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Available immediately for Full Stack Developer (MERN) roles, high-impact freelance initiatives, and engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Availability Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-950/60 via-slate-900 to-slate-950 border border-teal-500/30">
              <div className="flex items-center gap-2 text-teal-400 text-sm font-bold mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping"></span>
                <span>Immediate Joining Status</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Completed B.E. Computer Science degree in 2026. Equipped to start immediately on full-stack projects, distributed systems, and modern React/Node applications.
              </p>
            </div>

            {/* Email Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between group hover:border-teal-500/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <EmailIcon fontSize="small" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-white group-hover:text-teal-300 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <Tooltip title="Copy Email">
                <IconButton
                  size="small"
                  onClick={() => copyToClipboard(personalInfo.email, 'Email')}
                  sx={{ color: '#94a3b8', '&:hover': { color: '#ffffff' } }}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between group hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <PhoneIcon fontSize="small" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Phone Number</div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <Tooltip title="Copy Phone">
                <IconButton
                  size="small"
                  onClick={() => copyToClipboard(personalInfo.phone, 'Phone number')}
                  sx={{ color: '#94a3b8', '&:hover': { color: '#ffffff' } }}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </div>

            {/* Location Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <LocationOnIcon fontSize="small" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 flex items-center justify-center gap-2 text-slate-300 hover:text-white transition-all text-xs font-semibold"
              >
                <GitHubIcon fontSize="small" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 flex items-center justify-center gap-2 text-slate-300 hover:text-sky-300 transition-all text-xs font-semibold"
              >
                <LinkedInIcon fontSize="small" sx={{ color: '#38bdf8' }} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Have a project or open role in mind? Drop me a message and let's discuss details.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team, or role requirements..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors placeholder:text-slate-500 resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting}
                  endIcon={<SendIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    background: 'linear-gradient(135deg, #14b8a6 0%, #0284c7 100%)',
                    py: 1.5,
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    boxShadow: '0 8px 20px -4px rgba(20, 184, 166, 0.4)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #0d9488 0%, #0369a1 100%)',
                    }
                  }}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={toast.severity}
          onClose={() => setToast({ ...toast, open: false })}
          sx={{ width: '100%', bgcolor: '#0f766e', color: '#ffffff' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </section>
  );
}
