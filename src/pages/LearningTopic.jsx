"use client"

import React from "react"

import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle,
  Play,
  Menu,
  X,
  FileText,
  Video,
  Code,
  Target,
  Award,
  Users,
  ChevronRight,
  Download,
  Share2,
  Bookmark,
} from "lucide-react"
import { getTopicById, getLessonById, getLearningPathById } from "../data/globalData"

const typeIcons = {
  video: Video,
  interactive: Code,
  "hands-on": Play,
  reading: FileText,
}

const LearningTopic = () => {
  const { pathId, topicId, lessonId } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [topic, setTopic] = useState(null)
  const [currentLesson, setCurrentLesson] = useState(null)
  const [path, setPath] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [lessonCompleted, setLessonCompleted] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const [notes, setNotes] = useState("")
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const pathData = getLearningPathById(pathId)
    const topicData = getTopicById(pathId, topicId)

    setPath(pathData)
    setTopic(topicData)

    if (lessonId && topicData) {
      const lessonData = getLessonById(pathId, topicId, lessonId)
      setCurrentLesson(lessonData)
      setLessonCompleted(lessonData?.completed || false)
    } else if (topicData && topicData.lessons && topicData.lessons.length > 0) {
      setCurrentLesson(topicData.lessons[0])
      setLessonCompleted(topicData.lessons[0]?.completed || false)
    }

    setTimeout(() => setLoading(false), 800)
  }, [pathId, topicId, lessonId])

  // Simulate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLessonSelect = (lesson) => {
    setCurrentLesson(lesson)
    setLessonCompleted(lesson?.completed || false)
    navigate(`/learn/${pathId}/${topicId}/${lesson.id}`)
    setSidebarOpen(false)
  }

  const handleMarkComplete = () => {
    setLessonCompleted(!lessonCompleted)
    // Here you would typically update the backend
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-900">
        <div className="animate-pulse">
          {/* Header Skeleton */}
          <div className="bg-dark-800 border-b border-dark-700 h-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="h-4 bg-dark-700 rounded w-1/3"></div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="flex">
            <div className="w-80 bg-dark-800 border-r border-dark-700 h-screen">
              <div className="p-6 space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-16 bg-dark-700 rounded"></div>
                ))}
              </div>
            </div>
            <div className="flex-1 p-8">
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="h-8 bg-dark-700 rounded w-2/3"></div>
                <div className="h-4 bg-dark-700 rounded w-1/2"></div>
                <div className="h-96 bg-dark-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!topic || !path) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <div className="w-24 h-24 bg-dark-700 rounded-full flex items-center justify-center mb-6 mx-auto">
            <BookOpen className="h-12 w-12 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Topic Not Found</h1>
          <p className="text-gray-400 mb-8">The topic you're looking for doesn't exist.</p>
          <Link to="/learn" className="btn-primary">
            Back to Learning Paths
          </Link>
        </motion.div>
      </div>
    )
  }

  const currentLessonIndex = topic.lessons?.findIndex((lesson) => lesson.id === currentLesson?.id) || 0
  const nextLesson = topic.lessons?.[currentLessonIndex + 1]
  const prevLesson = topic.lessons?.[currentLessonIndex - 1]
  const completedLessons = topic.lessons?.filter((l) => l.completed).length || 0
  const totalLessons = topic.lessons?.length || 0
  const topicProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-dark-700 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-400 to-purple-400"
          style={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-800/95 backdrop-blur-sm border-b border-dark-700 sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Side */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-700 transition-all duration-200"
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              <nav className="flex items-center space-x-2 text-sm">
                <Link to="/learn" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  Learn
                </Link>
                <ChevronRight className="h-4 w-4 text-gray-600" />
                <Link
                  to={`/learn/${pathId}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {path.title}
                </Link>
                <ChevronRight className="h-4 w-4 text-gray-600" />
                <span className="text-white font-medium">{topic.title}</span>
              </nav>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <div className="text-sm text-gray-400">
                  Lesson {currentLessonIndex + 1} of {totalLessons}
                </div>
                <div className="w-32 bg-dark-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-400 to-purple-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentLessonIndex + 1) / totalLessons) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowNotes(!showNotes)}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-700 transition-all duration-200"
                >
                  <FileText className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-700 transition-all duration-200">
                  <Bookmark className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-700 transition-all duration-200">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          {(sidebarOpen || window.innerWidth >= 1024) && (
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed lg:static inset-y-0 left-0 z-30 w-80 bg-dark-800/95 backdrop-blur-sm border-r border-dark-700"
            >
              <div className="flex flex-col h-full">
                {/* Topic Header */}
                <div className="p-6 border-b border-dark-700">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 rounded-lg ${topic.color || "bg-primary-500"}`}>
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-white">{topic.title}</h2>
                        <p className="text-xs text-gray-400">
                          {topic.difficulty} • {topic.duration}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">{topic.description}</p>

                    {/* Topic Progress */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                        <span>Topic Progress</span>
                        <span>{Math.round(topicProgress)}%</span>
                      </div>
                      <div className="w-full bg-dark-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${topicProgress}%` }}
                          transition={{ delay: 0.5, duration: 1 }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{topic.estimatedHours}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>
                          {completedLessons}/{totalLessons} completed
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Lessons List */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-300 mb-4 flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      Lessons
                    </h3>
                    <div className="space-y-2">
                      {topic.lessons?.map((lesson, index) => {
                        const TypeIcon = typeIcons[lesson.type] || FileText
                        const isActive = currentLesson?.id === lesson.id

                        return (
                          <motion.button
                            key={lesson.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            onClick={() => handleLessonSelect(lesson)}
                            className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                              isActive
                                ? "bg-gradient-to-r from-primary-500/20 to-purple-500/20 border border-primary-500/30 shadow-lg"
                                : "hover:bg-dark-700/50 border border-transparent"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div
                                className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                  lesson.completed
                                    ? "bg-green-500 text-white"
                                    : isActive
                                      ? "bg-primary-500 text-white"
                                      : "bg-dark-600 text-gray-400 group-hover:bg-dark-500"
                                }`}
                              >
                                {lesson.completed ? (
                                  <CheckCircle className="h-5 w-5" />
                                ) : (
                                  <TypeIcon className="h-5 w-5" />
                                )}
                              </div>

                              <div className="flex-1 min-w-0">
                                <div
                                  className={`text-sm font-medium truncate transition-colors duration-300 ${
                                    isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                                  }`}
                                >
                                  {lesson.title}
                                </div>
                                <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                                  <span>{lesson.duration}</span>
                                  <span>•</span>
                                  <span className="capitalize">{lesson.type}</span>
                                  {lesson.completed && (
                                    <>
                                      <span>•</span>
                                      <span className="text-green-400">Completed</span>
                                    </>
                                  )}
                                </div>
                              </div>

                              {isActive && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-2 h-2 bg-primary-400 rounded-full"
                                />
                              )}
                            </div>
                          </motion.button>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-dark-700">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <span>Overall Progress</span>
                    <span>{Math.round(topicProgress)}%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2 mb-4">
                    <motion.div
                      className="bg-gradient-to-r from-primary-400 to-purple-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${topicProgress}%` }}
                      transition={{ delay: 0.8, duration: 1.2 }}
                    />
                  </div>
                  <Link to={`/learn/${pathId}`} className="w-full btn-secondary text-center text-sm">
                    Back to Topics
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-20 bg-black/50 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {currentLesson ? (
              <motion.div
                key={currentLesson.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Lesson Header */}
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4"
                  >
                    <span
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                        currentLesson.type === "video"
                          ? "bg-red-500/20 text-red-400"
                          : currentLesson.type === "interactive"
                            ? "bg-blue-500/20 text-blue-400"
                            : currentLesson.type === "hands-on"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-purple-500/20 text-purple-400"
                      }`}
                    >
                      {typeIcons[currentLesson.type] && (
                        <span className="mr-2">
                          {React.createElement(typeIcons[currentLesson.type], { className: "h-4 w-4" })}
                        </span>
                      )}
                      {currentLesson.type.charAt(0).toUpperCase() + currentLesson.type.slice(1)} Lesson
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                  >
                    {currentLesson.title}
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center space-x-6 text-sm text-gray-400"
                  >
                    <div className="flex items-center space-x-2 bg-dark-700/50 rounded-full px-4 py-2">
                      <Clock className="h-4 w-4" />
                      <span>{currentLesson.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-dark-700/50 rounded-full px-4 py-2">
                      <Users className="h-4 w-4" />
                      <span>
                        Lesson {currentLessonIndex + 1} of {totalLessons}
                      </span>
                    </div>
                    <button
                      onClick={handleMarkComplete}
                      className={`flex items-center space-x-2 rounded-full px-4 py-2 transition-all duration-300 ${
                        lessonCompleted
                          ? "bg-green-500/20 text-green-400"
                          : "bg-primary-500/20 text-primary-400 hover:bg-primary-500/30"
                      }`}
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>{lessonCompleted ? "Completed" : "Mark Complete"}</span>
                    </button>
                  </motion.div>
                </div>

                {/* Lesson Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="card relative overflow-hidden"
                >
                  {/* Content Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-dark-700">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-500/20 rounded-lg">
                        <BookOpen className="h-5 w-5 text-primary-400" />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-white">Lesson Content</h2>
                        <p className="text-sm text-gray-400">Take your time to understand each concept</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-700 transition-all duration-200">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Lesson Content Body */}
                  <div className="prose prose-invert prose-lg max-w-none">
                    <div
                      className="text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html:
                          currentLesson.content
                            ?.replace(/\n/g, "<br>")
                            .replace(
                              /```([\s\S]*?)```/g,
                              '<pre class="bg-dark-700 p-4 rounded-lg overflow-x-auto my-4 border border-dark-600"><code class="text-green-400">$1</code></pre>',
                            )
                            .replace(
                              /`([^`]+)`/g,
                              '<code class="bg-dark-700 px-2 py-1 rounded text-primary-400">$1</code>',
                            )
                            .replace(
                              /### (.*)/g,
                              '<h3 class="text-xl font-bold text-white mt-8 mb-4 flex items-center"><span class="w-1 h-6 bg-primary-400 rounded mr-3"></span>$1</h3>',
                            )
                            .replace(
                              /## (.*)/g,
                              '<h2 class="text-2xl font-bold text-white mt-10 mb-6 flex items-center"><span class="w-1 h-8 bg-primary-400 rounded mr-4"></span>$1</h2>',
                            )
                            .replace(
                              /# (.*)/g,
                              '<h1 class="text-3xl font-bold text-white mt-12 mb-8 flex items-center"><span class="w-2 h-10 bg-gradient-to-b from-primary-400 to-purple-400 rounded mr-4"></span>$1</h1>',
                            ) || "Lesson content coming soon...",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Navigation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-between pt-8 border-t border-dark-700"
                >
                  <div>
                    {prevLesson ? (
                      <button
                        onClick={() => handleLessonSelect(prevLesson)}
                        className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-dark-700/50"
                      >
                        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
                        <div className="text-left">
                          <div className="text-xs text-gray-500 mb-1">Previous</div>
                          <div className="text-sm font-medium">{prevLesson.title}</div>
                        </div>
                      </button>
                    ) : (
                      <Link
                        to={`/learn/${pathId}`}
                        className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-dark-700/50"
                      >
                        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>Back to Topics</span>
                      </Link>
                    )}
                  </div>

                  <div>
                    {nextLesson ? (
                      <button
                        onClick={() => handleLessonSelect(nextLesson)}
                        className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-dark-700/50"
                      >
                        <div className="text-right">
                          <div className="text-xs text-gray-500 mb-1">Next</div>
                          <div className="text-sm font-medium">{nextLesson.title}</div>
                        </div>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    ) : (
                      <Link to={`/learn/${pathId}`} className="btn-primary inline-flex items-center space-x-2">
                        <Award className="h-5 w-5" />
                        <span>Complete Topic</span>
                      </Link>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
                <div className="w-24 h-24 bg-dark-700 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <BookOpen className="h-12 w-12 text-gray-400" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-4">No Lessons Available</h1>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  This topic doesn't have any lessons yet. Check back later for updates.
                </p>
                <Link to={`/learn/${pathId}`} className="btn-primary">
                  Back to Topics
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Notes Panel */}
      <AnimatePresence>
        {showNotes && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 bg-dark-800/95 backdrop-blur-sm border-l border-dark-700 z-40"
          >
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-dark-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    My Notes
                  </h3>
                  <button
                    onClick={() => setShowNotes(false)}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-700 transition-all duration-200"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-400 mt-1">Take notes while learning</p>
              </div>

              <div className="flex-1 p-4">
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Write your notes here..."
                  className="w-full h-full bg-dark-700 border border-dark-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 resize-none focus:outline-none focus:border-primary-500 transition-colors duration-200"
                />
              </div>

              <div className="p-4 border-t border-dark-700">
                <button className="w-full btn-primary text-sm">Save Notes</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LearningTopic
