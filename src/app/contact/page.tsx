"use client";

import type { Metadata } from 'next'
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

// SEO Metadata para Contact
const metadata: Metadata = {
  title: 'Contacto - Jhony Casierra | Consultas, Comisiones y Ventas de Arte',
  description: 'Contacta a Jhony Casierra para consultas sobre obras de arte, comisiones personalizadas, ventas y colaboraciones. Artista contemporáneo en Buga, Colombia.',
  keywords: [
    'contacto Jhony Casierra',
    'comprar arte Jhony Casierra',
    'comisiones arte personalizado',
    'consultas artista colombiano',
    'ventas pintura contemporánea',
    'encargos arte Buga Colombia',
    'galería arte Valle del Cauca',
    'contacto artista contemporáneo',
    'adquirir obra original',
    'precio pinturas Jhony Casierra',
    'estudio arte Buga',
    'colaboraciones artísticas Colombia'
  ],
  authors: [{ name: 'Jhony Casierra', url: 'https://jhonycasierra.com' }],
  metadataBase: new URL('https://jhonycasierra.com'),
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contacto - Jhony Casierra | Consultas y Comisiones de Arte',
    description: 'Ponte en contacto con Jhony Casierra para consultas sobre obras, comisiones personalizadas y ventas. Respuesta en 24 horas.',
    url: 'https://jhonycasierra.com/contact',
    siteName: 'Jhony Casierra Art',
    images: [
      {
        url: '/images/jhony-artist-portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'Contacta a Jhony Casierra - Artista contemporáneo colombiano',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto - Jhony Casierra',
    description: 'Consultas sobre arte, comisiones y ventas. Contacta al artista colombiano.',
    images: ['/images/jhony-artist-portrait.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Schema.org JSON-LD para Contact
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contacto - Jhony Casierra",
  "description": "Página de contacto para consultas sobre obras de arte, comisiones y ventas",
  "url": "https://jhonycasierra.com/contact",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://jhonycasierra.com#artist",
    "name": "Jhony Casierra",
    "jobTitle": "Artista Contemporáneo",
    "email": "info@jhonycasierra.com",
    "telephone": "+57 318 221 8211",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Callejón las Palmas EX13",
      "addressLocality": "Monterrey",
      "addressRegion": "Guadalajara de Buga, Valle del Cauca",
      "addressCountry": "Colombia"
    },
    "workLocation": {
      "@type": "Place",
      "name": "Estudio de Arte Jhony Casierra",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Callejón las Palmas EX13",
        "addressLocality": "Monterrey", 
        "addressRegion": "Guadalajara de Buga, Valle del Cauca",
        "addressCountry": "Colombia"
      }
    },
    "nationality": "Colombian",
    "knowsAbout": [
      "Pintura contemporánea",
      "Técnica húmedo sobre húmedo",
      "Arte abstracto",
      "Paisajismo",
      "Bodegones"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Obras de arte originales, comisiones personalizadas, ediciones limitadas",
      "category": "Arte Contemporáneo"
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
        "name": "Contacto",
        "item": "https://jhonycasierra.com/contact"
      }
    ]
  }
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mwpbenld', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      
      <div className="bg-[#0a0a0a] min-h-screen text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="uppercase text-center font-serif text-2xl md:text-3xl tracking-wider mb-4 text-white">
            Contacta a Jhony Casierra
          </h1>
          <Separator className="mb-12 max-w-xs mx-auto bg-gray-700" />

          <div className="max-w-2xl mx-auto">
            <div className="grid gap-8">
              <div className="bg-[#1a1a1a] p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
                <h2 className="font-serif text-xl mb-4 text-white">Ponte en contacto</h2>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  Utiliza el formulario de contacto a continuación para contactar con Jhony o su equipo.
                  Para consultas sobre obras de arte, comisiones personalizadas, ventas o cualquier otra pregunta, 
                  te responderemos en un plazo de 24 horas.
                </p>

                {/* Mensajes de estado */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-900/50 border border-green-600 text-green-300 rounded">
                    ¡Mensaje enviado correctamente! Te responderemos pronto.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-900/50 border border-red-600 text-red-300 rounded">
                    Error al enviar el mensaje. Por favor intenta de nuevo.
                  </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-colors duration-200"
                        placeholder="Tu nombre completo"
                        required
                        disabled={isSubmitting}
                        aria-describedby="name-help"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-colors duration-200"
                        placeholder="tu@email.com"
                        required
                        disabled={isSubmitting}
                        aria-describedby="email-help"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Asunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-colors duration-200"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="Consulta sobre obra disponible">Consulta sobre obra disponible</option>
                      <option value="Comisión personalizada">Comisión personalizada</option>
                      <option value="Información de precios">Información de precios</option>
                      <option value="Colaboración artística">Colaboración artística</option>
                      <option value="Medios de comunicación">Medios de comunicación</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-colors duration-200 resize-vertical"
                      placeholder="Cuéntanos sobre tu consulta, obra de interés, o comisión..."
                      required
                      disabled={isSubmitting}
                      aria-describedby="message-help"
                    ></textarea>
                    <p id="message-help" className="text-xs text-gray-500 mt-1">
                      Incluye detalles sobre la obra de interés, dimensiones preferidas para comisiones, o cualquier información relevante.
                    </p>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#1a1a1a] text-white px-6 py-3 text-sm uppercase tracking-wider border border-gray-700 hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                      aria-describedby="submit-help"
                    >
                      {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
                    </button>
                    <p id="submit-help" className="text-xs text-gray-500 mt-2">
                      * Campos obligatorios. Respuesta garantizada en 24 horas.
                    </p>
                  </div>
                </form>
              </div>

              <div className="bg-[#1a1a1a] p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
                <h2 className="font-serif text-xl mb-4 text-white">Información de contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-400 font-medium min-w-[80px]">Teléfono:</span>
                    <a 
                      href="tel:+573182218211"
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                      aria-label="Llamar a Jhony Casierra"
                    >
                      +57 318 221 8211
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-400 font-medium min-w-[80px]">Email:</span>
                    <a 
                      href="mailto:info@jhonycasierra.com"
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                      aria-label="Enviar email a Jhony Casierra"
                    >
                      info@jhonycasierra.com
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-400 font-medium min-w-[80px]">Estudio:</span>
                    <address className="text-gray-300 leading-relaxed not-italic">
                      Estudio de Arte Jhony Casierra<br />
                      Callejón las Palmas EX13<br />
                      Monterrey, Guadalajara de Buga<br />
                      Valle del Cauca<br />
                      Colombia
                    </address>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-400 font-medium min-w-[80px]">Horarios:</span>
                    <div className="text-gray-300 leading-relaxed">
                      Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                      Sábados: 10:00 AM - 4:00 PM<br />
                      <span className="text-gray-500 text-sm">
                        (Visitas al estudio con cita previa)
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h3 className="text-white font-medium mb-3">Servicios disponibles:</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span>Venta de obras originales</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span>Comisiones personalizadas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span>Ediciones limitadas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span>Consultoría artística</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span>Visitas al estudio</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}