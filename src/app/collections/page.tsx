import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { collections } from "@/data/artwork";
import { Separator } from "@/components/ui/separator";

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="uppercase text-center font-serif text-2xl md:text-3xl tracking-wider mb-4">
        Collections
      </h1>
      <Separator className="mb-12 max-w-xs mx-auto" />

      <div className="grid gap-8 md:gap-12">
        {/* Still Life Collection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <Image
              src="/images/artwork1.jpeg"
              alt="Still Life Collection"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="pk-heading text-xl md:text-2xl mb-4">Still Life Collection</h2>
            <p className="text-xs text-gray-500 mb-4">Published on Oct 5, 2024</p>
            <p className="mb-6">
              Check out below a selection of still life art original paintings and prints by
              Paul Kenton.
            </p>
            <Link href="/collections/still-life" className="pk-read-more">
              READ MORE
            </Link>
          </div>
        </div>

        {/* Landscapes Collection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <Image
              src="/images/artwork3.jpeg"
              alt="Landscapes Collection"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="pk-heading text-xl md:text-2xl mb-4">Landscapes Collection</h2>
            <p className="text-xs text-gray-500 mb-4">Published on Mar 24, 2024</p>
            <p className="mb-6">
              Explore below Paul's available original landscape paintings.
            </p>
            <Link href="/collections/landscapes" className="pk-read-more">
              READ MORE
            </Link>
          </div>
        </div>

        {/* Abstract Collection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <Image
              src="/images/artwork2.jpeg"
              alt="Abstract Collection"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="pk-heading text-xl md:text-2xl mb-4">Abstract Collection</h2>
            <p className="text-xs text-gray-500 mb-4">Published on Mar 24, 2023</p>
            <p className="mb-6">
              Check out below a selection of abstract art original paintings and prints by
              Paul Kenton.
            </p>
            <Link href="/collections/abstract" className="pk-read-more">
              READ MORE
            </Link>
          </div>
        </div>

        {/* City Collections */}
        <div className="mt-12">
          <h2 className="uppercase text-center font-serif text-xl md:text-2xl tracking-wider mb-8">
            City Collections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <div key={collection.id} className="group">
                <Link href={collection.link}>
                  <div className="relative">
                    <AspectRatio ratio={1}>
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-4">
                        <h3 className="text-white uppercase text-sm md:text-base font-medium tracking-wider">
                          {collection.title}
                        </h3>
                      </div>
                    </AspectRatio>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
