import { featuredArtwork, studioWorks, limitedEditionPrints } from "@/data/artwork";
import ArtworkGrid from "@/components/artwork/ArtworkGrid";

export default function GaleriaPage() {
  // Combinar todas las obras
  const allArtworks = [...featuredArtwork, ...studioWorks, ...limitedEditionPrints];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#1a1a1a] border-b border-[#374151]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl md:text-5xl mb-6 tracking-wider text-[#fbbf24]">
            GALERÍA COMPLETA
          </h1>
          <p className="text-[#d1d5db] max-w-2xl mx-auto text-lg leading-relaxed">
            Explora toda la colección de obras de Jhony Casierra. 
            Desde originales únicos hasta ediciones limitadas.
          </p>
        </div>
      </section>

      {/* Galería con filtros */}
      <div className="bg-[#0a0a0a]">
        <ArtworkGrid
          title="TODAS LAS OBRAS"
          artworks={allArtworks}
          showFilters={true}
          className="bg-[#0a0a0a]"
        />
      </div>

      {/* Secciones separadas */}
      <div className="bg-[#1a1a1a]">
        <ArtworkGrid
          title="OBRAS DESTACADAS"
          artworks={featuredArtwork}
          showFilters={true}
          className="bg-[#1a1a1a]"
        />
      </div>

      <div className="bg-[#0a0a0a]">
        <ArtworkGrid
          title="STUDIO WORKS"
          artworks={studioWorks}
          showFilters={true}
          className="bg-[#0a0a0a]"
        />
      </div>

      <div className="bg-[#1a1a1a]">
        <ArtworkGrid
          title="EDICIONES LIMITADAS"
          artworks={limitedEditionPrints}
          showFilters={true}
          className="bg-[#1a1a1a]"
        />
      </div>
    </div>
  );
}