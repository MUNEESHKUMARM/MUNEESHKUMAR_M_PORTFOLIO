import React from 'react'

export const SKILL_CATEGORIES = {
  'Java': 'Object-Oriented & Enterprise Systems',
  'Python': 'Data Science, Backend & AI Logic',
  'C': 'Low-Level Systems & Memory Management',
  'JavaScript': 'Modern Dynamic Web Runtime',
  'React.js': 'Declarative UI Library',
  'FastAPI': 'High-Performance Asynchronous Python Web APIs',
  'Flutter': 'Cross-Platform Native App Framework',
  'NumPy': 'High-Dimensional Matrix & Tensor Computations',
  'Pandas': 'Data Analysis & Manipulation Library',
  'MySQL': 'Relational Database Engine',
  'MongoDB': 'Document-Based NoSQL Database',
  'SQLite': 'Embedded Local Persistence Engine',
  'Firebase': 'Realtime Cloud Services & Auth',
  'AWS (Basics)': 'Amazon Web Services Cloud Infrastructure',
  'Ollama': 'Local LLM Orchestration & Inference',
  'n8n': 'Workflow Automation & Agentic Nodes',
  'Zapier': 'Automated Integration Workflows',
  'Figma AI': 'Generative Interface & Design Intelligence',
  'Canva AI': 'Visual Media & Creative AI Generation',
  'REST APIs': 'System Interoperability & HTTP Contracts',
  'Data Structures & Algorithms': 'Computational Complexity & Optimization',
  'Operating Systems': 'Process Management, Threads & Memory',
  'Computer Networks': 'TCP/IP, OSI & Packet Protocols',
  'UI/UX Design': 'User Centric Systems & Micro-Interactions',
  'IoT Basics': 'Embedded Sensors & Hardware Interoperability',
  'Git & GitHub': 'Version Control & Distributed Workflow',
  'Docker': 'Containerization & OS Virtualization',
  'HTML / CSS': 'Web Structure, Layouts & Animations',
  'Power BI': 'Business Intelligence & Data Dashboards',
  'Figma / Canva': 'Interface Tooling & Visual Assets',
  'VS Code': 'Primary Development Environment',
  'Android Studio': 'Native Android App IDE',
  'PyCharm': 'Advanced Python IDE & Debugger',
  'Jupyter / Colab': 'Interactive Notebooks & Model Experimentation',
  'Eclipse': 'Java Enterprise IDE',
}

export const SKILL_LINKS = {
  'Java': 'https://www.java.com',
  'Python': 'https://www.python.org',
  'C': 'https://en.cppreference.com/w/c',
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'React.js': 'https://react.dev',
  'FastAPI': 'https://fastapi.tiangolo.com',
  'Flutter': 'https://flutter.dev',
  'NumPy': 'https://numpy.org',
  'Pandas': 'https://pandas.pydata.org',
  'MySQL': 'https://www.mysql.com',
  'MongoDB': 'https://www.mongodb.com',
  'SQLite': 'https://www.sqlite.org',
  'Firebase': 'https://firebase.google.com',
  'AWS (Basics)': 'https://aws.amazon.com',
  'Ollama': 'https://ollama.com',
  'n8n': 'https://n8n.io',
  'Zapier': 'https://zapier.com',
  'Figma AI': 'https://www.figma.com',
  'Canva AI': 'https://www.canva.com',
  'REST APIs': 'https://restfulapi.net',
  'Data Structures & Algorithms': 'https://www.geeksforgeeks.org/data-structures/',
  'Operating Systems': 'https://en.wikipedia.org/wiki/Operating_system',
  'Computer Networks': 'https://en.wikipedia.org/wiki/Computer_network',
  'UI/UX Design': 'https://www.figma.com/resource-library/ui-vs-ux-design/',
  'IoT Basics': 'https://en.wikipedia.org/wiki/Internet_of_things',
  'Git & GitHub': 'https://github.com',
  'Docker': 'https://www.docker.com',
  'HTML / CSS': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  'Power BI': 'https://powerbi.microsoft.com',
  'Figma / Canva': 'https://www.figma.com',
  'VS Code': 'https://code.visualstudio.com',
  'Android Studio': 'https://developer.android.com/studio',
  'PyCharm': 'https://www.jetbrains.com/pycharm/',
  'Jupyter / Colab': 'https://jupyter.org',
  'Eclipse': 'https://www.eclipse.org',
}

