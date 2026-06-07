'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'ACADEMIC', href: '/academic' },
    { name: 'SKILLS', href: '/skills' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'ACHIEVEMENTS', href: '/achievements' },
    { name: 'CONTACT', href: '/contact' },
  ]

  return (

    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen ? 'bg-t-background border-primary' : 'bg-t-background border-t-border'
      }`}
    >
      <div className="max-w-container-max mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-mono text-body-md md:text-headline-md font-bold text-primary tracking-tighter z-[110] truncate mr-4"
        >
          TAHSIN.A.PARTHIB
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href.startsWith('/#') && pathname === '/')
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-mono text-label-sm tracking-widest transition-colors duration-200 hover:text-primary ${
                  isActive 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-t-text/70'
                }`}
              >
                {isActive && <span className="mr-1">&gt;</span>}
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden z-[110] flex-shrink-0">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 font-mono text-[10px] border border-primary text-primary bg-t-background"
          >
            {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-t-background flex flex-col justify-center items-center space-y-6 z-[105] md:hidden overflow-y-auto pt-20">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href.startsWith('/#') && pathname === '/')
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-mono text-headline-md tracking-widest transition-colors duration-200 hover:text-primary py-2 px-4 border-l-2 ${
                    isActive ? 'text-primary border-primary bg-primary/10' : 'text-t-text/70 border-transparent'
                  }`}
                >
                  {isActive && <span className="mr-2">&gt;</span>}
                  {item.name}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>


  )
}

export default Navbar



