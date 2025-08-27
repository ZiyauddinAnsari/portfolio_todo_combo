import { useState } from 'react';
import { projects, projectCategories } from '../data/projects';
import type { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          A collection of projects that showcase my skills in web development, 
          from simple landing pages to complex full-stack applications.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search */}
          <div className="w-full lg:w-96">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            No projects found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search terms or category filter.
          </p>
        </div>
      )}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="card hover:shadow-lg transition-all duration-300 animate-slide-in group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image Placeholder */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <span className="text-gray-500 dark:text-gray-400">
            Project Image
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
            {getCategoryIcon(project.category)} {getCategoryLabel(project.category)}
          </span>

          {/* External Link */}
          <a
            href={project.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium text-sm group-hover:underline"
          >
            View Project
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function getCategoryIcon(category: Project['category']): string {
  const icons = {
    react: '⚛️',
    mobile: '📱',
    api: '🔌',
    fullstack: '🌐',
    other: '💼',
  };
  return icons[category] || '💼';
}

function getCategoryLabel(category: Project['category']): string {
  const labels = {
    react: 'React',
    mobile: 'Mobile',
    api: 'API',
    fullstack: 'Full Stack',
    other: 'Other',
  };
  return labels[category] || 'Other';
}