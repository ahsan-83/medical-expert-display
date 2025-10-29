import React from "react";
import { GraduationCap, Award, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dr. John Smith"
            className="rounded-lg shadow-xl w-full object-cover aspect-[3/4]"
          />
        </div>

        <div className="md:col-span-2 space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Dr. John Smith is a distinguished cardiologist with a passion for
            patient-centered care and medical innovation. With over 15 years of
            clinical experience, he has established himself as a leader in the
            field of interventional cardiology, specializing in minimally
            invasive cardiac procedures and comprehensive heart health
            management.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Beyond his clinical work, Dr. Smith is deeply committed to medical
            education and research. He has published numerous articles in
            prestigious medical journals and regularly presents at international
            conferences, sharing insights on the latest advancements in
            cardiovascular medicine.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            His approach to medicine combines cutting-edge technology with
            compassionate care, ensuring that each patient receives personalized
            treatment tailored to their unique needs. Dr. Smith believes in
            empowering his patients through education, helping them make
            informed decisions about their cardiac health.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-doctor-100 text-doctor-700 px-3 py-1 rounded-full text-sm font-medium">
              Cardiology
            </span>
            <span className="bg-doctor-100 text-doctor-700 px-3 py-1 rounded-full text-sm font-medium">
              Interventional Procedures
            </span>
            <span className="bg-doctor-100 text-doctor-700 px-3 py-1 rounded-full text-sm font-medium">
              Heart Disease Prevention
            </span>
            <span className="bg-doctor-100 text-doctor-700 px-3 py-1 rounded-full text-sm font-medium">
              Cardiac Rehabilitation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
