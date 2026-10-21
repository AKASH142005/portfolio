import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Snackbar,
  Alert,
  Tooltip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PrintIcon from '@mui/icons-material/Print';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LaunchIcon from '@mui/icons-material/Launch';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ open, onClose }) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const copyResumeText = () => {
    const text = `
AKASH A C
FULL STACK DEVELOPER (MERN)
+91 79042 35901 | akashanbarasu@gmail.com | Kallakurichi, Tamil Nadu
linkedin.com/in/akashanbarasu | github.com/AKASH142005

PROFESSIONAL SUMMARY
Full Stack Developer (MERN) with 3 deployed applications, including a freelance product-showcase and service-booking platform for a live client. Built 50+ REST endpoints across Node.js, Express.js and Fastify, with JWT authentication, 4-role access control, automated API and component tests, and MongoDB/MySQL. B.E. CSE 2026 graduate, available immediately.

TECHNICAL SKILLS
Languages: JavaScript (ES6+), Java, SQL
Frontend: React.js, Redux, Zustand, React Router, HTML5, CSS3, Tailwind CSS, Material UI, Vite
Backend: Node.js, Express.js, Fastify, REST APIs, JWT Authentication, Role-Based Access Control
Databases: MongoDB, Mongoose, MySQL
Tools & Deployment: Git, GitHub, Postman, Swagger UI, Vitest, React Testing Library, Netlify, Render, Zoho Catalyst
Core CS: Data Structures & Algorithms, Object-Oriented Programming

FULL STACK PROJECTS
AQUACARE — Water Purifier Showcase & Service Platform (Freelance)
Live Demo: aquacare-ac.netlify.app
React.js, Vite, Material UI, Tailwind CSS, Zustand, Node.js, Fastify, MongoDB, JWT, Cloudinary
• Delivered a full stack platform for a local water purifier business with a filterable catalogue, enquiry forms, online service booking and an interactive 360-degree product viewer.
• Implemented an admin dashboard with product CRUD, Cloudinary uploads, enquiry and service-request workflows and live metrics, so the owner manages the site without a developer.
• Architected 28 REST endpoints with Fastify and MongoDB, secured with JWT cookies, bcrypt, Helmet and rate limiting, documented with Swagger UI and covered by node:test and Vitest tests.

CAMPUSHUB — Digital Campus Management Platform
Live Demo: campushub-ac.netlify.app
React.js, Redux, Vite, Material UI, Tailwind CSS, Node.js, Express.js, MySQL, JWT
• Developed a campus portal with announcements, event RSVPs, a marketplace, lost-and-found listings and a dashboard, using Material UI, Tailwind CSS and Redux for shared state.
• Secured the platform with JWT authentication and role-based access control across 3 roles, restricting announcement publishing to faculty and admins.
• Engineered 14 REST endpoints with Express.js and request validation that rejects malformed input before it reaches 5 MySQL tables.

ECOVISION CHENNAI — Circular Economy & Waste Management Platform
Live Demo: ecovision-ac.netlify.app
React.js, Vite, Material UI, Tailwind CSS, Node.js, Fastify, MongoDB, Mongoose, JWT, bcrypt, React-Leaflet
• Designed a multi-role platform connecting Chennai residents, scrap dealers, factories and administrators across 12 city zones, with a React-Leaflet map ranking facilities by distance.
• Implemented 4-tier role-based access control (customer, dealer, factory, admin) with JWT, bcrypt and Fastify role-guard middleware, with a dedicated workspace per role.
• Wrote an automated 8-step end-to-end workflow and access-control test suite, and added an in-memory data fallback so the app keeps working when MongoDB is unavailable.

EDUCATION
B.E., Computer Science & Engineering — Hindustan College of Engineering & Technology | CGPA: 8.11/10 (2022 – 2026)
HSC (Class XII) — Sakthi Matric Higher Secondary School, Chinnaselam | 83% (2021 – 2022)
SSLC (Class X) — Sakthi Matric Higher Secondary School, Chinnaselam | 89% (2019 – 2020)

CERTIFICATIONS
MongoDB Basics (MongoDB University, 2025) | JavaScript (Infosys, 2026) | Java (Infosys, 2026)

ACHIEVEMENTS
• Top 5 at EPICS Hackathon’25 (Ideathon), Karpagam College, May 2025, in a 4-member team presenting EcoVision.
• Solved 170+ problems on LeetCode in Java and SQL.
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: '#0f172a',
            color: '#f8fafc',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backgroundImage: 'none',
            maxHeight: '92vh',
          },
        }}
      >
        {/* Header Bar */}
        <DialogTitle
          sx={{
            m: 0,
            p: 2.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-teal-400"></span>
            <span className="font-bold text-white text-base sm:text-lg">
              Official Resume Preview — Akash A C
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Tooltip title="Copy ATS Plain Text">
              <Button
                size="small"
                variant="outlined"
                onClick={copyResumeText}
                startIcon={<ContentCopyIcon sx={{ fontSize: 15 }} />}
                sx={{
                  borderColor: 'rgba(255,255,255,0.15)',
                  color: '#94a3b8',
                  fontSize: '0.8rem',
                  '&:hover': { color: '#ffffff', borderColor: '#ffffff' }
                }}
              >
                Copy Text
              </Button>
            </Tooltip>

            <Tooltip title="Print / Save PDF">
              <Button
                size="small"
                variant="contained"
                onClick={handlePrint}
                startIcon={<PrintIcon sx={{ fontSize: 16 }} />}
                sx={{
                  background: 'linear-gradient(135deg, #14b8a6 0%, #0284c7 100%)',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                }}
              >
                Print / PDF
              </Button>
            </Tooltip>

            <IconButton onClick={onClose} size="small" sx={{ color: '#94a3b8' }}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>

        {/* Resume Sheet Content (Styled exactly like the PDF) */}
        <DialogContent sx={{ p: { xs: 2, sm: 4 }, bgcolor: '#0b1120' }}>
          <div className="bg-white text-slate-900 rounded-xl p-6 sm:p-10 shadow-2xl font-sans max-w-3xl mx-auto selection:bg-teal-200">
            {/* Resume Header */}
            <div className="text-center pb-4 border-b border-slate-300">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-1">
                AKASH A C
              </h1>
              <div className="text-sm sm:text-base font-bold text-slate-700 tracking-wide uppercase mb-2">
                FULL STACK DEVELOPER (MERN)
              </div>
              <div className="text-xs sm:text-sm text-slate-600 flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
                <span>+91 79042 35901</span>
                <span>•</span>
                <a href="mailto:akashanbarasu@gmail.com" className="text-blue-700 hover:underline">
                  akashanbarasu@gmail.com
                </a>
                <span>•</span>
                <span>Kallakurichi, Tamil Nadu</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 flex justify-center items-center gap-x-4 mt-1">
                <a
                  href="https://linkedin.com/in/akashanbarasu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline flex items-center gap-0.5"
                >
                  linkedin.com/in/akashanbarasu
                </a>
                <span>•</span>
                <a
                  href="https://github.com/AKASH142005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline flex items-center gap-0.5"
                >
                  github.com/AKASH142005
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="py-4 border-b border-slate-200">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-2 inline-block">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700">
                Full Stack Developer (MERN) with 3 deployed applications, including a freelance product-showcase and service-booking platform for a live client. Built 50+ REST endpoints across Node.js, Express.js and Fastify, with JWT authentication, 4-role access control, automated API and component tests, and MongoDB/MySQL. B.E. CSE 2026 graduate, available immediately.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="py-4 border-b border-slate-200">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-2.5 inline-block">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-1 text-xs sm:text-[13px] text-slate-800">
                <div>
                  <span className="font-bold">Languages:</span> JavaScript (ES6+), Java, SQL
                </div>
                <div>
                  <span className="font-bold">Frontend:</span> React.js, Redux, Zustand, React Router, HTML5, CSS3, Tailwind CSS, Material UI, Vite
                </div>
                <div>
                  <span className="font-bold">Backend:</span> Node.js, Express.js, Fastify, REST APIs, JWT Authentication, Role-Based Access Control
                </div>
                <div>
                  <span className="font-bold">Databases:</span> MongoDB, Mongoose, MySQL
                </div>
                <div>
                  <span className="font-bold">Tools & Deployment:</span> Git, GitHub, Postman, Swagger UI, Vitest, React Testing Library, Netlify, Render, Zoho Catalyst
                </div>
                <div>
                  <span className="font-bold">Core CS:</span> Data Structures & Algorithms, Object-Oriented Programming
                </div>
              </div>
            </div>

            {/* Full Stack Projects */}
            <div className="py-4 border-b border-slate-200">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-3 inline-block">
                FULL STACK PROJECTS
              </h2>

              {/* AquaCare */}
              <div className="mb-4">
                <div className="flex flex-wrap justify-between items-baseline">
                  <span className="font-bold text-xs sm:text-[13px] text-slate-900">
                    AQUACARE — Water Purifier Showcase & Service Platform (Freelance)
                  </span>
                  <a
                    href="https://aquacare-ac.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-700 font-semibold hover:underline"
                  >
                    Live Demo: aquacare-ac.netlify.app
                  </a>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 italic mb-1.5">
                  React.js, Vite, Material UI, Tailwind CSS, Zustand, Node.js, Fastify, MongoDB, JWT, Cloudinary
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-[12.5px] text-slate-700 leading-snug">
                  <li>Delivered a full stack platform for a local water purifier business with a filterable catalogue, enquiry forms, online service booking and an interactive 360-degree product viewer.</li>
                  <li>Implemented an admin dashboard with product CRUD, Cloudinary uploads, enquiry and service-request workflows and live metrics, so the owner manages the site without a developer.</li>
                  <li>Architected 28 REST endpoints with Fastify and MongoDB, secured with JWT cookies, bcrypt, Helmet and rate limiting, documented with Swagger UI and covered by node:test and Vitest tests.</li>
                </ul>
              </div>

              {/* CampusHub */}
              <div className="mb-4">
                <div className="flex flex-wrap justify-between items-baseline">
                  <span className="font-bold text-xs sm:text-[13px] text-slate-900">
                    CAMPUSHUB — Digital Campus Management Platform
                  </span>
                  <a
                    href="https://campushub-ac.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-700 font-semibold hover:underline"
                  >
                    Live Demo: campushub-ac.netlify.app
                  </a>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 italic mb-1.5">
                  React.js, Redux, Vite, Material UI, Tailwind CSS, Node.js, Express.js, MySQL, JWT
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-[12.5px] text-slate-700 leading-snug">
                  <li>Developed a campus portal with announcements, event RSVPs, a marketplace, lost-and-found listings and a dashboard, using Material UI, Tailwind CSS and Redux for shared state.</li>
                  <li>Secured the platform with JWT authentication and role-based access control across 3 roles, restricting announcement publishing to faculty and admins.</li>
                  <li>Engineered 14 REST endpoints with Express.js and request validation that rejects malformed input before it reaches 5 MySQL tables.</li>
                </ul>
              </div>

              {/* EcoVision */}
              <div>
                <div className="flex flex-wrap justify-between items-baseline">
                  <span className="font-bold text-xs sm:text-[13px] text-slate-900">
                    ECOVISION CHENNAI — Circular Economy & Waste Management Platform
                  </span>
                  <a
                    href="https://ecovision-ac.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-700 font-semibold hover:underline"
                  >
                    Live Demo: ecovision-ac.netlify.app
                  </a>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 italic mb-1.5">
                  React.js, Vite, Material UI, Tailwind CSS, Node.js, Fastify, MongoDB, Mongoose, JWT, bcrypt, React-Leaflet
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-[12.5px] text-slate-700 leading-snug">
                  <li>Designed a multi-role platform connecting Chennai residents, scrap dealers, factories and administrators across 12 city zones, with a React-Leaflet map ranking facilities by distance.</li>
                  <li>Implemented 4-tier role-based access control (customer, dealer, factory, admin) with JWT, bcrypt and Fastify role-guard middleware, with a dedicated workspace per role.</li>
                  <li>Wrote an automated 8-step end-to-end workflow and access-control test suite, and added an in-memory data fallback so the app keeps working when MongoDB is unavailable.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="py-4 border-b border-slate-200">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-2.5 inline-block">
                EDUCATION
              </h2>
              <div className="space-y-1.5 text-xs sm:text-[13px] text-slate-800">
                <div className="flex justify-between">
                  <span><strong>B.E., Computer Science & Engineering</strong> — Hindustan College of Engineering & Technology | CGPA: 8.11/10</span>
                  <span className="font-semibold text-slate-600">2022 – 2026</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>HSC (Class XII)</strong> — Sakthi Matric Higher Secondary School, Chinnaselam | 83%</span>
                  <span className="font-semibold text-slate-600">2021 – 2022</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>SSLC (Class X)</strong> — Sakthi Matric Higher Secondary School, Chinnaselam | 89%</span>
                  <span className="font-semibold text-slate-600">2019 – 2020</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="py-4 border-b border-slate-200">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-2 inline-block">
                CERTIFICATIONS
              </h2>
              <div className="text-xs sm:text-[13px] text-slate-800">
                MongoDB Basics (MongoDB University, 2025) &nbsp;|&nbsp; JavaScript (Infosys, 2026) &nbsp;|&nbsp; Java (Infosys, 2026)
              </div>
            </div>

            {/* Achievements */}
            <div className="pt-4">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-2 inline-block">
                ACHIEVEMENTS
              </h2>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-[13px] text-slate-700">
                <li>Top 5 at EPICS Hackathon’25 (Ideathon), Karpagam College, May 2025, in a 4-member team presenting EcoVision.</li>
                <li>Solved 170+ problems on LeetCode in Java and SQL.</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={copied}
        autoHideDuration={3000}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%', bgcolor: '#0f766e', color: '#ffffff' }}>
          Resume text copied to clipboard successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
