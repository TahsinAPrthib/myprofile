'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'SECURITY',
      skills: [
        'Linux privilege escalation (SUID, PATH, permissions)',
        'Kali Linux',
        'Nmap',
        'Burp Suite',
        'Metasploit (fundamentals)',
        'CVSS & EPSS',
      ],
    },
    {
      title: 'LANGUAGES',
      skills: [
        'Python',
        'TypeScript',
        'JavaScript',
        'Java',
        'Bash',
        'C',
        'C++',
        'SQL',
        'x86-64 Assembly (basic)',
      ],
    },
    {
      title: 'WEB_AND_DATA',
      skills: [
        'Next.js',
        'React',
        'Node.js',
        'Prisma',
        'PostgreSQL',
        'SQLite',
        'Flask',
        'REST APIs',
        'Tailwind CSS',
      ],
    },
    {
      title: 'TOOLS',
      skills: ['Git', 'Docker', 'Vercel', 'Linux', 'scikit-learn', 'pandas', 'JavaFX', 'Maven'],
    },
  ]

  return (
    <section id="skills" className="py-24">
      <div className="max-w-container-max mx-auto px-margin">
        <div className="mb-16 space-y-4">
          <h2 className="font-mono text-headline-lg text-t-text uppercase">SKILL_MATRIX</h2>
          <div className="w-24 h-1 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-t-surface border border-t-border p-8"
            >
              <h3 className="font-mono text-label-sm text-primary uppercase tracking-widest mb-8 border-b border-t-border pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-t-border/20 border border-t-border font-mono text-label-sm text-t-text/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


