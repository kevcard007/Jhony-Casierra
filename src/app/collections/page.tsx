import type { Metadata } from 'next'
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { collections } from "@/data/artwork";
import { Separator } from "@/components/ui/separator";

// SEO Metadata para Collections
export const metadata: Metadata = {
  title: 'Colecciones de Arte - Jhony Casierra | Pinturas Contemporáneas Colombianas',
  description: 'Explora las colecciones de arte contemporáneo de Jhony Casierra: bodegones, paisajes, arte abstracto y ciudades. Técnica húmedo sobre húmedo, originales y ediciones limitadas.',
  keywords: [
    'colecciones arte Jhony Casierra',
    'pinturas contemporáneas colombianas',
    'arte bodegones',
    'paisajes artísticos',
    'arte abstracto Colombia',
    'colección ciudades pintura',
    'técnica húmedo sobre húmedo',
    'originales firmados artista',
    'galería arte colombiano',
    'comprar arte Buga Colombia',
    'ediciones limitadas arte',
    'pintura expresiva Valle del Cauca'
  ],
  authors: [{ name: 'Jhony Casierra', url: 'https://jhonycasierra.com' }],
  metadataBase: new URL('https://jhonycasierra.com'),
  alternates: {
    canonical: '/collections',
  },
  openGraph: {
    title: 'Colecciones de Arte - Jhony Casierra | Pinturas Contemporáneas',
    description: 'Descubre las colecciones únicas de Jhony Casierra: bodegones, paisajes, arte abstracto y ciudades. Originales y ediciones limitadas con técnica distintiva.',
    url: 'https://jhonycasierra.com/collections',
    siteName: 'Jhony Casierra Art',
    images: [
      {
        url: '/images/jhonycollection.png',
        width: 1200,
        height: 630,
        alt: 'Colecciones de arte contemporáneo de Jhony Casierra',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colecciones de Arte - Jhony Casierra',
    description: 'Bodegones, paisajes, arte abstracto y más. Descubre las colecciones del artista colombiano.',
    images: ['/images/jhonycollection.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Schema.org JSON-LD para las colecciones
const collectionsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Colecciones de Arte - Jhony Casierra",
  "description": "Colecciones de arte contemporáneo incluyendo bodegones, paisajes, arte abstracto y ciudades",
  "url": "https://jhonycasierra.com/collections",
  "mainEntity": {
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
    }
  },
  "hasPart": [
    {
      "@type": "VisualArtwork",
      "@id": "https://jhonycasierra.com/collections#introvertido",
      "name": "Colección Introvertido",
      "artform": "Pintura",
      "artMedium": "Técnica húmedo sobre húmedo",
      "creator": {
        "@type": "Person",
        "name": "Jhony Casierra"
      },
      "dateCreated": "2024",
      "description": "Selección de pinturas originales y grabados de bodegones"
    },
    {
      "@type": "VisualArtwork", 
      "@id": "https://jhonycasierra.com/collections#landscapes",
      "name": "Landscapes Collection",
      "artform": "Pintura",
      "artMedium": "Técnica húmedo sobre húmedo",
      "creator": {
        "@type": "Person",
        "name": "Jhony Casierra"
      },
      "dateCreated": "2024",
      "description": "Pinturas originales de paisajes"
    },
    {
      "@type": "VisualArtwork",
      "@id": "https://jhonycasierra.com/collections#abstract", 
      "name": "Abstract Collection",
      "artform": "Pintura",
      "artMedium": "Técnica húmedo sobre húmedo",
      "creator": {
        "@type": "Person",
        "name": "Jhony Casierra"
      },
      "dateCreated": "2023",
      "description": "Selección de pinturas originales y grabados de arte abstracto"
    }
  ],
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
        "name": "Colecciones",
        "item": "https://jhonycasierra.com/collections"
      }
    ]
  }
}

