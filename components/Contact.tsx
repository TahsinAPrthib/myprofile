'use client'

import { motion } from 'framer-motion'

const Contact = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tahsin-a-parthib-b16723343/' },
    { name: 'GitHub', url: 'https://github.com/TahsinAPrthib' },
    { name: 'pwn.college', url: 'https://pwn.college/hacker/172623' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/Tahsin-A-Parthib' },
    { name: 'Email', url: 'mailto:tahsinaparthib1@gmail.com' },
  ]

  return (
    <section id="contact" className="py-24">
      <div className="max-w-container-max mx-auto px-margin">
        <div className="mb-16 space-y-4">
          <h2 className="font-mono text-headline-lg text-t-text uppercase tracking-tight">SECURE_COMMUNICATIONS</h2>
          <div className="w-24 h-1 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="font-mono text-headline-md text-t-text uppercase">ESTABLISH_CONNECTION</h3>
              <p className="font-sans text-body-lg text-t-text/60 leading-relaxed max-w-md">
                "I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your visions. Feel free to reach out through any of the channels below."
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 border border-t-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <span className="font-mono text-primary text-xl">@</span>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-label-sm text-t-text/40 uppercase tracking-widest">EMAIL_ADDRESS</p>
                  <p className="font-mono text-body-md text-t-text tracking-tighter">tahsinaparthib1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 border border-t-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <span className="font-mono text-primary text-xl">#</span>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-label-sm text-t-text/40 uppercase tracking-widest">PHONE_ID</p>
                  <p className="font-mono text-body-md text-t-text tracking-tighter">+880 1321 659992</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 border border-t-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <span className="font-mono text-primary text-xl">!</span>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-label-sm text-t-text/40 uppercase tracking-widest">LOCATION_GPS</p>
                  <p className="font-mono text-body-md text-t-text tracking-tighter">DHAKA, BANGLADESH</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-t-surface border border-t-border p-10 space-y-10"
          >
            <div className="space-y-2">
              <h4 className="font-mono text-label-sm text-primary uppercase tracking-[0.2em]">SOCIAL_NODES</h4>
              <div className="w-full h-[1px] bg-t-border"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-body-md text-t-text/60 hover:text-primary hover:pl-2 transition-all duration-300 flex items-center gap-3 group"
                >
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                  {social.name.toUpperCase()}
                </a>
              ))}
            </div>

            <div className="pt-10 border-t border-t-border mt-auto">
              <div className="font-mono text-[10px] text-t-text/30 leading-relaxed uppercase">
                STATUS: READY_FOR_OUTREACH<br/>
                LATENCY: MINIMAL<br/>
                ENCRYPTION: ACTIVE
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact

