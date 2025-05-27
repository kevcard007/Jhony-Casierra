import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ArtworkCardProps {
  id: string;
  title: string;
  image: string;
  price: string;
  size?: string;
  type?: string;
  slug?: string;
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
const getStockInfo = (artwork: ArtworkCardProps): { text: string; className: string; showBadge: boolean } => {
  if (artwork.type?.includes('Original')) {
    switch (artwork.status) {
      case 'available':
        return { text: 'Disponible', className: 'text-green-400', showBadge: false };
      case 'sold':
        return { text: 'Vendida', className: 'text-red-400', showBadge: true };
      case 'reserved':
        return { text: 'Reservada', className: 'text-orange-400', showBadge: true };
      case 'on_hold':
        return { text: 'En espera', className: 'text-yellow-400', showBadge: true };
      default:
        return { text: '', className: '', showBadge: false };
    }
  } else {
    const remaining = artwork.quantity || 0;
    const total = artwork.maxQuantity || 0;
    
    if (remaining === 0) {
      return { text: 'Agotado', className: 'text-red-400', showBadge: true };
    } else if (remaining <= 3) {
      return { text: `Últimas ${remaining}`, className: 'text-red-400', showBadge: true };
    } else {
      return { text: `${remaining}/${total}`, className: 'text-gray-400', showBadge: false };
    }
  }
};

// Componente interno para el badge de estado
const StatusBadge = ({ artwork }: { artwork: ArtworkCardProps }) => {
  const { text, className, showBadge } = getStockInfo(artwork);
  
  if (!showBadge) return null;

  const getBadgeStyle = () => {
    switch (artwork.status) {
      case 'sold':
        return 'bg-[#1f2937] text-white border border-gray-600';
      case 'reserved':
        return 'bg-[#1f2937] text-white border border-gray-600';
      case 'on_hold':
        return 'bg-[#1f2937] text-white border border-gray-600';
      default:
        if (artwork.type?.includes('Limited') && (artwork.quantity || 0) <= 3) {
          return 'bg-red-600 text-white';
        }
        return 'bg-[#1f2937] text-white border border-gray-600';
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

export default function ArtworkCard({
  id,
  title,
  image,
  price,
  size,
  type = "Original Art",
  slug = "#",
  status,
  soldDate,
  quantity,
  maxQuantity,
  originalPrice,
  discountedPrice,
  discountPercentage,
  hasDiscount
}: ArtworkCardProps) {
  const isUnavailable = status !== 'available' || (quantity === 0);
  const artworkData = { id, title, image, price, size, type, slug, status, soldDate, quantity, maxQuantity, originalPrice, discountedPrice, discountPercentage, hasDiscount };
  const { text: stockText, className: stockClassName } = getStockInfo(artworkData);

  return (
    <div className="artwork-card group">
      <Link href={`/artwork/${slug}`} className="block">
        {/* Contenedor principal con tema dark */}
        <div className="relative p-3 bg-[#1a1a1a] border border-gray-700 hover:border-gray-600 transition-all duration-200 group-hover:bg-[#2a2a2a]">
          {/* Badge de descuento - manteniendo el rojo llamativo */}
          {hasDiscount && discountPercentage && (
            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold uppercase tracking-wide z-10 shadow-lg">
              {discountPercentage}% DESCUENTO
            </div>
          )}
          
          {/* Badges de estado - solo si no está disponible */}
          {isUnavailable && <StatusBadge artwork={artworkData} />}
          
          <AspectRatio ratio={1}>
            <Image
              src={image}
              alt={title}
              fill
              className={`object-contain transition-transform duration-300 ${
                isUnavailable ? 'grayscale opacity-60' : 'group-hover:scale-105'
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </AspectRatio>
          
          {/* Overlay para obras no disponibles - adaptado al tema dark */}
          {isUnavailable && (
            <div className="absolute inset-0 bg-[#0a0a0a] bg-opacity-70 flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-400 font-medium text-sm uppercase tracking-wide">
                  No Disponible
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-3 text-center bg-[#1a1a1a] border-l border-r border-b border-gray-700 group-hover:border-gray-600 transition-colors duration-200">
          <h3 className="text-white font-medium text-sm uppercase tracking-wide mb-1 group-hover:text-amber-400 transition-colors duration-200">
            {title}
          </h3>
          {size && <p className="text-xs text-gray-400 mt-1">{size}</p>}
          
          {/* Sistema de precios con descuento */}
          {hasDiscount && originalPrice && discountedPrice ? (
            <div className="mt-2">
              <p className="text-sm text-gray-500 line-through">{originalPrice}</p>
              <p className="text-amber-400 font-bold text-lg">{discountedPrice}</p>
            </div>
          ) : (
            <p className="text-amber-400 font-bold text-lg mt-2">{price}</p>
          )}
          
          {/* Información de stock */}
          {stockText && (
            <p className={`text-xs mt-2 font-medium ${stockClassName}`}>
              {stockText}
            </p>
          )}
          
          {/* Fecha de venta para obras vendidas */}
          {soldDate && status === 'sold' && (
            <p className="text-xs text-gray-500 mt-1">
              Vendido {soldDate.toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}