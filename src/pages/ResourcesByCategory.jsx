"use client"

import { useState, useEffect, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Search, Filter, Star, Bookmark, ExternalLink, Download, Eye, Clock } from "lucide-react"
import { globalData } from "../data/globalData"

const ResourcesByCategory = () => {
  const { categoryName } = useParams()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [favoriteResources, setFavoriteResources] = useState(new Set())
  const [savedResources, setSavedResources] = useState(new Set())
  
  // Decode the category name from URL
  const decodedCategory = decodeURIComponent(categoryName)
  
  // Filter resources by category
  const categoryResources = globalData.resources.filter(
    resource => resource.category === decodedCategory
  )

  // Get all unique types in this category
  const resourceTypes = useMemo(() => {
    const types = [...new Set(categoryResources.map(resource => resource.type))].filter(Boolean)
    return ["All", ...types].sort()
  }, [categoryResources])

  // Get all unique difficulties in this category
  const difficulties = useMemo(() => {
    const diffs = [...new Set(categoryResources.map(resource => resource.difficulty))].filter(Boolean)
    return ["All", ...diffs]
  }, [categoryResources])

  // Filter resources based on search and filters
  const filteredResources = useMemo(() => {
    return categoryResources.filter(resource => {
      // Search filter
      const matchesSearch = !searchTerm || 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      // Type filter
      const matchesType = selectedType === "All" || resource.type === selectedType
      
      // Difficulty filter
      const matchesDifficulty = selectedDifficulty === "All" || resource.difficulty === selectedDifficulty
      
      return matchesSearch && matchesType && matchesDifficulty
    })
  }, [categoryResources, searchTerm, selectedType, selectedDifficulty])

  useEffect(() => {
    // Load favorite and saved resources from localStorage
    const favorites = JSON.parse(localStorage.getItem('favoriteResources') || '[]')
    const saved = JSON.parse(localStorage.getItem('savedResources') || '[]')
    setFavoriteResources(new Set(favorites))
    setSavedResources(new Set(saved))
  }, [])

  const toggleFavorite = (resourceId) => {
    setFavoriteResources(prev => {
      const newSet = new Set(prev)
      if (newSet.has(resourceId)) {
        newSet.delete(resourceId)
      } else {
        newSet.add(resourceId)
      }
      localStorage.setItem('favoriteResources', JSON.stringify([...newSet]))
      return newSet
    })
  }

  const toggleSave = (resourceId) => {
    setSavedResources(prev => {
      const newSet = new Set(prev)
      if (newSet.has(resourceId)) {
        newSet.delete(resourceId)
      } else {
        newSet.add(resourceId)
      }
      localStorage.setItem('savedResources', JSON.stringify([...newSet]))
      return newSet
    })
  }

  const StatsCard = ({ icon, value, label, color = "text-primary-400" }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-effect rounded-xl p-4 text-center"
    >
      <div className={`flex justify-center mb-2 ${color}`}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  )

  const ResourceCard = ({ resource, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className="card group cursor-pointer hover:border-primary-500/50 transition-all duration-300"
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="text-2xl">
              {getTypeIcon(resource.type)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors line-clamp-2">
                {resource.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-primary-400 bg-primary-500/20 px-2 py-1 rounded-full">
                  {resource.type}
                </span>
                {resource.difficulty && (
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    resource.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    resource.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {resource.difficulty}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleFavorite(resource.id)
              }}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Star className={`h-4 w-4 ${
                favoriteResources.has(resource.id) 
                  ? 'text-yellow-400 fill-yellow-400' 
                  : 'text-gray-400'
              }`} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleSave(resource.id)
              }}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Bookmark className={`h-4 w-4 ${
                savedResources.has(resource.id) 
                  ? 'text-primary-400 fill-primary-400' 
                  : 'text-gray-400'
              }`} />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-4 line-clamp-2">
          {resource.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {resource.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
          {resource.tags.length > 3 && (
            <span className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded-md">
              +{resource.tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {resource.category}
          </span>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors text-sm"
          >
            <span>Visit</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button and header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/resources')}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors glass-effect px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={20} />
            Back to all categories
          </button>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="text-5xl">
              {getCategoryIcon(decodedCategory)}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {decodedCategory}
              </h1>
              <p className="text-gray-400 text-lg">
                {categoryResources.length} resources available
              </p>
            </div>
          </div>

          {/* Category Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatsCard
              icon={<Eye className="h-6 w-6" />}
              value={categoryResources.length}
              label="Total Resources"
            />
            <StatsCard
              icon={<Filter className="h-6 w-6" />}
              value={resourceTypes.length - 1}
              label="Resource Types"
              color="text-green-400"
            />
            <StatsCard
              icon={<Star className="h-6 w-6" />}
              value={favoriteResources.size}
              label="Favorites"
              color="text-yellow-400"
            />
            <StatsCard
              icon={<Bookmark className="h-6 w-6" />}
              value={savedResources.size}
              label="Saved"
              color="text-purple-400"
            />
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={`Search resources in ${decodedCategory}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-dark-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Type Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Resource Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500"
              >
                {resourceTypes.map(type => (
                  <option key={type} value={type} className="bg-dark-800">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Difficulty Level
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty} className="bg-dark-800">
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Stats */}
          {(searchTerm || selectedType !== "All" || selectedDifficulty !== "All") && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-between text-sm text-gray-400"
            >
              <span>
                Showing {filteredResources.length} of {categoryResources.length} resources
                {searchTerm && ` for "${searchTerm}"`}
              </span>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedType("All")
                  setSelectedDifficulty("All")
                }}
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <ResourceCard key={resource.id} resource={resource} index={index} />
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No resources found
            </h3>
            <p className="text-gray-400 mb-6">
              {searchTerm || selectedType !== "All" || selectedDifficulty !== "All" 
                ? "Try adjusting your search terms or filters."
                : `No resources available in "${decodedCategory}" category.`
              }
            </p>
            {(searchTerm || selectedType !== "All" || selectedDifficulty !== "All") && (
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedType("All")
                  setSelectedDifficulty("All")
                }}
                className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-500 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}

// Helper function for category icons
function getCategoryIcon(category) {
  const icons = {
    // 🎯 Learning & Media
    "Learning the Skills": "📚",
    "Books": "📖",
    "Courses": "🧑‍🏫",
    "Cheat Sheets": "📄",
    "Tutorials": "📝",
    "Blogs": "✍️",
    "Podcasts": "🎧",
    "YouTube Channels": "🎥",
    "Talks & Conferences": "🎙️",
    "Write-ups": "🧾",
    "Educational": "🏫",

    // ⚔️ Practice & CTF
    "CTF": "🏴‍☠️",
    "CTF Platforms": "⚔️",
    "Challenge Sites": "🎯",
    "Wargames": "🕹️",
    "Vulnerable Web Application": "🧪",
    "Bug Bounty Platforms": "💰",
    "Capture The Flag Writeups": "📜",
    "HacktheBox": "📦",
    "TryHackMe": "🧠",

    // 🕵️ OSINT & Recon
    "OSINT": "🕵️‍♂️",
    "Reconnaissance": "🛰️",
    "Network Scanning / Reconnaissance": "📡",
    "Footprinting": "👣",
    "Metadata Analysis": "🔎",
    "People Search": "🔍",

    // 🧱 Red Team
    "Red Teaming": "🧱",
    "Payloads": "📦",
    "Exploitation": "💣",
    "Command and Control": "🎛️",
    "Post Exploitation": "📬",
    "Privilege Escalation": "📈",
    "Social Engineering": "🧠",
    "Phishing": "🎣",
    "Web Exploitation": "🌐",
    "Shells": "🐚",
    "Custom Payloads": "⚙️",

    // 🛡️ Blue Team
    "Blue Teaming": "🛡️",
    "Forensics": "🔬",
    "Digital Forensics": "🧬",
    "Memory Forensics": "🧠",
    "Incident Response": "🚨",
    "Threat Hunting": "🕵️",
    "Log Analysis": "📂",
    "SIEM Tools": "📊",
    "Malware Analysis": "🦠",
    "Malware Sandbox": "🏖️",
    "Network Monitoring": "🌐",

    // 🔐 Web & App Sec
    "Web Security": "🌐",
    "Mobile Security": "📱",
    "API Security": "🔗",
    "Browser Security": "🧩",
    "XSS": "🧪",
    "SQL Injection": "💉",
    "Authentication": "🔐",
    "Authorization": "🛂",

    // 🧬 Crypto & Reverse
    "Cryptography": "🧮",
    "Cryptanalysis": "📉",
    "Steganography": "🖼️",
    "Reverse Engineering": "🔍",
    "Binary Exploitation": "💾",
    "Decompilers": "🛠️",
    "Disassemblers": "⚙️",
    "Obfuscation": "🌀",

    // 🧰 Tools
    "Linux Tools": "🐧",
    "Windows Tools": "🪟",
    "Automation Tools": "🤖",
    "Proxy Tools": "🌐",
    "Proxychains": "⛓️",
    "Burp Suite": "🍔",
    "Wordlists": "📚",
    "Fuzzing": "🧨",
    "Brute Forcing": "💪",
    "Password Cracking": "🔓",
    "Hash Cracking": "🔑",
    "Sniffing": "👃",
    "MITM Tools": "🧲",
    "Network Tools": "🖧",
    "Docker Security": "🐳",
    "Virtual Machines": "🖥️",

    // ☁️ Cloud & IoT
    "Cloud Security": "☁️",
    "AWS Security": "🛡️",
    "Azure Security": "🔷",
    "GCP Security": "🔶",
    "IoT Security": "📡",
    "ICS/SCADA": "🏭",
    "Hardware Hacking": "🔌",

    // 🛠️ DevSecOps & Engineering
    "DevSecOps": "⚙️",
    "Infrastructure as Code": "📐",
    "CI/CD Security": "🔄",
    "Secure Coding": "💻",
    "Static Analysis": "🧾",
    "Dynamic Analysis": "🌀",

    // 🌐 Privacy & VPN
    "Privacy Tools": "🕶️",
    "VPNs": "🛡️",
    "Tor": "🧅",
    "Anonymity": "👤",
    "Dark Web": "🌑",

    // 🧑‍💼 Career & Community
    "Certifications": "📜",
    "Job Boards": "💼",
    "Communities": "👥",
    "Meetups": "📆",
    "Conferences": "🎟️",
    "Twitter Accounts": "🐦",
    "Discord Servers": "💬",

    // Misc
    "Fun": "🎉",
    "News": "📰",
    "Tools": "🧰",
    "Miscellaneous": "📦",
    "Vulnerable OS": "💽",
    "Linux Penetration Testing OS": "🐧",
    "Exploits": "🚀",
    "Forums": "🗨️",
    "Archived Security Conference Videos": "🗃️",
    "Online Communities": "🌐"
  }

  return icons[category] || "🔗";
}

// Helper function for type icons
function getTypeIcon(type) {
  const icons = {
    "Article": "📄",
    "Video": "🎥",
    "Course": "🎓",
    "Book": "📖",
    "Tool": "🛠️",
    "Website": "🌐",
    "Platform": "⚙️",
    "Cheat Sheet": "📋",
    "Tutorial": "📝",
    "Blog": "✍️",
    "Podcast": "🎧",
    "Conference": "🎙️"
  }
  return icons[type] || "🔗";
}

export default ResourcesByCategory