'use client'

import { motion } from 'framer-motion'

const AcademicBackground = () => {
  return (
    <section id="academic" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Academic Background</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Education and foundational skills from my CSE journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 md:p-10 shadow-lg max-w-3xl mx-auto"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-1">Education</h3>
              <p className="text-xl font-bold text-gray-900">United International University</p>
              <p className="text-gray-600">3rd Year, B.Sc. in Computer Science &amp; Engineering (CSE)</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-primary-600 mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg font-medium">C</span>
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg font-medium">C++</span>
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg font-medium">Java</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-primary-600 mb-2">Core Subjects</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Data Structures &amp; Algorithms (DSA)</li>
                <li>• Computer Networks</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AcademicBackground
