
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-icsn-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Iscon Computer Solution Nepal</h3>
            <p className="text-gray-300 mb-3">Empowering Rural Education with Affordable IT Solutions</p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <MapPin size={18} />
              <span>Itahari-20, Sunsari, Nepal</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <Phone size={18} />
              <span>+977 9800000000</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail size={18} />
              <span>info@icsnepal.com</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white">Gallery</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-white">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-gray-300">Subscribe to our newsletter for updates</p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full text-gray-800 rounded-l focus:outline-none"
              />
              <button className="bg-icsn-primary hover:bg-icsn-secondary px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Iscon Computer Solution Nepal. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/privacy-policy" className="hover:text-white mx-2">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link to="/terms-of-service" className="hover:text-white mx-2">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
