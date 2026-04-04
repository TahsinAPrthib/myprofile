'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 scroll-mt-28 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-2xl p-8 h-96 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m an aspiring red teamer, building my foundations in cybersecurity.
              I focus on understanding how attackers find and exploit weaknesses in web applications, networks, and systems, and on documenting clear remediation steps.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Right now I&apos;m actively learning through hands-on labs on TryHackMe and Hack The Box,
              breaking intentionally vulnerable machines, and taking detailed notes as I go.
              I&apos;m consistent, curious, and focused on improving every week.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">What I Do Now</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  <li>• TryHackMe &amp; Hack The Box labs</li>
                  <li>• Web app &amp; Linux privilege escalation practice</li>
                  <li>• Basic reconnaissance &amp; exploitation workflows</li>
                  <li>• Documenting techniques and commands</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">What I&apos;m Aiming For</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  <li>• Junior red team / pentest roles</li>
                  <li>• Strong web exploitation fundamentals</li>
                  <li>• Solid OSCP-style methodology</li>
                  <li>• Sharing CTF &amp; lab writeups</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

