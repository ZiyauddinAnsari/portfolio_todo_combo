import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  Thermometer,
  Newspaper,
} from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { weatherService } from "../services/weatherService";
import { newsService } from "../services/newsService";
import { WeatherData, NewsArticle } from "../types/api";
import { projects } from "../data/portfolioData";

const Home: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Use real weather API (no API key required!)
        const weatherData = await weatherService.getCurrentWeather();
        const newsData = newsService.getMockNewsData();

        setWeather(weatherData);
        setNews(newsData.slice(0, 3));
      } catch (error) {
        console.error("Error loading data:", error);
        // Fallback to mock data
        const weatherData = weatherService.getMockWeatherData();
        const newsData = newsService.getMockNewsData();

        setWeather(weatherData);
        setNews(newsData.slice(0, 3));
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-center space-x-2 text-primary-600"
                >
                  <MapPin size={16} />
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </motion.div>

                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                    Ziyauddin
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Full Stack Developer passionate about creating innovative web
                  and mobile applications with modern technologies and
                  exceptional user experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>

                <Button variant="outline" size="lg">
                  <Download size={20} className="mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/ZiyauddinAnsari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-primary-600"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/ziyauddin-ansari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 text-gray-700 hover:text-primary-600"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 p-1">
                  <div className="w-full h-full rounded-full bg-white p-4 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      alt="Ziyauddin Ansari"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-medium">Available</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3"
                >
                  <div className="text-xs font-medium text-gray-600">
                    5+ Years Experience
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "50+" },
              { label: "Happy Clients", value: "30+" },
              { label: "Years Experience", value: "5+" },
              { label: "Technologies", value: "20+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Here are some of my recent projects that showcase my skills and
              experience
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card hover className="h-full">
                  <div className="space-y-4">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Widgets Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Weather Widget */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Thermometer size={20} className="mr-2 text-primary-600" />
                    Weather Today
                  </h3>
                  {weather && (
                    <span className="text-sm text-gray-500">
                      {weather.location.name}, {weather.location.country}
                    </span>
                  )}
                </div>

                {loading ? (
                  <div className="animate-pulse space-y-3">
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ) : weather ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl font-bold text-primary-600">
                          {weather.current.temperature}°C
                        </div>
                        <div className="text-gray-600 capitalize">
                          {weather.current.description}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Feels like: </span>
                        <span className="text-gray-900 font-medium">
                          {weather.current.feelsLike}°C
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Humidity: </span>
                        <span className="text-gray-900 font-medium">
                          {weather.current.humidity}%
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-500">Weather data unavailable</div>
                )}
              </Card>
            </motion.div>

            {/* News Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Newspaper size={20} className="mr-2 text-primary-600" />
                    Latest Tech News
                  </h3>
                </div>

                {loading ? (
                  <div className="animate-pulse space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {news.map((article) => (
                      <div
                        key={article.id}
                        className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0"
                      >
                        <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 space-x-2">
                          <Calendar size={12} />
                          <span>
                            {article.publishedAt.toLocaleDateString()}
                          </span>
                          <span>•</span>
                          <span>{article.source.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life with cutting-edge
              technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-gray-100"
                >
                  Get In Touch
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/todos">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  Try Todo Manager
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
