import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad | Jhony Casierra - Artista Contemporáneo",
  description: "Política de privacidad y protección de datos de Jhony Casierra Arte Contemporáneo",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header con navegación */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/"
            className="flex items-center text-gray-600 hover:text-black transition-colors"
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
            <h1 className="text-4xl font-serif mb-4">POLÍTICA DE PRIVACIDAD</h1>
            <p className="text-gray-600">Jhony Casierra - Arte Contemporáneo</p>
            <p className="text-sm text-gray-500 mt-2">
              Última actualización: {new Date().toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Contenido */}
          <div className="prose max-w-none">
            {/* Introducción */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">1. INTRODUCCIÓN</h2>
              <p className="mb-4">
                En Jhony Casierra Arte Contemporáneo, respetamos su privacidad y nos comprometemos a proteger 
                sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos 
                personales cuando visita nuestro sitio web y le contará sobre sus derechos de privacidad y 
                cómo la ley lo protege.
              </p>
              <p className="mb-4">
                <strong>Datos de contacto:</strong><br />
                Jhony Casierra<br />
                Email: info@jhonycasierra.com<br />
                Teléfono: +57 318 221 8211<br />
                Sitio web: www.jhonycasierra.com
              </p>
            </section>

            {/* Datos que recopilamos */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">2. DATOS QUE RECOPILAMOS</h2>
              <p className="mb-4">Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted:</p>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Datos de identidad</h3>
              <ul className="mb-4 pl-6">
                <li>Nombre y apellidos</li>
                <li>Título o tratamiento</li>
                <li>Fecha de nacimiento</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Datos de contacto</h3>
              <ul className="mb-4 pl-6">
                <li>Dirección de facturación</li>
                <li>Dirección de entrega</li>
                <li>Dirección de correo electrónico</li>
                <li>Números de teléfono</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.3 Datos técnicos</h3>
              <ul className="mb-4 pl-6">
                <li>Dirección del protocolo de Internet (IP)</li>
                <li>Datos de inicio de sesión</li>
                <li>Tipo y versión del navegador</li>
                <li>Configuración de zone horaria y ubicación</li>
                <li>Tipos y versiones de complementos del navegador</li>
                <li>Sistema operativo y plataforma</li>
              </ul>
            </section>

            {/* Cómo usamos los datos */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">3. CÓMO USAMOS SUS DATOS</h2>
              <p className="mb-4">Utilizamos sus datos personales para:</p>
              <ul className="mb-4 pl-6">
                <li>Procesar y entregar su pedido, incluyendo el manejo de pagos y entregas</li>
                <li>Gestionar su cuenta y proporcionar servicio al cliente</li>
                <li>Enviarle información sobre productos y servicios que puedan interesarle</li>
                <li>Mejorar nuestro sitio web, productos/servicios y experiencia del cliente</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Proteger nuestro negocio y este sitio web de fraude</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">4. COOKIES</h2>
              <p className="mb-4">
                Nuestro sitio web utiliza cookies para distinguirle de otros usuarios de nuestro sitio web. 
                Esto nos ayuda a brindarle una buena experiencia cuando navega por nuestro sitio web y también 
                nos permite mejorar nuestro sitio.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">4.1 Tipos de cookies que utilizamos:</h3>
              <ul className="mb-4 pl-6">
                <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio web</li>
                <li><strong>Cookies de rendimiento:</strong> Nos ayudan a entender cómo interactúa con nuestro sitio</li>
                <li><strong>Cookies de funcionalidad:</strong> Nos permiten recordar las opciones que hace</li>
                <li><strong>Cookies de marketing:</strong> Utilizadas para entregar anuncios más relevantes</li>
              </ul>
            </section>

            {/* Compartir datos */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">5. COMPARTIR SUS DATOS</h2>
              <p className="mb-4">
                No vendemos, intercambiamos o transferimos de otra manera a terceros su información personal 
                identificable. Esto no incluye a terceros de confianza que nos ayudan a operar nuestro sitio 
                web, llevar a cabo nuestro negocio o brindarle servicios, siempre que esas partes acuerden 
                mantener esta información confidencial.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">5.1 Podemos compartir sus datos con:</h3>
              <ul className="mb-4 pl-6">
                <li>Procesadores de pagos (como PayPal, Stripe)</li>
                <li>Servicios de entrega y logística</li>
                <li>Proveedores de servicios de marketing y publicidad</li>
                <li>Proveedores de servicios de análisis web</li>
                <li>Asesores profesionales como abogados y contadores</li>
              </ul>
            </section>

            {/* Seguridad */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">6. SEGURIDAD DE DATOS</h2>
              <p className="mb-4">
                Hemos implementado medidas de seguridad apropiadas para prevenir que sus datos personales 
                sean accidentalmente perdidos, usados o accedidos de manera no autorizada, alterados o 
                divulgados. Además, limitamos el acceso a sus datos personales a aquellos empleados, 
                agentes, contratistas y otros terceros que tienen una necesidad comercial de conocer.
              </p>
            </section>

            {/* Retención de datos */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">7. RETENCIÓN DE DATOS</h2>
              <p className="mb-4">
                Solo conservaremos sus datos personales durante el tiempo que sea necesario para cumplir con 
                los propósitos para los que los recopilamos, incluido el cumplimiento de cualquier requisito 
                legal, contable o de informes.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">7.1 Períodos de retención típicos:</h3>
              <ul className="mb-4 pl-6">
                <li>Datos de clientes: 7 años después de la última compra</li>
                <li>Datos de marketing: hasta que retire su consentimiento</li>
                <li>Datos de navegación web: 2 años</li>
                <li>Datos de soporte al cliente: 3 años</li>
              </ul>
            </section>

            {/* Sus derechos */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">8. SUS DERECHOS LEGALES</h2>
              <p className="mb-4">Bajo ciertas circunstancias, usted tiene derechos bajo las leyes de protección de datos sobre sus datos personales:</p>
              
              <ul className="mb-4 pl-6">
                <li><strong>Derecho de acceso:</strong> Solicitar copias de sus datos personales</li>
                <li><strong>Derecho de rectificación:</strong> Solicitar que corrijamos cualquier información que crea que es inexacta</li>
                <li><strong>Derecho de supresión:</strong> Solicitar que eliminemos sus datos personales</li>
                <li><strong>Derecho de restricción:</strong> Solicitar que restrinjamos el procesamiento de sus datos personales</li>
                <li><strong>Derecho de portabilidad:</strong> Solicitar que transfiramos sus datos a otra organización</li>
                <li><strong>Derecho de oposición:</strong> Oponerse al procesamiento de sus datos personales</li>
              </ul>
            </section>

            {/* Menores */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">9. MENORES DE EDAD</h2>
              <p className="mb-4">
                Nuestro sitio web no está dirigido a menores de 18 años. No recopilamos intencionalmente 
                información personal de menores de 18 años. Si usted es padre o tutor y cree que su hijo 
                nos ha proporcionado datos personales, contáctenos.
              </p>
            </section>

            {/* Cambios */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">10. CAMBIOS A ESTA POLÍTICA</h2>
              <p className="mb-4">
                Podemos actualizar nuestra política de privacidad de vez en cuando. Le notificaremos cualquier 
                cambio publicando la nueva política de privacidad en esta página y actualizando la fecha de 
                "última actualización" en la parte superior de esta política de privacidad.
              </p>
            </section>

            {/* Contacto */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4">11. CONTACTO</h2>
              <p className="mb-4">
                Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, 
                contáctenos en:
              </p>
              <div className="bg-gray-50 p-6 border-l-4 border-black">
                <p className="mb-2"><strong>Jhony Casierra</strong></p>
                <p className="mb-2">Email: info@jhonycasierra.com</p>
                <p className="mb-2">Teléfono: +57 318 221 8211</p>
                <p className="mb-2">WhatsApp: +57 318 221 8211</p>
                <p>Sitio web: www.jhonycasierra.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}