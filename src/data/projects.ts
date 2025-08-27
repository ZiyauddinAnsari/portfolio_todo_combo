import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
    image: '/images/ecommerce.jpg',
    externalLink: 'https://github.com/example/ecommerce',
    category: 'fullstack',
    featured: true,
  },
  {
    id: '2',
    title: 'Weather App',
    description: 'A responsive weather application that provides real-time weather data and forecasts. Built with React and integrated with OpenWeather API.',
    techStack: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'CSS3'],
    image: '/images/weather-app.jpg',
    externalLink: 'https://github.com/example/weather-app',
    category: 'react',
    featured: true,
  },
  {
    id: '3',
    title: 'Task Management API',
    description: 'RESTful API for task management with user authentication, CRUD operations, and real-time notifications. Built with Express.js and PostgreSQL.',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Socket.io'],
    image: '/images/api.jpg',
    externalLink: 'https://github.com/example/task-api',
    category: 'api',
    featured: false,
  },
  {
    id: '4',
    title: 'React Native Chat App',
    description: 'Cross-platform mobile chat application with real-time messaging, file sharing, and push notifications.',
    techStack: ['React Native', 'Firebase', 'TypeScript', 'Expo'],
    image: '/images/chat-app.jpg',
    externalLink: 'https://github.com/example/chat-app',
    category: 'mobile',
    featured: true,
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and skills. Built with Next.js and deployed on Vercel.',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    image: '/images/portfolio.jpg',
    externalLink: 'https://github.com/example/portfolio',
    category: 'react',
    featured: false,
  },
  {
    id: '6',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for visualizing complex data sets with charts, graphs, and real-time updates.',
    techStack: ['React', 'D3.js', 'TypeScript', 'Node.js', 'WebSockets'],
    image: '/images/dashboard.jpg',
    externalLink: 'https://github.com/example/dashboard',
    category: 'fullstack',
    featured: false,
  },
];

export const featuredProjects = projects.filter(project => project.featured);

export const projectCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'react', label: 'React' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'api', label: 'API' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'other', label: 'Other' },
] as const;