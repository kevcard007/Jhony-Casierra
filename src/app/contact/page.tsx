import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="uppercase text-center font-serif text-2xl md:text-3xl tracking-wider mb-4">
        Contácta a Jhony
      </h1>
      <Separator className="mb-12 max-w-xs mx-auto" />

      <div className="max-w-2xl mx-auto">
        <div className="grid gap-8">
          <div className="bg-white p-6 shadow-sm">
            <h2 className="font-serif text-xl mb-4">Ponte en contacto</h2>
            <p className="mb-6">
              Utilice el formulario de contacto a continuación para contactar con Paul o su equipo.
              Para consultas sobre obras de arte, encargos o cualquier otra pregunta, le responderemos en un plazo de 24 horas.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#333334] text-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-black transition-colors duration-300"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white p-6 shadow-sm">
            <h2 className="font-serif text-xl mb-4">Detalles del contacto</h2>
            <div className="space-y-3">
              <p>
                <strong>Telefono:</strong> +57 318 221 8211
              </p>
              <p>
                <strong>Email:</strong> info@jhonycasierra.com
              </p>
              <p>
                <strong>Dirección:</strong><br />
                Jhony Casierra Ltd<br />
                Guadalajara de Buga<br />
                Monterrey<br />
                Callejon las Palmas<br />
                EX13<br />
                Colombia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
