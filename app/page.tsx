import type { CSSProperties } from "react";
import { TechBackdrop } from "./tech-backdrop";

const highlights = [
  {
    value: "50+",
    label: "daily users supported across service desk and IT operations",
  },
  {
    value: "20%",
    label: "faster onboarding setup through end-user system deployment",
  },
  {
    value: "P1/P2",
    label: "incident coordination, escalation, and post-incident reporting",
  },
  {
    value: "2026",
    label: "current role across service desk, systems support, and Intune MDM",
  },
];

const qualifications = [
  {
    title: "BSc. Information Technology Management",
    school: "University of Professional Studies, Accra",
    date: "Aug. 2021 - Aug. 2024",
    detail:
      "Built an Active Directory lab covering OU structure, security groups, GPO deployment, DNS, and departmental file-share permissions.",
  },
  {
    title: "Diploma in Information Technology Management",
    school: "University of Professional Studies, Accra",
    date: "Aug. 2019 - Aug. 2021",
    detail:
      "Established a formal IT management foundation before moving into enterprise support, systems administration, and service operations.",
  },
];

const skillGroups = [
  {
    name: "Systems and Infrastructure",
    items: [
      "Active Directory",
      "Windows Server",
      "DNS and DHCP",
      "Microsoft 365",
      "Microsoft Intune MDM",
      "Endpoint compliance",
      "LAN/WAN fundamentals",
      "Backup and recovery",
      "IT asset management",
    ],
  },
  {
    name: "Support Operations",
    items: [
      "ITSM and ServiceNow",
      "End-user troubleshooting",
      "Hardware deployment",
      "Release readiness",
      "Vendor coordination",
      "Knowledge base articles",
      "SLA monitoring",
    ],
  },
  {
    name: "Security and Compliance",
    items: [
      "IT controls",
      "Audit evidence",
      "Access reviews",
      "Incident documentation",
      "PCI-DSS awareness",
      "Banking standards",
      "P1/P2 communication",
    ],
  },
  {
    name: "Data and Tools",
    items: [
      "Microsoft Excel",
      "Excel dashboards",
      "Power BI basics",
      "SQL learning",
      "T24 support",
      "Data cleaning",
      "Trend analysis",
    ],
  },
];

const skillSignals = [
  { label: "Active Directory", level: "92%" },
  { label: "Service Desk Operations", level: "90%" },
  { label: "Windows Server", level: "78%" },
  { label: "Microsoft Intune MDM", level: "72%" },
  { label: "IT Controls and Audit Support", level: "74%" },
  { label: "Excel Dashboards", level: "68%" },
];

const experience = [
  {
    role: "IT Service Desk and Systems Support Engineer",
    company: "Ghana School of Law",
    date: "Apr. 2026 - Present",
    points: [
      "Triages incidents and service requests by impact, urgency, and SLA target.",
      "Coordinates P1/P2 incidents, stakeholder updates, escalation, and post-incident reporting.",
      "Set up and configured Microsoft Intune MDM for device enrollment, configuration profiles, compliance policies, and managed endpoint oversight.",
      "Supports release management with deployment readiness, post-release checks, and user preparation.",
      "Provides cybersecurity and audit support through access logs, incident evidence, and compliance documentation.",
    ],
  },
  {
    role: "End User Support Officer",
    company: "Consolidated Bank Ghana Ltd, Airport-Accra",
    date: "Sept. 2025 - Mar. 2026",
    points: [
      "Participated in an enterprise Windows 10 to Windows 11 migration project.",
      "Edited, updated, and deployed Group Policy Objects for users and systems.",
      "Supported Windows Server domain configuration and replication for redundancy.",
      "Troubleshot T24 core banking systems and guided users through banking workflows.",
      "Maintained asset, incident, and configuration records to support governance and audit traceability.",
    ],
  },
  {
    role: "National Service, End User Support",
    company: "Consolidated Bank Ghana Ltd, Airport-Accra",
    date: "Oct. 2024 - Aug. 2025",
    points: [
      "Logged, tracked, and resolved service requests for staff.",
      "Deployed, configured, and replaced end-user hardware.",
      "Documented IT issues and fixes to strengthen knowledge sharing.",
      "Joined IT projects for upgrades, process improvement, and service delivery support.",
    ],
  },
  {
    role: "IT Internship",
    company: "Universal Merchant Bank, Airport-Accra",
    date: "Oct. 2023 - Dec. 2023",
    points: [
      "Managed and configured workstations for staff support.",
      "Assisted with hardware and software installation.",
      "Learned ticket prioritization for timely support resolution.",
    ],
  },
];

