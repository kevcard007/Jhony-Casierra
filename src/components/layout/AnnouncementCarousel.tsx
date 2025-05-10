// components/layout/AnnouncementCarousel.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

interface AnnouncementSlide {
  text: string;
  link: string;
}

interface AnnouncementCarouselProps {
  slides: AnnouncementSlide[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

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
    <div className="bg-black text-white py-2">
      <div className="container mx-auto flex items-center justify-between relative">
        <button
          onClick={scrollPrev}
          className="text-white flex items-center justify-center z-10"
          aria-label="Anterior anuncio"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
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
                  className="text-sm text-center tracking-wider uppercase hover:text-gray-300 transition-colors"
                >
                  {slide.text}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="text-white flex items-center justify-center z-10"
          aria-label="Siguiente anuncio"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}