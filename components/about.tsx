"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Coffee, Heart, Lightbulb, MapPin, Calendar, Award, Users } from "lucide-react"
import dp from "../public/WhatsApp Image 2025-03-23 at 11.10.41_a1d16c0e.jpg"
const aboutCards = [
  {
    icon: Code,
    title: "Clean Code Advocate",
    description: "I believe in writing maintainable, scalable code that stands the test of time.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Love tackling complex challenges and finding elegant solutions to difficult problems.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Experienced in leading teams and collaborating effectively in agile environments.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Passionate Learner",
    description: "Always staying up-to-date with the latest technologies and industry best practices.",
    color: "from-orange-500 to-red-500",
  },
]

const stats = [
  {
    icon: Calendar,
    label: "Years Experience",
    value: "2+",
    color: "text-blue-600",
  },
  {
    icon: Code,
    label: "Projects Completed",
    value: "15+",
    color: "text-green-600",
  },
  // {
  //   icon: Coffee,
  //   label: "Cups of Coffee",
  //   value: "1000+",
  //   color: "text-orange-600",
  // },
  // {
  //   icon: Award,
  //   label: "Happy Clients",
  //   value: "25+",
  //   color: "text-purple-600",
  // },
]

const techStack = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Docker", "AWS", "Vercel"],
}

export default function About() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven to build high-performance digital experiences through optimized code architecture, scalable systems, and innovative problem-solving.
          </p>
        </motion.div>

        {/* Hero Card with Profile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card rounded-2xl border shadow-lg p-8 mb-12 overflow-hidden relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-card rounded-full overflow-hidden border-4 border-background">
                  <img
                    src="/WhatsApp%20Image%202025-03-23%20at%2011.10.41_a1d16c0e.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />

                </div>
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Code className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Ragul
                  </span>
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Puducherry</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate and results-driven Full-Stack Developer with expertise in building responsive, scalable, and user-focused web applications. Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js for modern frontend development, I specialize in creating efficient, clean, and high-performance solutions. My experience includes developing multi-tenant platforms, role-based dashboards, and real-time applications with API integrations across diverse domains.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in Data Structures & Algorithms and hands-on experience in agile team environments, I excel at translating complex requirements into intuitive, production-ready products. I am committed to continuous learning, exploring new technologies, and delivering solutions that merge innovation with practical impact.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-muted/50 rounded-lg"
                  >
                    <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* About Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0, delay: 0 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 p-6 group"
            >
              <motion.div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-card rounded-2xl border shadow-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">By the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon
                    className={`w-8 h-8 ${stat.color} group-hover:text-white transition-colors duration-300`}
                  />
                </motion.div>
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Tech Stack Cards */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {Object.entries(techStack).map(([category, technologies], index) => (
            <motion.div
              key={category}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 p-6"
            >
              <h4 className="text-lg font-bold mb-4 capitalize text-blue-600">{category}</h4>
              <div className="space-y-3">
                {technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 1.8 + index * 0.1 + techIndex * 0.05 }}
                    whileHover={{ x: 5, scale: 1.05 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}
