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
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="mb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif">Carrito de Compras</SheetTitle>
            <SheetClose className="rounded-full hover:bg-gray-100 p-1">
              <X className="h-4 w-4" />
              <span className="sr-only">Cerrado</span>
            </SheetClose>
          </div>
          <Separator />
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[50vh]">
            <p className="text-gray-500 mb-4">Tu Carrito esta Vacio</p>
            <Button asChild>
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

            <Separator className="my-4" />

            <div className="space-y-4">
              <div className="flex justify-between font-medium">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>

              <div className="text-sm text-gray-500">
                Envío e impuestos calculados al finalizar la compra
              </div>

              <div className="flex flex-col space-y-2">
                <Button className="w-full bg-black hover:bg-gray-800">
                  <Link href="/checkout">Continuar con el Pago</Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => clearCart()}
                >
                  Clear Cart
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
    <div className="flex space-x-4">
      <div className="w-20 h-20 relative flex-shrink-0 bg-gray-50">
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
          <Link href={`/artwork/${item.id}`} className="text-sm font-medium hover:underline">
            {item.title}
          </Link>
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-500 hover:text-black transition-colors"
            aria-label="Remove item"
          >
            <Trash size={14} />
          </button>
        </div>

        <div className="text-sm text-gray-600 mb-2">
          {item.price}
        </div>

        <div className="flex items-center mt-auto">
          <div className="flex border border-gray-300">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="px-2 py-1 hover:bg-gray-100"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="flex items-center justify-center w-8">
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 hover:bg-gray-100"
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
