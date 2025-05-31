export interface Artwork {
  id: string;
  title: string;
  image: string;
  price: string;
  size?: string;
  type?: string;
  slug: string;
  // Nuevos campos para sistema de ventas
  status: 'available' | 'sold' | 'reserved' | 'on_hold';
  soldDate?: Date;
  quantity?: number;
  maxQuantity?: number;
  // Nuevos campos para sistema de descuentos
  originalPrice?: string; // Precio original (tachado)
  discountedPrice?: string; // Precio con descuento
  discountPercentage?: number; // Porcentaje de descuento
  hasDiscount?: boolean; // Si tiene descuento activo
}

export interface Collection {
  id: string;
  title: string;
  image: string;
  link: string;
}

// Featured Artwork - Actualizado con descuentos (solo MONOCROMATICO vendido)
export const featuredArtwork: Artwork[] = [
  {
    id: "fa1",
    title: "MONOCROMATICO", 
    image: "/images/artwork1.png",
    price: "$150000", // Precio con descuento
    originalPrice: "$300000", // Precio original
    discountedPrice: "$150000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "70 × 50 cm",
    type: "Original Art",
    slug: "monocromatico",
    status: "sold", // VENDIDO
    soldDate: new Date('2024-03-15'),
    quantity: 0,
    maxQuantity: 1,
  },
  {
    id: "fa2",
    title: "ENTROPIA",
    image: "/images/artwork2.png", 
    price: "$150000",
    originalPrice: "$300000",
    discountedPrice: "$150000", 
    discountPercentage: 50,
    hasDiscount: true,
    size: "60 × 40 cm",
    type: "Original",
    slug: "caos",
    status: "available", // DISPONIBLE
    quantity: 1,
    maxQuantity: 1,
  },
  {
    id: "fa3",
    title: "SOLEDAD",
    image: "/images/artwork3.png",
    price: "$150000", 
    originalPrice: "$300000",
    discountedPrice: "$150000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "30 × 20 cm",
    type: "Original Art",
    slug: "soledad",
    status: "available", // DISPONIBLE
    quantity: 1,
    maxQuantity: 1,
  },
  {
    id: "fa4",
    title: "NO LIBERTAD",
    image: "/images/artwork4.png",
    price: "$70000",
    originalPrice: "$14000",
    discountedPrice: "$70000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "40 × 30 cm", 
    type: "Original Art",
    slug: "no-libertad",
    status: "available", // DISPONIBLE
    quantity: 1,
    maxQuantity: 1,
  },
  {
    id: "fa5",
    title: "OBSESION",
    image: "/images/artwork9.png",
    price: "$150000",
    originalPrice: "$300000",
    discountedPrice: "$150000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "76 × 76 cm",
    type: "Original Art", 
    slug: "obsesion",
    status: "available", // DISPONIBLE
    quantity: 1,
    maxQuantity: 1,
  },
  {
    id: "fa6",
    title: "LO ABSURDO",
    image: "/images/artwork8.png", 
    price: "$150000", // 50% descuento
    originalPrice: "$300000",
    discountedPrice: "$150000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "70 × 50 cm",
    type: "Original Art",
    slug: "lo-absurdo",
    status: "sold",
    soldDate: new Date('2024-03-15'),
    quantity: 0,
    maxQuantity: 1,
  },
];

// Studio Works - Actualizado (todas disponibles)
export const studioWorks: Artwork[] = [
  {
    id: "sw1",
    title: "IMPOSICION",
    image: "/images/artwork5.png",
    price: "$120000", // 50% descuento
    originalPrice: "$240000",
    discountedPrice: "$120000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "60 × 50 cm",
    type: "Original Art", 
    slug: "big-apple-grandeur",
    status: "available",
    quantity: 1,
    maxQuantity: 1,
  },
  {
    id: "sw2", 
    title: "OSCURIDAD",
    image: "/images/artwork6.png",
    price: "$90000", // 50% descuento
    originalPrice: "$180000",
    discountedPrice: "$90000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "60 × 40 cm",
    type: "Original Art",
    slug: "sonambulo",
    status: "available", 
    quantity: 1,
    maxQuantity: 1,
  },
  {
    id: "sw3",
    title: "ESTADO ONIRICO", 
    image: "/images/artwork7.png",
    price: "$130000", // 50% descuento
    originalPrice: "$260000",
    discountedPrice: "$130000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "60 × 50 cm",
    type: "Original Art",
    slug: "tranquilidad",
    status: "available", // DISPONIBLE
    quantity: 1,
    maxQuantity: 1,
  },
  {
    id: "sw4",
    title: "LO ABSURDO",
    image: "/images/artwork8.png", 
    price: "$150000", // 50% descuento
    originalPrice: "$300000",
    discountedPrice: "$150000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "70 × 50 cm",
    type: "Original Art",
    slug: "lo-absurdo",
    status: "sold",
    quantity: 0,
    maxQuantity: 1,
  },
  {
    id: "sw5",
    title: "OBSESION",
    image: "/images/artwork9.png",
    price: "$120000", // 50% descuento
    originalPrice: "$240000",
    discountedPrice: "$120000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "40 × 30 cm",
    type: "Original Art",
    slug: "shine-city-new-york", 
    status: "available",
    quantity: 1,
    maxQuantity: 1,
  },
];

