'use client'

import { motion } from 'framer-motion'

const Achievements = () => {
  const achievements = [
    {
      title: 'TryHackMe Progress – tahsinaparthib1',
      description:
        'Actively working through red-team and web security learning paths on TryHackMe under the handle "tahsinaparthib1".',
      icon: '🔥',
      date: '2025',
      category: 'Labs',
    },
    {
      title: 'First Hack The Box Machines – tahsinaparthib',
      description:
        'Rooting beginner Hack The Box machines as "tahsinaparthib", focusing on clean methodology from recon to privilege escalation.',
      icon: '🏁',
      date: '2025',
      category: 'CTF / Labs',
    },
    {
      title: 'Security Notes & Writeups',
      description:
        'Started building private writeups and notes for each lab on TryHackMe and Hack The Box to solidify concepts.',
      icon: '📝',
      date: '2025',
      category: 'Learning',
    },
    {
      title: 'Red Team Learning Roadmap',
      description:
        'Created a personal roadmap focusing on networking, Linux, web app security, and scripting as a path to junior red team roles.',
      icon: '📚',
      date: '2025',
      category: 'Planning',
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/50 px-2 py-1 rounded-full">
                  {achievement.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{achievement.description}</p>
              <p className="text-gray-400 dark:text-gray-500 text-xs">{achievement.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

