import "@/app/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Jhony Casierra | Artis Comtemporaneo - Pagina Web Oficial",
  description: "Artista Comtemporaneto Jhony Casierra - Capturando la energía urbana en pinturas originales de paisajes urbanos de Nueva York, Londres y más allá",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col`}
      >
        <ClientBody>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ClientBody>
        <script src="https://stage.bepay.net.co/widgets/webcheckout/js/webcheckout-widget.js" defer></script>
      </body>
    </html>
  );
}
