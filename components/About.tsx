'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 h-96 flex items-center justify-center overflow-hidden">
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
            <h3 className="text-2xl font-bold text-gray-900">Who I Am</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate developer with a love for creating innovative solutions 
              and bringing ideas to life. With experience in modern web technologies, 
              I enjoy building applications that make a difference.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a career 
              where I continuously learn and adapt to new challenges. I believe in writing 
              clean, maintainable code and creating user experiences that are both beautiful 
              and functional.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What I Do</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Full Stack Development</li>
                  <li>• UI/UX Design</li>
                  <li>• Problem Solving</li>
                  <li>• Code Optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What I Want To Do</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Build Scalable Systems</li>
                  <li>• Contribute to Open Source</li>
                  <li>• Mentor Others</li>
                  <li>• Learn New Technologies</li>
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

