"use client";

import React from "react";
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
}

interface AnimatedArtworkGridProps {
  title: string;
  artworks: Artwork[];
  showMoreLink?: string;
  showMoreText?: string;
  className?: string;
}

export default function AnimatedArtworkGrid({
  title,
  artworks,
  showMoreLink = "#",
  showMoreText = "SHOW MORE PIECES",
  className = "",
}: AnimatedArtworkGridProps) {
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
        delay: 0.5 + (artworks.length * 0.1), // Start after all artworks are visible
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
          {artworks.map((artwork, index) => (
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
            />
          ))}
        </div>

        {showMoreLink && (
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
