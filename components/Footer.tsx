'use client'

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-6 text-center text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Tahsin - A - Parthib. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

