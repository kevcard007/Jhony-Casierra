// app/checkout/thank-you/page.tsx
"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/lib/contexts/CartContext';

export default function ThankYouPage() {
  const { clearCart } = useCart();
  
  // Limpiar el carrito después de una compra exitosa
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">¡Gracias por tu compra!</h1>
        
        <div className="mb-8">
          <svg
            className="w-24 h-24 text-green-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          
          <p className="text-lg mb-2">
            Tu pedido ha sido procesado exitosamente.
          </p>
          <p className="text-gray-600 mb-4">
            Te hemos enviado un correo electrónico con todos los detalles de tu compra.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/account/orders"
            className="block w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Ver mis pedidos
          </Link>
          
          <Link
            href="/"
            className="block w-full bg-white text-black border border-black py-3 px-4 rounded-md hover:bg-gray-100 transition duration-200"
          >
            Volver a la tienda
          </Link>
        </div>
      </div>
    </div>
  );
}