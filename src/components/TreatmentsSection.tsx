import React from "react";
import { Heart, Stethoscope, Activity, Syringe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TreatmentsSection = () => {
  const diseases = [
    {
      name: "Coronary Artery Disease",
      icon: Heart,
      description: "Comprehensive treatment for blocked or narrowed coronary arteries affecting blood flow to the heart.",
      symptoms: ["Chest pain", "Shortness of breath", "Fatigue", "Heart palpitations"],
      procedures: [
        {
          name: "Coronary Angioplasty",
          details: "Minimally invasive procedure using a balloon catheter to open blocked arteries and restore blood flow."
        },
        {
          name: "Stent Placement",
          details: "Insertion of a small mesh tube to keep the artery open and maintain proper blood flow."
        },
        {
          name: "Medical Management",
          details: "Comprehensive medication therapy including antiplatelet agents, statins, and blood pressure control."
        }
      ]
    },
    {
      name: "Heart Arrhythmias",
      icon: Activity,
      description: "Treatment of irregular heart rhythms that can affect the heart's ability to pump blood effectively.",
      symptoms: ["Irregular heartbeat", "Dizziness", "Chest discomfort", "Shortness of breath"],
      procedures: [
        {
          name: "Cardiac Ablation",
          details: "Catheter-based procedure to destroy abnormal tissue causing irregular heart rhythms."
        },
        {
          name: "Pacemaker Implantation",
          details: "Surgical placement of a device to regulate heart rhythm and maintain proper heart rate."
        },
        {
          name: "Electrophysiology Study",
          details: "Diagnostic procedure to map electrical activity and identify arrhythmia sources."
        }
      ]
    },
    {
      name: "Heart Valve Disease",
      icon: Stethoscope,
      description: "Treatment for damaged or diseased heart valves affecting blood flow through the heart.",
      symptoms: ["Heart murmur", "Fatigue", "Swollen ankles", "Irregular heartbeat"],
      procedures: [
        {
          name: "TAVR (Transcatheter Aortic Valve Replacement)",
          details: "Minimally invasive procedure to replace damaged aortic valve without open-heart surgery."
        },
        {
          name: "Valve Repair",
          details: "Surgical techniques to preserve and restore function of native heart valves."
        },
        {
          name: "Echocardiographic Monitoring",
          details: "Regular ultrasound imaging to assess valve function and disease progression."
        }
      ]
    },
    {
      name: "Heart Failure",
      icon: Syringe,
      description: "Comprehensive management of chronic condition where the heart cannot pump blood efficiently.",
      symptoms: ["Persistent fatigue", "Fluid retention", "Shortness of breath", "Reduced exercise tolerance"],
      procedures: [
        {
          name: "Cardiac Resynchronization Therapy",
          details: "Specialized pacemaker to coordinate heart chamber contractions and improve pumping efficiency."
        },
        {
          name: "Medical Optimization",
          details: "Tailored medication regimen including ACE inhibitors, beta-blockers, and diuretics."
        },
        {
          name: "Lifestyle Modification Program",
          details: "Structured diet, exercise, and monitoring program to manage symptoms and improve quality of life."
        }
      ]
    }
  ];

  return (
    <section id="treatments" className="section-container">
      <h2 className="section-title">Treatments & Procedures</h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        Specialized treatment protocols for cardiovascular conditions using the latest medical advances and minimally invasive techniques.
      </p>

      <Tabs defaultValue="0" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 h-auto">
          {diseases.map((disease, index) => (
            <TabsTrigger 
              key={index} 
              value={index.toString()}
              className="flex flex-col items-center gap-2 p-4"
            >
              <disease.icon className="h-5 w-5" />
              <span className="text-xs md:text-sm text-center">{disease.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {diseases.map((disease, index) => (
          <TabsContent key={index} value={index.toString()}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-doctor-100 p-3 rounded-full">
                    <disease.icon className="h-6 w-6 text-doctor-600" />
                  </div>
                  <CardTitle className="text-2xl">{disease.name}</CardTitle>
                </div>
                <CardDescription className="text-base">{disease.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Common Symptoms</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {disease.symptoms.map((symptom, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                        <div className="h-2 w-2 rounded-full bg-doctor-500"></div>
                        <span className="text-gray-700">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4">Treatment Procedures</h4>
                  <div className="space-y-4">
                    {disease.procedures.map((procedure, idx) => (
                      <div key={idx} className="border-l-4 border-doctor-500 pl-4 py-2">
                        <h5 className="font-semibold text-gray-900 mb-1">{procedure.name}</h5>
                        <p className="text-gray-600">{procedure.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-doctor-50 p-4 rounded-lg border border-doctor-200">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Treatment plans are personalized based on individual patient conditions, 
                    medical history, and diagnostic findings. Schedule a consultation to discuss the best approach for your specific situation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default TreatmentsSection;
