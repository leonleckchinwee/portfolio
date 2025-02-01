'use client'
import { motion } from 'framer-motion'
import Header from '../../components/Header'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { education } from '../../lib/data/about'

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative max-w-6xl mx-auto px-4 pt-32 pb-20">
        <Link href="/" className="inline-block mb-12">
          <motion.div
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </motion.div>
        </Link>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={item} className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-emerald-400 font-display pb-1">
              About Me
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I am a Computer Science student passionate about creating innovative solutions through technology. 
              With a unique blend of technical skills and business acumen, I approach each project with both 
              creativity and analytical thinking.
            </p>
          </motion.div>

          <motion.div variants={item} className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display text-gray-900 dark:text-white mb-6 text-center">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-white/80 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-lg text-gray-900 dark:text-gray-200 mb-2">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">{edu.school}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
} 