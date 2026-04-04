'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Academic', href: '/academic' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-start py-6">
          <div className="hidden md:flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-start gap-6">
            <div className="flex items-center gap-8 text-left">
              <div className="relative w-[70px] h-[70px] rounded-full overflow-hidden border-2 border-primary-300 shadow-md shrink-0">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  sizes="70px"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">Tahsin - A - Parthib</span>
                <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1">Aspiring Red Teamer | Web App Security Learner | CTF Player</span>
              </div>
            </div>

            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {resolvedTheme === 'dark' ? '☀️' : '🌙'}
              </button>
            )}

            <div className="md:hidden pt-2">
              <button className="text-gray-700 dark:text-gray-300">☰</button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar


