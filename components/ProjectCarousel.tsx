'use client'
import { motion } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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

export default function ProjectCarousel() {
  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 px-4 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-emerald-400 font-display">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto font-light">
            Here are some of my recent works that showcase my skills and experience
          </p>
        </motion.div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-1"
                >
                  <Card className="bg-gray-800/50 border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-100 font-display">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-gray-800 border-gray-700 hover:bg-gray-700" />
          <CarouselNext className="bg-gray-800 border-gray-700 hover:bg-gray-700" />
        </Carousel>
      </div>
    </motion.section>
  )
} 