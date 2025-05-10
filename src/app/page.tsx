import AnimatedHeroBanner from "@/components/home/AnimatedHeroBanner";
import AnimatedArtworkGrid from "@/components/artwork/AnimatedArtworkGrid";
import CollectionsSection from "@/components/home/CollectionsSection";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { featuredArtwork, studioWorks, limitedEditionPrints, collections } from "@/data/artwork";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import HeroCarousel from '@/components/home/HeroCarousel';
import { motion } from "framer-motion";


const collections = [
  {
    id: "1",
    title: "LONDON",
    image: "/images/artwork1.jpeg",
    link: "/collections/london",
  },
  {
    id: "2",
    title: "NEW YORK",
    image: "/images/artwork2.jpeg",
    link: "/collections/new-york",
  },
  {
    id: "1",
    title: "LONDON",
    image: "/images/artwork1.jpeg",
    link: "/collections/london",
  },
  {
    id: "2",
    title: "NEW YORK",
    image: "/images/artwork2.jpeg",
    link: "/collections/new-york",
  },
  {
    id: "1",
    title: "LONDON",
    image: "/images/artwork1.jpeg",
    link: "/collections/london",
  },
  {
    id: "2",
    title: "NEW YORK",
    image: "/images/artwork2.jpeg",
    link: "/collections/new-york",
  },
  
];
export default function Home() {
  // Datos de los slides definidos localmente
  const heroSlides = [
    {
      imageUrl: "/images/hero_1.png",
      //ctaButtons: [
        //{ text: "COMPRAR PINTURAS ORIGINALES", link: "/buy-original" },
        //{ text: "COMPRAR PINTURAS DE EDICION LIMITADA", link: "/buy-prints" },
      },];
   // },
    //{
      //imageUrl: "/images/hero_1.png", // Asegúrate de que estas imágenes existan
      //title: "Arte que inspira",
      //subtitle: "Descubre nuestra colección de obras originales",
      //ctaButtons: [
        //{ text: "COMPRAR PINTURAS ORIGINALES", link: "/buy-original" },
        //{ text: "COMPRAR PINTURAS DE EDICION LIMITADA", link: "/buy-prints" },
      //],
    //},
    //{
      //imageUrl: "/images/hero_1.png", // Asegúrate de que estas imágenes existan
      //ctaButtons: [
        //{ text: "COMPRAR PINTURAS ORIGINALES", link: "/buy-original" },
        //{ text: "COMPRAR PINTURAS DE EDICION LIMITADA", link: "/buy-prints" },
      //],
    //},
  //];
  return (
    <div>
       {/* Hero Banner Carousel */}
       <HeroCarousel slides={heroSlides} autoplay={true} autoplayDelay={7000} />

      {/* Resto de tu contenido */}
      {/* ... */}

      {/* Hero Banner 
      <AnimatedHeroBanner
        imageUrl="/images/hero.jpeg"
        ctaButtons={[
          { text: "COMPRAR PINTURAS ORIGINALES", link: "/buy-original" },
          { text: "COMPRAR PINTURAS DE EDICION LIMITADA", link: "/buy-prints" },
        ]}
      />*/}

     {/* Free Shipping Ticker con botones CTA */}
     <div className="bg-[#333334] text-white py-3">
        <div className="container mx-auto px-4">
          
          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-2">
            <Link 
              href="/buy-original" 
              className="bg-white text-[#333334] text-xs sm:text-sm px-4 py-2 font-medium hover:bg-gray-100 transition-colors"
            >
              COMPRAR PINTURAS ORIGINALES
            </Link>
            <Link 
              href="/buy-prints" 
              className="bg-white text-[#333334] text-xs sm:text-sm px-4 py-2 font-medium hover:bg-gray-100 transition-colors"
            >
              COMPRAR PINTURAS DE EDICION LIMITADA
            </Link>
          </div>
        </div>
      </div>

      
      

    {/* About Paul Section */}
    <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="uppercase font-serif text-lg italic text-center mb-6 border-b border-gray-300 pb-2">
              ¿Por que pinto?
            </h2>
          </AnimatedSection>
            <AnimatedSection>
              <p className="text-center mb-4">
              Cuando pinto, no busco la perfección. De hecho, me gusta que en mis cuadros se noten los errores, los detalles que no siguen ninguna regla. A través de mi arte quiero mostrar que los seres humanos no somos perfectos, y que en nuestra imperfección también hay belleza.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-center mb-6">
              Pinto para recordar —y recordarme— que lo auténtico, lo real, lo que a veces parece un “fallo”, también tiene valor. La imperfección no solo nos hace humanos, también nos hace únicos.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Artwork Section */}
      <AnimatedArtworkGrid
        title="OBRAS DESTACADAS"
        artworks={featuredArtwork}
        showMoreLink="/artworks"
      />

      {/* Studio Works Section */}
      <AnimatedArtworkGrid
        title="GRANDES OBRAS"
        artworks={studioWorks}
        showMoreLink="/studio-works"
        className="bg-[#f7f7f7]"
      />

      {/* Limited Edition Prints Section */}
      <AnimatedArtworkGrid
        title="IMPRESIONES EDICION LIMITADA"
        artworks={limitedEditionPrints}
        showMoreLink="/limited-edition-prints"
        className="bg-[#e6e6e6]"
      />

      {/* About Paul Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="text-center mb-4">
              Jhony Casierra es un artista contemporáneo con sede en Colombia, reconocido por su estilo de pintura distintivo que captura la energía única de ciudades alrededor del mundo a través de obras en acero, aluminio y lienzo. Su enfoque pictórico, diverso y expresivo, busca capturar la esencia y el ambiente de una escena, más que simplemente documentar su apariencia.

              Su distintiva técnica de “húmedo sobre húmedo” le permite crear piezas atmosféricas y texturizadas que se han convertido en su sello característico, reflejando el movimiento y la energía de sus sujetos. Puedes adquirir las obras originales de Paul directamente desde el sitio utilizando los siguientes enlaces.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-center mb-6">
              Su distintiva técnica de “húmedo sobre húmedo” le permite crear piezas atmosféricas y con textura que se han convertido en su estilo característico, reflejando el movimiento y la energía de sus sujetos. Puedes adquirir las obras originales de Paul directamente desde el sitio utilizando los siguientes enlaces.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/original-artworks" className="pk-read-more">PINTURAS ORIGINALES</Link>
                <Link href="/limited-edition-prints" className="pk-read-more">EDICIONES LIMITADAS IMPRESAS</Link>
                <Link href="/print-collection-sets" className="pk-read-more">CONJUNTO DE COLECCION DE IMPRESIONES</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <CollectionsSection
        title="COLECCIONES"
        collections={collections}
        showNavigation={true}
      />

      {/* Latest Updates Section */}
      <section className="py-8 bg-[#f7f7f7]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="uppercase font-serif text-lg italic text-center mb-6 border-b border-gray-300 pb-2">
              Ultimas actualizaciones de Jhony
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Timepieces Section */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="bg-white p-6 shadow-sm">
                <h3 className="font-serif text-lg mb-4">Relojes Jhony Casierra a medida</h3>
                <p className="text-sm text-gray-600 mb-4">PAUL KENTON REÚNE UNA SERIE DE ESFERAS DE RELOJ PARA CREAR RELOJES PERSONALIZADOS.</p>
                <p className="text-sm text-gray-600 mb-4">
                En una colaboración exclusiva, Jowissa Watchmakers (fundada en 1951) se asoció con Paul para crear dos colecciones de edición limitada de relojes distintivos, pintados a mano y fabricados en Suiza.
                </p>
                <Link href="/timepieces" className="pk-read-more mt-2">LEER MAS</Link>
              </div>
            </AnimatedSection>

            {/* Print Collection Sets */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-white p-6 shadow-sm">
                <h3 className="font-serif text-lg mb-4">Conjuntos de colección de impresiones de 3 piezas</h3>
                <p className="text-sm text-gray-600 mb-4">UNA GRAN OPCIÓN PARA EXHIBIR UNA NUEVA SERIE DE IMPRESIONES DE EDICIÓN LIMITADA.</p>
                <p className="text-sm text-gray-600 mb-4">
                Disponemos de una variedad de sets enmarcados que ejemplifican a la perfección los diferentes temas. Paul se inspira en lugares como Londres, París, Venecia, Nueva York y otros lugares para su icónica colección de grabados.
                </p>
                <Link href="/print-sets" className="pk-read-more mt-2">LEER MAS</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
