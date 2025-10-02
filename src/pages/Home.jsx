"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Briefcase,
  ArrowRight,
  Shield,
  Users,
  BookOpen,
  Zap,
  Target,
  Code,
  Globe,
  Star,
  Calendar,
  TrendingUp,
  Award,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
  Play,
  Download,
  MessageCircle,
} from "lucide-react"
import CountdownTimer from "../components/CountdownTimer"
import BlogCard from "../components/BlogCard"
import ToolCard from "../components/ToolCard"
import { globalData } from "../data/globalData"

const Home = () => {
  const featuredBlogs = globalData.blogs.slice(0, 3)
  const featuredTools = globalData.tools.slice(0, 3)
  const recentNews = globalData.news.slice(0, 3)
  const upcomingEvents = globalData.ctfEvents.upcoming

  const features = [
    {
      icon: Shield,
      title: "Comprehensive Learning",
      description:
        "From beginner to advanced, master cybersecurity with our structured learning paths and hands-on labs.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Hands-on Practice",
      description: "Practice your skills with real-world scenarios, CTF challenges, and interactive lab environments.",
      color: "from-purple-500 to-pink-500",
    },
  
    {
      icon: BookOpen,
      title: "Latest Resources",
      description: "Stay updated with cutting-edge tools, techniques, and industry best practices from experts.",
      color: "from-orange-500 to-red-500",
    },
    {
  icon: Briefcase,
  title: "Career Growth",
  description: "Access job postings, internship alerts, mentorship, and resume tips tailored for cybersecurity roles.",
  color: "from-yellow-500 to-amber-500",
}

  ]


  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">Universe of</span>
              <br />
              <span className="text-white">Hacking</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Your gateway to cybersecurity mastery. Learn, practice, and excel in ethical hacking with our
              comprehensive platform built by security experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/learn" className="btn-primary group flex">
                Start Learning
             
              </Link>
              <Link to="/tools" className="btn-secondary group flex">
    
                Explore Tools
              </Link>
            </div>

         
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent-500/20 rounded-full blur-xl"
        />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
        {/* Founders Section */}
<section className="py-20">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl font-bold text-white mb-4">
      Meet the Brain Behind the Terminal
    </h2>
    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
      Built by a self-taught hacker who believes cybersecurity should be open,
      real, and for everyone. Welcome to the Universe of Hacking.
    </p>
  </motion.div>

  {/* First founder (centered on top) */}
  {globalData.founders.length > 0 && (
    <motion.div
      key={globalData.founders[0].id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="card text-center group hover:scale-105 transition-all duration-300 max-w-xl mx-auto mb-16"
    >
      <h3 className="text-2xl font-bold text-white mb-2">
        {globalData.founders[0].name}
      </h3>
      <p className="text-primary-400 font-medium mb-4">
        {globalData.founders[0].role}
      </p>
      <p className="text-gray-400 mb-6 leading-relaxed">
        {globalData.founders[0].bio}
      </p>
{/* 
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {globalData.founders[0].skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div> */}

      <div className="flex justify-center space-x-4">
        {globalData.founders[0].social.twitter && (
          <a
            href={globalData.founders[0].social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors"
          >
            <Twitter className="h-5 w-5 text-white" />
          </a>
        )}
        {globalData.founders[0].social.linkedin && (
          <a
            href={globalData.founders[0].social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 hover:bg-blue-700 rounded-full transition-colors"
          >
            <Linkedin className="h-5 w-5 text-white" />
          </a>
        )}
        {globalData.founders[0].social.github && (
          <a
            href={globalData.founders[0].social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 hover:bg-gray-600 rounded-full transition-colors"
          >
            <Github className="h-5 w-5 text-white" />
          </a>
        )}
      </div>
    </motion.div>
  )}

  {/* Remaining founders in a 2-column grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
    {globalData.founders.slice(1).map((founder, index) => (
      <motion.div
        key={founder.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: (index + 1) * 0.2 }}
        className="card text-center group hover:scale-105 transition-all duration-300"
      >
        <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
        <p className="text-primary-400 font-medium mb-4">{founder.role}</p>
        <p className="text-gray-400 mb-6 leading-relaxed">{founder.bio}</p>

        {/* <div className="flex flex-wrap justify-center gap-2 mb-6">
          {founder.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div> */}

        <div className="flex justify-center space-x-4">
          {founder.social.twitter && (
            <a
              href={founder.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors"
            >
              <Twitter className="h-5 w-5 text-white" />
            </a>
          )}
          {founder.social.linkedin && (
            <a
              href={founder.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-blue-700 rounded-full transition-colors"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
          )}
          {founder.social.github && (
            <a
              href={founder.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-gray-600 rounded-full transition-colors"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
          )}
        </div>
      </motion.div>
    ))}
  </div>
</section>


       

      
     
{/* Upcoming Events & CTF */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
      
      {/* Left Column: Events */}
      <div className="w-full lg:col-span-1 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-extrabold text-white mb-3">Upcoming Events</h2>
          <p className="text-gray-400 mb-8 text-base leading-relaxed">
            Test your cybersecurity skills and compete in exciting challenges with the community.
          </p>

          <div className="space-y-6">
            {upcomingEvents?.length > 0 ? (
              upcomingEvents.slice(0, 3).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-md group hover:shadow-cyan-500/20 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {event.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(event.startDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {event.participants} participants
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            event.difficulty === "All Levels"
                              ? "bg-green-500/20 text-green-400"
                              : event.difficulty === "Intermediate"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {event.difficulty}
                        </span>
                      </div>
                    </div>
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm flex items-center whitespace-nowrap"
                    >
                      Register
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>

                  {/* Prizes */}
                  {event.prizes?.length > 0 && (
                    <div className="border-t border-gray-700 pt-4 mt-2">
                      <span className="text-sm text-gray-400">Prizes:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {event.prizes.map((prize, i) => (
                          <span
                            key={i}
                            className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded"
                          >
                            {prize}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No upcoming events right now. Stay tuned!</p>
            )}
          </div>
        </motion.div>
      </div>

   
    </div>
  </div>
</section>


        {/* Featured Blogs */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Latest Blogs</h2>
              <p className="text-gray-400">
                Stay updated with the latest cybersecurity insights and tutorials from our experts.
              </p>
            </div>
            <Link to="/blogs" className="btn-secondary group">
              View All Blogs
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((blog, index) => (
              <BlogCard key={blog._id} blog={blog} index={index} />
            ))}
          </div>
        </section>

        {/* Featured Tools */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Popular Tools</h2>
              <p className="text-gray-400">
                Discover the most essential cybersecurity tools and resources curated by experts.
              </p>
            </div>
            <Link to="/tools" className="btn-secondary group">
              View All Tools
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTools.map((tool, index) => (
              <ToolCard key={tool._id} tool={tool} index={index} />
            ))}
          </div>
        </section>

        
      </div>
    </div>
  )
}

export default Home
