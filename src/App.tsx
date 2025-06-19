import React, { useState, useEffect } from 'react';
import { 
  User, 
  GraduationCap, 
  Code, 
  Trophy, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  ExternalLink,
  Award,
  Briefcase,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Python', level: 70, color: 'bg-blue-500' },
    { name: 'Java', level: 75, color: 'bg-orange-500' },
    { name: 'HTML/CSS', level: 80, color: 'bg-green-500' },
    { name: 'MySQL', level: 65, color: 'bg-purple-500' },
    { name: 'Git/GitHub', level: 70, color: 'bg-gray-700' },
    { name: 'VS Code', level: 85, color: 'bg-blue-600' }
  ];

  const projects = [
    {
      title: 'Automated Street Lighting with Smart Grid Energy Harvesting',
      description: 'An intelligent street lighting system that combines energy harvesting from smart grids with automated lighting control and danger detection capabilities.',
      tech: ['Python', 'IoT', 'Smart Grid', 'Sensors'],
      features: ['Energy Harvesting', 'Automated Control', 'Danger Detection', 'Smart Grid Integration']
    },
    {
      title: 'Online Recruitment System',
      description: 'A comprehensive web-based recruitment platform that streamlines the hiring process for both employers and job seekers.',
      tech: ['HTML', 'CSS', 'MySQL', 'Web Development'],
      features: ['Job Posting', 'Application Management', 'Candidate Screening', 'Database Integration']
    }
  ];

  const certifications = [
    { title: 'Internship', organization: 'Coincent', year: '2024', icon: Briefcase },
    { title: 'Data Structures and Algorithms', organization: 'Coursera', year: '2024', icon: Code },
    { title: 'Machine Learning', organization: 'Coursera', year: '2024', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">BK</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              Bhuvaneswar
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Kapadam
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-2">Aspiring AI Developer</p>
            <p className="text-lg text-gray-500">B.Tech CSE - AIML | Alliance University</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Learn More
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 font-medium"
            >
              Get In Touch
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm a computer science student who loves working with artificial intelligence and machine learning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl">
                <User className="text-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Background</h3>
                <p className="text-gray-600">
                  I'm studying Computer Science with a focus on AI and Machine Learning at Alliance University. 
                  I enjoy solving problems with code and learning about new technologies that can help make life better.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="text-blue-600 mt-1" size={24} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">B.Tech in CSE (AIML)</h4>
                      <p className="text-blue-600 font-medium">Alliance University</p>
                      <p className="text-gray-600">Graduation: 2026 | CGPA: 7.0</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="text-teal-600 mt-1" size={24} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">12th Grade</h4>
                      <p className="text-teal-600 font-medium">Sri Sai Kurpa Junior College, Anantapur</p>
                      <p className="text-gray-600">Score: 61.1%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="text-green-600 mt-1" size={24} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">10th Grade</h4>
                      <p className="text-green-600 font-medium">Govt High School, Anantapur</p>
                      <p className="text-gray-600">Score: 79.3%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for modern software development and AI applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Code className="mx-auto text-blue-600 mb-4" size={40} />
              <h3 className="font-semibold text-gray-900 mb-2">Programming</h3>
              <p className="text-gray-600 text-sm">Python, Java</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <ExternalLink className="mx-auto text-green-600 mb-4" size={40} />
              <h3 className="font-semibold text-gray-900 mb-2">Web Tech</h3>
              <p className="text-gray-600 text-sm">HTML, CSS</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Award className="mx-auto text-purple-600 mb-4" size={40} />
              <h3 className="font-semibold text-gray-900 mb-2">Database</h3>
              <p className="text-gray-600 text-sm">MySQL</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Github className="mx-auto text-gray-700 mb-4" size={40} />
              <h3 className="font-semibold text-gray-900 mb-2">Tools</h3>
              <p className="text-gray-600 text-sm">Git, GitHub, VS Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Innovative solutions combining technology with real-world applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Continuous learning and professional development in cutting-edge technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 text-center">
                <cert.icon className="mx-auto text-blue-600 mb-4" size={48} />
                <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{cert.organization}</p>
                <p className="text-gray-500 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that showcase dedication to continuous improvement and learning.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8 border border-blue-200 max-w-md text-center">
              <Trophy className="mx-auto text-yellow-500 mb-4" size={64} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">200+ Problems Solved</h3>
              <p className="text-blue-600 font-medium mb-2">HackerRank Platform</p>
              <p className="text-gray-600">Java Programming</p>
              <div className="mt-4 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium inline-block">
                Problem Solving Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate on exciting AI projects or discuss opportunities in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="mailto:bhuvaneswarkapadam@gmail.com"
              className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors duration-200 group"
            >
              <Mail className="mx-auto text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-200" size={40} />
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 text-sm">bhuvaneswarkapadam@gmail.com</p>
            </a>

            <a
              href="tel:+919182929401"
              className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors duration-200 group"
            >
              <Phone className="mx-auto text-green-400 mb-4 group-hover:scale-110 transition-transform duration-200" size={40} />
              <h3 className="font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300 text-sm">+91-9182929401</p>
            </a>

            <a
              href="https://linkedin.com/in/bhuvaneswar-k"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors duration-200 group"
            >
              <Linkedin className="mx-auto text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-200" size={40} />
              <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-300 text-sm">linkedin.com/in/bhuvaneswar-k</p>
            </a>

            <a
              href="https://github.com/Bhuvaneswarkapadam"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors duration-200 group"
            >
              <Github className="mx-auto text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-200" size={40} />
              <h3 className="font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-300 text-sm">github.com/Bhuvaneswarkapadam</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Bhuvaneswar Kapadam. Crafted with passion for innovation and excellence.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;