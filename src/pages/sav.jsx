
import { motion, useScroll, useTransform } from "framer-motion"

import { Users, FlaskConical, GraduationCap, UserPlus, Search, MessageSquare, Sparkles, ArrowRight } from "lucide-react"


function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(99,102,241,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-indigo-500/10" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-lg dark:bg-indigo-900/10 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 dark:border-indigo-800"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div 
          className="mb-6 p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-2xl"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-indigo-300 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-600 dark:text-indigo-200/70 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

function HowItWorksStep({ number, title, description, icon: Icon }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: number % 2 === 0 ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`flex items-center ${number % 2 === 0 ? "flex-row-reverse" : ""} mb-16 md:mb-24`}
    >
      <div className="w-1/2 px-8">
        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-500 dark:from-indigo-500 dark:to-indigo-400 text-white rounded-2xl w-12 h-12 flex items-center justify-center mr-4 shadow-lg">
            {number}
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-indigo-300 bg-clip-text text-transparent">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-indigo-200/70 leading-relaxed">{description}</p>
      </div>
      <div className="w-1/2 flex justify-center">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-full p-8 shadow-xl"
        >
          <Icon className="w-20 h-20 text-indigo-600 dark:text-indigo-400" />
        </motion.div>
      </div>
    </motion.div>
  )
}

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900/10 dark:to-indigo-950/80 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
              <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-indigo-300 bg-clip-text text-transparent">
                Connect
              </span>
            </motion.div>
            <p className="text-sm text-gray-600 dark:text-indigo-200/70 mt-2">
              © {new Date().getFullYear()} Connect. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center space-x-6">
            {["Terms", "Privacy", "Contact", "FAQs"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm text-gray-600 dark:text-indigo-200/70 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

function StickyCTA() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1])

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 dark:from-indigo-500 dark:via-indigo-400 dark:to-indigo-500 py-4 backdrop-blur-lg z-50"
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
        <h3 className="text-xl font-bold text-white mb-4 sm:mb-0 flex items-center">
          <Sparkles className="w-5 h-5 mr-2" />
          Join the Future of Academic Collaboration Today
        </h3>
        <div className="flex space-x-4">
          <Button
            variant="default"
            size="lg"
            className="bg-white text-indigo-600 hover:bg-indigo-50 dark:bg-indigo-900 dark:text-white dark:hover:bg-indigo-800 rounded-full px-6"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent text-white border-white hover:bg-white hover:text-indigo-600 dark:text-white dark:border-white dark:hover:bg-indigo-900 dark:hover:text-white rounded-full px-6"
          >
            Explore First
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
    const baseStyles = "font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    const variantStyles = {
      default: "bg-indigo-600 text-white hover:bg-indigo-700",
      outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    }
    const sizeStyles = {
      default: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    }
  
    return (
      <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
        {children}
      </button>
    )
  }
export default function BackgroundPaths({ title = "CONNECT", subheading = "Empowering students & faculty to collaborate, innovate, and achieve." }) {
  const words = title.split(" ")

  const Link = ({ href, children, className = "", ...props }) => {
    return (
      <a href={href} className={`cursor-pointer ${className}`} {...props}>
        {children}
      </a>
    )
  }
  

  return (
    <div className="bg-gradient-to-b from-[#F3F4F6] to-white dark:from-indigo-950 dark:to-indigo-900">
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div className="mb-8 inline-flex items-center bg-white/30 dark:bg-indigo-900/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-indigo-600 dark:text-indigo-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome to the Future of Academic Collaboration
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tighter">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: wordIndex * 0.1 + letterIndex * 0.03,
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-white dark:to-indigo-200"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-indigo-200/70 mb-12"
            >
              {subheading}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button
                variant="default"
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Explore Projects</span>
                <span className="ml-2">🚀</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold bg-white/80 backdrop-blur-sm hover:bg-indigo-50 text-indigo-600 border-2 border-indigo-600 dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-indigo-900/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Find People</span>
                <span className="ml-2">🔍</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-indigo-300 bg-clip-text text-transparent">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-indigo-200/70">
              Everything you need to succeed in your academic journey
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Users}
              title="Academic Networking"
              description="Connect with peers & faculty across departments to expand your professional network."
            />
            <FeatureCard
              icon={FlaskConical}
              title="Research Collaboration"
              description="Join groundbreaking research projects and contribute to meaningful discoveries."
            />
            <FeatureCard
              icon={GraduationCap}
              title="Faculty Mentorship"
              description="Get personalized guidance from experienced faculty members in your field."
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900/10 dark:to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-indigo-300 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-indigo-200/70">
              Start your journey in three simple steps
            </p>
          </motion.div>
          <div className="space-y-12 md:space-y-0">
            <HowItWorksStep
              number={1}
              title="Create Your Profile"
              description="Build your academic identity by showcasing your skills, research interests, and ongoing projects."
              icon={UserPlus}
            />
            <HowItWorksStep
              number={2}
              title="Find Collaborators"
              description="Discover and connect with students, faculty, and research teams aligned with your interests."
              icon={Search}
            />
            <HowItWorksStep
              number={3}
              title="Engage & Contribute"
              description="Participate in discussions, apply to projects, and share your valuable insights with the community."
              icon={MessageSquare}
            />
          </div>
        </div>
      </section>

      <section className="py-32 px-4 md:px-6 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900/10 dark:to-indigo-950">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-indigo-300 bg-clip-text text-transparent">
              Ready to Transform Your Academic Journey?
            </h2>
            <p className="text-xl mb-12 text-gray-600 dark:text-indigo-200/70">
              Join Connect today and unlock a world of collaboration, innovation, and growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold bg-white/80 backdrop-blur-sm hover:bg-indigo-50 text-indigo-600 border-2 border-indigo-600 dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-indigo-900/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore First
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  )
}