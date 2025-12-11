import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const isCurrent = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-black/80 shadow-lg backdrop-blur-md py-3 border-b border-white/10'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="transition-transform duration-300 hover:scale-105"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              src="/images/logo_hyrloop.webp"
              alt="Hyrloop Logo"
              className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative font-medium text-sm transition-all duration-300 group ${isCurrent(item.path)
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${isCurrent(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}

          <Button
            onClick={() => handleNavigation('/contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all duration-300 rounded-full px-6"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
        <div className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`text-left text-lg font-medium py-2 border-b border-white/5 ${isCurrent(item.path) ? 'text-blue-400' : 'text-gray-300'
                }`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4">
            <Button
              onClick={() => handleNavigation('/contact')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;