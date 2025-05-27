"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Collection {
  id: string;
  title: string;
  image: string;
  link: string;
}

interface CollectionsSectionProps {
  title: string;
  collections: Collection[];
  className?: string;
  bgColor?: string;
  showNavigation?: boolean;
  autoplayDelay?: number;
}

export default function CollectionsSection({
  title,
  collections,
  className = "",
  bgColor = "bg-[#1a1a1a]",
  showNavigation = true,
  autoplayDelay = 5000,
}: CollectionsSectionProps) {
  // Configuración de Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 4 },
    },
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout>();
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setAutoplay(false); // Pausa el autoplay cuando el usuario navega manualmente
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setAutoplay(false); // Pausa el autoplay cuando el usuario navega manualmente
    }
  }, [emblaApi]);
  
  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setAutoplay(false); // Pausa el autoplay cuando el usuario navega manualmente
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Configurar el autoplay
  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    
    const handleAutoplay = () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
      
      autoplayRef.current = setTimeout(() => {
        if (emblaApi && autoplay) {
          emblaApi.scrollNext();
        }
        handleAutoplay();
      }, autoplayDelay);
    };
    
    handleAutoplay();
    
    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [emblaApi, autoplay, autoplayDelay]);

  // Configurar el carrusel
  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className={`py-8 md:py-12 ${bgColor} text-white ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="uppercase text-center font-serif text-xl md:text-2xl tracking-wider mb-8 text-white">
          {title}
        </h2>

        <div className="relative">
          {/* Embla Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {collections.map((collection) => (
                <div key={collection.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_25%] px-2">
                  <Card className="bg-[#2a2a2a] border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 group">
                    <CardContent className="p-4">
                      <Link href={collection.link}>
                        <div className="relative">
                          <AspectRatio ratio={1}>
                            <Image
                              src={collection.image}
                              alt={collection.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                          </AspectRatio>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className="text-white uppercase text-sm md:text-base font-medium tracking-wider group-hover:text-amber-400 transition-colors duration-300">
                                {collection.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          {showNavigation && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#2a2a2a]/80 hover:bg-[#2a2a2a] border border-gray-700 hover:border-amber-400 w-10 h-10 flex items-center justify-center rounded-full text-gray-300 hover:text-amber-400 transition-all duration-200"
                aria-label="Anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#2a2a2a]/80 hover:bg-[#2a2a2a] border border-gray-700 hover:border-amber-400 w-10 h-10 flex items-center justify-center rounded-full text-gray-300 hover:text-amber-400 transition-all duration-200"
                aria-label="Siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}
        </div>
        
        {/* Dots Navigation - Elegante y dorado */}
        {scrollSnaps.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`rounded-full transition-all duration-300 hover:scale-110 ${
                  index === selectedIndex 
                    ? "bg-amber-400 w-4 h-2" // Punto activo dorado y más ancho
                    : "bg-gray-600 w-2 h-2 hover:bg-gray-500" // Puntos inactivos
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}