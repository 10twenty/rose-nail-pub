'use client';

import { useState, useEffect } from 'react';
import { content } from '../../config/content';

interface NavbarProps {
  companyName: string;
}

export default function Navbar({ companyName }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Special handling for home section
      const servicesSection = document.getElementById('services');
      if (servicesSection && scrollPosition < servicesSection.offsetTop - 100) {
        setActiveSection('home');
        return;
      }

      // Special handling for about section to include why-us and reviews
      const aboutSection = document.getElementById('about');
      const whyUsSection = document.getElementById('why-us');
      const reviewsSection = document.getElementById('reviews');
      const contactSection = document.getElementById('contact');

      if (aboutSection && whyUsSection && reviewsSection && contactSection) {
        // Check if we're in the about, why-us, or reviews sections
        const isInAboutSection = scrollPosition >= aboutSection.offsetTop && scrollPosition < whyUsSection.offsetTop + whyUsSection.offsetHeight;
        const isInWhyUsSection = scrollPosition >= whyUsSection.offsetTop && scrollPosition < reviewsSection.offsetTop + reviewsSection.offsetHeight;
        const isInReviewsSection = scrollPosition >= reviewsSection.offsetTop && scrollPosition < contactSection.offsetTop;

        if (isInAboutSection || isInWhyUsSection || isInReviewsSection) {
          setActiveSection('about');
          return;
        }
      }

      // Handle other sections
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 64; // Reduced height of the fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const getLinkClassName = (section: string) => {
    const baseClasses = "text-sm transition-colors";
    const mobileBaseClasses = "block transition-colors py-1";
    const isActive = activeSection === section;
    
    return isActive 
      ? `${baseClasses} text-primary font-medium` 
      : `${baseClasses} text-gray-600 hover:text-primary`;
  };

  const getMobileLinkClassName = (section: string) => {
    const mobileBaseClasses = "block transition-colors py-1";
    const isActive = activeSection === section;
    
    return isActive 
      ? `${mobileBaseClasses} text-primary font-medium` 
      : `${mobileBaseClasses} text-gray-600 hover:text-primary`;
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <a href="#" className="text-lg font-serif text-gray-900">
            {companyName}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              onClick={(e) => scrollToSection(e, 'home')}
              className={getLinkClassName('home')}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className={getLinkClassName('services')}
            >
              Products
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className={getLinkClassName('about')}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={getLinkClassName('contact')}
            >
              Contact
            </a>
            <a
              href={`mailto:${content.contact.info.email}`}
              className="bg-primary text-white text-sm px-3 py-1.5 rounded-full hover:bg-primary/90 transition-colors hover-glow"
            >
              Email Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-5 h-5"
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? 'max-h-[400px]' : 'max-h-0'
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="py-6 space-y-4">
            <a
              href="#"
              onClick={(e) => scrollToSection(e, 'home')}
              className={getMobileLinkClassName('home')}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className={getMobileLinkClassName('services')}
            >
              Products
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className={getMobileLinkClassName('about')}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={getMobileLinkClassName('contact')}
            >
              Contact
            </a>
            <div className="pt-2">
              <a
                href={`mailto:${content.contact.info.email}`}
                className="inline-block bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors hover-glow"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 