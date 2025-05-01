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
    title: "SILENCIO GLACIAL",
    image: "/images/artwork1.jpeg",
    price: "$300.000",
    size: "76 × 76 cm",
    type: "Original Art",
    slug: "sunset-hues-over-venice",
  },
  {
    id: "fa2",
    title: "CIUDAD AMARILLA",
    image: "/images/artwork3.jpeg",
    price: "$300.000",
    size: "76 × 76 cm",
    type: "Original",
    slug: "last-light-in-biarrit",
  },
  {
    id: "fa3",
    title: "SOLEDAD BAJO LA LLUVIA",
    image: "/images/artwork2.jpeg",
    price: "$300.000",
    size: "76 × 76 cm",
    type: "Original Art",
    slug: "new-york-softens",
  },
  {
    id: "fa4",
    title: "SIN FUTURO",
    image: "/images/artwork4.jpeg",
    price: "$300.000",
    size: "76 × 76 cm",
    type: "Original Art",
    slug: "westminster-glimpses",
  },
  {
    id: "fa5",
    title: "ECO DEL HIELO",
    image: "/images/artwork1.jpeg",
    price: "$300.000",
    size: "76 × 76 cm",
    type: "Original Art",
    slug: "manhattan-glow",
  },
];

// Large Studio Works
export const studioWorks: Artwork[] = [
  {
    id: "sw1",
    title: "BIG APPLE GRANDEUR",
    image: "/images/artwork2.jpeg",
    price: "£3,475",
    size: "120 × 120 cm",
    type: "Original Art",
    slug: "big-apple-grandeur",
  },
  {
    id: "sw2",
    title: "PALACE OF WESTMINSTER",
    image: "/images/artwork4.jpeg",
    price: "£3,275",
    size: "120 × 90 cm",
    type: "Original Art",
    slug: "palace-of-westminster",
  },
  {
    id: "sw3",
    title: "TOKYO BY TWILIGHT",
    image: "/images/artwork3.jpeg",
    price: "£3,195",
    size: "120 × 90 cm",
    type: "Original Art",
    slug: "tokyo-by-twilight",
  },
  {
    id: "sw4",
    title: "ABSTRACT OF NEW YORK",
    image: "/images/artwork1.jpeg",
    price: "£3,250",
    size: "120 × 120 cm",
    type: "Original Art",
    slug: "abstract-of-new-york",
  },
  {
    id: "sw5",
    title: "SHINE CITY NEW YORK",
    image: "/images/artwork2.jpeg",
    price: "£3,350",
    size: "120 × 90 cm",
    type: "Original Art",
    slug: "shine-city-new-york",
  },
];

// Limited Edition Prints
export const limitedEditionPrints: Artwork[] = [
  {
    id: "lep1",
    title: "MANHATTAN SKYLINE",
    image: "/images/artwork2.jpeg",
    price: "£295",
    size: "60 × 60 cm",
    type: "Limited Edition Print",
    slug: "manhattan-skyline",
  },
  {
    id: "lep2",
    title: "VENETIAN ROMANCE",
    image: "/images/artwork1.jpeg",
    price: "£345",
    size: "60 × 60 cm",
    type: "Limited Edition Print",
    slug: "venetian-romance",
  },
  {
    id: "lep3",
    title: "LONDON FUSION",
    image: "/images/artwork4.jpeg",
    price: "£345",
    size: "60 × 60 cm",
    type: "Limited Edition Print",
    slug: "london-fusion",
  },
  {
    id: "lep4",
    title: "PARIS AT DUSK",
    image: "/images/artwork3.jpeg",
    price: "£295",
    size: "60 × 60 cm",
    type: "Limited Edition Print",
    slug: "paris-at-dusk",
  },
  {
    id: "lep5",
    title: "VIBRANT BARCELONA",
    image: "/images/artwork1.jpeg",
    price: "£295",
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
    image: "/images/artwork4.jpeg",
    link: "/collections/london",
  },
  {
    id: "col2",
    title: "NEW YORK",
    image: "/images/artwork2.jpeg",
    link: "/collections/new-york",
  },
  {
    id: "col3",
    title: "PARIS",
    image: "/images/artwork3.jpeg",
    link: "/collections/paris",
  },
  {
    id: "col4",
    title: "CITYSCAPES",
    image: "/images/artwork1.jpeg",
    link: "/collections/cityscapes",
  },
];
