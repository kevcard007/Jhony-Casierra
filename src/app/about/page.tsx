import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import CollectionsSection from "@/components/home/CollectionsSection";
import { collections } from "@/data/artwork";

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero Banner */}
      <div className="relative h-[100vh] min-h-[300px] w-full">
        <Image
          src="/images/hero_1.jpg"
          alt="Jhony Casierra en su estudio"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
        
        {/* Contenido del hero opcional */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif mb-4 tracking-wider uppercase">
              Jhony Casierra
            </h1>
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
              Artista contemporáneo colombiano
            </p>
            <div className="w-24 h-px bg-amber-400 mt-6 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-[#1a1a1a] p-4 border border-gray-700">
              <Image
                src="/images/hero_6.jpg"
                alt="Jhony Casierra"
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h2 className="font-serif italic text-white text-2xl mb-4 tracking-wider">Pasado</h2>
            <p className="text-gray-300 leading-relaxed">
              Nací en un pueblo llamado Obando, en el departamento del Valle del Cauca, Colombia. A los ocho años perdí a mi padre en un enfrentamiento entre grupos armados. Después de esa tragedia, mi madre, mis cuatro hermanos y yo nos mudamos a la ciudad de Buga, donde crecí en una vereda llamada Monterrey.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Desde entonces, he vivido gran parte de mi vida en el campo, rodeado de naturaleza. A los 10 años descubrí mi pasión por el arte, los animales y las plantas. Mi primer dibujo lo hice a esa edad, y aún lo guarda mi madre con mucho cariño.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Desde entonces, cada pintura, cada trazo y cada obra que creo nace de lo que siento y de lo que me conecta con el mundo. Pinto desde el alma, con la esperanza de que quien vea mi trabajo también pueda sentir algo profundo. Siempre he tenido una gran empatía por los animales y las plantas, como si existiera una conexión especial entre ellos y yo.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Mi arte es una forma de expresar cómo veo y siento el mundo. <span className="text-amber-400 font-medium">Gracias por estar aquí y ser parte de este viaje.</span>
            </p>
            
            <div className="relative hidden md:block bg-[#1a1a1a] p-6 border border-gray-700 mt-8">
              <div className="grid grid-cols-3 gap-4 py-8">
                <div className="bg-[#2a2a2a] p-2 border border-gray-700">
                  <Image
                    src="/images/artwork1.png"
                    alt="Obra de Jhony Casierra"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-[#2a2a2a] p-2 border border-gray-700">
                  <Image
                    src="/images/artwork2.png"
                    alt="Obra de Jhony Casierra"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-[#2a2a2a] p-2 border border-gray-700">
                  <Image
                    src="/images/artwork3.png"
                    alt="Obra de Jhony Casierra"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="absolute left-0 right-0 bottom-4 text-center">
                <Link 
                  href="/collections" 
                  className="inline-flex items-center bg-[#2a2a2a] border border-gray-700 px-6 py-3 text-xs uppercase tracking-wider text-white hover:bg-[#0a0a0a] hover:border-amber-400 hover:text-amber-400 transition-all duration-200 font-medium"
                >
                  VER TODAS LAS COLECCIONES
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-gray-700" />

        {/* Sección Presente */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="font-serif italic text-white text-2xl mb-4 tracking-wider">Presente</h2>
            <p className="text-gray-300 leading-relaxed">
              Mi estilo de pintura ha evolucionado hacia una fusión libre y fluida de varios medios, eligiendo no limitarme a una sola técnica, sino seleccionando lo que siento que comunicará mejor las ideas que tengo de una manera más orgánica.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Mis pinturas han continuado evolucionando y me he convertido en uno de los artistas contemporáneos colombianos más reconocidos. Actualmente expongo en varias galerías tanto en Colombia como internacionalmente. He sido comisionado para crear piezas que capturen la esencia de paisajes urbanos y rurales, siempre manteniendo esa conexión especial con la naturaleza que me define.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Mi técnica distintiva de <span className="text-amber-400 font-medium">"húmedo sobre húmedo"</span> me permite crear piezas atmosféricas que reflejan no solo lo que veo, sino lo que siento. Cada obra es un diálogo entre mi experiencia personal, mi entorno natural y la energía del momento presente.
            </p>
          </div>
          <div className="md:col-span-1">
            <div className="bg-[#1a1a1a] p-4 border border-gray-700">
              <Image
                src="/images/hero_1.jpg"
                alt="Jhony Casierra trabajando"
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Sección de Filosofía Artística */}
        <div className="mt-16 bg-[#1a1a1a] p-8 border border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6 tracking-wider">
              Mi Filosofía Artística
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              "El arte no es solo lo que vemos, es lo que sentimos. Cada pincelada lleva consigo un pedazo de mi alma, 
              una historia, una emoción que busca conectar con quien la observa."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Pasión</h3>
                <p className="text-gray-400 text-sm">
                  Cada obra nace del corazón y la conexión profunda con la naturaleza
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Autenticidad</h3>
                <p className="text-gray-400 text-sm">
                  Técnicas únicas que reflejan mi visión personal del mundo
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Conexión</h3>
                <p className="text-gray-400 text-sm">
                  Crear puentes emocionales entre el arte y el espectador
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Section */}
      <CollectionsSection
        title="COLECCIONES"
        collections={collections}
      />
    </div>
  );
}