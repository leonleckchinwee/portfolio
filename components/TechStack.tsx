'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

const techStack = [
  { 
    name: 'Next.js', 
    image: '/nextjs.png'  // Dark version of Next.js logo
  },
  { 
    name: 'TypeScript', 
    image: '/typescript.png'
  },
  { 
    name: 'Tailwind CSS', 
    image: '/tailwind.png'
  },
  { 
    name: 'Framer Motion', 
    image: '/framer.png'
  },
  { 
    name: 'Shadcn/ui', 
    image: '/shadcn.png'
  }
]

export default function TechStack() {
  return (
    <div>
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl font-semibold mb-8 text-gray-200"
      >
        Built with
      </motion.h3>
      <div className="flex justify-center gap-8 flex-wrap">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="w-28 h-28 flex items-center justify-center bg-gray-800/50 border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group">
              <CardContent className="p-0 flex flex-col items-center justify-center w-full h-full">
                <div className="relative w-12 h-12 mb-2">
                  <img 
                    src={tech.image} 
                    alt={tech.name} 
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
                  />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {tech.name}
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 