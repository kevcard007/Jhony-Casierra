import type { Metadata } from 'next'
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

// Función para generar descripciones dinámicas basadas en la obra
function generateArtworkDescription(artwork: any): string {
  const descriptions: { [key: string]: string } = {
    // Descripciones por título específico
    "ENTROPIA": "Expresando lo que vivimos todos los dias las personas y  lo que vive el planet, el caos y el orden son parte de nuestra vida y sabiendo la 2 ley de la termodinamica es imposible no ocasionar caos mientras existamos",
    
    "ABSTRACTO": "Una exploración profunda de formas y colores que trascienden la realidad, invitando al espectador a sumergirse en un mundo de emociones puras y expresión libre del subconsciente artístico.",
    
    "SIN FUTURO": "Reflexión melancólica sobre la incertidumbre existencial, plasmada con técnicas que evocan la fragilidad del tiempo y la búsqueda de esperanza en momentos de oscuridad.",
    
    "CAOS": "Representación visceral del desorden emocional y social, donde cada pincelada captura la intensidad de sentimientos encontrados y la belleza que emerge del aparente descontrol.",
    
    "FLOR ECLOSIONADA": "Desde pequeño he sentido una gran empatía o conexión con las plantas, esta es una de tantas que veo siempre a la salida de la finca en la que vivo quise expresar lo impetuoso que puede llegar a ser un ser vivo.",
    
    "NO LIBERTAD": "Es un pensamiento intruso y que se ha plantado en mi mente de que siempre creemos de que somos libres pero la realidad es que no, solo nos inventamos una historia para justificar nuestra “libertad”.",
    
    "OBSESION": "Ten mucho cuidado de que tu vida gire alrededor del dinero pues siempre he tenido presente que es lo mas importante pero como todo en esta vida obsesionarse con algo tan basico y sin un valor intrinseco siempre te hara daño  y te hara perder el sentido de la vida.",
    
    "IMPOSICION": "No tengas miedo de salir a conocer el mundo no tengas miedo de incomodarse esa es la mejor terapia. No tengas miedo a la soledad aprende a amarla y abrazarla ella siempre estara para ti. ",

    "OSCURIDAD": "Una obra magica donde sale un auto de un espacio onirico sin  que Nadie lo conduzca algo que veiamos muy lejos y que hoy en dia lo estamos viendo en nuestra relaidad autos conduciendose solos y que nos llevan a lugares que nunca imaginamos.",

    "SOLEDAD": "Un estado por el que todas las personas tenemos que pasar, la idea me nace un día de viaje el cual todo  el día llovió y lo único que me acompañaba era un paraguas, un paraguas que me acompañaba en mi soledad y que me hacia sentir protegido de la lluvia y de la soledad.",

    "ESTADO ONIRICO": "Cuando tengo tiempo y quiero abrir  mi imaginación me acuesto en el pasto y miro hacia el cielo y en mi mente siempre imagino una puerta donde podría llegar donde quisiera y que me llevara a un lugar donde pudiera ser libre y donde no existiera el tiempo, un lugar donde pudiera ser feliz y donde pudiera estar en paz.",

    "MAR Y PLAYA": "Quise plasmar este momento tan especial el cual fue la primera vez que vi el mar un sueño que siempre quise cumplir, es un momento que guardo en mi mente y corazón con mucha alegría y que siempre recordare con mucho cariño, un momento que me hizo sentir libre y feliz.",

    "LLUVIA": "Quisiera que todo el que viera esta obra sienta lo mucho que adoro la lluvia son días maravillosos al contrario de lo que piensan muchas personas la lluvia es un momento mágico donde todo se siente diferente y donde todo se siente mas vivo, es un momento donde todo se siente mas fresco y donde todo se siente mas puro.",

    // Descripciones por tipo de obra
    "Original": "Pieza única e irrepetible que captura un momento específico de inspiración artística, donde cada trazo refleja la conexión íntima entre el artista y su visión creativa.",
    
    "Limited Edition": "Edición cuidadosamente seleccionada que preserva la esencia de la obra original, permitiendo que más personas puedan experimentar la magia del arte contemporáneo de Jhony Casierra.",
    
    "Studio Work": "Creación experimental nacida en la intimidad del estudio, donde la técnica húmedo sobre húmedo se fusiona con la espontaneidad para dar vida a expresiones artísticas auténticas.",
    
    // Descripciones por categorías temáticas
    "paisaje": "Interpretación contemporánea del entorno natural y urbano, donde los colores y texturas se combinan para crear una atmósfera que trasciende la simple representación visual.",
    
    "abstracto": "Exploración libre de formas, colores y emociones que invita al espectador a crear su propia narrativa visual, conectando con sensaciones profundas y personales.",
    
    "bodegon": "Reinterpretación moderna de objetos cotidianos elevados a la categoría de arte, donde cada elemento cobra vida propia a través de la técnica expresiva del artista.",
    
    // Descripciones genéricas por defecto
    "default": "Obra única de Jhony Casierra que captura la esencia del arte contemporáneo colombiano con su distintiva técnica húmedo sobre húmedo, creando una experiencia visual emotiva y auténtica."
  };

  // Buscar descripción por título exacto
  if (descriptions[artwork.title]) {
    return descriptions[artwork.title];
  }
  
  // Buscar por tipo de obra
  if (artwork.type && descriptions[artwork.type]) {
    return descriptions[artwork.type];
  }
  
  // Buscar por palabras clave en el título
  const titleLower = artwork.title.toLowerCase();
  if (titleLower.includes('paisaje') || titleLower.includes('landscape')) {
    return descriptions["paisaje"];
  }
  if (titleLower.includes('abstracto') || titleLower.includes('abstract')) {
    return descriptions["abstracto"];
  }
  if (titleLower.includes('bodegon') || titleLower.includes('still')) {
    return descriptions["bodegon"];
  }
  
  // Descripción por defecto
  return descriptions["default"];
}

