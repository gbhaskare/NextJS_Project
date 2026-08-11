import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Modern electronics for daily life",
};

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
  return (
    <main>
      <section aria-labelledby="hero-heading" className="bg-slate-950 text-white">
        <div className="mx-auto grid min-h-[66vh] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Welcome to TechStore</p>
            <h1 id="hero-heading" className="mt-5 max-w-2xl text-5xl font-black tracking-tight sm:text-6xl">
              Technology that fits your everyday.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Explore considered electronics for focused work, better listening, and a more connected home.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link className="button-primary" href="/products">Shop all products</Link>
              <Link className="button-secondary border-slate-600 bg-transparent text-white hover:border-blue-400 hover:bg-slate-800" href="/why-techstore">Why TechStore</Link>
            </div>
          </div>
          <div aria-hidden="true" className="grid aspect-square max-w-md place-items-center justify-self-center rounded-[2.5rem] border border-slate-700 bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-slate-900 shadow-2xl">
            <div className="grid h-52 w-52 place-items-center rounded-3xl border border-white/20 bg-white/10 text-8xl backdrop-blur">◌</div>
          </div>
        </div>
      </section>
      <section aria-labelledby="featured-heading" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="section-kicker">Curated picks</p>
            <h2 id="featured-heading" className="section-title">Featured products</h2>
          </div>
          <Link className="font-bold text-blue-700 hover:text-blue-900" href="/products">Browse the full collection →</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  );
}
