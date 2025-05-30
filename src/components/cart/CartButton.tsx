"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/contexts/CartContext";
import { useEffect, useState } from "react";

export default function CartButton() {
  const { items, toggleCart } = useCart();
  const [mounted, setMounted] = useState(false);

  // Wait until component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const itemCount = mounted ? items.reduce((acc, item) => acc + item.quantity, 0) : 0;

  return (
    <button
      className="relative text-gray-300 hover:text-amber-400 transition-colors duration-200"
      onClick={toggleCart}
      aria-label="Shopping Cart"
    >
      <ShoppingCart size={20} />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-amber-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-pulse">
          {itemCount}
        </span>
      )}
    </button>
  );
}