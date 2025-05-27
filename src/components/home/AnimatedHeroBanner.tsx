"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroBannerProps {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  ctaButtons?: {
    text: string;
    link: string;
  }[];
}

export default function AnimatedHeroBanner({
  imageUrl,
  title,
  subtitle,
  ctaButtons = [],
}: HeroBannerProps) {
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

  const decorativeVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-[#0a0a0a]">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={imageUrl}
          alt={title || "Jhony Casierra Artwork"}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark gradient overlay - más intenso para mejor contraste */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Title and subtitle if provided */}
      {(title || subtitle) && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {title && (
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-serif text-center mb-4 tracking-wider uppercase"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
          )}

          {subtitle && (
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-center max-w-3xl text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Línea decorativa animada debajo del subtítulo */}
          {(title || subtitle) && (
            <motion.div
              className="w-24 h-px bg-amber-400 mt-6 origin-left"
              variants={decorativeVariants}
            />
          )}
        </motion.div>
      )}

      {/* CTA Buttons */}
      {ctaButtons.length > 0 && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 flex justify-center space-x-3 p-4 md:p-8"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {ctaButtons.map((button, index) => (
            <motion.div 
              key={`btn-${index}`} 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={button.link}
                className="bg-[#1a1a1a]/90 hover:bg-[#2a2a2a] border border-gray-700 hover:border-amber-400 px-6 py-3 text-xs md:text-sm lg:text-base uppercase tracking-wider text-white hover:text-amber-400 transition-all duration-300 font-medium backdrop-blur-sm"
              >
                {button.text}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Elementos decorativos animados en las esquinas */}
      <motion.div
        className="absolute bottom-4 left-4 hidden md:block"
        variants={decorativeVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="w-12 h-px bg-amber-400 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        />
        <motion.div 
          className="w-8 h-px bg-amber-400 mt-2 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        />
      </motion.div>
      
      <motion.div
        className="absolute bottom-4 right-4 hidden md:block"
        variants={decorativeVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="w-12 h-px bg-amber-400 ml-auto origin-right"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        />
        <motion.div 
          className="w-8 h-px bg-amber-400 mt-2 ml-auto origin-right"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        />
      </motion.div>

      {/* Partículas decorativas flotantes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1 h-1 bg-amber-400 rounded-full hidden lg:block"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-400 rounded-full hidden lg:block"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 2.5
        }}
      />
    </div>
  );
}