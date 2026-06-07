'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="py-12 md:py-24">
      <div className="max-w-container-max mx-auto px-margin">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-t-surface border border-t-border relative overflow-hidden"
        >
          {/* Decorative Top Bar */}
          <div className="h-8 bg-t-border/30 border-b border-t-border flex items-center px-4 space-x-2">
            <div className="w-3 h-3 bg-[#FF5F56]"></div>
            <div className="w-3 h-3 bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 bg-[#27C93F]"></div>
            <div className="ml-4 font-mono text-label-sm text-t-text/40">bash -- tahsin@kali:~</div>
          </div>
          
          <div className="p-4 md:p-12 space-y-8">

            <div className="font-mono text-headline-xl text-t-text break-words">
              <span className="text-primary">&gt; </span>HELLO_WORLD
            </div>
            
            <div className="font-mono text-headline-lg text-t-text/70 break-words leading-tight">
              I am Tahsin A. Parthib.<br/>
              <span className="text-primary underline underline-offset-8">Aspiring Red Teamer</span> | Web App Security Learner | CTF Player.
            </div>
            
            <div className="font-sans text-body-lg text-t-text/90 max-w-3xl mt-8 border-l-2 border-primary/30 pl-6 py-2 italic">
              "I focus on understanding how attackers find and exploit weaknesses in web applications, networks, and systems. My objective is to dissect structural vulnerabilities before they are leveraged maliciously."
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="font-mono text-label-sm border border-primary px-3 py-1 text-primary">
                STATUS: ACTIVE
              </div>
              <div className="font-mono text-label-sm border border-t-border px-3 py-1 text-t-text/50">
                LOCATION: DHAKA, BD
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero



