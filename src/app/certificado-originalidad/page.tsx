import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function CertificadoOriginalidadPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="uppercase font-serif text-2xl md:text-3xl tracking-wider mb-4 text-white">
            Certificado de Originalidad
          </h1>
          <Separator className="mb-8 max-w-xs mx-auto bg-gray-700" />
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Garantizamos la autenticidad de cada obra con nuestro certificado de originalidad, 
            firmado y sellado personalmente por Jhony Casierra.
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Imagen del Certificado */}
          <div className="bg-[#1a1a1a] p-6 border border-gray-700">
            <div className="bg-white p-8 text-black">
              {/* Mockup del Certificado */}
              <div className="text-center border-4 border-amber-400 p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-serif mb-2">CERTIFICADO DE ORIGINALIDAD</h2>
                  <div className="w-16 h-px bg-amber-400 mx-auto"></div>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm mb-2">Certifico que la obra:</p>
                  <h3 className="text-xl font-bold mb-2">"[TÍTULO DE LA OBRA]"</h3>
                  <p className="text-sm">Dimensiones: [TAMAÑO]</p>
                  <p className="text-sm">Técnica: [TÉCNICA UTILIZADA]</p>
                  <p className="text-sm">Año: [AÑO]</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm mb-4">
                    Es una obra original creada enteramente por el artista
                  </p>
                  <div className="text-center">
                    <div className="inline-block">
                      <p className="font-bold text-lg">Jhony Casierra</p>
                      <div className="border-t-2 border-black w-32 mx-auto mt-2"></div>
                      <p className="text-xs mt-1">Firma del Artista</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end text-xs">
                  <div>
                    <p>Fecha: [FECHA]</p>
                    <p>No. Certificado: [NÚMERO]</p>
                  </div>
                  <div className="w-16 h-16 border-2 border-amber-400 flex items-center justify-center">
                    <p className="text-xs text-center">SELLO<br/>OFICIAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Información */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-xl mb-4 text-white">¿Qué incluye nuestro certificado?</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-amber-400">Firma original</strong> del artista Jhony Casierra</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-amber-400">Sello oficial</strong> del estudio del artista</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-amber-400">Número único</strong> de certificación</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-amber-400">Detalles técnicos</strong> de la obra (dimensiones, técnica, año)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-amber-400">Fecha de emisión</strong> y autenticación</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] p-6 border border-gray-700">
              <h3 className="font-serif text-lg mb-3 text-white">Importancia del Certificado</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                El certificado de originalidad es fundamental para establecer la procedencia y autenticidad de una obra de arte. 
                Este documento no solo protege su inversión, sino que también preserva el valor histórico y artístico de la pieza 
                a lo largo del tiempo.
              </p>
            </div>
          </div>
        </div>

        {/* Proceso de Entrega */}
        <div className="bg-[#1a1a1a] p-8 border border-gray-700 mb-16">
          <h2 className="font-serif text-2xl mb-8 text-center text-white">Proceso de Entrega</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">1</span>
              </div>
              <h3 className="font-medium text-white mb-2">Preparación de la Obra</h3>
              <p className="text-gray-400 text-sm">
                Cada obra es cuidadosamente inspeccionada, fotografiada y documentada antes del empaque.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">2</span>
              </div>
              <h3 className="font-medium text-white mb-2">Certificación</h3>
              <p className="text-gray-400 text-sm">
                El certificado es firmado y sellado por Jhony Casierra con todos los detalles específicos de su obra.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">3</span>
              </div>
              <h3 className="font-medium text-white mb-2">Empaque Seguro</h3>
              <p className="text-gray-400 text-sm">
                La obra y su certificado son empacados profesionalmente para garantizar su llegada en perfectas condiciones.
              </p>
            </div>
          </div>
        </div>

        {/* Garantías */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#2a2a2a] p-6 border border-gray-700">
            <h3 className="font-serif text-lg mb-4 text-white flex items-center">
              <svg className="w-6 h-6 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Garantía de Autenticidad
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Garantizamos al 100% la autenticidad de cada obra. Si por alguna razón se demuestra que una pieza no es auténtica, 
              ofrecemos reembolso completo sin preguntas.
            </p>
          </div>
          <div className="bg-[#2a2a2a] p-6 border border-gray-700">
            <h3 className="font-serif text-lg mb-4 text-white flex items-center">
              <svg className="w-6 h-6 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Soporte Post-Venta
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ofrecemos soporte continuo para cualquier consulta sobre su obra, incluyendo asesoría sobre conservación 
              y mantenimiento del certificado.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="font-serif text-xl mb-4 text-white">¿Interesado en adquirir una obra original?</h2>
          <p className="text-gray-300 mb-6">
            Explore nuestra colección completa de obras originales, todas incluyen certificado de originalidad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/collections" 
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black uppercase tracking-wider text-sm transition-all duration-200 font-medium"
            >
              VER COLECCIONES
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-[#1a1a1a] border border-gray-700 text-white hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-200 font-medium uppercase tracking-wider text-sm"
            >
              CONTACTAR ARTISTA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}