"use client"

import { motion } from "framer-motion"
import { ExternalLink, Play, FileText, Video, Book } from "lucide-react"

const ResourceCard = ({ resource, index }) => {
  const getResourceIcon = (type) => {
    const icons = {
      youtube: Video,
      blog: FileText,
      paper: Book,
      course: Play,
    }
    return icons[type] || FileText
  }

  const getResourceColor = (type) => {
    const colors = {
      youtube: "text-red-400",
      blog: "text-blue-400",
      paper: "text-green-400",
      course: "text-purple-400",
    }
    return colors[type] || "text-gray-400"
  }

  const Icon = getResourceIcon(resource.type)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="card group"
    >
      {/* Header */}
      <div className="flex items-start space-x-3 mb-4">
      
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-200 mb-1">
            {resource.title}
          </h3>
          <span className="text-sm text-gray-500 capitalize">
            {resource.type} • {resource.source}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{resource.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {resource.tags?.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Action */}
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary w-full flex items-center justify-center space-x-2"
      >
        <span>View Resource</span>
        <ExternalLink className="h-4 w-4" />
      </a>
    </motion.div>
  )
}

export default ResourceCard
