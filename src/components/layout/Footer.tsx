import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333334] text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-8">
          {/* Newsletter Subscription & Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-xs text-gray-300 tracking-wider">
              Subscribete/Sigueme para ver las ultimas novedades a traves de video e imagen
            </p>
            <div className="flex space-x-6">
              <Link href="https://www.facebook.com/share/1B3dDPovza/?mibextid=wwXIfr" aria-label="Facebook">
                <Facebook size={18} className="text-white hover:text-gray-300" />
              </Link>
              {/*<Link href="https://twitter.com" aria-label="Twitter">
                <Twitter size={18} className="text-white hover:text-gray-300" />
              </Link>*/}
              <Link href="https://www.instagram.com/jhonycasierra?igsh=MWxzemJnM29icWllMQ==" aria-label="Instagram">
                <Instagram size={18} className="text-white hover:text-gray-300" />
              </Link>
              {/*<Link href="https://tiktok.com" aria-label="TikTok">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white hover:text-gray-300"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/>
                  <path d="M20 9V4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8a1 1 0 0 0-1-1h-1"/>
                  <path d="M14 8v5a7 7 0 0 1-7 7v0a7 7 0 0 1-7-7v0a7 7 0 0 1 7-7h5"/>
                </svg>
              </Link>*/}
            </div>
          </div>

          <Separator className="bg-gray-700" />

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span><Link href="tel:+573182218211" className="hover:text-gray-300">Contactame: +57 318 221 82 11</Link></span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span><Link href="/contact" className="hover:text-gray-300">Enviame un mensaje</Link></span>
              </div>
            </div>
            <div className="flex flex-col md:items-end space-y-2">
              <Link href="/basket" className="hover:text-gray-300">Cesta</Link>
              <Link href="/checkout" className="hover:text-gray-300">Pagina de pago</Link>
              <Link href="/shipping-info" className="hover:text-gray-300">Informacion de venta</Link>
              <Link href="/terms-of-sale" className="hover:text-gray-300">Terminos de venta</Link>
              <Link href="/politica-privacidad" className="hover:text-gray-300">Politica de privacidad</Link>
              <Link href="/my-account" className="hover:text-gray-300">Mi cuenta</Link>
            </div>
          </div>

          <Separator className="bg-gray-700" />

          {/* Sección de enlaces adicionales */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-xs">
              <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors">
                Política de Cookies
              </Link>
              <Link href="/terminos-condiciones" className="text-gray-300 hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="/galeria" className="text-gray-300 hover:text-white transition-colors">
                Ver Galería
              </Link>
            </div>
          </div>

          <Separator className="bg-gray-700" />

          {/* Copyright - Actualizado */}
          <div className="text-center text-xs text-gray-400">
            <p>© KevAcademy {currentYear} - Todos los derechos reservados</p>
            <p>Guadalajara de Buga, Colombia</p>
            <p className="mt-1 text-gray-500">
              Arte Contemporáneo • Sitio web actualizado: {new Date().toLocaleDateString('es-ES')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}