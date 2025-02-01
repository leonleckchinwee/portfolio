'use client'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin } from 'lucide-react'

export default function Contact() {
  const buttonClass = "w-[200px] border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm gap-2 sm:gap-3 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg group relative overflow-hidden"

  const buttonVariants = {
    hover: {
      borderColor: "rgba(20, 184, 166, 0.5)",
    }
  }

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 }
  }

  const iconTextVariants = {
    initial: { color: "rgb(75, 85, 99)" },
    hover: { color: "rgb(255, 255, 255)" }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-end gap-3 sm:gap-4"
    >
      <a href="mailto:leckchinwee.leon@gmail.com">
        <motion.div whileHover="hover" initial="initial">
          <Button 
            variant="outline" 
            className={buttonClass}
            asChild
          >
            <motion.div variants={buttonVariants}>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500"
                variants={overlayVariants}
              />
              <motion.div className="relative z-10 flex items-center gap-2">
                <motion.div variants={iconTextVariants}>
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
                <motion.span variants={iconTextVariants}>Email Me</motion.span>
              </motion.div>
            </motion.div>
          </Button>
        </motion.div>
      </a>

      <a href="https://github.com/leonleckchinwee" target="_blank" rel="noopener noreferrer">
        <motion.div whileHover="hover" initial="initial">
          <Button 
            variant="outline" 
            className={buttonClass}
            asChild
          >
            <motion.div variants={buttonVariants}>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500"
                variants={overlayVariants}
              />
              <motion.div className="relative z-10 flex items-center gap-2">
                <motion.div variants={iconTextVariants}>
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
                <motion.span variants={iconTextVariants}>GitHub</motion.span>
              </motion.div>
            </motion.div>
          </Button>
        </motion.div>
      </a>

      <a href="https://www.linkedin.com/in/leck-chin-wee" target="_blank" rel="noopener noreferrer">
        <motion.div whileHover="hover" initial="initial">
          <Button 
            variant="outline" 
            className={buttonClass}
            asChild
          >
            <motion.div variants={buttonVariants}>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500"
                variants={overlayVariants}
              />
              <motion.div className="relative z-10 flex items-center gap-2">
                <motion.div variants={iconTextVariants}>
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
                <motion.span variants={iconTextVariants}>LinkedIn</motion.span>
              </motion.div>
            </motion.div>
          </Button>
        </motion.div>
      </a>
    </motion.div>
  )
} 