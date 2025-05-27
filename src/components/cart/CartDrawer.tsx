"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X, Trash, Plus, Minus } from "lucide-react";
import { useCart } from "@/lib/contexts/CartContext";
import type { CartItem } from "@/lib/contexts/CartContext";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);

  // Wait until component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      // Remove ALL non-numeric characters, including dots and commas
      const price = parseInt(item.price.replace(/[^\d]/g, ""));
      return total + (price * item.quantity);
    }, 0);
  };

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString("es-CO", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  const total = calculateTotal();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto bg-[#1a1a1a] text-white border-l border-gray-700">
        <SheetHeader className="mb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-white">Carrito de Compras</SheetTitle>
            <SheetClose className="rounded-full hover:bg-[#2a2a2a] p-1 text-gray-300 hover:text-white transition-colors duration-200">
              <X className="h-4 w-4" />
              <span className="sr-only">Cerrado</span>
            </SheetClose>
          </div>
          <Separator className="bg-gray-700" />
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[50vh]">
            <p className="text-gray-400 mb-4">Tu Carrito está Vacío</p>
            <Button 
              asChild
              className="bg-amber-400 hover:bg-amber-300 text-black font-medium uppercase tracking-wider transition-all duration-200"
            >
              <Link href="/collections">Buscar Colección</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeItem}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
            </div>

            <Separator className="my-4 bg-gray-700" />

            <div className="space-y-4">
              <div className="flex justify-between font-medium text-white">
                <span>Subtotal</span>
                <span className="text-amber-400 font-bold">{formatPrice(total)}</span>
              </div>

              <div className="text-sm text-gray-400">
                Envío e impuestos calculados al finalizar la compra
              </div>

              <div className="flex flex-col space-y-2">
                <Button className="w-full bg-amber-400 hover:bg-amber-300 text-black font-medium uppercase tracking-wider transition-all duration-200">
                  <Link href="/checkout">Continuar con el Pago</Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full bg-[#2a2a2a] border border-gray-700 text-white hover:bg-[#0a0a0a] hover:border-red-600 hover:text-red-400 transition-all duration-200 font-medium uppercase tracking-wider text-sm"
                  onClick={() => clearCart()}
                >
                  Vaciar Carrito
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

function CartItem({
  item,
  onRemove,
  onUpdateQuantity
}: {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}) {
  return (
    <div className="flex space-x-4 p-3 bg-[#2a2a2a] border border-gray-700 hover:border-gray-600 transition-colors duration-200">
      <div className="w-20 h-20 relative flex-shrink-0 bg-[#0a0a0a] border border-gray-700">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex justify-between">
          <Link 
            href={`/artwork/${item.id}`} 
            className="text-sm font-medium text-white hover:text-amber-400 transition-colors duration-200"
          >
            {item.title}
          </Link>
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-red-400 transition-colors duration-200"
            aria-label="Remove item"
          >
            <Trash size={14} />
          </button>
        </div>

        <div className="text-sm text-amber-400 font-medium mb-2">
          {item.price}
        </div>

        <div className="flex items-center mt-auto">
          <div className="flex border border-gray-700 bg-[#1a1a1a]">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="px-2 py-1 text-gray-300 hover:bg-[#2a2a2a] hover:text-white transition-colors duration-200"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="flex items-center justify-center w-8 text-white font-medium">
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 text-gray-300 hover:bg-[#2a2a2a] hover:text-white transition-colors duration-200"
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}