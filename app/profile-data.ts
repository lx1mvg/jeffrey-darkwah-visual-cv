export const CV_URL =
  "https://drive.google.com/file/d/1cH0MQOs5QzKM_mfRL7lpjRqDioQCOK2V/view?usp=drive_link";

export const profile = {
  name: "Jeffrey Peasah Darkwah",
  initials: "JPD",
  location: "Accra, Ghana",
  email: "peasahjayson49@outlook.com",
  phone: "+233208726432",
  roles: [
    "Systems Administrator",
    "Cybersecurity Analyst",
    "IT Service Desk & Systems Support Engineer",
    "Active Directory Administrator",
  ],
  headline:
    "Systems Administrator, Cybersecurity Analyst, and IT Service Desk & Systems Support Engineer.",
  bio: "Systems Administrator and Cybersecurity Analyst with hands-on experience in Active Directory, Windows Server administration, Group Policy, enterprise IT support, incident documentation, audit evidence support, and secure user access administration.",
};

export const contactLinks = {
  email: "mailto:peasahjayson49@outlook.com",
  phone: "tel:+233208726432",
  linkedin: "https://gh.linkedin.com/in/jeffrey-darkwah-423538235",
  whatsapp: "https://wa.me/233208726432",
  hire: "mailto:peasahjayson49@outlook.com?subject=Portfolio%20Inquiry%20-%20Hiring%20Opportunity",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  { value: "50+", label: "daily users supported across IT service operations" },
  { value: "P1/P2", label: "incident coordination, escalation, and reporting" },
  { value: "AD + GPO", label: "domain, OU, and policy administration practice" },
  { value: "Audit-ready", label: "logs, evidence, runbooks, and access tracking" },
];

export const infrastructurePanels = [
  {
    title: "Windows Server Infrastructure",
    image: "/images/infrastructure/server-rack.jpg",
    alt: "Server Manager dashboard on a workstation monitor",
    detail:
      "Windows Server setup, domain configuration, replication support, system checks, and operational readiness.",
  },
  {
    title: "Active Directory Administration",
    image: "/images/lab/active-directory-lab.png",
    alt: "Mock Active Directory lab interface for cac.local",
    detail:
      "OU structuring, user administration, computer objects, role-based access, and lab domain design.",
  },
  {
    title: "Group Policy Configuration",
    image: "/images/lab/group-policy-management-lab.png",
    alt: "Mock Group Policy configuration panel with sample GPO names",
    detail:
      "Password policies, desktop restrictions, mapped drives, and security baseline policy modelling.",
  },
  {
    title: "Domain Join Process",
    image: "/images/lab/domain-join-workflow.png",
    alt: "Mock domain join workflow for cac.local",
    detail:
      "Workstation preparation, DNS verification, domain join, restart, sign-in, GPO application, and AD verification.",
  },
];

export const disciplines = [
  {
    title: "Systems Administration",
    description:
      "Active Directory, Windows Server, DNS/DHCP, Microsoft 365, backups, IT assets, and endpoint readiness.",
    tags: ["Active Directory", "Windows Server", "DNS/DHCP", "Microsoft 365"],
  },
  {
    title: "Cybersecurity Analysis",
    description:
      "Incident documentation, SOC fundamentals, audit evidence, IT controls, access review, and monitoring.",
    tags: ["SOC basics", "Audit evidence", "Access review", "IT controls"],
  },
  {
    title: "IT Service Management",
    description:
      "Service desk queue management, SLA monitoring, P1/P2 incident coordination, and stakeholder updates.",
    tags: ["ITSM", "ServiceNow", "SLA tracking", "P1/P2 incidents"],
  },
  {
    title: "Infrastructure Support",
    description:
      "Hardware deployment, workstation setup, network troubleshooting, domain support, and vendor coordination.",
    tags: ["Hardware", "LAN support", "Domain support", "Vendors"],
  },
  {
    title: "Enterprise Application Support",
    description:
      "Daily checks, release readiness, known error logs, runbooks, user support, and adoption guidance.",
    tags: ["Runbooks", "Release support", "T24 support", "Training"],
  },
];