export default function CollectionsPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionsSchema),
        }}
      />
      
      <div className="bg-[#0a0a0a] min-h-screen text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="uppercase text-center font-serif text-2xl md:text-3xl tracking-wider mb-4 text-white">
            Colecciones de Arte Contemporáneo
          </h1>
          <Separator className="mb-12 max-w-xs mx-auto bg-gray-700" />

          <div className="grid gap-8 md:gap-12">
            {/* Still Life Collection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="bg-[#1a1a1a] p-4 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
                <Image
                  src="/images/jhonycollection.png"
                  alt="Colección Introvertido - Bodegones de Jhony Casierra"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="space-y-4">
                <h2 className="font-serif italic text-white text-xl md:text-2xl mb-4 tracking-wider">
                  Introvertido
                </h2>
                <p className="text-xs text-gray-400 mb-4">Publicado el 5 de octubre, 2024</p>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  Descubre a continuación una selección de pinturas originales y grabados de bodegones de 
                  Jhony Casierra, creados con su distintiva técnica húmedo sobre húmedo.
                </p>
                <Link 
                  href="/galeria" 
                  className="inline-flex items-center bg-[#1a1a1a] border border-gray-700 px-6 py-3 text-xs uppercase tracking-wider text-white hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-300 font-medium"
                  aria-label="Ver más obras de la colección Introvertido"
                >
                  LEER MAS
                </Link>
              </div>
            </div>

            {/* Landscapes Collection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="md:order-2 bg-[#1a1a1a] p-4 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
                <Image
                  src="/images/abstraccolletion.png"
                  alt="Colección Paisajes - Landscapes Collection de Jhony Casierra"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="md:order-1 space-y-4">
                <h2 className="font-serif italic text-white text-xl md:text-2xl mb-4 tracking-wider">
                  Landscapes Collection
                </h2>
                <p className="text-xs text-gray-400 mb-4">Publicado el 24 de marzo, 2024</p>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  Explora a continuación las pinturas originales de paisajes disponibles de Jhony, 
                  capturando la esencia natural del Valle del Cauca y más allá.
                </p>
                <Link 
                  href="/galeria" 
                  className="inline-flex items-center bg-[#1a1a1a] border border-gray-700 px-6 py-3 text-xs uppercase tracking-wider text-white hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-300 font-medium"
                  aria-label="Ver más obras de la colección Landscapes"
                >
                  LEER MAS
                </Link>
              </div>
            </div>

            {/* Abstract Collection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="bg-[#1a1a1a] p-4 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
                <Image
                  src="/images/carcollection.png"
                  alt="Colección Abstracta - Arte Abstracto de Jhony Casierra"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-4">
                <h2 className="font-serif italic text-white text-xl md:text-2xl mb-4 tracking-wider">
                  Abstract Collection
                </h2>
                <p className="text-xs text-gray-400 mb-4">Publicado el 24 de marzo, 2023</p>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  Descubre a continuación una selección de pinturas originales y grabados de arte abstracto de
                  Jhony Casierra, expresando emociones puras a través del color y la forma.
                </p>
                <Link 
                  href="/galeria" 
                  className="inline-flex items-center bg-[#1a1a1a] border border-gray-700 px-6 py-3 text-xs uppercase tracking-wider text-white hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-300 font-medium"
                  aria-label="Ver más obras de la colección Abstract"
                >
                  LEER MAS
                </Link>
              </div>
            </div>

            {/* City Collections */}
            <div className="mt-12">
              <h2 className="uppercase text-center font-serif text-xl md:text-2xl tracking-wider mb-8 text-white">
                colecciones
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {collections.map((collection) => (
                  <div key={collection.id} className="group">
                    <Link href={collection.link} aria-label={`Ver colección ${collection.title}`}>
                      <div className="relative bg-[#1a1a1a] border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden">
                        <AspectRatio ratio={1}>
                          <Image
                            src={collection.image}
                            alt={`Colección ${collection.title} - Pinturas de ciudades por Jhony Casierra`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-all duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className="text-white uppercase text-sm md:text-base font-medium tracking-wider group-hover:text-amber-400 transition-colors duration-300">
                                {collection.title}
                              </h3>
                            </div>
                          </div>
                        </AspectRatio>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Sección adicional de información */}
            <div className="mt-16 bg-[#1a1a1a] p-8 border border-gray-700">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-serif text-2xl md:text-3xl text-white mb-4 tracking-wider">
                  Acerca de las Colecciones de Jhony Casierra
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Cada colección representa un capítulo único en el viaje artístico de Jhony Casierra. 
                  Desde paisajes urbanos vibrantes hasta abstracciones emotivas, cada obra cuenta una historia 
                  y captura un momento en el tiempo con su distintiva técnica de "húmedo sobre húmedo".
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-white font-medium mb-2">Calidad Premium</h3>
                    <p className="text-gray-400 text-sm">
                      Todas las obras están firmadas personalmente por el artista
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </div>
                    <h3 className="text-white font-medium mb-2">Variedad Única</h3>
                    <p className="text-gray-400 text-sm">
                      Desde originales hasta ediciones limitadas numeradas
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                    </div>
                    <h3 className="text-white font-medium mb-2">Arte Auténtico</h3>
                    <p className="text-gray-400 text-sm">
                      Cada pieza refleja la pasión y técnica del artista colombiano
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}