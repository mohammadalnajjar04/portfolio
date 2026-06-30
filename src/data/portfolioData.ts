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
  name: "Mohammad Alnajjar",
  location: "Irbid, Jordan",
  education: "B.Sc. Computer Science – Jadara University",
  role: "Software Engineer",
  focus: ["Full-Stack Development", "Mobile Development", "Database Systems", "Oracle Technologies"],
  github: "https://github.com/mohammadalnajjar04",
  linkedin: "https://www.linkedin.com/in/mohammad-alnajjar04",
  email: "alnajjarmohammad00@gmail.com",
  bio: "I am a Computer Science graduate with experience building full-stack web applications and working with relational databases. I enjoy designing clean, maintainable systems — from backend APIs and database schemas to responsive frontend interfaces. I'm particularly interested in Oracle technologies and data-driven application development.",
  objective: "To contribute to engineering teams building practical, well-architected software, while continuing to grow my skills in full-stack development and database systems."
};

export const skillsData: SkillGroup[] = [
  {
    category: "Programming",
    skills: [
      { name: "C" },
      { name: "C++" },
      { name: "Java" },
      { name: "C#" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "PHP" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "React" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "PHP" },
      { name: "Node.js" },
      { name: "Express.js" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "Oracle SQL" },
      { name: "PL/SQL" },
      { name: "MySQL" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Linux" }
    ]
  },
  {
    category: "Currently Learning",
    skills: [
      { name: "Oracle APEX" },
      { name: "Cloud Computing" },
      { name: "Cybersecurity" }
    ]
  },
  {
    category: "Mobile Learning",
    skills: [
      { name: "Flutter", level: "Learning" },
      { name: "Dart", level: "Learning" },
      { name: "Android Studio", level: "Learning" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "restaurant-reservation",
    title: "Restaurant Reservation System",
    type: "Personal Project",
    status: "private",
    description: "A restaurant reservation platform with menu browsing, online table booking, responsive UI, and an admin dashboard.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Database"],
    badge: "Private Repository"
  },
  {
    id: "agri-supply-chain",
    title: "Agricultural Supply Chain Management System",
    type: "Graduation Project",
    status: "graduation",
    description: "A platform connecting farmers, transporters, and store owners with AI-assisted decision support and real-time coordination.",
    technologies: ["PHP", "MySQL", "Web Development", "Database Design"],
    badge: "Graduation Project"
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
  },
  {
    id: "oracle-journey",
    title: "Oracle SQL / PL-SQL Practice",
    type: "Learning Repository",
    status: "private",
    description: "Personal repository documenting Oracle SQL, PL/SQL, and Oracle APEX practice with exercises and database concepts.",
    technologies: ["Oracle SQL", "PL/SQL", "Oracle APEX"],
    badge: "Private Repository"
  },
  {
    id: "mobile-learning",
    title: "Mobile Development Learning",
    type: "Learning",
    status: "learning",
    description: "Currently learning Flutter, Dart, and Android Studio to build mobile applications.",
    technologies: ["Flutter", "Dart", "Android Studio"],
    badge: "In Progress"
  }
];

export const experienceData: Experience[] = [
  {
    id: "dalil-training",
    title: "Full Stack Training Program",
    organization: "Dalil Group",
    period: "Ongoing",
    description: "Training in end-to-end web development, API integration, and production-level application architecture.",
    tags: ["Full-Stack", "API Development", "Web Development"]
  },
  {
    id: "bsc-degree",
    title: "B.Sc. Computer Science",
    organization: "Jadara University",
    period: "Graduated",
    description: "Studied algorithms, object-oriented design, relational databases, and software engineering fundamentals.",
    tags: ["Algorithms", "Object-Oriented Design", "Databases"]
  },
  {
    id: "oracle-sql-path",
    title: "Oracle SQL / PL-SQL Self-Study",
    organization: "Independent Learning",
    period: "Ongoing",
    description: "Self-directed practice with Oracle SQL, PL/SQL, relational schemas, stored procedures, and query optimization.",
    tags: ["Oracle DB", "PL/SQL", "Database Design"]
  },
  {
    id: "portfolio-building",
    title: "Personal Project Development",
    organization: "Independent",
    period: "Ongoing",
    description: "Building portfolio projects and open-source work to deepen skills in full-stack development and software design.",
    tags: ["React", "Node.js", "Full-Stack"]
  }
];

export const certificatesData: Certificate[] = [
  {
    id: "cert-oracle-sql",
    title: "Oracle Database SQL Specialist",
    issuer: "Oracle Academy",
    date: "Planned",
    status: "coming_soon"
  },
  {
    id: "cert-fullstack",
    title: "Full-Stack Developer",
    issuer: "Dalil Training Program",
    date: "Planned",
    status: "coming_soon"
  },
  {
    id: "cert-cybersecurity",
    title: "Cybersecurity & Network Defense",
    issuer: "Planned Certification Path",
    date: "Planned",
    status: "coming_soon"
  }
];

export const githubStatsData = {
  username: "mohammadalnajjar04",
  profileUrl: "https://github.com/mohammadalnajjar04",
  featuredRepos: [
    {
      name: "restaurant-reservation",
      description: "Restaurant reservation system built during full-stack training.",
      language: "TypeScript",
      stars: 0,
      forks: 0
    },
    {
      name: "agri-supply-chain",
      description: "Graduation project for agricultural supply chain management.",
      language: "PHP",
      stars: 0,
      forks: 0
    },
    {
      name: "oracle-plsql-practice",
      description: "Practice repository for Oracle SQL and PL/SQL development.",
      language: "PL/SQL",
      stars: 0,
      forks: 0
    }
  ]
};
