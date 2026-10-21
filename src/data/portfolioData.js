export const portfolioData = {
  personalInfo: {
    name: "Akash A C",
    role: "Full Stack Developer (MERN)",
    tagline: "Building high-performance, secure, and production-ready web applications with modern frontend & robust backend systems.",
    phone: "+91 79042 35901",
    email: "akashanbarasuz@gmail.com",
    location: "Kallakurichi, Tamil Nadu, India",
    linkedin: "https://linkedin.com/in/akashanbarasu",
    linkedinHandle: "linkedin.com/in/akashanbarasu",
    github: "https://github.com/AKASH142005",
    githubHandle: "github.com/AKASH142005",
    leetcode: "https://leetcode.com/u/AKASH142005/",
    summary: "Full Stack Developer (MERN) with 3 deployed applications, including a freelance product-showcase and service-booking platform for a live client. Built 50+ REST endpoints across Node.js, Express.js and Fastify, with JWT authentication, 4-role access control, automated API and component tests, and MongoDB/MySQL. B.E. CSE 2026 graduate, available immediately.",
    statusBadge: "Available Immediately • B.E. CSE 2026",
    metrics: [
      { label: "Deployed Apps", value: "3", suffix: "", desc: "Live in production" },
      { label: "REST Endpoints", value: "50+", suffix: "", desc: "Fastify & Express APIs" },
      { label: "LeetCode Solved", value: "170+", suffix: "", desc: "Java & SQL" },
      { label: "Degree CGPA", value: "8.11", suffix: "/10", desc: "B.E. Computer Science" },
    ]
  },

  skills: {
    languages: [
      { name: "JavaScript (ES6+)", level: 90, icon: "Code", tags: ["Async/Await", "Closures", "ESNext"] },
      { name: "Java", level: 85, icon: "Coffee", tags: ["OOPs", "Collections", "Algorithms"] },
      { name: "SQL", level: 82, icon: "Database", tags: ["Complex Joins", "Indexes", "Normalization"] },
    ],
    frontend: [
      { name: "React.js", level: 92, icon: "Atom", tags: ["Hooks", "Custom Hooks", "Context"] },
      { name: "Redux & Zustand", level: 88, icon: "Layers", tags: ["State Management", "Selectors"] },
      { name: "Material UI (MUI)", level: 92, icon: "Palette", tags: ["Custom Themes", "Responsive UI", "MUI Icons"] },
      { name: "Tailwind CSS", level: 95, icon: "Wind", tags: ["Glassmorphism", "Dark Mode", "Utility-First"] },
      { name: "HTML5 & CSS3", level: 95, icon: "Layout", tags: ["Flexbox", "Grid", "Animations"] },
      { name: "React Router & Vite", level: 90, icon: "Zap", tags: ["Client-side Routing", "Fast Bundling"] },
    ],
    backend: [
      { name: "Node.js", level: 88, icon: "Server", tags: ["Event Loop", "Streams", "Buffers"] },
      { name: "Fastify", level: 86, icon: "Cpu", tags: ["Schema Validation", "High Speed", "Plugins"] },
      { name: "Express.js", level: 90, icon: "Network", tags: ["Middleware", "Routers", "Error Handlers"] },
      { name: "REST APIs", level: 94, icon: "Globe", tags: ["50+ Endpoints Built", "CRUD", "Swagger UI"] },
      { name: "JWT & Auth", level: 92, icon: "Key", tags: ["HttpOnly Cookies", "Bcrypt", "RBAC"] },
      { name: "Role-Based Access Control", level: 92, icon: "ShieldCheck", tags: ["4-Tier Hierarchy", "Guards"] },
    ],
    databases: [
      { name: "MongoDB & Mongoose", level: 90, icon: "Database", tags: ["Aggregations", "Schema Models", "Indexing"] },
      { name: "MySQL", level: 85, icon: "HardDrive", tags: ["Relational Schema", "Transactions", "Foreign Keys"] },
    ],
    toolsDeployment: [
      { name: "Git & GitHub", icon: "GitBranch", tags: ["Version Control", "PRs", "Workflows"] },
      { name: "Postman & Swagger UI", icon: "FileCode", tags: ["API Docs", "Testing Collections"] },
      { name: "Vitest & React Testing Library", icon: "CheckSquare", tags: ["Unit Tests", "Component Tests"] },
      { name: "Cloudinary", icon: "Image", tags: ["Asset Uploads", "Transformations"] },
      { name: "Netlify & Render", icon: "Cloud", tags: ["CI/CD", "Production Deployments"] },
      { name: "Zoho Catalyst", icon: "Box", tags: ["Serverless", "Cloud Services"] },
    ],
    coreCS: [
      { name: "Data Structures & Algorithms", icon: "Binary", desc: "170+ LeetCode problems solved in Java & SQL" },
      { name: "Object-Oriented Programming (OOP)", icon: "Boxes", desc: "Inheritance, Polymorphism, Encapsulation, Abstraction" },
      { name: "Web Security & Performance", icon: "Lock", desc: "Helmet, rate-limiting, CORS, input sanitization" },
    ]
  },

  projects: [
    {
      id: "aquacare",
      title: "AquaCare",
      subtitle: "Water Purifier Showcase & Service Platform (Freelance)",
      type: "Freelance Client Project",
      badge: "Freelance • Production Deployed",
      status: "Live in Production",
      liveDemo: "https://aquacare-ac.netlify.app",
      github: "https://github.com/AKASH142005",
      accentColor: "#06b6d4",
      bgGradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
      overview: "A comprehensive full-stack commercial web application built for a local water purifier enterprise, featuring 360° product exploration, instant booking workflows, and an autonomous owner dashboard.",
      techStack: [
        "React.js",
        "Vite",
        "Material UI",
        "Tailwind CSS",
        "Zustand",
        "Node.js",
        "Fastify",
        "MongoDB",
        "JWT",
        "Cloudinary"
      ],
      highlights: [
        "Delivered a full stack platform for a local water purifier business with a filterable catalogue, enquiry forms, online service booking and an interactive 360-degree product viewer.",
        "Implemented an admin dashboard with product CRUD, Cloudinary uploads, enquiry and service-request workflows and live metrics, so the owner manages the site without a developer.",
        "Architected 28 REST endpoints with Fastify and MongoDB, secured with JWT cookies, bcrypt, Helmet and rate limiting, documented with Swagger UI and covered by node:test and Vitest tests."
      ],
      metrics: [
        { label: "REST Endpoints", value: "28" },
        { label: "Auth & Security", value: "JWT + Helmet + Bcrypt" },
        { label: "Testing Coverage", value: "node:test + Vitest" },
        { label: "Client Impact", value: "Autonomous Owner Admin" },
      ],
      features: [
        "Interactive 360° product viewer for enhanced purifier visualization",
        "Multi-criteria filterable product catalogue by capacity, stages & price",
        "Direct enquiry form & doorstep service booking system",
        "Admin control center with Cloudinary media management & lead status pipeline",
        "Comprehensive Swagger UI documentation for all 28 Fastify endpoints"
      ]
    },
    {
      id: "campushub",
      title: "CampusHub",
      subtitle: "Digital Campus Management Platform",
      type: "Enterprise Campus Portal",
      badge: "Campus Ecosystem • Live Demo",
      status: "Live in Production",
      liveDemo: "https://campushub-ac.netlify.app",
      github: "https://github.com/AKASH142005",
      accentColor: "#3b82f6",
      bgGradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
      overview: "An interconnected digital ecosystem engineered for colleges to streamline notices, lost & found items, peer student marketplace, and official department announcements with role safety.",
      techStack: [
        "React.js",
        "Redux",
        "Vite",
        "Material UI",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MySQL",
        "JWT"
      ],
      highlights: [
        "Developed a campus portal with announcements, event RSVPs, a marketplace, lost-and-found listings and a dashboard, using Material UI, Tailwind CSS and Redux for shared state.",
        "Secured the platform with JWT authentication and role-based access control across 3 roles, restricting announcement publishing to faculty and admins.",
        "Engineered 14 REST endpoints with Express.js and request validation that rejects malformed input before it reaches 5 MySQL tables."
      ],
      metrics: [
        { label: "REST Endpoints", value: "14" },
        { label: "RBAC Roles", value: "3 Roles (Student/Faculty/Admin)" },
        { label: "Relational Schema", value: "5 MySQL Tables" },
        { label: "State Layer", value: "Redux Global Store" },
      ],
      features: [
        "Official campus announcements with strict faculty/admin role authorization",
        "Interactive event RSVP tracker with live attendee counts",
        "Student peer-to-peer textbook & gear marketplace",
        "Lost-and-found resolution pipeline with photo tagging",
        "Strict Express request validation middleware protecting relational integrity"
      ]
    },
    {
      id: "ecovision",
      title: "EcoVision Chennai",
      subtitle: "Circular Economy & Waste Management Platform",
      type: "Hackathon Award Winner",
      badge: "EPICS Hackathon Top 5 • Live Demo",
      status: "Live in Production",
      liveDemo: "https://ecovision-ac.netlify.app",
      github: "https://github.com/AKASH142005",
      accentColor: "#10b981",
      bgGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      overview: "An award-winning multi-stakeholder green tech platform designed to eliminate waste and optimize circular recycling chains across 12 Chennai municipal zones with distance mapping.",
      techStack: [
        "React.js",
        "Vite",
        "Material UI",
        "Tailwind CSS",
        "Node.js",
        "Fastify",
        "MongoDB",
        "Mongoose",
        "JWT",
        "bcrypt",
        "React-Leaflet"
      ],
      highlights: [
        "Designed a multi-role platform connecting Chennai residents, scrap dealers, factories and administrators across 12 city zones, with a React-Leaflet map ranking facilities by distance.",
        "Implemented 4-tier role-based access control (customer, dealer, factory, admin) with JWT, bcrypt and Fastify role-guard middleware, with a dedicated workspace per role.",
        "Wrote an automated 8-step end-to-end workflow and access-control test suite, and added an in-memory data fallback so the app keeps working when MongoDB is unavailable."
      ],
      metrics: [
        { label: "RBAC Hierarchy", value: "4 Distinct Tiers" },
        { label: "City Zones", value: "12 Chennai Zones" },
        { label: "Map Engine", value: "React-Leaflet Geospatial" },
        { label: "Fault Tolerance", value: "In-Memory Fallback" },
      ],
      features: [
        "Interactive React-Leaflet GIS map ranking scrap recycling facilities by proximity",
        "4-tier RBAC guard middleware isolating Customer, Dealer, Factory, and Admin workspaces",
        "Automated 8-step E2E lifecycle and authorization validation test suite",
        "High-availability architecture featuring automatic in-memory data fallback",
        "Recognized in Top 5 at EPICS Hackathon'25 among competitive collegiate teams"
      ]
    }
  ],

  education: [
    {
      degree: "B.E. in Computer Science & Engineering",
      institution: "Hindustan College of Engineering & Technology",
      period: "2022 – 2026",
      score: "CGPA: 8.11 / 10",
      status: "Final Year Student • Available Immediately",
      details: [
        "Core Coursework: Data Structures & Algorithms, Database Management Systems, Object Oriented Programming, Operating Systems, Computer Networks.",
        "Hands-on expertise architecting full-stack MERN & Fastify web applications.",
        "Top 5 Finalist at EPICS Hackathon'25 representing the college."
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC - Class XII)",
      institution: "Sakthi Matric Higher Secondary School, Chinnaselam",
      period: "2021 – 2022",
      score: "83%",
      status: "Completed",
      details: [
        "Major: Physics, Chemistry, Mathematics, and Computer Science.",
        "Strong foundation in algorithmic thinking and mathematical problem solving."
      ]
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC - Class X)",
      institution: "Sakthi Matric Higher Secondary School, Chinnaselam",
      period: "2019 – 2020",
      score: "89%",
      status: "Completed",
      details: [
        "Graduated with distinction and academic honors in Science and Mathematics."
      ]
    }
  ],

  certifications: [
    {
      title: "MongoDB Basics",
      issuer: "MongoDB University",
      year: "2025",
      type: "Database Certification",
      skillsLearned: "Document Model, CRUD, Aggregation Pipelines, Indexes, Atlas Deployment",
      credentialUrl: "https://university.mongodb.com/",
    },
    {
      title: "JavaScript Certification",
      issuer: "Infosys",
      year: "2026",
      type: "Language Specialization",
      skillsLearned: "ES6+, Functional Programming, Async/Promises, Scope Chains, DOM",
      credentialUrl: "https://www.infosys.com/",
    },
    {
      title: "Java Certification",
      issuer: "Infosys",
      year: "2026",
      type: "Language Specialization",
      skillsLearned: "Object-Oriented Design, Collections Framework, Exception Handling, Multi-threading basics",
      credentialUrl: "https://www.infosys.com/",
    }
  ],

  achievements: [
    {
      title: "Top 5 at EPICS Hackathon’25 (Ideathon)",
      organization: "Karpagam College",
      date: "May 2025",
      type: "Hackathon Award",
      description: "Secured Top 5 position in a competitive 4-member team ideating and developing EcoVision Chennai, an end-to-end circular economy and waste management platform with real-time geospatial distance calculation.",
      badge: "Top 5 Finalist"
    },
    {
      title: "170+ Problems Solved on LeetCode",
      organization: "LeetCode",
      date: "Ongoing",
      type: "Competitive Coding",
      description: "Demonstrated strong algorithmic foundations and data structure mastery by solving 170+ algorithmic problems across Java and SQL, covering Arrays, Two Pointers, Trees, Hash Maps, and Database optimization.",
      badge: "170+ Solved"
    }
  ]
};
