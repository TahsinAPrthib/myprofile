'use client'

import { motion } from 'framer-motion'

const AcademicBackground = () => {
  return (
    <section id="academic" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-10 shadow-lg max-w-3xl mx-auto"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-1">Education</h3>
              <p className="text-xl font-bold text-gray-900 dark:text-gray-100">United International University</p>
              <p className="text-gray-600 dark:text-gray-400">3rd Year, B.Sc. in Computer Science &amp; Engineering (CSE)</p>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-primary-600 mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-lg font-medium">C</span>
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-lg font-medium">C++</span>
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-lg font-medium">Java</span>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-primary-600 mb-2">Core Subjects</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1">
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
