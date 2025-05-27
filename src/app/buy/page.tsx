import AnimatedHeroBanner from "@/components/home/AnimatedHeroBanner";
import AnimatedArtworkGrid from "@/components/artwork/AnimatedArtworkGrid";
import CollectionsSection from "@/components/home/CollectionsSection";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { featuredArtwork, studioWorks, limitedEditionPrints, collections } from "@/data/artwork";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Featured Artwork Section */}
      <AnimatedArtworkGrid
        title="OBRAS DESTACADAS"
        artworks={featuredArtwork}
        showMoreLink="/artworks"
      />

      {/* Studio Works Section */}
      <AnimatedArtworkGrid
        title="GRANDES OBRAS DE ESTUDIO"
        artworks={studioWorks}
        showMoreLink="/studio-works"
        className="bg-[#1a1a1a]"
      />

      {/* Limited Edition Prints Section */}
      <AnimatedArtworkGrid
        title="IMPRESIONES DE EDICION LIMITADA"
        artworks={limitedEditionPrints}
        showMoreLink="/limited-edition-prints"
        className="bg-[#2a2a2a]"
      />

      {/* About Paul Section */}
      <section className="py-12 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="text-center mb-4 text-gray-300 leading-relaxed">
              Jhony Casierra es un artista contemporáneo con sede en Colombia, reconocido por su estilo de pintura distintivo que captura la energía única de ciudades alrededor del mundo a través de obras en acero, aluminio y lienzo. Su enfoque pictórico, diverso y expresivo, busca capturar la esencia y el ambiente de una escena, más que simplemente documentar su apariencia.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-center mb-6 text-gray-300 leading-relaxed">
              Su distintiva técnica de "húmedo sobre húmedo" le permite crear piezas atmosféricas y con textura que se han convertido en su estilo característico, reflejando el movimiento y la energía de sus sujetos. Puedes adquirir las obras originales de Jhony directamente desde el sitio utilizando los siguientes enlaces.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/original-artworks" 
                  className="px-6 py-3 bg-[#1a1a1a] border border-gray-700 text-white uppercase tracking-wider text-sm hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-200 font-medium"
                >
                  PINTURAS ORIGINALES
                </Link>
                <Link 
                  href="/limited-edition-prints" 
                  className="px-6 py-3 bg-[#1a1a1a] border border-gray-700 text-white uppercase tracking-wider text-sm hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-200 font-medium"
                >
                  EDICIONES LIMITADAS IMPRESAS
                </Link>
                <Link 
                  href="/print-collection-sets" 
                  className="px-6 py-3 bg-[#1a1a1a] border border-gray-700 text-white uppercase tracking-wider text-sm hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-200 font-medium"
                >
                  CONJUNTO DE COLECCION DE IMPRESIONES
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <CollectionsSection
        title="COLECCIONES"
        collections={collections}
      />

      {/* Latest Updates Section */}
      <section className="py-8 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="uppercase font-serif text-lg italic text-center mb-6 border-b border-gray-700 pb-2 text-white">
              Ultimas actualizaciones de Jhony
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Timepieces Section */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="bg-[#2a2a2a] p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
                <h3 className="font-serif text-lg mb-4 text-white">Relojes Jhony Casierra a medida</h3>
                <p className="text-sm text-gray-400 mb-4 uppercase tracking-wide">
                  JHONY CASIERRA REÚNE UNA SERIE DE ESFERAS DE RELOJ PARA CREAR RELOJES PERSONALIZADOS.
                </p>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                En una colaboración exclusiva, Jowissa Watchmakers (fundada en 1951) se asoció con Jhony para crear dos colecciones de edición limitada de relojes distintivos, pintados a mano y fabricados en Suiza.
                </p>
                <Link 
                  href="/timepieces" 
                  className="inline-block px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white uppercase tracking-wider text-xs hover:bg-[#0a0a0a] hover:border-amber-400 hover:text-amber-400 transition-all duration-200 font-medium mt-2"
                >
                  LEER MAS
                </Link>
              </div>
            </AnimatedSection>

            {/* Print Collection Sets */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-[#2a2a2a] p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
                <h3 className="font-serif text-lg mb-4 text-white">Conjuntos de colección de impresiones de 3 piezas</h3>
                <p className="text-sm text-gray-400 mb-4 uppercase tracking-wide">
                  UNA GRAN OPCIÓN PARA EXHIBIR UNA NUEVA SERIE DE IMPRESIONES DE EDICIÓN LIMITADA.
                </p>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                Disponemos de una variedad de sets enmarcados que ejemplifican a la perfección los diferentes temas. Jhony se inspira en lugares como Londres, París, Venecia, Nueva York y otros lugares para su icónica colección de grabados.
                </p>
                <Link 
                  href="/print-sets" 
                  className="inline-block px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white uppercase tracking-wider text-xs hover:bg-[#0a0a0a] hover:border-amber-400 hover:text-amber-400 transition-all duration-200 font-medium mt-2"
                >
                  LEER MAS
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}