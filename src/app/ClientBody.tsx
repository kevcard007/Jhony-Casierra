"use client";

import { useEffect, useState } from "react";
import { CartProvider } from "@/lib/contexts/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      <CartProvider>
        {children}
        <CartDrawer />
      </CartProvider>
    </body>
  );
}
