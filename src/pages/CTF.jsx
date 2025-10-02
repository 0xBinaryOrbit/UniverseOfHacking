"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Calendar, 
  Users, 
  Trophy, 
  ExternalLink, 
  Clock, 
  MapPin, 
  Sparkles, 
  Wifi,
  Building,
  AlertCircle
} from "lucide-react"
import { globalData } from "../data/globalData"
const CTF = () => {
  const [events, setEvents] = useState({
    upcoming: [],
    ongoing: [],
    past: []
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        // Simulate API call with error handling
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // In a real app, this would be an API call
        if (!globalData?.ctfEvents?.upcoming) {
          throw new Error("Events data not available")
        }
        
        const now = new Date()
        const upcoming = []
        const ongoing = []
        const past = []
        
        globalData.ctfEvents.upcoming.forEach(event => {
          try {
            const startDate = new Date(event.startDate)
            const endDate = new Date(event.endDate)
            
            if (startDate > now) {
              upcoming.push(event)
            } else if (endDate > now) {
              ongoing.push(event)
            } else {
              past.push(event)
            }
          } catch (dateError) {
            console.error("Invalid date in event:", event, dateError)
            // Skip events with invalid dates
          }
        })
        
        // Sort events
        upcoming.sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
        ongoing.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
        past.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
        
        setEvents({ upcoming, ongoing, past })
        setError(null)
      } catch (err) {
        console.error("Failed to load events:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const formatDate = (dateString) => {
    try {
      if (!dateString) return "Date not specified"
      
      const date = new Date(dateString)
      if (isNaN(date.getTime())) return "Invalid date"
      
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short"
      })
    } catch (error) {
      return "Invalid date"
    }
  }

  const getTimeStatus = (startDate, endDate) => {
    try {
      const now = new Date()
      const start = new Date(startDate)
      const end = new Date(endDate)
      
      if (isNaN(start.getTime()) || isNaN(end.getTime())) return "unknown"
      
      if (now < start) return "upcoming"
      if (now > end) return "completed"
      return "ongoing"
    } catch (error) {
      return "unknown"
    }
  }

  const getDifficultyColor = (difficulty) => {
    if (!difficulty) return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    
    const colors = {
      "beginner": "bg-green-500/20 text-green-400 border-green-500/30",
      "easy": "bg-green-500/20 text-green-400 border-green-500/30",
      "intermediate": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      "medium": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      "advanced": "bg-red-500/20 text-red-400 border-red-500/30",
      "hard": "bg-red-500/20 text-red-400 border-red-500/30",
      "expert": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "all levels": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "all skill levels": "bg-blue-500/20 text-blue-400 border-blue-500/30"
    }
    
    const normalizedDifficulty = difficulty.toLowerCase()
    return colors[normalizedDifficulty] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }

  const getEventTypeIcon = (format, location) => {
    try {
      const formatLower = format?.toLowerCase() || ""
      const locationLower = location?.toLowerCase() || ""
      
      if (locationLower === "remote" || formatLower === "online") {
        return <Wifi className="h-4 w-4" />
      }
      return <Building className="h-4 w-4" />
    } catch (error) {
      return <Building className="h-4 w-4" />
    }
  }

  const getEventTypeText = (format, location) => {
    try {
      const formatLower = format?.toLowerCase() || ""
      const locationLower = location?.toLowerCase() || ""
      
      if (locationLower === "remote" || formatLower === "online") {
        return "Online"
      }
      return "On-site"
    } catch (error) {
      return "Unknown"
    }
  }

  const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    
    function calculateTimeLeft() {
      try {
        const difference = new Date(targetDate) - new Date()
        if (difference <= 0 || isNaN(difference)) return null
        
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        }
      } catch (error) {
        return null
      }
    }
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft())
      }, 1000)
      
      return () => clearTimeout(timer)
    })
    
    if (!timeLeft) return <span>Event started</span>
    
    return (
      <div className="flex items-center gap-1 text-xs">
        {timeLeft.days > 0 && <span className="countdown-box">{timeLeft.days}d</span>}
        <span className="countdown-box">{timeLeft.hours}h</span>
        <span className="countdown-box">{timeLeft.minutes}m</span>
        <span className="countdown-box">{timeLeft.seconds}s</span>
      </div>
    )
  }

  const EventCard = ({ event, status }) => {
    if (!event) return null
    
    const timeStatus = status || getTimeStatus(event.startDate, event.endDate)
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="card group hover:border-primary-500/50 transition-all duration-300 relative overflow-hidden"
      >
        {/* Status indicator bar */}
        <div className={`absolute top-0 left-0 w-1 h-full ${
          timeStatus === "ongoing" ? "bg-green-500" : 
          timeStatus === "upcoming" ? "bg-blue-500" : "bg-gray-500"
        }`}></div>
        
        <div className="ml-3">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors truncate">
                {event.name || "Unnamed Event"}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-400">{event.platform || "Unknown platform"}</span>
                <span className="text-gray-600">•</span>
                <span className="text-xs text-gray-400">{event.type || "Unknown type"}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              {event.difficulty && (
                <span className={`text-xs px-2 py-1 rounded-full border ${getDifficultyColor(event.difficulty)}`}>
                  {event.difficulty}
                </span>
              )}
              
              <div className="flex items-center gap-1 text-xs text-gray-400">
                {getEventTypeIcon(event.format, event.location)}
                <span>{getEventTypeText(event.format, event.location)}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {event.description || "No description available."}
          </p>

          <div className="space-y-2 mb-4 text-sm">
            <div className="flex items-center justify-between text-gray-400">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Start:</span>
              </div>
              <span className="text-white text-right">{formatDate(event.startDate)}</span>
            </div>
            <div className="flex items-center justify-between text-gray-400">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>End:</span>
              </div>
              <span className="text-white text-right">{formatDate(event.endDate)}</span>
            </div>
            
            {event.location && event.location.toLowerCase() !== "remote" && (
              <div className="flex items-center justify-between text-gray-400">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Location:</span>
                </div>
                <span className="text-white text-right">{event.location}</span>
              </div>
            )}
            
            {timeStatus === "upcoming" && (
              <div className="flex items-center justify-between text-gray-400">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Starts in:</span>
                </div>
                <CountdownTimer targetDate={event.startDate} />
              </div>
            )}
            
            {timeStatus === "ongoing" && (
              <div className="flex items-center justify-between text-gray-400">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Ends in:</span>
                </div>
                <CountdownTimer targetDate={event.endDate} />
              </div>
            )}

            {event.prize && event.prize !== "TBA" && event.prize !== "None" && (
              <div className="flex items-center justify-between text-gray-400">
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 mr-2" />
                  <span>Prize:</span>
                </div>
                <span className="text-yellow-400">{event.prize}</span>
              </div>
            )}
            
            {timeStatus === "completed" && event.resultsUrl && (
              <div className="flex items-center justify-between text-gray-400">
                <div className="flex items-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span>Results:</span>
                </div>
                <a 
                  href={event.resultsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:underline flex items-center"
                >
                  View
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-dark-600">
            {event.participants ? (
              <div className="flex items-center text-xs text-gray-500">
                <Users className="h-3 w-3 mr-1" />
                <span>{event.participants} participants</span>
              </div>
            ) : (
              <div></div>
            )}
            
            {event.url && (
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 text-sm"
              >
                <span>
                  {timeStatus === "completed" ? 'Archive' : 
                  timeStatus === "ongoing" ? 'Join Now' : 'Register'}
                </span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  const LoadingSkeleton = () => (
    <div className="space-y-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="card animate-pulse relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-dark-700"></div>
          <div className="ml-3">
            <div className="flex justify-between items-start mb-4">
              <div className="h-6 bg-dark-700 rounded w-2/3"></div>
              <div className="h-4 bg-dark-700 rounded w-20"></div>
            </div>
            <div className="h-4 bg-dark-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-dark-700 rounded w-3/4 mb-6"></div>
            
            <div className="space-y-3 mb-6">
              <div className="h-4 bg-dark-700 rounded"></div>
              <div className="h-4 bg-dark-700 rounded"></div>
              <div className="h-4 bg-dark-700 rounded w-2/3"></div>
            </div>
            
            <div className="h-10 bg-dark-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )

  const ErrorState = ({ message, onRetry }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="card text-center py-12"
    >
      <div className="flex justify-center mb-4">
        <AlertCircle className="h-12 w-12 text-red-500" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Failed to load events</h3>
      <p className="text-gray-400 mb-6">{message || "Please try again later"}</p>
      <button onClick={onRetry} className="btn-primary">
        Try Again
      </button>
    </motion.div>
  )

  const EventSection = ({ title, events, loading, error, emptyMessage }) => {
    if (loading) return <LoadingSkeleton />
    if (error) return <ErrorState message={error} onRetry={() => window.location.reload()} />
    
    return (
      <>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {events.map((event, index) => (
                <EventCard 
                  key={event.id || index} 
                  event={event}
                  transition={{ delay: index * 0.1 }}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="card text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">{emptyMessage.title}</h3>
            <p className="text-gray-400">{emptyMessage.description}</p>
          </div>
        )}
      </>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Capture The <span className="gradient-text">Flag</span> Events
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Test your cybersecurity skills in these competitive challenges. Find upcoming, ongoing, and past CTF events.
          </p>
        </motion.div>

        {/* Ongoing Events */}
        {events.ongoing.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="h-8 w-2 bg-green-500 rounded-full mr-3"></div>
              <h2 className="text-3xl font-bold text-white">
                Live <span className="gradient-text">Ongoing</span> CTFs
              </h2>
            </div>
            
            <EventSection 
              events={events.ongoing}
              loading={loading}
              error={error}
              emptyMessage={{
                title: "No ongoing events",
                description: "There are no CTF events currently running"
              }}
            />
          </motion.section>
        )}

        {/* Upcoming Events */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <div className="h-8 w-2 bg-blue-500 rounded-full mr-3"></div>
            <h2 className="text-3xl font-bold text-white">
              <span className="gradient-text">Upcoming</span> Competitions
            </h2>
          </div>
          
          <EventSection 
            events={events.upcoming}
            loading={loading}
            error={error}
            emptyMessage={{
              title: "No upcoming events found",
              description: "Check back later for new CTF competitions"
            }}
          />
        </motion.section>

        {/* Past Events */}
        {events.past.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="h-8 w-2 bg-gray-500 rounded-full mr-3"></div>
              <h2 className="text-3xl font-bold text-white">
                Past <span className="gradient-text">Events</span>
              </h2>
            </div>
            
            <EventSection 
              events={events.past}
              loading={loading}
              error={error}
              emptyMessage={{
                title: "No past events",
                description: "There are no past CTF events to display"
              }}
            />
          </motion.section>
        )}

        {/* CTF Tips */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card bg-dark-800/50 border-primary-500/20"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            CTF <span className="gradient-text">Preparation Tips</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📚",
                title: "Learn the Basics",
                description: "Master core concepts like cryptography, web security, and binary exploitation before competing."
              },
              {
                icon: "👥",
                title: "Build a Team",
                description: "Collaborate with others who have complementary skills in different challenge categories."
              },
              {
                icon: "⚡",
                title: "Practice Regularly",
                description: "Use platforms like HackTheBox and TryHackMe to sharpen your skills between competitions."
              },
              {
                icon: "🔧",
                title: "Tool Proficiency",
                description: "Become fluent with essential tools like Burp Suite, Ghidra, and pwntools."
              },
              {
                icon: "⏱️",
                title: "Time Management",
                description: "Prioritize challenges based on points and your team's strengths during competitions."
              },
              {
                icon: "📝",
                title: "Study Writeups",
                description: "Analyze solutions from past CTFs to learn new techniques and approaches."
              }
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-800/30 rounded-lg p-6 text-center hover:bg-dark-700/50 transition-colors"
              >
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-gray-400 text-sm">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default CTF