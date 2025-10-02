"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"
import { globalData } from "../data/globalData"

const NewsTicker = () => {
  const [news, setNews] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Replace mockNews with:
  const newsItems = globalData.newsTicker

  useEffect(() => {
    setNews(newsItems)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  if (news.length === 0) return null

  return (
    <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-lg p-3 mb-8">
      <div className="flex items-center space-x-3">
        <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center space-x-2">
            <span className="text-red-400 font-semibold text-sm">BREAKING:</span>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-white text-sm"
            >
              {news[currentIndex]}
            </motion.div>
          </div>
        </div>
        <div className="flex space-x-1">
          {news.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-red-400" : "bg-red-400/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsTicker
