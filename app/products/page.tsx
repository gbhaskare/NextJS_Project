"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";
import { productCategories } from "@/types/product";

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState("2000");

  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesQuery = `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (category === "All" || product.category === category) && product.price <= Number(maxPrice);
  }), [category, maxPrice, query]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <p className="section-kicker">The collection</p>
        <h1 className="section-title">Find your next essential.</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">Search and filter our thoughtfully selected electronics.</p>
      </header>
      <section aria-label="Product filters" className="mt-10 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Search products
          <input className="field" onChange={(event) => setQuery(event.target.value)} placeholder="Headphones, camera..." type="search" value={query} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Category
          <select className="field" onChange={(event) => setCategory(event.target.value)} value={category}>
            <option>All</option>
            {productCategories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Maximum price: ${Number(maxPrice).toLocaleString()}
          <input aria-label="Maximum price" max="2000" min="100" onChange={(event) => setMaxPrice(event.target.value)} step="50" type="range" value={maxPrice} />
        </label>
      </section>
      <p aria-live="polite" className="mt-8 text-sm font-semibold text-slate-600">{visibleProducts.length} products found</p>
      {visibleProducts.length ? (
        <section aria-label="Products" className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </section>
      ) : <p className="mt-5 rounded-xl bg-slate-100 p-8 text-slate-600">No products match those filters. Try adjusting your search.</p>}
    </main>
  );
}
