import React, { useEffect, useMemo, useState } from 'react'

const RESUME_DRIVE_LINK = 'https://drive.google.com/file/d/1P52hfxNY6wWmF578ZggxgfWkLViJ_s-Y/view?usp=sharing'

const FIGMA_ASSETS = {
  profile:
    'https://www.figma.com/api/mcp/asset/dff3c27f-9bb0-495a-814d-d028504359df.png',
  arrow:
    'https://www.figma.com/api/mcp/asset/403f1f52-1996-454a-8f47-aa1307fa6d49.svg',
  resume:
    'https://www.figma.com/api/mcp/asset/b47e31c7-c5b6-4903-8460-a0fc792752b1.svg',
  file:
    'https://www.figma.com/api/mcp/asset/7c4fbd5a-8300-4d72-9b39-29ddffb5b67e.svg',
  linkedin:
    'https://www.figma.com/api/mcp/asset/150e052d-3817-426d-b975-a795ec27733a.svg',
  github:
    'https://www.figma.com/api/mcp/asset/50041288-7c42-4ca5-bc11-e36b5f038e1f.svg',
  cert1:
    'https://www.figma.com/api/mcp/asset/84fd74c1-7ec8-4b46-aae1-734064c8ce31.svg',
  preview:
    'https://www.figma.com/api/mcp/asset/6c4eb1f3-5913-4915-98cc-d4f9beb1223a.svg',
  cert2:
    'https://www.figma.com/api/mcp/asset/e300de25-0f0d-4f31-a0b9-1f3f5ef4cdf4.svg',
  cert3:
    'https://www.figma.com/api/mcp/asset/159c2e3c-0c96-4778-93d2-31afaa548d8a.svg',
  ext:
    'https://www.figma.com/api/mcp/asset/ade59689-539b-4f88-8166-8bbdb0cd5dc2.svg',
  connect:
    'https://www.figma.com/api/mcp/asset/39c34ef3-f9f7-4852-9a1b-9c2b7670dd66.svg',
}

const navItems = [
  ['HOME', 'home'],
  ['ABOUT', 'about'],
  ['SKILLS', 'skills'],
  ['EDUCATION', 'education'],
  ['EXPERIENCE', 'experience'],
  ['PROJECTS', 'projects'],
  ['CERTIFICATIONS', 'certifications'],
  ['CONTACT', 'contact'],
]

const skills = [
  {
    title: 'PROGRAMMING LANGUAGES',
    foot: 'CORE LOGIC & SYSTEM SYNTAX',
    items: ['Java', 'Python', 'C', 'JavaScript'],
  },
  {
    title: 'FRAMEWORKS & LIBRARIES',
    foot: 'WEB, APIS & DATA PIPELINES',
    items: ['React.js', 'FastAPI', 'Flutter', 'NumPy', 'Pandas'],
  },
  {
    title: 'DATABASES & CLOUD',
    foot: 'PERSISTENCE & CLOUD INFRA',
    items: ['MySQL', 'MongoDB', 'SQLite', 'Firebase', 'AWS (Basics)'],
  },
  {
    title: 'AI & LLM WORKFLOWS',
    foot: 'AUTOMATION & INTELLIGENCE',
    items: ['Ollama', 'n8n', 'Zapier', 'Figma AI', 'Canva AI'],
    accentItems: ['Ollama', 'n8n'],
  },
  {
    title: 'CORE COMPUTER SCIENCE & ENGINEERING CONCEPTS',
    foot: 'THEORETICAL FOUNDATION & ARCHITECTURE',
    wide: true,
    items: ['REST APIs', 'Data Structures & Algorithms', 'Operating Systems', 'Computer Networks', 'UI/UX Design', 'IoT Basics'],
  },
  {
    title: 'WEB TOOLS & DEVOPS',
    foot: 'VERSION CONTROL & PRODUCT TOOLING',
    items: ['Git & GitHub', 'Docker', 'HTML / CSS', 'Power BI', 'Figma / Canva'],
  },
  {
    title: 'PLATFORMS & IDES',
    foot: 'DEVELOPMENT ENVIRONMENTS',
    items: ['VS Code', 'Android Studio', 'PyCharm', 'Jupyter / Colab', 'Eclipse'],
  },
]

