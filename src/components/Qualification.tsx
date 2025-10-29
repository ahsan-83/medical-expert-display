import React from "react";
import { GraduationCap, Award, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Qualification = () => {
  const education = [
    {
      degree: "Doctor of Medicine",
      institution: "Harvard Medical School",
      year: "2005-2009",
    },
    {
      degree: "Residency in Internal Medicine",
      institution: "Massachusetts General Hospital",
      year: "2009-2012",
    },
    {
      degree: "Fellowship in Cardiovascular Disease",
      institution: "Mayo Clinic",
      year: "2012-2015",
    },
  ];

  const certifications = [
    "American Board of Internal Medicine",
    "American Board of Cardiovascular Disease",
    "Advanced Cardiac Life Support (ACLS)",
    "Fellow of the American College of Cardiology (FACC)",
  ];

  const memberships = [
    "American College of Cardiology",
    "American Heart Association",
    "Society for Cardiovascular Angiography and Interventions",
    "International Society for Heart Research",
  ];

  return (
    <section id="qualification" className="section-container">
      <h2 className="section-title">Qualification</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Education */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-doctor-100 p-2.5 rounded-full">
                <GraduationCap className="text-doctor-600 h-6 w-6" />
              </div>
              <h3 className="section-subtitle">Education</h3>
            </div>
            <ul className="space-y-4">
              {education.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-gray-100 pb-4 last:border-0"
                >
                  <h4 className="font-semibold text-gray-900">{item.degree}</h4>
                  <p className="text-gray-600">{item.institution}</p>
                  <p className="text-gray-500 text-sm">{item.year}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-doctor-100 p-2.5 rounded-full">
                <Award className="text-doctor-600 h-6 w-6" />
              </div>
              <h3 className="section-subtitle">Certifications</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              {certifications.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Professional Memberships */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-doctor-100 p-2.5 rounded-full">
                <UserCheck className="text-doctor-600 h-6 w-6" />
              </div>
              <h3 className="section-subtitle">Memberships</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              {memberships.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Qualification;
