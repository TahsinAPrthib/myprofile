'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'RED_TEAM_FOUNDATIONS',
      skills: [
        { name: 'Recon & Enumeration', level: 50 },
        { name: 'OWASP Top 10 Weaknesses', level: 45 },
        { name: 'Network Protocol Analysis', level: 50 },
        { name: 'Linux Privilege Escalation', level: 40 },
        { name: 'Credential Access', level: 40 },
      ],
    },
    {
      title: 'OPERATIONAL_TOOLS',
      skills: [
        { name: 'Kali Linux OS', level: 50 },
        { name: 'Nmap Scanner', level: 50 },
        { name: 'Burp Suite Community', level: 40 },
        { name: 'TryHackMe Labs', level: 60 },
        { name: 'Hack The Box', level: 45 },
      ],
    },
    {
      title: 'DEVELOPMENT_CLI',
      skills: [
        { name: 'Python Scripting', level: 45 },
        { name: 'Bash & Shell Scripting', level: 50 },
        { name: 'Web Fundamentals (JS/HTML)', level: 55 },
        { name: 'Reporting & Markdown', level: 60 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24">
      <div className="max-w-container-max mx-auto px-margin">
        <div className="mb-16 space-y-4">
          <h2 className="font-mono text-headline-lg text-t-text uppercase">SKILL_MATRIX</h2>
          <div className="w-24 h-1 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between font-mono text-label-sm">
                      <span className="text-t-text/70">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-t-border/20 h-4 border border-t-border p-[2px]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-primary h-full"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, #0A0A0A 4px, #0A0A0A 6px)'
                        }}
                      />
                    </div>
                  </div>
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


