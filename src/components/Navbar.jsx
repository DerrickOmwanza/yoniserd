import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const dropdownMenus = [
  {
    label: 'About Us',
    items: [
      { label: 'About YoNISeRD', description: 'Mission, vision & story', to: '/about#overview' },
      { label: 'Leadership', description: 'Meet our team', to: '/about#leadership' },
      { label: 'Awards', description: 'Milestones & recognition', to: '/about#awards' },
      { label: 'Contact', description: 'Reach out anytime', to: '/contact' },
    ],
  },
  {
    label: 'What We Do',
    items: [
      { label: 'Programs', description: 'Flagship initiatives', to: '/programs' },
      { label: 'Our Work', description: 'Stories from the field', to: '/our-work' },
      { label: 'Impact', description: 'Data & outcomes', to: '/impact' },
    ],
  },
  {
    label: 'Get Involved',
    items: [
      { label: 'Volunteer', description: 'Share your skills', to: '/contact#volunteer' },
      { label: 'Partner with Us', description: 'Collaborate on programs', to: '/programs#partnerships' },
      { label: 'Spread the Word', description: 'Share our story', to: '/#news' },
    ],
  },
];

const simpleLinks = [
  { label: 'Gallery', to: '/gallery' },
  { label: 'News', to: '/news' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleMobileToggle = (label) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <nav className="sticky top-0 z-50 px-4 sm:px-6 py-3 backdrop-blur-md navbar-bg" role="navigation" aria-label="Main navigation">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" aria-label="YoNISeRD Home" onClick={() => setActiveDropdown(null)}>
          <img src={logo} alt="YoNISeRD Logo" className="h-11 w-auto rounded-full bg-white/90 p-1 shadow-lg" />
          <div className="hidden sm:flex flex-col text-white leading-tight">
            <span className="text-xs uppercase tracking-[0.3em] text-white/80">Youth Network Integrated Services</span>
            <span className="text-sm font-semibold">Research & Development</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="brand-nav hidden lg:flex items-center gap-8">
          {dropdownMenus.map((menu) => (
            <div
              key={menu.label}
              className={`dropdown-wrapper ${activeDropdown === menu.label ? 'open' : ''}`}
              onMouseEnter={() => setActiveDropdown(menu.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button type="button" className="nav-link flex items-center gap-2">
                {menu.label}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path d="M1 3L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="dropdown-panel" onMouseEnter={() => setActiveDropdown(menu.label)} onMouseLeave={() => setActiveDropdown(null)}>
                {menu.items.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className="dropdown-link"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <strong>{item.label}</strong>
                    <span>{item.description}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}

          {simpleLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className="nav-link">
              {link.label}
            </NavLink>
          ))}

          <NavLink to="/contact" className="brand-cta">
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white transition-all duration-200"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden mobile-menu overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-2 py-4 px-1">
          {dropdownMenus.map((menu) => (
            <div key={menu.label}>
              <button
                type="button"
                className="px-3 py-2 w-full text-left rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
                onClick={() => handleMobileToggle(menu.label)}
                aria-expanded={Boolean(mobileDropdowns[menu.label])}
              >
                <span>{menu.label}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${mobileDropdowns[menu.label] ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 7L10 12L15 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileDropdowns[menu.label] && (
                <div className="mobile-dropdown">
                  {menu.items.map((item) => (
                    <NavLink key={item.label} to={item.to} onClick={closeMenu}>
                      <strong className="block uppercase text-sm">{item.label}</strong>
                      <span className="text-xs text-slate-600">{item.description}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          {simpleLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className="px-3 py-2 font-semibold uppercase tracking-[0.2em]" onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="brand-cta mt-4 inline-flex justify-center"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;