const education = [
  {
    date: 'APRIL 2023',
    side: 'SCORE: 70.33%',
    title: 'Government Higher Secondary School',
    location: 'Seithur, Tamil Nadu',
    body: 'Higher Secondary Certificate (HSC) — Completed foundational science and mathematical coursework.',
  },
  {
    date: 'AUGUST 2023 – AUGUST 2025',
    side: 'FOUNDATIONAL PHASE',
    title: 'Arul Tharum VPMM College of Engineering and Technology',
    location: 'Krishnankoil, Tamil Nadu',
    body: 'Bachelor of Technology — Information Technology (Initial Years)',
    note: '↳ Transferred onward to AAA College of Engineering and Technology',
  },
  {
    date: 'AUGUST 2025 – AUGUST 2027',
    side: 'CGPA: 8.20 / 10',
    title: 'AAA College of Engineering and Technology',
    location: 'Sivakasi, Tamil Nadu',
    body: 'Bachelor of Technology in Information Technology. Rigorous focus on full-stack web software, algorithmic optimization, database management systems, and applied artificial intelligence.',
    current: true,
  },
]

const RESUME_DOC = {
  title: 'MUNEESHKUMAR M — RESUME PREVIEW',
  driveUrl: RESUME_DRIVE_LINK,
  embedUrl: 'https://drive.google.com/file/d/1P52hfxNY6wWmF578ZggxgfWkLViJ_s-Y/view?usp=sharing',
}

const certifications = [
  {
    issuer: 'ISSUER: GOOGLE / COURSERA',
    title: 'Technical Support Fundamentals',
    body: 'Foundational training covering modern computing hardware, operating systems, networking fundamentals, customer service mechanics, and troubleshooting.',
    icon: FIGMA_ASSETS.cert1,
    brand: '★ GOOGLE / COURSERA',
    driveUrl: 'https://drive.google.com/file/d/1z8Kymnig1TmaccmqafMC0CKP-QZbLZbA/view?usp=sharing',
    embedUrl: 'https://drive.google.com/file/d/1z8Kymnig1TmaccmqafMC0CKP-QZbLZbA/preview',
  },
  {
    issuer: 'ISSUER: TCS iON',
    title: 'Career Edge - Young Professional',
    body: 'Comprehensive industry-readiness certification focusing on workplace professional conduct, business communication, and presentation aptitude.',
    icon: FIGMA_ASSETS.cert2,
    brand: '★ TCS iON',
    driveUrl: 'https://drive.google.com/file/d/1nVEaCD8RZhShTILiPO93qHcEAPGMYEtn/view?usp=sharing',
    embedUrl: 'https://drive.google.com/file/d/1nVEaCD8RZhShTILiPO93qHcEAPGMYEtn/preview',
  },
  {
    issuer: 'ISSUER: AWS CLOUD',
    title: 'AWS Cloud Practitioner Essentials',
    body: 'AWS Cloud Practitioner Essentials: Cloud compute instances, storage buckets, security architecture, IAM roles, and cloud networking paradigms.',
    icon: FIGMA_ASSETS.cert3,
    brand: '★ AWS CLOUD',
    driveUrl: 'https://drive.google.com/file/d/1la640CSgH9gnMCBArbZi_xuc2dXYNg8i/view?usp=sharing',
    embedUrl: 'https://drive.google.com/file/d/1la640CSgH9gnMCBArbZi_xuc2dXYNg8i/preview',
  },
  {
    issuer: 'ISSUER: NAAN MUDHALVAN / HCL',
    title: 'Naan Mudhalvan EBPL Certificate',
    body: 'Enterprise training on workplace readiness, corporate communication, software engineering practices, and digital workflows by HCL.',
    icon: FIGMA_ASSETS.cert1,
    brand: '★ NAAN MUDHALVAN / HCL',
    driveUrl: 'https://drive.google.com/file/d/17NymX-J3WVgb6Buwz13rfqyWxqhqf29s/view?usp=sharing',
    embedUrl: 'https://drive.google.com/file/d/17NymX-J3WVgb6Buwz13rfqyWxqhqf29s/preview',
  },
]

