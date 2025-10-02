// EventCard.jsx
"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Users, ExternalLink, Tag } from "lucide-react"

const EventCard = ({ event, index = 0 }) => {
  // 'event' object is passed as a prop
  const formatTimeRange = (start, end) => {
    return `${start} - ${end}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="card group hover:scale-[1.02] transition-all duration-300"
    >
      {/* Content */}
      <div className="flex-1 p-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
          {event.title}
        </h3>

        {/* Event Details */}
        <div className="space-y-2 mb-4 text-sm">
          {/* Date */}
          <div className="flex items-center text-gray-400">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{event.startDate }</span>
          </div>

          {/* Time */}
          <div className="flex items-center text-gray-400">
            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{event.time}</span>
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-400">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{event.location.venue}</span>
          </div>

          {/* Attendees */}
          {/* <div className="flex items-center text-gray-400">
            <Users className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{event.attending} attending</span>
          </div> */}
        </div>

        {/* Sessions */}
        {event.sessions && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Sessions:</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              {event.sessions.map((session, i) => (
                <li key={i} className="flex">
                  <span className="mr-2">•</span>
                  <span>
                    {session.title} {session.speaker && `by ${session.speaker}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
              >
                <Tag className="h-2 w-2 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Button */}
        {/* Conditional rendering for the registration link is a good idea */}
        {event.registrationLink && ( // Only show if registrationLink exists
          <div className="pt-4 border-t border-gray-800 ">
            <a
              href={event.registrationLink} // <--- Corrected: Access from the 'event' prop
              className="btn-primary    text-center text-sm w-full flex items-center justify-center gap-2"
              target="_blank" // Good practice for external links
              rel="noopener noreferrer" // Security best practice
            >
              Register
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default EventCard