export const SKILL_ICONS = {
  'Java': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 19.5c5.5 1.5 10.5 1.5 16 0M6.5 21.5c4 1 7 1 11 0" stroke="#E76F00" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14.8 2.5c-1.8 2.2-1.2 4 0 5.8s.6 2.8-1.2 4.5" stroke="#5382A1" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10.8 4.8c-1.2 1.8-.6 3.4 0 4.8s.6 2.4-1.2 3.6" stroke="#E76F00" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7.8 15c4.5 1 8.5 1 8.5 0" stroke="#5382A1" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  'Python': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M11.9 0C5.8 0 6.2 2.7 6.2 2.7l.01 2.8H12.1v.8H3.7S0 5.8 0 12s3.2 5.9 3.2 5.9h1.9v-2.7s-.1-3.3 3.2-3.3h5.5s3.1 0 3.1-3V3.1S17.3 0 11.9 0zm-2.8 1.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#3776AB" />
      <path d="M12.1 24c6.1 0 5.7-2.7 5.7-2.7l-.01-2.8H11.9v-.8h8.4s3.7.4 3.7-5.7-3.2-5.9-3.2-5.9h-1.9v2.7s.1 3.3-3.2 3.3H10.2s-3.1 0-3.1 3v6.1s-.4 3.1 5 3.1zm2.8-1.8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#FFD43B" />
    </svg>
  ),
  'C': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 0L1.8 4.1v15.8L12 24l10.2-4.1V4.1L12 0z" fill="#A8B9CC" />
      <path d="M12 2.2L4.2 5.3v13.4L12 21.8l7.8-3.1V5.3L12 2.2z" fill="#283593" />
      <path d="M15.8 8.8c-.8-.8-1.9-1.3-3.3-1.3-2.6 0-4.5 1.9-4.5 4.5s1.9 4.5 4.5 4.5c1.4 0 2.5-.5 3.3-1.3" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  'JavaScript': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path d="M6.8 18.2c.9.5 2 .8 3.1.8 2.2 0 3.6-1.1 3.6-3.8V9H10.3v7.4c0 1.2-.5 1.7-1.5 1.7-.6 0-1.2-.2-1.7-.5l-.3 1.9zm8.4 0c1.2.6 2.7 1 4.1 1 3.3 0 5.2-1.7 5.2-4.3 0-2.5-1.5-3.7-3.9-4.7l-.8-.3c-1.5-.6-2.2-1.1-2.2-2.1 0-1 .9-1.7 2.3-1.7 1.3 0 2.3.4 3.1.9l.8-2.3c-.9-.6-2.2-.9-3.7-.9-3.2 0-5 1.8-5 4.1 0 2.4 1.4 3.6 3.8 4.6l.8.3c1.6.7 2.3 1.2 2.3 2.2 0 1.1-.9 1.9-2.5 1.9-1.5 0-2.8-.5-3.7-1.1l-.8 2.5z" fill="#000000" />
    </svg>
  ),
  'React.js': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.4">
        <ellipse cx="12" cy="12" rx="9" ry="3.4" />
        <ellipse cx="12" cy="12" rx="9" ry="3.4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  'FastAPI': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#059669" />
      <path d="M12.5 3L4.5 13.5h6.5l-1 7.5 9-11h-6.5l1.5-7z" fill="#FFFFFF" />
    </svg>
  ),
  'Flutter': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M14.3 2.2L3.8 12.7l3.5 3.5 14-14h-7z" fill="#47C5FB" />
      <path d="M14.3 11.5L8.7 17.1l5.6 5.6h7l-5.6-5.6 5.6-5.6h-7z" fill="#02569B" />
      <path d="M11.5 14.3l2.8 2.8-2.8 2.8h3.5l2.8-2.8-2.8-2.8h-3.5z" fill="#01579B" opacity="0.4" />
    </svg>
  ),
  'NumPy': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3.5 6.5v11L12 22l8.5-4.5v-11L12 2z" fill="#4D77CF" opacity="0.25" stroke="#4D77CF" strokeWidth="1.5" />
      <path d="M12 2l8.5 4.5L12 11 3.5 6.5 12 2z" fill="#4D77CF" opacity="0.45" />
      <path d="M12 11v11M12 11L3.5 6.5M12 11l8.5-4.5" stroke="#4D77CF" strokeWidth="1.6" />
      <path d="M7 8.5l10 7" stroke="#013243" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  ),
  'Pandas': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="4" height="18" rx="1.5" fill="#130754" />
      <rect x="8.5" y="7" width="4" height="14" rx="1.5" fill="#E70488" />
      <rect x="8.5" y="3" width="4" height="3" rx="1" fill="#130754" />
      <rect x="14" y="11" width="4" height="10" rx="1.5" fill="#FFCA00" />
      <rect x="14" y="6" width="4" height="4" rx="1" fill="#E70488" />
    </svg>
  ),
  'MySQL': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M21.5 12.5c-1.5-3.5-5-5.5-9-5-3.5.5-6.5 2.5-8 5.5 1 1.2 2.5 2 4 2s3.5-1 4.5-2.5c2 1.5 4.5 2 7 1.5z" fill="#00618A" />
      <path d="M16 9.5c1-1 3-1.5 4.5-.5s2 3 1 4-3 1.5-4.5.5-2-3-1-4z" fill="#E48E00" />
    </svg>
  ),
  'MongoDB': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 1.5s-6.2 5.8-6.2 11.5c0 3.4 2.8 6.2 6.2 6.2s6.2-2.8 6.2-6.2C18.2 7.3 12 1.5 12 1.5z" fill="#47A248" />
      <path d="M11.6 1.7v17.3c.3 0 .5 0 .8-.1V1.8c-.3 0-.5-.1-.8-.1z" fill="#FFFFFF" opacity="0.6" />
      <path d="M12 22.5c-.7 0-1.2-.5-1.2-1.2h2.4c0 .7-.5 1.2-1.2 1.2z" fill="#3F9142" />
    </svg>
  ),
  'SQLite': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3.5 6c0-1.7 3.8-3 8.5-3s8.5 1.3 8.5 3v12c0 1.7-3.8 3-8.5 3s-8.5-1.3-8.5-3V6z" fill="#003B57" opacity="0.25" />
      <ellipse cx="12" cy="6" rx="8.5" ry="3" stroke="#003B57" strokeWidth="1.6" />
      <path d="M3.5 6v6c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3V6" stroke="#003B57" strokeWidth="1.6" />
      <path d="M3.5 12v6c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3v-6" stroke="#003B57" strokeWidth="1.6" />
      <path d="M13.5 9.5l6-5" stroke="#41B883" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  'Firebase': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3.8 17.5L6.5 3.2l3.8 6.5-6.5 7.8z" fill="#FFC107" />
      <path d="M13.2 8.8l2.2-4.2L20.2 17.5 13.2 8.8z" fill="#FFA000" />
      <path d="M3.8 17.5l8.2 4.6 8.2-4.6-6.8-12.8-1.7 3.3-7.9 9.5z" fill="#FFCA28" />
      <path d="M12 22.1l-8.2-4.6 6.7-7.9L12 22.1z" fill="#F57C00" />
    </svg>
  ),
  'AWS (Basics)': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M6.7 8.3L4.4 13h1.9l.9-1.9h2.8l.9 1.9h2L10.6 8.3H6.7zm1.6 1.1l.9 1.8H6.5l.9-1.8zM13.8 11.1c0-.7.4-1.1 1.3-1.1h1.5v-.4c0-.4-.2-.6-.7-.6-.4 0-.8.1-1.1.3l-.4-1c.5-.3 1.2-.5 1.9-.5 1.4 0 2.1.7 2.1 1.8v3.2h-1.3v-.6c-.3.4-.9.7-1.6.7-.9 0-1.6-.6-1.6-1.8zm2.7.3v-.6h-1.2c-.4 0-.6.2-.6.5 0 .3.5.7.5.6 0 1.2-.2 1.5-.4z" fill="#FFFFFF" />
      <path d="M3.2 15.8c4 2.2 10.2 2.2 14.2 0" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16.5 14.8l2.2 1.4-1.4-2.2" fill="#FF9900" />
    </svg>
  ),
  'Ollama': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C7.03 2 3 6.03 3 11c0 3.54 2.05 6.6 5.03 8.04V22l3.97-2 3.97 2v-2.96C18.95 17.6 21 14.54 21 11c0-4.97-4.03-9-9-9z" fill="#FFFFFF" />
      <circle cx="9" cy="10" r="1.5" fill="#121316" />
      <circle cx="15" cy="10" r="1.5" fill="#121316" />
      <path d="M10 14.5h4" stroke="#121316" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  'n8n': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#FF6D5A" />
      <circle cx="6.5" cy="12" r="2.2" fill="#FFFFFF" />
      <circle cx="17.5" cy="6.5" r="2.2" fill="#FFFFFF" />
      <circle cx="17.5" cy="17.5" r="2.2" fill="#FFFFFF" />
      <path d="M6.5 12h11M6.5 12l11-5.5M6.5 12l11 5.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  'Zapier': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#FF4F00" />
      <path d="M4.5 12h15M12 4.5v15M6.7 6.7l10.6 10.6M17.3 6.7L6.7 17.3" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  'Figma AI': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M8 2h4v4H8z" fill="#F24E1E" />
      <path d="M12 2h4a4 4 0 010 8h-4V2z" fill="#FF7262" />
      <path d="M12 10h4a4 4 0 010 8h-4v-8z" fill="#1ABCFE" />
      <path d="M8 18a4 4 0 014-4v4a4 4 0 01-4 4 4 4 0 01-4-4z" fill="#0ACF83" />
      <path d="M8 10a4 4 0 014-4v8H8a4 4 0 010-8z" fill="#A259FF" />
      <path d="M19 2l.7 1.5L21 4.2l-1.3.7L19 6.4l-.7-1.5L17 4.2l1.3-.7L19 2z" fill="#FFD43B" />
    </svg>
  ),
  'Canva AI': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="url(#canvaGrad)" />
      <path d="M14.5 8.5C13.5 7.5 12 7 10 7c-3.5 0-5.5 2.5-5.5 6.5s2 6.5 5.5 6.5c2.2 0 3.8-.8 4.8-2l-1.5-1.5c-.7.8-1.8 1.3-3.3 1.3-2 0-3.3-1.3-3.3-4.3s1.3-4.3 3.3-4.3c1.3 0 2.3.5 3 1.2l1.7-1.7z" fill="#FFFFFF" />
      <path d="M18.5 2.5l.6 1.3L20.5 4.4l-1.4.6L18.5 6.3l-.6-1.3-1.4-.6 1.4-.6L18.5 2.5z" fill="#FFD700" />
      <defs>
        <linearGradient id="canvaGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C4CC" />
          <stop offset="1" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
    </svg>
  ),
  'REST APIs': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="4.5" width="19" height="15" rx="3.5" stroke="#60A5FA" strokeWidth="1.8" fill="rgba(96, 165, 250, 0.12)" />
      <path d="M6 9.5l3 2.5-3 2.5M11.5 14.5h5" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'Data Structures & Algorithms': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="4.5" r="2.5" fill="#F59E0B" />
      <circle cx="5.5" cy="18" r="2.5" fill="#3B82F6" />
      <circle cx="18.5" cy="18" r="2.5" fill="#10B981" />
      <path d="M10.8 6.7L7.2 15.8M13.2 6.7l3.6 9.1M8 18h8" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  'Operating Systems': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="3.5" width="19" height="17" rx="3" stroke="#34D399" strokeWidth="1.8" fill="rgba(52, 211, 153, 0.12)" />
      <path d="M6.5 8h2.5M11.5 8h6M6.5 12h11M6.5 16h4.5" stroke="#34D399" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  'Computer Networks': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" fill="#818CF8" />
      <circle cx="4" cy="5.5" r="2" fill="#818CF8" />
      <circle cx="20" cy="5.5" r="2" fill="#818CF8" />
      <circle cx="4" cy="18.5" r="2" fill="#818CF8" />
      <circle cx="20" cy="18.5" r="2" fill="#818CF8" />
      <path d="M5.6 7L10 10.3M18.4 7L14 10.3M5.6 17L10 13.7M18.4 17L14 13.7" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  'UI/UX Design': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#EC4899" strokeWidth="1.8" fill="rgba(236, 72, 153, 0.12)" />
      <path d="M3 9h18M9 9v12" stroke="#EC4899" strokeWidth="1.5" />
      <circle cx="6" cy="6" r="1" fill="#EC4899" />
      <circle cx="9" cy="6" r="1" fill="#EC4899" />
    </svg>
  ),
  'IoT Basics': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="6" width="12" height="12" rx="2" fill="rgba(6, 182, 212, 0.25)" stroke="#06B6D4" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.5" fill="#06B6D4" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  'Git & GitHub': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M10.8 1.7l-9.1 9.1a1.8 1.8 0 000 2.5l9.1 9.1a1.8 1.8 0 002.5 0l2.3-2.3" stroke="#F05032" strokeWidth="1.8" fill="none" />
      <circle cx="7" cy="12" r="1.5" fill="#F05032" />
      <circle cx="11.5" cy="7.5" r="1.5" fill="#F05032" />
      <path d="M7 12l4.5-4.5" stroke="#F05032" strokeWidth="1.5" />
      <path d="M17.5 7A5.5 5.5 0 0012 12.5c0 2.4 1.6 4.5 3.8 5.2.3.1.4-.1.4-.3v-1.1c-1.5.3-1.9-.7-1.9-.7-.3-.6-.6-.8-.6-.8-.5-.3.1-.3.1-.3.6.1.9.6.9.6.5.9 1.3.6 1.7.5.1-.4.2-.6.4-.8-1.2-.1-2.5-.6-2.5-2.7 0-.6.2-1.1.6-1.5 0-.2-.3-.7.1-1.5 0 0 .5-.2 1.5.6a5.3 5.3 0 012.8 0c1-.8 1.5-.6 1.5-.6.4.8.1 1.3.1 1.5.4.4.6.9.6 1.5 0 2.1-1.3 2.6-2.5 2.7.2.2.4.5.4 1v1.5c0 .2.1.4.4.3A5.5 5.5 0 0023 12.5 5.5 5.5 0 0017.5 7z" fill="#FFFFFF" />
    </svg>
  ),
  'Docker': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M1.5 13.5c1 3.5 4.5 6 9 6 6.5 0 11-4.5 11.5-10H1.5v4z" fill="#2496ED" />
      <rect x="4" y="9.5" width="2.5" height="2.5" rx="0.5" fill="#2496ED" />
      <rect x="7.5" y="9.5" width="2.5" height="2.5" rx="0.5" fill="#2496ED" />
      <rect x="11" y="9.5" width="2.5" height="2.5" rx="0.5" fill="#2496ED" />
      <rect x="7.5" y="6" width="2.5" height="2.5" rx="0.5" fill="#2496ED" />
      <rect x="11" y="6" width="2.5" height="2.5" rx="0.5" fill="#2496ED" />
      <rect x="14.5" y="9.5" width="2.5" height="2.5" rx="0.5" fill="#2496ED" />
    </svg>
  ),
  'HTML / CSS': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M1 2.5l1 11.5L6.5 16l4.5-2L12 2.5H1z" fill="#E34F26" />
      <path d="M3.5 5.5h6l-.2 2.2H3.8l.2 2.2h5.6l-.4 3-2.7.8-2.7-.8-.2-1.5H2.2l.3 2.7 4 1.2 4-1.2.5-5.2H3.7L3.5 5.5z" fill="#FFFFFF" />
      <path d="M13 2.5l1 11.5L18.5 16l4.5-2L24 2.5H13z" fill="#1572B6" />
      <path d="M15.5 5.5h6l-.2 2.2h-3.8l.2 2.2h3.4l-.4 3-2.2.6-2.2-.6-.1-1.5h-1.4l.2 2.5 3.5 1 3.5-1 .5-5.2h-4.8L15.5 5.5z" fill="#FFFFFF" />
    </svg>
  ),
  'Power BI': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="12" width="4.5" height="9" rx="1" fill="#F2C811" />
      <rect x="9.75" y="7" width="4.5" height="14" rx="1" fill="#F2C811" />
      <rect x="17" y="2" width="4.5" height="19" rx="1" fill="#F2C811" />
      <path d="M2.5 12h4.5v9H2.5z" fill="#E6AD12" opacity="0.3" />
    </svg>
  ),
  'Figma / Canva': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 3h3v3H3z" fill="#F24E1E" />
      <path d="M6 3h3a3 3 0 010 6H6V3z" fill="#FF7262" />
      <path d="M6 9h3a3 3 0 010 6H6V9z" fill="#1ABCFE" />
      <path d="M3 15a3 3 0 013-3v3a3 3 0 01-3 3 3 3 0 01-3-3z" fill="#0ACF83" />
      <path d="M3 9a3 3 0 013-3v6H3a3 3 0 010-6z" fill="#A259FF" />
      <circle cx="17.5" cy="12" r="5.5" fill="url(#figmaCanvaGrad)" />
      <path d="M18.8 10.2c-.5-.5-1.2-.7-2.1-.7-1.8 0-2.8 1.3-2.8 3.4s1 3.4 2.8 3.4c1.1 0 1.9-.4 2.4-1l-.8-.8c-.4.4-.9.7-1.6.7-1 0-1.7-.7-1.7-2.2s.7-2.2 1.7-2.2c.7 0 1.2.3 1.5.6l.7-.9z" fill="#FFFFFF" />
      <defs>
        <linearGradient id="figmaCanvaGrad" x1="12" y1="6.5" x2="23" y2="17.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C4CC" />
          <stop offset="1" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
    </svg>
  ),
  'VS Code': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M17.5 1.5l5 2.2v16.6l-5 2.2-10.5-10L17.5 1.5z" fill="#0065A9" />
      <path d="M17.5 1.5L7 11.5 2.2 7.8.8 8.8l4.2 3.7-4.2 3.7 1.4 1L7 13.5l10.5 10V1.5z" fill="#007ACC" />
      <path d="M17.5 6L9.5 12.5l8 6.5V6z" fill="#1F9CF0" />
    </svg>
  ),
  'Android Studio': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5.5 14.5a6.5 6.5 0 0113 0H5.5z" fill="#3DDC84" />
      <circle cx="8.8" cy="11.2" r="1.1" fill="#FFFFFF" />
      <circle cx="15.2" cy="11.2" r="1.1" fill="#FFFFFF" />
      <path d="M6.8 5.8l2.2 3.2M17.2 5.8l-2.2 3.2" stroke="#3DDC84" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 16h18v1.5H3V16z" fill="#34A853" />
    </svg>
  ),
  'PyCharm': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#21D789" />
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#121316" />
      <path d="M5 6h5v2H5V6zm0 3h7v1.8H5V9zm0 3h4v1.8H5V12z" fill="#FFFFFF" />
      <path d="M14 13h5v5h-5v-5z" fill="#21D789" />
      <path d="M12 18h7v1.5h-7V18z" fill="#FFFFFF" />
    </svg>
  ),
  'Jupyter / Colab': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="12" r="3.2" fill="#F37626" />
      <path d="M1.5 12c0-1.8 2-3.2 4.5-3.2s4.5 1.4 4.5 3.2-2 3.2-4.5 3.2S1.5 13.8 1.5 12z" stroke="#F37626" strokeWidth="1.2" fill="none" />
      <circle cx="9" cy="7" r="0.9" fill="#F37626" />
      <circle cx="3" cy="17" r="0.9" fill="#616161" />
      <path d="M15.5 9.5a2.5 2.5 0 00-2.5 2.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1.4-1.1-2.5-2.5-2.5zm5 0a2.5 2.5 0 00-2.5 2.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1.4-1.1-2.5-2.5-2.5z" fill="#F9AB00" />
      <path d="M18 10a2 2 0 00-1.8 1.2c.4.5 1 0 1.8 0s1.4.5 1.8 0A2 2 0 0018 10z" fill="#E37400" />
    </svg>
  ),
  'Eclipse': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9.5" fill="#2C2255" stroke="#F7941E" strokeWidth="1.5" />
      <path d="M5.5 12c0-3.6 2.9-6.5 6.5-6.5 1.9 0 3.6.8 4.8 2.2-2.7.5-4.8 2.9-4.8 5.8s2.1 5.3 4.8 5.8c-1.2 1.4-2.9 2.2-4.8 2.2-3.6 0-6.5-2.9-6.5-6.5z" fill="#FFFFFF" opacity="0.9" />
      <path d="M3 10h18M3 14h18" stroke="#F7941E" strokeWidth="1" opacity="0.7" />
    </svg>
  ),
  'JWT': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3z" fill="#D63AF9" opacity="0.25" stroke="#D63AF9" strokeWidth="1.6" />
      <path d="M12 6.5a2.5 2.5 0 00-2.5 2.5v1.5h-1v5h7v-5h-1V9A2.5 2.5 0 0012 6.5zm1 4h-2V9a1 1 0 012 0v1.5z" fill="#D63AF9" />
    </svg>
  ),
  'SMTP': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="#00C4CC" strokeWidth="1.6" fill="rgba(0, 196, 204, 0.15)" />
      <path d="M3.5 7.5l8.5 5.5 8.5-5.5" stroke="#00C4CC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}
