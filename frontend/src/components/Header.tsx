import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Search, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    <>


      {/* Main Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src="/images/logo.png" alt="Royal Cars Logo" className="w-12 h-12" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ROYAL CARS</h1>
                <p className="text-sm text-gray-600">RENT CAR TEMPLATE</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Utility Icons */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <User className="w-5 h-5 text-gray-700 group-hover:text-primary-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">LOGIN</span>
                  <span className="text-xs text-gray-500">Account</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <Search className="w-5 h-5 text-gray-700 group-hover:text-primary-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">SEARCH</span>
                  <span className="text-xs text-gray-500">Find Cars</span>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
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
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/cars"
                  className="btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Araç Kirala
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
