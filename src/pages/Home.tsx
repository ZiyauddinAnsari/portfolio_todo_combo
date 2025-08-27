import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../data/projects';
import { fetchWeather } from '../services/weatherApi';
import type { WeatherData } from '../types';

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(true);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const data = await fetchWeather();
        setWeatherData(data);
      } catch (error) {
        console.error('Failed to load weather data:', error);
      } finally {
        setWeatherLoading(false);
      }
    };

    loadWeather();
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg mb-10 max-w-3xl mx-auto text-primary-50">
              I create amazing web applications using modern technologies like React, TypeScript, 
              and Node.js. Explore my projects and discover how I can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200"
              >
                View My Projects
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Weather Widget */}
        <section className="mb-16">
          <div className="card max-w-md mx-auto lg:mx-0">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Current Weather
            </h3>
            {weatherLoading ? (
              <div className="animate-pulse">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-2"></div>
                <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
              </div>
            ) : weatherData ? (
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {weatherData.location.name}, {weatherData.location.country}
                  </p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">
                    {weatherData.current.temp_c}°C
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {weatherData.current.condition.text}
                  </p>
                  <div className="flex space-x-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>💧 {weatherData.current.humidity}%</span>
                    <span>🌬️ {weatherData.current.wind_kph} km/h</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={weatherData.current.condition.icon}
                    alt={weatherData.current.condition.text}
                    className="w-16 h-16"
                  />
                </div>
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">
                Unable to load weather data
              </p>
            )}
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent and noteworthy projects that showcase my skills
              in web development and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="card hover:shadow-lg transition-shadow duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">
                      Project Image
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="btn-primary inline-flex items-center px-6 py-3"
            >
              View All Projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}