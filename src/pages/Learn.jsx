"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { BookOpen, Users, Trophy, Clock, Star, ArrowRight, Target, Award, Code, Calendar, Search, Filter } from 'lucide-react'
import { globalData } from "../data/globalData"

const Learn = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 500)
  }, [])

  const learningPaths = Object.values(globalData.learningPaths)
  const certifications = globalData.certifications || []

  const filteredPaths = learningPaths.filter((path) => {
    // Filter by difficulty
    const difficultyMatch = selectedDifficulty === "all" || 
      path.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
    
    // Filter by search query
    const searchMatch = searchQuery === "" || 
      path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      path.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return difficultyMatch && searchMatch
  })

  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Structured Learning Paths",
      description: "Follow carefully designed curricula from beginner to advanced levels",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Hands-on Practice",
      description: "Learn by doing with interactive labs and real-world scenarios",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Guidance",
      description: "Learn from industry professionals with years of experience",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Certification Prep",
      description: "Prepare for industry-recognized certifications and advance your career",
    },
  ]

  if (loading) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-12 bg-dark-700 rounded w-1/2 mx-auto mb-8"></div>
            <div className="h-6 bg-dark-700 rounded w-1/3 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-96 bg-dark-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Master <span className="text-gradient">Cybersecurity</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Follow structured learning paths designed by industry experts. From beginner fundamentals to advanced
            exploitation techniques.
          </p>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">{learningPaths.length}+</div>
              <div className="text-gray-400">Learning Paths</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">120+</div>
              <div className="text-gray-400">Hours of Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">15+</div>
              <div className="text-gray-400">Learning Topics</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div> */}
        </motion.div>

        {/* Features */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Learning Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="card text-center"
              >
                <div className="text-primary-400 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search learning paths..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["all", "beginner", "intermediate", "advanced"].map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                    selectedDifficulty === difficulty
                      ? "bg-primary-500 text-white"
                      : "bg-dark-700 text-gray-400 hover:bg-dark-600 hover:text-white"
                  }`}
                >
                  {difficulty === "all" ? <Filter className="h-4 w-4" /> : null}
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Learning Paths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Learning Paths</h2>
            <span className="text-gray-400">
              {filteredPaths.length} {filteredPaths.length === 1 ? 'path' : 'paths'} found
            </span>
          </div>
          
          {filteredPaths.length === 0 ? (
            // No paths found state
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="mx-auto w-24 h-24 rounded-full bg-dark-700 flex items-center justify-center mb-6">
                <Calendar className="h-12 w-12 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {searchQuery ? 'No matching learning paths' : `Coming Soon!`}
              </h3>
              <p className="text-gray-400 max-w-md mx-auto mb-8">
                {searchQuery 
                  ? `We couldn't find any learning paths matching "${searchQuery}". Try a different search term or browse all paths.`
                  : `We're currently developing new ${selectedDifficulty !== 'all' ? selectedDifficulty : ''} learning paths. Check back soon for updates!`
                }
              </p>
              {(searchQuery || selectedDifficulty !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedDifficulty("all")
                  }}
                  className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
                >
                  View All Learning Paths
                </button>
              )}
            </motion.div>
          ) : (
            // Paths grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPaths.map((path, index) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group"
                >
                  <Link to={`/learn/${path.id}`} className="block">
                    <div className="card hover:border-primary-500/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] h-full flex flex-col">
                      {/* Header with gradient */}
                      <div className={`h-32 rounded-t-lg bg-gradient-to-r ${path.color} mb-6 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute bottom-4 left-6">
                          <h3 className="text-2xl font-bold text-white">{path.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-white/80 text-sm">{path.difficulty}</span>
                            <span className="text-white/50">•</span>
                            <span className="text-white/80 text-sm">{path.estimatedHours}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-6 pb-6 flex-grow">
                        <p className="text-gray-400 mb-6 line-clamp-3">{path.description}</p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <Clock className="h-4 w-4" />
                            <span>{path.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <BookOpen className="h-4 w-4" />
                            <span>{path.topics?.length || 0} Topics</span>
                          </div>
                        </div>

                        {/* Prerequisites */}
                        {path.prerequisites && path.prerequisites.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-sm font-medium text-gray-300 mb-2">Prerequisites:</h4>
                            <div className="flex flex-wrap gap-2">
                              {path.prerequisites.slice(0, 2).map((prereq, i) => (
                                <span key={i} className="text-xs bg-dark-700 text-gray-400 px-2 py-1 rounded">
                                  {prereq}
                                </span>
                              ))}
                              {path.prerequisites.length > 2 && (
                                <span className="text-xs text-gray-500">+{path.prerequisites.length - 2} more</span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Progress bar (if applicable) */}
                        {path.progress !== undefined && (
                          <div className="mb-6">
                            <div className="flex justify-between text-sm text-gray-400 mb-1">
                              <span>Progress</span>
                              <span>{path.progress}%</span>
                            </div>
                            <div className="w-full bg-dark-700 rounded-full h-2">
                              <div 
                                className="bg-primary-500 h-2 rounded-full" 
                                style={{ width: `${path.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="px-6 pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-primary-400 font-medium">Start Learning</span>
                          <ArrowRight className="h-5 w-5 text-primary-400 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Certifications Section */}
        {certifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Certification Preparation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="card text-center"
                >
                  <div className="text-primary-400 mb-4 flex justify-center">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
                  <div className="flex justify-center">
                    <span className="text-xs bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full">
                      {cert.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Learn