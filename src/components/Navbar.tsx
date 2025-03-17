
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-icsn-primary font-bold text-2xl">ICSN</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-icsn-primary px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-icsn-primary px-3 py-2 text-sm font-medium">
              About Us
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-icsn-primary px-3 py-2 text-sm font-medium">
              Services
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-icsn-primary px-3 py-2 text-sm font-medium">
              Gallery
            </Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-icsn-primary px-3 py-2 text-sm font-medium">
              Testimonials
            </Link>
            <Link to="/contact">
              <Button className="bg-icsn-primary hover:bg-icsn-secondary text-white font-medium">
                Contact Us
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700 hover:text-icsn-primary focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-icsn-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-icsn-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-icsn-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-icsn-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/testimonials" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-icsn-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-icsn-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
