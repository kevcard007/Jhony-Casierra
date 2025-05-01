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
  title: "Paul Kenton | Contemporary Artist - Official Website",
  description: "Contemporary artist Paul Kenton - Capturing urban energy in original cityscape paintings of New York, London, and beyond",
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
