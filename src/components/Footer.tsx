
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-nasaruni rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Nasaruni CBO</h3>
                <p className="text-gray-400 text-sm">Empowering Girls Through Education</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Dedicated to rescuing, mentoring, and providing holistic education to vulnerable girls 
              in rural Kenya, helping them build brighter futures through education, skills, and hope.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-nasaruni-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nasaruni-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nasaruni-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/impact" className="text-gray-400 hover:text-white transition-colors">Our Impact</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/get-involved" className="text-gray-400 hover:text-white transition-colors">Get Involved</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@nasarunicbo.org</li>
              <li>Phone: +254 XXX XXX XXX</li>
              <li>Location: Narok County, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Nasaruni Community Based Organization. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with ❤️ for the girls of Kenya
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
