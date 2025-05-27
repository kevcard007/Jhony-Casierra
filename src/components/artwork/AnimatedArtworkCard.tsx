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
  // Nuevas props para sistema de ventas
  status: 'available' | 'sold' | 'reserved' | 'on_hold';
  soldDate?: Date;
  quantity?: number;
  maxQuantity?: number;
  // Nuevas props para sistema de descuentos
  originalPrice?: string;
  discountedPrice?: string;
  discountPercentage?: number;
  hasDiscount?: boolean;
}

// Función local para obtener información de stock
const getStockInfo = (artwork: AnimatedArtworkCardProps): { text: string; className: string; showBadge: boolean } => {
  if (artwork.type?.includes('Original')) {
    switch (artwork.status) {
      case 'available':
        return { text: 'Disponible', className: 'text-green-600', showBadge: false };
      case 'sold':
        return { text: 'Vendida', className: 'text-red-600', showBadge: true };
      case 'reserved':
        return { text: 'Reservada', className: 'text-orange-600', showBadge: true };
      case 'on_hold':
        return { text: 'En espera', className: 'text-yellow-600', showBadge: true };
      default:
        return { text: '', className: '', showBadge: false };
    }
  } else {
    const remaining = artwork.quantity || 0;
    const total = artwork.maxQuantity || 0;
    
    if (remaining === 0) {
      return { text: 'Agotado', className: 'text-red-600', showBadge: true };
    } else if (remaining <= 3) {
      return { text: `Últimas ${remaining}`, className: 'text-red-500', showBadge: true };
    } else {
      return { text: `${remaining}/${total}`, className: 'text-gray-600', showBadge: false };
    }
  }
};

// Componente interno para el badge de estado
const StatusBadge = ({ artwork }: { artwork: AnimatedArtworkCardProps }) => {
  const { text, className, showBadge } = getStockInfo(artwork);
  
  if (!showBadge) return null;

  const getBadgeStyle = () => {
    switch (artwork.status) {
      case 'sold':
        return 'bg-black text-white';
      case 'reserved':
        return 'bg-gray-600 text-white';
      case 'on_hold':
        return 'bg-gray-400 text-white';
      default:
        if (artwork.type?.includes('Limited') && (artwork.quantity || 0) <= 3) {
          return 'bg-red-600 text-white';
        }
        return 'bg-gray-800 text-white';
    }
  };

  return (
    <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium uppercase tracking-wide z-10 ${getBadgeStyle()}`}>
      {artwork.status === 'sold' ? 'VENDIDO' : 
       artwork.status === 'reserved' ? 'RESERVADO' : 
       artwork.status === 'on_hold' ? 'EN ESPERA' : 
       text}
    </div>
  );
};

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
  status,
  soldDate,
  quantity,
  maxQuantity,
  originalPrice,
  discountedPrice,
  discountPercentage,
  hasDiscount
}: AnimatedArtworkCardProps) {
  const isUnavailable = status !== 'available' || (quantity === 0);
  const artworkData = { id, title, image, price, size, type, slug, status, soldDate, quantity, maxQuantity, originalPrice, discountedPrice, discountPercentage, hasDiscount, index, subtitle, currency };
  const { text: stockText, className: stockClassName } = getStockInfo(artworkData);

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
        {/* Marco oscuro elegante con badges */}
        <div className="bg-[#2a2a2a] p-6 rounded-sm relative border border-[#374151]">
          {/* Badge de descuento - cajita roja llamativa */}
          {hasDiscount && discountPercentage && (
            <div className="absolute top-2 left-2 bg-[#dc2626] text-white px-2 py-1 text-xs font-bold uppercase tracking-wide z-10 shadow-lg">
              {discountPercentage}% DESCUENTO
            </div>
          )}
          
          {/* Badges de estado - solo si no está disponible */}
          {isUnavailable && <StatusBadge artwork={artworkData} />}
          
          {/* Contenedor de la imagen con overflow hidden para el efecto zoom */}
          <div className="relative w-full aspect-square overflow-hidden bg-[#1a1a1a]">
            <Image
              src={image}
              alt={title}
              fill
              className={`object-cover transition-transform duration-500 ease-out ${
                isUnavailable ? 'grayscale opacity-60' : 'hover:scale-110'
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Overlay para obras no disponibles */}
            {isUnavailable && (
              <div className="absolute inset-0 bg-[#0a0a0a] bg-opacity-70 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[#9ca3af] font-medium text-sm uppercase tracking-wide">
                    No Disponible
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Información del artwork - Dark */}
        <div className="mt-4 text-center">
          <h3 className="text-white font-semibold text-sm mb-1 uppercase tracking-wide">
            {title}
          </h3>
          
          {size && (
            <p className="text-[#9ca3af] text-xs mb-1">
              {size}
            </p>
          )}
          
          {/* Sistema de precios con descuento */}
          {hasDiscount && originalPrice && discountedPrice ? (
            <div className="space-y-1">
              <p className="text-xs text-[#9ca3af] line-through">{originalPrice}</p>
              <p className="text-[#fbbf24] font-semibold text-sm uppercase tracking-wide">
                {discountedPrice}
              </p>
            </div>
          ) : (
            <p className="text-white font-semibold text-sm mb-1 uppercase tracking-wide">
              {price}
            </p>
          )}
          
          {/* Información de stock */}
          {stockText && (
            <p className={`text-xs mt-1 font-medium ${stockClassName.replace('text-green-600', 'text-green-400').replace('text-red-600', 'text-red-400').replace('text-orange-600', 'text-orange-400').replace('text-yellow-600', 'text-yellow-400')}`}>
              {stockText}
            </p>
          )}
          
          {/* Fecha de venta para obras vendidas */}
          {soldDate && status === 'sold' && (
            <p className="text-xs text-[#9ca3af] mt-1">
              Vendido {soldDate.toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}