import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SOCIAL_LINKS, ORG_INFO } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-[#252B2B] text-white py-12 px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">About {ORG_INFO.shortName}</h3>
            <p className="text-white/95 text-base leading-relaxed">
              {ORG_INFO.name} empowers youth through collaborative networks, innovative research, and sustainable development services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link to="/" className="text-white/95 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-1 underline-offset-2 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/95 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-1 underline-offset-2 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-white/95 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-1 underline-offset-2 hover:underline">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="text-white/95 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-1 underline-offset-2 hover:underline">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/95 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-1 underline-offset-2 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-5 text-white">Connect With Us</h3>
            <address className="text-white text-base md:text-lg mb-6 not-italic space-y-3 leading-relaxed">
              <p className="flex items-center gap-2">
                <span className="text-xl">📍</span>
                <span className="text-white/95">{CONTACT_INFO.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl">📧</span>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="text-white/95 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-1 underline-offset-2 hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl">📞</span>
                <a 
                  href={`tel:${CONTACT_INFO.phone}`} 
                  className="text-white/95 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-1 underline-offset-2 hover:underline"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </address>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="inline-flex items-center justify-center w-12 h-12 bg-white/15 hover:bg-white/25 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white shadow-lg hover:shadow-xl hover:scale-110"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.721-2.004 1.413-.103.25-.129.599-.129.948v5.444h-3.554s.05-8.829 0-9.74h3.554v1.375l-.022.034h.022v-.034c.429-.661 1.194-1.604 2.905-1.604 2.12 0 3.71 1.384 3.71 4.363v5.606zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.187 0 1.915.755 1.937 1.71 0 .951-.75 1.71-1.98 1.71zm1.581 11.597H3.715V9.567h3.203v10.885zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
                className="inline-flex items-center justify-center w-12 h-12 bg-white/15 hover:bg-white/25 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white shadow-lg hover:shadow-xl hover:scale-110"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a14.046 14.046 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="inline-flex items-center justify-center w-12 h-12 bg-white/15 hover:bg-white/25 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white shadow-lg hover:shadow-xl hover:scale-110"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="inline-flex items-center justify-center w-12 h-12 bg-white/15 hover:bg-white/25 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white shadow-lg hover:shadow-xl hover:scale-110"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-base text-white/90">
          <p>&copy; {new Date().getFullYear()} {ORG_INFO.shortName} | {ORG_INFO.name}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white transition-colors duration-200 cursor-not-allowed">Privacy Policy</span>
            <span className="hover:text-white transition-colors duration-200 cursor-not-allowed">Terms of Service</span>
            <span className="hover:text-white transition-colors duration-200 cursor-not-allowed">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
