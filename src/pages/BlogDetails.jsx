"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Eye, Heart, Bookmark } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { getBlogBySlug, globalData } from "../data/globalData"

const BlogDetails = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const [isSaved, setIsSaved] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const blog = getBlogBySlug(slug)
    if (blog) {
      setBlog(blog)
      // Get related blogs from same category
      const related = globalData.blogs
        .filter((b) => b.category === blog.category && b.id !== blog.id)
        .slice(0, 3)
        .map((b) => ({
          id: b.id,
          title: b.title,
          thumbnail: b.thumbnail,
          readTime: b.readTime,
          slug: b.slug,
          excerpt: b.excerpt,
          author: b.author,
          createdAt: b.createdAt,
          likes: b.likes,
          views: b.views
        }))
      setRelatedBlogs(related)

      // Check if blog is saved/liked
      const savedBlogs = JSON.parse(localStorage.getItem('savedBlogs') || '[]')
      const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '[]')
      setIsSaved(savedBlogs.includes(blog.id))
      setIsLiked(likedBlogs.includes(blog.id))
    }
    setLoading(false)
  }, [slug])

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const toggleSave = () => {
    const savedBlogs = JSON.parse(localStorage.getItem('savedBlogs') || '[]')
    if (isSaved) {
      const updated = savedBlogs.filter(id => id !== blog.id)
      localStorage.setItem('savedBlogs', JSON.stringify(updated))
    } else {
      savedBlogs.push(blog.id)
      localStorage.setItem('savedBlogs', JSON.stringify(savedBlogs))
    }
    setIsSaved(!isSaved)
  }

  const toggleLike = () => {
    const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '[]')
    if (isLiked) {
      const updated = likedBlogs.filter(id => id !== blog.id)
      localStorage.setItem('likedBlogs', JSON.stringify(updated))
    } else {
      likedBlogs.push(blog.id)
      localStorage.setItem('likedBlogs', JSON.stringify(likedBlogs))
    }
    setIsLiked(!isLiked)
  }

  if (loading) {
    return <LoadingSkeleton />
  }

  if (!blog) {
    return <NotFound />
  }

  return (
    <div className="min-h-screen bg-dark-900 py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="mb-8"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 glass-effect px-4 py-2 rounded-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blogs</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <ArticleHeader 
          blog={blog} 
          formatDate={formatDate} 
          handleShare={handleShare}
          isSaved={isSaved}
          isLiked={isLiked}
          toggleSave={toggleSave}
          toggleLike={toggleLike}
        />

        {/* Featured Image */}
        <FeaturedImage blog={blog} />

        {/* Article Content */}
        <ArticleContent content={blog.content} />

        {/* Engagement Stats */}
        <EngagementStats blog={blog} isLiked={isLiked} />

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <RelatedBlogsSection relatedBlogs={relatedBlogs} />
        )}
      </div>
    </div>
  )
}

// Sub-components

const LoadingSkeleton = () => (
  <div className="min-h-screen bg-dark-900 py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-8 bg-dark-700 rounded w-1/4 mb-8"></div>
        <div className="h-12 bg-dark-700 rounded mb-4"></div>
        <div className="h-6 bg-dark-700 rounded w-3/4 mb-8"></div>
        <div className="h-64 bg-dark-700 rounded mb-8"></div>
        <div className="space-y-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-4 bg-dark-700 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const NotFound = () => (
  <div className="min-h-screen bg-dark-900 py-20 flex items-center justify-center">
    <div className="text-center">
      <div className="text-6xl mb-4">📝</div>
      <h2 className="text-2xl font-bold text-white mb-2">Blog not found</h2>
      <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
      <Link to="/blogs" className="btn-primary">
        Back to Blogs
      </Link>
    </div>
  </div>
)

const ArticleHeader = ({ blog, formatDate, handleShare, isSaved, isLiked, toggleSave, toggleLike }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="mb-8"
  >
    {/* Category and Tags */}
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <span className="px-3 py-1 bg-primary-600/20 text-primary-400 text-sm rounded-full font-medium">
        {blog.category}
      </span>
      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full font-medium">
        {blog.difficulty}
      </span>
      {blog.tags.slice(0, 3).map((tag) => (
        <span key={tag} className="px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-full">
          {tag}
        </span>
      ))}
    </div>

    {/* Title */}
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
      {blog.title}
    </h1>

    {/* Excerpt */}
    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
      {blog.excerpt}
    </p>

    {/* Meta Information and Actions */}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div className="flex items-center space-x-6 text-gray-400">
        <div className="flex items-center space-x-2">
          <User className="h-5 w-5" />
          <span className="font-medium">{blog.author}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5" />
          <span>{formatDate(blog.createdAt)}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span>{blog.readTime}</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleLike}
          className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
            isLiked 
              ? "text-red-400 bg-red-500/20" 
              : "text-gray-400 hover:text-red-400 hover:bg-red-500/10"
          }`}
        >
          {/* <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-400' : ''}`} />
          <span>{blog.likes + (isLiked ? 1 : 0)}</span> */}
        </button>

        <button
          onClick={toggleSave}
          className={`p-2 rounded-lg transition-colors ${
            isSaved 
              ? "text-primary-400 bg-primary-500/20" 
              : "text-gray-400 hover:text-primary-400 hover:bg-primary-500/10"
          }`}
        >
          <Bookmark className={`h-5 w-5 ${isSaved ? 'fill-primary-400' : ''}`} />
        </button>

        <button
          onClick={handleShare}
          className="flex items-center space-x-2 p-2 text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 rounded-lg transition-colors"
        >
          <Share2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  </motion.div>
)

