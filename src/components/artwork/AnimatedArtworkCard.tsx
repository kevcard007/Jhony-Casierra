"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface AnimatedArtworkCardProps {
  id: string;
  title: string;
  image: string;
  price: string;
  size?: string;
  type?: string;
  slug?: string;
  index: number;
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
}: AnimatedArtworkCardProps) {
  // Animation variants
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
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
      }
    }
  };

  return (
    <motion.div
      className="artwork-card group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
    >
      <Link href={`/artwork/${slug}`} className="block">
        <div className="relative p-3 bg-white">
          <AspectRatio ratio={1}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </AspectRatio>
        </div>
        <div className="p-3 text-center">
          <h3 className="artwork-title">{title}</h3>
          {size && <p className="text-xs text-gray-500 mt-1">{size}</p>}
          <p className="artwork-price mt-1">{price}</p>
        </div>
      </Link>
    </motion.div>
  );
}
