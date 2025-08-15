"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Layers, Zap, TrendingUp } from "lucide-react"
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiGraphql,
  SiExpress,
  SiGit,
  SiFigma,
  SiLinux,     
  SiTensorflow,
  
} from "react-icons/si";
import { FaAws } from "react-icons/fa";       
const skills = [
  { name: "React",         icon: SiReact },
  { name: "TypeScript",    icon: SiTypescript },
  { name: "Next.js",       icon: SiNextdotjs },
  { name: "Tailwind CSS",  icon: SiTailwindcss },
  { name: "JavaScript",    icon: SiJavascript },
  { name: "Node.js",       icon: SiNodedotjs },
  { name: "Python",        icon: SiPython },
  { name: "MongoDB",       icon: SiMongodb },
  { name: "GraphQL",       icon: SiGraphql },
  { name: "Express.js",    icon: SiExpress },
  { name: "AWS",           icon: FaAws  },
  { name: "Git",           icon: SiGit },
  { name: "Figma",         icon: SiFigma },
  // { name: "Linux",         icon: SiLinux },
  { name: "React Native",  icon: SiReact },      
  { name: "Machine Learning", icon: SiTensorflow }
];

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </motion.div>

        {/* Technology Stack - Icons Only with Rotation */}
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="text-center mb-16"
>
  <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
    {skills.map((skill, index) => {
      const Icon = skill.icon; // ✅ define icon per item

      return (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4 + index * 0.05,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{
            scale: 1.3,
            rotate: 360,
            y: -8,
            transition: { duration: 0.4 },
          }}
          className="w-16 h-16 flex items-center justify-center bg-card border rounded-xl shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300 group"
          title={skill.name}
        >
          <Icon className="w-6 h-6 text-current" />
        </motion.div>
      );
    })}
  </div>
</motion.div>


        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl"
          >
            <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-600 mb-1">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl"
          >
            <Layers className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-green-600 mb-1">15</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl"
          >
            <Zap className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-purple-600 mb-1">20+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
