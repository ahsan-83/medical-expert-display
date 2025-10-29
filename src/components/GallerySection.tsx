import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "State-of-the-art cardiac care facility",
    },
    {
      url: "https://images.unsplash.com/photo-1581595219373-81c6da39c3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Advanced cardiac monitoring equipment",
    },
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Consultation room",
    },
    {
      url: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Patient care at Memorial Heart Center",
    },
    {
      url: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Medical research laboratory",
    },
    {
      url: "https://images.unsplash.com/photo-1580281657702-257584239a42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Educational seminar on heart health",
    },
  ];

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="section-container">
      <h2 className="section-title">Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:shadow-xl hover:scale-[1.02]"
            onClick={() => openLightbox(image.url)}
          >
            <AspectRatio ratio={4 / 3}>
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </AspectRatio>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-full p-1 bg-transparent border-none shadow-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
