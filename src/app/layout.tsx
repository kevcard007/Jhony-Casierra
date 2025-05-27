import "@/app/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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