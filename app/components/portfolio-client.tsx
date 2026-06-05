"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Database,
  Download,
  ExternalLink,
  FileText,
  Mail,
  Menu,
  MessageCircle,
  Monitor,
  Network,
  Phone,
  Server,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { FaWindows } from "react-icons/fa";
import { TechBackdrop } from "../tech-backdrop";
import {
  CV_URL,
  contactLinks,
  disciplines,
  domainWorkflow,
  experience,
  infrastructurePanels,
  metrics,
  navLinks,
  profile,
  projects,
  skillGroups,
  testimonials,
  training,
} from "../profile-data";

const iconSet = [Server, ShieldCheck, Activity, Network, Database];

function useRotatingText(values: string[], delay = 2200) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % values.length);
    }, delay);

    return () => window.clearInterval(interval);
  }, [values.length, delay, reduceMotion]);

  return values[index];
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  titleId,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  titleId?: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Go to home">
        <span>{profile.initials}</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav className={open ? "site-nav open" : "site-nav"} aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a
          className="nav-cv"
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Jeffrey Peasah Darkwah's CV in a new tab"
        >
          <FileText aria-hidden="true" /> CV
        </a>
        <a className="hire-button" href={contactLinks.hire}>
          <Mail aria-hidden="true" /> Hire Me
        </a>
      </div>
    </header>
  );
}

