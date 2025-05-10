"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Define las interfaces para los slides y props
interface CarouselSlide {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  ctaButtons?: {
    text: string;
    link: string;
  }[];
}

interface HeroCarouselProps {
  slides: CarouselSlide[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

export default function HeroCarousel({ 
  slides, 
  autoplay = true, 
  autoplayDelay = 5000 
}: HeroCarouselProps) {
  // Inicializa el carrusel de Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
  });
  
  // Estado para el índice del slide actual
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Función para ir al slide anterior
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Función para ir al siguiente slide
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  
  // Actualizar el índice del slide actual cuando cambia
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Configurar el evento onSelect y el autoplay
  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on("select", onSelect);
    onSelect();
    
    // Configurar autoplay si está habilitado
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

  // Variantes de animación para Framer Motion
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <div className="relative">
      {/* Embla Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex h-[70vh] min-h-[500px]">
          {slides.map((slide, index) => (
            <div 
              className="flex-[0_0_100%] min-w-0 relative overflow-hidden" 
              key={`slide-${index}`}
            >
              {/* Imagen del Slide */}
              <motion.div
                key={`img-${currentSlide}`}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.imageUrl}
                  alt={slide.title || "Hero Banner"}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </motion.div>

              {/* Overlay con gradiente */}
              <motion.div
                key={`overlay-${currentSlide}`}
                className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
              />

              {/* Título y subtítulo */}
              {(slide.title || slide.subtitle) && (
                <motion.div
                  key={`content-${currentSlide}`}
                  className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {slide.title && (
                    <motion.h1
                      className="text-4xl md:text-6xl font-serif text-center mb-4"
                      variants={itemVariants}
                    >
                      {slide.title}
                    </motion.h1>
                  )}

                  {slide.subtitle && (
                    <motion.p
                      className="text-xl md:text-2xl text-center max-w-2xl"
                      variants={itemVariants}
                    >
                      {slide.subtitle}
                    </motion.p>
                  )}
                </motion.div>
              )}

              {/* Botones CTA */}
              {slide.ctaButtons && slide.ctaButtons.length > 0 && (
                <motion.div
                  key={`buttons-${currentSlide}`}
                  className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4 md:p-8"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {slide.ctaButtons.map((button, btnIndex) => (
                    <motion.div key={`btn-${btnIndex}`} variants={itemVariants}>
                      <Link
                        href={button.link}
                        className="bg-white/80 hover:bg-white px-4 py-2 text-xs md:text-sm uppercase tracking-wider text-gray-800 transition-colors duration-300"
                      >
                        {button.text}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
        onClick={scrollPrev}
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
        onClick={scrollNext}
        aria-label="Siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      
      {/* Indicadores de paginación */}
      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={`dot-${index}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-4" : "bg-white/50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}