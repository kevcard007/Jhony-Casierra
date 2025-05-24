"use client";

import React, { useMemo } from "react";
import AnimatedArtworkCard from "./AnimatedArtworkCard";
import Link from "next/link";
import { motion } from "framer-motion";

interface Artwork {
  id: string;
  title: string;
  image: string;
  price: string;
  size?: string;
  type?: string;
  slug?: string;
  // Nuevos campos para sistema de ventas
  status: 'available' | 'sold' | 'reserved' | 'on_hold';
  soldDate?: Date;
  quantity?: number;
  maxQuantity?: number;
  // Nuevos campos para sistema de descuentos
  originalPrice?: string;
  discountedPrice?: string;
  discountPercentage?: number;
  hasDiscount?: boolean;
}

interface AnimatedArtworkGridProps {
  title: string;
  artworks: Artwork[];
  showMoreLink?: string;
  showMoreText?: string;
  className?: string;
  // Nueva prop para filtrar solo disponibles
  showOnlyAvailable?: boolean;
}

export default function AnimatedArtworkGrid({
  title,
  artworks,
  showMoreLink = "#",
  showMoreText = "MOSTRAR MÁS PIEZAS",
  className = "",
  showOnlyAvailable = false,
}: AnimatedArtworkGridProps) {
  
  // Filtrar obras si showOnlyAvailable es true
  const filteredArtworks = useMemo(() => {
    if (showOnlyAvailable) {
      return artworks.filter(artwork => 
        artwork.status === 'available' && (artwork.quantity || 0) > 0
      );
    }
    return artworks;
  }, [artworks, showOnlyAvailable]);

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + (filteredArtworks.length * 0.1), // Start after all artworks are visible
        duration: 0.3,
        ease: "easeOut",
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(0, 0, 0, 1)",
      color: "rgba(255, 255, 255, 1)",
      transition: {
        duration: 0.2,
      }
    }
  };

  return (
    <section className={`py-8 md:py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="uppercase text-center font-serif text-xl md:text-2xl tracking-wider mb-8"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {title}
        </motion.h2>

        <div className="artwork-grid">
          {filteredArtworks.map((artwork, index) => (
            <AnimatedArtworkCard
              key={artwork.id}
              id={artwork.id}
              title={artwork.title}
              image={artwork.image}
              price={artwork.price}
              size={artwork.size}
              type={artwork.type}
              slug={artwork.slug}
              index={index}
              status={artwork.status}
              soldDate={artwork.soldDate}
              quantity={artwork.quantity}
              maxQuantity={artwork.maxQuantity}
              originalPrice={artwork.originalPrice}
              discountedPrice={artwork.discountedPrice}
              discountPercentage={artwork.discountPercentage}
              hasDiscount={artwork.hasDiscount}
            />
          ))}
        </div>

        {/* Mensaje cuando no hay obras disponibles (solo si se está filtrando) */}
        {showOnlyAvailable && filteredArtworks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay obras disponibles en este momento
            </p>
          </div>
        )}

        {showMoreLink && filteredArtworks.length > 0 && (
          <div className="flex justify-center mt-8">
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
            >
              <Link href={showMoreLink} className="pk-read-more inline-block">
                {showMoreText}
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}