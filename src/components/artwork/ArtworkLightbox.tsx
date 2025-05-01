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
        className="cursor-zoom-in relative aspect-square overflow-hidden"
        onClick={() => setOpen(true)}
      >
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className="object-contain hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {additionalImages.length > 0 && (
        <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
          <div
            className="flex-shrink-0 w-20 h-20 relative cursor-pointer border border-black"
            onClick={() => setOpen(true)}
          >
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>

          {additionalImages.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-20 h-20 relative cursor-pointer border hover:border-black"
              onClick={() => setOpen(true)}
            >
              <Image
                src={img}
                alt={`${artwork.title} - View ${index + 1}`}
                fill
                className="object-cover"
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
      />
    </>
  );
}
