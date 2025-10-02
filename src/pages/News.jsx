"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ExternalLink, TrendingUp, AlertTriangle, ShieldAlert, Lock, User, Sparkles, ChevronDown, ChevronUp } from "lucide-react"
import { globalData, filterNewsByCategory } from "../data/globalData"

const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedNewsId, setExpandedNewsId] = useState(null)

  const allNews = globalData.news

  // Enhanced news categorization with more time segments
  const categorizeNewsByDate = (newsItems) => {
    const now = new Date()
    const oneDayAgo = new Date(now)
    oneDayAgo.setDate(oneDayAgo.getDate() - 1)
    const oneWeekAgo = new Date(now)
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
    const oneMonthAgo = new Date(now)
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
    
    return newsItems.reduce((acc, item) => {
      const itemDate = new Date(item.date)
      if (itemDate >= oneDayAgo) {
        acc.today.push(item)
      } else if (itemDate >= oneWeekAgo) {
        acc.thisWeek.push(item)
      } else if (itemDate >= oneMonthAgo) {
        acc.thisMonth.push(item)
      } else {
        acc.older.push(item)
      }
      return acc
    }, { today: [], thisWeek: [], thisMonth: [], older: [] })
  }

  // Updated categories with better icons
  const categories = [
    { name: "All", icon: <ShieldAlert className="h-4 w-4" /> },
    { name: "Vulnerabilities", icon: <AlertTriangle className="h-4 w-4" /> },
    { name: "Cyber Attacks", icon: <TrendingUp className="h-4 w-4" /> },
    { name: "Data Breaches", icon: <Lock className="h-4 w-4" /> },
    { name: "Regulations", icon: <User className="h-4 w-4" /> },
    { name: "Financial Impact", icon: <AlertTriangle className="h-4 w-4" /> }
  ]

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)
      try {
        await new Promise(resolve => setTimeout(resolve, 300))
        // Sort news by date (newest first) and add full content
        const sortedNews = [...allNews].sort((a, b) => new Date(b.date) - new Date(a.date)).map(item => ({
          ...item,
          // Add full content if not present (fallback to summary)
          fullContent: item.fullContent || item.summary
        }))
        setNews(sortedNews)
      } catch (error) {
        console.error("Error fetching news:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [])

  const filteredNews = selectedCategory === "All" 
    ? news 
    : filterNewsByCategory(selectedCategory)

  const { today, thisWeek, thisMonth, older } = categorizeNewsByDate(filteredNews)

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

 



  const toggleExpandNews = (id) => {
    setExpandedNewsId(expandedNewsId === id ? null : id)
  }

  const NewsItem = ({ item }) => (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card group hover:border-primary-500/30 transition-colors"
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h2 className="text-lg md:text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
            {item.headline}
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-sm">
          <div className="flex items-center gap-3 text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(item.date)}</span>
            </div>
            <span>•</span>
            <span>{item.source}</span>
          </div>

          <span className="px-2 py-1 rounded-full text-xs bg-dark-700 text-primary-400">
            {item.category}
          </span>
        </div>

        <p className="text-gray-400 mb-4">{item.summary}</p>

        <AnimatePresence>
          {expandedNewsId === item.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-dark-600">
                <div className="prose prose-invert max-w-none text-gray-300">
                  {item.fullContent}
                </div>
                {item.impact && (
                  <div className="mt-4 p-3 rounded-lg bg-dark-700/50 border border-dark-600">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-400" />
                      Impact Analysis
                    </h4>
                    <p className="text-gray-300 text-sm">{item.impact}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => toggleExpandNews(item.id)}
            className="flex items-center gap-1 text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            {expandedNewsId === item.id ? (
              <>
                <ChevronUp className="h-4 w-4" />
                <span>Show less</span>
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                <span>Read more</span>
              </>
            )}
          </button>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            <span>Source</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  )

  const LoadingSkeleton = () => (
    <div className="space-y-6">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="card animate-pulse">
          <div className="p-5">
            <div className="flex justify-between mb-3">
              <div className="h-6 bg-dark-700 rounded w-3/4"></div>
              <div className="h-4 bg-dark-700 rounded w-16"></div>
            </div>
            <div className="h-4 bg-dark-700 rounded w-32 mb-4"></div>
            <div className="h-4 bg-dark-700 rounded mb-2 w-full"></div>
            <div className="h-4 bg-dark-700 rounded mb-4 w-5/6"></div>
            <div className="flex justify-between">
              <div className="h-3 bg-dark-700 rounded w-20"></div>
              <div className="h-3 bg-dark-700 rounded w-16"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderNewsSection = (title, items, icon) => {
    if (items.length === 0) return null
    
    return (
      <div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 mb-6"
        >
          {icon}
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <span className="ml-2 px-2 py-1 rounded-full text-xs bg-primary-500/20 text-primary-400">
            {items.length} items
          </span>
        </motion.div>
        
        <div className="space-y-6">
          {items.map((item) => (
            <NewsItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cybersecurity <span className="gradient-text">News</span>
          </h1>
          <p className="text-lg text-gray-400">
            Latest threats, vulnerabilities, and security incidents
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all ${
                  selectedCategory === category.name
                    ? "bg-primary-600 text-white"
                    : "glass-effect text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* News List */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <div className="space-y-10">
            {renderNewsSection("Today's News", today, <Sparkles className="h-5 w-5 text-primary-400" />)}
            {renderNewsSection("This Week", thisWeek, <Sparkles className="h-5 w-5 text-yellow-400" />)}
            {renderNewsSection("This Month", thisMonth, <TrendingUp className="h-5 w-5 text-blue-400" />)}
            {renderNewsSection("Older News", older, <Calendar className="h-5 w-5 text-gray-400" />)}

            {filteredNews.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-16"
              >
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">No news found</h3>
                <p className="text-gray-400">Try selecting a different category</p>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default News