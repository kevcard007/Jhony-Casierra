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

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={imageUrl}
          alt={title || "Paul Kenton Artwork"}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Black gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"
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
              className="text-4xl md:text-6xl font-serif text-center mb-4"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
          )}

          {subtitle && (
            <motion.p
              className="text-xl md:text-2xl text-center max-w-2xl"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      )}

      {/* CTA Buttons */}
      {ctaButtons.length > 0 && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4 md:p-8"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {ctaButtons.map((button, index) => (
            <motion.div key={`btn-${index}`} variants={itemVariants}>
              <Link
                href={button.link}
                className="bg-white/80 hover:bg-white px-4 py-2 text-xs uppercase tracking-wider text-gray-800 transition-colors duration-300"
              >
                {button.text}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