// Limited Edition Prints - Actualizado (todas disponibles con descuentos)
export const limitedEditionPrints: Artwork[] = [
  {
    id: "lep1",
    title: "LLUVIA",
    image: "/images/artwork10.png",
    price: "$60000", // 50% descuento
    originalPrice: "$120000",
    discountedPrice: "$60000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "35 × 25 cm",
    type: "Limited Edition Print",
    slug: "manhattan-skyline",
    status: "available",
    quantity: 1,
    maxQuantity: 1,
  },
  {
    id: "lep2", 
    title: "FLOR ECLOSIONADA",
    image: "/images/artwork11.png",
    price: "$60000", // 50% descuento
    originalPrice: "$120000",
    discountedPrice: "$60000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "35 × 25 cm",
    type: "Limited Edition Print",
    slug: "venetian-romance",
    status: "available",
    quantity: 1,
    maxQuantity: 1,
  },
  {
    id: "lep3",
    title: "NO LIBERTAD", 
    image: "/images/artwork4.png",
    price: "$70000", // 50% descuento
    originalPrice: "$140000",
    discountedPrice: "$70000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "35 × 25 cm",
    type: "Limited Edition Print",
    slug: "london-fusion",
    status: "available", // DISPONIBLE
    quantity: 1,
    maxQuantity: 1,
  },
  {
    id: "lep4",
    title: "PARIS AT DUSK",
    image: "/images/artwork3.png",
    price: "$80000", // 50% descuento
    originalPrice: "$160000",
    discountedPrice: "$80000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "60 × 60 cm", 
    type: "Limited Edition Print",
    slug: "paris-at-dusk",
    status: "available",
    quantity: 1,
    maxQuantity: 1,
  },
  {
    id: "lep5",
    title: "MAR Y PLAYA",
    image: "/images/artwork12.png",
    price: "$120000", // 50% descuento
    originalPrice: "$240000",
    discountedPrice: "$120000",
    discountPercentage: 50,
    hasDiscount: true,
    size: "60 × 60 cm",
    type: "Limited Edition Print",
    slug: "vibrant-barcelona",
    status: "available", // DISPONIBLE
    quantity: 1,
    maxQuantity: 1,
  },
];

// Collections (sin cambios)
export const collections: Collection[] = [
  {
    id: "col1",
    title: "LONDON",
    image: "/images/collection1.png",
    link: "/collections/london",
  },
  {
    id: "col2",
    title: "NEW YORK", 
    image: "/images/collection2.png",
    link: "/collections/new-york",
  },
  {
    id: "col3",
    title: "PARIS",
    image: "/images/collection3.png", 
    link: "/collections/paris",
  },
  {
    id: "col4",
    title: "CITYSCAPES",
    image: "/images/collection4.png",
    link: "/collections/cityscapes",
  },
];

// ===== FUNCIONES UTILITARIAS =====

export const isAvailable = (artwork: Artwork): boolean => {
  return artwork.status === 'available' && (artwork.quantity || 0) > 0;
};

export const getAvailableArtworks = (artworks: Artwork[]): Artwork[] => {
  return artworks.filter(artwork => isAvailable(artwork));
};

export const getArtworksByStatus = (
  artworks: Artwork[], 
  status: 'available' | 'sold' | 'reserved' | 'on_hold'
): Artwork[] => {
  return artworks.filter(artwork => artwork.status === status);
};

export const getSoldArtworks = (artworks: Artwork[]): Artwork[] => {
  return getArtworksByStatus(artworks, 'sold');
};

export const markAsSold = (artworkId: string, artworks: Artwork[]): Artwork[] => {
  return artworks.map(artwork => {
    if (artwork.id === artworkId) {
      return {
        ...artwork,
        status: 'sold' as const,
        soldDate: new Date(),
        quantity: artwork.type?.includes('Original') ? 0 : Math.max(0, (artwork.quantity || 0) - 1)
      };
    }
    return artwork;
  });
};

export const getStockInfo = (artwork: Artwork): { text: string; className: string; showBadge: boolean } => {
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

export const getAllArtworks = (): Artwork[] => {
  return [...featuredArtwork, ...studioWorks, ...limitedEditionPrints];
};

export const findArtworkById = (id: string): Artwork | undefined => {
  const allArtworks = getAllArtworks();
  return allArtworks.find(artwork => artwork.id === id);
};