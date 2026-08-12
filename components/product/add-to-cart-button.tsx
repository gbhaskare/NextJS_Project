"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";
import type { Product } from "@/types/product";
import { useRouter } from "next/navigation";

export function AddToCartButton({ product }: Readonly<{ product: Product }>) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const router = useRouter();

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => {
      addItem(product);
      router.push("/cart");
    }, 3000);
    window.setTimeout(() => setAdded(false), 1000);
  };


  return (
    <button className="button-primary w-full sm:w-auto" onClick={handleAdd} type="button">
      {added ? "Added to cart" : "Add to cart"}
    </button>
  );
}
