"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface AnimatedArtworkCardProps {
  id: string;
  title: string;
  image: string;
  price: string;
  size?: string;
  type?: string;
  slug?: string;
  index: number;
  subtitle?: string;
  currency?: string;
}

export default function AnimatedArtworkCard({
  id,
  title,
  image,
  price,
  size,
  type = "Original Art",
  slug = "#",
  index,
  subtitle,
  currency,
}: AnimatedArtworkCardProps) {
  // Solo animación de entrada (sin hover en la tarjeta)
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }
    }),
  };

  return (
    <motion.div
      className="artwork-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
    >
      <Link href={`/artwork/${slug}`} className="block">
        {/* Marco gris completamente estático */}
        <div className="bg-gray-200 p-6 rounded-sm">
          {/* Contenedor de la imagen con overflow hidden para el efecto zoom */}
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        
        {/* Información del artwork */}
        <div className="mt-4 text-center">
          <h3 className="text-black font-semibold text-sm mb-1 uppercase tracking-wide">
            {title}
          </h3>
          
          {size && (
            <p className="text-gray-600 text-xs mb-1">
              {size}
            </p>
          )}
          
          <p className="text-black font-semibold text-sm mb-1 uppercase tracking-wide">
            ${price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}