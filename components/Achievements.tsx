'use client'

import { motion } from 'framer-motion'

const Achievements = () => {
  const achievements = [
    {
      title: 'TRYHACKME_PROGRESS_NODE',
      description:
        'Actively working through red-team and web security learning paths on TryHackMe under the handle "tahsinaparthib1".',
      date: '2025',
      category: 'LABS',
    },
    {
      title: 'HTB_INITIAL_ROOTS',
      description:
        'Rooting beginner Hack The Box machines as "tahsinaparthib", focusing on clean methodology from recon to privilege escalation.',
      date: '2025',
      category: 'CTF',
    },
    {
      title: 'SECURITY_DATA_LOGGING',
      description:
        'Started building private writeups and notes for each lab on TryHackMe and Hack The Box to solidify concepts.',
      date: '2025',
      category: 'INTEL',
    },
    {
      title: 'RED_TEAM_STRATEGIC_PLAN',
      description:
        'Created a personal roadmap focusing on networking, Linux, web app security, and scripting as a path to junior red team roles.',
      date: '2025',
      category: 'STRATEGY',
    },
  ]

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-container-max mx-auto px-margin">
        <div className="mb-16 space-y-4">
          <h2 className="font-mono text-headline-lg text-t-text uppercase tracking-tight">VERIFIED_RECORDS</h2>
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
              </div>

              <div className="hidden md:block font-mono text-[10px] text-t-text/20 uppercase tracking-[0.3em] vertical-text">
                LOG_ENTRY_VALID
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements


