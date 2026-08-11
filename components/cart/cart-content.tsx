"use client";

import Link from "next/link";
import { ProductVisual } from "@/components/product/product-visual";
import { useCart } from "@/context/cart-context";
import { formatCurrency } from "@/lib/format";

export function CartContent() {
  const { items, removeItem, subtotal, updateQuantity } = useCart();

  if (!items.length) return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
      <p className="section-kicker">Your cart</p>
      <h1 className="section-title">Nothing here yet.</h1>
      <p className="mt-4 text-slate-600">Find something useful for your everyday setup.</p>
      <Link className="button-primary mt-8" href="/products">Explore products</Link>
    </main>
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="section-title">Your cart</h1>
      <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_22rem]">
        <section aria-label="Cart items" className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5">
          {items.map(({ product, quantity }) => <article className="grid grid-cols-[5rem_1fr] gap-5 py-5 sm:grid-cols-[7rem_1fr_auto]" key={product.id}>
            <ProductVisual image={product.image} />
            <div>
              <p className="text-sm font-bold text-blue-700">{product.category}</p>
              <h2 className="mt-1 font-bold text-slate-950">{product.name}</h2>
              <p className="mt-1 font-bold">{formatCurrency(product.price)}</p>
              <div className="mt-4 flex items-center gap-3">
                <label className="sr-only" htmlFor={`quantity-${product.id}`}>Quantity for {product.name}</label>
                <button aria-label={`Decrease ${product.name} quantity`} className="quantity-button" onClick={() => updateQuantity(product.id, quantity - 1)} type="button">−</button>
                <input className="w-10 text-center font-bold" id={`quantity-${product.id}`} min="1" onChange={(event) => updateQuantity(product.id, Number(event.target.value))} type="number" value={quantity} />
                <button aria-label={`Increase ${product.name} quantity`} className="quantity-button" onClick={() => updateQuantity(product.id, quantity + 1)} type="button">+</button>
              </div>
            </div>
            <div className="col-span-2 flex items-start justify-between gap-4 sm:col-span-1 sm:flex-col sm:items-end">
              <p className="font-black text-slate-950">{formatCurrency(product.price * quantity)}</p>
              <button className="text-sm font-bold text-red-700 hover:text-red-900" onClick={() => removeItem(product.id)} type="button">Remove</button>
            </div>
          </article>)}
        </section>
        <aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white">
          <h2 className="text-xl font-bold">Order summary</h2>
          <div className="mt-6 flex justify-between text-slate-300"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
          <div className="mt-3 flex justify-between text-slate-300"><span>Shipping</span><span>Free</span></div>
          <div className="mt-6 flex justify-between border-t border-slate-700 pt-5 text-lg font-black"><span>Total</span><span>{formatCurrency(subtotal)}</span></div>
          <button className="button-primary mt-7 w-full" type="button">Checkout (demo)</button>
          <p className="mt-3 text-center text-xs leading-5 text-slate-400">Checkout is not implemented in this frontend demonstration.</p>
        </aside>
      </div>
    </main>
  );
}
