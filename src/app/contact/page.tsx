import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="uppercase text-center font-serif text-2xl md:text-3xl tracking-wider mb-4 text-white">
          Contácta a Jhony
        </h1>
        <Separator className="mb-12 max-w-xs mx-auto bg-gray-700" />

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-8">
            <div className="bg-[#1a1a1a] p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
              <h2 className="font-serif text-xl mb-4 text-white">Ponte en contacto</h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Utilice el formulario de contacto a continuación para contactar con Jhony o su equipo.
                Para consultas sobre obras de arte, encargos o cualquier otra pregunta, le responderemos en un plazo de 24 horas.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-colors duration-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-colors duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-colors duration-200 resize-vertical"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-[#1a1a1a] text-white px-6 py-3 text-sm uppercase tracking-wider border border-gray-700 hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-200 font-medium"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-[#1a1a1a] p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
              <h2 className="font-serif text-xl mb-4 text-white">Detalles del contacto</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-amber-400 font-medium min-w-[80px]">Teléfono:</span>
                  <span className="text-gray-300">+57 318 221 8211</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-amber-400 font-medium min-w-[80px]">Email:</span>
                  <a 
                    href="mailto:info@jhonycasierra.com"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    info@jhonycasierra.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-amber-400 font-medium min-w-[80px]">Dirección:</span>
                  <div className="text-gray-300 leading-relaxed">
                    Jhony Casierra Ltd<br />
                    Guadalajara de Buga<br />
                    Monterrey<br />
                    Callejón las Palmas<br />
                    EX13<br />
                    Colombia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}