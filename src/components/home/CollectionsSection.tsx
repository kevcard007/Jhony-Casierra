import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Collection {
  id: string;
  title: string;
  image: string;
  link: string;
}

interface CollectionsSectionProps {
  title: string;
  collections: Collection[];
  viewAllLink?: string;
  viewAllText?: string;
  className?: string;
  bgColor?: string;
}

export default function CollectionsSection({
  title,
  collections,
  viewAllLink = "/collections",
  viewAllText = "VIEW ALL AVAILABLE ARTWORK",
  className = "",
  bgColor = "bg-[#333334]",
}: CollectionsSectionProps) {
  return (
    <section className={`py-8 md:py-12 ${bgColor} text-white ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="uppercase text-center font-serif text-xl md:text-2xl tracking-wider mb-8">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection) => (
            <Card key={collection.id} className="bg-transparent border-0 overflow-hidden">
              <CardContent className="p-0">
                <Link href={collection.link}>
                  <div className="relative">
                    <AspectRatio ratio={1}>
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-4">
                      <h3 className="text-white uppercase text-sm md:text-base font-medium tracking-wider">
                        {collection.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {viewAllLink && (
          <div className="flex justify-center mt-8">
            <Link
              href={viewAllLink}
              className="bg-transparent hover:bg-white hover:text-gray-900 text-white border border-white px-4 py-2 text-xs uppercase tracking-wider transition-colors duration-300"
            >
              {viewAllText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
