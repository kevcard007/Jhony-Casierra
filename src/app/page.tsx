import type { Metadata } from 'next'
import AnimatedHeroBanner from "@/components/home/AnimatedHeroBanner";
import CollectionsSection from "@/components/home/CollectionsSection";
import AnimatedSection from "@/components/animations/AnimatedSection";
// Actualizar la importación para usar la nueva estructura con sistema de ventas
import { featuredArtwork, studioWorks, limitedEditionPrints, collections } from "@/data/artwork";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import HeroCarousel from '@/components/home/HeroCarousel';
import { motion } from "framer-motion";
// Importar el AnimatedArtworkGrid que mantiene las animaciones CON el sistema de ventas
import AnimatedArtworkGrid from "@/components/artwork/AnimatedArtworkGrid";

// SEO Metadata
export const metadata: Metadata = {
  title: 'Jhony Casierra - Arte Contemporáneo Colombiano | Obras Originales',
  description: 'Descubre las obras originales de Jhony Casierra, artista contemporáneo colombiano. Pinturas únicas con técnica húmedo sobre húmedo. Arte urbano y paisajes expresivos.',
  keywords: [
    'arte contemporáneo',
    'pintura colombiana', 
    'Jhony Casierra',
    'obras originales',
    'arte urbano',
    'técnica húmedo sobre húmedo',
    'pintura expresiva',
    'artista colombiano',
    'arte Buga',
    'paisajes urbanos'
  ],
  authors: [{ name: 'Jhony Casierra', url: 'https://jhonycasierra.com' }],
  creator: 'Jhony Casierra',
  publisher: 'Jhony Casierra Art Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jhonycasierra.com'), // Cambiar por tu dominio real
  alternates: {
    canonical: '/',
    languages: {
      'es-CO': '/',
      'es': '/',
    },
  },
  openGraph: {
    title: 'Jhony Casierra - Arte Contemporáneo Colombiano',
    description: 'Obras originales de arte contemporáneo. Técnica única húmedo sobre húmedo. Artista colombiano con base en Buga.',
    url: 'https://jhonycasierra.com',
    siteName: 'Jhony Casierra Art',
    images: [
      {
        url: '/images/og-image.jpg', // Crearemos esta imagen
        width: 1200,
        height: 630,
        alt: 'Obra de arte de Jhony Casierra',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jhony Casierra - Arte Contemporáneo Colombiano',
    description: 'Obras originales de arte contemporáneo con técnica húmedo sobre húmedo',
    images: ['/images/og-image.jpg'],
    creator: '@jhonycasierra', // Si tienes Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Lo configuraremos después
  },
}

// Collecciones locales (renombradas para evitar conflicto)
const localCollections = [
  {
    id: "1",
    title: "INTROVERTIDO",
    image: "/images/jhonycollection.png",
    link: "/collections",
  },
  
];

export default function Home() {
  // Datos de los slides definidos localmente
  const heroSlides = [
    {
      imageUrl: "/images/hero_1.jpg",
    },
    // Puedes añadir más slides aquí si quieres
    {
      imageUrl: "/images/hero_2.jpg",  
    },
    {
      imageUrl: "/images/hero_3.jpg",
    },
    {
      imageUrl: "/images/hero_4.jpg",
      //title: "Arte que inspira",
      //subtitle: "Descubre nuestra colección de obras originales",
    },
    {
      imageUrl: "/images/hero_5.jpg",

    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Banner Carousel */}
      <HeroCarousel slides={heroSlides} autoplay={true} autoplayDelay={7000} />

      {/* Free Shipping Ticker con botones CTA - Dark Theme */}
      <div className="bg-[#1a1a1a] text-white py-3 border-t border-[#374151]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-2">
            <Link 
              href="/galeria" 
              className="bg-[#fbbf24] text-[#0a0a0a] text-xs sm:text-sm px-4 py-2 font-medium hover:bg-[#f59e0b] transition-colors uppercase tracking-wide"
            >
              COMPRAR PINTURAS ORIGINALES
            </Link>
            <Link 
              href="/galeria" 
              className="bg-white text-[#0a0a0a] text-xs sm:text-sm px-4 py-2 font-medium hover:bg-[#d1d5db] transition-colors uppercase tracking-wide"
            >
              COMPRAR PINTURAS DE EDICION LIMITADA
            </Link>
          </div>
        </div>
      </div>

      {/* Frase Cursiva Destacada */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
                  <div className="w-16 h-px bg-[#fbbf24]"></div>
                </div>
                <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif italic text-white leading-relaxed tracking-wide px-4">
                  "Si buscas la perfección, estás en el lugar equivocado."
                </p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6">
                  <div className="w-16 h-px bg-[#fbbf24]"></div>
                </div>
              </blockquote>
              <cite className="block mt-12 text-[#fbbf24] font-medium uppercase tracking-wider text-sm">
                — Jhony Casierra —
              </cite>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Paul Section - Dark */}
      <section className="py-12 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="uppercase font-serif text-lg italic text-center mb-6 border-b border-[#374151] pb-2 text-[#fbbf24]">
                ¿Por qué pinto?
              </h2>
            </AnimatedSection>
            <AnimatedSection>
              <p className="text-center mb-4 text-[#d1d5db] leading-relaxed">
                Cuando pinto, no busco la perfección. De hecho, me gusta que en mis cuadros se noten los errores, los detalles que no siguen ninguna regla. A través de mi arte quiero mostrar que los seres humanos no somos perfectos, y que en nuestra imperfección también hay belleza.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-center mb-6 text-[#d1d5db] leading-relaxed">
                Pinto para recordar —y recordarme— que lo auténtico, lo real, lo que a veces parece un "fallo", también tiene valor. La imperfección no solo nos hace humanos, también nos hace únicos.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Artwork Section - ACTUALIZADO CON SISTEMA DE VENTAS */}
      <div className="bg-[#0a0a0a] ">
        <AnimatedArtworkGrid
          title="OBRAS DESTACADAS"
          artworks={featuredArtwork}
          showOnlyAvailable={true} // Solo mostrar obras disponibles en la página principal
          showMoreLink="/galeria"
          showMoreText="VER TODAS LAS OBRAS"
        />
      </div>

      {/* Studio Works Section - ACTUALIZADO CON SISTEMA DE VENTAS */}
      {/*<div className="bg-[#1a1a1a]">
        <AnimatedArtworkGrid
          title="GRANDES OBRAS"
          artworks={studioWorks}
          showOnlyAvailable={true} // Solo mostrar obras disponibles
          showMoreLink="/galeria"
          showMoreText="VER TODAS LAS GRANDES OBRAS"
          className="bg-[#1a1a1a]"
        />
      </div>*/}

      {/* Limited Edition Prints Section - ACTUALIZADO CON SISTEMA DE VENTAS */}
      <div className="bg-[#0a0a0a]">
        <AnimatedArtworkGrid
          title="OBRAS DE ARTE ORIGINALES Y EDICIONES LIMITADAS"
          artworks={limitedEditionPrints}
          showOnlyAvailable={true} // Solo mostrar prints disponibles
          showMoreLink="/galeria"
          showMoreText="VER TODAS LAS EDICIONES LIMITADAS"
          className="bg-[#0a0a0a]"
        />
      </div>

      {/* About Paul Section - Dark */}
      <section className="py-12 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="text-center mb-4 text-[#d1d5db] leading-relaxed">
                Jhony Casierra es un artista contemporáneo con sede en Colombia, reconocido por su estilo de pintura distintivo que captura la energía única de ciudades alrededor del mundo a través de obras en acero, aluminio y lienzo. Su enfoque pictórico, diverso y expresivo, busca capturar la esencia y el ambiente de una escena, más que simplemente documentar su apariencia.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-center mb-6 text-[#d1d5db] leading-relaxed">
                Su distintiva técnica de "húmedo sobre húmedo" le permite crear piezas atmosféricas y con textura que se han convertido en su estilo característico, reflejando el movimiento y la energía de sus sujetos. Puedes adquirir las obras originales directamente desde el sitio utilizando los siguientes enlaces.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/galeria" className="pk-read-more bg-[#fbbf24] text-[#0a0a0a] hover:bg-[#f59e0b] px-6 py-3 uppercase tracking-wide font-medium transition-colors">PINTURAS ORIGINALES</Link>
                <Link href="/galeria" className="pk-read-more bg-white text-[#0a0a0a] hover:bg-[#d1d5db] px-6 py-3 uppercase tracking-wide font-medium transition-colors">EDICIONES LIMITADAS IMPRESAS</Link>
                <Link href="/galeria" className="pk-read-more border border-[#374151] text-white hover:bg-[#2a2a2a] px-6 py-3 uppercase tracking-wide font-medium transition-colors">CONJUNTO DE COLECCIÓN</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Collections Section - Dark */}
      <div className="bg-[#0a0a0a]">
        <CollectionsSection
          title="COLECCIONES"
          collections={localCollections}
          showNavigation={true}
        />
      </div>

      {/* Latest Updates Section - Dark */}
      <section className="py-8 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="uppercase font-serif text-lg italic text-center mb-6 border-b border-[#374151] pb-2 text-[#fbbf24]">
              Últimas actualizaciones de Jhony
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certificado de Originalidad Section */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="bg-[#2a2a2a] p-6 border border-[#374151]">
                <h3 className="font-serif text-lg mb-4 text-white">Certificado de Originalidad</h3>
                <p className="text-sm text-[#9ca3af] mb-4 uppercase tracking-wide">CADA OBRA INCLUYE CERTIFICADO DE AUTENTICIDAD CON SELLO DEL ARTISTA.</p>
                <p className="text-sm text-[#d1d5db] mb-4 leading-relaxed">
                  Todas nuestras obras originales y ediciones limitadas incluyen un certificado de originalidad firmado y sellado por Jhony Casierra. Este documento garantiza la autenticidad de la pieza y su procedencia directa del estudio del artista.
                </p>
                <Link href="/certificado-originalidad" className="inline-block bg-[#fbbf24] text-[#0a0a0a] px-4 py-2 text-sm font-medium hover:bg-[#f59e0b] transition-colors uppercase tracking-wide">LEER MÁS</Link>
              </div>
            </AnimatedSection>

            {/* Print Collection Sets */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-[#2a2a2a] p-6 border border-[#374151]">
                <h3 className="font-serif text-lg mb-4 text-white">Colección de obras originales selectas</h3>
                <p className="text-sm text-[#9ca3af] mb-4 uppercase tracking-wide">UNA OPORTUNIDAD ÚNICA PARA DESCUBRIR NUESTRA NUEVA SERIE DE CREACIONES EXCLUSIVAS.</p>
                <p className="text-sm text-[#d1d5db] mb-4 leading-relaxed">
                  Disponemos de una variedad de obras enmarcadas que ejemplifican a la perfección los diferentes temas. Jhony se inspira en lugares rodeados de naturaleza y paisajes fascinantes en su tierra natal para su icónica colección de arte original. 
                </p>
                <Link href="/galeria" className="inline-block bg-[#fbbf24] text-[#0a0a0a] px-4 py-2 text-sm font-medium hover:bg-[#f59e0b] transition-colors uppercase tracking-wide">LEER MÁS</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}