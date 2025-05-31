import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

// SEO Metadata para 404
export const metadata: Metadata = {
  title: '404 - Página no encontrada | Jhony Casierra Art',
  description: 'La página que buscas no existe. Explora nuestras colecciones de arte contemporáneo de Jhony Casierra o contacta para consultas específicas.',
  keywords: [
    'página no encontrada',
    'error 404',
    'Jhony Casierra sitio web',
    'navegación arte',
    'colecciones disponibles',
    'galería arte contemporáneo'
  ],
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: '404 - Página no encontrada | Jhony Casierra Art',
    description: 'La página que buscas no existe. Descubre nuestras colecciones de arte contemporáneo.',
    type: 'website',
    siteName: 'Jhony Casierra Art',
  }
}

// Schema.org para página 404
const notFoundSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Página no encontrada - 404",
  "description": "Error 404 - La página solicitada no existe",
  "url": "https://jhonycasierra.com/404",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Jhony Casierra Art",
    "url": "https://jhonycasierra.com"
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
        "name": "404 - Página no encontrada"
      }
    ]
  }
}

export default function NotFound() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(notFoundSchema),
        }}
      />
      
      <div className="bg-[#0a0a0a] min-h-screen text-white flex items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Hero Image/Artwork */}
            <div className="mb-8 relative">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto relative">
                <div className="absolute inset-0 bg-[#1a1a1a] border border-gray-700 p-4">
                  {/* Placeholder para una obra de arte representativa */}
                  <div className="w-full h-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center border border-gray-600">
                    <div className="text-center">
                      <div className="text-6xl md:text-8xl font-serif text-amber-400 mb-2">404</div>
                      <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Obra no encontrada</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-serif mb-4 text-white tracking-wider">
                Página no encontrada
              </h1>
              <div className="w-24 h-px bg-amber-400 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto">
                Lo sentimos, la página que buscas no existe o ha sido movida.
              </p>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Pero no te preocupes, hay muchas obras hermosas esperándote en nuestra galería.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/"
                className="bg-[#1a1a1a] text-white px-8 py-3 text-sm uppercase tracking-wider border border-gray-700 hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-300 font-medium"
              >
                Ir al inicio
              </Link>
              <Link
                href="/galeria"
                className="bg-amber-400 text-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-amber-500 transition-all duration-300 font-medium"
              >
                Ver galería
              </Link>
              <Link
                href="/collections"
                className="bg-[#1a1a1a] text-white px-8 py-3 text-sm uppercase tracking-wider border border-gray-700 hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-300 font-medium"
              >
                Explorar colecciones
              </Link>
            </div>

            {/* Quick Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/about" className="group">
                <div className="bg-[#1a1a1a] p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    Conoce al Artista
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Descubre la historia y filosofía de Jhony Casierra
                  </p>
                </div>
              </Link>

              <Link href="/galeria" className="group">
                <div className="bg-[#1a1a1a] p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    Galería Completa
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Explora todas las obras disponibles
                  </p>
                </div>
              </Link>

              <Link href="/contact" className="group">
                <div className="bg-[#1a1a1a] p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-medium mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    Contáctanos
                  </h3>
                  <p className="text-gray-400 text-sm">
                    ¿Buscas algo específico? Escríbenos
                  </p>
                </div>
              </Link>
            </div>

            {/* Search Suggestion */}
            <div className="mt-12 bg-[#1a1a1a] p-6 border border-gray-700 max-w-2xl mx-auto">
              <h4 className="text-white font-medium mb-3">¿Buscabas algo específico?</h4>
              <p className="text-gray-400 text-sm mb-4">
                Si estabas buscando una obra en particular, puedes:
              </p>
              <ul className="text-gray-300 text-sm space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  <span>Explorar todas las colecciones disponibles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  <span>Contactar directamente al artista</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  <span>Verificar que la URL esté correcta</span>
                </li>
              </ul>
            </div>

            {/* Footer Message */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                Si continúas teniendo problemas, no dudes en{' '}
                <Link href="/contact" className="text-amber-400 hover:text-amber-300 transition-colors duration-200">
                  contactarnos
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}