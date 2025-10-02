// ResourcesByCategory.jsx
"use client"

import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { globalData } from "../data/globalData"
import ResourceCard from "../components/ResourceCard"

const ResourcesByCategory = () => {
  const { categoryName } = useParams()
  const navigate = useNavigate()
  
  // Decode the category name from URL
  const decodedCategory = decodeURIComponent(categoryName)
  
  // Filter resources by category
  const categoryResources = globalData.resources.filter(
    resource => resource.category === decodedCategory
  )

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button and header */}
        <div className="mb-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to all categories
          </button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="text-4xl">{getCategoryIcon(decodedCategory)}</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {decodedCategory}
              </h1>
              <p className="text-gray-400">
                {categoryResources.length} resources available
              </p>
            </div>
          </motion.div>
        </div>

        {/* Resources grid */}
        {categoryResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ResourceCard resource={resource} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No resources found in this category
            </h3>
            <p className="text-gray-400">
              We couldn't find any resources for "{decodedCategory}"
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// Reuse the same icon function
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

export default ResourcesByCategory