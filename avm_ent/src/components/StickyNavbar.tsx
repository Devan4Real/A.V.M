import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const StickyNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1B2A4A] shadow-md z-50 py-2">
      <div className="flex items-center justify-between w-full px-2">
        <div className="text-2xl font-bold text-white tracking-wide">
          AVM Enterprises
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-24">
          <div className="flex items-center gap-20">
            <Button
              onClick={() => scrollToSection('home')}
              variant="ghost"
              className="text-lg text-white hover:text-gray-200 h-auto py-3 px-6 transition-colors"
            >
              Home
            </Button>
            <Button
              onClick={() => scrollToSection('services')}
              variant="ghost"
              className="text-lg text-white hover:text-gray-200 h-auto py-3 px-6 transition-colors"
            >
              Services
            </Button>
            <Button
              onClick={() => scrollToSection('branch')}
              variant="ghost"
              className="text-lg text-white hover:text-gray-200 h-auto py-3 px-6 transition-colors"
            >
              Branches
            </Button>
            <Button
              onClick={() => scrollToSection('about')}
              variant="ghost"
              className="text-lg text-white hover:text-gray-200 h-auto py-3 px-6 transition-colors"
            >
              About
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="ghost"
              className="text-lg text-white hover:text-gray-200 h-auto py-3 px-6 transition-colors"
            >
              Contact
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            className="text-white h-auto py-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1B2A4A] px-4 py-2">
          <div className="flex flex-col space-y-4">
            <Button
              onClick={() => {
                scrollToSection('home');
                setIsMobileMenuOpen(false);
              }}
              variant="ghost"
              className="text-white hover:text-gray-200 w-full text-left"
            >
              Home
            </Button>
            <Button
              onClick={() => {
                scrollToSection('services');
                setIsMobileMenuOpen(false);
              }}
              variant="ghost"
              className="text-white hover:text-gray-200 w-full text-left"
            >
              Services
            </Button>
            <Button
              onClick={() => {
                scrollToSection('branch');
                setIsMobileMenuOpen(false);
              }}
              variant="ghost"
              className="text-white hover:text-gray-200 w-full text-left"
            >
              Branches
            </Button>
            <Button
              onClick={() => {
                scrollToSection('about');
                setIsMobileMenuOpen(false);
              }}
              variant="ghost"
              className="text-white hover:text-gray-200 w-full text-left"
            >
              About
            </Button>
            <Button
              onClick={() => {
                scrollToSection('contact');
                setIsMobileMenuOpen(false);
              }}
              variant="ghost"
              className="text-white hover:text-gray-200 w-full text-left"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default StickyNavbar;