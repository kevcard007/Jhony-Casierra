"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/contexts/CartContext";
import { Artwork } from "@/data/artwork";

interface AddToCartButtonProps {
  artwork: Artwork;
}

export default function AddToCartButton({ artwork }: AddToCartButtonProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: artwork.id,
      title: artwork.title,
      price: artwork.price,
      image: artwork.image,
    });
  };

  return (
    <>
      <Button
        className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3"
        size="lg"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          className="border-black hover:bg-gray-100"
        >
          Make an Enquiry
        </Button>

        <Button
          variant="outline"
          className="border-black hover:bg-gray-100"
        >
          Reserve Artwork
        </Button>
      </div>
    </>
  );
}