function CVCard() {
  return (
    <motion.a
      className="cv-card"
      href={CV_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Jeffrey Peasah Darkwah's CV in a new tab"
      whileHover={{ rotateX: 5, rotateY: -7, y: -5 }}
      whileFocus={{ rotateX: 5, rotateY: -7, y: -5 }}
    >
      <span className="cv-tooltip" role="tooltip">
        View my CV
      </span>
      <span className="cv-icon">
        <Download aria-hidden="true" />
      </span>
      <span>
        <strong>View My CV</strong>
        <small>Google Drive link opens in a new tab</small>
      </span>
      <ExternalLink aria-hidden="true" />
    </motion.a>
  );
}

function Hero() {
  const role = useRotatingText(profile.roles);
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hero-art"
        src="/career-system.png"
        alt=""
        aria-hidden="true"
      />
      <TechBackdrop />
      <div className="hero-overlay" />
      <div className="wrap hero-grid">
        <motion.div
          className="hero-copy-block"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Systems administration + cybersecurity analysis</p>
          <h1 id="hero-title">
            <span>Jeffrey Peasah</span>
            <span>Darkwah</span>
          </h1>
          <p className="hero-title-line">{profile.headline}</p>
          <p className="rotating-role" aria-live="polite">
            {role}
          </p>
          <p className="hero-copy">{profile.bio}</p>
          <div className="hero-cta-row">
            <a className="primary-cta" href={contactLinks.hire}>
              Hire Me <ChevronRight aria-hidden="true" />
            </a>
            <CVCard />
            <a className="secondary-cta" href="#projects">
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          aria-hidden="true"
        >
          <motion.div
            className="floating-server"
            animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Server />
            <span>CAC-DC-01</span>
          </motion.div>
          <motion.div
            className="floating-terminal"
            animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <code>PS&gt; Add-Computer -DomainName cac.local</code>
            <code>GPO: Security Baseline applied</code>
            <code>Status: domain joined</code>
          </motion.div>
          <div className="hero-photo-stack">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/infrastructure/workstation-lab.jpg"
              alt=""
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="metrics-band" aria-label="Career highlights">
      <div className="wrap metrics-grid">
        {metrics.map((metric) => (
          <motion.article
            className="metric-card"
            key={metric.value}
            whileHover={{ y: -4 }}
          >
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function InfrastructureShowcase() {
  return (
    <section className="section-pad" id="infrastructure">
      <div className="wrap">
        <SectionHeading
          eyebrow="Infrastructure showcase"
          title="Real workstation support, safe lab visuals, and secure Windows infrastructure thinking."
          copy="The images and mock panels mix real local workstation photos with generated lab-only visuals. No production data, passwords, internal usernames, or confidential records are shown."
        />
        <div className="infrastructure-grid">
          {infrastructurePanels.map((panel, index) => (
            <motion.article
              className="infra-card"
              key={panel.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={panel.image} alt={panel.alt} />
              <div>
                <h3>{panel.title}</h3>
                <p>{panel.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreDisciplines() {
  return (
    <section className="section-pad disciplines-section">
      <div className="wrap">
        <SectionHeading
          eyebrow="Core disciplines"
          title="Five focus areas across systems, security, support, and enterprise operations."
        />
        <div className="discipline-grid">
          {disciplines.map((discipline, index) => {
            const Icon = iconSet[index] ?? Activity;
            return (
              <motion.article
                className="discipline-card"
                key={discipline.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -6, rotate: index % 2 === 0 ? -0.5 : 0.5 }}
              >
                <span className="icon-badge">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{discipline.title}</h3>
                <p>{discipline.description}</p>
                <div className="chip-row">
                  {discipline.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DomainWorkflow() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="domain-section" aria-labelledby="domain-title">
      <div className="wrap domain-layout">
        <div>
          <SectionHeading
            eyebrow="Active Directory lab"
            title="Animated domain-join workflow for the cac.local lab."
            titleId="domain-title"
            copy="This section presents a safe training environment for Windows Server, DNS, Active Directory, and Group Policy. It does not represent a live production domain."
          />
          <div className="lab-label-grid" aria-label="Required lab labels">
            {[
              "Active Directory Administration",
              "Group Policy Configuration",
              "Domain Join Process",
              "Windows Server Infrastructure",
            ].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <p className="lab-disclaimer">
            Lab visual only. Screens shown use sample data and the{" "}
            <code>{domainWorkflow.domain}</code> lab domain.
          </p>
        </div>
        <div className="domain-visual">
          <motion.div
            className="domain-node server-node"
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Server aria-hidden="true" />
            <strong>{domainWorkflow.controller}</strong>
            <small>DNS {domainWorkflow.fakeDns}</small>
          </motion.div>
          <motion.div
            className="domain-node client-node"
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Monitor aria-hidden="true" />
            <strong>{domainWorkflow.workstations[0]}</strong>
            <small>Join {domainWorkflow.domain}</small>
          </motion.div>
          <motion.div
            className="domain-node policy-node"
            animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ShieldCheck aria-hidden="true" />
            <strong>GPO</strong>
            <small>{domainWorkflow.gpos[3]}</small>
          </motion.div>
          <motion.div
            className="dns-arrow"
            initial={reduceMotion ? false : { scaleX: 0, rotate: 17 }}
            whileInView={reduceMotion ? undefined : { scaleX: 1, rotate: 17 }}
            viewport={{ once: true }}
          />
          <ol className="workflow-steps">
            {domainWorkflow.steps.map((step, index) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ delay: index * 0.08 }}
              >
                <CheckCircle2 aria-hidden="true" />
                <span>{step}</span>
              </motion.li>
            ))}
          </ol>
          <div className="mock-ou-panel">
            <strong>OU map</strong>
            {domainWorkflow.ous.map((ou) => (
              <span key={ou}>{ou}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-pad" id="skills">
      <div className="wrap">
        <SectionHeading
          eyebrow="Skills and tools"
          title="Grouped technical arsenal for infrastructure support and cyber-aware operations."
        />
        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              className="skill-panel"
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: groupIndex * 0.05 }}
            >
              <h3>{group.title}</h3>
              <div className="skill-chip-grid">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.025 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section className="section-pad experience-section" id="experience">
      <div className="wrap">
        <SectionHeading
          eyebrow="Experience timeline"
          title="From workstation support to systems ownership and audit-ready operations."
        />
        <div className="timeline">
          {experience.map((item, index) => (
            <motion.article
              className="timeline-item"
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, x: index % 2 ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-copy">
                <span className="date">{item.date}</span>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-pad" id="projects">
      <div className="wrap">
        <SectionHeading
          eyebrow="Selected technical projects"
          title="Practical work tied to Active Directory, endpoints, ITSM, audit evidence, and governance."
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-topline">
                {index === 0 ? <FaWindows aria-hidden="true" /> : <BriefcaseBusiness aria-hidden="true" />}
                <span>0{index + 1}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="chip-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Training() {
  return (
    <section className="training-section">
      <div className="wrap training-layout">
        <SectionHeading
          eyebrow="Training and certifications"
          title="Continuous self-study across Microsoft systems, SOC, cloud, networking, and data."
        />
        <div className="training-list">
          {training.map((item) => (
            <article key={item}>
              <FileText aria-hidden="true" />
              <span>{item}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section-pad" id="testimonials">
      <div className="wrap">
        <SectionHeading
          eyebrow="Testimonials"
          title="Reference placeholders ready for approved LinkedIn profile photos and final quotes."
        />
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="testimonial-card"
              key={testimonial.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={testimonial.image} alt={`${testimonial.name} placeholder avatar`} />
              <h3>{testimonial.name}</h3>
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="wrap contact-layout">
        <div>
          <p className="section-kicker">Contact / Hire Me</p>
          <h2>Available for systems administration, cybersecurity analysis, and infrastructure support opportunities.</h2>
          <p>
            Reach out directly by email, phone, LinkedIn, or WhatsApp. No form,
            no friction.
          </p>
        </div>
        <div className="contact-card">
          <a href={contactLinks.email}>
            <Mail aria-hidden="true" /> {profile.email}
          </a>
          <a href={contactLinks.phone}>
            <Phone aria-hidden="true" /> {profile.phone}
          </a>
          <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <Users aria-hidden="true" /> LinkedIn
          </a>
          <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" /> WhatsApp
          </a>
          <a className="primary-cta" href={contactLinks.hire}>
            Hire Me <ChevronRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>{profile.name}</p>
        <p>Systems Administrator & Cybersecurity Analyst - {profile.location}</p>
      </div>
    </footer>
  );
}

export function PortfolioClient() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <InfrastructureShowcase />
        <CoreDisciplines />
        <DomainWorkflow />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <Training />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
