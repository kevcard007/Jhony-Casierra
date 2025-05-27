"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";

interface ArtworkLightboxProps {
  artwork: {
    id: string;
    title: string;
    image: string;
  };
  additionalImages?: string[];
}

export default function ArtworkLightbox({
  artwork,
  additionalImages = [],
}: ArtworkLightboxProps) {
  const [open, setOpen] = useState(false);

  // Create slides array for lightbox
  const slides = [
    { src: artwork.image, alt: artwork.title },
    ...additionalImages.map((img) => ({ src: img, alt: artwork.title })),
  ];

  return (
    <>
      <div
        className="cursor-zoom-in relative aspect-square overflow-hidden bg-[#1a1a1a] border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
        onClick={() => setOpen(true)}
      >
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        
        {/* Overlay sutil con ícono de zoom */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-[#2a2a2a] bg-opacity-90 p-3 rounded-full border border-gray-600">
              <svg 
                className="w-6 h-6 text-amber-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {additionalImages.length > 0 && (
        <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
          <div
            className="flex-shrink-0 w-20 h-20 relative cursor-pointer border-2 border-amber-400 bg-[#2a2a2a] group hover:border-amber-300 transition-colors duration-200"
            onClick={() => setOpen(true)}
          >
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-200"
              sizes="80px"
            />
          </div>

          {additionalImages.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-20 h-20 relative cursor-pointer border border-gray-700 bg-[#2a2a2a] hover:border-amber-400 transition-colors duration-200 group"
              onClick={() => setOpen(true)}
            >
              <Image
                src={img}
                alt={`${artwork.title} - View ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-200"
                sizes="80px"
              />
            </div>
          ))}
        </div>
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Zoom, Thumbnails]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 1.5,
        }}
        thumbnails={{
          position: "bottom",
          width: 80,
          height: 80,
          gap: 16,
        }}
        carousel={{
          finite: slides.length <= 1,
        }}
        render={{
          buttonPrev: slides.length <= 1 ? () => null : undefined,
          buttonNext: slides.length <= 1 ? () => null : undefined,
        }}
        styles={{
          container: { backgroundColor: "rgba(10, 10, 10, 0.95)" },
          toolbar: { backgroundColor: "rgba(26, 26, 26, 0.9)" },
          navigationPrev: { 
            backgroundColor: "rgba(42, 42, 42, 0.8)",
            color: "#fbbf24",
            border: "1px solid #374151"
          },
          navigationNext: { 
            backgroundColor: "rgba(42, 42, 42, 0.8)",
            color: "#fbbf24",
            border: "1px solid #374151"
          },
          thumbnailsContainer: { backgroundColor: "rgba(26, 26, 26, 0.9)" },
          thumbnail: { 
            border: "2px solid #374151",
            backgroundColor: "#2a2a2a"
          },
          thumbnailsTrack: { gap: "12px" }
        }}
      />
    </>
  );
}