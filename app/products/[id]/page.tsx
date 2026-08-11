import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/product/add-to-cart-button";
import { ProductCard } from "@/components/product/product-card";
import { ProductVisual } from "@/components/product/product-visual";
import { products } from "@/data/products";
import { formatCurrency } from "@/lib/format";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

function findProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = findProduct((await params).id);
  if (!product) return { title: "Product not found" };
  return { title: product.name, description: product.shortDescription };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = findProduct((await params).id);
  if (!product) notFound();
  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link className="text-sm font-bold text-blue-700 hover:text-blue-900" href="/products">← Back to products</Link>
      <article className="mt-7 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductVisual className="shadow-sm" image={product.image} />
        <div className="flex flex-col items-start justify-center">
          <p className="section-kicker">{product.category}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{product.name}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{product.description}</p>
          <p className="mt-7 text-3xl font-black text-slate-950">{formatCurrency(product.price)}</p>
          <div className="mt-7"><AddToCartButton product={product} /></div>
          <section aria-labelledby="specifications-heading" className="mt-10 w-full border-t border-slate-200 pt-8">
            <h2 id="specifications-heading" className="text-xl font-bold text-slate-950">Specifications</h2>
            <dl className="mt-4 grid divide-y divide-slate-200 rounded-xl border border-slate-200 px-5">
              {product.specifications.map((specification) => (
                <div className="flex justify-between gap-8 py-4" key={specification.label}>
                  <dt className="font-semibold text-slate-600">{specification.label}</dt>
                  <dd className="text-right font-bold text-slate-900">{specification.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </article>
      {relatedProducts.length > 0 && <section aria-labelledby="related-heading" className="mt-20">
        <h2 id="related-heading" className="section-title text-3xl">You may also like</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{relatedProducts.map((item) => <ProductCard key={item.id} product={item} />)}</div>
      </section>}
    </main>
  );
}
