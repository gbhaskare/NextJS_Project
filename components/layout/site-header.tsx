"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { useCart } from "@/context/cart-context";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const { name, isGuest } = useAuth();

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link className="text-xl font-black tracking-tight text-slate-950" href="/">
          Tech<span className="text-blue-600">Store</span>
        </Link>
        <nav aria-label="Primary navigation" className="order-3 flex w-full items-center gap-5 text-sm font-semibold text-slate-600 sm:order-none sm:w-auto">
          {navigation.map((item) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              className={pathname === item.href ? "text-blue-700" : "hover:text-slate-950"}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <Link className="text-slate-600 hover:text-slate-950" href="/login">
            {name ? `Hi, ${name}` : isGuest ? "Guest" : "Log in"}
          </Link>
          <Link aria-label={`Cart, ${itemCount} items`} className="rounded-full bg-slate-950 px-3 py-2 text-white hover:bg-blue-700" href="/cart">
            Cart ({itemCount})
          </Link>
        </div>
      </div>
    </header>
  );
}
