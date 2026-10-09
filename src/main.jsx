import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness,
  Check, ChevronDown, Code2, Mail, Menu, Sparkles, Terminal,
  X, GraduationCap, Layers3, MoveUpRight, Send, UserRound, Command, Zap,
  ExternalLink, Globe2, Database, Cpu, Palette, Smartphone, CircleDot
} from 'lucide-react'
import './styles.css'

const projects = [
  { id:'01', title:'TruthLens', category:'AI / NLP', tag:'INTELLIGENCE', desc:'An AI-powered misinformation analysis concept exploring statement classification, NLP pipelines, and external information sources.', stack:['Python','FastAPI','Hugging Face','React'], icon:BrainCircuit, color:'lavender', featured:true },
  { id:'02', title:'OpenHealth AI', category:'AI / Healthcare', tag:'HEALTH TECH', desc:'An AI-assisted healthcare platform concept combining symptom classification, transformer models, and a database-backed web experience.', stack:['Python','DistilBERT','FastAPI','SQLite'], icon:Cpu, color:'mint', featured:true },
  { id:'03', title:'SafeQR', category:'Backend / FinTech', tag:'BACKEND SYSTEMS', desc:'An invoice-focused payment workflow with QR request concepts, expiry handling, payment-state tracking, and amount verification.', stack:['Python','FastAPI','SQLAlchemy','UUID'], icon:Code2, color:'peach', featured:true },
  { id:'04', title:'SVS Enterprises', category:'Web Development', tag:'WEB EXPERIENCE', desc:'A responsive business website for loan and real-estate services, with contact flows, WhatsApp integration, and map functionality.', stack:['React','JavaScript','Tailwind CSS','Vercel'], icon:Globe2, color:'pink', featured:false },
  { id:'05', title:'Crop Recommendation System', category:'AI / ML', tag:'APPLIED ML', desc:'A machine learning application concept that recommends suitable crops from agricultural input data through a simple interface.', stack:['Python','Machine Learning','Streamlit','Tkinter'], icon:Layers3, color:'lime', featured:false },
  { id:'06', title:'Image Recognition Chatbot', category:'Computer Vision', tag:'COMPUTER VISION', desc:'A concept combining image understanding and conversational interaction, exploring deep learning and visual input workflows.', stack:['Python','Deep Learning','Computer Vision','Firebase'], icon:Sparkles, color:'blue', featured:false },
]

const skillGroups = [
  { name:'Programming languages', icon:Terminal, description:'The foundations I build with.', items:['Python','Java','JavaScript'] },
  { name:'Frontend development', icon:Palette, description:'Interfaces with clarity and character.', items:['HTML5','CSS3','React','Tailwind CSS','Vite'] },
  { name:'Backend & APIs', icon:Code2, description:'Application logic and integration.', items:['FastAPI','Flask','REST APIs'] },
  { name:'Databases', icon:Database, description:'Organizing and working with data.', items:['SQLite','MySQL','SQLAlchemy'] },
  { name:'AI & machine learning', icon:BrainCircuit, description:'Exploring intelligent applications.', items:['NLP','Hugging Face','DistilBERT','Deep Learning'] },
  { name:'Tools & platforms', icon:Command, description:'The workflow around the code.', items:['Git','GitHub','Postman','Vercel','Streamlit'] },
]

