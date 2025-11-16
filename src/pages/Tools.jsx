"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, 
  Filter, 
  Star, 
  ExternalLink, 
  Github, 
  Zap, 
  Shield, 
  Globe,
  Grid,
  List,
  Download,
  Code,
  Network,
  Wifi,
  Fingerprint,
  Eye
} from "lucide-react"
import ToolCard from "../components/ToolCard"
import { globalData, filterToolsByCategory, searchTools } from "../data/globalData"

const Tools = () => {
  const [tools, setTools] = useState([])
  const [filteredTools, setFilteredTools] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPlatform, setSelectedPlatform] = useState("All")
  const [sortBy, setSortBy] = useState("name")
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState("grid")
  const [favoriteTools, setFavoriteTools] = useState(new Set())

  const allTools = globalData.tools

  const categories = [
    { name: "All", icon: <Zap className="h-4 w-4" />, count: allTools.length },
    { name: "Web Security", icon: <Globe className="h-4 w-4" /> },
    { name: "Network Security", icon: <Network className="h-4 w-4" /> },
    { name: "Exploitation", icon: <Shield className="h-4 w-4" /> },
    { name: "Cryptography", icon: <Fingerprint className="h-4 w-4" /> },
    { name: "Wireless Security", icon: <Wifi className="h-4 w-4" /> },
    { name: "Reverse Engineering", icon: <Code className="h-4 w-4" /> },
    { name: "OSINT", icon: <Eye className="h-4 w-4" /> },
    { name: "Forensics", icon: <Search className="h-4 w-4" /> },
  ]

  const platforms = [
    { name: "All", icon: "💻" },
    { name: "Windows", icon: "🪟" },
    { name: "Linux", icon: "🐧" },
    { name: "macOS", icon: "🍎" },
    { name: "Cross-Platform", icon: "🌐" }
  ]

  const sortOptions = [
    { value: "name", label: "Name (A-Z)" },
    { value: "category", label: "Category" },
    { value: "popular", label: "Most Popular" }
  ]

  // Enhanced tool processing
  const processedTools = useMemo(() => {
    return allTools.map(tool => ({
      ...tool,
      isPopular: tool.tags?.includes("Professional") || tool.tags?.includes("Popular"),
      isOpenSource: tool.githubLink !== null
    }))
  }, [allTools])

  useEffect(() => {
    setTools(processedTools)
    setFilteredTools(processedTools)
    setLoading(false)

    // Load favorite tools from localStorage
    const favorites = JSON.parse(localStorage.getItem('favoriteTools') || '[]')
    setFavoriteTools(new Set(favorites))
  }, [processedTools])

  // Enhanced filtering and sorting
  useEffect(() => {
    let filtered = [...tools]

    // Search filter
    if (searchTerm) {
      filtered = searchTools(searchTerm, filtered)
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filterToolsByCategory(selectedCategory, filtered)
    }

    // Platform filter
    if (selectedPlatform !== "All") {
      filtered = filtered.filter(tool => 
        tool.platform?.some(platform => 
          platform.toLowerCase().includes(selectedPlatform.toLowerCase()) ||
          (selectedPlatform === "Cross-Platform" && tool.platform?.length > 2)
        )
      )
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "category":
          return a.category.localeCompare(b.category)
        case "popular":
          const aScore = a.tags?.includes("Professional") ? 2 : a.tags?.includes("Popular") ? 1 : 0
          const bScore = b.tags?.includes("Professional") ? 2 : b.tags?.includes("Popular") ? 1 : 0
          return bScore - aScore
        default:
          return 0
      }
    })

    setFilteredTools(filtered)
  }, [searchTerm, selectedCategory, selectedPlatform, sortBy, tools])

  const toggleFavorite = (toolId) => {
    setFavoriteTools(prev => {
      const newSet = new Set(prev)
      if (newSet.has(toolId)) {
        newSet.delete(toolId)
      } else {
        newSet.add(toolId)
      }
      // Save to localStorage
      localStorage.setItem('favoriteTools', JSON.stringify([...newSet]))
      return newSet
    })
  }

  const getPlatformIcons = (platforms) => {
    const iconMap = {
      "Windows": "🪟",
      "Linux": "🐧",
      "macOS": "🍎"
    }
    return platforms?.map(platform => iconMap[platform] || "💻").join(" ") || "💻"
  }

  const StatsCard = ({ icon, value, label }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-effect rounded-xl p-4 text-center"
    >
      <div className="flex justify-center mb-2">
        {icon}
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  )

  const LoadingSkeleton = () => (
    <div className={`gap-6 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'space-y-6'}`}>
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="card animate-pulse"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-dark-700 rounded-xl"></div>
            <div className="flex-1">
              <div className="h-5 bg-dark-700 rounded mb-2 w-3/4"></div>
              <div className="h-3 bg-dark-700 rounded w-1/2"></div>
            </div>
          </div>
          <div className="h-4 bg-dark-700 rounded mb-2 w-full"></div>
          <div className="h-4 bg-dark-700 rounded mb-4 w-5/6"></div>
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="h-6 bg-dark-700 rounded w-16"></div>
            <div className="h-6 bg-dark-700 rounded w-20"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-3 bg-dark-700 rounded w-20"></div>
            <div className="h-3 bg-dark-700 rounded w-16"></div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  const ToolCardEnhanced = ({ tool, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.02] ${
        viewMode === 'grid' ? 'card' : 'card flex flex-col md:flex-row gap-6'
      }`}
    >
      <div className={`flex items-start space-x-4 ${viewMode === 'list' ? 'md:w-64' : ''}`}>
        {/* Tool Icon/Logo Area */}
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            {tool.name.charAt(0)}
          </div>
          {tool.isPopular && (
            <div className="absolute -top-1 -right-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            </div>
          )}
        </div>

        {/* Tool Basic Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors line-clamp-1">
              {tool.name}
            </h3>
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleFavorite(tool.id)
              }}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Star className={`h-4 w-4 ${
                favoriteTools.has(tool.id) 
                  ? 'text-yellow-400 fill-yellow-400' 
                  : 'text-gray-400'
              }`} />
            </button>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              {tool.category}
            </span>
            <span className="text-gray-500">•</span>
            <span>{getPlatformIcons(tool.platform)}</span>
            {tool.isOpenSource && (
              <>
                <span className="text-gray-500">•</span>
                <span className="flex items-center gap-1 text-green-400">
                  <Github className="h-3 w-3" />
                  Open Source
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Tool Description */}
      <div className="flex-1">
        <p className="text-gray-400 mb-4 line-clamp-3">
          {tool.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags?.slice(0, 4).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
          {tool.tags?.length > 4 && (
            <span className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded-md">
              +{tool.tags.length - 4}
            </span>
          )}
        </div>

        {/* Features Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
          <ul className="text-xs text-gray-400 space-y-1">
            {tool.features?.slice(0, 3).map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary-400 rounded-full"></div>
                {feature}
              </li>
            ))}
            {tool.features?.length > 3 && (
              <li className="text-gray-500">+ {tool.features.length - 3} more features</li>
            )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-dark-600">
          <div className="flex items-center gap-2">
            {tool.url && (
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 px-3 py-1 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-500 transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                Website
              </a>
            )}
            {tool.githubLink && (
              <a
                href={tool.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-lg hover:bg-dark-600 transition-colors"
              >
                <Github className="h-3 w-3" />
                GitHub
              </a>
            )}
          </div>
          
          {tool.tags?.includes("Professional") && (
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full font-medium">
              Pro
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Security <span className="gradient-text">Tools</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Discover and explore the most powerful cybersecurity tools used by professionals worldwide.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <StatsCard
              icon={<Zap className="h-6 w-6 text-primary-400" />}
              value={allTools.length}
              label="Total Tools"
            />
            <StatsCard
              icon={<Github className="h-6 w-6 text-green-400" />}
              value={allTools.filter(tool => tool.githubLink).length}
              label="Open Source"
            />
            <StatsCard
              icon={<Shield className="h-6 w-6 text-yellow-400" />}
              value={new Set(allTools.map(tool => tool.category)).size}
              label="Categories"
            />
            <StatsCard
              icon={<Star className="h-6 w-6 text-purple-400" />}
              value={allTools.filter(tool => tool.tags?.includes("Professional")).length}
              label="Professional"
            />
          </div>
        </motion.div>

        {/* Search and Controls Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-6"
        >
          {/* Main Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search tools, features, categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-dark-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
            />
          </div>

          {/* Filters and Controls */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Category Filter */}
            <div className="flex-1 overflow-x-auto">
              <div className="flex gap-2 pb-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all flex-shrink-0 ${
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
            <div className="flex gap-3">
              <div className="flex glass-effect rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid" 
                      ? "bg-primary-600 text-white" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "list" 
                      ? "bg-primary-600 text-white" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="glass-effect rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 min-w-[160px]"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-dark-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Platform Filter */}
          <div className="flex flex-wrap gap-2">
            {platforms.map((platform) => (
              <button
                key={platform.name}
                onClick={() => setSelectedPlatform(platform.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                  selectedPlatform === platform.name
                    ? "bg-dark-700 text-white"
                    : "glass-effect text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{platform.icon}</span>
                <span>{platform.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Summary */}
        {!loading && filteredTools.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 flex items-center justify-between text-sm text-gray-400"
          >
            <span>
              Showing {filteredTools.length} of {allTools.length} tools
              {searchTerm && ` for "${searchTerm}"`}
            </span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400" />
                {filteredTools.filter(tool => favoriteTools.has(tool.id)).length} favorites
              </span>
              <span className="flex items-center gap-1">
                <Github className="h-4 w-4 text-green-400" />
                {filteredTools.filter(tool => tool.githubLink).length} open source
              </span>
            </div>
          </motion.div>
        )}

        {/* Tools Grid/List */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
              <AnimatePresence>
                {filteredTools.map((tool, index) => (
                  <ToolCardEnhanced key={tool.id} tool={tool} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {filteredTools.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-white mb-2">No tools found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search terms or filters.</p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                    setSelectedPlatform("All")
                  }}
                  className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-500 transition-colors"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Tools