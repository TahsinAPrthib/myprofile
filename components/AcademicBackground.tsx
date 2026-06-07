'use client'

import { motion } from 'framer-motion'

const AcademicBackground = () => {
  return (
    <section id="academic" className="py-24">
      <div className="max-w-container-max mx-auto px-margin">
        <div className="mb-16 space-y-4">
          <h2 className="font-mono text-headline-lg text-t-text uppercase tracking-tight">ACADEMIC_QUALIFICATIONS</h2>
          <div className="w-24 h-1 bg-primary"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-t-surface border border-t-border p-10 max-w-4xl"
        >
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-2">
                <span className="font-mono text-label-sm text-primary uppercase tracking-[0.2em]">INSTITUTION_ID</span>
                <h3 className="font-mono text-headline-md text-t-text uppercase">United International University</h3>
              </div>
              <div className="space-y-2 text-right">
                <span className="font-mono text-label-sm text-t-text/40 uppercase tracking-[0.2em]">STATUS</span>
                <div className="font-mono text-body-md text-primary">3rd Year, B.Sc. in CSE</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-label-sm text-primary">01</span>
                  <h4 className="font-mono text-label-sm text-t-text/80 uppercase tracking-widest border-b border-t-border pb-2 flex-grow">PROGRAMMING_LANGUAGES</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['C', 'C++', 'Java', 'Python'].map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-t-border/20 border border-t-border font-mono text-label-sm text-t-text/60 uppercase">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-label-sm text-primary">02</span>
                  <h4 className="font-mono text-label-sm text-t-text/80 uppercase tracking-widest border-b border-t-border pb-2 flex-grow">CORE_SUBJECTS</h4>
                </div>
                <ul className="font-mono text-body-md text-t-text/50 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">&gt;</span>
                    Data Structures &amp; Algorithms
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">&gt;</span>
                    Computer Networks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">&gt;</span>
                    Database Management Systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">&gt;</span>
                    Artificial Intelligence
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">&gt;</span>
                    Advance Object Oriented Programming
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-10 border-t border-t-border flex justify-between items-center opacity-30">
              <div className="font-mono text-[10px] tracking-widest uppercase">System: UIU_NODE_VERIFIED</div>
              <div className="font-mono text-[10px] tracking-widest uppercase">Encryption: AES-256-GCM</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AcademicBackground

