

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'Django', 'PostgreSQL'] },
    { category: 'Tools & Others', items: ['Git', 'Docker', 'AWS', 'Figma', 'Jest'] },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovation Co.',
      description: 'Leading development of scalable web applications using React, TypeScript, and Node.js.',
    },
    {
      year: '2022',
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained multiple client projects using modern web technologies.',
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'StartUp Inc.',
      description: 'Built responsive user interfaces and improved user experience for web applications.',
    },
    {
      year: '2019',
      title: 'Computer Science Graduate',
      company: 'University of Technology',
      description: 'Completed Bachelor\'s degree in Computer Science with focus on software engineering.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Passionate developer with 5+ years of experience creating modern web applications
          and solving complex problems through code.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Profile */}
        <div className="lg:col-span-1">
          <div className="card text-center">
            <div className="w-48 h-48 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              John Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full-Stack Developer
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                🐙 GitHub
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                💼 LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                🐦 Twitter
              </a>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              My Story
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Hello! I'm a passionate full-stack developer with over 5 years of experience 
                building web applications that make a difference. My journey started with a 
                curiosity about how websites work, and it has evolved into a deep love for 
                creating elegant solutions to complex problems.
              </p>
              <p>
                I specialize in modern web technologies like React, TypeScript, and Node.js, 
                but I'm always eager to learn new tools and frameworks. I believe in writing 
                clean, maintainable code and creating user experiences that delight and engage.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, 
                writing technical blog posts, or exploring the latest trends in web development. 
                I'm also passionate about mentoring junior developers and helping them grow 
                in their careers.
              </p>
            </div>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              What I Do
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  🚀 Web Development
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Building responsive, fast, and scalable web applications using modern frameworks and best practices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  🎨 UI/UX Design
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Creating intuitive user interfaces that provide excellent user experiences across all devices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  ⚡ Performance Optimization
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Optimizing applications for speed, accessibility, and search engine visibility.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  🔧 Technical Consulting
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Providing technical guidance and architecture decisions for complex projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={skillGroup.category} className="card animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Experience Timeline
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:pl-8 pl-12 md:pr-0'}`}>
                  <div className="card">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-primary-600 font-semibold text-sm">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <h4 className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {item.company}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}