// Resources.jsx
"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { globalData } from "../data/globalData"
import ResourceCard from "../components/ResourceCard"

const Resources = () => {
  const navigate = useNavigate()
  
  // Get all unique categories
  const categories = [...new Set(globalData.resources.map(resource => resource.category))]
  
  // Group resources by category
  const resourcesByCategory = categories.reduce((acc, category) => {
    acc[category] = globalData.resources.filter(resource => resource.category === category)
    return acc
  }, {})

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cybersecurity <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Browse our curated collection of cybersecurity resources organized by category.
          </p>
        </motion.div>

     

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="card cursor-pointer hover:bg-white/5 transition-all"
              onClick={() => navigate(`/resources/category/${encodeURIComponent(category)}`)}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{getCategoryIcon(category)}</div>
                  <h2 className="text-xl font-bold text-white">{category}</h2>
                </div>
                <p className="text-gray-400 mb-4">
                  {resourcesByCategory[category].length} resources available
                </p>
                {/* <div className="flex flex-wrap gap-2">
                  {resourcesByCategory[category].slice(0, 3).map(resource => (
                    <span key={resource.id} className="text-xs bg-white/10 rounded-full px-2 py-1">
                      {resource.type}
                    </span>
                  ))}
                  {resourcesByCategory[category].length > 3 && (
                    <span className="text-xs bg-white/10 rounded-full px-2 py-1">
                      +{resourcesByCategory[category].length - 3} more
                    </span>
                  )}
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
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
    "Vulnerable OS" : "💽",
     "Linux Penetration Testing OS": "🐧",
    "Exploits": "🚀",
    "Forums": "🗨️",
    "Archived Security Conference Videos": "🗃️",
    "Online Communities": "🌐"
  }

  return icons[category] || "🔗";
}

export default Resources