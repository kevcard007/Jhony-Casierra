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
  bgColor = "bg-[#333334]",
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
        <h2 className="uppercase text-center font-serif text-xl md:text-2xl tracking-wider mb-8">
          {title}
        </h2>

        <div className="relative">
          {/* Embla Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {collections.map((collection) => (
                <div key={collection.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_25%] px-2">
                  <Card className="bg-gray-300 border-0 overflow-hidden">
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
                          <div className="absolute inset-0 flex items-end justify-center p-4">
                            <h3 className="text-white uppercase text-sm md:text-base font-medium tracking-wider">
                              {collection.title}
                            </h3>
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
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 w-10 h-10 flex items-center justify-center rounded-full text-white"
                aria-label="Anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 w-10 h-10 flex items-center justify-center rounded-full text-white"
                aria-label="Siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}
        </div>
        
        {/* Dots Navigation - Estilo similar a la imagen de referencia */}
        {scrollSnaps.length > 1 && (
          <div className="flex justify-center mt-6 space-x-1">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? "bg-white w-4" // Punto activo más ancho
                    : "bg-white/50" // Puntos inactivos
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