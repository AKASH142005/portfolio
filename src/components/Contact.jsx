import React, { useState } from 'react';
import {
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
import LaunchIcon from '@mui/icons-material/Launch';
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
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedMessage) {
      setToast({
        open: true,
        message: 'Please fill out your Name and Message.',
        severity: 'warning',
      });
      return;
    }

    setIsSubmitting(true);

    const emailSubject = trimmedSubject || `Portfolio Inquiry from ${trimmedName}`;
    const emailBody =
      `Hello Akash,\n\n` +
      `${trimmedMessage}\n\n` +
      `----------------------------------------\n` +
      `Sender Details:\n` +
      `• Name: ${trimmedName}\n` +
      (trimmedEmail ? `• Email: ${trimmedEmail}\n` : '') +
      `• Topic: ${trimmedSubject || 'General Opportunity / Inquiry'}\n` +
      `• Sent via: Akash's Portfolio Website`;

    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);

    // Direct Gmail Web Compose link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodedSubject}&body=${encodedBody}`;

    // Standard mailto link as fallback
    const mailtoUrl = `mailto:${encodeURIComponent(personalInfo.email)}?subject=${encodedSubject}&body=${encodedBody}`;

    // Open Gmail compose in a new tab
    const newWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = mailtoUrl;
    }

    setToast({
      open: true,
      message: 'Opening Gmail with your pre-filled message! You can review and click Send.',
      severity: 'success',
    });

    confetti({ particleCount: 70, spread: 60, origin: { y: 0.8 } });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
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

            {/* Direct Gmail Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between group hover:border-red-500/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <EmailIcon fontSize="small" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Gmail</div>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent('Full Stack Developer Opportunity / Project Inquiry')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white group-hover:text-red-300 transition-colors"
                  >
                    Compose on Gmail
                  </a>
                </div>
              </div>
              <Tooltip title="Compose in Gmail Web">
                <IconButton
                  size="small"
                  component="a"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent('Full Stack Developer Opportunity / Project Inquiry')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: '#94a3b8', '&:hover': { color: '#ea4335' } }}
                >
                  <LaunchIcon fontSize="small" />
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
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                  <EmailIcon sx={{ fontSize: 13 }} />
                  Delivered via Gmail
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Have an engineering opportunity or project in mind? Fill in your details below — upon submitting, a pre-filled draft will open directly in Gmail ready to send to Akash ({personalInfo.email}).
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
                      Email Address <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com (optional)"
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
                  startIcon={<EmailIcon sx={{ fontSize: 20 }} />}
                  sx={{
                    background: 'linear-gradient(135deg, #ea4335 0%, #c5221f 100%)',
                    py: 1.5,
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    boxShadow: '0 8px 20px -4px rgba(234, 67, 53, 0.4)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #d93025 0%, #a51d24 100%)',
                      boxShadow: '0 10px 24px -4px rgba(234, 67, 53, 0.5)',
                    }
                  }}
                >
                  {isSubmitting ? 'Opening Gmail...' : 'Send Message via Gmail'}
                </Button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-1">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
                  <span>Opens Gmail compose directly pre-filled with your message addressed to {personalInfo.email}</span>
                </div>
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
