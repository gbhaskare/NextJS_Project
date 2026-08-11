import Link from "next/link";
import { formatCurrency } from "@/lib/format";
import type { Product } from "@/types/product";
import { AddToCartButton } from "./add-to-cart-button";
import { ProductVisual } from "./product-visual";

export function ProductCard({ product }: Readonly<{ product: Product }>) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link aria-label={`View ${product.name}`} href={`/products/${product.id}`}>
        <ProductVisual image={product.image} />
      </Link>
      <div className="flex flex-1 flex-col px-1 pt-5">
        <p className="text-sm font-semibold text-blue-700">{product.category}</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-900">
          <Link className="hover:text-blue-700" href={`/products/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-lg font-bold text-slate-950">{formatCurrency(product.price)}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}
