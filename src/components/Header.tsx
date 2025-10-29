import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Qualification", href: "#qualification" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Consultation", href: "#locations" },
    { name: "Contact", href: "#contact" },
  ];

  const headerClasses = ` w-full z-50 transition-all duration-300 ease-in-out ${
    isScrolled
      ? "fixed top-0 bg-white shadow-md py-2"
      : "fixed top-15 bg-transparent py-4"
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="font-bold text-2xl text-doctor-800">
              Dr. John Smith
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div className="hoverable-div">
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 hover:text-doctor-600 transition-colors"
              >
                {link.name}
              </a>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-doctor-600 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div className="hoverable-div">
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-medium text-gray-700 hover:text-doctor-600 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
