'use client'
import { motion } from 'framer-motion'
import Header from '../../components/Header'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { technicalSkills, businessSkills } from '../../lib/data/about'

export default function Skills() {
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
              My Skills
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              A comprehensive overview of my technical and business capabilities, showcasing the diverse skill set I bring to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div variants={item}>
              <div className="bg-white/80 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl text-gray-900 dark:text-gray-200 mb-6">Technical Skills</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {technicalSkills.map((skill, index) => (
                    <motion.li 
                      key={index}
                      variants={item}
                      className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <div className="bg-white/80 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl text-gray-900 dark:text-gray-200 mb-6">Business Skills</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {businessSkills.map((skill, index) => (
                    <motion.li 
                      key={index}
                      variants={item}
                      className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 