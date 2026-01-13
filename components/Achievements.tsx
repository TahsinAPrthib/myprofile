'use client'

import { motion } from 'framer-motion'

const Achievements = () => {
  const achievements = [
    {
      title: 'Codeforces Expert',
      description: 'Achieved Expert rating on Codeforces competitive programming platform',
      icon: '🏆',
      date: '2024',
      category: 'Competitive Programming',
    },
    {
      title: 'Hackathon Winner',
      description: 'First place in regional hackathon competition',
      icon: '🥇',
      date: '2024',
      category: 'Hackathon',
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributed to major open source projects',
      icon: '⭐',
      date: '2024',
      category: 'Open Source',
    },
    {
      title: 'Certification',
      description: 'Completed advanced web development certification',
      icon: '📜',
      date: '2024',
      category: 'Certification',
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Highlights of my accomplishments and milestones
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                  {achievement.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
              <p className="text-gray-400 text-xs">{achievement.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

