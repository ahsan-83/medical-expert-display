import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LocationsSection = () => {
  const locations = [
    {
      id: "memorial",
      name: "Memorial Heart Center",
      address: "123 Cardiology Lane, San Francisco, CA 94143",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM",
      phone: "(415) 555-0123",
      mapUrl:
        "https://maps.google.com/maps?q=ucsf+medical+center&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "stanford",
      name: "Stanford Medical Pavilion",
      address: "456 University Avenue, Palo Alto, CA 94304",
      hours: "Tuesday & Thursday: 9:00 AM - 4:00 PM",
      phone: "(650) 555-0456",
      mapUrl:
        "https://maps.google.com/maps?q=stanford+hospital&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "community",
      name: "Community Heart Clinic",
      address: "789 Health Boulevard, Oakland, CA 94609",
      hours: "Wednesday: 10:00 AM - 6:00 PM",
      phone: "(510) 555-0789",
      mapUrl:
        "https://maps.google.com/maps?q=highland+hospital+oakland&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
  ];

  return (
    <section id="locations" className="section-container bg-gray-50">
      <h2 className="section-title">Consultation Locations</h2>

      <Tabs defaultValue={locations[0].id}>
        <TabsList
          className="grid grid-cols-1 md:grid-cols-3 mb-8"
          style={{ paddingBottom: "45px" }}
        >
          {locations.map((location) => (
            <TabsTrigger
              key={location.id}
              value={location.id}
              style={{ padding: "10px 20px" }}
            >
              {location.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {locations.map((location) => (
          <TabsContent key={location.id} value={location.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <h3 className="text-xl text-primary font-semibold text-gray-900">
                    {location.name}
                  </h3>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-doctor-600 mt-0.5" />
                    <p className="text-gray-700">{location.address}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-doctor-600 mt-0.5" />
                    <p className="text-gray-700">{location.hours}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-doctor-600 mt-0.5" />
                    <p className="text-gray-700">{location.phone}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="h-80 rounded-lg overflow-hidden shadow">
                <iframe
                  src={location.mapUrl}
                  title={`Map to ${location.name}`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default LocationsSection;
