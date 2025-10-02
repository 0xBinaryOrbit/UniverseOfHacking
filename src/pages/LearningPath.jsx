"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Clock, BookOpen, Users, CheckCircle, Lock, Play, Target, Star, Globe, Terminal, Network, Shield, Wrench, Zap, Bug, Smartphone, Cloud, Wifi, Award, TrendingUp, Calendar, FileText, Video, Code, Lightbulb } from 'lucide-react'
import { getLearningPathById } from "../data/globalData"

const iconMap = {
  Terminal,
  Network,
  Globe,
  Shield,
  Wrench,
  Zap,
  Bug,
  Target,
  Smartphone,
  Cloud,
  Users,
  Wifi,
}

const typeIcons = {
  video: Video,
  interactive: Code,
  "hands-on": Play,
  reading: FileText,
}

const LearningPath = () => {
  const { pathId } = useParams()
  const [loading, setLoading] = useState(true)
  const [path, setPath] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    const pathData = getLearningPathById(pathId)
    setPath(pathData)
    setTimeout(() => setLoading(false), 800)
  }, [pathId])

  const handleTopicPreview = (topic) => {
    setSelectedTopic(topic)
    setShowPreview(true)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            {/* Header Skeleton */}
            <div className="animate-pulse">
              <div className="h-8 bg-dark-700 rounded w-1/4 mb-8"></div>
              <div className="h-64 bg-gradient-to-r from-dark-700 to-dark-600 rounded-2xl mb-8"></div>
            </div>
            
            {/* Cards Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-48 bg-dark-700 rounded-xl"></div>
                </div>
              ))}
            </div>

            {/* Topics Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-80 bg-dark-700 rounded-xl"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  if (!path) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-dark-700 rounded-full flex items-center justify-center mb-6 mx-auto">
            <BookOpen className="h-12 w-12 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Learning Path Not Found</h1>
          <p className="text-gray-400 mb-8">The learning path you're looking for doesn't exist.</p>
          <Link to="/learn" className="btn-primary">
            Back to Learning Paths
          </Link>
        </motion.div>
      </div>
    )
  }

  const completedTopics = path.topics?.filter((topic) => topic.completed).length || 0
  const totalTopics = path.topics?.length || 0
  const progressPercentage = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="mb-8"
        >
          <Link 
            to="/learn" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-all duration-300 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Learning Paths</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-16"
        >
          <div className={`relative h-80 rounded-3xl bg-gradient-to-br ${path.color} mb-8 overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center px-8">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-4"
                >
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium">
                    <Award className="h-4 w-4 mr-2" />
                    {path.difficulty} Level
                  </span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                  {path.title}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                  {path.description}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap justify-center gap-8 text-white/80"
                >
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">{path.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <BookOpen className="h-5 w-5" />
                    <span className="font-medium">{totalTopics} Topics</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Target className="h-5 w-5" />
                    <span className="font-medium">{path.estimatedHours}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Users className="h-5 w-5" />
                    <span className="font-medium">5K+ Students</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="card bg-gradient-to-r from-primary-500/10 to-purple-500/10 border-primary-500/20"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Your Learning Journey</h2>
                <p className="text-gray-400">Track your progress through this learning path</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary-400 mb-1">
                  {Math.round(progressPercentage)}%
                </div>
                <div className="text-sm text-gray-400">Complete</div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full bg-dark-700 rounded-full h-4 mb-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-primary-400 to-purple-400 h-4 rounded-full relative"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                </motion.div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">
                  {completedTopics} of {totalTopics} topics completed
                </span>
                <span className="text-primary-400 font-medium">
                  {path.estimatedHours} estimated
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Prerequisites */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="card group hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                <Lightbulb className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Prerequisites</h3>
            </div>
            <div className="space-y-3">
              {path.prerequisites?.map((prereq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-dark-700/50 transition-colors duration-200"
                >
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{prereq}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What You'll Learn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="card group hover:border-yellow-500/30 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-500/20 rounded-lg mr-3">
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">What You'll Learn</h3>
            </div>
            <div className="space-y-3">
              {path.topics?.slice(0, 4).map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-dark-700/50 transition-colors duration-200"
                >
                  <Star className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{topic.title}</span>
                </motion.div>
              ))}
              {path.topics?.length > 4 && (
                <div className="text-xs text-gray-500 pl-7">
                  +{path.topics.length - 4} more topics
                </div>
              )}
            </div>
          </motion.div>

          {/* Path Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="card group hover:border-green-500/30 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg mr-3">
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Path Statistics</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: "Difficulty", value: path.difficulty, color: "text-blue-400" },
                { label: "Duration", value: path.duration, color: "text-purple-400" },
                { label: "Total Hours", value: path.estimatedHours, color: "text-green-400" },
                { label: "Success Rate", value: "94%", color: "text-yellow-400" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                  className="flex justify-between items-center p-2 rounded-lg hover:bg-dark-700/50 transition-colors duration-200"
                >
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                  <span className={`font-medium ${stat.color}`}>{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Topics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Learning Topics</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Master each topic step by step to build your cybersecurity expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {path.topics?.map((topic, index) => {
              const IconComponent = iconMap[topic.icon] || BookOpen
              const isLocked = topic.locked
              const isCompleted = topic.completed
              const lessonCount = topic.lessons?.length || 0
              const completedLessons = topic.lessons?.filter(l => l.completed).length || 0
              const topicProgress = lessonCount > 0 ? (completedLessons / lessonCount) * 100 : 0

              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div
                    className={`card h-full transition-all duration-500 ${
                      isLocked
                        ? "opacity-60 cursor-not-allowed"
                        : "hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10 cursor-pointer transform hover:-translate-y-2"
                    }`}
                    onClick={() => !isLocked && handleTopicPreview(topic)}
                  >
                    {/* Topic Header */}
                    <div className="relative mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-4 rounded-xl ${topic.color} relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                          {isLocked ? (
                            <Lock className="h-8 w-8 text-white relative z-10" />
                          ) : isCompleted ? (
                            <CheckCircle className="h-8 w-8 text-white relative z-10" />
                          ) : (
                            <IconComponent className="h-8 w-8 text-white relative z-10" />
                          )}
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium px-3 py-1 rounded-full ${
                            topic.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                            topic.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {topic.difficulty}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{topic.duration}</div>
                        </div>
                      </div>

                      {/* Status Badge */}
                      {isCompleted && (
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          Completed
                        </div>
                      )}
                    </div>

                    {/* Topic Content */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                        {topic.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {topic.description}
                      </p>
                    </div>

                    {/* Topic Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-400 bg-dark-700/50 rounded-lg p-3">
                        <Clock className="h-4 w-4 text-primary-400" />
                        <span>{topic.estimatedHours}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400 bg-dark-700/50 rounded-lg p-3">
                        <BookOpen className="h-4 w-4 text-purple-400" />
                        <span>{lessonCount} Lessons</span>
                      </div>
                    </div>

                    {/* Lessons Preview */}
                    {topic.lessons && topic.lessons.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-300 mb-3">Lessons Preview</h4>
                        <div className="space-y-2">
                          {topic.lessons.slice(0, 3).map((lesson, lessonIndex) => {
                            const TypeIcon = typeIcons[lesson.type] || FileText
                            return (
                              <div key={lesson.id} className="flex items-center space-x-3 text-xs text-gray-400 bg-dark-700/30 rounded-lg p-2">
                                <TypeIcon className="h-3 w-3 text-primary-400" />
                                <span className="flex-1 truncate">{lesson.title}</span>
                                <span className="text-gray-500">{lesson.duration}</span>
                              </div>
                            )
                          })}
                          {topic.lessons.length > 3 && (
                            <div className="text-xs text-gray-500 text-center py-1">
                              +{topic.lessons.length - 3} more lessons
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                        <span>Progress</span>
                        <span>{Math.round(topicProgress)}%</span>
                      </div>
                      <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${topicProgress}%` }}
                          transition={{ delay: 1.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            isCompleted ? "bg-gradient-to-r from-green-400 to-emerald-400" : 
                            topicProgress > 0 ? "bg-gradient-to-r from-primary-400 to-purple-400" :
                            "bg-gray-600"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      {isLocked ? (
                        <span className="text-gray-500 text-sm font-medium">Locked</span>
                      ) : (
                        <Link
                          to={`/learn/${pathId}/${topic.id}`}
                          className="text-primary-400 font-medium text-sm hover:text-primary-300 transition-colors duration-200"
                        >
                          {isCompleted ? "Review Topic" : topicProgress > 0 ? "Continue Learning" : "Start Learning"}
                        </Link>
                      )}
                      {!isLocked && (
                        <Play className="h-4 w-4 text-primary-400 group-hover:translate-x-1 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="card bg-gradient-to-br from-primary-500/10 via-purple-500/10 to-pink-500/10 border-primary-500/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2240%22 height%3D%2240%22 viewBox%3D%220 0 40 40%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.1%22%3E%3Cpath d%3D%22M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z%22/%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
            </div>
            
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                Start with the first topic and work your way through the entire learning path. 
                Each lesson builds upon the previous one to ensure comprehensive understanding.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={`/learn/${pathId}/${path.topics?.[0]?.id}`}
                  className="btn-primary inline-flex items-center space-x-3 px-8 py-4 text-lg group"
                >
                  <Play className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>Start First Topic</span>
                </Link>
                
                <button
                  onClick={() => handleTopicPreview(path.topics?.[0])}
                  className="btn-secondary inline-flex items-center space-x-3 px-8 py-4 text-lg"
                >
                  <BookOpen className="h-6 w-6" />
                  <span>Preview Content</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Topic Preview Modal */}
      <AnimatePresence>
        {showPreview && selectedTopic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-dark-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedTopic.title}</h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-400 mb-6">{selectedTopic.description}</p>
              
              {selectedTopic.lessons && selectedTopic.lessons.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Lessons in this topic:</h4>
                  <div className="space-y-3">
                    {selectedTopic.lessons.map((lesson, index) => {
                      const TypeIcon = typeIcons[lesson.type] || FileText
                      return (
                        <div key={lesson.id} className="flex items-center space-x-4 p-3 bg-dark-700 rounded-lg">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                            <TypeIcon className="h-4 w-4 text-primary-400" />
                          </div>
                          <div className="flex-1">
                            <h5 className="text-white font-medium">{lesson.title}</h5>
                            <div className="flex items-center space-x-2 text-sm text-gray-400">
                              <span>{lesson.duration}</span>
                              <span>•</span>
                              <span className="capitalize">{lesson.type}</span>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
              
              <div className="flex gap-4">
                <Link
                  to={`/learn/${pathId}/${selectedTopic.id}`}
                  className="btn-primary flex-1 text-center"
                  onClick={() => setShowPreview(false)}
                >
                  Start Learning
                </Link>
                <button
                  onClick={() => setShowPreview(false)}
                  className="btn-secondary flex-1"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LearningPath
