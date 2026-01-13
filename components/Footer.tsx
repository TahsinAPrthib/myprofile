'use client'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">My Portfolio</h3>
            <p className="text-gray-400">
              Building amazing digital experiences with modern technologies and creative solutions.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">GitHub</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">Twitter</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} My Portfolio. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

