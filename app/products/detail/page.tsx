import Link from "next/link";
import { AddToCartButton } from "@/components/product/add-to-cart-button";
import { ProductVisual } from "@/components/product/product-visual";
import { products } from "@/data/products";
import { formatCurrency } from "@/lib/format";

export default function ProductDetailPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="section-kicker">Product details</p>
        <h1 className="section-title">Explore every item in the collection.</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Browse the full TechStore lineup with product highlights, quick specs, and pricing in one place.
        </p>
      </header>

      <div className="mt-10 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
        <p className="text-sm font-semibold text-slate-700">{products.length} products available</p>
        <Link className="text-sm font-bold text-blue-700 hover:text-blue-900" href="/products">
          Browse product list →
        </Link>
      </div>

      <div className="mt-8 space-y-8">
        {products.map((product) => (
          <article
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            key={product.id}
          >
            <div className="grid gap-8 p-5 sm:p-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:p-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                    {product.category}
                  </span>
                  {product.featured && (
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
                      Featured
                    </span>
                  )}
                </div>

                <ProductVisual className="rounded-2xl border border-slate-200 shadow-sm" image={product.image} />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-sm font-semibold text-slate-500">{product.shortDescription}</p>
                  </div>
                  <p className="text-2xl font-black text-slate-950">{formatCurrency(product.price)}</p>
                </div>

                <p className="mt-5 text-base leading-7 text-slate-600">{product.description}</p>

                <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
                  <span className="rounded-full bg-slate-100 px-3 py-1.5">Free shipping</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5">2-year support</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5">Easy returns</span>
                </div>

                <div className="mt-7">
                  <AddToCartButton product={product} />
                </div>

                <section aria-labelledby={`${product.id}-specifications`} className="mt-8 border-t border-slate-200 pt-6">
                  <h3 id={`${product.id}-specifications`} className="text-lg font-bold text-slate-950">
                    Specifications
                  </h3>
                  <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                    {product.specifications.map((specification) => (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3" key={specification.label}>
                        <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                          {specification.label}
                        </dt>
                        <dd className="mt-1 text-sm font-bold text-slate-900">{specification.value}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
