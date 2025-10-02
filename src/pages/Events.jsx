"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Calendar, Users, Star, Clock, Globe } from "lucide-react"
import EventCard from "../components/EventCard"
import { globalData, getUpcomingEvents, getFeaturedEvents, searchEvents } from "../data/globalData"

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [selectedFormat, setSelectedFormat] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [priceFilter, setPriceFilter] = useState("")
  const [timeFilter, setTimeFilter] = useState("all")
  const [sort, setSort] = useState("date")
  const [showFilters, setShowFilters] = useState(false)

  // Safely get unique values for filters with fallbacks
  const eventTypes = useMemo(() => {
    try {
      return [...new Set((globalData?.events || []).map(event => event?.type).filter(Boolean))]
    } catch {
      return []
    }
  }, [])

  const formats = useMemo(() => {
    try {
      return [...new Set((globalData?.events || []).map(event => event?.format).filter(Boolean))]
    } catch {
      return []
    }
  }, [])

  const locations = useMemo(() => {
    try {
      return [...new Set((globalData?.events || []).map(event => event?.location?.city).filter(Boolean))]
    } catch {
      return []
    }
  }, [])

  // Safely filter and sort events
  const filteredEvents = useMemo(() => {
    try {
      let events = [...(globalData?.events || [])]

      // Time filter
      const now = new Date()
      switch (timeFilter) {
        case "upcoming":
          events = events.filter(event => new Date(event?.startDate || 0) > now)
          break
        case "past":
          events = events.filter(event => new Date(event?.endDate || 0) < now)
          break
        case "ongoing":
          events = events.filter(
            event => new Date(event?.startDate || 0) <= now && new Date(event?.endDate || 0) >= now
          )
          break
        default:
          break
      }

      // Apply other filters
      if (selectedType) {
        events = events.filter(event => event?.type === selectedType)
      }

      if (selectedFormat) {
        events = events.filter(event => event?.format === selectedFormat)
      }

      if (selectedLocation) {
        events = events.filter(event => event?.location?.city === selectedLocation)
      }

      if (priceFilter) {
        if (priceFilter === "free") {
          events = events.filter(event => event?.price?.type === "Free")
        } else if (priceFilter === "paid") {
          events = events.filter(event => event?.price?.type === "Paid")
        }
      }

      // Apply search
      if (searchTerm) {
        const searchResults = searchEvents(searchTerm) || []
        events = searchResults.filter(event => {
          const matchesType = !selectedType || event?.type === selectedType
          const matchesFormat = !selectedFormat || event?.format === selectedFormat
          const matchesLocation = !selectedLocation || event?.location?.city === selectedLocation
          const matchesPrice =
            !priceFilter ||
            (priceFilter === "free" && event?.price?.type === "Free") ||
            (priceFilter === "paid" && event?.price?.type === "Paid")

          return matchesType && matchesFormat && matchesLocation && matchesPrice
        })
      }

      // Sort events with fallbacks
      switch (sort) {
        case "title":
          return [...events].sort((a, b) => (a?.title || "").localeCompare(b?.title || ""))
        case "attendees":
          return [...events].sort(
            (a, b) => (b?.expectedAttendees || 0) - (a?.expectedAttendees || 0)
          )
        case "featured":
          return [...events].sort((a, b) => (b?.featured ? 1 : 0) - (a?.featured ? 1 : 0))
        default:
          return [...events].sort(
            (a, b) => new Date(a?.startDate || 0) - new Date(b?.startDate || 0)
          )
      }
    } catch (error) {
      console.error("Error filtering events:", error)
      return []
    }
  }, [searchTerm, selectedType, selectedFormat, selectedLocation, priceFilter, timeFilter, sort])

  // Safely get featured and upcoming events
  const featuredEvents = useMemo(() => {
    try {
      return getFeaturedEvents() || []
    } catch {
      return []
    }
  }, [])

  const upcomingEvents = useMemo(() => {
    try {
      return getUpcomingEvents() || []
    } catch {
      return []
    }
  }, [])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedType("")
    setSelectedFormat("")
    setSelectedLocation("")
    setPriceFilter("")
    setTimeFilter("all")
    setSort("date")
  }

  const hasActiveFilters =
    searchTerm ||
    selectedType ||
    selectedFormat ||
    selectedLocation ||
    priceFilter ||
    timeFilter !== "all" ||
    sort !== "date"

  // Safely count online events
  const onlineEventCount = useMemo(() => {
    try {
      return (globalData?.events || []).filter(e => e?.format === "Online").length
    } catch {
      return 0
    }
  }, [])

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Cybersecurity <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover and attend the best cybersecurity conferences, meetups, workshops, and webinars from around the
            world.
          </p>
        </motion.div>

        {/* Featured Events */}
        {featuredEvents.length > 0 && !hasActiveFilters && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Star className="h-6 w-6 text-yellow-400 mr-2" />
                Featured Events
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredEvents.slice(0, 3).map((event, index) => (
                <EventCard 
                  key={event?.id || index} 
                  event={event} 
                  index={index} 
                  variant="featured" 
                />
              ))}
            </div>
          </motion.section>
        )}

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card mb-8"
        >
          {/* Main Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events, organizers, locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-3 rounded-lg border transition-colors flex items-center ${
                showFilters
                  ? "bg-primary-500 border-primary-500 text-white"
                  : "bg-dark-800 border-gray-700 text-gray-300 hover:border-primary-500"
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>

          {/* Quick Time Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { key: "all", label: "All Events" },
              { key: "upcoming", label: "Upcoming" },
              { key: "ongoing", label: "Live Now" },
              { key: "past", label: "Past Events" },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setTimeFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  timeFilter === filter.key
                    ? "bg-primary-600 text-white"
                    : "glass-effect text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 pt-4 border-t border-gray-700"
            >
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 bg-dark-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
              >
                <option value="">All Types</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="px-4 py-2 bg-dark-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
              >
                <option value="">All Formats</option>
                {formats.map((format) => (
                  <option key={format} value={format}>
                    {format}
                  </option>
                ))}
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 bg-dark-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>

              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-2 bg-dark-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
              >
                <option value="">All Prices</option>
                <option value="free">Free Events</option>
                <option value="paid">Paid Events</option>
              </select>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-4 py-2 bg-dark-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
              >
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
                <option value="attendees">Sort by Attendees</option>
                <option value="featured">Featured First</option>
              </select>

              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Clear All
              </button>
            </motion.div>
          )}

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
              <div className="flex flex-wrap gap-2">
                {searchTerm && (
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
                    Search: "{searchTerm}"
                  </span>
                )}
                {selectedType && (
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                    Type: {selectedType}
                  </span>
                )}
                {selectedFormat && (
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                    Format: {selectedFormat}
                  </span>
                )}
                {selectedLocation && (
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                    Location: {selectedLocation}
                  </span>
                )}
                {priceFilter && (
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30">
                    Price: {priceFilter === "free" ? "Free" : "Paid"}
                  </span>
                )}
                {timeFilter !== "all" && (
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                    Time: {timeFilter}
                  </span>
                )}
              </div>
              <button onClick={clearFilters} className="text-gray-400 hover:text-white text-sm transition-colors">
                Clear All Filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <p className="text-gray-400">
              Showing <span className="text-white font-medium">{filteredEvents.length}</span> of{" "}
              <span className="text-white font-medium">{(globalData?.events || []).length}</span> events
            </p>
            {hasActiveFilters && (
              <span className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded text-sm">Filtered</span>
            )}
          </div>

          {/* Quick Stats */}
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{upcomingEvents.length} upcoming</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1" />
              <span>{featuredEvents.length} featured</span>
            </div>
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1" />
              <span>{onlineEventCount} online</span>
            </div>
          </div>
        </motion.div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event, index) => (
              <EventCard 
                key={event?.id || index} 
                event={event} 
                index={index} 
              />
            ))}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-12 w-12 text-gray-600" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">No events found</h3>
            <p className="text-gray-400 mb-6">
              {hasActiveFilters
                ? "Try adjusting your search criteria or filters to find more events."
                : "No events match your current search. Try different keywords."}
            </p>
            <div className="flex gap-4 justify-center">
              <button onClick={clearFilters} className="btn-primary">
                Clear Filters
              </button>
              <button onClick={() => setSearchTerm("")} className="btn-secondary">
                Clear Search
              </button>
            </div>
          </motion.div>
        )}

        {/* Event Categories */}
        {eventTypes.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {eventTypes.map((type, index) => {
                const typeEvents = (globalData?.events || []).filter(event => event?.type === type)
                const upcomingCount = typeEvents.filter(event => new Date(event?.startDate || 0) > new Date()).length
                const totalAttendees = typeEvents.reduce((sum, event) => sum + (event?.expectedAttendees || 0), 0)

                return (
                  <motion.button
                    key={type}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      setSelectedType(type)
                      setShowFilters(true)
                    }}
                    className={`p-4 rounded-xl border transition-all duration-300 text-left group hover:scale-105 ${
                      selectedType === type
                        ? "bg-primary-500/20 border-primary-500 text-primary-300"
                        : "bg-dark-800 border-gray-700 text-gray-300 hover:border-primary-500/50 hover:bg-dark-700"
                    }`}
                  >
                    <div className="font-semibold text-lg mb-2 group-hover:text-white transition-colors">
                      {type}
                    </div>
                    <div className="text-sm opacity-75 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>{typeEvents.length} total</span>
                        <Calendar className="h-3 w-3" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>{upcomingCount} upcoming</span>
                        <Clock className="h-3 w-3" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>{totalAttendees.toLocaleString()} attendees</span>
                        <Users className="h-3 w-3" />
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}

      
      </div>
    </div>
  )
}

export default Events
