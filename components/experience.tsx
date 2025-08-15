"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, MapPin, Users, Target, Award } from "lucide-react"

const experiences = [
  {
  "title": "Lead Full Stack Developer",
  "company": "Whisprnet.ai",
  "location": "Remote",
  "duration": "2025 - Present",
  "icon": "💡",
  "details": {
    "description": "Leading the full development team in building and integrating AI-powered hiring automation and onboarding platforms using MERN stack and Next.js.",
    "achievements": [
      "Directed and mentored a 4-member development team through the entire product lifecycle",
      "Developed and customized multi-tenant onboarding dashboards with branding, plan controls, and agent toggles",
      "Integrated third-party APIs (Slack, Gmail, Zoom, Greenhouse) to streamline hiring operations",
      "Connected UI workflows with AI agents (e.g., Maya) to automate HR and manager tasks"
    ],
    "technologies": ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Slack API", "Gmail API", "Zoom API"],
    "teamSize": "4 developers (led entire team)",
    "impact": "Automated hiring workflows"
  }
},
  {
  "title": "Frontend Developer",
  "company": "Construct Ease",
  "location": "Remote",
  "duration": "Jan 2025 - Apr 2025",
  "icon": "🏗️",
  "details": {
    "description": "Led frontend development for a construction management platform, delivering scalable UI and advanced features.",
    "achievements": [
      "Implemented fully dynamic white-label routing and role-based views",
      "Built modular table components for flexible data representation",
      "Integrated on-demand PDF/Excel report generation using serverless APIs"
    ],
    "technologies": ["React", "Redux", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    "teamSize": "4 developers",
    "impact": "Reduced manual reporting"
  }
},
  {
  "title": "Frontend Developer Intern",
  "company": "Clients Bridge",
  "location": "Remote",
  "duration": "Jan 2024 - Dec 2024",
  "icon": "🌐",
  "details": {
    "description": "Developed responsive, role-based frontends for a task outsourcing platform serving multiple user roles.",
    "achievements": [
      "Built and integrated project listing, bidding, and role-based dashboard features",
      "Implemented real-time updates for bids and notifications using WebSockets",
      "Collaborated with backend team to deliver production-ready, clean, and scalable features"
    ],
    "technologies": ["React", "JavaScript", "CSS3", "WebSockets", "REST APIs"],
    "teamSize": "3 developers",
    "impact": "Enhanced platform interactivity"
  }
}
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in fullstack development
          </p>
        </motion.div>

        {/* Experience Timeline with Pipeline */}
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Central Pipeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-background shadow-lg z-10 hidden md:block"
                >
                  <div className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-20"></div>
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className={`relative overflow-hidden bg-card rounded-xl border shadow-sm hover:shadow-xl transition-all duration-500 group w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={
                      hoveredCard === index
                        ? {
                            background: [
                              "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                              "linear-gradient(90deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
                              "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
                              "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <div className="relative z-10 p-6">
                    {/* Basic Info */}
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className="text-3xl"
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {exp.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="font-semibold text-blue-600 mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Info on Hover */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={hoveredCard === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border/50 space-y-4">
                        <p className="text-sm text-muted-foreground">{exp.details.description}</p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <Users className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                            <div className="text-xs font-medium">{exp.details.teamSize}</div>
                          </div>
                          <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <Target className="w-4 h-4 text-green-600 mx-auto mb-1" />
                            <div className="text-xs font-medium">{exp.details.impact}</div>
                          </div>
                          <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                            <Award className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                            <div className="text-xs font-medium">{exp.details.achievements.length} wins</div>
                          </div>
                        </div>

                        {/* Key Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.details.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start text-xs text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-1">
                            {exp.details.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Connection Line to Pipeline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    className={`absolute top-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-1/2 hidden md:block ${
                      index % 2 === 0 ? "right-0 translate-x-full origin-left" : "left-0 -translate-x-full origin-right"
                    }`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Pipeline Flow Animation */}
          <motion.div
            className="absolute left-1/2 top-0 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 hidden md:block"
            animate={{
              y: [0, 600],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        {/* Career Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-xl font-bold">2+</div>
                <div className="text-xs opacity-90">Years</div>
              </div>
              <div>
                <div className="text-xl font-bold">3</div>
                <div className="text-xs opacity-90">Companies</div>
              </div>
              <div>
                <div className="text-xl font-bold">15+</div>
                <div className="text-xs opacity-90">Projects</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
