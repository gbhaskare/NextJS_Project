"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";
import type { Product } from "@/types/product";

export function AddToCartButton({ product }: Readonly<{ product: Product }>) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <button className="button-primary w-full sm:w-auto" onClick={handleAdd} type="button">
      {added ? "Added to cart" : "Add to cart"}
    </button>
  );
}
