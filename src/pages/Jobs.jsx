"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Filter, MapPin, Clock } from "lucide-react"
import JobCard from "../components/JobCard"
import { globalData, searchJobs } from "../data/globalData"

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [loading, setLoading] = useState(true)

  // Replace mockJobs with:
  const allJobs = globalData.jobs

  const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Remote"]
  const locations = ["All", "Remote", "San Francisco, CA", "New York, NY", "Austin, TX", "Washington, DC"]

  useEffect(() => {
    setJobs(allJobs)
    setFilteredJobs(allJobs)
    setLoading(false)
  }, [])

  useEffect(() => {
    let filtered = jobs

    if (searchTerm) {
      filtered = searchJobs(searchTerm)
    }

    if (selectedType && selectedType !== "All") {
      if (selectedType === "Remote") {
        filtered = filtered.filter((job) => job.remote)
      } else {
        filtered = filtered.filter((job) => job.type === selectedType)
      }
    }

    if (selectedLocation && selectedLocation !== "All") {
      filtered = filtered.filter((job) => job.location === selectedLocation)
    }

    setFilteredJobs(filtered)
  }, [searchTerm, selectedType, selectedLocation, jobs])

  const LoadingSkeleton = () => (
    <div className="space-y-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="card animate-pulse">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="h-6 bg-dark-700 rounded w-48 mb-2"></div>
              <div className="h-4 bg-dark-700 rounded w-32"></div>
            </div>
            <div className="h-6 bg-dark-700 rounded w-20"></div>
          </div>
          <div className="h-4 bg-dark-700 rounded mb-4"></div>
          <div className="flex space-x-2 mb-4">
            {[...Array(3)].map((_, j) => (
              <div key={j} className="h-6 bg-dark-700 rounded w-16"></div>
            ))}
          </div>
          <div className="h-10 bg-dark-700 rounded"></div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cybersecurity <span className="gradient-text">Jobs</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find your next cybersecurity role with top companies and organizations worldwide.
          </p>
        </motion.div>

        {/* Search and Filters - Keep these visible even when no jobs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="pl-10 pr-8 py-3 glass-effect rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none min-w-[140px]"
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type} className="bg-dark-800">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
             
            </div>
          </div>
        </motion.div>

        {/* Content Area */}
        {loading ? (
          <LoadingSkeleton />
        ) : filteredJobs.length > 0 ? (
          <>
            {/* Job Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {[
                { label: "Total Jobs", value: filteredJobs.length },
                { label: "Remote Jobs", value: filteredJobs.filter((job) => job.remote).length },
                { label: "Full-time", value: filteredJobs.filter((job) => job.type === "Full-time").length },
                { label: "Contract", value: filteredJobs.filter((job) => job.type === "Contract").length },
              ].map((stat, index) => (
                <div key={stat.label} className="card text-center">
                  <div className="text-2xl font-bold text-primary-400 mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Jobs List */}
            <div className="space-y-8">
              {filteredJobs.map((job, index) => (
                <JobCard key={job._id} job={job} index={index} />
              ))}
            </div>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20"
          >
            <div className="card bg-dark-800/50 p-12 max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-primary-500/20 p-4 rounded-full">
                  <Clock className="h-12 w-12 text-primary-400" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Coming Soon!</h2>
              <p className="text-gray-400 mb-6 text-lg">
                We're currently working on bringing you the best cybersecurity job opportunities.
                Check back soon or subscribe to be notified when new positions are available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
 
              </div>
            </div>
          </motion.div>
        )}

       
      </div>
    </div>
  )
}

export default Jobs