const projects = [
  {
    title: "Active Directory Lab Environment",
    detail:
      "Designed a simulated enterprise domain with OUs, role-based security groups, GPO enforcement, DNS, and departmental file-share permissions.",
    tags: ["OU design", "GPOs", "DNS", "Access control"],
  },
  {
    title: "Windows 11 Migration Support",
    detail:
      "Supported enterprise migration activity by preparing systems, assisting users, and documenting recurring issues for cleaner rollout support.",
    tags: ["Deployment", "User readiness", "Documentation"],
  },
  {
    title: "Data Analytics Practice",
    detail:
      "Cleaned datasets, built Excel dashboards, used charts and pivot tables, and applied trend analysis and basic anomaly detection in coursework.",
    tags: ["Excel", "Dashboards", "Data cleaning"],
  },
];

const certificates = [
  {
    title: "Administer Active Directory Domain Services",
    provider: "Microsoft Applied Skills",
    date: "Mar. 2026",
  },
  {
    title: "Security Operations Centre (SOC)",
    provider: "Coursera - Cisco",
    date: "Jan. 2026",
  },
  {
    title: "Process Data from Dirty to Clean",
    provider: "Coursera - Google",
    date: "Aug. 2024",
  },
  {
    title: "Introduction to Networking and Storage",
    provider: "Coursera - IBM",
    date: "July 2024",
  },
  {
    title: "Introduction to Cloud Computing",
    provider: "Coursera - IBM",
    date: "July 2024",
  },
  {
    title: "Create Charts and Dashboards Using Microsoft Excel",
    provider: "Coursera",
    date: "July 2024",
  },
  {
    title: "Introduction to Data Analysis using Microsoft Excel",
    provider: "Coursera",
    date: "Aug. 2023",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-art"
          src="/career-system.png"
          alt="Abstract network map of servers, service tickets, dashboards, and security controls"
        />
        <TechBackdrop />
        <div className="hero-overlay" />
        <nav className="hero-nav" aria-label="CV sections">
          <a href="#qualifications">Qualifications</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Visual CV - IT support and systems operations</p>
          <h1 id="hero-title">Jeffrey Peasah Darkwah</h1>
          <p className="hero-copy">
            IT Support Engineer in Accra, Ghana, with hands-on Active Directory,
            Windows Server, Microsoft Intune MDM, ITSM, banking application
            support, and audit-ready operations experience.
          </p>
          <div className="hero-actions" aria-label="Profile focus areas">
            <span>Active Directory</span>
            <span>Windows Server</span>
            <span>Intune MDM</span>
            <span>Service Desk</span>
            <span>IT Controls</span>
          </div>
        </div>
      </section>

      <section className="summary-band" aria-label="Career highlights">
        <div className="wrap highlight-grid">
          {highlights.map((item) => (
            <article className="metric" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap intro-grid" id="qualifications">
        <div>
          <p className="section-kicker">Profile architecture</p>
          <h2>Built around reliable systems, clear support, and accountable IT.</h2>
        </div>
        <p>
          The CV points to a practical operator: someone who can handle user
          support volume, configure Microsoft environments and managed devices,
          document incidents, and support regulated banking-style operations
          without losing sight of the people using the systems.
        </p>
      </section>

      <section className="band">
        <div className="wrap split">
          <div>
            <p className="section-kicker">Qualifications</p>
            <h2>Formal IT management foundation with systems lab practice.</h2>
          </div>
          <div className="qualification-list">
            {qualifications.map((item) => (
              <article className="qualification" key={item.title}>
                <div>
                  <span>{item.date}</span>
                  <h3>{item.title}</h3>
                  <p className="school">{item.school}</p>
                </div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap skills-section" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="section-kicker">Capability map</p>
          <h2 id="skills-title">A support engineer profile with infrastructure depth.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.name}>
              <h3>{group.name}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="signal-panel" aria-label="Skill signal levels">
          {skillSignals.map((item) => (
            <div className="signal-row" key={item.label}>
              <span>{item.label}</span>
              <div className="signal-track">
                <div
                  className="signal-fill"
                  style={{ "--level": item.level } as CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="band" id="experience">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-kicker">Experience timeline</p>
            <h2>From workstation support to service desk ownership.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.date}`}>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap" id="projects">
        <div className="section-heading">
          <p className="section-kicker">Personal projects and applied work</p>
          <h2>Proof of practice beyond job titles.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.detail}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="certificate-band" id="certificates">
        <div className="wrap certificate-layout">
          <div>
            <p className="section-kicker">Online and self-study certificates</p>
            <h2>Continuous learning across Microsoft systems, SOC, cloud, networking, and data.</h2>
          </div>
          <div className="certificate-list">
            {certificates.map((certificate) => (
              <article className="certificate" key={certificate.title}>
                <span>{certificate.date}</span>
                <h3>{certificate.title}</h3>
                <p>{certificate.provider}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <p>Jeffrey Peasah Darkwah - Visual CV</p>
          <p>Focused on dependable support, secure systems, and audit-ready IT operations.</p>
        </div>
      </footer>
    </main>
  );
}