const FeaturedImage = ({ blog }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="mb-8"
  >
    <div className="relative rounded-2xl overflow-hidden border border-dark-600">
      {/* <img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full h-64 md:h-96 object-cover"
        loading="eager"
      /> */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
    </div>
  </motion.div>
)

const ArticleContent = ({ content }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="prose prose-invert prose-lg max-w-none mb-12"
  >
    <ReactMarkdown
      components={{
        img: ({ src, alt }) => (
          <div className="my-8 rounded-xl overflow-hidden border border-dark-600">
            <img 
              src={src} 
              alt={alt} 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            {alt && <p className="text-center text-sm text-gray-400 mt-3 p-4">{alt}</p>}
          </div>
        ),
        h1: ({ children }) => <h1 className="text-3xl font-bold text-white mb-6 mt-12">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold text-white mb-4 mt-10 border-b border-dark-600 pb-2">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-bold text-white mb-3 mt-8">{children}</h3>,
        p: ({ children }) => <p className="text-gray-300 mb-6 leading-relaxed text-lg">{children}</p>,
        code: ({ children, inline }) => 
          inline ? (
            <code className="bg-dark-700 text-primary-400 px-2 py-1 rounded text-sm font-mono">{children}</code>
          ) : (
            <code className="bg-dark-700 text-gray-300 px-3 py-2 rounded-lg text-sm font-mono block overflow-x-auto">{children}</code>
          ),
        pre: ({ children }) => (
          <pre className="bg-dark-800 p-6 rounded-xl overflow-x-auto mb-6 border border-dark-600">
            {children}
          </pre>
        ),
        ul: ({ children }) => <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 text-lg">{children}</ul>,
        ol: ({ children }) => (
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2 text-lg">{children}</ol>
        ),
        strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 text-gray-300 italic bg-primary-500/10 rounded-r-lg">
            {children}
          </blockquote>
        ),
        a: ({ href, children }) => (
          <a href={href} className="text-primary-400 hover:text-primary-300 underline transition-colors">
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  </motion.div>
)

const EngagementStats = ({ blog, isLiked }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="glass-effect rounded-2xl p-6 mb-12"
  >
    <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-center">
      {/* <div>
        <div className="flex items-center justify-center space-x-2 text-gray-400 mb-2">
          <Eye className="h-5 w-5" />
          <span className="text-sm">Views</span>
        </div>
        <div className="text-2xl font-bold text-white">{blog.views?.toLocaleString() || '0'}</div>
      </div> */}
      {/* <div>
        <div className="flex items-center justify-center space-x-2 text-gray-400 mb-2">
          <Heart className="h-5 w-5" />
          <span className="text-sm">Likes</span>
        </div>
        <div className="text-2xl font-bold text-white">{blog.likes + (isLiked ? 1 : 0)}</div>
      </div> */}
      <div>
        <div className="flex items-center justify-center space-x-2 text-gray-400 mb-2">
          <Clock className="h-5 w-5" />
          <span className="text-sm">Read Time</span>
        </div>
        <div className="text-2xl font-bold text-white">{blog.readTime}</div>
      </div>
      <div>
        <div className="flex items-center justify-center space-x-2 text-gray-400 mb-2">
          <BookOpen className="h-5 w-5" />
          <span className="text-sm">Category</span>
        </div>
        <div className="text-2xl font-bold text-white">{blog.category}</div>
      </div>
    </div>
  </motion.div>
)

const RelatedBlogsSection = ({ relatedBlogs }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
    className="border-t border-dark-600 pt-12"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Related Articles</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {relatedBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  </motion.div>
)

const BlogCard = ({ blog }) => (
  <Link to={`/blogs/${blog.slug}`} className="group">
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500 transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-primary-600/80 text-white text-xs rounded-full font-medium">
            {blog.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">{blog.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{blog.readTime}</span>
            </span>
            <span className="flex items-center space-x-1">
              {/* <Heart className="h-4 w-4" />
              <span>{blog.likes}</span> */}
            </span>
          </div>
          <span className="text-primary-400 font-medium">Read More</span>
        </div>
      </div>
    </motion.div>
  </Link>
)

export default BlogDetails