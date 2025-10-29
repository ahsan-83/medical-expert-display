import React from "react";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-doctor-900 text-white">
      <div className="section-container pt-12 pb-8">
        <div className="border-t border-doctor-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dr. John Smith. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="bg-doctor-800 hover:bg-doctor-700 text-white p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
