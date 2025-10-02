"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { getBlogBySlug, globalData } from "../data/globalData"

const BlogDetails = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [relatedBlogs, setRelatedBlogs] = useState([])

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
          excerpt: b.excerpt
        }))
      setRelatedBlogs(related)
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
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  if (loading) {
    return <LoadingSkeleton />
  }

  if (!blog) {
    return <NotFound />
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Link
            to="/blogs"
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
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
        />

        {/* Article Content */}
        <ArticleContent content={blog.content} />

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <RelatedBlogsSection relatedBlogs={relatedBlogs} />
        )}
      </div>
    </div>
  )
}

// Sub-components for better organization

const LoadingSkeleton = () => (
  <div className="min-h-screen py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-8 bg-dark-700 rounded w-1/4 mb-8"></div>
        <div className="h-64 bg-dark-700 rounded mb-8"></div>
        <div className="h-12 bg-dark-700 rounded mb-4"></div>
        <div className="h-4 bg-dark-700 rounded mb-8"></div>
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
  <div className="min-h-screen py-20 flex items-center justify-center">
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

const ArticleHeader = ({ blog, formatDate, handleShare }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="mb-8"
  >
    <div className="flex flex-wrap gap-2 mb-4">
      {blog.tags.map((tag) => (
        <span key={tag} className="px-3 py-1 bg-primary-600/20 text-primary-400 text-sm rounded-full">
          {tag}
        </span>
      ))}
    </div>

    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{blog.title}</h1>

    <div className="flex flex-wrap items-center justify-between gap-4 text-gray-400">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4" />
          <span>{blog.author}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(blog.createdAt)}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4" />
          <span>{blog.readTime}</span>
        </div>
      </div>

      <button
        onClick={handleShare}
        className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
      >
        <Share2 className="h-4 w-4" />
        <span>Share</span>
      </button>
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
          <div className="my-6 rounded-lg overflow-hidden border border-dark-600">
            <img 
              src={src} 
              alt={alt} 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            {alt && <p className="text-center text-sm text-gray-400 mt-2">{alt}</p>}
          </div>
        ),
        h1: ({ children }) => <h1 className="text-3xl font-bold text-white mb-6">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold text-white mb-4 mt-8">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-bold text-white mb-3 mt-6">{children}</h3>,
        p: ({ children }) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
        code: ({ children }) => (
          <code className="bg-dark-700 text-primary-400 px-2 py-1 rounded text-sm">{children}</code>
        ),
        pre: ({ children }) => <pre className="bg-dark-800 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
        ul: ({ children }) => <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">{children}</ul>,
        ol: ({ children }) => (
          <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">{children}</ol>
        ),
        strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
      }}
    >
      {content}
    </ReactMarkdown>
  </motion.div>
)

const RelatedBlogsSection = ({ relatedBlogs }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="border-t border-white/10 pt-12"
  >
    <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  </motion.div>
)

const BlogCard = ({ blog }) => (
  <Link to={`/blogs/${blog.slug}`} className="group">
    <div className="bg-dark-800 rounded-lg overflow-hidden border border-dark-700 hover:border-primary-500 transition-all duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {blog.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
        <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
          <span>{blog.readTime}</span>
          <span className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
          </span>
        </div>
      </div>
    </div>
  </Link>
)

export default BlogDetails