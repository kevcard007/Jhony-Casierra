import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import CollectionsSection from "@/components/home/CollectionsSection";
import { collections } from "@/data/artwork";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[300px] w-full">
        <Image
          src="/images/hero_1.jpg"
          alt="Paul Kenton in New York"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Carousel Indicators - Static for this demo */}
      <div className="bg-white flex justify-center py-3">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-gray-800' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Image
              src="/images/hero_1.jpg"
              alt="Paul Kenton"
              width={400}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="md:col-span-2 space-y-6">
            <h2 className="pk-heading text-2xl">Pasado</h2>
            <p>
            Nací en un pueblo llamado Obando, en el departamento del Valle del Cauca, Colombia. A los ocho años perdí a mi padre en un enfrentamiento entre grupos armados. Después de esa tragedia, mi madre, mis cuatro hermanos y yo nos mudamos a la ciudad de Buga, donde crecí en una vereda llamada Monterrey.
            </p>
            <p>
            Desde entonces, he vivido gran parte de mi vida en el campo, rodeado de naturaleza. A los 10 años descubrí mi pasión por el arte, los animales y las plantas. Mi primer dibujo lo hice a esa edad, y aún lo guarda mi madre con mucho cariño.
            </p>
            <p>
            Desde entonces, cada pintura, cada trazo y cada obra que creo nace de lo que siento y de lo que me conecta con el mundo. Pinto desde el alma, con la esperanza de que quien vea mi trabajo también pueda sentir algo profundo. Siempre he tenido una gran empatía por los animales y las plantas, como si existiera una conexión especial entre ellos y yo.
            </p>
            <p>
            Mi arte es una forma de expresar cómo veo y siento el mundo. Gracias por estar aquí y ser parte de este viaje.
            </p>
            <div className="relative hidden md:block">
              <div className="grid grid-cols-3 gap-4 py-8">
                <Image
                  src="/images/artwork1.png"
                  alt="Paul Kenton artwork"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
                <Image
                  src="/images/artwork2.png"
                  alt="Paul Kenton artwork"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
                <Image
                  src="/images/artwork3.png"
                  alt="Paul Kenton artwork"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute left-0 right-0 bottom-0 text-center">
                <Link href="#" className="pk-read-more bg-white">
                  SCROLL HASTA EL FINAL DE LA LISTA
                </Link>
              </div>
            </div>

            <h2 className="pk-heading text-2xl mt-10">Presente</h2>
            <p>
              Paul's painting style has evolved into a free flowing fusion of various media, choosing not to be constrained at any one medium, simply picking what he feels would communicate the ideas he has in a more fluid way.
            </p>
            <p>
              Paul's paintings have continued to evolve and Paul has become one of Britain's most successful and sought after contemporary artists. Paul is currently exhibiting throughout the UK in over forty galleries. He was commissioned to paint three large pieces for the 2012 London Olympic games; the paintings were to capture the mood and excitement of London and the Olympic park during the games; and were viewed by many of the visiting athletes. Paul was the contributing artist for "The Big Egg Hunt 2012" which was one of the largest and most interactive public art displays London has ever seen.
            </p>
          </div>
        </div>
      </div>

      {/* Collections Section */}
      <CollectionsSection
        title="COLLECTIONS"
        collections={collections}
      />
    </div>
  );
}
