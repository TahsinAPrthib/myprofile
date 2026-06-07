'use client'

import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'THM_RED_TEAM_JOURNEY',
      description:
        'Tracking my progress through red-team–focused TryHackMe rooms, including enumeration, exploitation, and post-exploitation labs, with structured notes and screenshots.',
      technologies: ['TryHackMe', 'Kali Linux', 'Nmap', 'Burp Suite'],
      link: 'https://tryhackme.com/p/tahsinaparthib1',
      github: '#',
    },
    {
      title: 'HTB_LAB_METHODOLOGY',
      description:
        'Solving beginner Hack The Box machines to build fundamentals in recon, web exploitation, and privilege escalation, documenting each step for future reference.',
      technologies: ['Hack The Box', 'Linux', 'Nmap', 'Enum Tools'],
      link: 'https://app.hackthebox.com/profile/tahsinaparthib',
      github: '#',
    },
    {
      title: 'WEB_ATTACK_CHEAT_SHEET',
      description:
        'A growing personal cheat sheet of common web attacks (XSS, SQLi, LFI, auth bypass) with example payloads, detection tips, and basic mitigation ideas.',
      technologies: ['OWASP', 'Burp Suite', 'Notes', 'Markdown'],
      link: '#',
      github: '#',
    },
    {
      title: 'LINUX_PRIV_ESC_PRACTICE',
      description:
        'Practice environment and notes for Linux privilege escalation techniques, including SUID abuse, misconfigured services, and weak permissions.',
      technologies: ['Linux', 'Bash', 'GTFOBins', 'Notes'],
      link: '#',
      github: '#',
    },
    {
      title: 'TERMINAL_ELITE_PORTFOLIO',
      description:
        'This portfolio, built to present my red team learning journey, projects, and platforms in a clear and professional way.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
      github: '#',
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="max-w-container-max mx-auto px-margin">
        <div className="mb-16 space-y-4">
          <h2 className="font-mono text-headline-lg text-t-text uppercase tracking-tight">OPERATIONAL_PROJECTS</h2>
          <div className="w-24 h-1 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-t-surface border border-t-border overflow-hidden flex flex-col group hover:border-primary transition-colors duration-300"
            >
              <div className="h-2 bg-t-border group-hover:bg-primary transition-colors duration-300"></div>
              <div className="p-8 space-y-6 flex-grow flex flex-col">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase">PROJECT_ID: {index.toString().padStart(2, '0')}</span>
                  <h3 className="font-mono text-headline-md text-t-text uppercase leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="font-sans text-body-md text-t-text/60 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border border-t-border font-mono text-label-sm text-t-text/40 uppercase tracking-tighter"
                    >
                      [{tech}]
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-t-border flex gap-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-label-sm text-primary hover:underline underline-offset-8 transition-all"
                  >
                    RUN_LIVE_DEMO &gt;
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-label-sm text-t-text/50 hover:text-t-text hover:underline underline-offset-8 transition-all"
                  >
                    ACCESS_SOURCE &gt;
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


