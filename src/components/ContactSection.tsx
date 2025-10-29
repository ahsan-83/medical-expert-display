import React, { useState } from "react";
import { Phone, Mail, GitCompare, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact</h2>

      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className="mb-4">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="bg-doctor-100 p-2.5 rounded-full">
              <Phone className="text-doctor-600 h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-semibold">(415) 555-0123</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="bg-doctor-100 p-2.5 rounded-full">
              <Mail className="text-doctor-600 h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold">dr.smith@heartcenter.com</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="bg-doctor-100 p-2.5 rounded-full">
              <MapPin className="text-doctor-600 h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Office</p>
              <p className="font-semibold">
                123 Cardiology Lane
                <br />
                San Francisco, CA 94143
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="bg-doctor-100 p-2.5 rounded-full">
              <GitCompare className="text-doctor-600 h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Follow Dr. Smith</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