function ScrollLink({ id, children, className = '', ...props }) {
  return (
    <a
      href={`#${id}`}
      className={className}
      onClick={(event) => {
        event.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }}
      {...props}
    >
      {children}
    </a>
  )
}

function SectionHeading({ id, title, subtitle, pill }) {
  return (
    <div className="section-heading">
      <div className="divider" />
      <div className="section-head-row">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        {pill && <div className="status-pill">{pill}</div>}
      </div>
    </div>
  )
}

function GlassSkillCard({ skill }) {
  return (
    <article className={`glass-card skill-card ${skill.wide ? 'wide' : ''}`}>
      <div className="skill-inner">
        <header className="card-line">
          <span>{skill.title}</span>
          <i />
        </header>
        <div className="tag-cloud">
          {skill.items.map((item) => (
            <span key={item} className={skill.accentItems?.includes(item) ? 'accent' : ''}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <footer className="card-foot">{skill.foot}</footer>
    </article>
  )
}

function TimelineCard({ item, index }) {
  return (
    <div className="timeline-item">
      <div className={`timeline-dot ${item.current ? 'current' : ''}`} />
      <article className={`timeline-card ${item.current ? 'current-card' : ''}`}>
        <div className="timeline-top">
          <span className="mini-badge">{item.date}</span>
          <span className={`timeline-side ${item.current ? 'gold' : ''}`}>{item.side}</span>
        </div>
        <h3>{item.title}</h3>
        <p className="muted mono">{item.location}</p>
        <p className="body-copy">{item.body}</p>
        {item.note && <div className="timeline-note">{item.note}</div>}
        {item.current && <span className="current-ribbon">CURRENT ENROLLMENT</span>}
      </article>
    </div>
  )
}

function Internship({ number, title, subtitle, date, stack, stages, cards, highlight = false }) {
  return (
    <article className="glass-card internship-card">
      <div className="internship-header">
        <div>
          <span className={`eyebrow ${highlight ? 'gold-border' : ''}`}>{title.toUpperCase()}</span>
          <h3>{subtitle.company}</h3>
          <p className="muted mono">{subtitle.role}</p>
        </div>
        <div className="internship-meta">
          <span>{date}</span>
          <small>Duration: 2 Months</small>
        </div>
      </div>

      {stages ? (
        <div className="workflow-row">
          {stages.map((stage, idx) => (
            <div key={stage} className={`workflow-box ${idx === 2 ? 'active' : ''}`}>
              {String(idx + 1).padStart(2, '0')} {stage}
            </div>
          ))}
        </div>
      ) : (
        <div className="stack-section">
          <div className="tiny-label">ENGINEERING ARCHITECTURE STACK:</div>
          <div className="pipeline-row">
            {stack.map((item, idx) => (
              <React.Fragment key={item}>
                <span className={idx >= 3 && idx <= 4 ? 'pipeline-chip active' : 'pipeline-chip'}>{item}</span>
                {idx !== stack.length - 1 && <span className="arrow">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="responsibility-grid">
        {cards.map((card, index) => (
          <div className="responsibility-card" key={`${number}-${index}`}>
            <span className="card-kicker">{card.title}</span>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

function ProjectCard({ variant = 'finance' }) {
  const isFinance = variant === 'finance'
  return (
    <article className="glass-card project-card">
      <div className="project-content">
        <div className="project-copy">
          <div className="project-type"><span className="project-dot" /> {isFinance ? 'FLUTTER & SQLITE' : 'REACT & FASTAPI'}</div>
          <h3>{isFinance ? 'Expense Mate' : 'AI-Driven Cyber Digital Twin Platform'}</h3>
          <p className="project-subtitle">{isFinance ? 'Personal Finance Management App' : 'Secure Full-Stack Cybersecurity & Real-Time Reporting Platform'}</p>
          <p className="body-copy">
            {isFinance
              ? 'Developed a Flutter-based finance management app for expense tracking, budgeting, and financial analytics. Designed with a clean mobile UI that guarantees seamless offline-first capability alongside cloud authentication.'
              : 'Engineered a secure full-stack Cyber Digital Twin platform. Features robust authentication, email OTP verification, RESTful APIs, role-based access control (RBAC), and a modular scalable backend architecture designed for digital twin visualization, threat monitoring, risk prediction, and real-time dashboard reporting.'}
          </p>
          <div className="tiny-label">{isFinance ? 'VERIFIED SYSTEM FEATURES:' : 'VERIFIED ARCHITECTURAL CAPABILITIES:'}</div>
          <div className="feature-grid">
            {(isFinance
              ? ['Firebase Authentication', 'SQLite Secure Local Storage', 'Budget Tracking & Alerts', 'Category-wise Expense Insights']
              : ['JWT Auth & Email OTP Verification', 'Role-Based Access Control (RBAC)', 'Digital Twin Threat Visualization', 'Risk Prediction & Real-Time Reporting']
            ).map((item) => (
              <div className="feature-chip" key={item}><span />{item}</div>
            ))}
          </div>
          <div className="tech-row">
            {(isFinance ? ['Flutter', 'SQLite', 'Firebase', 'Analytics'] : ['React.js', 'FastAPI', 'MySQL', 'JWT', 'Python', 'SMTP']).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        {isFinance ? <FinanceVisual /> : <CyberVisual />}
      </div>
    </article>
  )
}

function FinanceVisual() {
  return (
    <div className="project-visual finance-single-visual">
      <div className="visual-header"><span>EXPENSE_MATE.FLUTTER_UI</span><strong>MOBILE APPLICATION</strong></div>
      <div className="single-mobile-container">
        <div className="single-mobile-frame">
          <img src="/expense_mate_phone_only.png" alt="Expense Mate Flutter Mobile App Overview Screen" />
          <span className="mobile-frame-tag">Flutter App Overview</span>
        </div>
        <a href="/ExpenseMate.apk" download="ExpenseMate.apk" className="apk-download-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          DOWNLOAD APK (64 MB)
        </a>
      </div>
      <div className="visual-footer"><span>SQLite Local DB</span><span>Firebase Auth Verified</span></div>
      <div className="visual-glare" />
    </div>
  )
}

function CyberVisual() {
  return (
    <div className="project-visual cyber">
      <div className="cyber-grid" />
      <div className="visual-header"><span>CYBER_TWIN_NODE.01</span><strong className="green-status"><i /> THREAT MONITORED</strong></div>
      <div className="visual-body">
        <div className="api-card">
          <div><small>FASTAPI REST ENDPOINT</small><small>ROLE: ADMIN</small></div>
          <b>/api/v1/twin/risk-matrix</b>
          <div className="risk-meter"><span /></div>
        </div>
        <div className="api-row"><span>OTP DISPATCH: <b>ACTIVE</b></span><span>JWT PROTOCOL: <b>HS256</b></span></div>
      </div>
      <div className="visual-footer"><span>Modular Scalable Backend</span><span>Real-Time Dashboard</span></div>
    </div>
  )
}

function CertificationCard({ cert, onPreview }) {
  return (
    <article className="glass-card cert-card">
      <div className="cert-top">
        <div className="cert-icon"><img src={cert.icon} alt="" /></div>
        <button className="preview-button" onClick={() => onPreview(cert)} type="button"><img src={FIGMA_ASSETS.preview} alt="" /> PREVIEW</button>
      </div>
      <div className="cert-issuer">{cert.issuer}</div>
      <h3>{cert.title}</h3>
      <p>{cert.body}</p>
      <div className="cert-footer"><span>VERIFIED COMPLETION</span><strong>{cert.brand}</strong></div>
    </article>
  )
}

function ContactCard({ flipped, onFlip }) {
  return (
    <div className="business-card-wrap">
      <button className="business-card" onClick={onFlip} aria-label="Flip contact card" type="button">
        <div className={`card-face card-front ${flipped ? 'is-back' : ''}`}>
          <div className="card-top"><span className="card-identity"><i /> DEVELOPER IDENTITY CARD</span><b>CLICK TO FLIP ↻</b></div>
          <div className="card-main"><h3>MUNEESHKUMAR M</h3><p>Full Stack Developer • Flutter • AI Applications</p><span>B.Tech Information Technology</span></div>
          <div className="card-bottom"><span>Tamil Nadu, India</span><strong>muneeshkumar.tech@gmail.com</strong></div>
        </div>
        <div className={`card-face card-back ${flipped ? 'is-active' : ''}`}>
          <div className="card-top"><span className="card-identity"><i /> DIRECT CHANNELS</span><b>CLICK TO FLIP ↻</b></div>
          <div className="contact-lines">
            {[
              ['EMAIL', 'muneeshkumar.tech@gmail.com'],
              ['LINKEDIN', 'linkedin.com/in/muneeshkumar-m'],
              ['GITHUB', 'github.com/MUNEESHKUMARM'],
              ['PHONE', '+91 9543572692'],
            ].map(([label, value]) => (
              <div className="contact-line" key={label}><span>{label}</span><strong>{value}</strong></div>
            ))}
          </div>
          <div className="card-bottom"><span>Verified Identity</span><strong>Available for Hire</strong></div>
        </div>
      </button>
      <div className="helper-text">Hover or click the visiting card to inspect contact channels</div>
    </div>
  )
}

function DocPreviewModal({ doc, onClose }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
  }, [doc])

  useEffect(() => {
    if (!doc) return
    const handleKeyDown = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [doc, onClose])

  if (!doc) return null

  return (
    <div className="resume-modal-backdrop" onClick={onClose}>
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <h3><i /> {doc.title.toUpperCase()}</h3>
          <div className="resume-modal-actions">
            <a
              href={doc.driveUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-button gold-text compact"
              style={{ padding: '6px 14px', fontSize: '11px' }}
            >
              Open Drive ↗
            </a>
            <button className="resume-close-btn" onClick={onClose} aria-label="Close modal">✕</button>
          </div>
        </div>
        <div className="modal-iframe-wrapper">
          {loading && (
            <div className="modal-loading-indicator">
              <div className="modal-gold-spinner" />
              <span>Loading Google Document Preview...</span>
            </div>
          )}
          <iframe
            src={doc.embedUrl}
            className={`resume-modal-iframe ${loading ? 'iframe-loading' : 'iframe-ready'}`}
            title={doc.title}
            allow="autoplay"
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState('home')
  const [typedIndex, setTypedIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [previewDoc, setPreviewDoc] = useState(null)

  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '', website: '' })
  const [formStatus, setFormStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setStatusMessage('')

    const trimmedName = contactForm.name.trim()
    const trimmedEmail = contactForm.email.trim()
    const trimmedMessage = contactForm.message.trim()

    if (!trimmedName || trimmedName.length < 2) {
      setFormStatus('error')
      setStatusMessage('Please enter your name (at least 2 characters).')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setFormStatus('error')
      setStatusMessage('Please enter a valid email address.')
      return
    }

    if (!trimmedMessage || trimmedMessage.length < 5) {
      setFormStatus('error')
      setStatusMessage('Please enter a message (at least 5 characters).')
      return
    }

    if (contactForm.website && contactForm.website.trim().length > 0) {
      setFormStatus('success')
      setStatusMessage('Your message has been sent successfully!')
      setContactForm({ name: '', email: '', message: '', website: '' })
      return
    }

    setFormStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setFormStatus('success')
        setStatusMessage(result.message || 'Your message has been sent successfully!')
        setContactForm({ name: '', email: '', message: '', website: '' })
        setTimeout(() => {
          setFormStatus('idle')
          setStatusMessage('')
        }, 7000)
      } else {
        setFormStatus('error')
        setStatusMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setFormStatus('error')
      setStatusMessage('Something went wrong. Please try again.')
    }
  }

  const rotatingPhrases = useMemo(() => [
    'Building Modern Web Applications',
    'Designing Flutter Experiences',
    'Exploring AI-Powered Architectures',
    'Solving Problems with Clean Code',
  ], [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-25% 0px -65% 0px', threshold: 0.02 },
    )
    navItems.forEach(([, id]) => document.getElementById(id) && observer.observe(document.getElementById(id)))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => setTypedIndex((prev) => (prev + 1) % rotatingPhrases.length), 2600)
    return () => window.clearInterval(timer)
  }, [rotatingPhrases.length])

  useEffect(() => {
    const dot = document.querySelector('.cursor-dot')
    const ring = document.querySelector('.cursor-ring')
    const move = (event) => {
      if (!dot || !ring) return
      dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
      ring.style.transform = `translate(${event.clientX - 18}px, ${event.clientY - 18}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <main className="site-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />

      <header className="floating-nav">
        <div className="nav-core">
          <a className="nav-logo" href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) }} aria-label="Home"><i /><span>MUNEESH</span></a>
          <nav>
            {navItems.map(([label, id]) => (
              <ScrollLink key={id} id={id} className={active === id ? 'active' : ''}>{label}</ScrollLink>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="nav-resume" onClick={() => setPreviewDoc(RESUME_DOC)} type="button"><img src={FIGMA_ASSETS.resume} alt="" /> RESUME</button>
            <ScrollLink id="contact" className="nav-connect">Connect <img src={FIGMA_ASSETS.connect} alt="" /></ScrollLink>
          </div>
        </div>
      </header>

      <section id="home" className="workspace">
        <div className="monitor-topbar">
          <div className="window-controls"><i /><i /><i /></div>
          <div className="availability"><span><i /> Available for Opportunities</span><small>Tamil Nadu, IN</small></div>
        </div>

        <div className="home-content">
          <div className="hello-pill"><i /> HELLO, I'M</div>
          <h1>MUNEESHKUMAR <span>M</span></h1>
          <div className="role-line">FULL STACK DEVELOPER • FLUTTER DEVELOPER • AI ENTHUSIAST</div>
          <div className="typing-line"><b>&gt;</b> {rotatingPhrases[typedIndex]}<span>_</span></div>
          <p className="hero-copy">B.Tech IT student who builds, solves, and learns fast. Designing and developing high-performance web systems, Flutter mobile applications, and AI-assisted architectures with verified engineering rigor.</p>
          <div className="hero-actions">
            <ScrollLink id="projects" className="gold-button">EXPLORE MY WORK <img src={FIGMA_ASSETS.arrow} alt="" /></ScrollLink>
            <button className="glass-button gold-text" onClick={() => setPreviewDoc(RESUME_DOC)} type="button"><img src={FIGMA_ASSETS.resume} alt="" /> PREVIEW RESUME <i /></button>
            <ScrollLink id="contact" className="glass-button">LET'S CONNECT <i /></ScrollLink>
          </div>
          <div className="summary-badges">
            {[
              ['DEGREE', 'B.Tech IT', 'CGPA 8.20 / 10'],
              ['FOCUS', 'Full Stack & AI', 'React • FastAPI'],
              ['MOBILE', 'Flutter Dev', 'SQLite & Firebase'],
              ['LOCATION', 'Tamil Nadu', 'Rajapalayam, IN'],
            ].map(([a, b, c]) => (
              <div className="summary-badge" key={a}><small>{a}</small><strong>{b}</strong><span>{c}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-block about-grid">
        <div className="portrait-card glass-card">
          <div className="portrait-frame">
            <div className="portrait-top"><span>ID: MKM-2027</span><strong>AUTHENTICATED</strong></div>
            <div className="portrait-image"><img src={FIGMA_ASSETS.profile} alt="Portrait of Muneeshkumar M" /></div>
            <div className="portrait-caption"><h3>MUNEESHKUMAR M</h3><span>Full Stack & Mobile Engineer</span></div>
            <div className="portrait-bottom"><span>Rajapalayam, TN</span><strong>+91 9543572692</strong></div>
          </div>
        </div>

        <div className="about-copy">
          <span className="eyebrow">PROFESSIONAL STATEMENT</span>
          <h2>Architecting clean solutions through <span>fast iteration.</span></h2>
          <div className="quote-block">
            <p>“B.Tech IT student who builds, solves, and learns fast. Focused on <mark>Flutter</mark>, <mark>Full Stack Development</mark>, and <mark>AI-powered applications</mark>. Hands-on experience developing practical web and mobile applications through internships and projects.</p>
            <p>Strong foundation in <b>Java</b>, <b>React</b>, <b>FastAPI</b>, <b>SQL</b>, <b>REST APIs</b>, and <b>database integration</b>. Driven to write clean code, solve real-world problems, and create impactful user-focused solutions.”</p>
          </div>
          <div className="metric-row">
            <div className="metric-card"><span>Academic Standing</span><strong>8.20 <small>/ 10 CGPA</small></strong><em>AAA College of Eng. & Tech</em></div>
            <div className="metric-card"><span>Work Experience</span><strong>2 <small>Internships</small></strong><em>AB Tech & CodTech IT</em></div>
            <div className="metric-card"><span>Engineering Focus</span><strong>Full Stack</strong><em>Web, Mobile & AI Pipelines</em></div>
          </div>
          <div className="about-links">
            <button className="gold-button compact" onClick={() => setPreviewDoc(RESUME_DOC)} type="button"><img src={FIGMA_ASSETS.file} alt="" /> View Full Resume (PDF/Doc)</button>
            <a className="glass-button compact" href="https://github.com/MUNEESHKUMARM" target="_blank" rel="noreferrer"><img src={FIGMA_ASSETS.github} alt="" /> github.com/MUNEESHKUMARM</a>
            <a className="glass-button compact" href="https://www.linkedin.com/in/muneeshkumar-m" target="_blank" rel="noreferrer"><img src={FIGMA_ASSETS.linkedin} alt="" /> linkedin.com/in/muneeshkumar-m</a>
          </div>
        </div>
      </section>

      <section id="skills" className="section-block">
        <SectionHeading title="TECHNICAL SKILLS" subtitle="Structured capability matrix derived strictly from engineering resume." pill="STATUS: PRODUCTION VERIFIED" />
        <div className="skills-grid">
          {skills.map((skill) => <GlassSkillCard key={skill.title} skill={skill} />)}
        </div>
      </section>

      <section id="education" className="section-block">
        <SectionHeading title="EDUCATION TIMELINE" subtitle="Chronological academic progression from high school to engineering graduation." />
        <div className="timeline">
          {education.map((item, index) => <TimelineCard item={item} index={index} key={item.title} />)}
        </div>
      </section>

      <section id="experience" className="section-block">
        <SectionHeading title="EXPERIENCE PIPELINE" subtitle="Structured workflow stages highlighting contributions at technology internships." />
        <div className="stack-list">
          <Internship
            number="01"
            title="FULL STACK INTERNSHIP"
            subtitle={{ company: 'CodTech IT Solutions', role: 'Full Stack Web Development Intern' }}
            date="Jul 2025 – Aug 2025"
            stack={['HTML', 'CSS', 'JavaScript', 'React.js', 'FastAPI', 'WebSocket', 'MySQL', 'Git & GitHub']}
            highlight
            cards={[
              { title: '01 // WEATHER APPLICATION', body: 'Developed a responsive Weather Application using HTML, CSS, JavaScript, and REST APIs with real-time data fetching from public APIs.' },
              { title: '02 // COLLABORATIVE DOC EDITOR', body: 'Built a real-time collaborative document editor using React.js, FastAPI, WebSocket, and MySQL, enabling multiple users to edit documents simultaneously.' },
              { title: '03 // VERSION CONTROL & WORKFLOW', body: 'Managed version control and collaborative workflows using Git and GitHub throughout agile development sprints.' },
            ]}
          />
          <Internship
            number="02"
            title="WEB DEVELOPMENT INTERNSHIP"
            subtitle={{ company: 'AB Technologies', role: 'Web Development Intern' }}
            date="Nov 2025 – Dec 2025"
            stages={['DISCOVER', 'DESIGN', 'DEVELOP', 'DELIVER']}
            cards={[
              { title: 'USER AUTH INTERFACE', body: 'Designed and implemented a responsive user login interface using HTML, CSS, and JavaScript, elevating accessibility and responsive usability.' },
              { title: 'AI-ASSISTED PORTFOLIO CREATION', body: 'Built a responsive personal portfolio website using AI-assisted development tools, HTML, CSS, and JavaScript to showcase projects, skills, and achievements.' },
            ]}
          />
        </div>
      </section>

      <section id="projects" className="section-block">
        <SectionHeading title="SELECTED PROJECTS" subtitle="Deep-dive technical showcases directly authored and verified from the resume." pill="2 FEATURED REPOSITORIES" />
        <div className="project-list">
          <ProjectCard variant="finance" />
          <ProjectCard variant="cyber" />
        </div>
      </section>

      <section id="certifications" className="section-block">
        <SectionHeading title="CERTIFICATIONS" subtitle="Verified industry certifications and professional training milestones." />
        <div className="cert-grid">
          {certifications.map((cert) => <CertificationCard cert={cert} key={cert.title} onPreview={(item) => setPreviewDoc(item)} />)}
        </div>
      </section>

      <section id="contact" className="section-block contact-section">
        <SectionHeading title="LET'S CONNECT" subtitle="Direct communication portal and interactive executive business card." />
        <div className="contact-grid">
          <ContactCard flipped={flipped} onFlip={() => setFlipped((value) => !value)} />
          <div className="glass-card contact-form-card">
            <form onSubmit={handleContactSubmit} noValidate>
              <div style={{ display: 'none' }} aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={contactForm.website}
                  onChange={handleInputChange}
                />
              </div>
              <label>
                YOUR NAME
                <input
                  name="name"
                  type="text"
                  placeholder="e.g. Elena Rostova"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  disabled={formStatus === 'loading'}
                />
              </label>
              <label>
                WORK EMAIL
                <input
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  disabled={formStatus === 'loading'}
                />
              </label>
              <label>
                MESSAGE
                <textarea
                  name="message"
                  placeholder="Discuss an engineering project, team opening, or collaboration..."
                  value={contactForm.message}
                  onChange={handleInputChange}
                  disabled={formStatus === 'loading'}
                />
              </label>
              <button
                className="send-button"
                type="submit"
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? (
                  'SENDING...'
                ) : formStatus === 'success' ? (
                  'MESSAGE SENT ✓'
                ) : formStatus === 'error' ? (
                  'TRY AGAIN'
                ) : (
                  <>SEND MESSAGE <img src={FIGMA_ASSETS.arrow} alt="" /></>
                )}
              </button>
              {statusMessage && (
                <div className={`form-status-message ${formStatus}`} role="alert">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div><strong>MUNEESHKUMAR M</strong> <span>— Built with curiosity, code & continuous learning.</span></div>
        <div className="footer-links">
          <button className="footer-resume-link" onClick={() => setPreviewDoc(RESUME_DOC)} type="button">Resume Preview ↗</button><span>•</span>
          <a href="https://www.linkedin.com/in/muneeshkumar-m" target="_blank" rel="noreferrer">LinkedIn</a><span>•</span>
          <a href="https://github.com/MUNEESHKUMARM" target="_blank" rel="noreferrer">GitHub</a><span>•</span>
          <a href="mailto:muneeshkumar.tech@gmail.com">Email</a><span>•</span>
          <ScrollLink id="home">Portfolio</ScrollLink>
        </div>
        <div>© 2026 // RAJAPALAYAM, TAMIL NADU</div>
      </footer>

      <DocPreviewModal doc={previewDoc} onClose={() => setPreviewDoc(null)} />

      <div className="cursor-ring" />
      <div className="cursor-dot" />
      <div className="corner-orb" />
    </main>
  )
}
