import React from "react";
import { Briefcase, Award, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExperienceSection = () => {
  const awards = [
    {
      title: "Excellence in Cardiovascular Research",
      organization: "American Heart Association",
      year: "2021",
    },
    {
      title: "Top Cardiologist Award",
      organization: "Medical Excellence Foundation",
      year: "2019",
    },
    {
      title: "Distinguished Teaching Award",
      organization: "Stanford University School of Medicine",
      year: "2017",
    },
    {
      title: "Innovation in Medicine Award",
      organization: "International Medical Sciences Academy",
      year: "2016",
    },
  ];

  const treatments = [
    {
      name: "Coronary Angioplasty and Stenting",
      description:
        "Minimally invasive procedures to open blocked coronary arteries and improve blood flow to the heart.",
    },
    {
      name: "Cardiac Catheterization",
      description:
        "Diagnostic procedure to examine the heart and blood vessels, and to diagnose and treat cardiovascular conditions.",
    },
    {
      name: "Echocardiography",
      description:
        "Ultrasound imaging of the heart to assess cardiac structure and function.",
    },
    {
      name: "Holter Monitoring",
      description:
        "Continuous monitoring of the heart rhythm to detect abnormalities over a 24-48 hour period.",
    },
    {
      name: "Structural Heart Disease Treatment",
      description:
        "Advanced procedures to treat congenital heart defects and structural abnormalities.",
    },
    {
      name: "Preventive Cardiology",
      description:
        "Comprehensive risk assessment and management to prevent heart disease development and progression.",
    },
  ];

  const experiences = [
    {
      position: "Chief of Cardiology",
      organization: "Memorial Heart Center",
      period: "2018 - Present",
      description:
        "Leading the cardiology department, overseeing clinical operations, and implementing innovative treatment protocols.",
    },
    {
      position: "Associate Professor of Medicine",
      organization: "Stanford University School of Medicine",
      period: "2015 - Present",
      description:
        "Teaching medical students and residents, conducting research, and contributing to academic publications.",
    },
    {
      position: "Interventional Cardiologist",
      organization: "Cleveland Clinic",
      period: "2015 - 2018",
      description:
        "Performed complex cardiac procedures and participated in clinical trials for new cardiovascular treatments.",
    },
  ];

  return (
    <section id="experience" className="section-container bg-gray-50">
      <h2 className="section-title">Experience</h2>

      <div className="mb-12">
        <Tabs defaultValue="specialty">
          <TabsList
            className="grid grid-cols-3 mb-8"
            style={{ paddingBottom: "45px" }}
          >
            <TabsTrigger value="specialty" style={{ padding: "10px 20px" }}>
              Specialty & Experience
            </TabsTrigger>
            <TabsTrigger value="awards" style={{ padding: "10px 20px" }}>
              Awards & Accomplishments
            </TabsTrigger>
            <TabsTrigger value="treatments" style={{ padding: "10px 20px" }}>
              Treatments
            </TabsTrigger>
          </TabsList>

          <TabsContent value="specialty">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-doctor-100 p-2.5 rounded-full">
                    <Briefcase className="text-doctor-600 h-6 w-6" />
                  </div>
                  <h3 className="section-subtitle">Professional Experience</h3>
                </div>

                <div className="space-y-8 pl-5">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="relative border-l border-doctor-200 pl-6 pb-6"
                    >
                      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-doctor-500"></div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {exp.position}
                      </h4>
                      <p className="text-doctor-600 font-medium">
                        {exp.organization}
                      </p>
                      <p className="text-gray-500 mb-2">{exp.period}</p>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className="bg-white p-6 rounded-lg shadow-sm"
                  style={{ background: "#2B84C5" }}
                >
                  <h3
                    className="font-semibold text-xl text-gray-900 mb-4"
                    style={{ color: "white" }}
                  >
                    Specialty
                  </h3>
                  <p className="text-gray-700" style={{ color: "white" }}>
                    Interventional Cardiology with a focus on minimally invasive
                    cardiac procedures, structural heart disease, and preventive
                    cardiology.
                  </p>
                </div>

                <div
                  className="bg-white p-6 rounded-lg shadow-sm"
                  style={{ background: "#2B84C5" }}
                >
                  <h3
                    className="font-semibold text-xl text-gray-900 mb-4"
                    style={{ color: "white" }}
                  >
                    Department
                  </h3>
                  <p className="text-gray-700" style={{ color: "white" }}>
                    Department of Cardiovascular Medicine, Memorial Heart Center
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="awards">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-doctor-100 p-2.5 rounded-full">
                    <Award className="text-doctor-600 h-6 w-6" />
                  </div>
                  <h3 className="section-subtitle">Awards & Accomplishments</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {awards.map((award, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">
                        {award.title}
                      </h4>
                      <p className="text-doctor-600">{award.organization}</p>
                      <p className="text-gray-500 text-sm">{award.year}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-xl text-gray-900 mb-4">
                    Publications & Research
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-gray-700">
                      "Advances in Minimally Invasive Cardiac Procedures" - New
                      England Journal of Medicine, 2021
                    </li>
                    <li className="text-gray-700">
                      "Long-term Outcomes of Coronary Stenting in Elderly
                      Patients" - Journal of the American College of Cardiology,
                      2019
                    </li>
                    <li className="text-gray-700">
                      "Preventive Strategies for Heart Disease: A Comprehensive
                      Review" - Circulation, 2018
                    </li>
                    <li className="text-gray-700">
                      "Novel Approaches to Cardiac Rehabilitation" - Heart, 2017
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="treatments">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-doctor-100 p-2.5 rounded-full">
                    <Stethoscope className="text-doctor-600 h-6 w-6" />
                  </div>
                  <h3 className="section-subtitle">Treatments & Procedures</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {treatments.map((treatment, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">
                        {treatment.name}
                      </h4>
                      <p className="text-gray-700 mt-1">
                        {treatment.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
