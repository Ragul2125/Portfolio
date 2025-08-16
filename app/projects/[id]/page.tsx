"use client";

import { useParams, useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import AnimatedBackground from "@/components/animated-background";
import { useRef } from "react";

const projectsData = {
  "1": {
    title: "Blood Connect",
    subtitle: "Connecting Blood Donors with Recipients in Real-Time",
    description:
      "A MERN stack healthcare platform designed to connect blood donors and recipients instantly, enabling real-time matching and urgent request handling.",
    longDescription:
      "Blood Connect is a full-stack healthcare application developed to streamline the process of finding blood donors during emergencies. It allows users to register as donors, request blood, and search for donors based on blood type and location. The platform features role-based access for donors, recipients, and administrators, ensuring efficient data handling and secure communication. By integrating geolocation-based search and real-time notifications, Blood Connect reduces the time taken to connect those in need with available donors.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
      "REST API",
    ],
    category: "Healthcare",
    status: "Live",
    timeline: "2 months",
    team: "Solo Project",
    role: "Full Stack Developer",
    year: "2024",
    budget: "",

    features: [
      {
        title: "Real-Time Donor Search",
        description:
          "Find donors instantly using blood group and location filters.",
        icon: "🩸",
      },
      {
        title: "Urgent Blood Requests",
        description:
          "Allows recipients to post urgent blood requirements to nearby donors.",
        icon: "🚨",
      },
      {
        title: "Role-Based Access",
        description:
          "Separate dashboards for donors, recipients, and administrators.",
        icon: "🔑",
      },
      {
        title: "Secure Authentication",
        description:
          "JWT-based login and session management for data security.",
        icon: "🔐",
      },
      {
        title: "Responsive UI",
        description: "Mobile-first design for accessibility on any device.",
        icon: "📱",
      },
    ],

    challenges: [
      {
        title: "Fast Location-Based Search",
        description: "Needed to filter large donor datasets in real-time.",
        solution: "Implemented MongoDB geospatial queries and indexing.",
        difficulty: "Medium",
      },
      {
        title: "Urgent Notification Delivery",
        description: "Critical blood requests must reach donors instantly.",
        solution: "Built a priority notification system using WebSockets.",
        difficulty: "High",
      },
      {
        title: "Data Security & Privacy",
        description:
          "Sensitive donor information needed secure storage and handling.",
        solution:
          "Encrypted personal data and implemented strict access control.",
        difficulty: "High",
      },
    ],

    images: [
      {
        url: "/blood.png",
        title: "Homepage",
        description:
          "Modern, intuitive landing page with call-to-action for donors and recipients.",
      },
      {
        url: "/donarlist.png",
        title: "Donor Search",
        description:
          "Search donors by location and blood group with instant filtering.",
      },
      {
        url: "/request.png",
        title: "Blood Request Form",
        description:
          "Simple request submission form with real-time notification trigger.",
      },
      {
        url: "/donarsearch.png",
        title: "Become a Donor",
        description:
          "User-friendly registration form for donors to join the blood donation network.",
      },
    ],

    metrics: {
      users: "60+ registered donors",
      // "transactions": "",
      // "uptime": "",
      // "loadTime": "",
      // "conversion": "",
      // "satisfaction": "",
      requestsFulfilled: "50+ successful matches",
      avgMatchTime: "< 2 minutes",
    },

    githubUrl: "https://github.com/Ragul2125/Blood-Donation---web-App",
    liveUrl: "https://blood-donation-web-app-ebon.vercel.app",

    // "testimonials": [],
    lessons: [
      "Geolocation queries can drastically speed up search functionality.",
      "Real-time communication is crucial for time-sensitive applications.",
      "Role-based access improves both security and user experience.",
    ],
  },
  "2": {
    title: "SkillSync",
    subtitle: "AI-Powered Skill Matching & Learning Platform",
    description:
      "A real-time platform that connects learners with mentors, recommends personalized learning paths, and enables skill-based collaboration using AI-driven matching.",
    longDescription:
      "SkillSync is a web-based application designed to bridge the gap between learners and industry experts. It allows users to create skill profiles, find mentors, enroll in curated learning paths, and collaborate with peers in real-time. The system uses AI-based matching to suggest relevant mentors, courses, and projects based on user skill data. Built with React, Firebase, Material-UI, and WebSockets, SkillSync delivers instant updates, live chat, and collaborative tools for effective skill development.",

    technologies: [
      "React",
      "Firebase",
      "Material-UI",
      "WebSocket",
      "PWA",
      "TypeScript",
      "Chart.js",
      "Node.js",
    ],
    category: "EdTech",
    status: "Live",
    timeline: "4 months",
    team: " Solo Project",
    role: "Full Stack Developer",
    year: "2025",
    budget: "",

    features: [
      {
        title: "AI Skill Matching",
        description:
          "Matches learners with mentors and learning resources based on skill data.",
        icon: "🤝",
      },
      {
        title: "Live Mentor Sessions",
        description:
          "Real-time video and chat sessions between learners and mentors.",
        icon: "🎥",
      },
      {
        title: "Progress Tracking Dashboard",
        description:
          "Visualize learning progress with dynamic charts and analytics.",
        icon: "📊",
      },
      {
        title: "Collaborative Projects",
        description:
          "Connect learners with peers to work on skill-based projects.",
        icon: "👥",
      },
      {
        title: "Gamified Learning",
        description:
          "Earn badges and points for completing skills and challenges.",
        icon: "🏆",
      },
      {
        title: "Instant Notifications",
        description:
          "Get real-time updates for mentor availability and new course recommendations.",
        icon: "🔔",
      },
    ],

    challenges: [
      {
        title: "Accurate Skill Recommendations",
        description:
          "Needed a system that could analyze user skills and suggest the right mentors and resources.",
        solution:
          "Integrated a machine learning model with Firebase data to rank recommendations.",
        difficulty: "High",
      },
      {
        title: "Real-time Collaboration",
        description:
          "Ensuring smooth real-time chat and session updates across devices.",
        solution:
          "Used WebSockets with Firebase real-time database for instant updates.",
        difficulty: "Medium",
      },
      {
        title: "Scalable Data Handling",
        description:
          "Handling thousands of skill profiles and recommendations without slowing down.",
        solution: "Implemented indexed queries and lazy-loading in Firebase.",
        difficulty: "Medium",
      },
    ],

    images: [
      {
        url: "/skillsyncdashboard.png",
        title: "Dashboard",
        description:
          "Central hub showing active skills, recommended mentors, and progress tracking.",
      },
      {
        url: "/Aimatch.jpg",
        title: "AI Match",
        description:
          "AI-powered mentor matching based on your skills, goals, and learning preferences.",
      },
      {
        url: "/Skillsyncprofile.jpg",
        title: "Profile",
        description:
          "Personal profile with skill list, completed achievements, and mentor feedback.",
      },
    ],

    metrics: {
      users: "120+",
      // projects: "",
      // tasks: "",
      satisfaction: "4.7/5",
      // retention: "",
      // performance: "",
      avgMatchTime: "< 5 minutes",
    },

    githubUrl: "https://github.com/Ragul2125/skillsync",
    liveUrl: "https://skill-sync-mauve.vercel.app/",

    // testimonials: [
    //   {
    //     name: "Priya Sharma",
    //     role: "Data Science Learner",
    //     company: "",
    //     content: "SkillSync helped me find a mentor in less than 10 minutes and boosted my learning speed!",
    //     avatar: "/placeholder.svg?height=60&width=60",
    //   },
    // ],

    lessons: [
      "AI-driven recommendations improve user engagement.",
      "Real-time updates keep mentors and learners connected efficiently.",
      "A clean UI with Material-UI enhances accessibility and usability.",
    ],
  },
  "3":{
  title: "Talk2DB",
  subtitle: "Natural Language to Database Query Platform",
  description:
    "An AI-powered platform that allows users to interact with databases using natural language, eliminating the need to manually write SQL queries.",
  longDescription:
    "Talk2DB simplifies database interaction by enabling users to ask questions in plain English and receive instant, accurate responses. It uses NLP to convert user queries into SQL commands, fetches results from the database, and presents them in a clean, visual format. Designed for both technical and non-technical users, Talk2DB improves productivity, reduces query errors, and speeds up data-driven decision-making.",

  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "OpenAI API",
    "Chart.js",
    "REST API"
  ],
  category: "AI & Data Tools",
  status: "Live",
  timeline: "2 months",
  team: "6 Member",
  role: "Frontend Developer",
  year: "2024",
  budget: "",

  features: [
    {
      title: "Natural Language Query",
      description: "Type your question in plain English and get database results instantly.",
      icon: "💬",
    },
    {
      title: "Automatic SQL Generation",
      description: "Converts natural language into optimized SQL queries using AI.",
      icon: "⚡",
    },
    {
      title: "Multi-Database Support",
      description: "Works with MySQL, MongoDB, and other popular databases.",
      icon: "🗄️",
    },
    {
      title: "Data Visualization",
      description: "View results in charts, tables, and graphs for better insights.",
      icon: "📊",
    },
    {
      title: "Error Handling & Query Optimization",
      description: "Suggests corrections and improvements for invalid queries.",
      icon: "🛠️",
    },
    {
      title: "Secure Access Control",
      description: "Role-based authentication to protect sensitive data.",
      icon: "🔐",
    },
  ],

  challenges: [
    {
      title: "Accurate Query Translation",
      description: "Ensuring AI accurately interprets natural language into correct SQL commands.",
      solution: "Used OpenAI's fine-tuning and context-based prompt engineering.",
      difficulty: "High",
    },
    {
      title: "Database Compatibility",
      description: "Supporting multiple database engines with consistent query translation.",
      solution: "Implemented an abstraction layer for query generation and execution.",
      difficulty: "Medium",
    },
    {
      title: "Result Presentation",
      description: "Making raw query results easy to understand for non-technical users.",
      solution: "Integrated Chart.js and dynamic table rendering.",
      difficulty: "Low",
    },
  ],

  images: [
    {
      url: "/talk2db-landing.png",
      title: "Main Dashboard",
      description: "Clean interface to enter natural language queries and view results.",
    },
    {
      url: "/talk2db-query.png",
      title: "Query Execution",
      description: "Real-time SQL generation and result display.",
    },
  ],

  metrics: {
    queriesProcessed: "1000+",
    accuracy: "92%+",
    response: "< 2s",
    // uptime: "99.9%",
    // users: "10+",
    // databasesSupported: "2+",
  },

  githubUrl: "https://github.com/username/talk2db",
  liveUrl: "https://talk2db.vercel.app",

  testimonials: [
    {
      name: "John Smith",
      role: "Data Analyst",
      company: "TechCorp",
      content:
        "Talk2DB saved us hours of work by letting the whole team access data without writing SQL.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ],

  lessons: [
    "AI-powered query generation requires constant fine-tuning for accuracy.",
    "Supporting multiple database types demands a robust abstraction layer.",
    "User-friendly visualizations improve adoption among non-technical teams.",
  ],
}

};

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  const project = projectsData[projectId as keyof typeof projectsData];
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!project) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The project you're looking for doesn't exist or has been moved.
            </p>
            <Button onClick={() => router.push("/")} size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </motion.div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div
        ref={containerRef}
        className="min-h-screen bg-background text-foreground"
      >
        <AnimatedBackground />

        <div className="relative z-10">
          {/* Floating Navigation */}
          <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50"
          >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => router.push("/")}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Portfolio
                </Button>
              </motion.div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      project.status === "Live"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span>•</span>
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>

                <div className="flex gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="sm"
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Hero Section with Parallax */}
          <motion.section
            style={{ y, opacity }}
            className="relative h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex items-center justify-center overflow-hidden"
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="text-center text-white z-10 max-w-5xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8"
              >
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                    {project.timeline}
                  </span>
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                    {project.team}
                  </span>
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                    {project.role}
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              >
                {project.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg md:text-xl text-white/80 mb-12"
              >
                {project.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-100 hover:text-blue-700"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.section>

          {/* Project Details Section */}
          <section className="container mx-auto py-20 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.longDescription}
                </p>

                <h3 className="text-xl font-semibold mb-4">Key Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="list-none pl-0">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 mb-4">
                      <span className="text-xl">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Technical Challenges & Solutions
                </h2>
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      {challenge.description}
                    </p>
                    <p className="text-sm text-green-500">
                      <span className="font-semibold">Solution:</span>{" "}
                      {challenge.solution}
                    </p>
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs mt-2 ${
                        challenge.difficulty === "High"
                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          : challenge.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      }`}
                    >
                      Difficulty: {challenge.difficulty}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Image Gallery */}
          <section className="container mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Project Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-64 object-fill object-center"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4">
                    <h4 className="font-semibold">{image.title}</h4>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="container mx-auto py-12 px-6 bg-secondary rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Performance Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-5xl font-bold">{value}</div>
                  <div className="text-muted-foreground uppercase tracking-wider">
                    {key}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          {/* <section className="container mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-secondary rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </section> */}

          {/* Lessons Learned */}
          <section className="container mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Lessons Learned
            </h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              {project.lessons.map((lesson, index) => (
                <li key={index} className="mb-2">
                  {lesson}
                </li>
              ))}
            </ul>
          </section>

          {/* Footer with Links */}
          <footer className="container mx-auto py-12 px-6 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} My Portfolio. All rights
              reserved.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Live Demo
              </a>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}
