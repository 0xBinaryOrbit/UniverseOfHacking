"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, Star, FolderOpen, BookOpen, Users } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { globalData } from "../data/globalData"

const Resources = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [favoriteCategories, setFavoriteCategories] = useState(new Set())
  
  // Get all resources
  const allResources = globalData.resources

  // Get all unique categories with counts and stats
  const categories = useMemo(() => {
    const categoryStats = allResources.reduce((acc, resource) => {
      if (!acc[resource.category]) {
        acc[resource.category] = {
          count: 0,
          types: new Set(),
          difficulties: new Set()
        }
      }
      acc[resource.category].count++
      if (resource.type) acc[resource.category].types.add(resource.type)
      if (resource.difficulty) acc[resource.category].difficulties.add(resource.difficulty)
      return acc
    }, {})
    
    return Object.entries(categoryStats)
      .map(([name, stats]) => ({ 
        name, 
        count: stats.count,
        types: Array.from(stats.types),
        difficulties: Array.from(stats.difficulties)
      }))
      .sort((a, b) => b.count - a.count)
  }, [allResources])

  // Filter categories by search
  const filteredCategories = useMemo(() => {
    return categories.filter(category => 
      !searchTerm || 
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.types.some(type => type.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  }, [categories, searchTerm])

  useEffect(() => {
    // Load favorite categories from localStorage
    const favorites = JSON.parse(localStorage.getItem('favoriteCategories') || '[]')
    setFavoriteCategories(new Set(favorites))
  }, [])

  const toggleFavoriteCategory = (categoryName) => {
    setFavoriteCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName)
      } else {
        newSet.add(categoryName)
      }
      localStorage.setItem('favoriteCategories', JSON.stringify([...newSet]))
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

  const CategoryCard = ({ category, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="card group cursor-pointer hover:border-primary-500/50 transition-all duration-300"
      onClick={() => navigate(`/resources/category/${encodeURIComponent(category.name)}`)}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
              {getCategoryIcon(category.name)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-400 mt-1">
                {category.count} resources
              </p>
            </div>
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleFavoriteCategory(category.name)
            }}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
          >
            <Star className={`h-5 w-5 ${
              favoriteCategories.has(category.name) 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-400'
            }`} />
          </button>
        </div>

        {/* Types & Difficulties */}
        <div className="space-y-3">
          {/* Resource Types */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Resource Types</h4>
            <div className="flex flex-wrap gap-2">
              {category.types.slice(0, 4).map((type, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-md"
                >
                  {type}
                </span>
              ))}
              {category.types.length > 4 && (
                <span className="px-2 py-1 bg-dark-700 text-gray-400 text-xs rounded-md">
                  +{category.types.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Difficulty Levels */}
          {category.difficulties.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Difficulty Levels</h4>
              <div className="flex flex-wrap gap-2">
                {category.difficulties.map((difficulty, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 text-xs rounded-md ${
                      difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {difficulty}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* View Resources Button */}
        <div className="mt-6 pt-4 border-t border-dark-600">
          <button className="w-full py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors font-medium">
            View All Resources →
          </button>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Cybersecurity <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Browse our curated collection of cybersecurity resources organized by category.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <StatsCard
              icon={<FolderOpen className="h-6 w-6" />}
              value={categories.length}
              label="Categories"
            />
            <StatsCard
              icon={<BookOpen className="h-6 w-6" />}
              value={allResources.length}
              label="Total Resources"
              color="text-green-400"
            />
            <StatsCard
              icon={<Users className="h-6 w-6" />}
              value={new Set(allResources.map(r => r.type)).size}
              label="Resource Types"
              color="text-yellow-400"
            />
            <StatsCard
              icon={<Star className="h-6 w-6" />}
              value={favoriteCategories.size}
              label="Favorites"
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
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-dark-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
            />
          </div>

          {/* Quick Stats */}
          {searchTerm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-between text-sm text-gray-400"
            >
              <span>
                Found {filteredCategories.length} categories for "{searchTerm}"
              </span>
              <button
                onClick={() => setSearchTerm("")}
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Clear search
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <CategoryCard 
              key={category.name} 
              category={category} 
              index={index} 
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No categories found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search terms.</p>
            <button
              onClick={() => setSearchTerm("")}
              className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-500 transition-colors"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

// Enhanced icon mapping
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

export default Resources