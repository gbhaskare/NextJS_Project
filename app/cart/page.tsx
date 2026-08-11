import type { Metadata } from "next";
import { CartContent } from "@/components/cart/cart-content";

export const metadata: Metadata = {
  title: "Your cart",
  description: "Review the products in your TechStore cart.",
};

export default function CartPage() {
  return <CartContent />;
}
