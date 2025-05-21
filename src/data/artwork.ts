export interface Artwork {
  id: string;
  title: string;
  image: string;
  price: string;
  size?: string;
  type?: string;
  slug: string;
}

export interface Collection {
  id: string;
  title: string;
  image: string;
  link: string;
}

// Featured Artwork
export const featuredArtwork: Artwork[] = [
  {
    id: "fa1",
    title: "Monocromatico",
    image: "/images/artwork1.png",
    price: "$300000",
    size: "70 × 50 cm",
    type: "Original Art",
    slug: "sunset-hues-over-venice",
  },
  {
    id: "fa2",
    title: "CAOS",
    image: "/images/artwork2.png",
    price: "$300000",
    size: "60 × 40 cm",
    type: "Original",
    slug: "last-light-in-biarrit",
  },
  {
    id: "fa3",
    title: "SOLEDAD BAJO LA LLUVIA",
    image: "/images/artwork3.png",
    price: "300000",
    size: "30 × 20 cm",
    type: "Original Art",
    slug: "new-york-softens",
  },
  {
    id: "fa4",
    title: "SIN FUTURO",
    image: "/images/artwork4.png",
    price: "300000",
    size: "40 × 30 cm",
    type: "Original Art",
    slug: "westminster-glimpses",
  },
   {
    id: "fa5",
    title: "SIN FUTURO",
    image: "/images/artwork9.png",
    price: "300000",
    size: "76 × 76 cm",
    type: "Original Art",
    slug: "westminster-glimpses",
  },
  
];

// 
export const studioWorks: Artwork[] = [
  {
    id: "sw1",
    title: "BIG APPLE GRANDEUR",
    image: "/images/artwork5.png",
    price: "3475",
    size: "60 × 50 cm",
    type: "Original Art",
    slug: "big-apple-grandeur",
  },
  {
    id: "sw2",
    title: "SONÁMBULO",
    image: "/images/artwork6.png",
    price: "3275",
    size: "60 × 40 cm",
    type: "Original Art",
    slug: "palace-of-westminster",
  },
  {
    id: "sw3",
    title: "TRANQUILIDAD",
    image: "/images/artwork7.png",
    price: "3195",
    size: "60 × 50 cm",
    type: "Original Art",
    slug: "tokyo-by-twilight",
  },
  {
    id: "sw4",
    title: "LO ABSURDO",
    image: "/images/artwork8.png",
    price: "3250",
    size: "120 × 120 cm",
    type: "Original Art",
    slug: "abstract-of-new-york",
  },
  {
    id: "sw5",
    title: "SHINE CITY NEW YORK",
    image: "/images/artwork9.png",
    price: "3350",
    size: "40 × 30 cm",
    type: "Original Art",
    slug: "shine-city-new-york",
  },
];

// Limited Edition Prints
export const limitedEditionPrints: Artwork[] = [
  {
    id: "lep1",
    title: "MANHATTAN SKYLINE",
    image: "/images/artwork10.png",
    price: "295",
    size: "35 × 25 cm",
    type: "Limited Edition Print",
    slug: "manhattan-skyline",
  },
  {
    id: "lep2",
    title: "VENETIAN ROMANCE",
    image: "/images/artwork11.png",
    price: "345",
    size: "35 × 25 cm",
    type: "Limited Edition Print",
    slug: "venetian-romance",
  },
  {
    id: "lep3",
    title: "LONDON FUSION",
    image: "/images/artwork4.png",
    price: "345",
    size: "35 × 25 cm",
    type: "Limited Edition Print",
    slug: "london-fusion",
  },
  {
    id: "lep4",
    title: "PARIS AT DUSK",
    image: "/images/artwork3.png",
    price: "295",
    size: "60 × 60 cm",
    type: "Limited Edition Print",
    slug: "paris-at-dusk",
  },
  {
    id: "lep5",
    title: "VIBRANT BARCELONA",
    image: "/images/artwork1.png",
    price: "295",
    size: "60 × 60 cm",
    type: "Limited Edition Print",
    slug: "vibrant-barcelona",
  },
];

// Collections
export const collections: Collection[] = [
  {
    id: "col1",
    title: "LONDON",
    image: "/images/collection1.png",
    link: "/collections/london",
  },
  {
    id: "col2",
    title: "NEW YORK",
    image: "/images/collection2.png",
    link: "/collections/new-york",
  },
  {
    id: "col3",
    title: "PARIS",
    image: "/images/collection3.png",
    link: "/collections/paris",
  },
  {
    id: "col4",
    title: "CITYSCAPES",
    image: "/images/collection4.png",
    link: "/collections/cityscapes",
  },
];
