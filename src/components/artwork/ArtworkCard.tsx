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
const StatusBadge = ({ artwork }: { artwork: ArtworkCardProps }) => {
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
        {/* Contenedor principal - manteniendo tu diseño original */}
        <div className="relative p-3 bg-white">
          {/* Badge de descuento - cajita roja llamativa */}
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
          
          {/* Overlay para obras no disponibles */}
          {isUnavailable && (
            <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">
                  No Disponible
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-3 text-center">
          <h3 className="artwork-title">{title}</h3>
          {size && <p className="text-xs text-gray-500 mt-1">{size}</p>}
          
          {/* Sistema de precios con descuento */}
          {hasDiscount && originalPrice && discountedPrice ? (
            <div className="mt-1">
              <p className="text-sm text-gray-400 line-through">{originalPrice}</p>
              <p className="artwork-price text-red-600 font-bold">{discountedPrice}</p>
            </div>
          ) : (
            <p className="artwork-price mt-1">{price}</p>
          )}
          
          {/* Información de stock */}
          {stockText && (
            <p className={`text-xs mt-1 font-medium ${stockClassName}`}>
              {stockText}
            </p>
          )}
          
          {/* Fecha de venta para obras vendidas */}
          {soldDate && status === 'sold' && (
            <p className="text-xs text-gray-400 mt-1">
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