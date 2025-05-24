import { featuredArtwork, studioWorks, limitedEditionPrints } from "@/data/artwork";
import ArtworkGrid from "@/components/artwork/ArtworkGrid";

export default function GaleriaPage() {
  // Combinar todas las obras
  const allArtworks = [...featuredArtwork, ...studioWorks, ...limitedEditionPrints];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl md:text-5xl mb-6 tracking-wider">
            GALERÍA COMPLETA
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explora toda la colección de obras de Jhony Casierra. 
            Desde originales únicos hasta ediciones limitadas.
          </p>
        </div>
      </section>

      {/* Galería con filtros */}
      <ArtworkGrid
        title="TODAS LAS OBRAS"
        artworks={allArtworks}
        showFilters={true}
        className="bg-white"
      />

      {/* Secciones separadas */}
      <ArtworkGrid
        title="OBRAS DESTACADAS"
        artworks={featuredArtwork}
        showFilters={true}
        className="bg-gray-50"
      />

      <ArtworkGrid
        title="STUDIO WORKS"
        artworks={studioWorks}
        showFilters={true}
        className="bg-white"
      />

      <ArtworkGrid
        title="EDICIONES LIMITADAS"
        artworks={limitedEditionPrints}
        showFilters={true}
        className="bg-gray-50"
      />
    </div>
  );
}