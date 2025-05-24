import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import {
  featuredArtwork,
  studioWorks,
  limitedEditionPrints
} from "@/data/artwork"; // Cambiado de "artwork" a "artworks"
import ArtworkLightbox from "@/components/artwork/ArtworkLightbox";
import AddToCartButton from "@/components/cart/AddToCartButton";

// Combine all artworks for lookup
const allArtworks = [...featuredArtwork, ...studioWorks, ...limitedEditionPrints];

interface ArtworkPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return allArtworks.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const { slug } = params;

  // Find the artwork by slug
  const artwork = allArtworks.find((item) => item.slug === slug);

  // If artwork not found, return 404
  if (!artwork) {
    notFound();
  }

  // Find related artworks (same type)
  const relatedArtworks = allArtworks
    .filter((item) => item.type === artwork.type && item.id !== artwork.id)
    .slice(0, 4);

  // For demo purposes, create additional views of the artwork
  // In a real app, these would come from the database
  const additionalImages = [
    artwork.image, // Same image for demo purposes
    relatedArtworks.length > 0 ? relatedArtworks[0].image : artwork.image,
  ];

  // Verificar si la obra está disponible
  const isAvailable = artwork.status === 'available' && (artwork.quantity || 0) > 0;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Artwork Image with Lightbox */}
        <div className="relative group">
          <div className="bg-white p-6 shadow-sm">
            {/* Badge de descuento si aplica */}
            {artwork.hasDiscount && artwork.discountPercentage && (
              <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-2 text-sm font-bold uppercase tracking-wide z-10 shadow-lg">
                {artwork.discountPercentage}% DESCUENTO
              </div>
            )}
            
            {/* Badge de estado si no está disponible */}
            {!isAvailable && (
              <div className="absolute top-2 right-2 bg-black text-white px-3 py-2 text-sm font-bold uppercase tracking-wide z-10">
                {artwork.status === 'sold' ? 'VENDIDO' : 
                 artwork.status === 'reserved' ? 'RESERVADO' : 
                 artwork.status === 'on_hold' ? 'EN ESPERA' : 'NO DISPONIBLE'}
              </div>
            )}
            
            <ArtworkLightbox
              artwork={artwork}
              additionalImages={additionalImages}
            />
          </div>
        </div>

        {/* Artwork Details */}
        <div className="flex flex-col space-y-6">
          <div>
            <Link href="/collections" className="text-sm text-gray-500 hover:text-black transition-colors">
              Collections
            </Link>
            <span className="text-sm text-gray-500 mx-2">/</span>
            <Link href={`/collections/${artwork.type?.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-gray-500 hover:text-black transition-colors">
              {artwork.type}
            </Link>
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-serif tracking-wide mb-2">
              {artwork.title}
            </h1>
            
            {/* Sistema de precios con descuento */}
            {artwork.hasDiscount && artwork.originalPrice && artwork.discountedPrice ? (
              <div className="space-y-1">
                <p className="text-lg text-gray-400 line-through">{artwork.originalPrice}</p>
                <p className="text-2xl font-bold text-red-600">{artwork.discountedPrice}</p>
                <p className="text-sm text-green-600 font-medium">
                  ¡Ahorras {artwork.originalPrice.replace('$', '')} - {artwork.discountedPrice.replace('$', '')} = $150,000!
                </p>
              </div>
            ) : (
              <p className="text-xl font-medium">{artwork.price}</p>
            )}

            {/* Estado de disponibilidad */}
            <div className="mt-2">
              {isAvailable ? (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600 font-medium">Disponible</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-red-600 font-medium">
                    {artwork.status === 'sold' ? 'Vendido' : 
                     artwork.status === 'reserved' ? 'Reservado' : 
                     artwork.status === 'on_hold' ? 'En espera' : 'No disponible'}
                  </span>
                  {artwork.soldDate && artwork.status === 'sold' && (
                    <span className="text-xs text-gray-500">
                      ({artwork.soldDate.toLocaleDateString('es-ES')})
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h2 className="font-medium text-lg mb-2">Detalles</h2>
              <ul className="space-y-2 text-sm">
                <li><span className="font-medium">Tamaño:</span> {artwork.size}</li>
                <li><span className="font-medium">Tipo:</span> {artwork.type}</li>
                <li><span className="font-medium">Edición:</span> 
                  {artwork.type?.includes('Original') ? 'Original' : 
                   artwork.type?.includes('Limited') ? `Edición Limitada (${artwork.quantity}/${artwork.maxQuantity})` : 
                   'Original'}
                </li>
                <li><span className="font-medium">Estado:</span> 
                  {isAvailable ? 'Disponible' : 
                   artwork.status === 'sold' ? 'Vendido' : 
                   artwork.status === 'reserved' ? 'Reservado' : 
                   artwork.status === 'on_hold' ? 'En espera' : 'No disponible'}
                </li>
                <li><span className="font-medium">Tema:</span> Arte Contemporáneo</li>
              </ul>
            </div>

            <p className="text-sm">
              Esta obra única {artwork.type?.toLowerCase()} de Jhony Casierra captura la energía y la atmósfera del paisaje urbano con pinceladas dinámicas y colores vibrantes.
              Cada pieza está firmada personalmente por el artista.
            </p>

            <div className="flex flex-col space-y-4 mt-4">
              {isAvailable ? (
                <AddToCartButton artwork={artwork} />
              ) : (
                <div className="space-y-2">
                  <button 
                    disabled 
                    className="w-full bg-gray-300 text-gray-500 py-3 px-6 font-medium cursor-not-allowed"
                  >
                    {artwork.status === 'sold' ? 'OBRA VENDIDA' : 
                     artwork.status === 'reserved' ? 'OBRA RESERVADA' : 
                     artwork.status === 'on_hold' ? 'EN ESPERA' : 'NO DISPONIBLE'}
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    Esta obra no está disponible para compra en este momento
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-serif mb-4">Acerca de esta obra de arte</h2>
        <div className="prose max-w-none">
          <p>
            El estilo distintivo de Jhony Casierra captura la atmósfera y el estado de ánimo de los paisajes urbanos.
            Esta pieza en particular, "{artwork.title}", demuestra su capacidad para transmitir la energía y la vitalidad de la vida urbana a través de su singular enfoque en la pintura contemporánea de paisajes urbanos.
          </p>
          <p>
            Utilizando una variedad de técnicas, como óleos, acrílicos y metales, Jhony crea obras de arte visualmente impactantes y evocadoras. Su técnica de húmedo sobre húmedo le permite crear piezas con una sensación de movimiento y vida, capturando a la perfección la naturaleza dinámica de los entornos urbanos.
          </p>
          <p>
            Cada obra cuenta con un acabado profesional y se entrega lista para colgar.
            Todas las pinturas originales están firmadas por Jhony, lo que convierte cada pieza en una pieza única de colección.
          </p>
          
          {/* Información adicional sobre descuentos */}
          {artwork.hasDiscount && (
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg mt-4">
              <h3 className="font-bold text-red-800 mb-2">🔥 Oferta Especial</h3>
              <p className="text-red-700">
                Esta obra está actualmente en promoción con un <strong>{artwork.discountPercentage}% de descuento</strong>. 
                Una oportunidad única para adquirir arte original de Jhony Casierra a un precio especial.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Related Artworks - Solo mostrar obras disponibles */}
      {relatedArtworks.filter(item => item.status === 'available').length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl md:text-2xl font-serif text-center mb-8">
            También deberías ver
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedArtworks
              .filter(item => item.status === 'available')
              .slice(0, 4)
              .map((item) => (
              <Link
                key={item.id}
                href={`/artwork/${item.slug}`}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden bg-white p-3">
                  {/* Badge de descuento en obras relacionadas */}
                  {item.hasDiscount && item.discountPercentage && (
                    <div className="absolute top-1 left-1 bg-red-600 text-white px-1 py-0.5 text-xs font-bold uppercase z-10">
                      {item.discountPercentage}%
                    </div>
                  )}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-sm font-medium truncate">{item.title}</h3>
                  {item.hasDiscount && item.originalPrice && item.discountedPrice ? (
                    <div className="space-y-0.5">
                      <p className="text-xs text-gray-400 line-through">{item.originalPrice}</p>
                      <p className="text-sm text-red-600 font-bold">{item.discountedPrice}</p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">{item.price}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}