
import { useState } from 'react'
import './App.css'

const Symbol = ({ children, className = '' }) => (
  <span className={`ui-icon ${className}`} aria-hidden="true">{children}</span>
)

const GitHubIcon = () => <Symbol className="github-text-icon">GH</Symbol>

const projects = [
  {
    number: '01',
    title: 'CampusConnect',
    type: 'Full-stack web application',
    description: 'A college social interaction platform for students to discover campus events, join group studies, and connect with peers.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    icon: 'campus',
    link: 'https://github.com/Priyanka1267/CampusConnect'
  },
  {
    number: '02',
    title: 'Skill Certification Tracker',
    type: 'Frontend web application',
    description: 'A web app for organizing skills and certification progress in one place with a clean, accessible interface.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    icon: 'tracker',
    link: 'https://skill-certification-tracker-eight.vercel.app/',
    github: 'https://github.com/Priyanka1267/skill-certification-tracker'
  },
  {
    number: '03',
    title: 'ERP College Portal',
    type: 'Web application',
    description: 'A college portal for student, faculty, attendance, course, marks, and fee information.',
    tags: ['React', 'JavaScript', 'Backend', 'Database'],
    icon: 'erp',
    link: 'https://erp-sable-seven.vercel.app/'
  }
]

const skills = [
  { name: 'Frontend', items: 'HTML · CSS · JavaScript · React', icon: '◇' },
  { name: 'Backend', items: 'Node.js · Express · REST APIs', icon: '</>' },
  { name: 'Database', items: 'MongoDB · MySQL', icon: '▤' },
  { name: 'Tools', items: 'Git · GitHub · Vite · VS Code', icon: '▧' },
  { name: 'SQL', items: 'Queries · Filtering · Joins · Aggregations', icon: '⌘' },
  { name: 'Microsoft Excel', items: 'Formulas · Data Cleaning · PivotTables · Charts', icon: '▦' },
  { name: 'Power BI', items: 'Data Visualization · Reports · Dashboards', icon: '▥' },
  { name: 'Data Science', items: 'Raw Data · Data Preparation · Model Training', icon: '◈' }

]

