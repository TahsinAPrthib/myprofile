'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Red Team Basics',
      skills: [
        { name: 'Recon & Enumeration', level: 50 },
        { name: 'Web App Weaknesses (OWASP)', level: 45 },
        { name: 'Computer Networks', level: 50 },
        { name: 'Linux Privilege Escalation (Labs)', level: 40 },
        { name: 'Password & Brute Force Basics', level: 40 },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Kali Linux', level: 50 },
        { name: 'Nmap', level: 50 },
        { name: 'Burp Suite (Basics)', level: 40 },
        { name: 'TryHackMe', level: 60 },
        { name: 'Hack The Box', level: 45 },
      ],
    },
    {
      title: 'Programming & Scripting',
      skills: [
        { name: 'Python (small scripts)', level: 45 },
        { name: 'Bash & Linux CLI', level: 50 },
        { name: 'JavaScript / Web Basics', level: 55 },
        { name: 'Note-taking & Reporting', level: 60 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">My Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Foundations, tools, and platforms I&apos;m using to build my red team skillset
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full"
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