export const skillGroups = [
  {
    title: "Systems & Infrastructure",
    skills: [
      "Active Directory",
      "Group Policy Objects",
      "OU Management",
      "Windows Server Administration",
      "DNS",
      "DHCP",
      "Microsoft 365 Administration",
      "Microsoft Intune MDM",
      "LAN/WAN fundamentals",
      "Backup and recovery basics",
      "IT asset management",
    ],
  },
  {
    title: "Cybersecurity & Compliance",
    skills: [
      "IT controls",
      "Audit support",
      "Access control",
      "Incident documentation",
      "SOC fundamentals",
      "PCI-DSS awareness",
      "Banking standards awareness",
      "Monitoring and evidence collection",
    ],
  },
  {
    title: "IT Support & Operations",
    skills: [
      "End-user support",
      "ITSM / ServiceNow",
      "SLA tracking",
      "P1/P2 incident coordination",
      "Hardware deployment",
      "Outlook and email support",
      "Knowledge base documentation",
      "Vendor ticket tracking",
      "Problem management",
    ],
  },
  {
    title: "Tools & Data",
    skills: [
      "Microsoft Excel",
      "Power BI basics",
      "SQL learning stage",
      "Microsoft Windows Server",
      "ServiceNow / ITSM platforms",
      "Active Directory tools",
    ],
  },
];

// Safe mock lab values only. Do not replace these with production exports.
export const domainWorkflow = {
  domain: "cac.local",
  controller: "CAC-DC-01",
  fakeDns: "192.168.10.10",
  workstations: ["CAC-WKS-001", "CAC-WKS-002", "CAC-LAP-003"],
  ous: ["CAC-Users", "CAC-Computers", "CAC-IT", "CAC-Finance", "CAC-HR"],
  gpos: ["Password Policy", "Desktop Restrictions", "Mapped Drives", "Security Baseline"],
  steps: [
    "Prepare workstation.",
    "Connect to network.",
    "Verify DNS points to domain controller.",
    "Join computer to cac.local.",
    "Restart and sign in with domain credentials.",
    "Apply Group Policy.",
    "Confirm computer object appears in Active Directory.",
  ],
};

export const experience = [
  {
    role: "IT Service Desk & Systems Support Engineer",
    company: "Ghana School of Law",
    date: "April 2026 - Present",
    points: [
      "Manage service desk incidents and service requests with SLA-based prioritization.",
      "Support application releases through deployment readiness and post-release checks.",
      "Provide cybersecurity and audit support through logs, incident evidence, and compliance documentation.",
      "Coordinate P1/P2 incidents, escalation, stakeholder updates, and post-incident reporting.",
      "Set up and configured Microsoft Intune MDM for device management, enrollment readiness, and endpoint policy support.",
      "Maintain IT assets, runbooks, knowledge base articles, known error logs, and access request tracking.",
    ],
  },
  {
    role: "End User Support Officer",
    company: "Consolidated Bank Ghana Ltd, Airport-Accra",
    date: "September 2025 - March 2026",
    points: [
      "Supported Windows 10 to Windows 11 migration.",
      "Edited, updated, and deployed Group Policies.",
      "Supported Windows Server domain configuration and replication.",
      "Deployed and configured end-user systems.",
      "Supported T24 core banking users and documented incidents for audit traceability.",
      "Administered Active Directory users and OU structures.",
      "Assisted with LAN, Outlook, email, backup, and basic disaster recovery support.",
    ],
  },
  {
    role: "National Service, End User Support",
    company: "Consolidated Bank Ghana Ltd, Airport-Accra",
    date: "October 2024 - August 2025",
    points: [
      "Logged, tracked, and resolved service requests.",
      "Set up and replaced hardware.",
      "Assisted with new computer configuration.",
      "Documented IT issues and solutions.",
      "Supported service management activities and escalations.",
    ],
  },
  {
    role: "Internship",
    company: "Universal Merchant Bank, Airport-Accra",
    date: "October 2023 - December 2023",
    points: [
      "Managed and configured workstations.",
      "Provided technical support to staff.",
      "Assisted with hardware and software installations.",
      "Learned IT support ticket prioritization and timely resolution.",
    ],
  },
];

