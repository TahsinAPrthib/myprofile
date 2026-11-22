'use client'

import { motion } from 'framer-motion'

type Project = {
  title: string
  description: string
  technologies: string[]
  link?: string
  github: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'BOI_MOHOL',
      description:
        'Bangla-language book platform for reading, reviews and book exchange. Catalogue of 35,000+ public-domain titles, per-listing private chat, admin moderation tools, Google OAuth sign-in, Cloudinary image uploads, Bangla-aware search. 21 data models across 22 schema migrations. Deployed on Vercel with managed PostgreSQL.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth', 'Tailwind'],
      link: 'https://boimohol-delta.vercel.app',
      github: 'https://github.com/TahsinAPrthib/Boimohol',
    },
    {
      title: 'CVE_SEVERITY_MONITOR',
      description:
        'Pipeline that pulls CVE records from the NIST NVD API v2.0 and enriches them with FIRST.org EPSS exploit-probability scores. Compares five scikit-learn classifiers (Naive Bayes, Decision Tree, Random Forest, AdaBoost, SVM) for 4-class severity classification. Flask REST API with single and batch endpoints, plus a background service that polls NVD every 6 hours and logs High/Critical findings to SQLite.',
      technologies: ['Python', 'scikit-learn', 'pandas', 'Flask', 'SQLite', 'Docker'],
      github: 'https://github.com/TahsinAPrthib/AI-Powered-Vulnerability-Scanner',
    },
    {
      title: 'IMAN_CONNECT',
      description:
        'Java desktop application for prayer, Quran, Ramadan and dhikr tracking, with a Q&A module where registered scholars answer user-submitted questions. 27 controllers and 14 domain models in an MVC structure, pooled SQLite connections, role-based accounts for users, scholars and administrators. Group course project.',
      technologies: ['Java 17', 'JavaFX', 'Maven', 'SQLite', 'HikariCP'],
      github: 'https://github.com/TahsinAPrthib/Iman-connect',
    },
    {
      title: 'GRADIENT',
      description:
        'Student-alumni mentorship and referral platform. Authentication, 7 data models, 12 application routes.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com/TahsinAPrthib/Gradient',
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
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-label-sm text-primary hover:underline underline-offset-8 transition-all"
                    >
                      RUN_LIVE_DEMO &gt;
                    </a>
                  )}
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


