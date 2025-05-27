"use client";

import React, { useState, useMemo } from "react";
import ArtworkCard from "./ArtworkCard";
import Link from "next/link";

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

interface ArtworkGridProps {
  title: string;
  artworks: Artwork[];
  showMoreLink?: string;
  showMoreText?: string;
  className?: string;
  // Nuevas props para filtros
  showFilters?: boolean;
  showOnlyAvailable?: boolean;
}

export default function ArtworkGrid({
  title,
  artworks,
  showMoreLink = "#",
  showMoreText = "MOSTRAR MÁS PIEZAS",
  className = "",
  showFilters = false,
  showOnlyAvailable = false,
}: ArtworkGridProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'available' | 'sold' | 'reserved'>('all');

  // Filtrar obras según la selección
  const filteredArtworks = useMemo(() => {
    let filtered = artworks;

    // Si showOnlyAvailable es true, mostrar solo disponibles
    if (showOnlyAvailable) {
      filtered = artworks.filter(artwork => 
        artwork.status === 'available' && (artwork.quantity || 0) > 0
      );
    } else if (selectedFilter !== 'all') {
      filtered = artworks.filter(artwork => artwork.status === selectedFilter);
    }

    return filtered;
  }, [artworks, selectedFilter, showOnlyAvailable]);

  // Contar obras por estado
  const statusCounts = useMemo(() => {
    const counts = {
      all: artworks.length,
      available: artworks.filter(a => a.status === 'available' && (a.quantity || 0) > 0).length,
      sold: artworks.filter(a => a.status === 'sold').length,
      reserved: artworks.filter(a => a.status === 'reserved').length,
    };
    return counts;
  }, [artworks]);

  return (
    <section className={`py-8 md:py-12 bg-[#0a0a0a] text-white ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="uppercase text-center font-serif text-xl md:text-2xl tracking-wider mb-8 text-white">
          {title}
        </h2>

        {/* Filtros sutiles - solo si showFilters es true */}
        {showFilters && !showOnlyAvailable && (
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 text-sm">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-3 py-1 uppercase tracking-wide transition-colors duration-200 ${
                  selectedFilter === 'all' 
                    ? 'text-amber-400 border-b border-amber-400' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Todas ({statusCounts.all})
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setSelectedFilter('available')}
                className={`px-3 py-1 uppercase tracking-wide transition-colors duration-200 ${
                  selectedFilter === 'available' 
                    ? 'text-amber-400 border-b border-amber-400' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Disponibles ({statusCounts.available})
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setSelectedFilter('sold')}
                className={`px-3 py-1 uppercase tracking-wide transition-colors duration-200 ${
                  selectedFilter === 'sold' 
                    ? 'text-amber-400 border-b border-amber-400' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Vendidas ({statusCounts.sold})
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setSelectedFilter('reserved')}
                className={`px-3 py-1 uppercase tracking-wide transition-colors duration-200 ${
                  selectedFilter === 'reserved' 
                    ? 'text-amber-400 border-b border-amber-400' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Reservadas ({statusCounts.reserved})
              </button>
            </div>
          </div>
        )}

        {/* Contador de resultados */}
        {showFilters && selectedFilter !== 'all' && (
          <div className="text-center mb-4">
            <p className="text-sm text-gray-400">
              Mostrando {filteredArtworks.length} obras
            </p>
          </div>
        )}

        <div className="artwork-grid">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              id={artwork.id}
              title={artwork.title}
              image={artwork.image}
              price={artwork.price}
              size={artwork.size}
              type={artwork.type}
              slug={artwork.slug}
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

        {/* Mensaje cuando no hay resultados */}
        {filteredArtworks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No hay obras disponibles en esta categoría
            </p>
          </div>
        )}

        {showMoreLink && filteredArtworks.length > 0 && (
          <div className="flex justify-center mt-8">
            <Link 
              href={showMoreLink} 
              className="px-6 py-3 bg-[#1a1a1a] border border-gray-700 text-white uppercase tracking-wider text-sm hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-200 font-medium"
            >
              {showMoreText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}