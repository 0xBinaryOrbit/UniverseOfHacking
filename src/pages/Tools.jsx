"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Star } from "lucide-react"
import ToolCard from "../components/ToolCard"
import { globalData, filterToolsByCategory, searchTools } from "../data/globalData"

const Tools = () => {
  const [tools, setTools] = useState([])
  const [filteredTools, setFilteredTools] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [loading, setLoading] = useState(true)

  // Replace mockTools with:
  const allTools = globalData.tools

  const categories = [
    "All",
    "Web Security",
    "Network Security",
    "Exploitation",
    "Cryptography",
    "Wireless Security",
    "Reverse Engineering",
    "OSINT",
    "Forensics",
  ]

  // In useEffect, replace the setTimeout with:
  useEffect(() => {
    setTools(allTools)
    setFilteredTools(allTools)
    setLoading(false)
  }, [])

  // Update the filtering logic:
  useEffect(() => {
    let filtered = tools

    if (searchTerm) {
      filtered = searchTools(searchTerm)
    }

    if (selectedCategory && selectedCategory !== "All") {
      filtered = filterToolsByCategory(selectedCategory).filter((tool) =>
        searchTerm
          ? tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tool.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
          : true,
      )
    }

    setFilteredTools(filtered)
  }, [searchTerm, selectedCategory, tools])

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="card animate-pulse">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-dark-700 rounded-lg"></div>
            <div>
              <div className="h-4 bg-dark-700 rounded w-24 mb-2"></div>
              <div className="h-3 bg-dark-700 rounded w-16"></div>
            </div>
          </div>
          <div className="h-4 bg-dark-700 rounded mb-2"></div>
          <div className="h-4 bg-dark-700 rounded w-3/4 mb-4"></div>
          <div className="flex space-x-2">
            <div className="h-3 bg-dark-700 rounded w-16"></div>
            <div className="h-3 bg-dark-700 rounded w-20"></div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Security <span className="gradient-text">Tools</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover and explore the most powerful cybersecurity tools used by professionals worldwide.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 glass-effect rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none min-w-[180px]"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-dark-800">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 6).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category || (category === "All" && !selectedCategory)
                    ? "bg-primary-600 text-white"
                    : "glass-effect text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tools Grid */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map((tool, index) => (
                <ToolCard key={tool._id} tool={tool} index={index} />
              ))}
            </div>

            {filteredTools.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <div className="text-6xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-white mb-2">No tools found</h3>
                <p className="text-gray-400">Try adjusting your search terms or filters.</p>
              </motion.div>
            )}
          </>
        )}

      
      </div>
    </div>
  )
}

export default Tools
