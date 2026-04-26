import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container nav-container">
        <a href="#home" className="logo">
          P<span className="text-gradient">V</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline resume-btn">
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav glass"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} onClick={toggleMenu}>{link.name}</a>
                </li>
              ))}
            </ul>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline" onClick={toggleMenu}>
              Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
