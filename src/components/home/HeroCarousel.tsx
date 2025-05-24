"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Define las interfaces para los slides y props
export interface CarouselSlide {
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
  // Estado para el índice del slide actual
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Función para ir al slide anterior
  const scrollPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Función para ir al siguiente slide
  const scrollNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  // Configurar el autoplay
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      scrollNext();
    }, autoplayDelay);
    
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, scrollNext]);

  // Variantes de animación para efecto de disolución sutil
  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.05,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2, // Transición más larga y suave
        ease: [0.25, 0.25, 0.25, 1], // Curva de easing suave
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 1],
      }
    }
  };

  // Variantes para contenido de texto
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
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
        duration: 0.6,
      }
    }
  };

  return (
    <div className="relative 
      h-[50vh] min-h-[400px] max-h-[500px]
      sm:h-[60vh] sm:min-h-[500px] sm:max-h-[600px]
      md:h-[70vh] md:min-h-[600px] md:max-h-[700px]
      lg:h-[85vh] lg:min-h-[650px]
      overflow-hidden">
      {/* Container para las imágenes con efecto de disolución */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <Image
            src={slides[currentSlide].imageUrl}
            alt={slides[currentSlide].title || "Hero Banner"}
            fill
            priority
            className="object-cover 
              object-center
              sm:object-center
              md:object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay con gradiente - más sutil en móvil */}
      <div className="absolute inset-0 
        bg-gradient-to-b from-black/20 via-transparent to-black/30
        md:bg-gradient-to-b md:from-black/30 md:via-transparent md:to-black/40" />

      {/* Contenido de texto */}
      <AnimatePresence mode="wait">
        {(slides[currentSlide].title || slides[currentSlide].subtitle) && (
          <motion.div
            key={`content-${currentSlide}`}
            className="absolute inset-0 flex flex-col items-center justify-center text-white 
              p-4 sm:p-6 md:p-8"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            {slides[currentSlide].title && (
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl 
                  font-serif text-center mb-4 
                  leading-tight sm:leading-tight md:leading-normal"
                variants={itemVariants}
              >
                {slides[currentSlide].title}
              </motion.h1>
            )}

            {slides[currentSlide].subtitle && (
              <motion.p
                className="text-sm sm:text-base md:text-xl lg:text-2xl 
                  text-center max-w-xs sm:max-w-md md:max-w-2xl 
                  leading-normal sm:leading-relaxed"
                variants={itemVariants}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botones CTA */}
      <AnimatePresence mode="wait">
        {slides[currentSlide].ctaButtons && slides[currentSlide].ctaButtons!.length > 0 && (
          <motion.div
            key={`buttons-${currentSlide}`}
            className="absolute bottom-0 left-0 right-0 flex justify-center 
              space-x-2 p-4 
              sm:space-x-3 sm:p-6 
              md:space-x-4 md:p-8"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            {slides[currentSlide].ctaButtons!.map((button, btnIndex) => (
              <motion.div key={`btn-${btnIndex}`} variants={itemVariants}>
                <Link
                  href={button.link}
                  className="bg-white/80 hover:bg-white 
                    px-3 py-2 text-xs 
                    sm:px-4 sm:py-2 sm:text-xs
                    md:px-6 md:py-3 md:text-sm 
                    uppercase tracking-wider text-gray-800 
                    transition-colors duration-300 backdrop-blur-sm
                    text-center inline-block"
                >
                  {button.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botones de navegación - más pequeños en móvil */}
      <button
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 
          bg-white/20 hover:bg-white/40 
          w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
          rounded-full flex items-center justify-center 
          backdrop-blur-sm transition-all duration-300"
        onClick={scrollPrev}
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 
          bg-white/20 hover:bg-white/40 
          w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
          rounded-full flex items-center justify-center 
          backdrop-blur-sm transition-all duration-300"
        onClick={scrollNext}
        aria-label="Siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      
      {/* Indicadores de paginación */}
      <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 z-10 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={`dot-${index}`}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? "bg-white w-6 sm:w-8" 
                : "bg-white/50 w-1.5 sm:w-2"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}