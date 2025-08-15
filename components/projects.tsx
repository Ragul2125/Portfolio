"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const projects = [
  {
  "id": "1",
  "title": "Blood Connect – Donor-Recipient Matching Platform",
  "description": "A full-stack progressive web app (PWA) built with the MERN stack to connect blood donors with recipients. Features include secure authentication, role-based access, eligibility validation, real-time blood availability tracking, location-based donor matching, and instant notifications for emergencies.",
  "image": "/bloodConnect.png",
  "technologies": ["React", "Node.js", "Express.js", "MongoDB", "PWA"],
  "githubUrl": "https://github.com/Ragul2125/Blood-Donation---web-App",
  "liveUrl": "https://vercel.com/ragul2125s-projects/blood-donation"
},
{
  "id": "2",
  "title": "SkillSync – Developer Collaboration Platform",
  "description": "A full-stack platform connecting skilled developers with projects, featuring AI-based matching, project creation, and team collaboration workflows. Includes dynamic dashboards for ongoing, completed, and new projects, integrated chat, notifications, and role-based access for both users and teams.",
  "image": "/SkillSync.png",
  "technologies": ["React", "Node.js", "Express.js", "MongoDB", "Framer Motion"],
  "githubUrl": "https://github.com/Ragul2125/SkillSync",
  "liveUrl": "https://vercel.com/ragul2125s-projects/skill-sync"
}
,
  {
  "id": "3",
  "title": "Talk2DB – Natural Language to SQL Interface",
  "description": "An AI-powered platform that converts natural language queries into SQL, enabling non-technical users to interact with MySQL and Snowflake databases. Features include an interactive React-based UI, real-time AI query generation using Gemini AI, and seamless backend integration with Flask APIs.",
  "image": "/talk2db.png",
  "technologies": ["React", "Flask", "Gemini AI", "MySQL", "Snowflake"],
  "githubUrl": "https://github.com/Ragul2125/Talk2DB-Final",
  "liveUrl": "https://talk2db-demo.vercel.app"
},

]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const router = useRouter()

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-card rounded-lg border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-fill transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button size="sm" variant="secondary" onClick={() => router.push(`/projects/${project.id}`)}>
                      View Details
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
