import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-doctor-900/80 to-doctor-800/50">
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 pt-16 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Dr. John Smith
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            (Template 4)
          </h1>
          <span className="bg-doctor-100 text-doctor-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
            Board Certified Cardiologist
          </span>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Dedicated to providing exceptional cardiac care with over 15 years
            of expertise in interventional cardiology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-doctor-600 hover:bg-doctor-700 text-white px-6 py-3 rounded-md font-semibold text-lg flex items-center justify-center gap-2 transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
