import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.svg';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 font-inter">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <img src={logo} alt="Company Logo" className="w-24 md:w-32" />
            <p className="text-sm text-black ml-4 max-w-xs md:max-w-sm">
              Unlock your potential with courses that match your ambitions. Start your learning journey with us today.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-accent transition-all" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-accent transition-all" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-accent transition-all" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/explore" className="text-sm hover:text-accent">Explore</Link></li>
              <li><Link to="/courses" className="text-sm hover:text-accent">Courses</Link></li>
              <li><Link to="/instructors" className="text-sm hover:text-accent">Instructors</Link></li>
              <li><Link to="/offers" className="text-sm hover:text-accent">Offers</Link></li>
              <li><Link to="/about" className="text-sm hover:text-accent">About</Link></li>
            </ul>
          </div>

          {/* Language Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Language</h3>
            <div className="flex space-x-2">
              <button className="bg-secondary text-black py-2 px-4 rounded-sm hover:bg-primary">EN</button>
              <button className="bg-secondary text-black py-2 px-4 rounded-sm hover:bg-primary">FR</button>
              <button className="bg-secondary text-black py-2 px-4 rounded-sm hover:bg-primary">ES</button>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-sm">Email: support@invenio.fr</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
          </div>

          {/* Trusted Logos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Trusted by</h3>
            <div className="flex flex-wrap gap-6">
              <img src="/maisontpe.webp" alt="Microsoft" className="h-10 md:h-12" />
              <img src="/github.png" alt="Github" className="h-10 md:h-12" />
              <img src="/taki.svg" alt="Taki" className="h-10 md:h-12" />
              <img src="/paypal.png" alt="PayPal" className="h-10 md:h-12" />
              <img src="/facebook.png" alt="Facebook" className="h-10 md:h-12" />
              <img src="/adobe.png" alt="Adobe" className="h-10 md:h-12" />
              <img src="/gomycode.svg" alt="Go My Code" className="h-10 md:h-12" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-black pt-4 text-center">
          <p className="text-sm text-black">
            &copy; {new Date().getFullYear()} Invenio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
