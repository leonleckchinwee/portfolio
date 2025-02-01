'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur-md opacity-50" />
        <div className="relative w-full h-full rounded-full border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Leon's Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center lg:text-left max-w-xl"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-emerald-400 font-display"
        >
          LEON
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light"
        >
          I am a passionate software developer and business analyst currently pursuing my degree in Computer Science
        </motion.p>
      </motion.div>
    </div>
  )
} 