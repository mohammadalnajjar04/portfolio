export interface Project {
  id: string;
  title: string;
  type: string;
  status: 'private' | 'public' | 'learning' | 'graduation';
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
}

export interface SkillGroup {
  category: string;
  skills: {
    name: string;
    level?: string; // e.g., "Intermediate", "Learning", "Advanced"
    icon?: string;
  }[];
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: 'completed' | 'coming_soon';
  credentialId?: string;
  link?: string;
}

export const personalInfo = {
  name: "Mohammad Al-Najjar",
  location: "Irbid, Jordan",
  education: "B.Sc. Computer Science – Jadara University",
  role: "Full-Stack Developer & Software Engineer",
  resumeUrl: `${import.meta.env.BASE_URL}Mohammad_Alnajjar_CV.pdf`,
  focus: ["Full-Stack Development", "Mobile Development", "Database Systems", "Oracle Technologies"],
  github: "https://github.com/mohammadalnajjar04",
  linkedin: "https://www.linkedin.com/in/mohammad-alnajjar04",
  email: "alnajjarmohammad00@gmail.com",
  phone: "+962797169202",
  bio: "Computer Science graduate with experience in full-stack development, database systems, and Oracle technologies. I build clean, functional applications that solve real problems.",
  objective: "To contribute to engineering teams building practical, well-architected software, while continuing to grow my skills in full-stack development and database systems."
};

export const skillsData: SkillGroup[] = [
  {
    category: "Programming",
    skills: [
      { name: "C" },
      { name: "C++" },
      { name: "C#" },
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "PHP" }
    ]
  },
  {
    category: "Web & Frontend",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript (ES6+)" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "Oracle SQL" },
      { name: "PL/SQL" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "SQL Server" },
      { name: "Database Design" }
    ]
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "Android Studio" },
      { name: "Java" },
      { name: "XML" },
      { name: "SQLite" }
    ]
  },
  {
    category: "Fundamentals",
    skills: [
      { name: "OOP" },
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "SDLC" },
      { name: "Problem Solving" }
    ]
  },
  {
    category: "Tools & Version Control",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "SQL Developer" }
    ]
  },
  {
    category: "AI-Assisted Development",
    skills: [
      { name: "MCP Servers" },
      { name: "Cursor" },
      { name: "GitHub Copilot" },
      { name: "Vibe Coding" },
      { name: "ChatGPT / Claude" }
    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Professional" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "agri-supply-chain",
    title: "AI-Based Agricultural Supply Chain Web Application",
    type: "Graduation Project / Capstone",
    status: "graduation",
    description: "Built a centralized web application to streamline interactions between farmers, transporters, and distributors. Designed dynamic user dashboards, secure authentication workflows, and structured relational database schemas. Integrated AI-assisted decision-support modules for price prediction and logistics optimization.",
    technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "SQL", "MySQL", "AI Algorithms"],
    badge: "Capstone Project - 2026"
  },
  {
    id: "customer-service-mobile",
    title: "Customer Service Mobile Application",
    type: "Field Training Project - IDECO",
    status: "private",
    description: "Designed and built Android UI components (using XML & Java) and integrated SQLite for offline data storage and localized synchronization to handle customer inquiry modules.",
    technologies: ["Android Studio", "Java", "XML", "SQLite"],
    badge: "Field Training - 2026"
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    type: "Public Project",
    status: "public",
    description: "This portfolio site — built to showcase projects, technical skills, and professional background.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    githubUrl: "https://github.com/mohammadalnajjar04/portfolio",
    badge: "Active"
  }
];

export const experienceData: Experience[] = [
  {
    id: "daleel-training",
    title: "Full-Stack Developer Trainee",
    organization: "Daleel Academy - Jordan",
    period: "07/2026 - Present",
    description: "Enrolled in an intensive hybrid training program focused on full-stack web application development and modern engineering practices. Developing functional web applications, connecting responsive front-end interfaces with server-side logic and relational databases. Applying clean code principles, OOP patterns, and Git version control in collaborative team environments.",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "C#", "SQL Server", "PostgreSQL", "Git"]
  },
  {
    id: "ideco-training",
    title: "Field Training Intern",
    organization: "Irbid District Electricity Company (IDECO) - Jordan",
    period: "02/2026 - 05/2026",
    description: "Assisted in designing and developing a customer service mobile application within a real-world enterprise infrastructure. Collaborated with supervisors and technical teams while applying practical software engineering concepts. Enhanced skills in mobile development, troubleshooting, database integration, and corporate communication.",
    tags: ["Android Studio", "Java", "XML", "SQLite"]
  },
  {
    id: "bsc-degree",
    title: "B.Sc. Computer Science",
    organization: "Jadara University - Irbid, Jordan",
    period: "2022 - 2026",
    description: "Grade: Excellent GPA (86/100). Core Competencies: Software Engineering, Object-Oriented Programming, Data Structures, Algorithms, Relational Databases, Web Development, Networks, and Operating Systems.",
    tags: ["Software Engineering", "OOP", "Data Structures", "Algorithms", "Databases"]
  }
];

export const certificatesData: Certificate[] = [
  {
    id: "claude-code-101",
    title: "Claude Code 101",
    issuer: "Anthropic",
    date: "2026",
    status: "completed"
  },
  {
    id: "claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    date: "2026",
    status: "completed"
  },
  {
    id: "pcep-python",
    title: "PCEP – Certified Entry-Level Python Programmer",
    issuer: "Python Institute",
    date: "2026",
    status: "completed"
  },
  {
    id: "python-essentials-1",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "2026",
    status: "completed"
  },
  {
    id: "ieee-ai-hackathon",
    title: "IEEE Jordan AI Modeling Hackathon 1.0 Participant",
    issuer: "IEEE",
    date: "2025",
    status: "completed"
  },
  {
    id: "web-dev-training",
    title: "Web Development Training (36 Hours)",
    issuer: "Jadara University",
    date: "2024",
    status: "completed"
  },
  {
    id: "infosec-linux",
    title: "InfoSec & Linux Fundamentals (40 Hours)",
    issuer: "DevSec Academy",
    date: "2024",
    status: "completed"
  },
  {
    id: "droidcon-amman",
    title: "Droidcon Amman Conference & Hackathon Attendee",
    issuer: "Droidcon",
    date: "2024",
    status: "completed"
  }
];

export const githubStatsData = {
  username: "mohammadalnajjar04",
  profileUrl: "https://github.com/mohammadalnajjar04",
  featuredRepos: [
    {
      name: "agri-supply-chain",
      description: "AI-Based Agricultural Supply Chain Web Application — graduation capstone project.",
      language: "PHP",
      stars: 0,
      forks: 0
    },
    {
      name: "portfolio",
      description: "Personal portfolio website built with React, TypeScript, and Tailwind CSS.",
      language: "TypeScript",
      stars: 0,
      forks: 0
    }
  ]
};
