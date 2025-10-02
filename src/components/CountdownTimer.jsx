import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const CountdownTimer = ({ targetDate, eventName, eventUrl }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card bg-gradient-to-br from-primary-600/20 to-accent-600/20 border-primary-500/30"
    >
      <div className="flex items-center space-x-2 mb-4">
        <Clock className="h-5 w-5 text-primary-400" />
        <h3 className="text-lg font-semibold text-white">Next Event</h3>
      </div>
      
      <h4 className="text-xl font-bold gradient-text mb-6">{eventName}</h4>
      
      <div className="grid grid-cols-4 gap-4 mb-6">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="bg-dark-700/50 rounded-lg p-3 mb-2">
              <span className="text-2xl font-bold text-white font-mono">
                {unit.value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-sm text-gray-400">{unit.label}</span>
          </motion.div>
        ))}
      </div>
      
      {eventUrl && (
        <a
          href={eventUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center"
        >
          Join Event
        </a>
      )}
    </motion.div>
  );
};

export default CountdownTimer;
