'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-24 scroll-mt-28">
      <div className="max-w-container-max mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square border border-t-border bg-t-surface overflow-hidden group"
          >
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-t-background/80 backdrop-blur-sm p-4 border-t border-t-border">
              <div className="font-mono text-label-sm text-primary uppercase tracking-widest">
                DATA_ID: TAHSIN_A_PARTHIB
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-mono text-headline-md text-t-text uppercase">WHO_I_AM</h3>
              <div className="w-12 h-1 bg-primary"></div>
            </div>

            <div className="space-y-6 font-sans text-body-lg text-t-text/80 leading-relaxed">
              <p>
                I&apos;m an aspiring red teamer, building my foundations in cybersecurity.
                I focus on understanding how attackers find and exploit weaknesses in web applications, networks, and systems, and on documenting clear remediation steps.
              </p>
              <p>
                Right now I&apos;m actively learning through hands-on labs on TryHackMe and Hack The Box,
                breaking intentionally vulnerable machines, and taking detailed notes as I go.
                I&apos;m consistent, curious, and focused on improving every week.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <h4 className="font-mono text-label-sm text-primary uppercase tracking-widest">WHAT_I_DO_NOW</h4>
                <ul className="text-t-text/60 space-y-3 text-body-md font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">_</span>
                    TryHackMe &amp; Hack The Box labs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">_</span>
                    Web app &amp; Linux privilege escalation practice
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">_</span>
                    Basic reconnaissance &amp; exploitation workflows
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">_</span>
                    Documenting techniques and commands
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-mono text-label-sm text-primary uppercase tracking-widest">OBJECTIVES</h4>
                <ul className="text-t-text/60 space-y-3 text-body-md font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">_</span>
                    Junior red team / pentest roles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">_</span>
                    Strong web exploitation fundamentals
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">_</span>
                    Solid OSCP-style methodology
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">_</span>
                    Sharing CTF &amp; lab writeups
                  </li>
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


