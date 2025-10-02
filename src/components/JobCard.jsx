import { motion } from 'framer-motion';
import { MapPin, Building, Clock, ExternalLink, DollarSign } from 'lucide-react';

const JobCard = ({ job, index }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const getJobTypeColor = (type) => {
    const colors = {
      'Full-time': 'bg-green-500/20 text-green-400',
      'Part-time': 'bg-blue-500/20 text-blue-400',
      'Contract': 'bg-purple-500/20 text-purple-400',
      'Remote': 'bg-orange-500/20 text-orange-400',
    };
    return colors[type] || 'bg-gray-500/20 text-gray-400';
  };

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
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-200 mb-2">
            {job.title}
          </h3>
          <div className="flex items-center space-x-2 text-gray-400 mb-2">
            <Building className="h-4 w-4" />
            <span className="text-sm">{job.company}</span>
          </div>
        </div>
        
        <div className="flex flex-col items-end space-y-2">
          <span className={`text-xs px-2 py-1 rounded-full ${getJobTypeColor(job.type)}`}>
            {job.type}
          </span>
          {job.salary && (
            <div className="flex items-center space-x-1 text-green-400 text-sm">
              <DollarSign className="h-4 w-4" />
              <span>{job.salary}</span>
            </div>
          )}
        </div>
      </div>

      {/* Location & Date */}
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center space-x-1">
          <MapPin className="h-4 w-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4" />
          <span>Posted {formatDate(job.postedDate)}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {job.description}
      </p>

      {/* Skills */}
      {job.skills && (
        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="text-xs bg-primary-500/20 text-primary-400 px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 4 && (
            <span className="text-xs text-gray-500">
              +{job.skills.length - 4} more
            </span>
          )}
        </div>
      )}

      {/* Apply Button */}
      <a
        href={job.applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full flex items-center justify-center space-x-2"
      >
        <span>Apply Now</span>
        <ExternalLink className="h-4 w-4" />
      </a>
    </motion.div>
  );
};

export default JobCard;
