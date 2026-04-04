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
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-transparent dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
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

