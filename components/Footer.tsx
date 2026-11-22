'use client'

const Footer = () => {
  return (
    <footer className="bg-t-background border-t border-t-border mt-margin">
      <div className="max-w-container-max mx-auto px-margin py-gutter flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="font-mono text-label-sm uppercase tracking-widest text-t-text/50">
          © {new Date().getFullYear()} TAHSIN - A - PARTHIB. ENCRYPTED_COMMUNICATION_ESTABLISHED.
        </div>
        <div className="flex space-x-6 font-mono text-label-sm uppercase tracking-widest">
          <a href="https://github.com/TahsinAPrthib" target="_blank" rel="noopener noreferrer" className="text-t-text/70 hover:text-primary underline underline-offset-4 transition-all duration-300">GITHUB</a>
          <a href="https://www.linkedin.com/in/tahsin-a-parthib-b16723343/" target="_blank" rel="noopener noreferrer" className="text-t-text/70 hover:text-primary underline underline-offset-4 transition-all duration-300">LINKEDIN</a>
          <a href="https://pwn.college/hacker/172623" target="_blank" rel="noopener noreferrer" className="text-t-text/70 hover:text-primary underline underline-offset-4 transition-all duration-300">PWN.COLLEGE</a>
        </div>
      </div>
    </footer>
  )
}


export default Footer


