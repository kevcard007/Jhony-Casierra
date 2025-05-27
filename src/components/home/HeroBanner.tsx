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
    <div className="relative h-[70vh] min-h-[500px] w-full bg-[#0a0a0a]">
      <Image
        src={imageUrl}
        alt={title || "Jhony Casierra Artwork"}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark gradient overlay - más intenso para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70"></div>

      {/* Content */}
      {(title || subtitle) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            {title && (
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif mb-4 tracking-wider uppercase">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      {/* CTA Buttons */}
      {ctaButtons.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-3 p-4 md:p-8">
          {ctaButtons.map((button, index) => (
            <Link
              key={index}
              href={button.link}
              className="bg-[#1a1a1a]/90 hover:bg-[#2a2a2a] border border-gray-700 hover:border-amber-400 px-6 py-3 text-xs md:text-sm lg:text-base uppercase tracking-wider text-white hover:text-amber-400 transition-all duration-300 font-medium backdrop-blur-sm"
            >
              {button.text}
            </Link>
          ))}
        </div>
      )}

      {/* Decorative elements - opcional */}
      <div className="absolute bottom-4 left-4 hidden md:block">
        <div className="w-12 h-px bg-amber-400"></div>
        <div className="w-8 h-px bg-amber-400 mt-2"></div>
      </div>
      
      <div className="absolute bottom-4 right-4 hidden md:block">
        <div className="w-12 h-px bg-amber-400 ml-auto"></div>
        <div className="w-8 h-px bg-amber-400 mt-2 ml-auto"></div>
      </div>
    </div>
  );
}