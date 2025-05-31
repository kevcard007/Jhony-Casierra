import "@/app/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementCarousel from '@/components/layout/AnnouncementCarousel';
import { announcementSlides } from '@/data/global';
import ClientBody from "./ClientBody";
import WhatsAppButton from '../components/whatsappbutton/whatsAppButton';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Jhony Casierra | Artista Contemporáneo - Página Web Oficial",
  description: "Artista Contemporáneo Jhony Casierra - Capturando la energía urbana en pinturas originales de paisajes urbanos de Nueva York, Londres y más allá",
  icons: {
    icon: '/images/favicon.ico.png',
    apple: '/apple-touch-icon.png',
  },
  // Agregar verificación de Google Search Console
  verification: {
    google: '1zXIbZp-i_8LUum1WRCy57JW2ALkQ3i2DliwzTeDRV4',
  },
  // Metadatos adicionales para SEO
  metadataBase: new URL('https://jhonycasierra.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jhony Casierra | Artista Contemporáneo Colombiano',
    description: 'Descubre las obras únicas de Jhony Casierra, artista contemporáneo especializado en técnica húmedo sobre húmedo.',
    url: 'https://jhonycasierra.com',
    siteName: 'Jhony Casierra Art',
    images: [
      {
        url: '/images/jhony-artist-portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'Jhony Casierra - Artista Contemporáneo Colombiano',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jhony Casierra | Artista Contemporáneo',
    description: 'Arte contemporáneo colombiano con técnica húmedo sobre húmedo',
    images: ['/images/jhony-artist-portrait.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        {/* Meta tag adicional para Google Search Console (backup) */}
        <meta name="google-site-verification" content="1zXIbZp-i_8LUum1WRCy57JW2ALkQ3i2DliwzTeDRV4" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col bg-[#0a0a0a] text-white`}
      >
        <ClientBody>
          {/* Carrusel de anuncios en la parte superior */}
          <AnnouncementCarousel slides={announcementSlides} />
          
          <Header />
          <main className="flex-grow bg-[#0a0a0a]">
            {children}
          </main>
          <Footer />

          {/* Botón flotante de WhatsApp */}
          <WhatsAppButton phoneNumber="+573182218211" message="Hola, me gustaría más información sobre las obras de Jhony Casierra" />

        </ClientBody>
      </body>
    </html>
  );
}