interface ArtworkPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all artworks
export function generateStaticParams() {
  return allArtworks.map((artwork) => ({
    slug: artwork.slug,
  }));
}

// Generate dynamic metadata for each artwork
export async function generateMetadata({ params }: ArtworkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artwork = allArtworks.find((item) => item.slug === slug);

  if (!artwork) {
    return {
      title: 'Obra no encontrada - Jhony Casierra',
      description: 'La obra de arte que buscas no se encuentra disponible.',
    };
  }

  // Determinar precio para mostrar en metadatos
  const displayPrice = artwork.hasDiscount && artwork.discountedPrice 
    ? artwork.discountedPrice 
    : artwork.price;

  // Determinar disponibilidad
  const isAvailable = artwork.status === 'available' && (artwork.quantity || 0) > 0;
  const availabilityText = isAvailable ? 'Disponible' : 'No disponible';

  return {
    title: `"${artwork.title}" - ${artwork.type} de Jhony Casierra | ${displayPrice}`,
    description: `${artwork.type} "${artwork.title}" de Jhony Casierra. Tamaño: ${artwork.size}. ${availabilityText} por ${displayPrice}. Arte contemporáneo colombiano con técnica húmedo sobre húmedo.`,
    keywords: [
      `${artwork.title} Jhony Casierra`,
      `comprar ${artwork.type?.toLowerCase()}`,
      `arte contemporáneo ${artwork.size}`,
      `pintura ${artwork.title}`,
      `obra original colombiana`,
      `técnica húmedo sobre húmedo`,
      `arte ${artwork.type?.toLowerCase()} Colombia`,
      `galería arte contemporáneo`,
      `Jhony Casierra ${artwork.type}`,
      `pintura expresiva Colombia`,
      `arte Valle del Cauca`,
      isAvailable ? 'arte disponible compra' : 'arte vendido',
      artwork.hasDiscount ? 'arte descuento oferta' : 'arte original precio'
    ],
    authors: [{ name: 'Jhony Casierra', url: 'https://jhonycasierra.com' }],
    metadataBase: new URL('https://jhonycasierra.com'),
    alternates: {
      canonical: `/artwork/${artwork.slug}`,
    },
    openGraph: {
      title: `"${artwork.title}" - ${artwork.type} de Jhony Casierra`,
      description: `${artwork.type} único de ${artwork.size}. ${availabilityText} por ${displayPrice}. Arte contemporáneo colombiano.`,
      url: `https://jhonycasierra.com/artwork/${artwork.slug}`,
      siteName: 'Jhony Casierra Art',
      images: [
        {
          url: artwork.image,
          width: 1200,
          height: 630,
          alt: `"${artwork.title}" - ${artwork.type} de Jhony Casierra`,
        },
      ],
      locale: 'es_CO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `"${artwork.title}" - Jhony Casierra`,
      description: `${artwork.type} ${availabilityText} por ${displayPrice}`,
      images: [artwork.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { slug } = await params;

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
  const additionalImages = [
    artwork.image,
    relatedArtworks.length > 0 ? relatedArtworks[0].image : artwork.image,
  ];

  // Verificar si la obra está disponible
  const isAvailable = artwork.status === 'available' && (artwork.quantity || 0) > 0;

  // Generar descripción dinámica para el hero
  const dynamicDescription = generateArtworkDescription(artwork);

  // Schema.org JSON-LD para la obra individual
  const artworkSchema = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    "@id": `https://jhonycasierra.com/artwork/${artwork.slug}#artwork`,
    "name": artwork.title,
    "description": `${artwork.type} "${artwork.title}" de Jhony Casierra. Tamaño: ${artwork.size}. Arte contemporáneo colombiano con técnica húmedo sobre húmedo.`,
    "url": `https://jhonycasierra.com/artwork/${artwork.slug}`,
    "image": artwork.image,
    "creator": {
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
    "artform": "Pintura",
    "artMedium": "Técnica húmedo sobre húmedo",
    "artworkSurface": "Lienzo",
    "width": artwork.size?.includes('x') ? artwork.size.split('x')[0]?.trim() : undefined,
    "height": artwork.size?.includes('x') ? artwork.size.split('x')[1]?.trim() : undefined,
    "dateCreated": "2024",
    "category": artwork.type,
    "offers": isAvailable ? {
      "@type": "Offer",
      "price": artwork.hasDiscount && artwork.discountedPrice 
        ? artwork.discountedPrice.replace(/[^0-9]/g, '') 
        : artwork.price?.replace(/[^0-9]/g, ''),
      "priceCurrency": "COP",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Person",
        "name": "Jhony Casierra"
      },
      "itemCondition": "https://schema.org/NewCondition"
    } : {
      "@type": "Offer",
      "availability": "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Person", 
        "name": "Jhony Casierra"
      }
    },
    "isPartOf": {
      "@type": "CreativeWorkSeries",
      "name": artwork.type,
      "creator": {
        "@type": "Person",
        "name": "Jhony Casierra"
      }
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": artwork.title,
          "item": `https://jhonycasierra.com/artwork/${artwork.slug}`
        }
      ]
    }
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(artworkSchema),
        }}
      />
      
      <div className="bg-[#0a0a0a] min-h-screen text-white">
        {/* Hero Section con imagen de fondo - VIEWPORT COMPLETO SIN ESPACIOS */}
        <section className="relative h-[50vh] md:h-[60vh] w-screen overflow-hidden" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', maxWidth: '100vw' }}>
          {/* Imagen de fondo - COBERTURA MÁXIMA */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={artwork.image}
              alt={`"${artwork.title}" - ${artwork.type} de Jhony Casierra`}
              fill
              className="w-full h-full"
              sizes="100vw"
              priority
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>
          
          {/* Overlay más sutil */}
          <div className="absolute inset-0 bg-black/30 w-full h-full"></div>
          
          {/* Contenido del overlay - RESPONSIVE: Desktop derecha, Móvil centrado abajo */}
          <div className="relative z-10 h-full flex items-end justify-center pb-8 md:items-center md:justify-end md:pr-16 md:pb-0 w-full">
            <div className="bg-black/70 backdrop-blur-sm px-6 py-4 md:px-12 md:py-8 text-center md:text-right max-w-sm md:max-w-2xl mx-4 md:mx-0">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif italic text-white mb-3 md:mb-4 uppercase tracking-wider border-b-2 border-white pb-1 md:pb-2 inline-block">
                "{artwork.title}"
              </h1>
              {/* DESCRIPCIÓN DINÁMICA - Aquí está el cambio principal */}
              <p className="text-xs md:text-sm lg:text-base text-white leading-relaxed mt-4 md:mt-6">
                {dynamicDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Contenido principal de la página - CON container normal */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Artwork Image with Lightbox */}
            <div className="relative group">
              <div className="bg-[#1a1a1a] p-6 border border-gray-700">
                {/* Badge de descuento si aplica */}
                {artwork.hasDiscount && artwork.discountPercentage && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-2 text-sm font-bold uppercase tracking-wide z-10 shadow-lg">
                    {artwork.discountPercentage}% DESCUENTO
                  </div>
                )}
                
                {/* Badge de estado si no está disponible */}
                {!isAvailable && (
                  <div className="absolute top-2 right-2 bg-[#1f2937] text-white px-3 py-2 text-sm font-bold uppercase tracking-wide z-10 border border-gray-600">
                    {artwork.status === 'sold' ? 'VENDIDO' : 
                     artwork.status === 'reserved' ? 'RESERVADO' : 
                     artwork.status === 'on_hold' ? 'EN ESPERA' : 'NO DISPONIBLE'}
                  </div>
                )}
                
                <ArtworkLightbox
                  artwork={artwork}
                  additionalImages={additionalImages}
                />
              </div>
            </div>

            {/* Artwork Details */}
            <div className="flex flex-col space-y-6">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm">
                  <li>
                    <Link href="/galeria" className="text-gray-400 hover:text-amber-400 transition-colors">
                      Galería
                    </Link>
                  </li>
                  <li className="text-gray-600">/</li>
                  <li>
                    <Link href={`/collections/${artwork.type?.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-amber-400 transition-colors">
                      {artwork.type}
                    </Link>
                  </li>
                  <li className="text-gray-600">/</li>
                  <li className="text-gray-300" aria-current="page">
                    {artwork.title}
                  </li>
                </ol>
              </nav>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif tracking-wide mb-2 text-white uppercase">
                  "{artwork.title}"
                </h2>
                <p className="text-gray-400 text-sm mb-4">por Jhony Casierra</p>
                
                {/* Sistema de precios con descuento */}
                {artwork.hasDiscount && artwork.originalPrice && artwork.discountedPrice ? (
                  <div className="space-y-1">
                    <p className="text-lg text-gray-500 line-through">{artwork.originalPrice}</p>
                    <p className="text-2xl font-bold text-amber-400">{artwork.discountedPrice}</p>
                    <p className="text-sm text-green-400 font-medium">
                      ¡Ahorras {artwork.originalPrice.replace('$', '')} - {artwork.discountedPrice.replace('$', '')} = $150,000!
                    </p>
                  </div>
                ) : (
                  <p className="text-xl font-medium text-amber-400">{artwork.price}</p>
                )}

                {/* Estado de disponibilidad */}
                <div className="mt-2">
                  {isAvailable ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-green-400 font-medium">Disponible para compra</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-sm text-red-400 font-medium">
                        {artwork.status === 'sold' ? 'Vendido' : 
                         artwork.status === 'reserved' ? 'Reservado' : 
                         artwork.status === 'on_hold' ? 'En espera' : 'No disponible'}
                      </span>
                      {artwork.soldDate && artwork.status === 'sold' && (
                        <span className="text-xs text-gray-500">
                          ({artwork.soldDate.toLocaleDateString('es-ES')})
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <Separator className="bg-gray-700" />

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg mb-2 text-white">Especificaciones técnicas</h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex">
                      <dt className="font-medium text-amber-400 w-20">Tamaño:</dt>
                      <dd className="text-gray-300">{artwork.size}</dd>
                    </div>
                    <div className="flex">
                      <dt className="font-medium text-amber-400 w-20">Tipo:</dt>
                      <dd className="text-gray-300">{artwork.type}</dd>
                    </div>
                    <div className="flex">
                      <dt className="font-medium text-amber-400 w-20">Edición:</dt>
                      <dd className="text-gray-300">
                        {artwork.type?.includes('Original') ? 'Original único' : 
                         artwork.type?.includes('Limited') ? `Edición Limitada (${artwork.quantity}/${artwork.maxQuantity})` : 
                         'Original único'}
                      </dd>
                    </div>
                    <div className="flex">
                      <dt className="font-medium text-amber-400 w-20">Estado:</dt>
                      <dd className="text-gray-300">
                        {isAvailable ? 'Disponible' : 
                         artwork.status === 'sold' ? 'Vendido' : 
                         artwork.status === 'reserved' ? 'Reservado' : 
                         artwork.status === 'on_hold' ? 'En espera' : 'No disponible'}
                      </dd>
                    </div>
                    <div className="flex">
                      <dt className="font-medium text-amber-400 w-20">Técnica:</dt>
                      <dd className="text-gray-300">Húmedo sobre húmedo</dd>
                    </div>
                    <div className="flex">
                      <dt className="font-medium text-amber-400 w-20">Tema:</dt>
                      <dd className="text-gray-300">Arte Contemporáneo</dd>
                    </div>
                  </dl>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  Esta obra única {artwork.type?.toLowerCase()} de Jhony Casierra captura la energía y la atmósfera 
                  del arte contemporáneo con pinceladas dinámicas y colores vibrantes.
                  Cada pieza está firmada personalmente por el artista e incluye certificado de autenticidad.
                </p>

                <div className="flex flex-col space-y-4 mt-4">
                  {isAvailable ? (
                    <AddToCartButton artwork={artwork} />
                  ) : (
                    <div className="space-y-2">
                      <button 
                        disabled 
                        className="w-full bg-gray-700 text-gray-400 py-3 px-6 font-medium cursor-not-allowed uppercase tracking-wider border border-gray-600"
                        aria-label={`Obra ${artwork.title} no disponible`}
                      >
                        {artwork.status === 'sold' ? 'OBRA VENDIDA' : 
                         artwork.status === 'reserved' ? 'OBRA RESERVADA' : 
                         artwork.status === 'on_hold' ? 'EN ESPERA' : 'NO DISPONIBLE'}
                      </button>
                      <p className="text-xs text-gray-500 text-center">
                        Esta obra no está disponible para compra en este momento
                      </p>
                    </div>
                  )}
                  
                  <Link 
                    href="/contact" 
                    className="w-full bg-[#1a1a1a] border border-gray-700 py-3 px-6 text-center font-medium uppercase tracking-wider text-white hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
                    aria-label="Contactar sobre esta obra de arte"
                  >
                    Consultar al artista
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <article className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-serif mb-4 text-white">Acerca de "{artwork.title}"</h3>
            <div className="prose max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                El estilo distintivo de Jhony Casierra captura la atmósfera y el estado de ánimo del arte contemporáneo.
                Esta pieza en particular, "{artwork.title}", demuestra su capacidad para transmitir emociones profundas 
                y crear conexiones visuales a través de su singular enfoque en la pintura expresiva.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Utilizando su técnica característica de húmedo sobre húmedo, combinada con óleos, acrílicos y otros medios, 
                Jhony crea obras de arte visualmente impactantes y evocadoras. Esta técnica le permite crear piezas con 
                una sensación de movimiento y vida, capturando a la perfección la naturaleza dinámica de las emociones humanas.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cada obra cuenta con un acabado profesional y se entrega lista para colgar, con marco incluido.
                Todas las pinturas originales están firmadas por Jhony e incluyen certificado de autenticidad, 
                lo que convierte cada pieza en una obra única de colección.
              </p>
              
              {/* Información adicional sobre descuentos */}
              {artwork.hasDiscount && (
                <div className="bg-[#1a1a1a] border border-red-600 p-4 mt-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">🔥 Oferta Especial</h4>
                  <p className="text-gray-300">
                    Esta obra está actualmente en promoción con un <strong className="text-amber-400">{artwork.discountPercentage}% de descuento</strong>. 
                    Una oportunidad única para adquirir arte original de Jhony Casierra a un precio especial.
                  </p>
                </div>
              )}
            </div>
          </article>

          {/* Related Artworks - Solo mostrar obras disponibles */}
          {relatedArtworks.filter(item => item.status === 'available').length > 0 && (
            <section className="mt-16" aria-labelledby="related-artworks">
              <h3 id="related-artworks" className="text-xl md:text-2xl font-serif text-center mb-8 text-white">
                Obras relacionadas que podrían interesarte
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedArtworks
                  .filter(item => item.status === 'available')
                  .slice(0, 4)
                  .map((item) => (
                  <Link
                    key={item.id}
                    href={`/artwork/${item.slug}`}
                    className="group"
                    aria-label={`Ver obra "${item.title}"`}
                  >
                    <div className="relative aspect-square overflow-hidden bg-[#1a1a1a] p-3 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
                      {/* Badge de descuento en obras relacionadas */}
                      {item.hasDiscount && item.discountPercentage && (
                        <div className="absolute top-1 left-1 bg-red-600 text-white px-1 py-0.5 text-xs font-bold uppercase z-10">
                          {item.discountPercentage}%
                        </div>
                      )}
                      <Image
                        src={item.image}
                        alt={`"${item.title}" - ${item.type} de Jhony Casierra`}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="text-center mt-2">
                      <h4 className="text-sm font-medium truncate text-white group-hover:text-amber-400 transition-colors duration-200">"{item.title}"</h4>
                      {item.hasDiscount && item.originalPrice && item.discountedPrice ? (
                        <div className="space-y-0.5">
                          <p className="text-xs text-gray-500 line-through">{item.originalPrice}</p>
                          <p className="text-sm text-amber-400 font-bold">{item.discountedPrice}</p>
                        </div>
                      ) : (
                        <p className="text-sm text-amber-400">{item.price}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}