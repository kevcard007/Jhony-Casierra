import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ArtworkCardProps {
  id: string;
  title: string;
  image: string;
  price: string;
  size?: string;
  type?: string;
  slug?: string;
}

export default function ArtworkCard({
  id,
  title,
  image,
  price,
  size,
  type = "Original Art",
  slug = "#"
}: ArtworkCardProps) {
  return (
    <div className="artwork-card group">
      <Link href={`/artwork/${slug}`} className="block">
        <div className="relative p-3 bg-white">
          <AspectRatio ratio={1}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </AspectRatio>
        </div>
        <div className="p-3 text-center">
          <h3 className="artwork-title">{title}</h3>
          {size && <p className="text-xs text-gray-500 mt-1">{size}</p>}
          <p className="artwork-price mt-1">{price}</p>
        </div>
      </Link>
    </div>
  );
}
