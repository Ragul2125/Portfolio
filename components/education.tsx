"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
  "degree": "B.Tech in Artificial Intelligence and Data Science",
  "institution": "Sri Manakula Vinayagar Engineering College",
  "year": "2023 - 2027",
  "description": "Pursuing a Bachelor's degree with a strong foundation in AI, Data Science, and Full-Stack Web Development. Completed coursework in data structures, algorithms, machine learning, database management, and software engineering.",
  "achievements": [
    "Current CGPA: 8.13",
    "Lead of IDSC Cube – the primary innovation and development space managed by the department",
    "Active member in technical and coding clubs",
    "Completed multiple AI-powered and MERN stack projects during coursework"
  ]
},
  {
  "degree": "Self-Taught Full Stack & DSA",
  "institution": "YouTube & Online Documentation",
  "year": "2023 - Present",
  "description": "Self-directed learning journey covering modern full-stack development (MERN stack, Next.js) and problem-solving in Data Structures & Algorithms. Learned through curated YouTube tutorials, official documentation, and building real-world projects.",
  "achievements": [
    "Built multiple deployed full-stack applications including AI-powered platforms",
    "Solved 50+ DSA problems on LeetCode across core topics",
    "Mastered integration of APIs, authentication, and responsive design",
    "Developed skills in debugging, optimization, and clean code practices"
  ]
}
]

const certifications = [
  {
  "name": "Python for Data Science",
  "issuer": "NPTEL (National Programme on Technology Enhanced Learning)",
  "year": "2025",
  "icon": "🐍"
},
  // {
  //   name: "Google Cloud Professional Developer",
  //   issuer: "Google Cloud",
  //   year: "2022",
  //   icon: "🌐",
  // },
  {
  "name": "HTML & CSS",
  "issuer": "Great Learning",
  "year": "2023",
  "icon": "🌐"
},
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational background and professional certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-bold mb-8 flex items-center"
            >
              <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
              Education
            </motion.h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className="bg-card p-6 rounded-lg border shadow-sm"
                  style={{
                    transform: `translateY(${index * 20}px)`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-blue-600">{edu.degree}</h4>
                      <h5 className="text-md font-semibold">{edu.institution}</h5>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{edu.year}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{edu.description}</p>

                  <div>
                    <h6 className="font-semibold mb-2">Key Achievements:</h6>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-bold mb-8 flex items-center"
            >
              <Award className="w-6 h-6 mr-3 text-blue-600" />
              Certifications
            </motion.h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">{cert.icon}</span>
                      <div>
                        <h4 className="font-bold text-blue-600">{cert.name}</h4>
                        <p className="text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">{cert.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
