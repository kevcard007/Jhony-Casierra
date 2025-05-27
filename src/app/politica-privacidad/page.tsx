import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad | Jhony Casierra - Artista Contemporáneo",
  description: "Política de privacidad y protección de datos de Jhony Casierra Arte Contemporáneo",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header con navegación */}
      <div className="bg-[#1a1a1a] border-b border-[#374151]">
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/"
            className="flex items-center text-[#d1d5db] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div id="privacy-policy-content">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif mb-4 text-[#fbbf24]">POLÍTICA DE PRIVACIDAD</h1>
            <p className="text-[#d1d5db]">Jhony Casierra - Arte Contemporáneo</p>
            <p className="text-sm text-[#9ca3af] mt-2">
              Última actualización: {new Date().toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Contenido */}
          <div className="prose max-w-none prose-invert">
            {/* Introducción */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4 text-[#fbbf24] border-b border-[#374151] pb-2">1. INTRODUCCIÓN</h2>
              <p className="mb-4 text-[#d1d5db] leading-relaxed">
                En Jhony Casierra Arte Contemporáneo, respetamos su privacidad y nos comprometemos a proteger 
                sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos 
                personales cuando visita nuestro sitio web y le contará sobre sus derechos de privacidad y 
                cómo la ley lo protege.
              </p>
              <div className="bg-[#2a2a2a] border-l-4 border-[#fbbf24] p-4 my-6">
                <p className="mb-2 text-white font-semibold">Datos de contacto:</p>
                <p className="text-[#d1d5db]">Jhony Casierra</p>
                <p className="text-[#d1d5db]">Email: info@jhonycasierra.com</p>
                <p className="text-[#d1d5db]">Teléfono: +57 318 221 8211</p>
                <p className="text-[#d1d5db]">Sitio web: www.jhonycasierra.com</p>
              </div>
            </section>

            {/* Datos que recopilamos */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4 text-[#fbbf24] border-b border-[#374151] pb-2">2. DATOS QUE RECOPILAMOS</h2>
              <p className="mb-4 text-[#d1d5db]">Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted:</p>
              
              <h3 className="text-xl font-semibold mb-3 text-white">2.1 Datos de identidad</h3>
              <ul className="mb-4 pl-6 text-[#d1d5db]">
                <li>Nombre y apellidos</li>
                <li>Título o tratamiento</li>
                <li>Fecha de nacimiento</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">2.2 Datos de contacto</h3>
              <ul className="mb-4 pl-6 text-[#d1d5db]">
                <li>Dirección de facturación</li>
                <li>Dirección de entrega</li>
                <li>Dirección de correo electrónico</li>
                <li>Números de teléfono</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">2.3 Datos técnicos</h3>
              <ul className="mb-4 pl-6 text-[#d1d5db]">
                <li>Dirección del protocolo de Internet (IP)</li>
                <li>Datos de inicio de sesión</li>
                <li>Tipo y versión del navegador</li>
                <li>Configuración de zone horaria y ubicación</li>
                <li>Tipos y versiones de complementos del navegador</li>
                <li>Sistema operativo y plataforma</li>
              </ul>
            </section>

            {/* Resto de secciones con el mismo patrón dark */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4 text-[#fbbf24] border-b border-[#374151] pb-2">3. CÓMO USAMOS SUS DATOS</h2>
              <p className="mb-4 text-[#d1d5db]">Utilizamos sus datos personales para:</p>
              <ul className="mb-4 pl-6 text-[#d1d5db]">
                <li>Procesar y entregar su pedido, incluyendo el manejo de pagos y entregas</li>
                <li>Gestionar su cuenta y proporcionar servicio al cliente</li>
                <li>Enviarle información sobre productos y servicios que puedan interesarle</li>
                <li>Mejorar nuestro sitio web, productos/servicios y experiencia del cliente</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Proteger nuestro negocio y este sitio web de fraude</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4 text-[#fbbf24] border-b border-[#374151] pb-2">4. SUS DERECHOS LEGALES</h2>
              <p className="mb-4 text-[#d1d5db]">Bajo ciertas circunstancias, usted tiene derechos bajo las leyes de protección de datos sobre sus datos personales:</p>
              <ul className="mb-4 pl-6 text-[#d1d5db]">
                <li><strong className="text-white">Derecho de acceso:</strong> Solicitar copias de sus datos personales</li>
                <li><strong className="text-white">Derecho de rectificación:</strong> Solicitar que corrijamos cualquier información que crea que es inexacta</li>
                <li><strong className="text-white">Derecho de supresión:</strong> Solicitar que eliminemos sus datos personales</li>
                <li><strong className="text-white">Derecho de restricción:</strong> Solicitar que restrinjamos el procesamiento de sus datos personales</li>
                <li><strong className="text-white">Derecho de portabilidad:</strong> Solicitar que transfiramos sus datos a otra organización</li>
                <li><strong className="text-white">Derecho de oposición:</strong> Oponerse al procesamiento de sus datos personales</li>
              </ul>
            </section>

            {/* Contacto */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4 text-[#fbbf24] border-b border-[#374151] pb-2">5. CONTACTO</h2>
              <p className="mb-4 text-[#d1d5db]">
                Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, 
                contáctenos en:
              </p>
              <div className="bg-[#2a2a2a] border-l-4 border-[#fbbf24] p-6">
                <p className="mb-2 text-white font-semibold">Jhony Casierra</p>
                <p className="mb-2 text-[#d1d5db]">Email: info@jhonycasierra.com</p>
                <p className="mb-2 text-[#d1d5db]">Teléfono: +57 318 221 8211</p>
                <p className="mb-2 text-[#d1d5db]">WhatsApp: +57 318 221 8211</p>
                <p className="text-[#d1d5db]">Sitio web: www.jhonycasierra.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}