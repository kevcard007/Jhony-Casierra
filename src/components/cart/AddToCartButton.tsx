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
    <div className="space-y-4">
      <Button
        className="w-full bg-amber-400 hover:bg-amber-300 text-black font-medium py-3 uppercase tracking-wider text-sm transition-all duration-200 border-0"
        size="lg"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </Button>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          className="bg-[#1a1a1a] border border-gray-700 text-white hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-200 font-medium uppercase tracking-wider text-xs"
        >
          Hacer una consulta
        </Button>

        <Button
          variant="outline"
          className="bg-[#1a1a1a] border border-gray-700 text-white hover:bg-[#2a2a2a] hover:border-amber-400 hover:text-amber-400 transition-all duration-200 font-medium uppercase tracking-wider text-xs"
        >
          Reservar Obra de Arte
        </Button>
      </div>
    </div>
  );
}