// components/layout/AnnouncementCarousel.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { Truck, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";

interface AnnouncementSlide {
  text: string;
  link: string;
  icon?: string; // Nueva propiedad para el ícono
}

interface AnnouncementCarouselProps {
  slides: AnnouncementSlide[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

// Función para obtener el ícono correcto
const getIcon = (iconName?: string) => {
  const iconProps = { 
    size: 16, 
    className: "text-amber-400 mr-2 flex-shrink-0" // Cambiado a acento dorado
  };
  
  switch (iconName) {
    case 'truck':
      return <Truck {...iconProps} />;
    case 'phone':
      return <Phone {...iconProps} />;
    case 'mail':
      return <Mail {...iconProps} />;
    default:
      return null;
  }
};

export default function AnnouncementCarousel({
  slides,
  autoplay = true,
  autoplayDelay = 5000,
}: AnnouncementCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect();

    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        emblaApi.scrollNext();
      }, autoplayDelay);
    }

    return () => {
      emblaApi.off("select", onSelect);
      if (interval) clearInterval(interval);
    };
  }, [emblaApi, onSelect, autoplay, autoplayDelay]);

  return (
    <div className="bg-[#0a0a0a] text-white py-3 border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between relative">
        <button
          onClick={scrollPrev}
          className="text-gray-300 flex items-center justify-center z-10 hover:text-amber-400 transition-colors duration-200 p-1 rounded-full hover:bg-gray-800/50"
          aria-label="Anterior anuncio"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="overflow-hidden flex-grow" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={`announcement-${index}`}
                className="flex-[0_0_100%] min-w-0 flex items-center justify-center"
              >
                <Link
                  href={slide.link}
                  className="text-sm text-center tracking-wider uppercase hover:text-amber-400 transition-colors duration-200 flex items-center justify-center text-gray-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    {getIcon(slide.icon)}
                  </span>
                  <span className="group-hover:tracking-widest transition-all duration-200">
                    {slide.text}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="text-gray-300 flex items-center justify-center z-10 hover:text-amber-400 transition-colors duration-200 p-1 rounded-full hover:bg-gray-800/50"
          aria-label="Siguiente anuncio"
        >
          <ChevronRight size={20} />
        </button>
      </div>


    </div>
  );
}