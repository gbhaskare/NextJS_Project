"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "@/types/product";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [items, setItems] = useState<CartItem[]>([]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );

    return {
      items,
      itemCount,
      subtotal,
      addItem: (product) => {
        setItems((currentItems) => {
          const existingItem = currentItems.find((item) => item.product.id === product.id);
          if (existingItem) {
            return currentItems.map((item) =>
              item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
            );
          }
          return [...currentItems, { product, quantity: 1 }];
        });
      },
      removeItem: (productId) => {
        setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity < 1) {
          setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId));
          return;
        }
        setItems((currentItems) =>
          currentItems.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item,
          ),
        );
      },
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
