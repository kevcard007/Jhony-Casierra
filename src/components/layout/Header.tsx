"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Menu } from "lucide-react";
import CartButton from "@/components/cart/CartButton";

const navItems = [
  { name: "COMPRAR", href: "/buy" },
  //{ name: "COMISIÓN", href: "/commissions" },
  { name: "ACERCA DE...", href: "/about" },
  { name: "CONTACTO", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Jhony Barber Art"
                width={140}
                height={24}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-medium tracking-wider text-gray-900 hover:text-pk-earth-tone transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://instagram.com" aria-label="Instagram">
              <FaInstagram size={20} className="text-gray-800 hover:text-pk-earth-tone" />
            </Link>
            <Link href="https://tiktok.com" aria-label="TikTok">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
                className="text-gray-800 hover:text-pk-earth-tone fill-current"
              >
                <path d="M224 80.4c-22.1 0-40-17.9-40-40h-40v130.1c0 17.6-14.3 31.9-32 31.9s-32-14.3-32-32 14.3-32 32-32c3.5 0 6.9 0.6 10.1 1.7v-33.9c-3.3-0.5-6.7-0.8-10.1-0.8-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64V120c11.3 7.5 24.9 11.7 40 11.7v-31.3z"/>
              </svg>
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <FaFacebook size={20} className="text-gray-800 hover:text-pk-earth-tone" />
            </Link>
            <CartButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <CartButton />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] pt-10">
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium tracking-wider"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex space-x-4 pt-4">
                    <Link href="https://instagram.com" aria-label="Instagram">
                      <FaInstagram size={20} />
                    </Link>
                    <Link href="https://tiktok.com" aria-label="TikTok">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/>
                        <path d="M20 9V4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8a1 1 0 0 0-1-1h-1"/>
                        <path d="M14 8v5a7 7 0 0 1-7 7v0a7 7 0 0 1-7-7v0a7 7 0 0 1 7-7h5"/>
                      </svg>
                    </Link>
                    <Link href="https://facebook.com" aria-label="Facebook">
                      <FaFacebook size={20} />
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
