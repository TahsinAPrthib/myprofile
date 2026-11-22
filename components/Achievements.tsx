'use client'

import { motion } from 'framer-motion'

type Achievement = {
  title: string
  description: string
  date: string
  category: string
  link?: string
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: 'PWN_COLLEGE_LINUX_LUMINARIUM',
      description:
        'Completed the Linux Luminarium dojo in full, 128 of 128 challenges, ranking in the top 8% of 47,000+ participants. Covered SUID abuse, PATH hijacking, permission misconfigurations, process control and shell scripting.',
      date: '2026',
      category: 'SECURITY',
      link: 'https://pwn.college/hacker/172623',
    },
    {
      title: 'UIU_CSE_PROJECT_SHOW',
      description:
        '2nd Runner-Up, UIU CSE Project Show, for Smart Drainage System (electronics project).',
      date: '2025',
      category: 'ELECTRONICS',
    },
  ]

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-container-max mx-auto px-margin">
        <div className="mb-16 space-y-4">
          <h2 className="font-mono text-headline-lg text-t-text uppercase tracking-tight">ACHIEVEMENTS</h2>
          <div className="w-24 h-1 bg-primary"></div>
        </div>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-t-surface border border-t-border p-8 relative flex flex-col md:flex-row md:items-center gap-8 group hover:border-primary transition-colors"
            >
              <div className="font-mono text-headline-md text-primary opacity-20 group-hover:opacity-100 transition-opacity">
                #{index.toString().padStart(2, '0')}
              </div>
              
              <div className="flex-grow space-y-2">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-label-sm border border-primary text-primary px-2 py-[1px]">
                    {achievement.category}
                  </span>
                  <span className="font-mono text-label-sm text-t-text/40">{achievement.date}</span>
                </div>
                <h3 className="font-mono text-headline-md text-t-text uppercase group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="font-sans text-body-md text-t-text/60 max-w-2xl">
                  {achievement.description}
                </p>
                {achievement.link && (
                  <div className="pt-2">
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-label-sm text-primary hover:underline underline-offset-8 transition-all"
                    >
                      VIEW_PROFILE &gt;
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements


