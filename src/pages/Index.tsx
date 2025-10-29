import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import GallerySection from "@/components/GallerySection";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Qualification from "@/components/Qualification";

const Index = () => {
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;

    // Update page title
    document.title = "Dr. John Smith - Cardiologist";

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(
          this.getAttribute("href") as string
        );
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,bn,hi", // include this for selected languages
        layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT,
      },
      "google_translate_element"
    );
  };

  return (
    <>
      <div id="google_translate_element"></div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <Qualification />
          <ExperienceSection />
          <GallerySection />
          <LocationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
