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
              <h2 className="font-medium text-lg mb-2">Details</h2>
              <ul className="space-y-2 text-sm">
                <li><span className="font-medium">Size:</span> {artwork.size}</li>
                <li><span className="font-medium">Type:</span> {artwork.type}</li>
                <li><span className="font-medium">Edition:</span> Original</li>
                <li><span className="font-medium">Subject:</span> Cityscape</li>
              </ul>
            </div>

            <p className="text-sm">
              This unique {artwork.type?.toLowerCase()} piece by Paul Kenton captures the
              energy and atmosphere of the urban landscape with dynamic brushstrokes and vibrant colors.
              Each piece is personally signed by the artist.
            </p>

            <div className="flex flex-col space-y-4 mt-4">
              <AddToCartButton artwork={artwork} />
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-serif mb-4">About This Artwork</h2>
        <div className="prose max-w-none">
          <p>
            Paul Kenton's distinctive style captures the mood and atmosphere of urban landscapes.
            This particular piece, "{artwork.title}", showcases his ability to convey the energy
            and vibrancy of city life through his unique approach to contemporary cityscape painting.
          </p>
          <p>
            Using a variety of media including oils, acrylics, and metals, Paul creates artworks
            that are both visually striking and emotionally evocative. His wet-on-wet technique
            allows him to create pieces with a sense of movement and life, perfectly capturing
            the dynamic nature of urban environments.
          </p>
          <p>
            Each artwork is completed with a professional finish and comes ready to hang.
            All original paintings are signed by Paul, making each piece a unique collector's item.
          </p>
        </div>
      </div>

      {/* Related Artworks */}
      {relatedArtworks.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl md:text-2xl font-serif text-center mb-8">
            You May Also Like
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
