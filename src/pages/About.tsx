import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Mail,
  Download,
  Award,
  Book,
  Target,
} from "lucide-react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { skills, experiences } from "../data/portfolioData";
import { SkillCategory } from "../types/portfolio";

const About: React.FC = () => {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, typeof skills>);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience
            creating innovative web and mobile applications using modern
            technologies.
          </p>
        </motion.div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-200">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                      alt="Roger Steve"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Roger Steve
                  </h2>
                  <p className="text-gray-600">Full Stack Developer</p>

                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>Ahmedabad, India</span>
                    </div>
                    <div className="flex items-center">
                      <Mail size={16} className="mr-1" />
                      <span>Available for hire</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <Download size={20} className="mr-2" />
                  Download Resume
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Book size={24} className="mr-2 text-primary-600" />
                My Story
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  I started my journey in web development 5 years ago, driven by
                  curiosity and a passion for solving complex problems through
                  technology. What began as a hobby quickly evolved into a
                  career dedicated to creating exceptional digital experiences.
                </p>
                <p>
                  Throughout my career, I've had the privilege of working with
                  diverse teams and clients, from startups to enterprise
                  companies, helping them bring their visions to life through
                  innovative web and mobile applications.
                </p>
                <p>
                  I believe in continuous learning and staying up-to-date with
                  the latest technologies and best practices in the
                  ever-evolving world of software development.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target size={24} className="mr-2 text-primary-600" />
                What I Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Full Stack Development",
                  "React & Next.js Apps",
                  "Mobile Development",
                  "API Design & Development",
                  "Database Architecture",
                  "Cloud Deployment",
                ].map((service) => (
                  <div
                    key={service}
                    className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Skills & Technologies
          </h2>

          <div className="space-y-8">
            {Object.entries(skillsByCategory).map(
              ([category, categorySkills]) => (
                <Card key={category}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Award size={20} className="mr-2 text-primary-600" />
                    {category}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.id}
                        className="flex items-center space-x-3"
                      >
                        <div className="text-2xl">{skill.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-gray-900">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {skill.proficiency}/10
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width: `${(skill.proficiency / 10) * 100}%`,
                              }}
                              transition={{ duration: 1, delay: 0.8 }}
                              className="bg-primary-600 h-2 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )
            )}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Professional Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <Card key={experience.id} className="relative">
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Calendar size={24} className="text-primary-600" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {experience.position}
                        </h3>
                        <p className="text-primary-600 font-medium">
                          {experience.company}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2 md:mt-0">
                        <Calendar size={16} />
                        <span>
                          {experience.startDate.toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}{" "}
                          -
                          {experience.isCurrentPosition
                            ? " Present"
                            : ` ${experience.endDate?.toLocaleDateString(
                                "en-US",
                                { month: "long", year: "numeric" }
                              )}`}
                        </span>
                        {experience.isCurrentPosition && (
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
