import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Tahsin - A - Parthib | Security Portfolio',
  description: 'Minimalist-Brutalist portfolio of Tahsin A. Parthib, Full-Stack Developer | Security & Infrastructure.',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="bg-t-background text-t-text font-sans antialiased selection:bg-primary selection:text-t-background">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>

          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
