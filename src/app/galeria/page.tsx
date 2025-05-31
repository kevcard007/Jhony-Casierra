import type { Metadata } from 'next'
import { featuredArtwork, studioWorks, limitedEditionPrints } from "@/data/artwork";
import ArtworkGrid from "@/components/artwork/ArtworkGrid";

// SEO Metadata para Galería
export const metadata: Metadata = {
  title: 'Galería de Arte - Jhony Casierra | Obras Originales y Ediciones Limitadas',
  description: 'Explora la galería completa de Jhony Casierra: obras destacadas, studio works y ediciones limitadas. Arte contemporáneo colombiano con técnica húmedo sobre húmedo.',
  keywords: [
    'galería arte Jhony Casierra',
    'obras originales colombianas',
    'ediciones limitadas arte',
    'studio works pintura',
    'arte contemporáneo galería',
    'comprar arte original Colombia',
    'técnica húmedo sobre húmedo',
    'pinturas disponibles venta',
    'galería virtual arte',
    'colección completa artista',
    'obras destacadas Jhony Casierra',
    'arte Valle del Cauca',
    'pintura expresiva Colombia',
    'galería online arte contemporáneo'
  ],
  authors: [{ name: 'Jhony Casierra', url: 'https://jhonycasierra.com' }],
  metadataBase: new URL('https://jhonycasierra.com'),
  alternates: {
    canonical: '/galeria',
  },
  openGraph: {
    title: 'Galería de Arte - Jhony Casierra | Obras Originales Disponibles',
    description: 'Descubre la colección completa de Jhony Casierra: obras destacadas, studio works y ediciones limitadas. Arte contemporáneo colombiano único.',
    url: 'https://jhonycasierra.com/galeria',
    siteName: 'Jhony Casierra Art',
    images: [
      {
        url: '/images/galeria-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Galería completa de obras de arte de Jhony Casierra',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galería de Arte - Jhony Casierra',
    description: 'Obras originales, studio works y ediciones limitadas del artista colombiano.',
    images: ['/images/galeria-preview.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Schema.org JSON-LD para la galería
const galeriaSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Galería de Arte Jhony Casierra",
  "description": "Galería completa con obras originales, studio works y ediciones limitadas del artista contemporáneo colombiano Jhony Casierra",
  "url": "https://jhonycasierra.com/galeria",
  "author": {
    "@type": "Person",
    "@id": "https://jhonycasierra.com#artist",
    "name": "Jhony Casierra",
    "jobTitle": "Artista Contemporáneo",
    "nationality": "Colombian",
    "birthPlace": {
      "@type": "Place",
      "name": "Obando, Valle del Cauca, Colombia"
    },
    "workLocation": {
      "@type": "Place",
      "name": "Buga, Valle del Cauca, Colombia"
    },
    "knowsAbout": [
      "Técnica húmedo sobre húmedo",
      "Pintura contemporánea",
      "Arte abstracto",
      "Paisajismo",
      "Bodegones"
    ]
  },
  "mainEntity": [
    {
      "@type": "CreativeWorkSeries",
      "name": "Obras Destacadas",
      "description": "Selección de las obras más representativas del artista",
      "creator": {
        "@type": "Person",
        "name": "Jhony Casierra"
      },
      "artform": "Pintura",
      "artMedium": "Técnica húmedo sobre húmedo"
    },
    {
      "@type": "CreativeWorkSeries", 
      "name": "Studio Works",
      "description": "Obras creadas en el estudio del artista con técnicas experimentales",
      "creator": {
        "@type": "Person",
        "name": "Jhony Casierra"
      },
      "artform": "Pintura",
      "artMedium": "Técnica húmedo sobre húmedo"
    },
    {
      "@type": "CreativeWorkSeries",
      "name": "Ediciones Limitadas",
      "description": "Reproducciones de alta calidad en ediciones numeradas y firmadas",
      "creator": {
        "@type": "Person",
        "name": "Jhony Casierra"
      },
      "artform": "Impresión de Arte",
      "artMedium": "Edición limitada numerada"
    }
  ],
  "offers": {
    "@type": "AggregateOffer",
    "description": "Obras de arte disponibles para venta",
    "seller": {
      "@type": "Person",
      "name": "Jhony Casierra"
    },
    "availability": "https://schema.org/InStock",
    "priceCurrency": "COP"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://jhonycasierra.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Galería",
        "item": "https://jhonycasierra.com/galeria"
      }
    ]
  }
}

export default function GaleriaPage() {
  // Combinar todas las obras
  const allArtworks = [...featuredArtwork, ...studioWorks, ...limitedEditionPrints];

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(galeriaSchema),
        }}
      />
      
      <div className="min-h-screen bg-[#0a0a0a]">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-[#1a1a1a] border-b border-[#374151]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl md:text-5xl mb-6 tracking-wider text-[#fbbf24]">
              Galería Completa de Arte Contemporáneo
            </h1>
            <p className="text-[#d1d5db] max-w-2xl mx-auto text-lg leading-relaxed">
              Explora toda la colección de obras de Jhony Casierra: originales únicos, studio works 
              y ediciones limitadas creadas con la distintiva técnica húmedo sobre húmedo.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#9ca3af]">
              <span className="bg-[#2a2a2a] px-3 py-1 rounded-full border border-[#374151]">
                {featuredArtwork.length} Obras Destacadas
              </span>
              <span className="bg-[#2a2a2a] px-3 py-1 rounded-full border border-[#374151]">
                {studioWorks.length} Studio Works
              </span>
              <span className="bg-[#2a2a2a] px-3 py-1 rounded-full border border-[#374151]">
                {limitedEditionPrints.length} Ediciones Limitadas
              </span>
            </div>
          </div>
        </section>

        {/* Galería completa con filtros */}
        <section aria-labelledby="todas-las-obras">
          <div className="bg-[#0a0a0a]">
            <ArtworkGrid
              title="TODAS LAS OBRAS DISPONIBLES"
              artworks={allArtworks}
              showFilters={true}
              className="bg-[#0a0a0a]"
            />
          </div>
        </section>

        {/* Sección Obras Destacadas */}
        <section aria-labelledby="obras-destacadas">
          <div className="bg-[#1a1a1a]">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center mb-8">
                <h2 id="obras-destacadas" className="font-serif text-2xl md:text-3xl mb-4 tracking-wider text-[#fbbf24]">
                  Obras Destacadas
                </h2>
                <p className="text-[#d1d5db] max-w-xl mx-auto">
                  Selección de las obras más representativas y reconocidas del artista, 
                  que mejor reflejan su evolución y maestría técnica.
                </p>
              </div>
            </div>
            <ArtworkGrid
              title=""
              artworks={featuredArtwork}
              showFilters={true}
              className="bg-[#1a1a1a]"
            />
          </div>
        </section>

        {/* Sección Studio Works */}
        <section aria-labelledby="studio-works">
          <div className="bg-[#0a0a0a]">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center mb-8">
                <h2 id="studio-works" className="font-serif text-2xl md:text-3xl mb-4 tracking-wider text-[#fbbf24]">
                  Studio Works
                </h2>
                <p className="text-[#d1d5db] max-w-xl mx-auto">
                  Obras experimentales creadas en el estudio del artista, donde la creatividad 
                  y la técnica se fusionan para explorar nuevas expresiones artísticas.
                </p>
              </div>
            </div>
            <ArtworkGrid
              title=""
              artworks={studioWorks}
              showFilters={true}
              className="bg-[#0a0a0a]"
            />
          </div>
        </section>

        {/* Sección Ediciones Limitadas */}
        <section aria-labelledby="ediciones-limitadas">
          <div className="bg-[#1a1a1a]">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center mb-8">
                <h2 id="ediciones-limitadas" className="font-serif text-2xl md:text-3xl mb-4 tracking-wider text-[#fbbf24]">
                  Ediciones Limitadas
                </h2>
                <p className="text-[#d1d5db] max-w-xl mx-auto">
                  Reproducciones de alta calidad de obras seleccionadas, numeradas y firmadas 
                  personalmente por el artista. Perfectas para coleccionistas.
                </p>
              </div>
            </div>
            <ArtworkGrid
              title=""
              artworks={limitedEditionPrints}
              showFilters={true}
              className="bg-[#1a1a1a]"
            />
          </div>
        </section>

        {/* Sección informativa adicional */}
        <section className="py-16 bg-[#0a0a0a] border-t border-[#374151]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-[#1a1a1a] p-6 border border-[#374151] hover:border-[#fbbf24] transition-colors duration-300">
                  <div className="w-16 h-16 bg-[#fbbf24] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-medium mb-2 text-lg">Autenticidad Garantizada</h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed">
                    Todas las obras están firmadas y certificadas por el artista. 
                    Incluye certificado de autenticidad.
                  </p>
                </div>
                
                <div className="bg-[#1a1a1a] p-6 border border-[#374151] hover:border-[#fbbf24] transition-colors duration-300">
                  <div className="w-16 h-16 bg-[#fbbf24] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-medium mb-2 text-lg">Variedad de Formatos</h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed">
                    Desde originales únicos hasta ediciones limitadas accesibles. 
                    Diferentes tamaños disponibles.
                  </p>
                </div>
                
                <div className="bg-[#1a1a1a] p-6 border border-[#374151] hover:border-[#fbbf24] transition-colors duration-300">
                  <div className="w-16 h-16 bg-[#fbbf24] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-medium mb-2 text-lg">Asesoría Personalizada</h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed">
                    Consulta directamente con el artista sobre obras, 
                    comisiones personalizadas y asesoría para coleccionistas.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <a 
                  href="/contact"
                  className="inline-flex items-center bg-[#1a1a1a] border border-[#374151] px-8 py-4 text-sm uppercase tracking-wider text-white hover:bg-[#2a2a2a] hover:border-[#fbbf24] hover:text-[#fbbf24] transition-all duration-300 font-medium"
                  aria-label="Contactar para consultas sobre obras de arte"
                >
                  Consultar Disponibilidad y Precios
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}