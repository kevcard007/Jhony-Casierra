import Image from "next/image";
import Link from "next/link";

interface HeroBannerProps {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  ctaButtons?: {
    text: string;
    link: string;
  }[];
}

export default function HeroBanner({
  imageUrl,
  title,
  subtitle,
  ctaButtons = [],
}: HeroBannerProps) {
  return (
    <div className="relative h-[70vh] min-h-[500px] w-full">
      <Image
        src={imageUrl}
        alt={title || "Paul Kenton Artwork"}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>

      {/* Content */}
      {ctaButtons.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4 md:p-8">
          {ctaButtons.map((button, index) => (
            <Link
              key={index}
              href={button.link}
              className="bg-white/80 hover:bg-white px-4 py-2 text-xs uppercase tracking-wider text-gray-800 transition-colors duration-300"
            >
              {button.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
