import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import {
  featuredArtwork,
  studioWorks,
  limitedEditionPrints
} from "@/data/artwork";
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

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Artwork Image with Lightbox */}
        <div className="relative group">
          <div className="bg-white p-6 shadow-sm">
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
            <p className="text-xl font-medium">{artwork.price}</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h2 className="font-medium text-lg mb-2">Detalles</h2>
              <ul className="space-y-2 text-sm">
                <li><span className="font-medium">Tamaño:</span> {artwork.size}</li>
                <li><span className="font-medium">Tipo:</span> {artwork.type}</li>
                <li><span className="font-medium">Edición:</span> Original</li>
                <li><span className="font-medium">Tema:</span> Arte Colonial</li>
              </ul>
            </div>

            <p className="text-sm">
              Esta obra única {artwork.type?.toLowerCase()} de Jhony Casierra captura la energía y la atmósfera del paisaje urbano con pinceladas dinámicas y colores vibrantes.
              Cada pieza está firmada personalmente por el artista.
            </p>

            <div className="flex flex-col space-y-4 mt-4">
              <AddToCartButton artwork={artwork} />
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-serif mb-4">Acerca de esta obra de arte</h2>
        <div className="prose max-w-none">
          <p>
            El estilo distintivo de Paul Kenton captura la atmósfera y el estado de ánimo de los paisajes urbanos.
            Esta pieza en particular,  "{artwork.title}", demuestra su capacidad para transmitir la energía y la vitalidad de la vida urbana a través de su singular enfoque en la pintura contemporánea de paisajes urbanos.
          </p>
          <p>
            Utilizando una variedad de técnicas, como óleos, acrílicos y metales, Paul crea obras de arte visualmente impactantes y evocadoras. Su técnica de húmedo sobre húmedo le permite crear piezas con una sensación de movimiento y vida, capturando a la perfección la naturaleza dinámica de los entornos urbanos.
          </p>
          <p>
          Cada obra cuenta con un acabado profesional y se entrega lista para colgar.
          Todas las pinturas originales están firmadas por Paul, lo que convierte cada pieza en una pieza única de colección.
          </p>
        </div>
      </div>

      {/* Related Artworks */}
      {relatedArtworks.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl md:text-2xl font-serif text-center mb-8">
            Tambien deberias ver
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedArtworks.map((item) => (
              <Link
                key={item.id}
                href={`/artwork/${item.slug}`}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden bg-white p-3">
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
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
