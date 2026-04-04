'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/tahsin-a-parthib-b16723343/' },
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/TahsinAPrthib' },
    { name: 'TryHackMe', icon: '🧪', url: 'https://tryhackme.com/p/tahsinaparthib1' },
    { name: 'Hack The Box', icon: '📦', url: 'https://app.hackthebox.com/profile/tahsinaparthib' },
    { name: 'Codeforces', icon: '⚔️', url: 'https://codeforces.com/profile/Tahsin-A-Parthib' },
    { name: 'Twitter', icon: '🐦', url: 'https://x.com/tahsin_parthib' },
    { name: 'Email', icon: '📧', url: 'mailto:tahsinaparthib1@gmail.com' },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions. Feel free to reach out through any of the channels below.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center text-2xl">
                  📧
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">tahsinaparthib1@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center text-2xl">
                  📱
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Phone</p>
                  <p className="text-gray-600 dark:text-gray-400">+880 1321 659992</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center text-2xl hover:bg-primary-100 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

