'use client'
import { motion } from 'framer-motion'
import Header from '../../components/Header'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with Next.js and TypeScript",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "/project1.jpg",
    link: "#"
  },
  {
    title: "Project Two",
    description: "Full-stack application with real-time features",
    tags: ["React", "Node.js", "Socket.io"],
    image: "/project2.jpg",
    link: "#"
  },
  {
    title: "Project Three",
    description: "Mobile-first e-commerce platform",
    tags: ["Next.js", "Prisma", "Stripe"],
    image: "/project3.jpg",
    link: "#"
  },
]

export default function Projects() {
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
    <>
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
                My Projects
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Here are some of my recent projects that showcase my skills and experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group"
                >
                  <Card className="bg-white dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-gray-100 font-display">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className="bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </>
  )
} 