function ProjectArt({ type }) {
  return (
    <div className={`project-art ${type}`} aria-hidden="true">
      <div className="art-window">
        <div className="art-top">
          <i />
          <i />
          <i />
          <span />
        </div>

        {type === 'campus' && (
          <div className="campus-art-content">
            <b /><b /><b />
            <div /><div /><div />
          </div>
        )}

        {type === 'tracker' && (
          <div className="tracker-art-content">
            <span /><span /><span /><span /><span /><span />
          </div>
        )}

        {type === 'erp' && (
          <div className="erp-art-content">
            <aside />
            <main><i /><i /><i /><i /></main>
          </div>
        )}
      </div>
      <div className="art-orb" />
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">P</span>
          <span>priyanka<span className="brand-dot">.</span></span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        
<nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
  <a href="#about" onClick={closeMenu}>About</a>
  <a href="#skills" onClick={closeMenu}>Skills</a>
  <a href="#projects" onClick={closeMenu}>Projects</a>
  <a href="#certifications" onClick={closeMenu}>Certifications</a>
  <a href="#contact" onClick={closeMenu}>Contact</a>
  <a className="nav-cta" href="#contact" onClick={closeMenu}>
    Let's talk <Symbol>↗</Symbol>
  </a>
</nav>

      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span /> OPEN TO INTERNSHIP OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M PRIYANKA SANIKOMMU</p>

            <h1>
              I build digital<br />
              experiences that <span className="gradient-text">matter.</span>
            </h1>

            <p className="hero-description">
              I'm a computer science student and aspiring full-stack developer
              who enjoys turning ideas into useful, thoughtful web experiences.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <Symbol>→</Symbol>
              </a>
              <a className="button button-ghost" href="#contact">
                Get in touch <Symbol>↗</Symbol>
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Priyanka1267"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/priyanka-sanikommu-b55bb9375"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Symbol>in</Symbol>
              </a>

              <a href="mailto:your.email@example.com" aria-label="Email">
                <Symbol>✉</Symbol>
              </a>

              <span className="social-divider" />
              <span className="social-caption">Let's build something great</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />

            <div className="portrait-frame">
              <div className="portrait-topline">
                <span>PORTFOLIO / 2026</span>
                <Symbol>✧</Symbol>
              </div>

              <div className="portrait-image-wrap">
                <img
  src="/profile.jpeg"
  alt="Priyanka Sanikommu"
/>
                <div className="portrait-label">
                  <span className="portrait-label-dot" />
                  DEVELOPER IN PROGRESS
                </div>
              </div>

              <div className="portrait-bottom">
                <span>Curious mind.</span>
                <span>Creative builder.</span>
              </div>
            </div>

            <div className="float-card float-card-code">
              <Symbol>{'</>'}</Symbol>
              <div>
                <strong>Build</strong>
                <span>Learn by creating</span>
              </div>
            </div>

            <div className="float-card float-card-stack">
              <span className="stack-icon">✳</span>
              <div>
                <strong>React + JavaScript</strong>
                <span>My current toolkit</span>
              </div>
            </div>

            <div className="visual-index">01 <span /> 04</div>
          </div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <Symbol>↓</Symbol>
          </a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>
              Curiosity is my <span className="gradient-text">starting point.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-lead">
              <span className="quote-mark">“</span>
              <p>I believe the best way to learn technology is to use it to solve real problems.</p>
            </div>

            <div className="about-detail">
              <p>
                I'm a B.Tech Computer Science student interested in full-stack
                development, building practical applications, and continuously
                improving my engineering skills.
              </p>
              
<p>
  Alongside full-stack development, I am building my skills in data
  analytics using SQL, Microsoft Excel, and Power BI. I am also
  currently working on a data science project where I use raw data
  to train a machine learning model and explore meaningful patterns.
</p>

              <a href="#contact" className="text-link">
                More about my journey <Symbol>→</Symbol>
              </a>
            </div>
          </div>

          <div className="stats-row">
            <div>
              <strong>03<span>+</span></strong>
              <span>PROJECTS TO EXPLORE</span>
            </div>
            <div>
              <strong>Full<span>-</span>stack</strong>
              <span>AREA I'M EXPLORING</span>
            </div>
            <div>
              <strong>Always<span>.</span></strong>
              <span>LEARNING SOMETHING NEW</span>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>My <span className="gradient-text">toolkit.</span></h2>
            <p className="section-subtitle">
              Technologies I have been learning and using in my projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map(({ name, items, icon }, index) => (
              <article className="skill-card" key={name}>
                <div className="skill-card-top">
                  <span className="skill-icon">{icon}</span>
                  <span className="skill-number">0{index + 1}</span>
                </div>
                <h3>{name}</h3>
                <p>{items}</p>
                <div className="skill-line">
                  <span style={{ width: `${88 - index * 8}%` }} />
                </div>
              </article>
            ))}
          </div>

          <p className="skills-note">
            Skills shown reflect my current learning and project experience.
          </p>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Projects with <span className="gradient-text">purpose.</span></h2>
            </div>
            <p className="projects-intro">
              A few things I've built or worked on while learning to turn ideas
              into working products.
            </p>
          </div>

          <div className="project-list">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <ProjectArt type={project.icon} />

                <div className="project-info">
                  <div className="project-meta">
                    <span>{project.number}</span>
                    <span>{project.type}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      View project <Symbol>↗</Symbol>
                    </a>

                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <GitHubIcon /> Source code
                      </a>
                    )}
                  </div>
                </div>

                <a
                  className="project-arrow"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  <Symbol>↗</Symbol>
                </a>
              </article>
            ))}
          </div>

          <div className="github-callout">
            <div className="github-callout-icon"><GitHubIcon /></div>
            <div>
              <h3>There's more on GitHub</h3>
              <p>Explore repositories, experiments, and what I'm learning next.</p>
            </div>
            <a
              href="https://github.com/Priyanka1267"
              target="_blank"
              rel="noreferrer"
              className="button button-ghost"
            >
              Visit GitHub <Symbol>↗</Symbol>
            </a>
          </div>
        </section>
        
<section className="certifications section-wrap section-block" id="certifications">
  <div className="section-heading">
    <p className="eyebrow">LEARNING & ACHIEVEMENTS</p>
    <h2>
      Certifications & <span className="gradient-text">learning.</span>
    </h2>
    <p className="section-subtitle">
      Programs and practical experience that support my development journey.
    </p>
  </div>

  <div className="certification-list">
    <article className="certification-item">
      <div className="certification-symbol">01</div>
      <div className="certification-info">
        <h3>Web Development Program</h3>
        <p>EdiGlobe</p>
        <p>
          Practical experience through minor and major projects using
          web development technologies.
        </p>
        <div className="tag-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
        </div>
      </div>
    </article>
  </div>
</section>


        <section className="contact section-wrap section-block" id="contact">
          <div className="contact-card">
            <div className="contact-orb" />
            <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
            <h2>
              Let's make something<br />
              <span className="gradient-text">meaningful.</span>
            </h2>
            <p className="contact-copy">
              I'm interested in internships, collaborations, and opportunities
              to keep learning by building.
            </p>
            <a className="button button-primary" href="mailto:sanikommu2024@gmail.com">
              Say hello <Symbol>✉</Symbol>
            </a>
            <div className="contact-bottom">
              <span>OPEN TO CONNECTING</span>
              <span>INDIA · AVAILABLE ONLINE</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">P</span>
          <span>priyanka<span className="brand-dot">.</span></span>
        </a>
        <p>Designed with curiosity and built with React.</p>
        <span>© 2026 Priyanka Sanikommu</span>
      </footer>
    </div>
  )
}

export default App
