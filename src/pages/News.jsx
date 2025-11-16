"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Calendar, 
  ExternalLink, 
  TrendingUp, 
  AlertTriangle, 
  ShieldAlert, 
  Lock, 
  User, 
  Sparkles, 
  ChevronDown, 
  ChevronUp,
  Search,
  Filter,
  Clock,
  Eye,
  EyeOff,
  Bookmark,
  Share2,
  Download
} from "lucide-react"
import { globalData, filterNewsByCategory } from "../data/globalData"

const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedNewsId, setExpandedNewsId] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [dateRange, setDateRange] = useState("all")
  const [severityFilter, setSeverityFilter] = useState("all")
  const [savedNews, setSavedNews] = useState(new Set())
  const [viewMode, setViewMode] = useState("grouped")

  const allNews = globalData.news

  // Fix duplicate keys by ensuring unique IDs
  const newsWithUniqueIds = useMemo(() => {
    const seenIds = new Set()
    return allNews.map(item => {
      let uniqueId = item.id
      let counter = 1
      while (seenIds.has(uniqueId)) {
        uniqueId = `${item.id}-${counter}`
        counter++
      }
      seenIds.add(uniqueId)
      return {
        ...item,
        id: uniqueId,
        // Ensure severity is always a string
        severity: typeof item.severity === 'string' ? item.severity : 'Medium'
      }
    })
  }, [allNews])

  // Enhanced news categorization with more time segments
  const categorizeNewsByDate = (newsItems) => {
    const now = new Date()
    const oneDayAgo = new Date(now)
    oneDayAgo.setDate(oneDayAgo.getDate() - 1)
    const threeDaysAgo = new Date(now)
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)
    const oneWeekAgo = new Date(now)
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
    const oneMonthAgo = new Date(now)
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
    
    return newsItems.reduce((acc, item) => {
      const itemDate = new Date(item.date)
      if (itemDate >= oneDayAgo) {
        acc.today.push(item)
      } else if (itemDate >= threeDaysAgo) {
        acc.recent.push(item)
      } else if (itemDate >= oneWeekAgo) {
        acc.thisWeek.push(item)
      } else if (itemDate >= oneMonthAgo) {
        acc.thisMonth.push(item)
      } else {
        acc.older.push(item)
      }
      return acc
    }, { today: [], recent: [], thisWeek: [], thisMonth: [], older: [] })
  }

  // Updated categories with better icons
  const categories = [
    { name: "All", icon: <ShieldAlert className="h-4 w-4" />, count: newsWithUniqueIds.length },
    { name: "Vulnerabilities", icon: <AlertTriangle className="h-4 w-4" /> },
    { name: "Cyber Attacks", icon: <TrendingUp className="h-4 w-4" /> },
    { name: "Data Breaches", icon: <Lock className="h-4 w-4" /> },
    { name: "Regulations", icon: <User className="h-4 w-4" /> },
    { name: "Financial Impact", icon: <AlertTriangle className="h-4 w-4" /> }
  ]

  // Enhanced filter function
  const filteredNews = useMemo(() => {
    let filtered = selectedCategory === "All" 
      ? newsWithUniqueIds 
      : filterNewsByCategory(selectedCategory, newsWithUniqueIds)

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
      )
    }

    // Date range filter
    if (dateRange !== "all") {
      const now = new Date()
      const filterDate = new Date()
      
      switch (dateRange) {
        case "today":
          filterDate.setDate(now.getDate() - 1)
          break
        case "week":
          filterDate.setDate(now.getDate() - 7)
          break
        case "month":
          filterDate.setMonth(now.getMonth() - 1)
          break
        default:
          break
      }
      
      filtered = filtered.filter(item => new Date(item.date) >= filterDate)
    }

    // Severity filter
    if (severityFilter !== "all") {
      filtered = filtered.filter(item => {
        const itemSeverity = typeof item.severity === 'string' ? item.severity.toLowerCase() : 'medium'
        return itemSeverity === severityFilter.toLowerCase()
      })
    }

    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [newsWithUniqueIds, selectedCategory, searchQuery, dateRange, severityFilter])

  const { today, recent, thisWeek, thisMonth, older } = categorizeNewsByDate(filteredNews)

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)
      try {
        await new Promise(resolve => setTimeout(resolve, 500))
        const sortedNews = [...newsWithUniqueIds]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map(item => ({
            ...item,
            fullContent: item.fullContent || item.summary,
            readingTime: Math.ceil(((item.fullContent || item.summary).split(' ').length || 100) / 200),
            // Ensure all required fields exist
            tags: item.tags || [],
            references: item.references || [],
            editorNotes: item.editorNotes || []
          }))
        setNews(sortedNews)
      } catch (error) {
        console.error("Error fetching news:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [newsWithUniqueIds])

  const formatDate = (dateString) => {
    try {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(dateString).toLocaleDateString('en-US', options)
    } catch {
      return 'Invalid Date'
    }
  }

  const getSeverityColor = (severity) => {
    const severityStr = typeof severity === 'string' ? severity.toLowerCase() : 'medium'
    switch (severityStr) {
      case 'critical': return 'text-red-400 bg-red-500/20 border-red-500/30'
      case 'high': return 'text-orange-400 bg-orange-500/20 border-orange-500/30'
      case 'medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
      case 'low': return 'text-green-400 bg-green-500/20 border-green-500/30'
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30'
    }
  }

  const toggleExpandNews = (id) => {
    setExpandedNewsId(expandedNewsId === id ? null : id)
  }

  const toggleSaveNews = (id) => {
    setSavedNews(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const shareNews = async (item) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.headline,
          text: item.summary,
          url: item.references?.[0]?.url || window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      navigator.clipboard.writeText(`${item.headline} - ${item.references?.[0]?.url}`)
    }
  }

  const NewsItem = ({ item }) => (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card group hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
    >
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary-400 transition-colors line-clamp-2">
              {item.headline}
            </h2>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => toggleSaveNews(item.id)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Bookmark 
                className={`h-4 w-4 ${savedNews.has(item.id) ? 'text-primary-400 fill-primary-400' : 'text-gray-400'}`} 
              />
            </button>
            <button
              onClick={() => shareNews(item)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Share2 className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(item.date)}</span>
          </div>
          <span className="text-gray-500">•</span>
          <div className="flex items-center gap-1 text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{item.readingTime || 2} min read</span>
          </div>
          <span className="text-gray-500">•</span>
          <span className="text-gray-500">{item.source || 'Unknown Source'}</span>
        </div>

        {/* Tags and Severity */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`px-2 py-1 rounded-full text-xs border ${getSeverityColor(item.severity)}`}>
            {typeof item.severity === 'string' ? item.severity : 'Medium'}
          </span>
          <span className="px-2 py-1 rounded-full text-xs bg-dark-700 text-primary-400">
            {item.category || 'Uncategorized'}
          </span>
          {(item.tags || []).slice(0, 2).map(tag => (
            <span key={tag} className="px-2 py-1 rounded-full text-xs bg-dark-600 text-gray-300">
              {tag}
            </span>
          ))}
          {(item.tags || []).length > 2 && (
            <span className="px-2 py-1 rounded-full text-xs bg-dark-600 text-gray-300">
              +{(item.tags || []).length - 2}
            </span>
          )}
        </div>

        {/* Summary */}
        <p className="text-gray-400 mb-4 line-clamp-3">{item.summary}</p>

        {/* Expanded Content */}
        <AnimatePresence>
          {expandedNewsId === item.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-dark-600">
                <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
                  {(item.fullContent || '').split('\n').map((paragraph, index) => (
                    paragraph.trim() && <p key={index}>{paragraph}</p>
                  ))}
                </div>
                
                {item.impact && (
                  <div className="mt-4 p-4 rounded-lg bg-dark-700/50 border border-dark-600">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-400" />
                      Impact Analysis
                    </h4>
                    <p className="text-gray-300 text-sm">{item.impact}</p>
                  </div>
                )}

                {(item.editorNotes || []).length > 0 && (
                  <div className="mt-4 space-y-3">
                    <h4 className="font-bold text-white mb-2">Expert Insights</h4>
                    {item.editorNotes.map((note, index) => (
                      <div key={index} className="p-3 rounded-lg bg-dark-700/30 border-l-4 border-primary-500">
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold text-primary-400">{note.author}:</span> {note.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {(item.references || []).length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-bold text-white mb-2">References</h4>
                    <div className="space-y-2">
                      {item.references.map((ref, index) => (
                        <a
                          key={index}
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>{ref.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-dark-600">
          <button
            onClick={() => toggleExpandNews(item.id)}
            className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-primary-500/10"
          >
            {expandedNewsId === item.id ? (
              <>
                <ChevronUp className="h-4 w-4" />
                <span>Show less</span>
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                <span>Read full analysis</span>
              </>
            )}
          </button>
          
          <div className="flex items-center gap-2">
            {item.references?.[0]?.url && (
              <a
                href={item.references[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
              >
                {/* <span>Source</span>
                <ExternalLink className="h-4 w-4" /> */}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )

  const LoadingSkeleton = () => (
    <div className="space-y-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="card animate-pulse">
          <div className="p-6">
            <div className="flex justify-between mb-4">
              <div className="h-6 bg-dark-700 rounded w-3/4"></div>
              <div className="h-4 bg-dark-700 rounded w-16"></div>
            </div>
            <div className="h-4 bg-dark-700 rounded w-32 mb-4"></div>
            <div className="flex gap-2 mb-4">
              <div className="h-6 bg-dark-700 rounded w-16"></div>
              <div className="h-6 bg-dark-700 rounded w-20"></div>
            </div>
            <div className="h-4 bg-dark-700 rounded mb-2 w-full"></div>
            <div className="h-4 bg-dark-700 rounded mb-4 w-5/6"></div>
            <div className="flex justify-between">
              <div className="h-3 bg-dark-700 rounded w-24"></div>
              <div className="h-3 bg-dark-700 rounded w-20"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderNewsSection = (title, items, icon, description) => {
    if (items.length === 0) return null
    
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-primary-500/20 text-primary-400">
            {icon}
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{title}</h2>
            {description && (
              <p className="text-gray-400 text-sm">{description}</p>
            )}
          </div>
          <span className="ml-auto px-3 py-1 rounded-full text-sm bg-primary-500/20 text-primary-400">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </span>
        </div>
        
        <div className="grid gap-4 sm:gap-6">
          {items.map((item) => (
            <NewsItem key={item.id} item={item} />
          ))}
        </div>
      </motion.section>
    )
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Cybersecurity <span className="gradient-text">News</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Real-time threat intelligence, vulnerability alerts, and security insights
          </p>
        </motion.div>

        {/* Search and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 sm:mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search threats, vulnerabilities, companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>

          {/* Controls Row */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Category Filter */}
            <div className="flex-1 overflow-x-auto">
              <div className="flex gap-1 sm:gap-2 pb-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all flex-shrink-0 ${
                      selectedCategory === category.name
                        ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                        : "glass-effect text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    {category.count && (
                      <span className="px-1.5 py-0.5 rounded-full text-xs bg-white/20">
                        {category.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* View Controls */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                  showFilters 
                    ? "bg-primary-600 text-white" 
                    : "glass-effect text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filters</span>
              </button>
              
              <div className="flex glass-effect rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grouped")}
                  className={`px-3 py-1 rounded text-sm transition-all ${
                    viewMode === "grouped" 
                      ? "bg-primary-600 text-white" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Grouped
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-3 py-1 rounded text-sm transition-all ${
                    viewMode === "list" 
                      ? "bg-primary-600 text-white" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="glass-effect rounded-xl p-4 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Date Range
                    </label>
                    <select
                      value={dateRange}
                      onChange={(e) => setDateRange(e.target.value)}
                      className="w-full bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary-500"
                    >
                      <option value="all">All Time</option>
                      <option value="today">Last 24 Hours</option>
                      <option value="week">Last Week</option>
                      <option value="month">Last Month</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Severity
                    </label>
                    <select
                      value={severityFilter}
                      onChange={(e) => setSeverityFilter(e.target.value)}
                      className="w-full bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary-500"
                    >
                      <option value="all">All Severities</option>
                      <option value="critical">Critical</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                  
                  <div className="sm:col-span-2 lg:col-span-2 flex items-end gap-2">
                    <button
                      onClick={() => {
                        setDateRange("all")
                        setSeverityFilter("all")
                        setSearchQuery("")
                      }}
                      className="flex-1 px-4 py-2 bg-dark-600 text-gray-300 rounded-lg hover:bg-dark-500 transition-colors text-sm"
                    >
                      Reset Filters
                    </button>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors text-sm"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Summary */}
        {!loading && filteredNews.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 flex items-center justify-between text-sm text-gray-400"
          >
            <span>
              Showing {filteredNews.length} of {newsWithUniqueIds.length} news items
              {searchQuery && ` for "${searchQuery}"`}
            </span>
            <button className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors">
              {/* <Download className="h-4 w-4" />
              <span>Export</span> */}
            </button>
          </motion.div>
        )}

        {/* News List */}
        {loading ? (
          <LoadingSkeleton />
        ) : viewMode === "grouped" ? (
          <div className="space-y-8 sm:space-y-12">
            {renderNewsSection(
              "Breaking News", 
              today, 
              <Sparkles className="h-5 w-5" />,
              "Latest critical updates from the last 24 hours"
            )}
            {renderNewsSection(
              "Recent Developments", 
              recent, 
              <TrendingUp className="h-5 w-5" />,
              "Important updates from the last 3 days"
            )}
            {renderNewsSection(
              "This Week", 
              thisWeek, 
              <Clock className="h-5 w-5" />,
              "Significant events from the past week"
            )}
            {renderNewsSection(
              "This Month", 
              thisMonth, 
              <Calendar className="h-5 w-5" />,
              "Ongoing developments and analysis"
            )}
            {renderNewsSection(
              "Archive", 
              older, 
              <EyeOff className="h-5 w-5" />,
              "Historical context and background information"
            )}

            {filteredNews.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">No news found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setDateRange("all")
                    setSeverityFilter("all")
                    setSelectedCategory("All")
                  }}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        ) : (
          // List View
          <div className="space-y-4 sm:space-y-6">
            {filteredNews.map((item) => (
              <NewsItem key={item.id} item={item} />
            ))}
            
            {filteredNews.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">No news found</h3>
                <p className="text-gray-400">Try adjusting your search or filters</p>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default News