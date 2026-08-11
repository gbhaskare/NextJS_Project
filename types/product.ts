export const productCategories = [
  "Audio",
  "Computing",
  "Mobile",
  "Photography",
  "Smart Home",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  shortDescription: string;
  description: string;
  image: ProductImage;
  specifications: readonly ProductSpecification[];
  featured: boolean;
}

export type ProductImage =
  | "camera"
  | "charger"
  | "headphones"
  | "laptop"
  | "mouse"
  | "phone"
  | "speaker"
  | "ssd"
  | "thermostat";
