"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Calendar, User, Clock, Eye, Heart, ArrowRight, Tag, Star } from "lucide-react"

const BlogCard = ({ blog, index = 0, showAuthor = true, showStats = true, variant = "default" }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // const getDifficultyColor = (difficulty) => {
  //   const colors = {
  //     Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  //     Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  //     Advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  //   }
  //   return colors[difficulty] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
  // }

  const cardVariants = {
    default: "card group hover:scale-105 transition-all duration-300",
    compact: "card group hover:scale-102 transition-all duration-300",
    featured:
      "card group hover:scale-105 transition-all duration-300 border-primary-500/30 bg-gradient-to-br from-primary-500/5 to-accent-500/5",
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={cardVariants[variant]}
    >
      {/* Featured Badge */}
      {blog.featured && variant !== "compact" && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center px-2 py-1 bg-primary-500 text-white rounded-full text-xs font-medium">
            <Star className="h-3 w-3 mr-1" />
            Featured
          </div>
        </div>
      )}

   

      {/* Content */}
      <div className="flex-1">
        {/* Title */}
        <Link to={`/blogs/${blog.slug || blog.id}`}>
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-200 line-clamp-2 leading-tight">
            {blog.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{blog.excerpt}</p>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full hover:bg-gray-700 transition-colors"
              >
                <Tag className="h-2 w-2 mr-1" />
                {tag}
              </span>
            ))}
            {blog.tags.length > 3 && (
              <span className="text-xs text-gray-500 px-2 py-1">+{blog.tags.length - 3} more</span>
            )}
          </div>
        )}

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            {showAuthor && (
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
            )}
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(blog.createdAt)}</span>
            </div>
          </div>
        </div>

       

        {/* Read More Button */}
        <Link
          to={`/blogs/${blog.slug || blog.id}`}
          className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 group/link"
        >
          <span className="font-medium">Read More</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  )
}

export default BlogCard
