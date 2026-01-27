'use client'

import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'TryHackMe Red Team Journey',
      description:
        'Tracking my progress through red-team–focused TryHackMe rooms, including enumeration, exploitation, and post-exploitation labs, with structured notes and screenshots.',
      technologies: ['TryHackMe', 'Kali Linux', 'Nmap', 'Burp Suite'],
      image: '🧪',
      link: 'https://tryhackme.com/p/tahsinaparthib1',
      github: '#',
    },
    {
      title: 'Hack The Box Beginner Lab Notes',
      description:
        'Solving beginner Hack The Box machines to build fundamentals in recon, web exploitation, and privilege escalation, documenting each step for future reference.',
      technologies: ['Hack The Box', 'Linux', 'Nmap', 'Enum Tools'],
      image: '📦',
      link: 'https://app.hackthebox.com/profile/tahsinaparthib',
      github: '#',
    },
    {
      title: 'Web Attack Cheat Sheet (In Progress)',
      description:
        'A growing personal cheat sheet of common web attacks (XSS, SQLi, LFI, auth bypass) with example payloads, detection tips, and basic mitigation ideas.',
      technologies: ['OWASP', 'Burp Suite', 'Notes', 'Markdown'],
      image: '🛠️',
      link: '#',
      github: '#',
    },
    {
      title: 'Linux Privilege Escalation Practice',
      description:
        'Practice environment and notes for Linux privilege escalation techniques, including SUID abuse, misconfigured services, and weak permissions.',
      technologies: ['Linux', 'Bash', 'GTFOBins', 'Notes'],
      image: '🐧',
      link: '#',
      github: '#',
    },
    {
      title: 'Security-Focused Portfolio',
      description:
        'This portfolio, built to present my red team learning journey, projects, and platforms in a clear and professional way.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '💼',
      link: '#',
      github: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">My Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A collection of security-focused projects and labs that showcase my red team learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-1"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 font-semibold text-sm flex items-center gap-1"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

