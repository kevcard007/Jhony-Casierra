// app/checkout/page.tsx
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/contexts/CartContext';
import { Separator } from "@/components/ui/separator";
import PayUForm from './componentes/PayUForm';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function CheckoutPage() {
  const { items, removeItem, updateQuantity } = useCart();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  // Wait until component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Si el carrito está vacío, redirigimos a la página principal
  useEffect(() => {
    if (mounted && items.length === 0) {
      router.push('/');
    }
  }, [items, router, mounted]);
  
  // Calcular el total
  const calculateTotal = () => {
    return items.reduce((total, item) => {
      // Extract the numerical value from the price string (e.g., "£2,575" -> 2575)
      const price = parseInt(item.price.replace(/[^\d]/g, ""));
      return total + (price * item.quantity);
    }, 0);
  };

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString("es-CO", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  // Si no está montado, mostramos un marcador de posición
  if (!mounted) {
    return <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="border rounded-md p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-gray-200 rounded"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>;
  }

  // Si el carrito está vacío, mostramos un mensaje
  if (items.length === 0) {
    return <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold mb-4">Tu carrito está vacío</h1>
      <p className="text-gray-600 mb-8">Agrega algunos productos antes de proceder al pago.</p>
      <Link href="/collections" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
        Ver Colecciones
      </Link>
    </div>;
  }

  const total = calculateTotal();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Pagar</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Columna de resumen del pedido */}
        <div>
          <h2 className="text-xl font-medium mb-4">Resumen del Pedido</h2>
          <div className="border rounded-md p-4 mb-4">
            {/* Renderizamos cada producto del carrito */}
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex items-center">
                  <div className="w-20 h-20 relative flex-shrink-0 bg-gray-50 mr-4">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium">{item.title}</p>
                    <div className="flex items-center mt-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-500 px-2 text-sm border border-gray-300 rounded-l"
                      >
                        -
                      </button>
                      <span className="text-sm px-3 border-t border-b border-gray-300">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-500 px-2 text-sm border border-gray-300 rounded-r"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 ml-4 text-sm"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <p className="font-medium">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Separator className="my-4" />
            
            {/* Subtotal, envío, total */}
            <div className="space-y-2">
              <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <p>{formatPrice(total)}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>Envío</p>
                <p>Gratis</p>
              </div>
              <div className="flex justify-between font-medium">
                <p>Total</p>
                <p>{formatPrice(total)}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Columna de método de pago */}
        <div>
          <h2 className="text-xl font-medium mb-4">Método de Pago</h2>
          
          <PayUForm 
            amount={total} // El monto total del carrito
            productName={items.length === 1 
              ? items[0].title 
              : `Orden de ${items.length} productos`}
            buyerName="" // Esto puede venir de un estado o input
            buyerEmail="" // Esto puede venir de un estado o input
            reference={`order-${Date.now()}`} // Referencia única para esta orden
          />*
          
          
        </div>
      </div>
    </div>
  );
}