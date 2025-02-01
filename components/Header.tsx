'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
]

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 sm:px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="group"
          >
            <Home className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300" />
          </motion.div>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="flex gap-4 sm:gap-6 items-center">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.05 }}
              >
                <Link 
                  href={item.href}
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-transparent bg-transparent border-gray-200 dark:border-gray-700 hover:border-teal-500/50 dark:hover:border-teal-400/50 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </motion.div>
        </div>
      </nav>
    </header>
  )
} 