const learning = [
  { name:'ChatGPT Prompt Engineering for Developers', org:'DeepLearning.AI', type:'Course' },
  { name:'Website UI/UX Designing using ChatGPT', org:'Simplilearn', type:'Certificate' },
  { name:'What Is Generative AI', org:'LinkedIn Learning', type:'Certificate' },
  { name:'Deep Learning Internship', org:'Practical learning experience', type:'Internship' },
  { name:'Multiplayer Crossword with Gemini, Flutter & Firebase', org:'Learning badge', type:'Badge' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All work')
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive:true })
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        reveal.unobserve(entry.target)
      }
    }), { threshold:.12 })
    document.querySelectorAll('.reveal').forEach(el => reveal.observe(el))
    return () => { window.removeEventListener('scroll', onScroll); reveal.disconnect() }
  }, [filter])

  const shownProjects = useMemo(() => {
    if (filter === 'All work') return projects
    if (filter === 'AI / ML') return projects.filter(p => p.category.startsWith('AI /'))
    return projects.filter(p => p.category === filter)
  }, [filter])
  const closeMenu = () => setMenuOpen(false)
  const email = 'nangunurusanjay123@gmail.com'

  return <div className="portfolio">
    <div className="grain" aria-hidden="true" />
    <div className="aurora aurora-a" aria-hidden="true" />
    <div className="aurora aurora-b" aria-hidden="true" />
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <a href="#home" className="wordmark" onClick={closeMenu} aria-label="Sanjay home"><span className="wordmark-icon">s<span>.</span></span><span>NS<span className="wordmark-muted"> / PORTFOLIO</span></span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="primary-navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav id="primary-navigation" aria-label="Main navigation" className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Capabilities</a><a href="#work" onClick={closeMenu}>Selected work</a><a href="#journey" onClick={closeMenu}>Journey</a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero wrap" id="home">
        <div className="hero-main">
          <div className="hero-kicker"><span className="kicker-line"/><span>DEVELOPER PORTFOLIO · 2026</span><span className="kicker-live"><i/> AVAILABLE FOR OPPORTUNITIES</span></div>
          <h1>Ideas into<br/><span className="hero-gradient">interfaces</span><span className="hero-period">.</span><br/><span className="hero-outline">And logic into impact.</span></h1>
          <p className="hero-intro">I'm <strong>Nangunuru Sanjay</strong>, a Computer Science graduate exploring the space between thoughtful software engineering, full-stack experiences, and AI-powered products.</p>
          <div className="hero-roles"><span>Python Developer</span><b>✳</b><span>Java Developer</span><b>✳</b><span>Full-Stack Developer</span></div>
          <div className="hero-actions"><a href="#work" className="btn btn-light">Explore selected work <ArrowDownRight size={17}/></a><a href="#contact" className="text-link">Let's talk <MoveUpRight size={16}/></a></div>
          <div className="hero-foot"><span><GraduationCap size={16}/> B.Tech · Computer Science & Engineering</span><span className="foot-separator"/><span>Batch of 2026</span></div>
        </div>
        <div className="hero-art" aria-label="Decorative profile illustration">
          <div className="art-orbit orbit-a"/><div className="art-orbit orbit-b"/><div className="art-orbit orbit-c"/>
          <div className="art-cross cross-a">✳</div><div className="art-cross cross-b">✦</div><div className="art-cross cross-c">+</div>
          <div className="profile-frame">
            <div className="frame-top"><span>FIG. 01 / SANJAY</span><span className="frame-status"><i/> PROFILE</span></div>
            <div className="portrait-photo">
              <img className="profile-photo" src={`${import.meta.env.BASE_URL}assets/profile-photo.jpg`} alt="Portrait of Nangunuru Sanjay" />
            </div>
            <div className="frame-name">Nangunuru Sanjay <ArrowUpRight size={18}/></div>
            <div className="frame-role">Developer · Builder · Curious mind</div>
            <div className="frame-bottom"><span>PYTHON</span><span>JAVA</span><span>REACT</span><span>AI / ML</span></div>
          </div>
          <div className="floating-note note-top"><span className="note-icon"><Terminal size={17}/></span><span><b>Thoughtful code</b><small>Built to solve real problems</small></span></div>
          <div className="floating-note note-bottom"><span className="note-icon note-icon-pink"><Zap size={17}/></span><span><b>Always evolving</b><small>Learn · Build · Improve</small></span></div>
          <div className="art-caption">SCROLL TO EXPLORE <ArrowDownRight size={13}/></div>
        </div>
        <div className="hero-index"><span>01</span><span className="index-rule"/><span>05</span></div>
      </section>

      <section className="intro-strip"><div className="wrap strip-inner"><span className="strip-label">CURRENT FOCUS</span><div className="strip-track"><span>SOFTWARE ENGINEERING</span><i>✳</i><span>BACKEND SYSTEMS</span><i>✳</i><span>AI-POWERED PRODUCTS</span><i>✳</i><span>FULL-STACK EXPERIENCES</span></div></div></section>

      <section className="section wrap" id="about">
        <div className="section-label reveal"><span>01</span><span className="label-rule"/><span>ABOUT ME</span></div>
        <div className="about-layout">
          <h2 className="section-title reveal">A little curiosity.<br/><em>A lot of possibility.</em></h2>
          <div className="about-copy reveal"><p className="about-lead">I enjoy turning complex ideas into clear, useful digital experiences.</p><p>My interests include Python and Java development, full-stack web applications, backend APIs, and AI/ML integrations. I like understanding how the pieces fit together, from the data layer to the details people interact with.</p><p>This portfolio brings together selected projects and technologies I've explored. The descriptions distinguish concepts and ongoing work from features that may already be implemented.</p><a href="#skills" className="inline-arrow">A closer look at my toolkit <ArrowRight size={16}/></a></div>
        </div>
        <div className="about-bottom reveal"><div className="about-metric"><strong>06</strong><span>PROJECTS<br/>FEATURED</span></div><div className="about-metric"><strong>03</strong><span>DEVELOPER<br/>PATHS</span></div><div className="about-metric metric-note"><Sparkles size={18}/><span>Built with curiosity.<br/>Driven by progress.</span></div><div className="about-quote">“The best way to learn is to build, test, and keep improving.”</div></div>
      </section>

      <section className="section skills-section" id="skills"><div className="wrap">
        <div className="section-label reveal"><span>02</span><span className="label-rule"/><span>CAPABILITIES</span></div>
        <div className="section-head-row"><h2 className="section-title reveal">The tools behind<br/><em>the thinking.</em></h2><p className="section-side-copy reveal">A growing toolkit across programming, application development, data, and AI. React is a library; Python, Java, and JavaScript are programming languages.</p></div>
        <div className="capability-grid">{skillGroups.map((g,i)=>{const Icon=g.icon;return <article className="capability-card reveal" key={g.name} style={{'--i':i}}><div className="cap-top"><span>0{i+1}</span><Icon size={20} strokeWidth={1.5}/></div><h3>{g.name}</h3><p>{g.description}</p><div className="cap-tags">{g.items.map(s=><span key={s}>{s}</span>)}</div><div className="cap-bottom"><span>TOOLKIT / {String(i+1).padStart(2,'0')}</span><ArrowUpRight size={15}/></div></article>})}</div>
        <p className="skills-footnote"><CircleDot size={13}/> Skills listed reflect technologies explored across the projects. Keep the list aligned with your current hands-on experience.</p>
      </div></section>

      <section className="section wrap work-section" id="work">
        <div className="section-label reveal"><span>03</span><span className="label-rule"/><span>SELECTED WORK</span></div>
        <div className="section-head-row work-head"><div><h2 className="section-title reveal">A few things<br/><em>I've explored.</em></h2><p className="work-subtitle reveal">Small steps toward useful software. Six projects across AI, web, and backend systems.</p></div><div className="work-counter reveal"><strong>06</strong><span>PROJECTS<br/>IN THE MIX</span></div></div>
        <div className="filter-bar reveal" role="group" aria-label="Filter projects">{['All work','AI / ML','Backend / FinTech','Web Development','Computer Vision'].map(f=><button type="button" aria-pressed={filter===f} className={filter===f?'filter-selected':''} key={f} onClick={()=>setFilter(f)}>{f}</button>)}</div>
        <p className="sr-only" aria-live="polite">Showing {shownProjects.length} {shownProjects.length === 1 ? 'project' : 'projects'}{filter === 'All work' ? '' : ` in ${filter}`}.</p>
        <div className="work-grid">{shownProjects.map((p,i)=>{const Icon=p.icon;return <article className={`work-card work-${p.color} reveal ${p.featured?'work-featured':''}`} key={p.id} style={{'--i':i}}><div className="work-card-head"><span className="work-id">{p.id} <span>/</span> {p.tag}</span><span className="work-arrow" aria-hidden="true"><ArrowUpRight size={18}/></span></div><div className="work-icon"><Icon size={25} strokeWidth={1.4}/></div><p className="work-category">{p.category}</p><h3>{p.title}</h3><p className="work-desc">{p.desc}</p><div className="work-tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div><div className="work-card-footer"><span>PROJECT OVERVIEW</span><span aria-hidden="true">↗</span></div></article>})}</div>
        <div className="work-note reveal"><span className="note-dot"/> Project descriptions include implementation work and concepts explored. Add public repository or demo links only for projects you can share.</div>
      </section>

      <section className="section journey-section" id="journey"><div className="wrap">
        <div className="section-label reveal"><span>04</span><span className="label-rule"/><span>LEARNING JOURNEY</span></div>
        <div className="journey-layout"><div><h2 className="section-title reveal">Keep learning.<br/><em>Keep shipping.</em></h2><p className="journey-copy reveal">A selection of courses, credentials, and learning experiences that have shaped my path so far.</p></div><div className="learning-list reveal">{learning.map((l,i)=><div className="learning-row" key={l.name}><span className="learning-no">0{i+1}</span><div className="learning-main"><strong>{l.name}</strong><span>{l.org}</span></div><span className="learning-type">{l.type}</span><ArrowUpRight size={16}/></div>)}</div></div>
      </div></section>

      <section className="contact-wrap wrap" id="contact"><div className="contact-panel reveal"><div className="contact-decoration">LET'S<br/>MAKE<br/><em>IT REAL.</em></div><div className="contact-content"><div className="section-label"><span>05</span><span className="label-rule"/><span>GET IN TOUCH</span></div><h2>Have a role<br/>or an idea in mind?</h2><p>I'm interested in entry-level opportunities in Python development, Java development, and full-stack engineering. Let's connect.</p><a className="btn btn-light" href={`mailto:${email}?subject=Software%20Development%20Opportunity`}><Mail size={17}/> Say hello <ArrowUpRight size={16}/></a><div className="contact-links"><a href="mailto:nangunurusanjay123@gmail.com"><Mail size={16}/><span>nangunurusanjay123@gmail.com</span><small>EMAIL</small></a><a href="https://github.com/Sanjay-Nangunuru" target="_blank" rel="noreferrer"><Code2 size={16}/><span>github.com/Sanjay-Nangunuru</span><small>GITHUB</small></a><a href="https://www.linkedin.com/in/nangunuru-sanjay-261663258/" target="_blank" rel="noreferrer"><ExternalLink size={16}/><span>linkedin.com/in/nangunuru-sanjay-261663258</span><small>LINKEDIN</small></a></div></div></div></section>
    </main>

    <footer className="footer wrap"><a href="#home" className="wordmark"><span className="wordmark-icon">s<span>.</span></span><span>NS<span className="wordmark-muted"> / PORTFOLIO</span></span></a><span>CRAFTED WITH CURIOSITY · 2026</span><a href="#home" className="footer-top">BACK TO TOP ↑</a></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)

