"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha aceptado las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      // Mostrar el banner después de un breve retraso
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a1a] text-white p-4 shadow-lg border-t border-[#374151]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          {/* Contenido principal */}
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="w-6 h-6 text-[#fbbf24] flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold mb-2 text-[#fbbf24]">🍪 Uso de Cookies</h3>
              <p className="text-sm text-[#d1d5db] leading-relaxed">
                Utilizamos cookies para mejorar su experiencia en nuestro sitio web, 
                personalizar contenido y analizar nuestro tráfico. Al continuar navegando, 
                acepta nuestro uso de cookies.{" "}
                <Link 
                  href="/politica-privacidad" 
                  className="text-[#fbbf24] underline hover:text-white transition-colors"
                >
                  Más información
                </Link>
              </p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <button
              onClick={rejectCookies}
              className="flex-1 md:flex-none px-4 py-2 text-sm border border-[#374151] text-[#d1d5db] hover:text-white hover:border-white transition-colors bg-[#2a2a2a]"
            >
              Rechazar
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-none px-6 py-2 text-sm bg-[#fbbf24] text-[#0a0a0a] hover:bg-[#f59e0b] transition-colors font-medium"
            >
              Aceptar
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="p-2 text-[#9ca3af] hover:text-white transition-colors"
              aria-label="Cerrar banner"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-3 pt-3 border-t border-[#374151]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 text-xs text-[#9ca3af]">
            <p>
              Utilizamos cookies esenciales, de rendimiento y de marketing.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="/politica-privacidad" 
                className="hover:text-white transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link 
                href="/cookies" 
                className="hover:text-white transition-colors"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}