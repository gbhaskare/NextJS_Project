import type { ProductImage } from "@/types/product";

const visuals: Record<ProductImage, { symbol: string; label: string }> = {
  camera: { symbol: "◉", label: "Camera" },
  charger: { symbol: "ϟ", label: "Wireless charger" },
  headphones: { symbol: "◖◗", label: "Headphones" },
  laptop: { symbol: "▱", label: "Laptop" },
  mouse: { symbol: "◒", label: "Computer mouse" },
  phone: { symbol: "▯", label: "Smartphone" },
  speaker: { symbol: "◉", label: "Speaker" },
  ssd: { symbol: "▰", label: "Portable SSD" },
  thermostat: { symbol: "◎", label: "Smart thermostat" },
};

interface ProductVisualProps {
  image: ProductImage;
  className?: string;
}

export function ProductVisual({ image, className = "" }: ProductVisualProps) {
  const visual = visuals[image];
  return (
    <div
      aria-label={`${visual.label} product illustration`}
      className={`grid aspect-square place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 ${className}`}
      role="img"
    >
      <span aria-hidden="true" className="select-none text-7xl font-light text-slate-700 sm:text-8xl">
        {visual.symbol}
      </span>
    </div>
  );
}
