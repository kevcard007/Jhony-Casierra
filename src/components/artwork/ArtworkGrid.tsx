import React from "react";
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
}

interface ArtworkGridProps {
  title: string;
  artworks: Artwork[];
  showMoreLink?: string;
  showMoreText?: string;
  className?: string;
}

export default function ArtworkGrid({
  title,
  artworks,
  showMoreLink = "#",
  showMoreText = "MOSTRAR MÁS PIEZAS",
  className = "",
}: ArtworkGridProps) {
  return (
    <section className={`py-8 md:py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="uppercase text-center font-serif text-xl md:text-2xl tracking-wider mb-8">
          {title}
        </h2>

        <div className="artwork-grid">
          {artworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              id={artwork.id}
              title={artwork.title}
              image={artwork.image}
              price={artwork.price}
              size={artwork.size}
              type={artwork.type}
              slug={artwork.slug}
            />
          ))}
        </div>

        {showMoreLink && (
          <div className="flex justify-center mt-8">
            <Link href={showMoreLink} className="pk-read-more">
              {showMoreText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
