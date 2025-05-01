// app/checkout/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/contexts/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function CheckoutPage() {
  const { items } = useCart();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);
  const [reference, setReference] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setReference(`ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`);
    getToken();
  }, []);

  useEffect(() => {
    const container = document.getElementById('bepay-checkout-container');

    if (!document.getElementById('bepay-widget-script')) {
      const script = document.createElement('script');
      script.src = 'https://stage.bepay.net.co/widgets/webcheckout/js/webcheckout-widget.js';
      script.id = 'bepay-widget-script';
      script.async = true;

      script.onload = () => {
        injectWidget();
      };

      script.onerror = () => {
        console.error("❌ Error cargando script de BePay");
      };

      document.body.appendChild(script);
    } else {
      injectWidget();
    }

    function injectWidget() {
      if (container && signature && reference && token) {
        container.innerHTML = `
          <div
            class="bepay-checkout"
            data-public-key="PK_ecommerce_test_qz7m43lyw0wco4kckgwwgskksk8wsks"
            data-amount="${calculateTotal().toFixed(2)}"
            data-currency="PEN"
            data-reference="${reference}"
            data-signature="${signature}"
            data-redirect-url="http://localhost:3000/thank-you"
            data-language="es"
            data-environment="sandbox"
            data-theme="light"
          ></div>`;

        setTimeout(() => {
          if (window.BepayCheckout?.render) {
            window.BepayCheckout.render();
          }
        }, 300);
      }
    }
  }, [signature, reference, token]);

  const getToken = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/get-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'kevin.cardona@bemovil.net',
          password: 'Migra0000??',
        }),
      });

      const data = await res.json();
      if (data.access_token) {
        setToken(data.access_token);
        generateSignature(data.access_token);
      } else {
        console.error('No se pudo obtener el token de acceso');
      }
    } catch (error) {
      console.error('Error al obtener el token:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateSignature = async (accessToken: string) => {
    try {
      const amount = calculateTotal().toFixed(2);
      const currency = "PEN";
      const user_id = "user123";
      const url_response = `${window.location.origin}/payment-success`;
      const url_confirmation = `${window.location.origin}/api/payment-confirmation`;
      const shop_id = "PK_ART_GALLERY";

      const res = await fetch('/api/generate-signature', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          amount,
          currency,
          reference,
          user_id,
          url_response,
          url_confirmation,
          shop_id,
        }),
      });

      const data = await res.json();
      if (data.signature) {
        setSignature(data.signature);
      }
    } catch (error) {
      console.error('Error al generar la firma:', error);
    }
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
      return total + (price * item.quantity);
    }, 0);
  };

  const formatPrice = (price: number) => {
    return `S/${price.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-serif mb-4">Your cart is empty</h1>
        <p className="mb-6">Add some items to your cart before proceeding to checkout.</p>
        <Button asChild>
          <Link href="/collections">Browse Collections</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-serif mb-6">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-medium mb-4">Order Summary</h2>
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="flex space-x-4">
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
                    <span className="text-sm font-medium">{item.title}</span>
                    <span className="text-gray-600">{item.price}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Quantity: {item.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Separator className="my-4" />
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(calculateTotal())}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-medium text-lg">
              <span>Total</span>
              <span>{formatPrice(calculateTotal())}</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-4">Payment Method</h2>
          {isLoading ? (
            <div className="flex justify-center items-center p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : (
            <div className="bg-white p-6 border border-gray-200 rounded-md">
              <div id="bepay-checkout-container" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}




