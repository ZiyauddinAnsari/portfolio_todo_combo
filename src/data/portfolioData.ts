import {
  Project,
  ProjectCategory,
  Skill,
  SkillCategory,
  Experience,
} from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "1",
    title: "Advanced Portfolio & Todo Combo",
    description:
      "A full-featured React TypeScript application combining portfolio and todo management with modern design.",
    longDescription:
      "This comprehensive application showcases modern web development practices with React, TypeScript, TailwindCSS, and Context API. Features include responsive design, state management, API integration, and smooth animations.",
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Context API",
      "Framer Motion",
      "React Router",
    ],
    category: ProjectCategory.WEB,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    demoUrl: "#",
    githubUrl: "https://github.com/RogerSteve/portfolio_todo_combo",
    featured: true,
    createdAt: new Date("2025-08-27"),
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with payment integration and inventory management.",
    longDescription:
      "Full-stack e-commerce platform built with MERN stack featuring user authentication, shopping cart, payment processing, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    category: ProjectCategory.WEB,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    createdAt: new Date("2025-07-15"),
  },
  {
    id: "3",
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with detailed forecasts and interactive maps.",
    longDescription:
      "React Native weather app with real-time data, 7-day forecasts, radar maps, and location-based weather alerts.",
    techStack: [
      "React Native",
      "TypeScript",
      "OpenWeather API",
      "MapBox",
      "Redux",
    ],
    category: ProjectCategory.MOBILE,
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    createdAt: new Date("2025-06-10"),
  },
  {
    id: "4",
    title: "Task Management API",
    description:
      "RESTful API for task management with authentication and real-time updates.",
    longDescription:
      "Scalable Node.js API with GraphQL, real-time subscriptions, role-based authentication, and comprehensive testing.",
    techStack: [
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "Socket.io",
      "Jest",
      "Docker",
    ],
    category: ProjectCategory.API,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    createdAt: new Date("2025-05-20"),
  },
  {
    id: "5",
    title: "AI Chat Application",
    description:
      "Intelligent chat application with natural language processing and sentiment analysis.",
    longDescription:
      "Advanced chat application integrating OpenAI API with real-time messaging, sentiment analysis, and smart response suggestions.",
    techStack: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "WebSocket",
      "React",
      "Machine Learning",
    ],
    category: ProjectCategory.AI_ML,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    createdAt: new Date("2025-04-05"),
  },
  {
    id: "6",
    title: "Cryptocurrency Tracker",
    description:
      "Real-time cryptocurrency tracking with portfolio management and price alerts.",
    longDescription:
      "Comprehensive crypto tracking application with portfolio management, price alerts, technical analysis, and market insights.",
    techStack: [
      "Vue.js",
      "Vuex",
      "Chart.js",
      "CoinGecko API",
      "PWA",
      "Firebase",
    ],
    category: ProjectCategory.WEB,
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    createdAt: new Date("2025-03-12"),
  },
];

export const skills: Skill[] = [
  // Frontend
  {
    id: "1",
    name: "React",
    category: SkillCategory.FRONTEND,
    proficiency: 9,
    icon: "⚛️",
  },
  {
    id: "2",
    name: "TypeScript",
    category: SkillCategory.FRONTEND,
    proficiency: 8,
    icon: "📘",
  },
  {
    id: "3",
    name: "Next.js",
    category: SkillCategory.FRONTEND,
    proficiency: 8,
    icon: "🔺",
  },
  {
    id: "4",
    name: "Vue.js",
    category: SkillCategory.FRONTEND,
    proficiency: 7,
    icon: "💚",
  },
  {
    id: "5",
    name: "TailwindCSS",
    category: SkillCategory.FRONTEND,
    proficiency: 9,
    icon: "🎨",
  },
  {
    id: "6",
    name: "SCSS",
    category: SkillCategory.FRONTEND,
    proficiency: 8,
    icon: "🎨",
  },

  // Backend
  {
    id: "7",
    name: "Node.js",
    category: SkillCategory.BACKEND,
    proficiency: 8,
    icon: "🟢",
  },
  {
    id: "8",
    name: "Express.js",
    category: SkillCategory.BACKEND,
    proficiency: 8,
    icon: "🚀",
  },
  {
    id: "9",
    name: "Python",
    category: SkillCategory.BACKEND,
    proficiency: 7,
    icon: "🐍",
  },
  {
    id: "10",
    name: "FastAPI",
    category: SkillCategory.BACKEND,
    proficiency: 7,
    icon: "⚡",
  },
  {
    id: "11",
    name: "GraphQL",
    category: SkillCategory.BACKEND,
    proficiency: 6,
    icon: "📊",
  },

  // Database
  {
    id: "12",
    name: "MongoDB",
    category: SkillCategory.DATABASE,
    proficiency: 8,
    icon: "🍃",
  },
  {
    id: "13",
    name: "PostgreSQL",
    category: SkillCategory.DATABASE,
    proficiency: 7,
    icon: "🐘",
  },
  {
    id: "14",
    name: "Redis",
    category: SkillCategory.DATABASE,
    proficiency: 6,
    icon: "🔴",
  },

  // Mobile
  {
    id: "15",
    name: "React Native",
    category: SkillCategory.MOBILE,
    proficiency: 7,
    icon: "📱",
  },
  {
    id: "16",
    name: "Flutter",
    category: SkillCategory.MOBILE,
    proficiency: 6,
    icon: "🦋",
  },

  // DevOps
  {
    id: "17",
    name: "Docker",
    category: SkillCategory.DEVOPS,
    proficiency: 7,
    icon: "🐳",
  },
  {
    id: "18",
    name: "AWS",
    category: SkillCategory.DEVOPS,
    proficiency: 6,
    icon: "☁️",
  },
  {
    id: "19",
    name: "Git",
    category: SkillCategory.DEVOPS,
    proficiency: 9,
    icon: "📝",
  },

  // Design
  {
    id: "20",
    name: "Figma",
    category: SkillCategory.DESIGN,
    proficiency: 7,
    icon: "🎨",
  },
  {
    id: "21",
    name: "Adobe XD",
    category: SkillCategory.DESIGN,
    proficiency: 6,
    icon: "🎨",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Innovation Labs",
    position: "Senior Full Stack Developer",
    description:
      "Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and established best practices for code quality and deployment.",
    startDate: new Date("2023-01-15"),
    endDate: undefined,
    isCurrentPosition: true,
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
  },
  {
    id: "2",
    company: "Digital Solutions Inc",
    position: "Frontend Developer",
    description:
      "Developed responsive web interfaces and collaborated with UX/UI designers to create engaging user experiences. Implemented modern JavaScript frameworks and optimized application performance.",
    startDate: new Date("2021-06-01"),
    endDate: new Date("2022-12-31"),
    isCurrentPosition: false,
    skills: ["React", "Vue.js", "JavaScript", "CSS3", "Webpack"],
  },
  {
    id: "3",
    company: "StartupXYZ",
    position: "Junior Developer",
    description:
      "Contributed to various web development projects, learned modern development practices, and gained experience with agile methodologies and team collaboration.",
    startDate: new Date("2020-08-15"),
    endDate: new Date("2021-05-31"),
    isCurrentPosition: false,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
  },
];
