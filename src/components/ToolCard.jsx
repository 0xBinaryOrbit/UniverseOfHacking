"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Star, Download } from "lucide-react"

const ToolCard = ({ tool, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="card group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
            {tool.icon ? (
              <img src={tool.icon || "/placeholder.svg"} alt={tool.name} className="w-8 h-8" />
            ) : (
              <span className="text-white font-bold text-lg">{tool.name.charAt(0)}</span>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-200">
              {tool.name}
            </h3>
            <span className="text-sm text-primary-400 bg-primary-500/20 px-2 py-1 rounded-full">{tool.category}</span>
          </div>
        </div>

        {tool.rating && (
          <div className="flex items-center space-x-1 text-yellow-400">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm">{tool.rating}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{tool.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tool.tags?.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex space-x-2">
          {tool.url && (
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors duration-200"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm">Visit</span>
            </a>
          )}
          {tool.githubLink && (
            <a
              href={tool.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm">GitHub</span>
            </a>
          )}
        </div>

        {tool.downloads && (
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <Download className="h-4 w-4" />
            <span>{tool.downloads}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ToolCard
