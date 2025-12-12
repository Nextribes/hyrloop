import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src="/images/logo_hyrloop.webp" alt="Hyrloop" className="h-10 opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering businesses with strategic HR solutions and cutting-edge operational frameworks for sustainable growth.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                'HR Consulting',
                'Staffing Solutions',
                'GCC Setup',
                'Executive Search',
                'Employee Training'
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-500 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  F 606, Jaipuria Sunrise Greens<br />
                  Indirapuram, Ghaziabad, UP, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-gray-400">+91 95556 24372</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-gray-400">info@hyrloop.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Hyrloop. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>

          {/* Powered by Nextribes */}
          <div className="flex justify-center items-center pt-4 border-t border-white/5">
            <a
              href="https://www.nextribes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-400 transition-colors group"
            >
              <span className="text-xs">Powered by</span>
              <div className="bg-white px-2 py-1 rounded">
                <img
                  src="https://nextribes.com/images/logo2.png"
                  alt="Nextribes"
                  className="h-4 opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;