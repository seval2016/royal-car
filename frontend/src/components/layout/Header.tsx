import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'VEHICLES', href: '/cars' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'DRIVERS', href: '/drivers' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-[#2d2d2d]' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" alt="Royal Cars Logo" className="h-12" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-white border-b-2 border-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Utility Icons */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <User className="w-5 h-5 text-white group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">LOGIN</span>
                  <span className="text-xs text-white/70">Account</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Search className="w-5 h-5 text-white group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">SEARCH</span>
                  <span className="text-xs text-white/70">Find Cars</span>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-white hover:text-white hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