export const projects = [
  {
    title: "Active Directory Lab Environment",
    description:
      "Designed and implemented a Windows domain lab environment with OU structure, role-based access control, GPO-based security controls, DNS configuration, and departmental file share permission modelling.",
    tags: [
      "Active Directory",
      "Windows Server",
      "Group Policy",
      "DNS",
      "File Shares",
      "Access Control",
      "Lab Domain: cac.local",
    ],
  },
  {
    title: "Windows 10 to Windows 11 Migration Support",
    description:
      "Supported endpoint upgrade activity by preparing devices, guiding users, tracking recurring issues, and documenting migration support notes.",
    tags: ["Windows 11", "Endpoint support", "User readiness"],
  },
  {
    title: "IT Service Desk Process and SLA Support",
    description:
      "Managed incident triage, aged tickets, user communication, escalation paths, and service quality tracking.",
    tags: ["ITSM", "SLA", "P1/P2", "Communication"],
  },
  {
    title: "Audit Evidence and Access Control Support",
    description:
      "Supported compliance activity through logs, access evidence, user request tracking, and incident documentation.",
    tags: ["Audit", "Access control", "Evidence", "Compliance"],
  },
  {
    title: "Special Government Project Support",
    description:
      "Contributed IT support, documentation, service readiness, and operational coordination for a special national government project while keeping project details confidential.",
    tags: ["Government project", "IT support", "Documentation", "Confidential operations"],
  },
  {
    title: "Enterprise Application Support and Runbook Documentation",
    description:
      "Assisted users, performed daily system checks, maintained known error notes, and wrote support documentation.",
    tags: ["Runbooks", "Daily checks", "Application support"],
  },
  {
    title: "IT Asset Register and Governance Support",
    description:
      "Tracked asset lifecycle movements, returns, assignments, and exceptions to support governance and audit readiness.",
    tags: ["Assets", "Governance", "Documentation"],
  },
];

export const training = [
  "Microsoft Applied Skills: Administer Active Directory Domain Services - March 2026",
  "Security Operations Centre (SOC), Coursera / Cisco - January 2026",
  "Process Data from Dirty to Clean, Coursera / Google - August 2024",
  "Introduction to Networking and Storage, Coursera / IBM - July 2024",
  "Introduction to Cloud Computing, Coursera / IBM - July 2024",
  "Create Charts and Dashboards Using Microsoft Excel, Coursera - July 2024",
  "Introduction to Data Analysis using Microsoft Excel, Coursera - August 2023",
];

// TODO: Replace placeholder avatars with approved profile images only.
// LinkedIn references for future manual replacement:
// Asare Amo-Adipah: https://gh.linkedin.com/in/asare-amo-adipah-94ba32164
// Esi Mmirba Wilson: https://gh.linkedin.com/in/esi-mmirba-wilson-064bb031
// Richard Amoaku: https://gh.linkedin.com/in/richard-amoaku-a8434aa3?trk=people-guest_people_search-card
// Joseph Anum Afotey: REPLACE_WITH_REFERENCE_LINKEDIN_URL_JOSEPH
export const testimonials = [
  {
    name: "Asare Amo-Adipah",
    image: "/images/testimonials/asare-amo-adipah.jpg",
    quote:
      "Jeffrey approaches technical support with discipline, patience, and a strong understanding of secure IT operations.",
  },
  {
    name: "Esi Mmirba Wilson",
    image: "/images/testimonials/esi-mmirba-wilson.jpg",
    quote:
      "He is reliable in troubleshooting, documentation, and communicating clearly with users and stakeholders.",
  },
  {
    name: "Richard Komla Amoaku",
    image: "/images/testimonials/richard-amoaku.jpg",
    quote:
      "Jeffrey shows strong potential in systems administration, audit support, and cybersecurity-focused operations.",
  },
  {
    name: "Joseph Anum Afotey",
    image: "/images/testimonials/joseph-anum-afotey.jpg",
    quote:
      "His attention to detail and willingness to learn make him a valuable contributor to IT support and infrastructure work.",
  },
];
