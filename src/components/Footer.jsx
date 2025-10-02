import { Link } from 'react-router-dom';
import { Shield, Github, MessageCircle, Send, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', path: '/' },
      { name: 'Learn', path: '/learn' },
      { name: 'Tools', path: '/tools' },
      { name: 'Blogs', path: '/blogs' },
    ],
    'Resources': [
      { name: 'CTF Events', path: '/ctf' },
      { name: 'Job Board', path: '/jobs' },
      { name: 'News', path: '/news' },
      { name: 'Resources', path: '/resources' },
    ],
    'Community': [
      // { name: 'Discord', href: 'https://discord.gg/universeofhacking', external: true },
      { name: 'Telegram', href: 'https://t.me/universeofhacking', external: true },
      // { name: 'GitHub', href: 'https://github.com/universeofhacking', external: true },
      { name: 'Twitter', href: 'https://twitter.com/universeofhacking', external: true },
    ],
  };

  const socialIcons = {
    // Discord: MessageCircle,
    Telegram: Send,
    // GitHub: Github,
    Twitter: Twitter,
  };

  return (
    <footer className="bg-dark-800/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold gradient-text">Universe of Hacking</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Your gateway to cybersecurity knowledge, tools, and community. Learn, practice, and excel in the world of ethical hacking.
            </p>
            <div className="flex space-x-4">
              {Object.entries(socialIcons).map(([name, Icon]) => (
                <motion.a
                  key={name}
                  href={footerLinks.Community.find(link => link.name === name)?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).slice(0, 2).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

         
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Universe of Hacking. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
